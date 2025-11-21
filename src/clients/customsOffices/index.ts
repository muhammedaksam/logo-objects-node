/**
 * CustomsOffices module - provides CustomsOffices entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  CustomsOffices,
  CustomsOfficesSearchCriteria,
  CustomsOfficesAnalytics,
  CustomsOfficesQueryOptions,
} from './types';

// Export client
export { CustomsOfficesClient } from './client';
