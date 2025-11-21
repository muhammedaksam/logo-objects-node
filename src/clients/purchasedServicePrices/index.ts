/**
 * PurchasedServicePrices module - provides PurchasedServicePrices entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchasedServicePrices,
  PurchasedServicePricesSearchCriteria,
  PurchasedServicePricesAnalytics,
  PurchasedServicePricesQueryOptions,
} from './types';

// Export client
export { PurchasedServicePricesClient } from './client';
