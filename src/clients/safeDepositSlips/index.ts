/**
 * SafeDepositSlips module - provides SafeDepositSlips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SafeDepositSlips,
  SafeDepositSlipsSearchCriteria,
  SafeDepositSlipsAnalytics,
  SafeDepositSlipsQueryOptions,
} from './types';

// Export client
export { SafeDepositSlipsClient } from './client';
