/**
 * ExtendedFields module - provides ExtendedFields entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ExtendedFields,
  ExtendedFieldsSearchCriteria,
  ExtendedFieldsAnalytics,
  ExtendedFieldsQueryOptions,
} from './types';

// Export client
export { ExtendedFieldsClient } from './client';
