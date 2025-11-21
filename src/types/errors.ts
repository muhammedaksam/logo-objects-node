/**
 * Custom error classes for the Logo Objects REST API Client
 */

interface AxiosErrorLike {
  response?: {
    status: number;
    data?: {
      message?: string;
      error?: string;
      validationErrors?: string[];
      retryAfter?: number;
    };
  };
  code?: string;
  message?: string;
}

export class LogoApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly response?: Record<string, unknown>,
    public readonly originalError?: Error
  ) {
    super(message);
    this.name = 'LogoApiError';

    // Maintain proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, LogoApiError);
    }
  }
}

export class ValidationError extends LogoApiError {
  constructor(
    message: string,
    public readonly validationErrors: string[]
  ) {
    super(message, 400);
    this.name = 'ValidationError';
  }
}

export class NetworkError extends LogoApiError {
  constructor(message: string, originalError: Error) {
    super(message, 0, undefined, originalError);
    this.name = 'NetworkError';
  }
}

export class AuthenticationError extends LogoApiError {
  constructor(message: string = 'Invalid or missing API key') {
    super(message, 401);
    this.name = 'AuthenticationError';
  }
}

export class RateLimitError extends LogoApiError {
  constructor(
    message: string = 'Rate limit exceeded',
    public readonly retryAfter?: number
  ) {
    super(message, 429);
    this.name = 'RateLimitError';
  }
}

/**
 * Utility function to create appropriate error instances
 */
export function createApiError(error: unknown): LogoApiError {
  const axiosError = error as AxiosErrorLike;
  if (axiosError.response) {
    const { status, data } = axiosError.response;
    const message = data?.message || data?.error || 'API request failed';

    switch (status) {
      case 400:
        if (data?.validationErrors) {
          return new ValidationError(message, data.validationErrors);
        }
        return new LogoApiError(message, status, data);
      case 401:
        return new AuthenticationError(message);
      case 429:
        return new RateLimitError(message, data?.retryAfter);
      default:
        return new LogoApiError(message, status, data);
    }
  }

  if (axiosError.code === 'ECONNREFUSED' || axiosError.code === 'ETIMEDOUT') {
    return new NetworkError('Network connection failed', axiosError as Error);
  }

  return new LogoApiError(
    axiosError.message || 'Unknown error occurred',
    0,
    undefined,
    axiosError as Error
  );
}
