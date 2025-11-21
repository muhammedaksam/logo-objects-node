/**
 * PurchaseDiscounts module - provides PurchaseDiscounts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchaseDiscounts,
  PurchaseDiscountsSearchCriteria,
  PurchaseDiscountsAnalytics,
  PurchaseDiscountsQueryOptions,
} from './types';

// Export client
export { PurchaseDiscountsClient } from './client';
