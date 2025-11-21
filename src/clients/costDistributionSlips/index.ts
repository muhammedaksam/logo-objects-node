/**
 * CostDistributionSlips module - provides CostDistributionSlips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  CostDistributionSlips,
  CostDistributionSlipsSearchCriteria,
  CostDistributionSlipsAnalytics,
  CostDistributionSlipsQueryOptions,
} from './types';

// Export client
export { CostDistributionSlipsClient } from './client';
