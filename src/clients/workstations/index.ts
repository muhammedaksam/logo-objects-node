/**
 * Workstations module - provides Workstations entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Workstations,
  WorkstationsSearchCriteria,
  WorkstationsAnalytics,
  WorkstationsQueryOptions,
} from './types';

// Export client
export { WorkstationsClient } from './client';
