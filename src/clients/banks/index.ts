/**
 * Banks module - provides Banks entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type { Banks, BanksSearchCriteria, BanksAnalytics, BanksQueryOptions } from './types';

// Export client
export { BanksClient } from './client';
