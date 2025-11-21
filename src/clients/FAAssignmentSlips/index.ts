/**
 * Faassignmentslips module - provides Faassignmentslips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Faassignmentslips,
  FaassignmentslipsSearchCriteria,
  FaassignmentslipsAnalytics,
  FaassignmentslipsQueryOptions,
} from './types';

// Export client
export { FaassignmentslipsClient } from './client';
