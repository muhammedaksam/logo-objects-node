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
 * Interface for RSCollection[RS_UnitSetLineXML]
 */
export interface RscollectionrsUnitsetlinexml {
  Meta?: Meta;
  items?: RsUnitsetlinexml[];
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
 * RsUnitsetlinexml transaction line item
 *
 * Represents individual transaction records within a UnitSets collection.
 */
export interface RsUnitsetlinexml extends BaseEntity {
  CODE?: string;
  NAME?: string;
  UNITSETREF?: number;
  UNIT_ORDER?: number;
  MAIN_UNIT?: number;
  CONV_FACT1?: number;
  CONV_FACT2?: number;
  WIDTH?: number;
  LENGTH?: number;
  HEIGHT?: number;
  AREA?: number;
  VOLUME?: number;
  WEIGHT?: number;
  WIDTHREF?: number;
  LENGTHREF?: number;
  HEIGHTREF?: number;
  AREAREF?: number;
  VOLUMEREF?: number;
  WEIGHTREF?: number;
  DIVISIBLE?: number;
  WIDTH_CODE?: string;
  LENGTH_CODE?: string;
  HEIGHT_CODE?: string;
  AREA_CODE?: string;
  VOLUME_CODE?: string;
  WEIGHT_CODE?: string;
  GLOBAL_CODE?: string;
}

/**
 * UnitSets entity interface based on swagger definition
 */
export interface UnitSets extends BaseEntity {
  CODE?: string;
  DESCRIPTION?: string;
  TYPE?: number;
  ITEM_SPECIFIC?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  WF_STATUS?: number;
  UNITS?: RscollectionrsUnitsetlinexml;
  DELLINELIST?: string;
  MAINUNITCODE?: string;
  XBUFS?: string;
  GUID?: string;
}

/**
 * Union type of all UnitSets field names for type-safe field selection and sorting
 */
export type UnitSetsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'DESCRIPTION'
  | 'XML_ATTRIBUTE'
  | 'TYPE'
  | 'ITEM_SPECIFIC'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
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
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'WF_STATUS'
  | 'UNITS'
  | 'DELLINELIST'
  | 'MAINUNITCODE'
  | 'XBUFS'
  | 'GUID';

/**
 * Type-safe sort specification for UnitSets queries
 */
export type UnitSetsSortSpec =
  | [UnitSetsField]
  | [UnitSetsField, 'asc' | 'desc']
  | [UnitSetsField[], 'asc' | 'desc']
  | [UnitSetsField[]];

/**
 * Type-safe query options for UnitSets entities
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
export interface UnitSetsQueryOptions extends Omit<QueryOptions<UnitSetsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: UnitSetsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: UnitSetsSortSpec;
}

/**
 * Search criteria for UnitSets entities
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
export interface UnitSetsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  description?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  type?: NumberFieldValue;
  itemSpecific?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
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
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfStatus?: NumberFieldValue;
  units?: DateFieldValue;
  dellinelist?: StringFieldValue;
  mainunitcode?: StringFieldValue;
  xbufs?: StringFieldValue;
  guid?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for UnitSets entities
 */
export interface UnitSetsAnalytics {
  total: number;
  // Add UnitSets-specific analytics fields
}
