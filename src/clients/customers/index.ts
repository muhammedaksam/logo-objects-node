/**
 * Customers module - provides Customers entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Customers,
  CustomersSearchCriteria,
  CustomersAnalytics,
  CustomersQueryOptions,
} from './types';

// Export client
export { CustomersClient } from './client';
