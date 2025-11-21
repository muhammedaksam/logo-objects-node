/**
 * DistributionRoutes module - provides DistributionRoutes entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  DistributionRoutes,
  DistributionRoutesSearchCriteria,
  DistributionRoutesAnalytics,
  DistributionRoutesQueryOptions,
} from './types';

// Export client
export { DistributionRoutesClient } from './client';
