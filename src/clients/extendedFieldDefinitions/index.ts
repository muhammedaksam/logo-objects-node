/**
 * ExtendedFieldDefinitions module - provides ExtendedFieldDefinitions entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  ExtendedFieldDefinitions,
  ExtendedFieldDefinitionsSearchCriteria,
  ExtendedFieldDefinitionsAnalytics,
  ExtendedFieldDefinitionsQueryOptions,
} from './types';

// Export client
export { ExtendedFieldDefinitionsClient } from './client';
