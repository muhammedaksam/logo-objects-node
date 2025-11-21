import { BaseEntity, QueryOptions } from '../../types';
import { NumberFieldValue, StringFieldValue, AllFieldValues } from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for KeyValueParameter
 */
export interface KeyValueParameter {
  Name?: string;
  Value?: Object;
}

/**
 * Interface for ResultData
 */
export interface ResultData {
  Meta?: Meta;
  offset?: number;
  count?: number;
  totalCount?: number;
  limit?: number;
  first?: Meta;
  next?: Meta;
  previous?: Meta;
  items?: Object[];
}

/**
 * Interface for DBColumnProperties
 */
export interface Dbcolumnproperties {
  Meta?: Meta;
  ColumnName?: string;
  DataType?: string;
  MaximumCharacterLength?: string;
  NumericPrecision?: string;
  NumericPrecisionRadix?: string;
  NumericScale?: string;
  DatetimePrecision?: string;
  IsNullable?: string;
}

/**
 * ShiftAssignments entity interface based on swagger definition
 */
export interface ShiftAssignments extends BaseEntity {
  SOURCE_TYPE?: number;
  SOURCE_CODE?: string;
  SHIFT_CODE?: string;
  SOURCEREF?: number;
  SHIFTREF?: number;
  BEGDATE?: string;
  LINENR?: number;
  SHIFTTREF?: number;
}

/**
 * Union type of all ShiftAssignments field names for type-safe field selection and sorting
 */
export type ShiftAssignmentsField =
  | 'INTERNAL_REFERENCE'
  | 'SOURCE_TYPE'
  | 'SOURCE_CODE'
  | 'SHIFT_CODE'
  | 'SOURCEREF'
  | 'SHIFTREF'
  | 'BEGDATE'
  | 'LINENR'
  | 'SHIFTTREF'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE';

/**
 * Type-safe sort specification for ShiftAssignments queries
 */
export type ShiftAssignmentsSortSpec =
  | [ShiftAssignmentsField]
  | [ShiftAssignmentsField, 'asc' | 'desc']
  | [ShiftAssignmentsField[], 'asc' | 'desc']
  | [ShiftAssignmentsField[]];

/**
 * Type-safe query options for ShiftAssignments entities
 *
 * Provides IntelliSense and type safety for:
 * - `fields`: Array of field names to return
 * - `sort`: Simplified sort syntax with field arrays and direction
 *
 * @example
 * ```typescript
 * // Select specific fields
 * const result = await client.getAll({
 *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense
 * });
 *
 * // Sort by single field (ascending by default)
 * const sorted1 = await client.getAll({
 *   sort: ['CODE']  // CODE ascending
 * });
 *
 * // Sort by single field with direction
 * const sorted2 = await client.getAll({
 *   sort: ['TITLE', 'desc']  // TITLE descending
 * });
 *
 * // Sort by multiple fields (same direction)
 * const sorted3 = await client.getAll({
 *   sort: [['TITLE', 'CODE'], 'desc']  // Both descending
 * });
 *
 * // Or just multiple fields ascending
 * const sorted4 = await client.getAll({
 *   sort: [['TITLE', 'CODE']]  // Both ascending
 * });
 * ```
 */
export interface ShiftAssignmentsQueryOptions
  extends Omit<QueryOptions<ShiftAssignmentsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ShiftAssignmentsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ShiftAssignmentsSortSpec;
}

/**
 * Search criteria for ShiftAssignments entities
 *
 * Supports both simple values and operator objects:
 *
 * Simple usage (shorthand):
 * ```typescript
 * { code: 'ABC', status: 1 }  // CODE eq 'ABC' and STATUS eq 1
 * ```
 *
 * Operator objects:
 * ```typescript
 * {
 *   code: { like: 'AB*' },           // CODE like 'AB*'
 *   price: { gte: 100, lte: 500 },   // PRICE gte 100 and PRICE lte 500
 *   status: { in: [1, 2, 3] }        // (STATUS eq 1 or STATUS eq 2 or STATUS eq 3)
 * }
 * ```
 *
 * Array values (OR condition):
 * ```typescript
 * { tags: ['A', 'B'] }  // (TAGS eq 'A' or TAGS eq 'B')
 * ```
 */
export interface ShiftAssignmentsSearchCriteria {
  internalReference?: NumberFieldValue;
  sourceType?: NumberFieldValue;
  sourceCode?: StringFieldValue;
  shiftCode?: StringFieldValue;
  sourceref?: NumberFieldValue;
  shiftref?: NumberFieldValue;
  begdate?: StringFieldValue;
  linenr?: NumberFieldValue;
  shifttref?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ShiftAssignments entities
 */
export interface ShiftAssignmentsAnalytics {
  total: number;
  // Add ShiftAssignments-specific analytics fields
}
