/**
 * AuthorizationCodes module - provides AuthorizationCodes entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  AuthorizationCodes,
  AuthorizationCodesSearchCriteria,
  AuthorizationCodesAnalytics,
  AuthorizationCodesQueryOptions,
} from './types';

// Export client
export { AuthorizationCodesClient } from './client';
