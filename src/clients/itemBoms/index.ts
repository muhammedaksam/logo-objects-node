/**
 * ItemBoms module - provides ItemBoms entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ItemBoms,
  ItemBomsSearchCriteria,
  ItemBomsAnalytics,
  ItemBomsQueryOptions,
} from './types';

// Export client
export { ItemBomsClient } from './client';
