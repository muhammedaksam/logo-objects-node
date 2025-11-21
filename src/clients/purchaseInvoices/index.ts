/**
 * PurchaseInvoices module - provides PurchaseInvoices entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchaseInvoices,
  PurchaseInvoicesSearchCriteria,
  PurchaseInvoicesAnalytics,
  PurchaseInvoicesQueryOptions,
} from './types';

// Export client
export { PurchaseInvoicesClient } from './client';
