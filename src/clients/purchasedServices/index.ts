/**
 * PurchasedServices module - provides PurchasedServices entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchasedServices,
  PurchasedServicesSearchCriteria,
  PurchasedServicesAnalytics,
  PurchasedServicesQueryOptions,
} from './types';

// Export client
export { PurchasedServicesClient } from './client';
