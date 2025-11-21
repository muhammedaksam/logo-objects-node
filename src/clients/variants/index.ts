/**
 * Variants module - provides Variants entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Variants,
  VariantsSearchCriteria,
  VariantsAnalytics,
  VariantsQueryOptions,
} from './types';

// Export client
export { VariantsClient } from './client';
