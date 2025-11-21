/**
 * ProductionRoutes module - provides ProductionRoutes entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ProductionRoutes,
  ProductionRoutesSearchCriteria,
  ProductionRoutesAnalytics,
  ProductionRoutesQueryOptions,
} from './types';

// Export client
export { ProductionRoutesClient } from './client';
