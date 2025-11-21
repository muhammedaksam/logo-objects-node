/**
 * Salesmen module - provides Salesmen entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Salesmen,
  SalesmenSearchCriteria,
  SalesmenAnalytics,
  SalesmenQueryOptions,
} from './types';

// Export client
export { SalesmenClient } from './client';
