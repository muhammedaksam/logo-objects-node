/**
 * SalesInvoices module - provides SalesInvoices entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesInvoices,
  SalesInvoicesSearchCriteria,
  SalesInvoicesAnalytics,
  SalesInvoicesQueryOptions,
} from './types';

// Export client
export { SalesInvoicesClient } from './client';
