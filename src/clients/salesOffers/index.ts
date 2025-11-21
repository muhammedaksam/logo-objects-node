/**
 * SalesOffers module - provides SalesOffers entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesOffers,
  SalesOffersSearchCriteria,
  SalesOffersAnalytics,
  SalesOffersQueryOptions,
} from './types';

// Export client
export { SalesOffersClient } from './client';
