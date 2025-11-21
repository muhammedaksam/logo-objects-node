/**
 * SalesCampaigns module - provides SalesCampaigns entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesCampaigns,
  SalesCampaignsSearchCriteria,
  SalesCampaignsAnalytics,
  SalesCampaignsQueryOptions,
} from './types';

// Export client
export { SalesCampaignsClient } from './client';
