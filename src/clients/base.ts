import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { ApiClientConfig, ApiError, QueryOptions } from '../types';
import { logRequest, logResponse, logError } from '../utils/debug';

export class BaseApiClient {
  protected client: AxiosInstance;
  protected config: ApiClientConfig;

  constructor(config: ApiClientConfig) {
    this.config = config;
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 30000,
      headers: {
        'Content-Type': 'application/json',
        ...(this.config.apiKey && { Authorization: `Bearer ${this.config.apiKey}` }),
      },
    });

    this.setupInterceptors();
  }

  private async getAccessToken(): Promise<string> {
    const { grantTypeUsername, grantTypePassword, grantTypeFirmno, grantTypeBasicAuth, baseURL } =
      this.config;

    if (
      !grantTypeUsername ||
      !grantTypePassword ||
      !grantTypeFirmno ||
      !grantTypeBasicAuth ||
      !baseURL
    ) {
      throw new Error('Missing grant type configuration for token retrieval.');
    }

    const data = `grant_type=password&username=${grantTypeUsername}&Firmno=${grantTypeFirmno}&password=${grantTypePassword}`;

    const tokenConfig = {
      method: 'post',
      url: `${baseURL}/token`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${grantTypeBasicAuth}`,
      },
      data: data,
    };

    try {
      const response = await axios(tokenConfig);
      return response.data.access_token;
    } catch (error) {
      throw new Error(`Failed to retrieve access token: ${(error as Error).message}`);
    }
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      async config => {
        // Only try to get access token if we have grant type configuration
        const hasGrantTypeConfig =
          this.config.grantTypeUsername &&
          this.config.grantTypePassword &&
          this.config.grantTypeFirmno &&
          this.config.grantTypeBasicAuth;

        if (!this.config.apiKey && !config.headers['Authorization'] && hasGrantTypeConfig) {
          const accessToken = await this.getAccessToken();
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        } else if (this.config.apiKey && !config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${this.config.apiKey}`;
        }
        return this.handleRequestSuccess(config);
      },
      error => this.handleRequestError(error)
    );

    // Response interceptor
    this.client.interceptors.response.use(
      response => this.handleResponseSuccess(response),
      async error => this.handleResponseError(error)
    );
  }

  private handleRequestSuccess(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    logRequest(config);
    return config;
  }

  private handleRequestError(error: unknown): Promise<never> {
    logError(error);
    return Promise.reject(this.handleError(error));
  }

  private handleResponseSuccess(response: AxiosResponse): AxiosResponse {
    logResponse(response);
    return response;
  }

  private async handleResponseError(error: unknown): Promise<never> {
    logError(error);
    return Promise.reject(this.handleError(error));
  }

  private handleError(error: unknown): ApiError {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      const responseData = axiosError.response.data as Record<string, unknown>;
      return {
        message: (responseData?.message as string) || axiosError.message,
        status: axiosError.response.status,
        code: responseData?.code as string,
        details: responseData,
      };
    } else if (axiosError.request) {
      return {
        message: 'Network error - no response received',
        code: 'NETWORK_ERROR',
        details: axiosError.request,
      };
    } else {
      return {
        message: axiosError.message || 'Unknown error occurred',
        code: 'UNKNOWN_ERROR',
        details: {
          name: axiosError.name,
          message: axiosError.message,
          code: axiosError.code,
          stack: axiosError.stack,
        },
      };
    }
  }

  protected async request<T = unknown>(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.client.request({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  }

  protected buildQueryString(options: QueryOptions): string {
    const params = new URLSearchParams();

    Object.entries(options).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (key === 'fields' && Array.isArray(value)) {
          // fields: ['CODE', 'TITLE'] → 'CODE,TITLE'
          params.append(key, value.join(','));
        } else if (key === 'sort' && Array.isArray(value)) {
          // sort: [['TITLE', 'CODE'], 'desc'] → 'TITLE desc,CODE desc'
          // sort: ['TITLE', 'desc'] → 'TITLE desc'
          // sort: [['TITLE', 'CODE']] → 'TITLE,CODE'
          // sort: ['TITLE'] → 'TITLE'
          const firstItem = value[0];
          if (Array.isArray(firstItem)) {
            // Multiple fields: [['TITLE', 'CODE'], 'desc'] or [['TITLE', 'CODE']]
            const fields = firstItem as string[];
            const direction = value[1] as string | undefined;
            const sortString = direction
              ? fields.map(f => `${f} ${direction}`).join(',')
              : fields.join(',');
            params.append(key, sortString);
          } else {
            // Single field: ['TITLE', 'desc'] or ['TITLE']
            const field = firstItem;
            const direction = value[1] as string | undefined;
            params.append(key, direction ? `${field} ${direction}` : field);
          }
        } else if (Array.isArray(value)) {
          // Other arrays: just join with commas
          params.append(key, value.join(','));
        } else {
          params.append(key, String(value));
        }
      }
    });

    return params.toString();
  }

  // Health check
  async ping(): Promise<boolean> {
    try {
      await this.request('get', '/ping');
      return true;
    } catch {
      return false;
    }
  }

  // Check if token is valid
  async isTokenValid(): Promise<boolean> {
    try {
      await this.request('get', '/istokenvalid');
      return true;
    } catch {
      return false;
    }
  }
}
