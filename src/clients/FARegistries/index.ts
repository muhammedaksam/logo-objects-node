/**
 * Faregistries module - provides Faregistries entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Faregistries,
  FaregistriesSearchCriteria,
  FaregistriesAnalytics,
  FaregistriesQueryOptions,
} from './types';

// Export client
export { FaregistriesClient } from './client';
