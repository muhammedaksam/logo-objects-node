/**
 * Projects module - provides Projects entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Projects,
  ProjectsSearchCriteria,
  ProjectsAnalytics,
  ProjectsQueryOptions,
} from './types';

// Export client
export { ProjectsClient } from './client';
