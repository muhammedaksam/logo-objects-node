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
 * SalesDiscounts entity interface based on swagger definition
 */
export interface SalesDiscounts extends BaseEntity {
  CARDTYPE?: number;
  CODE?: string;
  DESCRIPTION?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  FORMULA?: string;
  ROUND_BASE?: number;
  VAT_PERC?: number;
  COUNTER?: number;
  UNIT?: string;
  PROD_STATUS?: number;
  UPDATED?: number;
  TRCODE?: number;
  CARDREF?: number;
  TYP?: number;
  GL_CODE?: string;
  ACCOUNTREF?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
  XBUFS?: string;
  EXT_ACCESS_FLAGS?: number;
  STOPPAGE_DISC?: number;
  UNICODE?: string;
  UNICODE_DEF?: string;
}

/**
 * Union type of all SalesDiscounts field names for type-safe field selection and sorting
 */
export type SalesDiscountsField =
  | 'INTERNAL_REFERENCE'
  | 'CARDTYPE'
  | 'RECORD_STATUS'
  | 'CODE'
  | 'DESCRIPTION'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'FORMULA'
  | 'ROUND_BASE'
  | 'VAT_PERC'
  | 'COUNTER'
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
  | 'UNIT'
  | 'PROD_STATUS'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'UPDATED'
  | 'TRCODE'
  | 'CARDREF'
  | 'TYP'
  | 'GL_CODE'
  | 'ACCOUNTREF'
  | 'OHP_CODE'
  | 'CENTERREF'
  | 'XBUFS'
  | 'XML_ATTRIBUTE'
  | 'EXT_ACCESS_FLAGS'
  | 'STOPPAGE_DISC'
  | 'UNICODE'
  | 'UNICODE_DEF';

/**
 * Type-safe sort specification for SalesDiscounts queries
 */
export type SalesDiscountsSortSpec =
  | [SalesDiscountsField]
  | [SalesDiscountsField, 'asc' | 'desc']
  | [SalesDiscountsField[], 'asc' | 'desc']
  | [SalesDiscountsField[]];

/**
 * Type-safe query options for SalesDiscounts entities
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
export interface SalesDiscountsQueryOptions
  extends Omit<QueryOptions<SalesDiscountsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: SalesDiscountsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: SalesDiscountsSortSpec;
}

/**
 * Search criteria for SalesDiscounts entities
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
export interface SalesDiscountsSearchCriteria {
  internalReference?: NumberFieldValue;
  cardtype?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  code?: StringFieldValue;
  description?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  formula?: StringFieldValue;
  roundBase?: NumberFieldValue;
  vatPerc?: NumberFieldValue;
  counter?: NumberFieldValue;
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
  unit?: StringFieldValue;
  prodStatus?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  updated?: NumberFieldValue;
  trcode?: NumberFieldValue;
  cardref?: NumberFieldValue;
  typ?: NumberFieldValue;
  glCode?: StringFieldValue;
  accountref?: NumberFieldValue;
  ohpCode?: StringFieldValue;
  centerref?: NumberFieldValue;
  xbufs?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  extAccessFlags?: NumberFieldValue;
  stoppageDisc?: NumberFieldValue;
  unicode?: StringFieldValue;
  unicodeDef?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for SalesDiscounts entities
 */
export interface SalesDiscountsAnalytics {
  total: number;
  // Add SalesDiscounts-specific analytics fields
}
