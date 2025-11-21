/**
 * ItemCharacteristics module - provides ItemCharacteristics entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ItemCharacteristics,
  ItemCharacteristicsSearchCriteria,
  ItemCharacteristicsAnalytics,
  ItemCharacteristicsQueryOptions,
} from './types';

// Export client
export { ItemCharacteristicsClient } from './client';
