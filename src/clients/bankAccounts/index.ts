/**
 * BankAccounts module - provides BankAccounts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  BankAccounts,
  BankAccountsSearchCriteria,
  BankAccountsAnalytics,
  BankAccountsQueryOptions,
} from './types';

// Export client
export { BankAccountsClient } from './client';
