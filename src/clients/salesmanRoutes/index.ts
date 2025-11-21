/**
 * SalesmanRoutes module - provides SalesmanRoutes entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesmanRoutes,
  SalesmanRoutesSearchCriteria,
  SalesmanRoutesAnalytics,
  SalesmanRoutesQueryOptions,
} from './types';

// Export client
export { SalesmanRoutesClient } from './client';
