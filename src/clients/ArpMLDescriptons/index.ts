/**
 * ArpMLDescriptons module - provides ArpMLDescriptons entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ArpMLDescriptons,
  ArpMLDescriptonsSearchCriteria,
  ArpMLDescriptonsAnalytics,
  ArpMLDescriptonsQueryOptions,
} from './types';

// Export client
export { ArpMLDescriptonsClient } from './client';
