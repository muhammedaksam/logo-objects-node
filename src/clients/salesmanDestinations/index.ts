/**
 * SalesmanDestinations module - provides SalesmanDestinations entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesmanDestinations,
  SalesmanDestinationsSearchCriteria,
  SalesmanDestinationsAnalytics,
  SalesmanDestinationsQueryOptions,
} from './types';

// Export client
export { SalesmanDestinationsClient } from './client';
