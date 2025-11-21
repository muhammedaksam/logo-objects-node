/**
 * DemandSlips module - provides DemandSlips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  DemandSlips,
  DemandSlipsSearchCriteria,
  DemandSlipsAnalytics,
  DemandSlipsQueryOptions,
} from './types';

// Export client
export { DemandSlipsClient } from './client';
