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
 * Interface for RSCollection[RS_WStCharCXML]
 */
export interface RscollectionrsWstcharcxml {
  Meta?: Meta;
  items?: RsWstcharcxml[];
}

/**
 * Interface for RSCollection[RS_WStCharVXML_14022]
 */
export interface RscollectionrsWstcharvxml14022 {
  Meta?: Meta;
  items?: RsWstcharvxml14022[];
}

/**
 * Interface for RSCollection[RS_WSStopCXML]
 */
export interface RscollectionrsWsstopcxml {
  Meta?: Meta;
  items?: RsWsstopcxml[];
}

/**
 * Interface for RSCollection[RS_WsMoldReqXML]
 */
export interface RscollectionrsWsmoldreqxml {
  Meta?: Meta;
  items?: RsWsmoldreqxml[];
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
 * RsWstcharcxml transaction line item
 *
 * Represents individual transaction records within a Workstations collection.
 */
export interface RsWstcharcxml extends BaseEntity {
  ITEMREF?: number;
  CHARCODEREF?: number;
  CHARVALREF?: number;
  LINENR?: number;
  MATRIXLOC?: number;
  PRIORITY?: number;
  CODE?: string;
  VALUES?: RscollectionrsWstcharvxml14022;
  DLIST?: string;
  CNAME?: string;
  VCODE?: string;
}

/**
 * RsWstcharvxml14022 transaction line item
 *
 * Represents individual transaction records within a Workstations collection.
 */
export interface RsWstcharvxml14022 extends BaseEntity {
  ITEMREF?: number;
  CHARCODEREF?: number;
  CHARVALREF?: number;
  LINENR?: number;
  MATRIXLOC?: number;
  PRIORITY?: number;
  VLIST?: string;
  DLIST?: string;
  CCODE?: string;
  CNAME?: string;
  CODE?: string;
}

/**
 * RsWsstopcxml transaction line item
 *
 * Represents individual transaction records within a Workstations collection.
 */
export interface RsWsstopcxml extends BaseEntity {
  WSREF?: number;
  CAUSEREF?: number;
  AFFECTSCOST?: number;
  AFFECTSPLAN?: number;
  LOGICALREF?: number;
  CODE?: string;
  NAME?: string;
  AFFECT_COST?: number;
}

/**
 * RsWsmoldreqxml transaction line item
 *
 * Represents individual transaction records within a Workstations collection.
 */
export interface RsWsmoldreqxml extends BaseEntity {
  WSREF?: number;
  MOLDREF?: number;
  ITEMCODE?: string;
  ITEMNAME?: string;
  ITEMNAME2?: string;
}

/**
 * Workstations entity interface based on swagger definition
 */
export interface Workstations extends BaseEntity {
  CODE?: string;
  NAME?: string;
  TYPE?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  FACTORYDIVNR?: number;
  FACTORYNR?: number;
  CALENDARREF?: number;
  APPROVED?: number;
  OPERATION_TIME?: number;
  HOURLY_STD_COST?: number;
  HOURLY_STDRP_COST?: number;
  ACCOUNTREF?: number;
  CENTERREF?: number;
  WFSTATUS?: number;
  IN_INVENNR?: number;
  OUT_INVENNR?: number;
  SHIFT_GRP?: string;
  UPDATED?: number;
  GL_CODE?: string;
  OHP_CODE?: string;
  CHARACTERISTICS?: RscollectionrsWstcharcxml;
  ASVALLIST?: string;
  STOP_CAUSES?: RscollectionrsWsstopcxml;
  FLDALS?: string;
  ITEXT?: string;
  TEXTCHG?: number;
  XBUFS?: number;
  HOURDIFFACCREF?: number;
  HOUR_DIFF_GL_CODE?: string;
  HOURDIFFCENTER?: number;
  HOUR_DIFF_OHP_CODE?: string;
  PAYDIFFREF?: number;
  PAY_DIFF_GL_CODE?: string;
  PAYCENTER?: number;
  PAY_OHP_CODE?: string;
  MOLDREQLIST?: RscollectionrsWsmoldreqxml;
  DELMOLDREQLIST?: string;
}

/**
 * Union type of all Workstations field names for type-safe field selection and sorting
 */
export type WorkstationsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'TYPE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'FACTORYDIVNR'
  | 'FACTORYNR'
  | 'CALENDARREF'
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
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'TEXTINC'
  | 'IMAGEINC'
  | 'WFSTATUS'
  | 'IN_INVENNR'
  | 'OUT_INVENNR'
  | 'SHIFT_GRP'
  | 'UPDATED'
  | 'GL_CODE'
  | 'OHP_CODE'
  | 'CHARACTERISTICS'
  | 'ASVALLIST'
  | 'STOP_CAUSES'
  | 'FLDALS'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'XBUFS'
  | 'HOURDIFFACCREF'
  | 'HOUR_DIFF_GL_CODE'
  | 'HOURDIFFCENTER'
  | 'HOUR_DIFF_OHP_CODE'
  | 'PAYDIFFREF'
  | 'PAY_DIFF_GL_CODE'
  | 'PAYCENTER'
  | 'PAY_OHP_CODE'
  | 'MOLDREQLIST'
  | 'DELMOLDREQLIST';

/**
 * Type-safe sort specification for Workstations queries
 */
export type WorkstationsSortSpec =
  | [WorkstationsField]
  | [WorkstationsField, 'asc' | 'desc']
  | [WorkstationsField[], 'asc' | 'desc']
  | [WorkstationsField[]];

/**
 * Type-safe query options for Workstations entities
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
export interface WorkstationsQueryOptions extends Omit<
  QueryOptions<WorkstationsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: WorkstationsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: WorkstationsSortSpec;
}

/**
 * Search criteria for Workstations entities
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
export interface WorkstationsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  type?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  factorydivnr?: NumberFieldValue;
  factorynr?: NumberFieldValue;
  calendarref?: NumberFieldValue;
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
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  textinc?: NumberFieldValue;
  imageinc?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  inInvennr?: NumberFieldValue;
  outInvennr?: NumberFieldValue;
  shiftGrp?: StringFieldValue;
  updated?: NumberFieldValue;
  glCode?: StringFieldValue;
  ohpCode?: StringFieldValue;
  characteristics?: DateFieldValue;
  asvallist?: StringFieldValue;
  stopCauses?: DateFieldValue;
  fldals?: StringFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  xbufs?: NumberFieldValue;
  hourdiffaccref?: NumberFieldValue;
  hourDiffGlCode?: StringFieldValue;
  hourdiffcenter?: NumberFieldValue;
  hourDiffOhpCode?: StringFieldValue;
  paydiffref?: NumberFieldValue;
  payDiffGlCode?: StringFieldValue;
  paycenter?: NumberFieldValue;
  payOhpCode?: StringFieldValue;
  moldreqlist?: DateFieldValue;
  delmoldreqlist?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Workstations entities
 */
export interface WorkstationsAnalytics {
  total: number;
  // Add Workstations-specific analytics fields
}
