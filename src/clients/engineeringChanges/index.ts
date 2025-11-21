/**
 * EngineeringChanges module - provides EngineeringChanges entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  EngineeringChanges,
  EngineeringChangesSearchCriteria,
  EngineeringChangesAnalytics,
  EngineeringChangesQueryOptions,
} from './types';

// Export client
export { EngineeringChangesClient } from './client';
