// Jest setup file
import 'jest';

// Global test configuration
global.console = {
  ...console,
  // Suppress console.error and console.warn in tests unless explicitly needed
  error: jest.fn(),
  warn: jest.fn(),
};

// Mock axios globally for tests
const mockRequest = jest.fn();
const mockInterceptors = {
  request: {
    use: jest.fn(),
  },
  response: {
    use: jest.fn(),
  },
};

// Export the shared mock so tests can access it
(global as any).mockAxiosRequest = mockRequest;

jest.mock('axios', () => ({
  create: jest.fn((config = {}) => ({
    defaults: {
      baseURL: config.baseURL || '',
      timeout: config.timeout || 30000,
      headers: {
        common: {
          Accept: 'application/json, text/plain, */*',
        },
        ...config.headers,
      },
    },
    request: mockRequest, // Shared across all instances
    interceptors: mockInterceptors,
  })),
}));

// Set up global test environment
beforeEach(() => {
  jest.clearAllMocks();
});

// Add custom matchers if needed
expect.extend({
  toBeWithinRange(received: number, floor: number, ceiling: number) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

// Extend Jest matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeWithinRange(floor: number, ceiling: number): R;
    }
  }
}
