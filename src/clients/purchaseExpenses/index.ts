/**
 * PurchaseExpenses module - provides PurchaseExpenses entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchaseExpenses,
  PurchaseExpensesSearchCriteria,
  PurchaseExpensesAnalytics,
  PurchaseExpensesQueryOptions,
} from './types';

// Export client
export { PurchaseExpensesClient } from './client';
