/**
 * ArpSlips module - provides ArpSlips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ArpSlips,
  ArpSlipsSearchCriteria,
  ArpSlipsAnalytics,
  ArpSlipsQueryOptions,
} from './types';

// Export client
export { ArpSlipsClient } from './client';
