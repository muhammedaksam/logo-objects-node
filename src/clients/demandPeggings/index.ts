/**
 * DemandPeggings module - provides DemandPeggings entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  DemandPeggings,
  DemandPeggingsSearchCriteria,
  DemandPeggingsAnalytics,
  DemandPeggingsQueryOptions,
} from './types';

// Export client
export { DemandPeggingsClient } from './client';
