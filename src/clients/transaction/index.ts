/**
 * Transaction module - provides Transaction entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Transaction,
  TransactionSearchCriteria,
  TransactionAnalytics,
  TransactionQueryOptions,
} from './types';

// Export client
export { TransactionClient } from './client';
