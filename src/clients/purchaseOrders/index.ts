/**
 * PurchaseOrders module - provides PurchaseOrders entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PurchaseOrders,
  PurchaseOrdersSearchCriteria,
  PurchaseOrdersAnalytics,
  PurchaseOrdersQueryOptions,
} from './types';

// Export client
export { PurchaseOrdersClient } from './client';
