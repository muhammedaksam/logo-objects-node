/**
 * SalesDiscounts module - provides SalesDiscounts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesDiscounts,
  SalesDiscountsSearchCriteria,
  SalesDiscountsAnalytics,
  SalesDiscountsQueryOptions,
} from './types';

// Export client
export { SalesDiscountsClient } from './client';
