/**
 * PaymentDifferenceInvoices module - provides PaymentDifferenceInvoices entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PaymentDifferenceInvoices,
  PaymentDifferenceInvoicesSearchCriteria,
  PaymentDifferenceInvoicesAnalytics,
  PaymentDifferenceInvoicesQueryOptions,
} from './types';

// Export client
export { PaymentDifferenceInvoicesClient } from './client';
