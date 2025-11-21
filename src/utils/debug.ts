/**
 * Debug utility for the Logo Objects REST API Client
 */

export interface DebugOptions {
  enabled: boolean;
  level: 'info' | 'warn' | 'error' | 'debug';
  prefix?: string;
}

export class DebugLogger {
  private options: DebugOptions;

  constructor(options: Partial<DebugOptions> = {}) {
    this.options = {
      enabled: process.env.NODE_ENV === 'development' || !!process.env.DEBUG,
      level: 'info',
      prefix: 'logo-api-client',
      ...options,
    };
  }

  info(message: string, ...args: unknown[]): void {
    this.log('info', message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    this.log('warn', message, ...args);
  }

  error(message: string, ...args: unknown[]): void {
    this.log('error', message, ...args);
  }

  debug(message: string, ...args: unknown[]): void {
    this.log('debug', message, ...args);
  }

  private log(level: string, message: string, ...args: unknown[]): void {
    if (!this.options.enabled) return;

    const timestamp = new Date().toISOString();
    const prefix = this.options.prefix ? `[${this.options.prefix}]` : '';
    const logMessage = `${timestamp} ${prefix} ${level.toUpperCase()}: ${message}`;

    // In browser environment, use console methods with styling
    if (typeof window !== 'undefined') {
      const style = this.getConsoleStyle(level);
      console.log(`%c${logMessage}`, style, ...args);
    } else {
      // In Node.js environment, use plain console methods
      const consoleFn = console.log;
      if (level === 'error' && console.error) {
        console.error(logMessage, ...args);
      } else if (level === 'warn' && console.warn) {
        console.warn(logMessage, ...args);
      } else if (level === 'info' && console.info) {
        console.info(logMessage, ...args);
      } else {
        consoleFn(logMessage, ...args);
      }
    }
  }

  private getConsoleStyle(level: string): string {
    const styles = {
      info: 'color: #2196F3',
      warn: 'color: #FF9800',
      error: 'color: #F44336; font-weight: bold',
      debug: 'color: #9E9E9E',
    };
    return styles[level as keyof typeof styles] || styles.info;
  }
}

// Global debug instance
export const debug = new DebugLogger();

// Request/Response logging utility
export function logRequest(config: unknown): void {
  if (config) {
    const requestConfig = config as {
      method?: string;
      url?: string;
      data?: unknown;
    };
    debug.debug(
      `→ ${(requestConfig.method || 'GET').toUpperCase()} ${requestConfig.url}`,
      requestConfig.data ? { data: requestConfig.data } : ''
    );
  }
}

export function logResponse(response: unknown): void {
  if (response) {
    const responseObj = response as {
      config?: { method?: string; url?: string };
      status?: number;
      data?: unknown;
    };
    if (responseObj.config) {
      debug.debug(
        `← ${(responseObj.config.method || 'GET').toUpperCase()} ${responseObj.config.url}`,
        {
          status: responseObj.status,
          size: JSON.stringify(responseObj.data || {}).length,
        }
      );
    }
  }
}

export function logError(error: unknown): void {
  if (error) {
    const errorObj = error as {
      message?: string;
      response?: { status?: number };
      config?: { url?: string; method?: string };
    };
    debug.error('API Error:', {
      message: errorObj.message,
      status: errorObj.response?.status,
      url: errorObj.config?.url,
      method: errorObj.config?.method,
    });
  }
}
