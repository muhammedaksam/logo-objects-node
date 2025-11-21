/**
 * Utility modules for the Logo Objects REST API Client
 */

// Export query builder utilities
export {
  buildSearchQuery,
  createFieldMapping,
  type QueryValue,
  type QueryOperators,
  type StringQueryOperators,
  type NumberQueryOperators,
  type DateQueryOperators,
  type BooleanQueryOperators,
  type StringFieldValue,
  type NumberFieldValue,
  type DateFieldValue,
  type BooleanFieldValue,
  type AllFieldValues,
  type SearchCriteria,
} from './queryBuilder';

// Export debug utilities
export { DebugLogger, type DebugOptions } from './debug';
