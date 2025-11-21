/**
 * Methods module - provides Methods entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Methods,
  MethodsSearchCriteria,
  MethodsAnalytics,
  MethodsQueryOptions,
} from './types';

// Export client
export { MethodsClient } from './client';
