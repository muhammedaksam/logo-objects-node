/**
 * SalesPromotions module - provides SalesPromotions entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesPromotions,
  SalesPromotionsSearchCriteria,
  SalesPromotionsAnalytics,
  SalesPromotionsQueryOptions,
} from './types';

// Export client
export { SalesPromotionsClient } from './client';
