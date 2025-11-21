/**
 * PurchaseProposalOffers module - provides PurchaseProposalOffers entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchaseProposalOffers,
  PurchaseProposalOffersSearchCriteria,
  PurchaseProposalOffersAnalytics,
  PurchaseProposalOffersQueryOptions,
} from './types';

// Export client
export { PurchaseProposalOffersClient } from './client';
