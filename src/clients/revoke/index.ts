/**
 * Revoke module - provides Revoke entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type { Revoke, RevokeSearchCriteria, RevokeAnalytics, RevokeQueryOptions } from './types';

// Export client
export { RevokeClient } from './client';
