/**
 * WorkflowRoles module - provides WorkflowRoles entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  WorkflowRoles,
  WorkflowRolesSearchCriteria,
  WorkflowRolesAnalytics,
  WorkflowRolesQueryOptions,
} from './types';

// Export client
export { WorkflowRolesClient } from './client';
