/**
 * CollateralRolls module - provides CollateralRolls entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  CollateralRolls,
  CollateralRollsSearchCriteria,
  CollateralRollsAnalytics,
  CollateralRollsQueryOptions,
} from './types';

// Export client
export { CollateralRollsClient } from './client';
