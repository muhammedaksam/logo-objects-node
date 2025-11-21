/**
 * ExportMovementSlips module - provides ExportMovementSlips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ExportMovementSlips,
  ExportMovementSlipsSearchCriteria,
  ExportMovementSlipsAnalytics,
  ExportMovementSlipsQueryOptions,
} from './types';

// Export client
export { ExportMovementSlipsClient } from './client';
