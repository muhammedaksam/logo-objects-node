/**
 * InwardProcessingPermits module - provides InwardProcessingPermits entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  InwardProcessingPermits,
  InwardProcessingPermitsSearchCriteria,
  InwardProcessingPermitsAnalytics,
  InwardProcessingPermitsQueryOptions,
} from './types';

// Export client
export { InwardProcessingPermitsClient } from './client';
