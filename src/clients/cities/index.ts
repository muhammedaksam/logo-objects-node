/**
 * Cities module - provides Cities entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type { Cities, CitiesSearchCriteria, CitiesAnalytics, CitiesQueryOptions } from './types';

// Export client
export { CitiesClient } from './client';
