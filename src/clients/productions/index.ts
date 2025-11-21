/**
 * Productions module - provides Productions entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Productions,
  ProductionsSearchCriteria,
  ProductionsAnalytics,
  ProductionsQueryOptions,
} from './types';

// Export client
export { ProductionsClient } from './client';
