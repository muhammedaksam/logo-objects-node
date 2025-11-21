/**
 * SalesContracts module - provides SalesContracts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesContracts,
  SalesContractsSearchCriteria,
  SalesContractsAnalytics,
  SalesContractsQueryOptions,
} from './types';

// Export client
export { SalesContractsClient } from './client';
