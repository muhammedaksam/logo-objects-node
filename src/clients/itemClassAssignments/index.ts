/**
 * ItemClassAssignments module - provides ItemClassAssignments entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ItemClassAssignments,
  ItemClassAssignmentsSearchCriteria,
  ItemClassAssignmentsAnalytics,
  ItemClassAssignmentsQueryOptions,
} from './types';

// Export client
export { ItemClassAssignmentsClient } from './client';
