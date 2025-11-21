/**
 * PurchaseProposalContracts module - provides PurchaseProposalContracts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchaseProposalContracts,
  PurchaseProposalContractsSearchCriteria,
  PurchaseProposalContractsAnalytics,
  PurchaseProposalContractsQueryOptions,
} from './types';

// Export client
export { PurchaseProposalContractsClient } from './client';
