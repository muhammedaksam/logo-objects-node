import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for KeyValueParameter
 */
export interface KeyValueParameter {
  Name?: string;
  Value?: Object;
}

/**
 * Interface for RSCollection[RS_ShiftLines]
 */
export interface RscollectionrsShiftlines {
  Meta?: Meta;
  items?: RsShiftlines[];
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
 * RsShiftlines transaction line item
 *
 * Represents individual transaction records within a Shifts collection.
 */
export interface RsShiftlines extends BaseEntity {
  SHIFTREF?: number;
  BEG_TIME?: number;
  END_TIME?: number;
  UPDATED?: number;
  FLDALS?: string;
  ITEXT?: string;
  TEXTCHG?: number;
  XBUFS?: string;
  COST_FACTOR?: number;
}

/**
 * Shifts entity interface based on swagger definition
 */
export interface Shifts extends BaseEntity {
  CODE?: string;
  NAME?: string;
  TYPE?: number;
  SPECODE?: string;
  CYPHCODE?: string;
  UPDATED?: number;
  SHIFT_LINES?: RscollectionrsShiftlines;
  DELLIST?: string;
  FLDALS?: string;
  ITEXT?: string;
  TEXTCHG?: number;
  XBUFS?: string;
  COST_FACTOR?: number;
  WHOLE_DAY?: number;
}

/**
 * Union type of all Shifts field names for type-safe field selection and sorting
 */
export type ShiftsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'TYPE'
  | 'RECORD_STATUS'
  | 'SPECODE'
  | 'CYPHCODE'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'CREATED_BY'
  | 'DATE_CREATED'
  | 'HOUR_CREATED'
  | 'MIN_CREATED'
  | 'SEC_CREATED'
  | 'MODIFIED_BY'
  | 'DATE_MODIFIED'
  | 'HOUR_MODIFIED'
  | 'MIN_MODIFIED'
  | 'SEC_MODIFIED'
  | 'TEXTINC'
  | 'UPDATED'
  | 'SHIFT_LINES'
  | 'DELLIST'
  | 'FLDALS'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'XBUFS'
  | 'XML_ATTRIBUTE'
  | 'COST_FACTOR'
  | 'WHOLE_DAY';

/**
 * Type-safe sort specification for Shifts queries
 */
export type ShiftsSortSpec =
  | [ShiftsField]
  | [ShiftsField, 'asc' | 'desc']
  | [ShiftsField[], 'asc' | 'desc']
  | [ShiftsField[]];

/**
 * Type-safe query options for Shifts entities
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
export interface ShiftsQueryOptions extends Omit<QueryOptions<ShiftsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ShiftsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ShiftsSortSpec;
}

/**
 * Search criteria for Shifts entities
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
export interface ShiftsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  type?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  specode?: StringFieldValue;
  cyphcode?: StringFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  createdBy?: NumberFieldValue;
  dateCreated?: StringFieldValue;
  hourCreated?: NumberFieldValue;
  minCreated?: NumberFieldValue;
  secCreated?: NumberFieldValue;
  modifiedBy?: NumberFieldValue;
  dateModified?: StringFieldValue;
  hourModified?: NumberFieldValue;
  minModified?: NumberFieldValue;
  secModified?: NumberFieldValue;
  textinc?: NumberFieldValue;
  updated?: NumberFieldValue;
  shiftLines?: DateFieldValue;
  dellist?: StringFieldValue;
  fldals?: StringFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  xbufs?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  costFactor?: NumberFieldValue;
  wholeDay?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Shifts entities
 */
export interface ShiftsAnalytics {
  total: number;
  // Add Shifts-specific analytics fields
}
