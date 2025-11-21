/**
 * Services module - provides Services entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Services,
  ServicesSearchCriteria,
  ServicesAnalytics,
  ServicesQueryOptions,
} from './types';

// Export client
export { ServicesClient } from './client';
