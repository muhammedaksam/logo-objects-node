/**
 * SalesOrders module - provides SalesOrders entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesOrders,
  SalesOrdersSearchCriteria,
  SalesOrdersAnalytics,
  SalesOrdersQueryOptions,
} from './types';

// Export client
export { SalesOrdersClient } from './client';
