/**
 * PurchaseProposalOrders module - provides PurchaseProposalOrders entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchaseProposalOrders,
  PurchaseProposalOrdersSearchCriteria,
  PurchaseProposalOrdersAnalytics,
  PurchaseProposalOrdersQueryOptions,
} from './types';

// Export client
export { PurchaseProposalOrdersClient } from './client';
