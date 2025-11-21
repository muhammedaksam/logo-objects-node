/**
 * Employees module - provides Employees entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Employees,
  EmployeesSearchCriteria,
  EmployeesAnalytics,
  EmployeesQueryOptions,
} from './types';

// Export client
export { EmployeesClient } from './client';
