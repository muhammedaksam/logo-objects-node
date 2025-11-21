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
 * ArpMLDescriptons entity interface based on swagger definition
 */
export interface ArpMLDescriptons extends BaseEntity {
  LOGICALREF?: number;
  DOC_ID?: number;
  DOCREF?: number;
  FIELD_ID?: number;
  LANG_ID?: number;
  FIELD_CONT?: string;
  DOC_CODE?: string;
}

/**
 * Union type of all ArpMLDescriptons field names for type-safe field selection and sorting
 */
export type ArpMLDescriptonsField =
  | 'LOGICALREF'
  | 'DOC_ID'
  | 'DOCREF'
  | 'FIELD_ID'
  | 'LANG_ID'
  | 'FIELD_CONT'
  | 'DOC_CODE';

/**
 * Type-safe sort specification for ArpMLDescriptons queries
 */
export type ArpMLDescriptonsSortSpec =
  | [ArpMLDescriptonsField]
  | [ArpMLDescriptonsField, 'asc' | 'desc']
  | [ArpMLDescriptonsField[], 'asc' | 'desc']
  | [ArpMLDescriptonsField[]];

/**
 * Type-safe query options for ArpMLDescriptons entities
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
export interface ArpMLDescriptonsQueryOptions
  extends Omit<QueryOptions<ArpMLDescriptonsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ArpMLDescriptonsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ArpMLDescriptonsSortSpec;
}

/**
 * Search criteria for ArpMLDescriptons entities
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
export interface ArpMLDescriptonsSearchCriteria {
  logicalref?: NumberFieldValue;
  docId?: NumberFieldValue;
  docref?: NumberFieldValue;
  fieldId?: NumberFieldValue;
  langId?: NumberFieldValue;
  fieldCont?: StringFieldValue;
  docCode?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ArpMLDescriptons entities
 */
export interface ArpMLDescriptonsAnalytics {
  total: number;
  // Add ArpMLDescriptons-specific analytics fields
}
