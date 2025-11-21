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
 * Interface for RSCollection[RS_SlsClRelXML]
 */
export interface RscollectionrsSlsclrelxml {
  Meta?: Meta;
  items?: RsSlsclrelxml[];
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
 * RsSlsclrelxml transaction line item
 *
 * Represents individual transaction records within a CustomersOfSalesmen collection.
 */
export interface RsSlsclrelxml extends BaseEntity {
  SALESMANREF?: number;
  LINE_NO?: number;
  CLIENTREF?: number;
  CODE?: string;
  NAME?: string;
  BEG_DATE?: string;
  VISIT_DAY?: number;
  VISIT_PERIOD?: string;
  SHIPREF?: number;
  SHIP_CODE?: string;
  CL_LINE_NO?: number;
}

/**
 * CustomersOfSalesmen entity interface based on swagger definition
 */
export interface CustomersOfSalesmen extends BaseEntity {
  CODE?: string;
  NAME?: string;
  CARDTYPE?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  POSITION?: string;
  USER_ID?: number;
  DEPT_ID?: number;
  DIVIS_ID?: number;
  FIRM_NO?: number;
  CL_LIST?: RscollectionrsSlsclrelxml;
  TARGETS?: string;
  XBUFS?: string;
  TYPE?: number;
  EMAILADDR?: string;
}

/**
 * Union type of all CustomersOfSalesmen field names for type-safe field selection and sorting
 */
export type CustomersOfSalesmenField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'CARDTYPE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'POSITION'
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
  | 'RECORD_STATUS'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'USER_ID'
  | 'DEPT_ID'
  | 'DIVIS_ID'
  | 'FIRM_NO'
  | 'CL_LIST'
  | 'TARGETS'
  | 'XBUFS'
  | 'XML_ATTRIBUTE'
  | 'TYPE'
  | 'EMAILADDR';

/**
 * Type-safe sort specification for CustomersOfSalesmen queries
 */
export type CustomersOfSalesmenSortSpec =
  | [CustomersOfSalesmenField]
  | [CustomersOfSalesmenField, 'asc' | 'desc']
  | [CustomersOfSalesmenField[], 'asc' | 'desc']
  | [CustomersOfSalesmenField[]];

/**
 * Type-safe query options for CustomersOfSalesmen entities
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
export interface CustomersOfSalesmenQueryOptions
  extends Omit<QueryOptions<CustomersOfSalesmenField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: CustomersOfSalesmenField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: CustomersOfSalesmenSortSpec;
}

/**
 * Search criteria for CustomersOfSalesmen entities
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
export interface CustomersOfSalesmenSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  cardtype?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  position?: StringFieldValue;
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
  recordStatus?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  userId?: NumberFieldValue;
  deptId?: NumberFieldValue;
  divisId?: NumberFieldValue;
  firmNo?: NumberFieldValue;
  clList?: DateFieldValue;
  targets?: StringFieldValue;
  xbufs?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  type?: NumberFieldValue;
  emailaddr?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for CustomersOfSalesmen entities
 */
export interface CustomersOfSalesmenAnalytics {
  total: number;
  // Add CustomersOfSalesmen-specific analytics fields
}
