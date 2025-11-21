/**
 * Shifts module - provides Shifts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type { Shifts, ShiftsSearchCriteria, ShiftsAnalytics, ShiftsQueryOptions } from './types';

// Export client
export { ShiftsClient } from './client';
