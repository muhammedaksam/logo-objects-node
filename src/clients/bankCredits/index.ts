/**
 * BankCredits module - provides BankCredits entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  BankCredits,
  BankCreditsSearchCriteria,
  BankCreditsAnalytics,
  BankCreditsQueryOptions,
} from './types';

// Export client
export { BankCreditsClient } from './client';
