/**
 * Queries module - provides Queries entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Queries,
  QueriesSearchCriteria,
  QueriesAnalytics,
  QueriesQueryOptions,
} from './types';

// Export client
export { QueriesClient } from './client';
