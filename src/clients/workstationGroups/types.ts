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
 * Interface for RSCollection[RS_WrStListXML]
 */
export interface RscollectionrsWrstlistxml {
  Meta?: Meta;
  items?: RsWrstlistxml[];
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
 * RsWrstlistxml transaction line item
 *
 * Represents individual transaction records within a WorkstationGroups collection.
 */
export interface RsWrstlistxml extends BaseEntity {
  CODE?: string;
  DEFINITION?: string;
  REF?: number;
  ASSREF?: number;
  PRIORITY?: number;
  DOM_SHFT_GRP?: number;
}

/**
 * WorkstationGroups entity interface based on swagger definition
 */
export interface WorkstationGroups extends BaseEntity {
  CODE?: string;
  NAME?: string;
  AUIXIL_CODE?: string;
  AUTH_CODE?: string;
  FACTORYNR?: number;
  APPROVED?: number;
  OPERATION_TIME?: number;
  HOURLY_STD_COST?: number;
  HOURLY_STDRP_COST?: number;
  ACCOUNTREF?: number;
  CENTERREF?: number;
  WFSTATUS?: number;
  UPDATED?: number;
  GL_CODE?: string;
  OHP_CODE?: string;
  WORSTATIONS?: RscollectionrsWrstlistxml;
  WSDELLIST?: string;
  FLDALS?: string;
  ITEXT?: string;
  TEXTCHG?: number;
  XBUFS?: string;
  HOURDIFFACCREF?: number;
  HDIFF_ACC_CODE?: string;
  HDIFFCENTERREF?: number;
  HDIFF_CENTER_CODE?: string;
  PAYDIFFACCREF?: number;
  PDIFF_ACC_CODE?: string;
  PDIFFCENTERREF?: number;
  PDIFF_CENTER_CODE?: string;
}

/**
 * Union type of all WorkstationGroups field names for type-safe field selection and sorting
 */
export type WorkstationGroupsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'AUIXIL_CODE'
  | 'AUTH_CODE'
  | 'FACTORYNR'
  | 'APPROVED'
  | 'OPERATION_TIME'
  | 'HOURLY_STD_COST'
  | 'HOURLY_STDRP_COST'
  | 'ACCOUNTREF'
  | 'CENTERREF'
  | 'RECORD_STATUS'
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
  | 'TEXTINC'
  | 'IMAGEINC'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WFSTATUS'
  | 'UPDATED'
  | 'GL_CODE'
  | 'OHP_CODE'
  | 'WORSTATIONS'
  | 'WSDELLIST'
  | 'FLDALS'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'XBUFS'
  | 'HOURDIFFACCREF'
  | 'HDIFF_ACC_CODE'
  | 'HDIFFCENTERREF'
  | 'HDIFF_CENTER_CODE'
  | 'PAYDIFFACCREF'
  | 'PDIFF_ACC_CODE'
  | 'PDIFFCENTERREF'
  | 'PDIFF_CENTER_CODE';

/**
 * Type-safe sort specification for WorkstationGroups queries
 */
export type WorkstationGroupsSortSpec =
  | [WorkstationGroupsField]
  | [WorkstationGroupsField, 'asc' | 'desc']
  | [WorkstationGroupsField[], 'asc' | 'desc']
  | [WorkstationGroupsField[]];

/**
 * Type-safe query options for WorkstationGroups entities
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
export interface WorkstationGroupsQueryOptions extends Omit<
  QueryOptions<WorkstationGroupsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: WorkstationGroupsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: WorkstationGroupsSortSpec;
}

/**
 * Search criteria for WorkstationGroups entities
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
export interface WorkstationGroupsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  auixilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  factorynr?: NumberFieldValue;
  approved?: NumberFieldValue;
  operationTime?: NumberFieldValue;
  hourlyStdCost?: NumberFieldValue;
  hourlyStdrpCost?: NumberFieldValue;
  accountref?: NumberFieldValue;
  centerref?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
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
  textinc?: NumberFieldValue;
  imageinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  updated?: NumberFieldValue;
  glCode?: StringFieldValue;
  ohpCode?: StringFieldValue;
  worstations?: DateFieldValue;
  wsdellist?: StringFieldValue;
  fldals?: StringFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  xbufs?: StringFieldValue;
  hourdiffaccref?: NumberFieldValue;
  hdiffAccCode?: StringFieldValue;
  hdiffcenterref?: NumberFieldValue;
  hdiffCenterCode?: StringFieldValue;
  paydiffaccref?: NumberFieldValue;
  pdiffAccCode?: StringFieldValue;
  pdiffcenterref?: NumberFieldValue;
  pdiffCenterCode?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for WorkstationGroups entities
 */
export interface WorkstationGroupsAnalytics {
  total: number;
  // Add WorkstationGroups-specific analytics fields
}
