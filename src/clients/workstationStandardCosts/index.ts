/**
 * WorkstationStandardCosts module - provides WorkstationStandardCosts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  WorkstationStandardCosts,
  WorkstationStandardCostsSearchCriteria,
  WorkstationStandardCostsAnalytics,
  WorkstationStandardCostsQueryOptions,
} from './types';

// Export client
export { WorkstationStandardCostsClient } from './client';
