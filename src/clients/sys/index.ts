/**
 * Sys module - provides Sys entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type { Sys, SysSearchCriteria, SysAnalytics, SysQueryOptions } from './types';

// Export client
export { SysClient } from './client';
