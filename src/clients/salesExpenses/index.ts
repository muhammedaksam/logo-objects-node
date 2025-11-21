/**
 * SalesExpenses module - provides SalesExpenses entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesExpenses,
  SalesExpensesSearchCriteria,
  SalesExpensesAnalytics,
  SalesExpensesQueryOptions,
} from './types';

// Export client
export { SalesExpensesClient } from './client';
