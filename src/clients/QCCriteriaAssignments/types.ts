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
 * Qccriteriaassignments entity interface based on swagger definition
 */
export interface Qccriteriaassignments extends BaseEntity {
  SETREF?: number;
  LINEREF?: number;
  IMPORTANCE?: string;
  FREQUENCY?: number;
  COUNTER?: number;
  SAMPLESIZE?: number;
  NOMVAL?: number;
  MINVAL?: number;
  MINTOL?: number;
  MAXVAL?: number;
  PLUSTOL?: number;
  INSPPOINT?: number;
  INSPFICHES1?: number;
  INSPFICHES2?: number;
  INSPFICHES3?: number;
  ASGNREF?: number;
  OPITEMREF?: number;
  ASGNTYPE?: number;
  VALREF?: number;
  LINENO?: number;
  REVISIONNO?: number;
  CONFORMRATE?: number;
  TOOLCODE?: string;
  CONTROLLER?: number;
  TOOLREF?: number;
  ORGREVNO?: number;
  REVSITEID?: number;
  IMPORTANCEVAL?: number;
  QCODE?: string;
  LCODE?: string;
  ASGNCODE?: string;
  IOCODE?: string;
  VCODE?: string;
  CCODE?: string;
  UPDATE_CHILD?: number;
}

/**
 * Union type of all Qccriteriaassignments field names for type-safe field selection and sorting
 */
export type QccriteriaassignmentsField =
  | 'INTERNAL_REFERENCE'
  | 'SETREF'
  | 'LINEREF'
  | 'IMPORTANCE'
  | 'FREQUENCY'
  | 'COUNTER'
  | 'SAMPLESIZE'
  | 'NOMVAL'
  | 'MINVAL'
  | 'MINTOL'
  | 'MAXVAL'
  | 'PLUSTOL'
  | 'INSPPOINT'
  | 'INSPFICHES1'
  | 'INSPFICHES2'
  | 'INSPFICHES3'
  | 'ASGNREF'
  | 'OPITEMREF'
  | 'ASGNTYPE'
  | 'VALREF'
  | 'LINENO'
  | 'REVISIONNO'
  | 'CONFORMRATE'
  | 'TOOLCODE'
  | 'CONTROLLER'
  | 'TOOLREF'
  | 'ORGREVNO'
  | 'REVSITEID'
  | 'IMPORTANCEVAL'
  | 'QCODE'
  | 'LCODE'
  | 'ASGNCODE'
  | 'IOCODE'
  | 'VCODE'
  | 'CCODE'
  | 'UPDATE_CHILD';

/**
 * Type-safe sort specification for Qccriteriaassignments queries
 */
export type QccriteriaassignmentsSortSpec =
  | [QccriteriaassignmentsField]
  | [QccriteriaassignmentsField, 'asc' | 'desc']
  | [QccriteriaassignmentsField[], 'asc' | 'desc']
  | [QccriteriaassignmentsField[]];

/**
 * Type-safe query options for Qccriteriaassignments entities
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
export interface QccriteriaassignmentsQueryOptions extends Omit<
  QueryOptions<QccriteriaassignmentsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: QccriteriaassignmentsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: QccriteriaassignmentsSortSpec;
}

/**
 * Search criteria for Qccriteriaassignments entities
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
export interface QccriteriaassignmentsSearchCriteria {
  internalReference?: NumberFieldValue;
  setref?: NumberFieldValue;
  lineref?: NumberFieldValue;
  importance?: StringFieldValue;
  frequency?: NumberFieldValue;
  counter?: NumberFieldValue;
  samplesize?: NumberFieldValue;
  nomval?: NumberFieldValue;
  minval?: NumberFieldValue;
  mintol?: NumberFieldValue;
  maxval?: NumberFieldValue;
  plustol?: NumberFieldValue;
  insppoint?: NumberFieldValue;
  inspfiches1?: NumberFieldValue;
  inspfiches2?: NumberFieldValue;
  inspfiches3?: NumberFieldValue;
  asgnref?: NumberFieldValue;
  opitemref?: NumberFieldValue;
  asgntype?: NumberFieldValue;
  valref?: NumberFieldValue;
  lineno?: NumberFieldValue;
  revisionno?: NumberFieldValue;
  conformrate?: NumberFieldValue;
  toolcode?: StringFieldValue;
  controller?: NumberFieldValue;
  toolref?: NumberFieldValue;
  orgrevno?: NumberFieldValue;
  revsiteid?: NumberFieldValue;
  importanceval?: NumberFieldValue;
  qcode?: StringFieldValue;
  lcode?: StringFieldValue;
  asgncode?: StringFieldValue;
  iocode?: StringFieldValue;
  vcode?: StringFieldValue;
  ccode?: StringFieldValue;
  updateChild?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Qccriteriaassignments entities
 */
export interface QccriteriaassignmentsAnalytics {
  total: number;
  // Add Qccriteriaassignments-specific analytics fields
}
