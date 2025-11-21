import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_OprLineXML]
 */
export interface RscollectionrsOprlinexml {
  Meta?: Meta;
  items?: RsOprlinexml[];
}

/**
 * Interface for RSCollection[RS_LaborReqListXML]
 */
export interface RscollectionrsLaborreqlistxml {
  Meta?: Meta;
  items?: RsLaborreqlistxml[];
}

/**
 * Interface for RSCollection[RS_ToolReqListXML]
 */
export interface RscollectionrsToolreqlistxml {
  Meta?: Meta;
  items?: RsToolreqlistxml[];
}

/**
 * Interface for RSCollection[RS_WSAttribsXML]
 */
export interface RscollectionrsWsattribsxml {
  Meta?: Meta;
  items?: RsWsattribsxml[];
}

/**
 * Interface for RSCollection[RS_OpActXML]
 */
export interface RscollectionrsOpactxml {
  Meta?: Meta;
  items?: RsOpactxml[];
}

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
 * RsOprlinexml transaction line item
 *
 * Represents individual transaction records within a Operations collection.
 */
export interface RsOprlinexml extends BaseEntity {
  OPERATIONREF?: number;
  LINE_NO?: number;
  GROUP?: number;
  WSREF?: number;
  BEGDATE?: string;
  FIXED_SETUP_TIME?: number;
  BATCH_QUANTITY?: number;
  RUN_TIME?: number;
  TRANS_BATCH_QTY?: number;
  TRANS_BATCH_TIME?: number;
  WAIT_BATCH_QTY?: number;
  WAIT_BATCH_TIME?: number;
  INSP_TIME?: number;
  QUE_TIME?: number;
  HEAD_TIME?: number;
  TAIL_TIME?: number;
  USAGE_PER?: number;
  EFFICIENCY?: number;
  PRIORITY?: number;
  MIN_AMOUNT?: number;
  MAX_AMOUNT?: number;
  WS_CODE?: string;
  WS_NAME?: string;
  PLANT_NO?: number;
  LABOR_REQS?: RscollectionrsLaborreqlistxml;
  LDELLIST?: string;
  TOOL_REQS?: RscollectionrsToolreqlistxml;
  TDELLIST?: string;
  WS_CHARACTERISTICS?: RscollectionrsWsattribsxml;
  WSDELLIST?: string;
  OP_ACTIVITIES?: RscollectionrsOpactxml;
  OP_ACT_DELLIST?: string;
  LINE_UP_DELAY?: number;
  LINE_UP_DELAY_UNIT?: number;
  CONDITION?: string;
}

/**
 * RsLaborreqlistxml transaction line item
 *
 * Represents individual transaction records within a Operations collection.
 */
export interface RsLaborreqlistxml extends BaseEntity {
  OPREQREF?: number;
  LINE_NO?: number;
  GROUP?: number;
  EMPREF?: number;
  AMOUNT?: number;
  EMP_CODE?: string;
  EMP_NAME?: string;
}

/**
 * RsToolreqlistxml transaction line item
 *
 * Represents individual transaction records within a Operations collection.
 */
export interface RsToolreqlistxml extends BaseEntity {
  OPREQREF?: number;
  LINE_NO?: number;
  TOOLREF?: number;
  AMOUNT?: number;
  UOMREF?: number;
  ITEM_CODE?: string;
  ITEM_NAME?: string;
  UNIT_SET_CODE?: string;
  UNIT_CODE?: string;
  TOOL_TYPE?: number;
  REVREF?: number;
  REVISION_CODE?: string;
  OPERATIONREF?: number;
  OPERATION_CODE?: string;
}

/**
 * RsWsattribsxml transaction line item
 *
 * Represents individual transaction records within a Operations collection.
 */
export interface RsWsattribsxml extends BaseEntity {
  ITEMREF?: number;
  CHARCODEREF?: number;
  CHARVALREF?: number;
  LINE_NO?: number;
  MATRIX_LOC?: number;
  PRIORITY?: number;
  VLIST?: string;
  DLIST?: string;
  CCODE?: string;
  CNAME?: string;
  VCODE?: string;
}

/**
 * RsOpactxml transaction line item
 *
 * Represents individual transaction records within a Operations collection.
 */
export interface RsOpactxml extends BaseEntity {
  OPREQREF?: number;
  OVHDREF?: number;
  FORMULA?: string;
  AMOUNT?: number;
  WHEN_HAPPEN?: number;
  OVERHEAD_CODE?: string;
  OVERHEAD_NAME?: string;
  OVERHEAD_UNIT?: string;
  FORMULA_ERR?: number;
}

/**
 * Operations entity interface based on swagger definition
 */
export interface Operations extends BaseEntity {
  CODE?: string;
  NAME?: string;
  TYPE?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  APPROVED?: number;
  QCCSETREF?: number;
  WF_STATUS?: number;
  UPDATED?: number;
  REQUIREMENTS?: RscollectionrsOprlinexml;
  REQDELLIST?: string;
  FLDALS?: string;
  ITEXT?: string;
  TEXTCHG?: number;
  XBUFS?: string;
  PRINT_CNT?: number;
  PRINT_DATE?: string;
  DOCOUNTING?: number;
  DIST_TYPE?: number;
}

/**
 * Union type of all Operations field names for type-safe field selection and sorting
 */
export type OperationsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'TYPE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'APPROVED'
  | 'RECORD_STATUS'
  | 'QCCSETREF'
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
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WF_STATUS'
  | 'UPDATED'
  | 'REQUIREMENTS'
  | 'REQDELLIST'
  | 'FLDALS'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'XBUFS'
  | 'PRINT_CNT'
  | 'PRINT_DATE'
  | 'DOCOUNTING'
  | 'DIST_TYPE';

/**
 * Type-safe sort specification for Operations queries
 */
export type OperationsSortSpec =
  | [OperationsField]
  | [OperationsField, 'asc' | 'desc']
  | [OperationsField[], 'asc' | 'desc']
  | [OperationsField[]];

/**
 * Type-safe query options for Operations entities
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
export interface OperationsQueryOptions
  extends Omit<QueryOptions<OperationsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: OperationsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: OperationsSortSpec;
}

/**
 * Search criteria for Operations entities
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
export interface OperationsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  type?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  approved?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  qccsetref?: NumberFieldValue;
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
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfStatus?: NumberFieldValue;
  updated?: NumberFieldValue;
  requirements?: DateFieldValue;
  reqdellist?: StringFieldValue;
  fldals?: StringFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  xbufs?: StringFieldValue;
  printCnt?: NumberFieldValue;
  printDate?: StringFieldValue;
  docounting?: NumberFieldValue;
  distType?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Operations entities
 */
export interface OperationsAnalytics {
  total: number;
  // Add Operations-specific analytics fields
}
