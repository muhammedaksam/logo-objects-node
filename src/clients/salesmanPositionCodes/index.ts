/**
 * SalesmanPositionCodes module - provides SalesmanPositionCodes entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesmanPositionCodes,
  SalesmanPositionCodesSearchCriteria,
  SalesmanPositionCodesAnalytics,
  SalesmanPositionCodesQueryOptions,
} from './types';

// Export client
export { SalesmanPositionCodesClient } from './client';
