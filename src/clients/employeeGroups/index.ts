/**
 * EmployeeGroups module - provides EmployeeGroups entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  EmployeeGroups,
  EmployeeGroupsSearchCriteria,
  EmployeeGroupsAnalytics,
  EmployeeGroupsQueryOptions,
} from './types';

// Export client
export { EmployeeGroupsClient } from './client';
