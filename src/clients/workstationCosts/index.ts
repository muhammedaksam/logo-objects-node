/**
 * WorkstationCosts module - provides WorkstationCosts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  WorkstationCosts,
  WorkstationCostsSearchCriteria,
  WorkstationCostsAnalytics,
  WorkstationCostsQueryOptions,
} from './types';

// Export client
export { WorkstationCostsClient } from './client';
