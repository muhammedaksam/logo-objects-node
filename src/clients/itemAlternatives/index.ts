/**
 * ItemAlternatives module - provides ItemAlternatives entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ItemAlternatives,
  ItemAlternativesSearchCriteria,
  ItemAlternativesAnalytics,
  ItemAlternativesQueryOptions,
} from './types';

// Export client
export { ItemAlternativesClient } from './client';
