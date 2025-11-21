/**
 * SalesServicePrices module - provides SalesServicePrices entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesServicePrices,
  SalesServicePricesSearchCriteria,
  SalesServicePricesAnalytics,
  SalesServicePricesQueryOptions,
} from './types';

// Export client
export { SalesServicePricesClient } from './client';
