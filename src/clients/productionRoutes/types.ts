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
 * Interface for RSCollection[RS_RtnLineXML]
 */
export interface RscollectionrsRtnlinexml {
  Meta?: Meta;
  items?: RsRtnlinexml[];
}

/**
 * Interface for RSCollection[RS_PrevOprXML]
 */
export interface RscollectionrsPrevoprxml {
  Meta?: Meta;
  items?: RsPrevoprxml[];
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
 * RsRtnlinexml transaction line item
 *
 * Represents individual transaction records within a ProductionRoutes collection.
 */
export interface RsRtnlinexml extends BaseEntity {
  ROUTINGREF?: number;
  LINE_NO?: number;
  OPERATIONREF?: number;
  AUXIL_CODE?: string;
  COST_RELATED?: number;
  PLAN_RELATED?: number;
  OUTITEMREF?: number;
  LINE_EXP?: string;
  WF_STATUS?: number;
  OPR_CODE?: string;
  OPR_NAME?: string;
  PREV_OPR_LIST?: RscollectionrsPrevoprxml;
  POPDELLIST?: string;
}

/**
 * RsPrevoprxml transaction line item
 *
 * Represents individual transaction records within a ProductionRoutes collection.
 */
export interface RsPrevoprxml extends BaseEntity {
  ROUTINGREF?: number;
  ROUTLINEREF?: number;
  LINEOPREF?: number;
  PREVOPREF?: number;
  OVERLAPPER?: number;
  OVERLAP_TYPE?: number;
  OVERLAP_AMOUNT?: number;
  OVERLAP_METHOD?: number;
  OPR_STR?: string;
  OPR_CODE?: string;
}

/**
 * ProductionRoutes entity interface based on swagger definition
 */
export interface ProductionRoutes extends BaseEntity {
  CODE?: string;
  NAME?: string;
  TYPE?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  APPROVED?: number;
  WF_STATUS?: number;
  LINES?: RscollectionrsRtnlinexml;
  DELLIST?: string;
  UPDATED?: number;
  WARN_ACTIVE?: number;
  FLDALS?: string;
  ITEXT?: string;
  TEXTCHG?: number;
  XBUFS?: string;
  PRINT_CNT?: number;
  PRINT_DATE?: string;
}

/**
 * Union type of all ProductionRoutes field names for type-safe field selection and sorting
 */
export type ProductionRoutesField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'TYPE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'APPROVED'
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
  | 'WF_STATUS'
  | 'LINES'
  | 'DELLIST'
  | 'UPDATED'
  | 'WARN_ACTIVE'
  | 'FLDALS'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'XBUFS'
  | 'PRINT_CNT'
  | 'PRINT_DATE';

/**
 * Type-safe sort specification for ProductionRoutes queries
 */
export type ProductionRoutesSortSpec =
  | [ProductionRoutesField]
  | [ProductionRoutesField, 'asc' | 'desc']
  | [ProductionRoutesField[], 'asc' | 'desc']
  | [ProductionRoutesField[]];

/**
 * Type-safe query options for ProductionRoutes entities
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
export interface ProductionRoutesQueryOptions
  extends Omit<QueryOptions<ProductionRoutesField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ProductionRoutesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ProductionRoutesSortSpec;
}

/**
 * Search criteria for ProductionRoutes entities
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
export interface ProductionRoutesSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  type?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  approved?: NumberFieldValue;
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
  wfStatus?: NumberFieldValue;
  lines?: DateFieldValue;
  dellist?: StringFieldValue;
  updated?: NumberFieldValue;
  warnActive?: NumberFieldValue;
  fldals?: StringFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  xbufs?: StringFieldValue;
  printCnt?: NumberFieldValue;
  printDate?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ProductionRoutes entities
 */
export interface ProductionRoutesAnalytics {
  total: number;
  // Add ProductionRoutes-specific analytics fields
}
