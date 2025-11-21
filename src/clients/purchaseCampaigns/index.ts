/**
 * PurchaseCampaigns module - provides PurchaseCampaigns entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchaseCampaigns,
  PurchaseCampaignsSearchCriteria,
  PurchaseCampaignsAnalytics,
  PurchaseCampaignsQueryOptions,
} from './types';

// Export client
export { PurchaseCampaignsClient } from './client';
