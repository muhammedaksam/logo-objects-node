import { ApiClientConfig } from './index';

/**
 * Default configuration values
 */
export const DEFAULT_CONFIG: Partial<ApiClientConfig> = {
  timeout: 30000,
  retries: 3,
  retryDelay: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

/**
 * Configuration validation
 */
export function validateConfig(config: ApiClientConfig): void {
  if (!config.baseURL) {
    throw new Error('baseURL is required in API client configuration');
  }

  if (!isValidUrl(config.baseURL)) {
    throw new Error('baseURL must be a valid URL');
  }

  if (config.timeout && (config.timeout < 1000 || config.timeout > 300000)) {
    throw new Error('timeout must be between 1000ms and 300000ms (5 minutes)');
  }

  if (config.retries && (config.retries < 0 || config.retries > 10)) {
    throw new Error('retries must be between 0 and 10');
  }

  if (config.retryDelay && (config.retryDelay < 100 || config.retryDelay > 10000)) {
    throw new Error('retryDelay must be between 100ms and 10000ms');
  }
}

/**
 * Merge user config with defaults
 */
export function createConfig(userConfig: ApiClientConfig): Required<ApiClientConfig> {
  validateConfig(userConfig);

  return {
    ...DEFAULT_CONFIG,
    ...userConfig,
    headers: {
      ...DEFAULT_CONFIG.headers,
      ...userConfig.headers,
    },
  } as Required<ApiClientConfig>;
}

/**
 * Helper function to validate URL
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Environment-specific configurations
 */
export const ENVIRONMENT_CONFIGS = {
  development: {
    timeout: 60000,
    retries: 1,
    retryDelay: 500,
  },
  testing: {
    timeout: 10000,
    retries: 0,
    retryDelay: 0,
  },
  production: {
    timeout: 30000,
    retries: 3,
    retryDelay: 1000,
  },
} as const;

/**
 * Get configuration for specific environment
 */
export function getEnvironmentConfig(
  env: keyof typeof ENVIRONMENT_CONFIGS
): Partial<ApiClientConfig> {
  return ENVIRONMENT_CONFIGS[env] || ENVIRONMENT_CONFIGS.production;
}
