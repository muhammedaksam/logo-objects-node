/**
 * WorkstationGroups module - provides WorkstationGroups entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  WorkstationGroups,
  WorkstationGroupsSearchCriteria,
  WorkstationGroupsAnalytics,
  WorkstationGroupsQueryOptions,
} from './types';

// Export client
export { WorkstationGroupsClient } from './client';
