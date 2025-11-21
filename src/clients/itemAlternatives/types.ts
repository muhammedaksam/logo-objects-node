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
 * ItemAlternatives entity interface based on swagger definition
 */
export interface ItemAlternatives extends BaseEntity {
  MAINITEMREF?: number;
  SUBITEMREF?: number;
  LINE_NO?: number;
  PRIORITY?: number;
  CONV_FACT1?: number;
  CONV_FACT2?: number;
  MAX_QUANTITY?: number;
  MIN_QUANTITY?: number;
  BEG_DATE?: string;
  END_DATE?: string;
  SUBS_CODE?: string;
  MAIN_CODE?: string;
  MAINVRNTREF?: number;
  SUBVRNTREF?: number;
  MAIN_VRNTCODE?: string;
  SUBS_VRNTCODE?: string;
}

/**
 * Union type of all ItemAlternatives field names for type-safe field selection and sorting
 */
export type ItemAlternativesField =
  | 'INTERNAL_REFERENCE'
  | 'MAINITEMREF'
  | 'SUBITEMREF'
  | 'LINE_NO'
  | 'PRIORITY'
  | 'CONV_FACT1'
  | 'CONV_FACT2'
  | 'MAX_QUANTITY'
  | 'MIN_QUANTITY'
  | 'BEG_DATE'
  | 'END_DATE'
  | 'SUBS_CODE'
  | 'MAIN_CODE'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'MAINVRNTREF'
  | 'SUBVRNTREF'
  | 'MAIN_VRNTCODE'
  | 'SUBS_VRNTCODE';

/**
 * Type-safe sort specification for ItemAlternatives queries
 */
export type ItemAlternativesSortSpec =
  | [ItemAlternativesField]
  | [ItemAlternativesField, 'asc' | 'desc']
  | [ItemAlternativesField[], 'asc' | 'desc']
  | [ItemAlternativesField[]];

/**
 * Type-safe query options for ItemAlternatives entities
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
export interface ItemAlternativesQueryOptions
  extends Omit<QueryOptions<ItemAlternativesField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ItemAlternativesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ItemAlternativesSortSpec;
}

/**
 * Search criteria for ItemAlternatives entities
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
export interface ItemAlternativesSearchCriteria {
  internalReference?: NumberFieldValue;
  mainitemref?: NumberFieldValue;
  subitemref?: NumberFieldValue;
  lineNo?: NumberFieldValue;
  priority?: NumberFieldValue;
  convFact1?: NumberFieldValue;
  convFact2?: NumberFieldValue;
  maxQuantity?: NumberFieldValue;
  minQuantity?: NumberFieldValue;
  begDate?: StringFieldValue;
  endDate?: StringFieldValue;
  subsCode?: StringFieldValue;
  mainCode?: StringFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  mainvrntref?: NumberFieldValue;
  subvrntref?: NumberFieldValue;
  mainVrntcode?: StringFieldValue;
  subsVrntcode?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ItemAlternatives entities
 */
export interface ItemAlternativesAnalytics {
  total: number;
  // Add ItemAlternatives-specific analytics fields
}
