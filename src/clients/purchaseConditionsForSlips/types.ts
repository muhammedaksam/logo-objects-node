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
 * PurchaseConditionsForSlips entity interface based on swagger definition
 */
export interface PurchaseConditionsForSlips extends BaseEntity {
  CODE?: string;
  DEFINITION?: string;
  USE_TYPE?: number;
  LINE_NO?: number;
  CARDREF?: number;
  LINE_TYPE?: number;
  PRIORITY?: number;
  BEG_DATE?: string;
  END_DATE?: string;
  STCODES?: string;
  CICODES?: string;
  PAYCODES?: string;
  ITEM_TYPE?: number;
}

/**
 * Union type of all PurchaseConditionsForSlips field names for type-safe field selection and sorting
 */
export type PurchaseConditionsForSlipsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'DEFINITION'
  | 'USE_TYPE'
  | 'LINE_NO'
  | 'CARDREF'
  | 'LINE_TYPE'
  | 'RECORD_STATUS'
  | 'PRIORITY'
  | 'BEG_DATE'
  | 'END_DATE'
  | 'STCODES'
  | 'CICODES'
  | 'PAYCODES'
  | 'ITEM_TYPE'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'XML_ATTRIBUTE';

/**
 * Type-safe sort specification for PurchaseConditionsForSlips queries
 */
export type PurchaseConditionsForSlipsSortSpec =
  | [PurchaseConditionsForSlipsField]
  | [PurchaseConditionsForSlipsField, 'asc' | 'desc']
  | [PurchaseConditionsForSlipsField[], 'asc' | 'desc']
  | [PurchaseConditionsForSlipsField[]];

/**
 * Type-safe query options for PurchaseConditionsForSlips entities
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
export interface PurchaseConditionsForSlipsQueryOptions
  extends Omit<QueryOptions<PurchaseConditionsForSlipsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: PurchaseConditionsForSlipsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: PurchaseConditionsForSlipsSortSpec;
}

/**
 * Search criteria for PurchaseConditionsForSlips entities
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
export interface PurchaseConditionsForSlipsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  definition?: StringFieldValue;
  useType?: NumberFieldValue;
  lineNo?: NumberFieldValue;
  cardref?: NumberFieldValue;
  lineType?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  priority?: NumberFieldValue;
  begDate?: StringFieldValue;
  endDate?: StringFieldValue;
  stcodes?: StringFieldValue;
  cicodes?: StringFieldValue;
  paycodes?: StringFieldValue;
  itemType?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for PurchaseConditionsForSlips entities
 */
export interface PurchaseConditionsForSlipsAnalytics {
  total: number;
  // Add PurchaseConditionsForSlips-specific analytics fields
}
