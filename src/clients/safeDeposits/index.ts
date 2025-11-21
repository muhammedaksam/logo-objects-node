/**
 * SafeDeposits module - provides SafeDeposits entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SafeDeposits,
  SafeDepositsSearchCriteria,
  SafeDepositsAnalytics,
  SafeDepositsQueryOptions,
} from './types';

// Export client
export { SafeDepositsClient } from './client';
