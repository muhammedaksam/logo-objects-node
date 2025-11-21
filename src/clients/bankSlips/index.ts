/**
 * BankSlips module - provides BankSlips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  BankSlips,
  BankSlipsSearchCriteria,
  BankSlipsAnalytics,
  BankSlipsQueryOptions,
} from './types';

// Export client
export { BankSlipsClient } from './client';
