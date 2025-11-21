/**
 * ExtendedFieldCategories module - provides ExtendedFieldCategories entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ExtendedFieldCategories,
  ExtendedFieldCategoriesSearchCriteria,
  ExtendedFieldCategoriesAnalytics,
  ExtendedFieldCategoriesQueryOptions,
} from './types';

// Export client
export { ExtendedFieldCategoriesClient } from './client';
