/**
 * OverheadAccounts module - provides OverheadAccounts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  OverheadAccounts,
  OverheadAccountsSearchCriteria,
  OverheadAccountsAnalytics,
  OverheadAccountsQueryOptions,
} from './types';

// Export client
export { OverheadAccountsClient } from './client';
