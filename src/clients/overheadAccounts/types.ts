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
 * OverheadAccounts entity interface based on swagger definition
 */
export interface OverheadAccounts extends BaseEntity {
  CODE?: string;
  DESCRIPTION?: string;
  AUXIL_CODE?: string;
  AUXIL_CODE2?: string;
  AUXIL_CODE3?: string;
  AUXIL_CODE4?: string;
  AUXIL_CODE5?: string;
  AUTH_CODE?: string;
  UNIT?: string;
  ADDINFOREF?: number;
  EXTENREF?: number;
  XBUFS?: string;
}

/**
 * Union type of all OverheadAccounts field names for type-safe field selection and sorting
 */
export type OverheadAccountsField =
  | 'INTERNAL_REFERENCE'
  | 'RECORD_STATUS'
  | 'CODE'
  | 'DESCRIPTION'
  | 'AUXIL_CODE'
  | 'AUXIL_CODE2'
  | 'AUXIL_CODE3'
  | 'AUXIL_CODE4'
  | 'AUXIL_CODE5'
  | 'AUTH_CODE'
  | 'UNIT'
  | 'ADDINFOREF'
  | 'EXTENREF'
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
  | 'XBUFS'
  | 'XML_ATTRIBUTE';

/**
 * Type-safe sort specification for OverheadAccounts queries
 */
export type OverheadAccountsSortSpec =
  | [OverheadAccountsField]
  | [OverheadAccountsField, 'asc' | 'desc']
  | [OverheadAccountsField[], 'asc' | 'desc']
  | [OverheadAccountsField[]];

/**
 * Type-safe query options for OverheadAccounts entities
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
export interface OverheadAccountsQueryOptions
  extends Omit<QueryOptions<OverheadAccountsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: OverheadAccountsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: OverheadAccountsSortSpec;
}

/**
 * Search criteria for OverheadAccounts entities
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
export interface OverheadAccountsSearchCriteria {
  internalReference?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  code?: StringFieldValue;
  description?: StringFieldValue;
  auxilCode?: StringFieldValue;
  auxilCode2?: StringFieldValue;
  auxilCode3?: StringFieldValue;
  auxilCode4?: StringFieldValue;
  auxilCode5?: StringFieldValue;
  authCode?: StringFieldValue;
  unit?: StringFieldValue;
  addinforef?: NumberFieldValue;
  extenref?: NumberFieldValue;
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
  xbufs?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for OverheadAccounts entities
 */
export interface OverheadAccountsAnalytics {
  total: number;
  // Add OverheadAccounts-specific analytics fields
}
