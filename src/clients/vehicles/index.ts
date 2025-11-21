/**
 * Vehicles module - provides Vehicles entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Vehicles,
  VehiclesSearchCriteria,
  VehiclesAnalytics,
  VehiclesQueryOptions,
} from './types';

// Export client
export { VehiclesClient } from './client';
