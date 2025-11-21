/**
 * Capi module - provides Capi entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type { Capi, CapiSearchCriteria, CapiAnalytics, CapiQueryOptions } from './types';

// Export client
export { CapiClient } from './client';
