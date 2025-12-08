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
 * Interface for RSCollection[RS_CollatrlCardXML]
 */
export interface RscollectionrsCollatrlcardxml {
  Meta?: Meta;
  items?: RsCollatrlcardxml[];
}

/**
 * Interface for RSCollection[RS_CollatrlTransXML]
 */
export interface RscollectionrsCollatrltransxml {
  Meta?: Meta;
  items?: RsCollatrltransxml[];
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
 * RsCollatrlcardxml transaction line item
 *
 * Represents individual transaction records within a CollateralRolls collection.
 */
export interface RsCollatrlcardxml extends BaseEntity {
  DOC?: number;
  CURRSTAT?: number;
  PORTFOYNO?: string;
  PERIODIC?: number;
  BEGDATE?: string;
  ENDDATE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  DOCODE?: string;
  COLLATRLTYPE?: number;
  COLLUSETYPE?: number;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  BANK_CODE?: string;
  BANKREF?: number;
  BANKPROCTYPE?: number;
  OWN_ARP_CODE?: string;
  CLCARDREF?: number;
  CLBANKNAME?: string;
  CLBANKBRANCH?: string;
  CLBANKACCNO?: string;
  LINEEXCTYP?: number;
  AMOUNT?: number;
  TRCURR?: number;
  TRRATE?: number;
  TRNET?: number;
  REPORTRATE?: number;
  REPORTNET?: number;
  COMMTYPE?: number;
  COMMRATE?: number;
  COMMAMOUNT?: number;
  BSMV?: number;
  STAMPTAX?: number;
  CANCELLED?: number;
  RISKFACTOR?: number;
  DEFINITION?: string;
  OWING?: string;
  SERINO?: string;
  MUHABIR?: string;
  BRANCH?: number;
  DEPARTMENT?: number;
  CITY?: string;
  KEFIL?: string;
  STAMPAMOUNT?: number;
  COMPAYOWNER?: number;
  COMPAYBANK_CODE?: string;
  COMPAYBANKREF?: number;
  MORTGTYPE?: string;
  MORTGRANK?: string;
  MORTGYEVMINO?: string;
  MORTGCILTNO?: string;
  MORTGPAGENO?: string;
  MORTGLINENO?: string;
  MORTGDATE?: string;
  MORTGPAFTANO?: string;
  MORTGADANO?: string;
  MORTGPARSELNO?: string;
  MORTGAREA?: string;
  MORTGBUILDAMNT?: string;
  MORTGBLOCKNO?: string;
  MORTGLAYERNO?: string;
  MORTGINDPARTNO?: string;
  MORTGADDR1?: string;
  MORTGADDR2?: string;
  CREATEDBY?: number;
  CREADEDDATE?: string;
  CREATEDHOUR?: number;
  CREATEDMIN?: number;
  CREATEDSEC?: number;
  MODIFIEDBY?: number;
  MODIFIEDDATE?: string;
  MODIFIEDHOUR?: number;
  MODIFIEDMIN?: number;
  MODIFIEDSEC?: number;
  PRINT_CNT?: number;
  PRINT_DATE?: string;
  TRANSACTIONS?: RscollectionrsCollatrltransxml;
  STAMPREQ?: number;
  BANKCODE?: string;
  BANKNAME?: string;
  BRANCHNO?: string;
  BANKACCNO?: string;
  UPDATED?: number;
  COLLSEL?: number;
  FROMROLL?: number;
  ROLLPTR?: string;
  LOGICALREF?: number;
  TRANS_DATE?: string;
  COLLCARDREF?: number;
  COLLROLLREF?: number;
  TRANS_TRCODE?: number;
  TRANS_PROCTYPE?: number;
  TRANS_ACCOUNTED?: number;
  TRANS_STATUS?: number;
  TRANS_CLCARDREF?: number;
  TRANS_BANKREF?: number;
  TRANS_STATNO?: number;
  TRANS_LINENO?: number;
  TRANS_ACC_CODE?: string;
  TRANS_ACCREF?: number;
  TRANS_COST_CODE?: string;
  TRANS_COSTREF?: number;
  TRANS_CRSACC_CODE?: string;
  TRANS_CRSACCREF?: number;
  TRANS_CRSCOST_CODE?: string;
  TRANS_CRSCOSTREF?: number;
  TRANS_CANCELLED?: number;
  TRANS_LINEEXCTYP?: number;
  COLLECLN?: number;
  OWCLCODE?: string;
  NOPROT?: number;
  XBUFS?: string;
  XCNT?: number;
  DOCALS?: string;
  EDTCURR?: number;
  EDTAMOUNT?: number;
  TEXTCHG?: number;
  ITEXT?: string;
  PNOCHANGED?: number;
  CREATED?: number;
  REPAYPLANREF?: number;
  REPAY_PLAN_CODE?: string;
  HAS_COMM_PAID?: number;
  EXC_STAMP_TAX?: number;
  BSMVTAX?: number;
}

/**
 * RsCollatrltransxml transaction line item
 *
 * Represents individual transaction records within a CollateralRolls collection.
 */
export interface RsCollatrltransxml extends BaseEntity {
  DATE?: string;
  COLLCARDREF?: number;
  COLLROLLREF?: number;
  TRCODE?: number;
  PROCTYPE?: number;
  ACCOUNTED?: number;
  STATUS?: number;
  CLCARDREF?: number;
  BANKREF?: number;
  STATNO?: number;
  LINENO?: number;
  ACCREF?: number;
  COSTREF?: number;
  CRSACCREF?: number;
  CRSCOSTREF?: number;
  CANCELLED?: number;
  LINEEXCTYP?: number;
  STATSTR?: string;
  ACCSTR?: string;
  FCNR?: string;
  FCTYPE?: string;
}

/**
 * CollateralRolls entity interface based on swagger definition
 */
export interface CollateralRolls extends BaseEntity {
  ARP_CODE?: string;
  CLCARDREF?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
  ROLLNO?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  DATE?: string;
  TRCODE?: number;
  BRANCH?: number;
  DEPARTMENT?: number;
  PROCTYPE?: number;
  ACCOUNTED?: number;
  DOCCNT?: number;
  PRINTCNT?: number;
  PRINT_DATE?: string;
  TOTAL?: number;
  TRCURR?: number;
  TRRATE?: number;
  TRNET?: number;
  REPORTRATE?: number;
  REPORTNET?: number;
  GENEXP1?: string;
  GENEXP2?: string;
  GENEXP3?: string;
  GENEXP4?: string;
  ACCFICHEREF?: number;
  ACC_CODE?: string;
  ACCREF?: number;
  CREATEDBY?: number;
  CREADEDDATE?: string;
  CREATEDHOUR?: number;
  CREATEDMIN?: number;
  CREATEDSEC?: number;
  MODIFIEDBY?: number;
  MODIFIEDDATE?: string;
  MODIFIEDHOUR?: number;
  MODIFIEDMIN?: number;
  MODIFIEDSEC?: number;
  CANCELLED?: number;
  CANCELLEDACC?: number;
  TRADINGGRP?: string;
  GENEXCTYP?: number;
  LINEEXCTYP?: number;
  WFSTATUS?: number;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  CARDS?: RscollectionrsCollatrlcardxml;
  UPDATED?: number;
  AVRGDATE?: string;
  CLTITLE?: string;
  NEWDOCTYPE?: number;
  COLLDOCTYPE?: number;
  NEWCOLLSTAT?: number;
  FCDUEDATE?: string;
  VALSSET?: number;
  CUROP?: number;
  XBUFS?: string;
  XCNT?: number;
  DOCALS?: string;
  EDTTOTAL?: number;
  FCNOCHANGED?: number;
  DOCNRREF?: number;
  TEXTCHG?: number;
  ITEXT?: string;
  ACC_FICHE_SITEID?: number;
  CANCEL_AUTO_GL_PROC?: number;
  EBOOK_DOCDATE?: string;
  EBOOK_NODOCUMENT?: number;
  EBOOK_DOCNR?: string;
  EBOOK_DOCTYPE?: number;
  EBOOK_EXPLAIN?: string;
  EBOOK_PAYTYPE?: string;
  EBOOK_NOPAY?: number;
  APPROVE?: number;
  APPROVEDATE?: string;
}

/**
 * Union type of all CollateralRolls field names for type-safe field selection and sorting
 */
export type CollateralRollsField =
  | 'INTERNAL_REFERENCE'
  | 'ARP_CODE'
  | 'CLCARDREF'
  | 'OHP_CODE'
  | 'CENTERREF'
  | 'ROLLNO'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'DATE'
  | 'TRCODE'
  | 'BRANCH'
  | 'DEPARTMENT'
  | 'PROCTYPE'
  | 'ACCOUNTED'
  | 'DOCCNT'
  | 'PRINTCNT'
  | 'PRINT_DATE'
  | 'TOTAL'
  | 'TRCURR'
  | 'TRRATE'
  | 'TRNET'
  | 'REPORTRATE'
  | 'REPORTNET'
  | 'GENEXP1'
  | 'GENEXP2'
  | 'GENEXP3'
  | 'GENEXP4'
  | 'ACCFICHEREF'
  | 'ACC_CODE'
  | 'ACCREF'
  | 'CREATEDBY'
  | 'CREADEDDATE'
  | 'CREATEDHOUR'
  | 'CREATEDMIN'
  | 'CREATEDSEC'
  | 'MODIFIEDBY'
  | 'MODIFIEDDATE'
  | 'MODIFIEDHOUR'
  | 'MODIFIEDMIN'
  | 'MODIFIEDSEC'
  | 'CANCELLED'
  | 'CANCELLEDACC'
  | 'TRADINGGRP'
  | 'GENEXCTYP'
  | 'LINEEXCTYP'
  | 'TEXTINC'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WFSTATUS'
  | 'PROJECT_CODE'
  | 'PROJECTREF'
  | 'CARDS'
  | 'UPDATED'
  | 'AVRGDATE'
  | 'CLTITLE'
  | 'NEWDOCTYPE'
  | 'COLLDOCTYPE'
  | 'NEWCOLLSTAT'
  | 'FCDUEDATE'
  | 'VALSSET'
  | 'CUROP'
  | 'XBUFS'
  | 'XCNT'
  | 'DOCALS'
  | 'EDTTOTAL'
  | 'FCNOCHANGED'
  | 'DOCNRREF'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'ACC_FICHE_SITEID'
  | 'CANCEL_AUTO_GL_PROC'
  | 'EBOOK_DOCDATE'
  | 'EBOOK_NODOCUMENT'
  | 'EBOOK_DOCNR'
  | 'EBOOK_DOCTYPE'
  | 'EBOOK_EXPLAIN'
  | 'EBOOK_PAYTYPE'
  | 'EBOOK_NOPAY'
  | 'APPROVE'
  | 'APPROVEDATE';

/**
 * Type-safe sort specification for CollateralRolls queries
 */
export type CollateralRollsSortSpec =
  | [CollateralRollsField]
  | [CollateralRollsField, 'asc' | 'desc']
  | [CollateralRollsField[], 'asc' | 'desc']
  | [CollateralRollsField[]];

/**
 * Type-safe query options for CollateralRolls entities
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
export interface CollateralRollsQueryOptions extends Omit<
  QueryOptions<CollateralRollsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: CollateralRollsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: CollateralRollsSortSpec;
}

/**
 * Search criteria for CollateralRolls entities
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
export interface CollateralRollsSearchCriteria {
  internalReference?: NumberFieldValue;
  arpCode?: StringFieldValue;
  clcardref?: NumberFieldValue;
  ohpCode?: StringFieldValue;
  centerref?: NumberFieldValue;
  rollno?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  date?: StringFieldValue;
  trcode?: NumberFieldValue;
  branch?: NumberFieldValue;
  department?: NumberFieldValue;
  proctype?: NumberFieldValue;
  accounted?: NumberFieldValue;
  doccnt?: NumberFieldValue;
  printcnt?: NumberFieldValue;
  printDate?: StringFieldValue;
  total?: NumberFieldValue;
  trcurr?: NumberFieldValue;
  trrate?: NumberFieldValue;
  trnet?: NumberFieldValue;
  reportrate?: NumberFieldValue;
  reportnet?: NumberFieldValue;
  genexp1?: StringFieldValue;
  genexp2?: StringFieldValue;
  genexp3?: StringFieldValue;
  genexp4?: StringFieldValue;
  accficheref?: NumberFieldValue;
  accCode?: StringFieldValue;
  accref?: NumberFieldValue;
  createdby?: NumberFieldValue;
  creadeddate?: StringFieldValue;
  createdhour?: NumberFieldValue;
  createdmin?: NumberFieldValue;
  createdsec?: NumberFieldValue;
  modifiedby?: NumberFieldValue;
  modifieddate?: StringFieldValue;
  modifiedhour?: NumberFieldValue;
  modifiedmin?: NumberFieldValue;
  modifiedsec?: NumberFieldValue;
  cancelled?: NumberFieldValue;
  cancelledacc?: NumberFieldValue;
  tradinggrp?: StringFieldValue;
  genexctyp?: NumberFieldValue;
  lineexctyp?: NumberFieldValue;
  textinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  projectCode?: StringFieldValue;
  projectref?: NumberFieldValue;
  cards?: DateFieldValue;
  updated?: NumberFieldValue;
  avrgdate?: StringFieldValue;
  cltitle?: StringFieldValue;
  newdoctype?: NumberFieldValue;
  colldoctype?: NumberFieldValue;
  newcollstat?: NumberFieldValue;
  fcduedate?: StringFieldValue;
  valsset?: NumberFieldValue;
  curop?: NumberFieldValue;
  xbufs?: StringFieldValue;
  xcnt?: NumberFieldValue;
  docals?: StringFieldValue;
  edttotal?: NumberFieldValue;
  fcnochanged?: NumberFieldValue;
  docnrref?: NumberFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;
  accFicheSiteid?: NumberFieldValue;
  cancelAutoGlProc?: NumberFieldValue;
  ebookDocdate?: StringFieldValue;
  ebookNodocument?: NumberFieldValue;
  ebookDocnr?: StringFieldValue;
  ebookDoctype?: NumberFieldValue;
  ebookExplain?: StringFieldValue;
  ebookPaytype?: StringFieldValue;
  ebookNopay?: NumberFieldValue;
  approve?: NumberFieldValue;
  approvedate?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for CollateralRolls entities
 */
export interface CollateralRollsAnalytics {
  total: number;
  // Add CollateralRolls-specific analytics fields
}
