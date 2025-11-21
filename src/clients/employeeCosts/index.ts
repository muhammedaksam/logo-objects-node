/**
 * EmployeeCosts module - provides EmployeeCosts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  EmployeeCosts,
  EmployeeCostsSearchCriteria,
  EmployeeCostsAnalytics,
  EmployeeCostsQueryOptions,
} from './types';

// Export client
export { EmployeeCostsClient } from './client';
