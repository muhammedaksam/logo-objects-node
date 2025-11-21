/**
 * FreeZones module - provides FreeZones entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  FreeZones,
  FreeZonesSearchCriteria,
  FreeZonesAnalytics,
  FreeZonesQueryOptions,
} from './types';

// Export client
export { FreeZonesClient } from './client';
