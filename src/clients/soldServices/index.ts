/**
 * SoldServices module - provides SoldServices entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SoldServices,
  SoldServicesSearchCriteria,
  SoldServicesAnalytics,
  SoldServicesQueryOptions,
} from './types';

// Export client
export { SoldServicesClient } from './client';
