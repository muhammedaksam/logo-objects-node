/**
 * SpecialCodes module - provides SpecialCodes entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SpecialCodes,
  SpecialCodesSearchCriteria,
  SpecialCodesAnalytics,
  SpecialCodesQueryOptions,
} from './types';

// Export client
export { SpecialCodesClient } from './client';
