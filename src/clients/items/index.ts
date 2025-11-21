/**
 * Items module - provides Items entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type { Items, ItemsSearchCriteria, ItemsAnalytics, ItemsQueryOptions } from './types';

// Export client
export { ItemsClient } from './client';
