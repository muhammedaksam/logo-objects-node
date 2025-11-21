/**
 * Districts module - provides Districts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Districts,
  DistrictsSearchCriteria,
  DistrictsAnalytics,
  DistrictsQueryOptions,
} from './types';

// Export client
export { DistrictsClient } from './client';
