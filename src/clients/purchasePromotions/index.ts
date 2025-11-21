/**
 * PurchasePromotions module - provides PurchasePromotions entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchasePromotions,
  PurchasePromotionsSearchCriteria,
  PurchasePromotionsAnalytics,
  PurchasePromotionsQueryOptions,
} from './types';

// Export client
export { PurchasePromotionsClient } from './client';
