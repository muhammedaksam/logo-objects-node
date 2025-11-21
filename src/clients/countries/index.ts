/**
 * Countries module - provides Countries entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Countries,
  CountriesSearchCriteria,
  CountriesAnalytics,
  CountriesQueryOptions,
} from './types';

// Export client
export { CountriesClient } from './client';
