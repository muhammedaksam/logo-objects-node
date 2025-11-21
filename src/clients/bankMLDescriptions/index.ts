/**
 * BankMLDescriptions module - provides BankMLDescriptions entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  BankMLDescriptions,
  BankMLDescriptionsSearchCriteria,
  BankMLDescriptionsAnalytics,
  BankMLDescriptionsQueryOptions,
} from './types';

// Export client
export { BankMLDescriptionsClient } from './client';
