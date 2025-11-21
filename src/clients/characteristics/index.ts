/**
 * Characteristics module - provides Characteristics entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Characteristics,
  CharacteristicsSearchCriteria,
  CharacteristicsAnalytics,
  CharacteristicsQueryOptions,
} from './types';

// Export client
export { CharacteristicsClient } from './client';
