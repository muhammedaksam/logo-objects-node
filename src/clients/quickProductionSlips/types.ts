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
 * Interface for RSCollection[RS_QProdTransXML]
 */
export interface RscollectionrsQprodtransxml {
  Meta?: Meta;
  items?: RsQprodtransxml[];
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
 * RsQprodtransxml transaction line item
 *
 * Represents individual transaction records within a QuickProductionSlips collection.
 */
export interface RsQprodtransxml extends BaseEntity {
  LOGICALREF?: number;
  STCREF?: number;
  AMNT?: number;
  PRICE?: number;
  PERC?: number;
  MAINCREF?: number;
  LINENO?: number;
  LOSTFACTOR?: number;
  SOURCEINDEX?: number;
  UOMREF?: number;
  CARDTYPE?: number;
  SCODE?: string;
  SDEF?: string;
  UEDIT?: string;
  UUNIT?: string;
  CLIENTREF?: number;
  ARP_CODE?: string;
  COMP_TYPE?: number;
  ALT_ITEM_USE?: number;
  UNIT_CONV1?: number;
  UNIT_CONV2?: number;
  UNIT_CONV3?: number;
  UNIT_CONV4?: number;
  UNIT_CONV5?: number;
  UNIT_CONV6?: number;
  UNIT_CONV7?: number;
  UNIT_CONV8?: number;
  GROSS_U_INFO1?: number;
  GROSS_U_INFO2?: number;
  DEPARTMENT?: number;
  BUNIT?: string;
}

/**
 * QuickProductionSlips entity interface based on swagger definition
 */
export interface QuickProductionSlips extends BaseEntity {
  FICHENO?: string;
  DATE?: string;
  FTIME?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  ITEMREF?: number;
  ITEM_CODE?: string;
  UOMREF?: number;
  UEDIT?: string;
  USREF?: number;
  UUNIT?: string;
  UINFO1?: number;
  UINFO2?: number;
  UINFO3?: number;
  UINFO4?: number;
  UINFO5?: number;
  UINFO6?: number;
  UINFO7?: number;
  UINFO8?: number;
  ORDERREF?: number;
  ORDERFCNO?: string;
  AMOUNT?: number;
  DEPARTMENT?: number;
  SOURCEINDEX?: number;
  CAPIBLOCK_CREATEDBY?: number;
  CAPIBLOCK_CREADEDDATE?: string;
  CAPIBLOCK_CREATEDHOUR?: number;
  CAPIBLOCK_CREATEDMIN?: number;
  CAPIBLOCK_CREATEDSEC?: number;
  CAPIBLOCK_MODIFIEDBY?: number;
  CAPIBLOCK_MODIFIEDDATE?: string;
  CAPIBLOCK_MODIFIEDHOUR?: number;
  CAPIBLOCK_MODIFIEDMIN?: number;
  CAPIBLOCK_MODIFIEDSEC?: number;
  WFSTATUS?: number;
  PRODTYPE?: number;
  LOSTFACTOR?: number;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  DEF?: string;
  TRANSACTIONS?: RscollectionrsQprodtransxml;
  QPRODDELLINE?: string;
  CUROP?: number;
  FCNOCHANGED?: number;
  DOCNRREF?: number;
  STFCLIST?: string;
  DELOLDFC?: number;
  DELPROCTYP?: number;
  XBUFS?: string;
  APPROVE?: number;
  APPROVE_DATE?: string;
  CREATE_STFICHES?: number;
  CALC_OPTION?: number;
  CLIENTREF?: number;
  ARP_CODE?: string;
  CREATE_WH_FICHE?: number;
  NOTES1?: string;
  NOTES2?: string;
  NOTES3?: string;
  NOTES4?: string;
  STATUS?: number;
  GUID?: string;
}

/**
 * Union type of all QuickProductionSlips field names for type-safe field selection and sorting
 */
export type QuickProductionSlipsField =
  | 'INTERNAL_REFERENCE'
  | 'FICHENO'
  | 'DATE'
  | 'FTIME'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'ITEMREF'
  | 'ITEM_CODE'
  | 'UOMREF'
  | 'UEDIT'
  | 'USREF'
  | 'UUNIT'
  | 'UINFO1'
  | 'UINFO2'
  | 'UINFO3'
  | 'UINFO4'
  | 'UINFO5'
  | 'UINFO6'
  | 'UINFO7'
  | 'UINFO8'
  | 'ORDERREF'
  | 'ORDERFCNO'
  | 'AMOUNT'
  | 'DEPARTMENT'
  | 'SOURCEINDEX'
  | 'CAPIBLOCK_CREATEDBY'
  | 'CAPIBLOCK_CREADEDDATE'
  | 'CAPIBLOCK_CREATEDHOUR'
  | 'CAPIBLOCK_CREATEDMIN'
  | 'CAPIBLOCK_CREATEDSEC'
  | 'CAPIBLOCK_MODIFIEDBY'
  | 'CAPIBLOCK_MODIFIEDDATE'
  | 'CAPIBLOCK_MODIFIEDHOUR'
  | 'CAPIBLOCK_MODIFIEDMIN'
  | 'CAPIBLOCK_MODIFIEDSEC'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WFSTATUS'
  | 'PRODTYPE'
  | 'LOSTFACTOR'
  | 'PROJECTREF'
  | 'PROJECT_CODE'
  | 'DEF'
  | 'TRANSACTIONS'
  | 'QPRODDELLINE'
  | 'CUROP'
  | 'FCNOCHANGED'
  | 'DOCNRREF'
  | 'STFCLIST'
  | 'DELOLDFC'
  | 'DELPROCTYP'
  | 'XBUFS'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'CREATE_STFICHES'
  | 'CALC_OPTION'
  | 'CLIENTREF'
  | 'ARP_CODE'
  | 'CREATE_WH_FICHE'
  | 'NOTES1'
  | 'NOTES2'
  | 'NOTES3'
  | 'NOTES4'
  | 'STATUS'
  | 'GUID';

/**
 * Type-safe sort specification for QuickProductionSlips queries
 */
export type QuickProductionSlipsSortSpec =
  | [QuickProductionSlipsField]
  | [QuickProductionSlipsField, 'asc' | 'desc']
  | [QuickProductionSlipsField[], 'asc' | 'desc']
  | [QuickProductionSlipsField[]];

/**
 * Type-safe query options for QuickProductionSlips entities
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
export interface QuickProductionSlipsQueryOptions
  extends Omit<QueryOptions<QuickProductionSlipsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: QuickProductionSlipsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: QuickProductionSlipsSortSpec;
}

/**
 * Search criteria for QuickProductionSlips entities
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
export interface QuickProductionSlipsSearchCriteria {
  internalReference?: NumberFieldValue;
  ficheno?: StringFieldValue;
  date?: StringFieldValue;
  ftime?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  itemref?: NumberFieldValue;
  itemCode?: StringFieldValue;
  uomref?: NumberFieldValue;
  uedit?: StringFieldValue;
  usref?: NumberFieldValue;
  uunit?: StringFieldValue;
  uinfo1?: NumberFieldValue;
  uinfo2?: NumberFieldValue;
  uinfo3?: NumberFieldValue;
  uinfo4?: NumberFieldValue;
  uinfo5?: NumberFieldValue;
  uinfo6?: NumberFieldValue;
  uinfo7?: NumberFieldValue;
  uinfo8?: NumberFieldValue;
  orderref?: NumberFieldValue;
  orderfcno?: StringFieldValue;
  amount?: NumberFieldValue;
  department?: NumberFieldValue;
  sourceindex?: NumberFieldValue;
  capiblockCreatedby?: NumberFieldValue;
  capiblockCreadeddate?: StringFieldValue;
  capiblockCreatedhour?: NumberFieldValue;
  capiblockCreatedmin?: NumberFieldValue;
  capiblockCreatedsec?: NumberFieldValue;
  capiblockModifiedby?: NumberFieldValue;
  capiblockModifieddate?: StringFieldValue;
  capiblockModifiedhour?: NumberFieldValue;
  capiblockModifiedmin?: NumberFieldValue;
  capiblockModifiedsec?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  prodtype?: NumberFieldValue;
  lostfactor?: NumberFieldValue;
  projectref?: NumberFieldValue;
  projectCode?: StringFieldValue;
  def?: StringFieldValue;
  transactions?: DateFieldValue;
  qproddelline?: StringFieldValue;
  curop?: NumberFieldValue;
  fcnochanged?: NumberFieldValue;
  docnrref?: NumberFieldValue;
  stfclist?: StringFieldValue;
  deloldfc?: NumberFieldValue;
  delproctyp?: NumberFieldValue;
  xbufs?: StringFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  createStfiches?: NumberFieldValue;
  calcOption?: NumberFieldValue;
  clientref?: NumberFieldValue;
  arpCode?: StringFieldValue;
  createWhFiche?: NumberFieldValue;
  notes1?: StringFieldValue;
  notes2?: StringFieldValue;
  notes3?: StringFieldValue;
  notes4?: StringFieldValue;
  status?: NumberFieldValue;
  guid?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for QuickProductionSlips entities
 */
export interface QuickProductionSlipsAnalytics {
  total: number;
  // Add QuickProductionSlips-specific analytics fields
}
