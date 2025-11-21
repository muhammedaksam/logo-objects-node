/**
 * Towns module - provides Towns entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type { Towns, TownsSearchCriteria, TownsAnalytics, TownsQueryOptions } from './types';

// Export client
export { TownsClient } from './client';
