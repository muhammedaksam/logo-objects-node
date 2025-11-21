/**
 * ProductionLines module - provides ProductionLines entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ProductionLines,
  ProductionLinesSearchCriteria,
  ProductionLinesAnalytics,
  ProductionLinesQueryOptions,
} from './types';

// Export client
export { ProductionLinesClient } from './client';
