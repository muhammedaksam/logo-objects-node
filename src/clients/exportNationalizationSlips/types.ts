import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_ExImWhFcLineXML]
 */
export interface RscollectionrsEximwhfclinexml {
  Meta?: Meta;
  items?: RsEximwhfclinexml[];
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
 * Interface for RSCollection[RS_ExImWhFcDetXML]
 */
export interface RscollectionrsEximwhfcdetxml {
  Meta?: Meta;
  items?: RsEximwhfcdetxml[];
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
 * RsEximwhfclinexml transaction line item
 *
 * Represents individual transaction records within a ExportNationalizationSlips collection.
 */
export interface RsEximwhfclinexml extends BaseEntity {
  EXIMWHFCREF?: number;
  TRCODE?: number;
  ITEMREF?: number;
  DATE?: string;
  FTIME?: number;
  FACTORY?: number;
  SOURCEINDEX?: number;
  DESTINDEX?: number;
  UOMREF?: number;
  USREF?: number;
  AMOUNT?: number;
  PRICE?: number;
  TOTAL?: number;
  TRCURR?: number;
  TRRATE?: number;
  REPORTRATE?: number;
  AUXIL_CODE?: string;
  LINEEXP?: string;
  LINENO?: number;
  AV_AMOUNT?: number;
  UINFO1?: number;
  UINFO2?: number;
  UINFO3?: number;
  UINFO4?: number;
  UINFO5?: number;
  UINFO6?: number;
  UINFO7?: number;
  UINFO8?: number;
  GROSSUINFO1?: number;
  GROSSUINFO2?: number;
  LINETYPE?: number;
  PREVLINEREF?: number;
  PREVLINENO?: number;
  DETLINE?: number;
  SL_LINES?: RscollectionrsSlloctrnxml;
  SLDELLIST?: string;
  DETAILS?: RscollectionrsEximwhfcdetxml;
  DETDELLIST?: string;
  WHSRCNAME?: string;
  WHDESNAME?: string;
  STCODE?: string;
  STDEF?: string;
  HASSLLINE?: number;
  LOCTRACKING?: number;
  TRACKTYPE?: number;
  CARDTYPE?: number;
  IMPUEDIT?: string;
  IMPUINFO1?: number;
  IMPUINFO2?: number;
  IMPUINFO3?: number;
  IMPUINFO4?: number;
  IMPUINFO5?: number;
  IMPUINFO6?: number;
  IMPUINFO7?: number;
  IMPUINFO8?: number;
  IMPGROSSUINFO1?: number;
  IMPGROSSUINFO2?: number;
  UNITSET_CODE?: string;
  UNIT_CODE?: string;
  EDTPRICE?: number;
  EDTTOTAL?: number;
  EDTCURR?: number;
  EDTRATE?: number;
  IMPPRICE?: number;
  IMPCURR?: number;
  IMPRATE?: number;
  OLDPRC?: number;
  OLDEDTPRC?: number;
  SLINETYPE?: string;
  UNITEXPENCE?: number;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  CANCONFIG?: number;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  EXIMFILEREF?: number;
  EXIMPROCNR?: number;
  EXIMFILECODE?: string;
  EXIMFILELNNR?: number;
  ORIGINCNTRREF?: number;
  ORIGIN_COUNTRY_CODE?: string;
  STATUS?: number;
  SRCEXPACCREF?: number;
  SRCEXP_GL_CODE?: string;
  SRCEXPCENREF?: number;
  SRCEXP_OHP_CODE?: string;
  DSTEXPACCREF?: number;
  DSTEXP_GL_CODE?: string;
  DSTEXPCENREF?: number;
  DSTEXP_OHP_CODE?: string;
}

/**
 * RsSlloctrnxml transaction line item
 *
 * Represents individual transaction records within a ExportNationalizationSlips collection.
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
 * Represents individual transaction records within a ExportNationalizationSlips collection.
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
 * Represents individual transaction records within a ExportNationalizationSlips collection.
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
 * RsEximwhfcdetxml transaction line item
 *
 * Represents individual transaction records within a ExportNationalizationSlips collection.
 */
export interface RsEximwhfcdetxml extends BaseEntity {
  EXIMWHFCREF?: number;
  TRCODE?: number;
  ITEMREF?: number;
  DATE?: string;
  FTIME?: number;
  FACTORY?: number;
  SOURCEINDEX?: number;
  DESTINDEX?: number;
  UOMREF?: number;
  USREF?: number;
  AMOUNT?: number;
  PRICE?: number;
  TOTAL?: number;
  TRCURR?: number;
  TRRATE?: number;
  REPORTRATE?: number;
  AUXIL_CODE?: string;
  LINEEXP?: string;
  LINENO?: number;
  AV_AMOUNT?: number;
  UINFO1?: number;
  UINFO2?: number;
  UINFO3?: number;
  UINFO4?: number;
  UINFO5?: number;
  UINFO6?: number;
  UINFO7?: number;
  UINFO8?: number;
  GROSSUINFO1?: number;
  GROSSUINFO2?: number;
  LINETYPE?: number;
  PREVLINEREF?: number;
  PREVLINENO?: number;
  DETLINE?: number;
  SL_LINES?: RscollectionrsSlloctrnxml;
  SLDELLIST?: string;
  DETAILS?: string;
  DETDELLIST?: string;
  WHSRCNAME?: string;
  WHDESNAME?: string;
  STCODE?: string;
  STDEF?: string;
  HASSLLINE?: number;
  LOCTRACKING?: number;
  TRACKTYPE?: number;
  CARDTYPE?: number;
  IMPUEDIT?: string;
  IMPUINFO1?: number;
  IMPUINFO2?: number;
  IMPUINFO3?: number;
  IMPUINFO4?: number;
  IMPUINFO5?: number;
  IMPUINFO6?: number;
  IMPUINFO7?: number;
  IMPUINFO8?: number;
  IMPGROSSUINFO1?: number;
  IMPGROSSUINFO2?: number;
  UNITSET_CODE?: string;
  UNIT_CODE?: string;
  EDTPRICE?: number;
  EDTTOTAL?: number;
  EDTCURR?: number;
  EDTRATE?: number;
  OLDPRC?: number;
  OLDEDTPRC?: number;
  SLINETYPE?: string;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  EXIMFILEREF?: number;
  EXIMPROCNR?: number;
  EXIMFILECODE?: string;
  EXIMFILELNNR?: number;
  ORIGINCNTRREF?: number;
  ORIGIN_COUNTRY_CODE?: string;
  STATUS?: number;
  SRCEXPACCREF?: number;
  SRCEXP_GL_CODE?: string;
  SRCEXPCENREF?: number;
  SRCEXP_OHP_CODE?: string;
  DSTEXPACCREF?: number;
  DSTEXP_GL_CODE?: string;
  DSTEXPCENREF?: number;
  DSTEXP_OHP_CODE?: string;
}

/**
 * ExportNationalizationSlips entity interface based on swagger definition
 */
export interface ExportNationalizationSlips extends BaseEntity {
  TRCODE?: number;
  FICHENO?: string;
  DATE?: string;
  FTIME?: number;
  DOCODE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  EXIMFILEREF?: number;
  EXIMPROCNR?: number;
  BRANCH?: number;
  DEPARTMENT?: number;
  FACTORY?: number;
  SOURCEINDEX?: number;
  GENEXCTYPE?: number;
  LINEEXCTYPE?: number;
  NETTOTAL?: number;
  TRCURR?: number;
  TRRATE?: number;
  REPORTRATE?: number;
  IMP_CURR?: number;
  IMP_RATE?: number;
  EXIMFILECODE?: string;
  EXIMFILELNNR?: number;
  TRANSACTIONS?: RscollectionrsEximwhfclinexml;
  DELLIST?: string;
  WHNAME?: string;
  UPDATED?: number;
  LINECOUNT?: number;
  FCNOCHANGED?: number;
  DOCNRREF?: number;
  EDTNETTOTAL?: number;
  CUROP?: number;
  TEXTCHG?: number;
  ITEXT?: number;
  XBUFS?: number;
  DOCALS?: number;
  PRINTCNT?: number;
  PRINT_DATE?: string;
  APPROVE?: number;
  APPROVE_DATE?: string;
  ACCFICHEREF?: number;
  ACCOUNTED?: number;
  ACC_FICHE_SITEID?: number;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  DISTRIBUTION_TYPE?: number;
  STATUS?: number;
}

/**
 * Union type of all ExportNationalizationSlips field names for type-safe field selection and sorting
 */
export type ExportNationalizationSlipsField =
  | 'INTERNAL_REFERENCE'
  | 'TRCODE'
  | 'FICHENO'
  | 'DATE'
  | 'FTIME'
  | 'DOCODE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'EXIMFILEREF'
  | 'EXIMPROCNR'
  | 'BRANCH'
  | 'DEPARTMENT'
  | 'FACTORY'
  | 'SOURCEINDEX'
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
  | 'GENEXCTYPE'
  | 'LINEEXCTYPE'
  | 'NETTOTAL'
  | 'TEXTINC'
  | 'TRCURR'
  | 'TRRATE'
  | 'REPORTRATE'
  | 'IMP_CURR'
  | 'IMP_RATE'
  | 'EXIMFILECODE'
  | 'EXIMFILELNNR'
  | 'TRANSACTIONS'
  | 'DELLIST'
  | 'WHNAME'
  | 'UPDATED'
  | 'LINECOUNT'
  | 'FCNOCHANGED'
  | 'DOCNRREF'
  | 'EDTNETTOTAL'
  | 'CUROP'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'XBUFS'
  | 'DOCALS'
  | 'PRINTCNT'
  | 'PRINT_DATE'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'ACCFICHEREF'
  | 'ACCOUNTED'
  | 'ACC_FICHE_SITEID'
  | 'PROJECTREF'
  | 'PROJECT_CODE'
  | 'DISTRIBUTION_TYPE'
  | 'STATUS';

/**
 * Type-safe sort specification for ExportNationalizationSlips queries
 */
export type ExportNationalizationSlipsSortSpec =
  | [ExportNationalizationSlipsField]
  | [ExportNationalizationSlipsField, 'asc' | 'desc']
  | [ExportNationalizationSlipsField[], 'asc' | 'desc']
  | [ExportNationalizationSlipsField[]];

/**
 * Type-safe query options for ExportNationalizationSlips entities
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
export interface ExportNationalizationSlipsQueryOptions
  extends Omit<QueryOptions<ExportNationalizationSlipsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ExportNationalizationSlipsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ExportNationalizationSlipsSortSpec;
}

/**
 * Search criteria for ExportNationalizationSlips entities
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
export interface ExportNationalizationSlipsSearchCriteria {
  internalReference?: NumberFieldValue;
  trcode?: NumberFieldValue;
  ficheno?: StringFieldValue;
  date?: StringFieldValue;
  ftime?: NumberFieldValue;
  docode?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  eximfileref?: NumberFieldValue;
  eximprocnr?: NumberFieldValue;
  branch?: NumberFieldValue;
  department?: NumberFieldValue;
  factory?: NumberFieldValue;
  sourceindex?: NumberFieldValue;
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
  genexctype?: NumberFieldValue;
  lineexctype?: NumberFieldValue;
  nettotal?: NumberFieldValue;
  textinc?: NumberFieldValue;
  trcurr?: NumberFieldValue;
  trrate?: NumberFieldValue;
  reportrate?: NumberFieldValue;
  impCurr?: NumberFieldValue;
  impRate?: NumberFieldValue;
  eximfilecode?: StringFieldValue;
  eximfilelnnr?: NumberFieldValue;
  transactions?: DateFieldValue;
  dellist?: StringFieldValue;
  whname?: StringFieldValue;
  updated?: NumberFieldValue;
  linecount?: NumberFieldValue;
  fcnochanged?: NumberFieldValue;
  docnrref?: NumberFieldValue;
  edtnettotal?: NumberFieldValue;
  curop?: NumberFieldValue;
  textchg?: NumberFieldValue;
  itext?: NumberFieldValue;
  xbufs?: NumberFieldValue;
  docals?: NumberFieldValue;
  printcnt?: NumberFieldValue;
  printDate?: StringFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  accficheref?: NumberFieldValue;
  accounted?: NumberFieldValue;
  accFicheSiteid?: NumberFieldValue;
  projectref?: NumberFieldValue;
  projectCode?: StringFieldValue;
  distributionType?: NumberFieldValue;
  status?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ExportNationalizationSlips entities
 */
export interface ExportNationalizationSlipsAnalytics {
  total: number;
  // Add ExportNationalizationSlips-specific analytics fields
}
