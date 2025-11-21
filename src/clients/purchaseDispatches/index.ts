/**
 * PurchaseDispatches module - provides PurchaseDispatches entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchaseDispatches,
  PurchaseDispatchesSearchCriteria,
  PurchaseDispatchesAnalytics,
  PurchaseDispatchesQueryOptions,
} from './types';

// Export client
export { PurchaseDispatchesClient } from './client';
