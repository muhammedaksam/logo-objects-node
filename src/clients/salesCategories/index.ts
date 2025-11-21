/**
 * SalesCategories module - provides SalesCategories entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesCategories,
  SalesCategoriesSearchCriteria,
  SalesCategoriesAnalytics,
  SalesCategoriesQueryOptions,
} from './types';

// Export client
export { SalesCategoriesClient } from './client';
