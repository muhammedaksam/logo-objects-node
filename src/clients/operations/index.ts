/**
 * Operations module - provides Operations entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Operations,
  OperationsSearchCriteria,
  OperationsAnalytics,
  OperationsQueryOptions,
} from './types';

// Export client
export { OperationsClient } from './client';
