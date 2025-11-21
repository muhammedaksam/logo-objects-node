/**
 * Licenses module - provides Licenses entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Licenses,
  LicensesSearchCriteria,
  LicensesAnalytics,
  LicensesQueryOptions,
} from './types';

// Export client
export { LicensesClient } from './client';
