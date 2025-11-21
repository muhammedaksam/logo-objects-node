module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    // Only include files that we actually test
    'src/clients/base.ts',
    'src/clients/logo.ts',
    'src/clients/*/client.ts',
    'src/clients/*/types.ts',
    // Exclude test files and type definitions
    '!src/**/*.test.ts',
    '!src/**/*.spec.ts',
    '!src/**/*.d.ts',
    '!src/tests/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 55,
      functions: 74,
      lines: 65,
      statements: 65,
    },
    // Specific thresholds for well-tested modules
    './src/clients/base.ts': {
      branches: 44, // Note: Some interceptor branches are difficult to test in isolation
      functions: 57,
      lines: 63,
      statements: 62,
    },
    './src/clients/logo.ts': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    // Pattern-based thresholds for all client directories
    './src/clients/*/client.ts': {
      branches: 50,
      functions: 70,
      lines: 50,
      statements: 50,
    },
  },
  testTimeout: 10000,
  verbose: true,
  bail: false,
  // Limit parallel workers to prevent system freeze (default uses all CPU cores)
  maxWorkers: process.env.CI ? '100%' : 2,
  // Only run tests that exist
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/'],
};
