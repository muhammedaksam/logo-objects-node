/**
 * QuickProductionSlips module - provides QuickProductionSlips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  QuickProductionSlips,
  QuickProductionSlipsSearchCriteria,
  QuickProductionSlipsAnalytics,
  QuickProductionSlipsQueryOptions,
} from './types';

// Export client
export { QuickProductionSlipsClient } from './client';
