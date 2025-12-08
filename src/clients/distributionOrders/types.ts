import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_DistOrdLineXML]
 */
export interface RscollectionrsDistordlinexml {
  Meta?: Meta;
  items?: RsDistordlinexml[];
}

/**
 * Interface for RSCollection[RS_SLLocTrnXML]
 */
export interface RscollectionrsSlloctrnxml {
  Meta?: Meta;
  items?: RsSlloctrnxml[];
}

/**
 * Interface for RSCollection[RS_QCCValEntryXML]
 */
export interface RscollectionrsQccvalentryxml {
  Meta?: Meta;
  items?: RsQccvalentryxml[];
}

/**
 * Interface for RSCollection[RS_QCCValListXML]
 */
export interface RscollectionrsQccvallistxml {
  Meta?: Meta;
  items?: RsQccvallistxml[];
}

/**
 * Interface for RSCollection[RS_CampCodesListXML]
 */
export interface RscollectionrsCampcodeslistxml {
  Meta?: Meta;
  items?: RsCampcodeslistxml[];
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
 * RsDistordlinexml transaction line item
 *
 * Represents individual transaction records within a DistributionOrders collection.
 */
export interface RsDistordlinexml extends BaseEntity {
  DISTORDERREF?: number;
  ITEMREF?: number;
  LINE_TYPE?: number;
  ORD_SITEID?: number;
  ORD_REFERENCE?: number;
  CLIENTREF?: number;
  SALESMAN?: number;
  DATE?: string;
  DUE_DATE?: string;
  ORDER_AMOUNT?: number;
  SHIP_AMOUNT?: number;
  REM_AMOUNT?: number;
  UOMREF?: number;
  COUNTRY_CODE?: string;
  CITY_CODE?: string;
  TOWN_CODE?: string;
  DISTRICT_CODE?: string;
  BRANCH?: number;
  DEPARTMENT?: number;
  FACTORY?: number;
  SOURCE_INDEX?: number;
  RISK_STATUS?: number;
  CAMPAIGNREFS1?: number;
  CAMPAIGNREFS2?: number;
  CAMPAIGNREFS3?: number;
  CAMPAIGNREFS4?: number;
  CAMPAIGNREFS5?: number;
  POINTCAMPREF?: number;
  ITEM_TRACK_TYPE?: number;
  LOC_TRACKING?: number;
  LINE_NO?: number;
  REASON_FOR_NOT_SHIP?: number;
  CMPGLINEREF?: number;
  D_ORD_STATUS?: number;
  D_ORD_GO_DATE?: string;
  D_ORD_RETURN_DATE?: string;
  LOGICALREF?: number;
  LINETYPE?: number;
  ORDFICHEREF?: number;
  ORDLINEREF?: number;
  DUEDATE?: string;
  ORDERAMOUNT?: number;
  SHIPAMOUNT?: number;
  REMAMOUNT?: number;
  COUNTRYCODE?: string;
  CITYCODE?: string;
  TOWNCODE?: string;
  DISTRICTCODE?: string;
  SOURCEINDEX?: number;
  RISKSTATUS?: number;
  ITEMTRACKTYPE?: number;
  LOCTRACKING?: number;
  LINENR?: number;
  REASONFORNOTSHIP?: number;
  DORDSTATUS?: number;
  DORDGODATE?: string;
  DORDRETURNDATE?: string;
  ITEM_CODE?: string;
  ITEM_NAME?: string;
  ORD_FICHE_NO?: string;
  CL_CODE?: string;
  ORD_VOLUME?: number;
  ORD_WEIGHT?: number;
  V_AMOUNT?: number;
  W_AMOUNT?: number;
  ORD_DIST_RESERVED?: number;
  ORD_UNIT_PRICE?: number;
  VAT?: number;
  LAST_COMPLN?: number;
  DIST_POINT?: number;
  SL_DETAILS?: RscollectionrsSlloctrnxml;
  SLDELLIST?: string;
  U_INFO1?: number;
  U_INFO2?: number;
  U_INFO3?: number;
  U_INFO4?: number;
  U_INFO5?: number;
  U_INFO6?: number;
  U_INFO7?: number;
  U_INFO8?: number;
  CLIENT_NAME?: string;
  TOWN_NAME?: string;
  DISTRICT_NAME?: string;
  UNIT_CODE?: string;
  CAMPAIGN_INFOS?: RscollectionrsCampcodeslistxml;
  PROM_CLAS_ITEM_CODE?: string;
  SHIP_STATUS?: number;
  P_AMOUNT?: number;
  CITY?: string;
  VAT_INC?: number;
  GROSS_U_INFO1?: number;
  GROSS_U_INFO2?: number;
  AFFECT_COLLATRL?: number;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  CANCONFIG?: number;
  AFFECT_RISK?: number;
  GUID?: string;
}

/**
 * RsSlloctrnxml transaction line item
 *
 * Represents individual transaction records within a DistributionOrders collection.
 */
export interface RsSlloctrnxml extends BaseEntity {
  STFICHEREF?: number;
  STTRANSREF?: number;
  SOURCE_MT_SITEID?: number;
  SOURCE_MT_REFERENCE?: number;
  SOURCE_SLT_SITEID?: number;
  SOURCE_SLT_REFERENCE?: number;
  SOURCE_QUANTITY?: number;
  LINENR?: number;
  ITEMREF?: number;
  DATE?: string;
  IOCODE?: number;
  SOURCE_WH?: number;
  FICHETYPE?: number;
  SL_TYPE?: number;
  SL_CODE?: string;
  SL_NAME?: string;
  GROUPL_CODE?: string;
  SLREF?: number;
  LOCATION_CODE?: string;
  LOCREF?: number;
  DEST_LOCATION_CODE?: string;
  MU_QUANTITY?: number;
  UNIT_CODE?: string;
  UOMREF?: number;
  QUANTITY?: number;
  REM_QUANTITY?: number;
  LU_REM_QUANTITY?: number;
  UNIT_CONV1?: number;
  UNIT_CONV2?: number;
  UNIT_CONV3?: number;
  UNIT_CONV4?: number;
  UNIT_CONV5?: number;
  UNIT_CONV6?: number;
  UNIT_CONV7?: number;
  UNIT_CONV8?: number;
  DATE_EXPIRED?: string;
  DATE_URT?: string;
  RATE_SCORE?: number;
  CANCELLED?: number;
  OUT_COST?: number;
  TC_OUT_COST?: number;
  PRCDIF_COST?: number;
  TC_PRCDIF_COST?: number;
  SL_QC_OK?: number;
  LPRODSTAT?: number;
  SOURCE_TYPE?: number;
  SOURCEWSREF?: number;
  WF_STATUS?: number;
  DESTLOCREF?: number;
  SLNAME?: string;
  LOCNAME?: string;
  DESTLOCCODE?: string;
  DESTLOCNAME?: string;
  INTRANSAMOUNT?: number;
  INTRLNAMOUNT?: number;
  QCLIST?: RscollectionrsQccvalentryxml;
  INSLUNITCODE?: string;
  INSLUNITREF?: number;
  DESTYPE?: number;
  DESTWSREF?: number;
  DISTORDREF?: number;
  DISTORDLNREF?: number;
  SOURCE_DIST_SL_SITEID?: number;
  SOURCE_DIST_SL_REFERENCE?: number;
  GROSS_U_INFO1?: number;
  GROSS_U_INFO2?: number;
  ADD_TAX_PRCOST?: number;
  ADD_TAX_PRCOSTCURR?: number;
  INFLATION_IDX?: number;
  ORGLOGOID?: string;
  ORGLINKREF?: number;
  LINEEXP?: string;
  GRP_BEG_CODE?: string;
  GRP_END_CODE?: string;
  PRODORDREF?: number;
  PORDER_FICHE_NR?: string;
  PORDER_SLP_INRESERVE?: number;
  INPLN_SLT_SITEID?: number;
  INPLN_SLT_REFERENCE?: number;
  DELIVERABLE?: number;
  QC_TRANSFER_REF?: number;
  QC_TRANSFER_AMOUNT?: number;
  GUID?: string;
  SPECODE?: string;
  SPECODE2?: string;
  QCTRANSFERREF2?: number;
  QCTRANSFERAMNT2?: number;
  TIBBICIHAZURTDATE?: string;
}

/**
 * RsQccvalentryxml transaction line item
 *
 * Represents individual transaction records within a DistributionOrders collection.
 */
export interface RsQccvalentryxml extends BaseEntity {
  ASGNTYPE?: number;
  ITEMREF?: number;
  FICHEREF?: number;
  STTRANSREF?: number;
  SLTRANSREF?: number;
  QCSETREF?: number;
  QCCODEREF?: number;
  QCVALREF?: number;
  QCASGNLOGICREF?: number;
  QCREVNO?: number;
  QTYPE?: number;
  LINENR?: number;
  AMOUNT?: number;
  QVALUE?: number;
  CONFIRMED?: number;
  QDATE?: string;
  CANCELLED?: number;
  DESCRIPTION?: string;
  CONDCONAMOUNT?: number;
  QCODE?: string;
  QNAME?: string;
  VALCODE?: string;
  VALNAME?: string;
  VALLIST?: RscollectionrsQccvallistxml;
  VDELLIST?: string;
  TLIST?: string;
  NOMVALUE?: number;
  MINVALUE?: number;
  MAXVALUE?: number;
  MUNIT?: string;
  QUNIT?: string;
  FREQUENCY?: number;
  COUNTER?: number;
  SAMPLESIZE?: number;
  NONCONAMOUNT?: number;
  QCRESULT?: number;
}

/**
 * RsQccvallistxml transaction line item
 *
 * Represents individual transaction records within a DistributionOrders collection.
 */
export interface RsQccvallistxml extends BaseEntity {
  ASGNTYPE?: number;
  ITEMREF?: number;
  FICHEREF?: number;
  STTRANSREF?: number;
  SLTRANSREF?: number;
  QCSETREF?: number;
  QCCODEREF?: number;
  QCVALREF?: number;
  QCASGNLOGICREF?: number;
  QCREVNO?: number;
  QTYPE?: number;
  LINENR?: number;
  AMOUNT?: number;
  QVALUE?: number;
  CONFIRMED?: number;
  QDATE?: string;
  CANCELLED?: number;
  DESCRIPTION?: string;
  CONDCONAMOUNT?: number;
  QCODE?: string;
  QNAME?: string;
  VALCODE?: string;
  VALNAME?: string;
  VALLIST?: string;
  VDELLIST?: string;
  TLIST?: string;
  NOMVALUE?: number;
  MINVALUE?: number;
  MAXVALUE?: number;
  MUNIT?: string;
  QUNIT?: string;
  FREQUENCY?: number;
  COUNTER?: number;
  SAMPLESIZE?: number;
  NONCONAMOUNT?: number;
  QCRESULT?: number;
}

/**
 * RsCampcodeslistxml transaction line item
 *
 * Represents individual transaction records within a DistributionOrders collection.
 */
export interface RsCampcodeslistxml extends BaseEntity {
  CAMPCODE1?: string;
  CAMPCODE2?: string;
  CAMPCODE3?: string;
  CAMPCODE4?: string;
  CAMPCODE5?: string;
  PCAMPCODE?: string;
  CAMP_LN_NO?: number;
}

/**
 * DistributionOrders entity interface based on swagger definition
 */
export interface DistributionOrders extends BaseEntity {
  FICHE_NO?: string;
  DATE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  VEHICLEREF?: number;
  ROUTREF?: number;
  STATUS?: number;
  MAX_CLIENT_LIMIT?: number;
  LOAD_RATE?: number;
  WFSTATUS?: number;
  SALESMANREF?: number;
  GODATE?: string;
  RETURNDATE?: string;
  PRINT_COUNTER?: number;
  PRINT_DATE?: string;
  LOGICALREF?: number;
  FICHENO?: string;
  SPECODE?: string;
  CYPHCODE?: string;
  MAXCLIENTLIMIT?: number;
  LOADRATE?: number;
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
  DIST_ORDER_LINES?: RscollectionrsDistordlinexml;
  DELLIST?: string;
  CL_CODE?: string;
  ROUT_CODE?: string;
  ROUTNAME?: string;
  VEHICLECODE?: string;
  VEHICLENAME?: string;
  FC_NO_CHANGED?: number;
  W_CAPACITY?: number;
  W_LOADED?: number;
  W_PERCENT?: number;
  V_CAPACITY?: number;
  V_LOADED?: number;
  V_PERCENT?: number;
  P_CAPACITY?: number;
  P_LOADED?: number;
  P_PERCENT?: number;
  VUNITREF?: number;
  WUNITREF?: number;
  SALESMAN_CODE?: string;
  CLIENT_COUNT?: number;
  AFFECT_COLLATRL?: number;
  AFFECT_RISK?: number;
  DIVISION?: number;
  DEPARTMENT?: number;
  AUTOFILL_SLDETAILS?: number;
  LOC_CONTROL_OFF?: number;
  GUID?: string;
}

/**
 * Union type of all DistributionOrders field names for type-safe field selection and sorting
 */
export type DistributionOrdersField =
  | 'INTERNAL_REFERENCE'
  | 'FICHE_NO'
  | 'DATE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'VEHICLEREF'
  | 'ROUTREF'
  | 'STATUS'
  | 'MAX_CLIENT_LIMIT'
  | 'LOAD_RATE'
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
  | 'WFSTATUS'
  | 'SALESMANREF'
  | 'GODATE'
  | 'RETURNDATE'
  | 'PRINT_COUNTER'
  | 'PRINT_DATE'
  | 'LOGICALREF'
  | 'FICHENO'
  | 'SPECODE'
  | 'CYPHCODE'
  | 'MAXCLIENTLIMIT'
  | 'LOADRATE'
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
  | 'DIST_ORDER_LINES'
  | 'DELLIST'
  | 'CL_CODE'
  | 'ROUT_CODE'
  | 'ROUTNAME'
  | 'VEHICLECODE'
  | 'VEHICLENAME'
  | 'FC_NO_CHANGED'
  | 'W_CAPACITY'
  | 'W_LOADED'
  | 'W_PERCENT'
  | 'V_CAPACITY'
  | 'V_LOADED'
  | 'V_PERCENT'
  | 'P_CAPACITY'
  | 'P_LOADED'
  | 'P_PERCENT'
  | 'VUNITREF'
  | 'WUNITREF'
  | 'SALESMAN_CODE'
  | 'CLIENT_COUNT'
  | 'AFFECT_COLLATRL'
  | 'AFFECT_RISK'
  | 'DIVISION'
  | 'DEPARTMENT'
  | 'AUTOFILL_SLDETAILS'
  | 'LOC_CONTROL_OFF'
  | 'GUID';

/**
 * Type-safe sort specification for DistributionOrders queries
 */
export type DistributionOrdersSortSpec =
  | [DistributionOrdersField]
  | [DistributionOrdersField, 'asc' | 'desc']
  | [DistributionOrdersField[], 'asc' | 'desc']
  | [DistributionOrdersField[]];

/**
 * Type-safe query options for DistributionOrders entities
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
export interface DistributionOrdersQueryOptions extends Omit<
  QueryOptions<DistributionOrdersField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: DistributionOrdersField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: DistributionOrdersSortSpec;
}

/**
 * Search criteria for DistributionOrders entities
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
export interface DistributionOrdersSearchCriteria {
  internalReference?: NumberFieldValue;
  ficheNo?: StringFieldValue;
  date?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  vehicleref?: NumberFieldValue;
  routref?: NumberFieldValue;
  status?: NumberFieldValue;
  maxClientLimit?: NumberFieldValue;
  loadRate?: NumberFieldValue;
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
  wfstatus?: NumberFieldValue;
  salesmanref?: NumberFieldValue;
  godate?: StringFieldValue;
  returndate?: StringFieldValue;
  printCounter?: NumberFieldValue;
  printDate?: StringFieldValue;
  logicalref?: NumberFieldValue;
  ficheno?: StringFieldValue;
  specode?: StringFieldValue;
  cyphcode?: StringFieldValue;
  maxclientlimit?: NumberFieldValue;
  loadrate?: NumberFieldValue;
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
  distOrderLines?: DateFieldValue;
  dellist?: StringFieldValue;
  clCode?: StringFieldValue;
  routCode?: StringFieldValue;
  routname?: StringFieldValue;
  vehiclecode?: StringFieldValue;
  vehiclename?: StringFieldValue;
  fcNoChanged?: NumberFieldValue;
  wCapacity?: NumberFieldValue;
  wLoaded?: NumberFieldValue;
  wPercent?: NumberFieldValue;
  vCapacity?: NumberFieldValue;
  vLoaded?: NumberFieldValue;
  vPercent?: NumberFieldValue;
  pCapacity?: NumberFieldValue;
  pLoaded?: NumberFieldValue;
  pPercent?: NumberFieldValue;
  vunitref?: NumberFieldValue;
  wunitref?: NumberFieldValue;
  salesmanCode?: StringFieldValue;
  clientCount?: NumberFieldValue;
  affectCollatrl?: NumberFieldValue;
  affectRisk?: NumberFieldValue;
  division?: NumberFieldValue;
  department?: NumberFieldValue;
  autofillSldetails?: NumberFieldValue;
  locControlOff?: NumberFieldValue;
  guid?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for DistributionOrders entities
 */
export interface DistributionOrdersAnalytics {
  total: number;
  // Add DistributionOrders-specific analytics fields
}
