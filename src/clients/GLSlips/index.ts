/**
 * Glslips module - provides Glslips entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Glslips,
  GlslipsSearchCriteria,
  GlslipsAnalytics,
  GlslipsQueryOptions,
} from './types';

// Export client
export { GlslipsClient } from './client';
