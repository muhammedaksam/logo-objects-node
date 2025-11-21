/**
 * CharacteristicSets module - provides CharacteristicSets entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  CharacteristicSets,
  CharacteristicSetsSearchCriteria,
  CharacteristicSetsAnalytics,
  CharacteristicSetsQueryOptions,
} from './types';

// Export client
export { CharacteristicSetsClient } from './client';
