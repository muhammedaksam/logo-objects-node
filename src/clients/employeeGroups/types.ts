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
 * Interface for RSCollection[RS_EmplListXML]
 */
export interface RscollectionrsEmpllistxml {
  Meta?: Meta;
  items?: RsEmpllistxml[];
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
 * RsEmpllistxml transaction line item
 *
 * Represents individual transaction records within a EmployeeGroups collection.
 */
export interface RsEmpllistxml extends BaseEntity {
  CODE?: string;
  DEFINITION?: string;
  REF?: number;
  ASSREF?: number;
  PRIORITY?: number;
  DOM_SHFT_GRP?: number;
}

/**
 * EmployeeGroups entity interface based on swagger definition
 */
export interface EmployeeGroups extends BaseEntity {
  CODE?: string;
  NAME?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  FACTORYNR?: number;
  APPROVED?: number;
  OPERATION_TIME?: number;
  HOURLY_STD_COST?: number;
  HOURLY_STDRP_COST?: number;
  ACCOUNTREF?: number;
  CENTERREF?: number;
  HOURS_CREATED?: number;
  HOURS_MODIFIED?: number;
  WFSTATUS?: number;
  UPDATED?: number;
  GL_CODE?: string;
  OHP_CODE?: string;
  EMPLOYEES?: RscollectionrsEmpllistxml;
  EMPDELLIST?: string;
  FLDALS?: string;
  ITEXT?: string;
  TEXTCHG?: number;
  XBUFS?: string;
}

/**
 * Union type of all EmployeeGroups field names for type-safe field selection and sorting
 */
export type EmployeeGroupsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'FACTORYNR'
  | 'APPROVED'
  | 'OPERATION_TIME'
  | 'HOURLY_STD_COST'
  | 'HOURLY_STDRP_COST'
  | 'ACCOUNTREF'
  | 'CENTERREF'
  | 'RECORD_STATUS'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'CREATED_BY'
  | 'DATE_CREATED'
  | 'HOURS_CREATED'
  | 'MIN_CREATED'
  | 'SEC_CREATED'
  | 'MODIFIED_BY'
  | 'DATE_MODIFIED'
  | 'HOURS_MODIFIED'
  | 'MIN_MODIFIED'
  | 'SEC_MODIFIED'
  | 'TEXTINC'
  | 'IMAGEINC'
  | 'WFSTATUS'
  | 'UPDATED'
  | 'GL_CODE'
  | 'OHP_CODE'
  | 'EMPLOYEES'
  | 'EMPDELLIST'
  | 'FLDALS'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'XBUFS';

/**
 * Type-safe sort specification for EmployeeGroups queries
 */
export type EmployeeGroupsSortSpec =
  | [EmployeeGroupsField]
  | [EmployeeGroupsField, 'asc' | 'desc']
  | [EmployeeGroupsField[], 'asc' | 'desc']
  | [EmployeeGroupsField[]];

/**
 * Type-safe query options for EmployeeGroups entities
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
export interface EmployeeGroupsQueryOptions extends Omit<
  QueryOptions<EmployeeGroupsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: EmployeeGroupsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: EmployeeGroupsSortSpec;
}

/**
 * Search criteria for EmployeeGroups entities
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
export interface EmployeeGroupsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  factorynr?: NumberFieldValue;
  approved?: NumberFieldValue;
  operationTime?: NumberFieldValue;
  hourlyStdCost?: NumberFieldValue;
  hourlyStdrpCost?: NumberFieldValue;
  accountref?: NumberFieldValue;
  centerref?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  createdBy?: NumberFieldValue;
  dateCreated?: StringFieldValue;
  hoursCreated?: NumberFieldValue;
  minCreated?: NumberFieldValue;
  secCreated?: NumberFieldValue;
  modifiedBy?: NumberFieldValue;
  dateModified?: StringFieldValue;
  hoursModified?: NumberFieldValue;
  minModified?: NumberFieldValue;
  secModified?: NumberFieldValue;
  textinc?: NumberFieldValue;
  imageinc?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  updated?: NumberFieldValue;
  glCode?: StringFieldValue;
  ohpCode?: StringFieldValue;
  employees?: DateFieldValue;
  empdellist?: StringFieldValue;
  fldals?: StringFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  xbufs?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for EmployeeGroups entities
 */
export interface EmployeeGroupsAnalytics {
  total: number;
  // Add EmployeeGroups-specific analytics fields
}
