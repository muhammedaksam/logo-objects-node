/**
 * Dbinfo module - provides Dbinfo entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type { Dbinfo, DbinfoSearchCriteria, DbinfoAnalytics, DbinfoQueryOptions } from './types';

// Export client
export { DbinfoClient } from './client';
