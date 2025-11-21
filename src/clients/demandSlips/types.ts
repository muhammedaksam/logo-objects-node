import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_DemandTrans]
 */
export interface RscollectionrsDemandtrans {
  Meta?: Meta;
  items?: RsDemandtrans[];
}

/**
 * Interface for RSCollection[RS_DetDemandTrans]
 */
export interface RscollectionrsDetdemandtrans {
  Meta?: Meta;
  items?: RsDetdemandtrans[];
}

/**
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
}

/**
 * Interface for RSCollection[RS_LabelXML]
 */
export interface RscollectionrsLabelxml {
  Meta?: Meta;
  items?: RsLabelxml[];
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
 * RsDemandtrans transaction line item
 *
 * Represents individual transaction records within a DemandSlips collection.
 */
export interface RsDemandtrans extends BaseEntity {
  DEMANDFICHEREF?: number;
  ITEMREF?: number;
  CLIENTREF?: number;
  AMOUNT?: number;
  MEET_AMOUNT?: number;
  UOMREF?: number;
  USREF?: number;
  UNIT_CONV1?: number;
  UNIT_CONV2?: number;
  UNIT_CONV3?: number;
  UNIT_CONV4?: number;
  UNIT_CONV5?: number;
  UNIT_CONV6?: number;
  UNIT_CONV7?: number;
  UNIT_CONV8?: number;
  MEET_TYPE?: number;
  PROCURE_DATE?: string;
  SOURCE_INDEX?: number;
  BRANCH?: number;
  DEPARTMENT?: number;
  FACTORY_NR?: number;
  BOMMASTERREF?: number;
  BOMREVREF?: number;
  AUXIL_CODE?: string;
  DESCRIPTION?: string;
  STATUS?: number;
  WF_STATUS?: number;
  PAYDEFREF?: number;
  LINE_TYPE?: number;
  AUTH_CODE?: string;
  CPST_FLAG?: number;
  DET_LINE?: number;
  PREVLINEREF?: number;
  PREV_LINE_NO?: number;
  LINE_NO?: number;
  USER_NAME?: string;
  FICHE_DATE?: string;
  MRPLINEREF?: number;
  MRPHEADREF?: number;
  ALT_ITEM_USE?: number;
  MRP_HEAD_TYPE?: number;
  ARP_CODE?: string;
  ARP_NAME?: string;
  ITEM_CODE?: string;
  ITEM_NAME?: string;
  CARD_TYPE?: number;
  UNIT_CODE?: string;
  BOM_CODE?: string;
  BOM_REV_CODE?: string;
  PAY_CODE?: string;
  DETAILS?: RscollectionrsDetdemandtrans;
  DETDELLIST?: string;
  LAST_COMPL?: number;
  ORD_PEG_USE?: number;
  ORD_PEG_AMNT?: number;
  CANC_AMOUNT?: number;
  PRICE?: number;
  PROCURE_TIME?: number;
  INVUSE_PARAM?: number;
  PROD_ORD_REF?: number;
  PROD_ORD_LN_REF?: number;
  WORK_ORD_REF?: number;
  PLN_STFC_REF?: number;
  PLN_STLN_REF?: number;
  STFC_PERIOD_NR?: number;
  REAL_SRC_INDEX?: number;
  ACCOUNTREF?: number;
  CENTERREF?: number;
  PROJECTREF?: number;
  CROSS_ACC_REF?: number;
  CROSS_CENT_REF?: number;
  CROSS_PROJ_REF?: number;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  CANCONFIG?: number;
  VCHARLIST?: string;
  PROJECT_CODE?: string;
  PR_CURR?: number;
  PR_PRICE?: number;
  MEET_WITH_STOCK?: number;
  FICHE_TYPE?: number;
  PRODUCER_CODE?: string;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  PORDER_TYPE?: number;
  BOM_TYPE?: number;
  GUID?: string;
}

/**
 * RsDetdemandtrans transaction line item
 *
 * Represents individual transaction records within a DemandSlips collection.
 */
export interface RsDetdemandtrans extends BaseEntity {
  DEMANDFICHEREF?: number;
  ITEMREF?: number;
  CLIENTREF?: number;
  AMOUNT?: number;
  MEET_AMOUNT?: number;
  UOMREF?: number;
  USREF?: number;
  UNIT_CONV1?: number;
  UNIT_CONV2?: number;
  UNIT_CONV3?: number;
  UNIT_CONV4?: number;
  UNIT_CONV5?: number;
  UNIT_CONV6?: number;
  UNIT_CONV7?: number;
  UNIT_CONV8?: number;
  MEET_TYPE?: number;
  PROCURE_DATE?: string;
  SOURCE_INDEX?: number;
  BRANCH?: number;
  DEPARTMENT?: number;
  FACTORY_NR?: number;
  BOMMASTERREF?: number;
  BOMREVREF?: number;
  AUXIL_CODE?: string;
  DESCRIPTION?: string;
  STATUS?: number;
  WF_STATUS?: number;
  PAYDEFREF?: number;
  LINE_TYPE?: number;
  AUTH_CODE?: string;
  CPST_FLAG?: number;
  DET_LINE?: number;
  PREVLINEREF?: number;
  PREV_LINE_NO?: number;
  LINE_NO?: number;
  USER_NAME?: string;
  FICHE_DATE?: string;
  MRPLINEREF?: number;
  MRPHEADREF?: number;
  ALT_ITEM_USE?: number;
  MRP_HEAD_TYPE?: number;
  ARP_CODE?: string;
  ARP_NAME?: string;
  ITEM_CODE?: string;
  ITEM_NAME?: string;
  CARD_TYPE?: number;
  UNIT_CODE?: string;
  BOM_CODE?: string;
  BOM_REV_CODE?: string;
  PAY_CODE?: string;
  DETAILS?: string;
  DETDELLIST?: string;
  LAST_COMPL?: number;
  ORD_PEG_USE?: number;
  ORD_PEG_AMNT?: number;
  PRICE?: number;
  CANC_AMOUNT?: number;
  PROCURE_TIME?: number;
  INVUSE_PARAM?: number;
  PROD_ORD_REF?: number;
  PROD_ORD_LN_REF?: number;
  WORK_ORD_REF?: number;
  PLN_STFC_REF?: number;
  PLN_STLN_REF?: number;
  STFC_PERIOD_NR?: number;
  ACCOUNT_REF?: number;
  CENTERREF?: number;
  PROJECTREF?: number;
  CROSS_ACC_REF?: number;
  CROSS_CENT_REF?: number;
  CROSS_PROJ_REF?: number;
  PROJECT_CODE?: string;
  PR_CURR?: number;
  PR_PRICE?: number;
  PORDER_TYPE?: number;
  BOM_TYPE?: number;
  GUID?: string;
}

/**
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a DemandSlips collection.
 */
export interface ExtendedFieldDefinitions extends BaseEntity {
  MODULENR?: number;
  LEVEL_?: number;
  PARENTREF?: number;
  OWNERREF?: number;
  TEXTFLDS1?: string;
  TEXTFLDS2?: string;
  TEXTFLDS3?: string;
  TEXTFLDS4?: string;
  TEXTFLDS5?: string;
  TEXTFLDS6?: string;
  TEXTFLDS7?: string;
  TEXTFLDS8?: string;
  TEXTFLDS9?: string;
  TEXTFLDS10?: string;
  TEXTFLDS11?: string;
  TEXTFLDS12?: string;
  TEXTFLDS13?: string;
  TEXTFLDS14?: string;
  TEXTFLDS15?: string;
  TEXTFLDS16?: string;
  TEXTFLDS17?: string;
  TEXTFLDS18?: string;
  TEXTFLDS19?: string;
  TEXTFLDS20?: string;
  TEXTFLDS21?: string;
  TEXTFLDS22?: string;
  TEXTFLDS23?: string;
  TEXTFLDS24?: string;
  TEXTFLDS25?: string;
  TEXTFLDS26?: string;
  TEXTFLDS27?: string;
  TEXTFLDS28?: string;
  TEXTFLDS29?: string;
  TEXTFLDS30?: string;
  TEXTFLDS31?: string;
  TEXTFLDS32?: string;
  TEXTFLDS33?: string;
  TEXTFLDS34?: string;
  TEXTFLDS35?: string;
  TEXTFLDS36?: string;
  TEXTFLDS37?: string;
  TEXTFLDS38?: string;
  TEXTFLDS39?: string;
  TEXTFLDS40?: string;
  TEXTFLDS41?: string;
  TEXTFLDS42?: string;
  TEXTFLDS43?: string;
  TEXTFLDS44?: string;
  TEXTFLDS45?: string;
  TEXTFLDS46?: string;
  TEXTFLDS47?: string;
  TEXTFLDS48?: string;
  TEXTFLDS49?: string;
  TEXTFLDS50?: string;
  NUMFLDS1?: number;
  NUMFLDS2?: number;
  NUMFLDS3?: number;
  NUMFLDS4?: number;
  NUMFLDS5?: number;
  NUMFLDS6?: number;
  NUMFLDS7?: number;
  NUMFLDS8?: number;
  NUMFLDS9?: number;
  NUMFLDS10?: number;
  NUMFLDS11?: number;
  NUMFLDS12?: number;
  NUMFLDS13?: number;
  NUMFLDS14?: number;
  NUMFLDS15?: number;
  NUMFLDS16?: number;
  NUMFLDS17?: number;
  NUMFLDS18?: number;
  NUMFLDS19?: number;
  NUMFLDS20?: number;
  NUMFLDS21?: number;
  NUMFLDS22?: number;
  NUMFLDS23?: number;
  NUMFLDS24?: number;
  NUMFLDS25?: number;
  NUMFLDS26?: number;
  NUMFLDS27?: number;
  NUMFLDS28?: number;
  NUMFLDS29?: number;
  NUMFLDS30?: number;
  NUMFLDS31?: number;
  NUMFLDS32?: number;
  NUMFLDS33?: number;
  NUMFLDS34?: number;
  NUMFLDS35?: number;
  NUMFLDS36?: number;
  NUMFLDS37?: number;
  NUMFLDS38?: number;
  NUMFLDS39?: number;
  NUMFLDS40?: number;
  NUMFLDS41?: number;
  NUMFLDS42?: number;
  NUMFLDS43?: number;
  NUMFLDS44?: number;
  NUMFLDS45?: number;
  NUMFLDS46?: number;
  NUMFLDS47?: number;
  NUMFLDS48?: number;
  NUMFLDS49?: number;
  NUMFLDS50?: number;
}

/**
 * RsLabelxml transaction line item
 *
 * Represents individual transaction records within a DemandSlips collection.
 */
export interface RsLabelxml extends BaseEntity {
  NAME?: string;
  DEFINITION?: string;
  USER_TYPE?: number;
}

/**
 * DemandSlips entity interface based on swagger definition
 */
export interface DemandSlips extends BaseEntity {
  NUMBER?: string;
  DATE?: string;
  TIME?: number;
  DO_CODE?: string;
  STATUS?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  SOURCE_INDEX?: number;
  BRANCH?: number;
  DEPARTMENT?: number;
  FACTORY_NR?: number;
  WF_STATUS?: number;
  DEMAND_TYPE?: number;
  DEMANDREF?: number;
  PRINT_CNT?: number;
  PRINT_DATE?: string;
  USER_NO?: number;
  LOGICALREF?: number;
  FICHENO?: string;
  DOCODE?: string;
  SPECODE?: string;
  CYPHCODE?: string;
  SOURCEINDEX?: number;
  FACTORYNR?: number;
  SITEID?: number;
  RECSTATUS?: number;
  ORGLOGICREF?: number;
  WFSTATUS?: number;
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
  DEMANDTYPE?: number;
  PRINTCNT?: number;
  USERNO?: number;
  TRANSACTIONS?: RscollectionrsDemandtrans;
  DELLIST?: string;
  WARNACTIVE?: number;
  DOCALS?: string;
  XBUFS?: string;
  DOCNRREF?: number;
  MPS_CODE?: string;
  PROD_ORD_NO?: string;
  LINE_CNT?: number;
  HAS_NO_UNIT_LN?: number;
  TEXTCHG?: number;
  ITEXT?: string;
  OLD_F_DATE?: string;
  WFLOWCARDREF?: number;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  EMPLOYEE_CODE?: string;
  PERREF?: number;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  LABEL_LIST?: RscollectionrsLabelxml;
  GUID?: string;
}

/**
 * Union type of all DemandSlips field names for type-safe field selection and sorting
 */
export type DemandSlipsField =
  | 'INTERNAL_REFERENCE'
  | 'NUMBER'
  | 'DATE'
  | 'TIME'
  | 'DO_CODE'
  | 'STATUS'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'SOURCE_INDEX'
  | 'BRANCH'
  | 'DEPARTMENT'
  | 'FACTORY_NR'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WF_STATUS'
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
  | 'DEMAND_TYPE'
  | 'DEMANDREF'
  | 'PRINT_CNT'
  | 'PRINT_DATE'
  | 'TEXTINC'
  | 'USER_NO'
  | 'LOGICALREF'
  | 'FICHENO'
  | 'DOCODE'
  | 'SPECODE'
  | 'CYPHCODE'
  | 'SOURCEINDEX'
  | 'FACTORYNR'
  | 'SITEID'
  | 'RECSTATUS'
  | 'ORGLOGICREF'
  | 'WFSTATUS'
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
  | 'DEMANDTYPE'
  | 'PRINTCNT'
  | 'USERNO'
  | 'TRANSACTIONS'
  | 'DELLIST'
  | 'WARNACTIVE'
  | 'DOCALS'
  | 'XBUFS'
  | 'DOCNRREF'
  | 'MPS_CODE'
  | 'PROD_ORD_NO'
  | 'LINE_CNT'
  | 'HAS_NO_UNIT_LN'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'OLD_F_DATE'
  | 'WFLOWCARDREF'
  | 'PROJECTREF'
  | 'PROJECT_CODE'
  | 'EMPLOYEE_CODE'
  | 'PERREF'
  | 'DEFNFLDSLIST'
  | 'LABEL_LIST'
  | 'GUID';

/**
 * Type-safe sort specification for DemandSlips queries
 */
export type DemandSlipsSortSpec =
  | [DemandSlipsField]
  | [DemandSlipsField, 'asc' | 'desc']
  | [DemandSlipsField[], 'asc' | 'desc']
  | [DemandSlipsField[]];

/**
 * Type-safe query options for DemandSlips entities
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
export interface DemandSlipsQueryOptions
  extends Omit<QueryOptions<DemandSlipsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: DemandSlipsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: DemandSlipsSortSpec;
}

/**
 * Search criteria for DemandSlips entities
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
export interface DemandSlipsSearchCriteria {
  internalReference?: NumberFieldValue;
  number?: StringFieldValue;
  date?: StringFieldValue;
  time?: NumberFieldValue;
  doCode?: StringFieldValue;
  status?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  sourceIndex?: NumberFieldValue;
  branch?: NumberFieldValue;
  department?: NumberFieldValue;
  factoryNr?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfStatus?: NumberFieldValue;
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
  demandType?: NumberFieldValue;
  demandref?: NumberFieldValue;
  printCnt?: NumberFieldValue;
  printDate?: StringFieldValue;
  textinc?: NumberFieldValue;
  userNo?: NumberFieldValue;
  logicalref?: NumberFieldValue;
  ficheno?: StringFieldValue;
  docode?: StringFieldValue;
  specode?: StringFieldValue;
  cyphcode?: StringFieldValue;
  sourceindex?: NumberFieldValue;
  factorynr?: NumberFieldValue;
  siteid?: NumberFieldValue;
  recstatus?: NumberFieldValue;
  orglogicref?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
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
  demandtype?: NumberFieldValue;
  printcnt?: NumberFieldValue;
  userno?: NumberFieldValue;
  transactions?: DateFieldValue;
  dellist?: StringFieldValue;
  warnactive?: NumberFieldValue;
  docals?: StringFieldValue;
  xbufs?: StringFieldValue;
  docnrref?: NumberFieldValue;
  mpsCode?: StringFieldValue;
  prodOrdNo?: StringFieldValue;
  lineCnt?: NumberFieldValue;
  hasNoUnitLn?: NumberFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;
  oldFDate?: StringFieldValue;
  wflowcardref?: NumberFieldValue;
  projectref?: NumberFieldValue;
  projectCode?: StringFieldValue;
  employeeCode?: StringFieldValue;
  perref?: NumberFieldValue;
  defnfldslist?: DateFieldValue;
  labelList?: DateFieldValue;
  guid?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for DemandSlips entities
 */
export interface DemandSlipsAnalytics {
  total: number;
  // Add DemandSlips-specific analytics fields
}
