/**
 * ItemMLDescriptions module - provides ItemMLDescriptions entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ItemMLDescriptions,
  ItemMLDescriptionsSearchCriteria,
  ItemMLDescriptionsAnalytics,
  ItemMLDescriptionsQueryOptions,
} from './types';

// Export client
export { ItemMLDescriptionsClient } from './client';
