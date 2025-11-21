/**
 * Definitions module - provides Definitions entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Definitions,
  DefinitionsSearchCriteria,
  DefinitionsAnalytics,
  DefinitionsQueryOptions,
} from './types';

// Export client
export { DefinitionsClient } from './client';
