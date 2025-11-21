/**
 * SalesConditionsForSlips module - provides SalesConditionsForSlips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  SalesConditionsForSlips,
  SalesConditionsForSlipsSearchCriteria,
  SalesConditionsForSlipsAnalytics,
  SalesConditionsForSlipsQueryOptions,
} from './types';

// Export client
export { SalesConditionsForSlipsClient } from './client';
