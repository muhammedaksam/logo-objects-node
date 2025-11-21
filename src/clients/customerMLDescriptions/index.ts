/**
 * CustomerMLDescriptions module - provides CustomerMLDescriptions entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  CustomerMLDescriptions,
  CustomerMLDescriptionsSearchCriteria,
  CustomerMLDescriptionsAnalytics,
  CustomerMLDescriptionsQueryOptions,
} from './types';

// Export client
export { CustomerMLDescriptionsClient } from './client';
