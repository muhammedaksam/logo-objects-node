/**
 * ItemSlips module - provides ItemSlips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ItemSlips,
  ItemSlipsSearchCriteria,
  ItemSlipsAnalytics,
  ItemSlipsQueryOptions,
} from './types';

// Export client
export { ItemSlipsClient } from './client';
