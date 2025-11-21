/**
 * AdditionalTaxes module - provides AdditionalTaxes entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  AdditionalTaxes,
  AdditionalTaxesSearchCriteria,
  AdditionalTaxesAnalytics,
  AdditionalTaxesQueryOptions,
} from './types';

// Export client
export { AdditionalTaxesClient } from './client';
