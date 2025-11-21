/**
 * ProductionResourceUtilization module - provides ProductionResourceUtilization entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ProductionResourceUtilization,
  ProductionResourceUtilizationSearchCriteria,
  ProductionResourceUtilizationAnalytics,
  ProductionResourceUtilizationQueryOptions,
} from './types';

// Export client
export { ProductionResourceUtilizationClient } from './client';
