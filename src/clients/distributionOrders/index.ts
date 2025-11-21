/**
 * DistributionOrders module - provides DistributionOrders entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  DistributionOrders,
  DistributionOrdersSearchCriteria,
  DistributionOrdersAnalytics,
  DistributionOrdersQueryOptions,
} from './types';

// Export client
export { DistributionOrdersClient } from './client';
