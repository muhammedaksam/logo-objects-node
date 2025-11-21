/**
 * CustomersOfSalesmen module - provides CustomersOfSalesmen entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  CustomersOfSalesmen,
  CustomersOfSalesmenSearchCriteria,
  CustomersOfSalesmenAnalytics,
  CustomersOfSalesmenQueryOptions,
} from './types';

// Export client
export { CustomersOfSalesmenClient } from './client';
