/**
 * SalesItemPrices module - provides SalesItemPrices entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesItemPrices,
  SalesItemPricesSearchCriteria,
  SalesItemPricesAnalytics,
  SalesItemPricesQueryOptions,
} from './types';

// Export client
export { SalesItemPricesClient } from './client';
