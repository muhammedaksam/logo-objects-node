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
 * SafeDeposits entity interface based on swagger definition
 */
export interface SafeDeposits extends BaseEntity {
  CODE?: string;
  DESCRIPTION?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  USAGE_NOTE?: string;
  ADDRESS1?: string;
  ADDRESS2?: string;
  XBUFS?: string;
  GL_CODE1?: string;
  ACCOUNTREF1?: number;
  OHP_CODE1?: string;
  CENTERREF1?: number;
  GL_CODE2?: string;
  ACCOUNTREF2?: number;
  OHP_CODE2?: string;
  CENTERREF2?: number;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  CCURRENCY?: number;
  CURR_RATE_TYPE?: number;
  FIXED_CURR_TYPE?: number;
  GL_CODE3?: string;
  ACCOUNTREF3?: number;
  OHP_CODE3?: string;
  CENTERREF3?: number;
  GL_CODE4?: string;
  ACCOUNTREF4?: number;
  OHP_CODE4?: string;
  CENTERREF4?: number;
  GL_CODE5?: string;
  ACCOUNTREF5?: number;
  OHP_CODE5?: string;
  CENTERREF5?: number;
  DIVISION?: number;
  GUID?: string;
}

/**
 * Union type of all SafeDeposits field names for type-safe field selection and sorting
 */
export type SafeDepositsField =
  | 'INTERNAL_REFERENCE'
  | 'RECORD_STATUS'
  | 'CODE'
  | 'DESCRIPTION'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'USAGE_NOTE'
  | 'ADDRESS1'
  | 'ADDRESS2'
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
  | 'GL_CODE1'
  | 'ACCOUNTREF1'
  | 'OHP_CODE1'
  | 'CENTERREF1'
  | 'GL_CODE2'
  | 'ACCOUNTREF2'
  | 'OHP_CODE2'
  | 'CENTERREF2'
  | 'XML_ATTRIBUTE'
  | 'PROJECT_CODE'
  | 'PROJECTREF'
  | 'CCURRENCY'
  | 'CURR_RATE_TYPE'
  | 'FIXED_CURR_TYPE'
  | 'GL_CODE3'
  | 'ACCOUNTREF3'
  | 'OHP_CODE3'
  | 'CENTERREF3'
  | 'GL_CODE4'
  | 'ACCOUNTREF4'
  | 'OHP_CODE4'
  | 'CENTERREF4'
  | 'GL_CODE5'
  | 'ACCOUNTREF5'
  | 'OHP_CODE5'
  | 'CENTERREF5'
  | 'DIVISION'
  | 'GUID';

/**
 * Type-safe sort specification for SafeDeposits queries
 */
export type SafeDepositsSortSpec =
  | [SafeDepositsField]
  | [SafeDepositsField, 'asc' | 'desc']
  | [SafeDepositsField[], 'asc' | 'desc']
  | [SafeDepositsField[]];

/**
 * Type-safe query options for SafeDeposits entities
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
export interface SafeDepositsQueryOptions
  extends Omit<QueryOptions<SafeDepositsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: SafeDepositsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: SafeDepositsSortSpec;
}

/**
 * Search criteria for SafeDeposits entities
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
export interface SafeDepositsSearchCriteria {
  internalReference?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  code?: StringFieldValue;
  description?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  usageNote?: StringFieldValue;
  address1?: StringFieldValue;
  address2?: StringFieldValue;
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
  glCode1?: StringFieldValue;
  accountref1?: NumberFieldValue;
  ohpCode1?: StringFieldValue;
  centerref1?: NumberFieldValue;
  glCode2?: StringFieldValue;
  accountref2?: NumberFieldValue;
  ohpCode2?: StringFieldValue;
  centerref2?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  projectCode?: StringFieldValue;
  projectref?: NumberFieldValue;
  ccurrency?: NumberFieldValue;
  currRateType?: NumberFieldValue;
  fixedCurrType?: NumberFieldValue;
  glCode3?: StringFieldValue;
  accountref3?: NumberFieldValue;
  ohpCode3?: StringFieldValue;
  centerref3?: NumberFieldValue;
  glCode4?: StringFieldValue;
  accountref4?: NumberFieldValue;
  ohpCode4?: StringFieldValue;
  centerref4?: NumberFieldValue;
  glCode5?: StringFieldValue;
  accountref5?: NumberFieldValue;
  ohpCode5?: StringFieldValue;
  centerref5?: NumberFieldValue;
  division?: NumberFieldValue;
  guid?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for SafeDeposits entities
 */
export interface SafeDepositsAnalytics {
  total: number;
  // Add SafeDeposits-specific analytics fields
}
