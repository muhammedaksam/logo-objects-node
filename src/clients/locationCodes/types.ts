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
 * LocationCodes entity interface based on swagger definition
 */
export interface LocationCodes extends BaseEntity {
  INVENNR?: number;
  CODE?: string;
  NAME?: string;
  WIDTH?: number;
  LENGTH?: number;
  HEIGHT?: number;
  WIDTHREF?: number;
  LENGTHREF?: number;
  HEIGHTREF?: number;
  MIN_LEVEL?: number;
  MAX_LEVEL?: number;
  SHELF_TYPE?: number;
  CONTENT_TYPE?: number;
  PRIORITY?: number;
  USETREF?: number;
  UOMREF?: number;
  IS_EURO_PALETTE?: number;
  WF_STATUS?: number;
  WIDTH_CODE?: string;
  LENGTH_CODE?: string;
  HEIGHT_CODE?: string;
  USET_CODE?: string;
  UOM_CODE?: string;
}

/**
 * Union type of all LocationCodes field names for type-safe field selection and sorting
 */
export type LocationCodesField =
  | 'INTERNAL_REFERENCE'
  | 'INVENNR'
  | 'CODE'
  | 'NAME'
  | 'WIDTH'
  | 'LENGTH'
  | 'HEIGHT'
  | 'WIDTHREF'
  | 'LENGTHREF'
  | 'HEIGHTREF'
  | 'MIN_LEVEL'
  | 'MAX_LEVEL'
  | 'SHELF_TYPE'
  | 'CONTENT_TYPE'
  | 'PRIORITY'
  | 'USETREF'
  | 'UOMREF'
  | 'IS_EURO_PALETTE'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WF_STATUS'
  | 'WIDTH_CODE'
  | 'LENGTH_CODE'
  | 'HEIGHT_CODE'
  | 'USET_CODE'
  | 'UOM_CODE';

/**
 * Type-safe sort specification for LocationCodes queries
 */
export type LocationCodesSortSpec =
  | [LocationCodesField]
  | [LocationCodesField, 'asc' | 'desc']
  | [LocationCodesField[], 'asc' | 'desc']
  | [LocationCodesField[]];

/**
 * Type-safe query options for LocationCodes entities
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
export interface LocationCodesQueryOptions
  extends Omit<QueryOptions<LocationCodesField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: LocationCodesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: LocationCodesSortSpec;
}

/**
 * Search criteria for LocationCodes entities
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
export interface LocationCodesSearchCriteria {
  internalReference?: NumberFieldValue;
  invennr?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  width?: NumberFieldValue;
  length?: NumberFieldValue;
  height?: NumberFieldValue;
  widthref?: NumberFieldValue;
  lengthref?: NumberFieldValue;
  heightref?: NumberFieldValue;
  minLevel?: NumberFieldValue;
  maxLevel?: NumberFieldValue;
  shelfType?: NumberFieldValue;
  contentType?: NumberFieldValue;
  priority?: NumberFieldValue;
  usetref?: NumberFieldValue;
  uomref?: NumberFieldValue;
  isEuroPalette?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfStatus?: NumberFieldValue;
  widthCode?: StringFieldValue;
  lengthCode?: StringFieldValue;
  heightCode?: StringFieldValue;
  usetCode?: StringFieldValue;
  uomCode?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for LocationCodes entities
 */
export interface LocationCodesAnalytics {
  total: number;
  // Add LocationCodes-specific analytics fields
}
