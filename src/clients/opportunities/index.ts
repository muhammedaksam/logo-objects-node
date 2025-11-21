/**
 * Opportunities module - provides Opportunities entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Opportunities,
  OpportunitiesSearchCriteria,
  OpportunitiesAnalytics,
  OpportunitiesQueryOptions,
} from './types';

// Export client
export { OpportunitiesClient } from './client';
