/**
 * SalesProvisionDistributionSlips module - provides SalesProvisionDistributionSlips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesProvisionDistributionSlips,
  SalesProvisionDistributionSlipsSearchCriteria,
  SalesProvisionDistributionSlipsAnalytics,
  SalesProvisionDistributionSlipsQueryOptions,
} from './types';

// Export client
export { SalesProvisionDistributionSlipsClient } from './client';
