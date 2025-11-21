/**
 * SalesActivities module - provides SalesActivities entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesActivities,
  SalesActivitiesSearchCriteria,
  SalesActivitiesAnalytics,
  SalesActivitiesQueryOptions,
} from './types';

// Export client
export { SalesActivitiesClient } from './client';
