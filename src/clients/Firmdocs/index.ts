/**
 * Firmdocs module - provides Firmdocs entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Firmdocs,
  FirmdocsSearchCriteria,
  FirmdocsAnalytics,
  FirmdocsQueryOptions,
} from './types';

// Export client
export { FirmdocsClient } from './client';
