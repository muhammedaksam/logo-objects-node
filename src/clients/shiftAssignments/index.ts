/**
 * ShiftAssignments module - provides ShiftAssignments entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ShiftAssignments,
  ShiftAssignmentsSearchCriteria,
  ShiftAssignmentsAnalytics,
  ShiftAssignmentsQueryOptions,
} from './types';

// Export client
export { ShiftAssignmentsClient } from './client';
