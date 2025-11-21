/**
 * ItemBrands module - provides ItemBrands entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ItemBrands,
  ItemBrandsSearchCriteria,
  ItemBrandsAnalytics,
  ItemBrandsQueryOptions,
} from './types';

// Export client
export { ItemBrandsClient } from './client';
