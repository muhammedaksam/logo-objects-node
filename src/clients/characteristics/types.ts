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
 * Interface for RSCollection[RS_WStCharVXML]
 */
export interface RscollectionrsWstcharvxml {
  Meta?: Meta;
  items?: RsWstcharvxml[];
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
 * RsWstcharvxml transaction line item
 *
 * Represents individual transaction records within a Characteristics collection.
 */
export interface RsWstcharvxml extends BaseEntity {
  CHARCODEREF?: number;
  VALNO?: number;
  CODE?: string;
  NAME?: string;
}

/**
 * Characteristics entity interface based on swagger definition
 */
export interface Characteristics extends BaseEntity {
  CODE?: string;
  NAME?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  APPROVED?: number;
  WFSTATUS?: number;
  VALUES?: RscollectionrsWstcharvxml;
  DELLIST?: string;
  UPDATED?: number;
  TEXTCHG?: number;
  ITEXT?: string;
  FLDALS?: string;
  XBUFS?: string;
}

/**
 * Union type of all Characteristics field names for type-safe field selection and sorting
 */
export type CharacteristicsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'APPROVED'
  | 'RECORD_STATUS'
  | 'TEXTINC'
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
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WFSTATUS'
  | 'VALUES'
  | 'DELLIST'
  | 'UPDATED'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'FLDALS'
  | 'XBUFS';

/**
 * Type-safe sort specification for Characteristics queries
 */
export type CharacteristicsSortSpec =
  | [CharacteristicsField]
  | [CharacteristicsField, 'asc' | 'desc']
  | [CharacteristicsField[], 'asc' | 'desc']
  | [CharacteristicsField[]];

/**
 * Type-safe query options for Characteristics entities
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
export interface CharacteristicsQueryOptions
  extends Omit<QueryOptions<CharacteristicsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: CharacteristicsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: CharacteristicsSortSpec;
}

/**
 * Search criteria for Characteristics entities
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
export interface CharacteristicsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  approved?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  textinc?: NumberFieldValue;
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
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  values?: DateFieldValue;
  dellist?: StringFieldValue;
  updated?: NumberFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;
  fldals?: StringFieldValue;
  xbufs?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Characteristics entities
 */
export interface CharacteristicsAnalytics {
  total: number;
  // Add Characteristics-specific analytics fields
}
