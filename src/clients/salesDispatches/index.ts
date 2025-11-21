/**
 * SalesDispatches module - provides SalesDispatches entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesDispatches,
  SalesDispatchesSearchCriteria,
  SalesDispatchesAnalytics,
  SalesDispatchesQueryOptions,
} from './types';

// Export client
export { SalesDispatchesClient } from './client';
