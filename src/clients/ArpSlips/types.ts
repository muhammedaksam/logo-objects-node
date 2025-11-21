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
 * Interface for RSCollection[RS_ARPTransXML]
 */
export interface RscollectionrsArptransxml {
  Meta?: Meta;
  items?: RsArptransxml[];
}

/**
 * Interface for RSCollection[RS_PayLstXML]
 */
export interface RscollectionrsPaylstxml {
  Meta?: Meta;
  items?: RsPaylstxml[];
}

/**
 * Interface for RSCollection[RS_DiscPayTrXML]
 */
export interface RscollectionrsDiscpaytrxml {
  Meta?: Meta;
  items?: RsDiscpaytrxml[];
}

/**
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
}

/**
 * Interface for RSCollection[RS_PreAccDistLnXML]
 */
export interface RscollectionrsPreaccdistlnxml {
  Meta?: Meta;
  items?: RsPreaccdistlnxml[];
}

/**
 * Interface for RSCollection[RS_LabelXML]
 */
export interface RscollectionrsLabelxml {
  Meta?: Meta;
  items?: RsLabelxml[];
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
 * RsArptransxml transaction line item
 *
 * Represents individual transaction records within a ArpSlips collection.
 */
export interface RsArptransxml extends BaseEntity {
  ARP_CODE?: string;
  CLIENTREF?: number;
  GL_CODE1?: string;
  CLACCREF?: number;
  OHP_CODE1?: string;
  CLCENTERREF?: number;
  OHP_CODE2?: string;
  CASHCENTERREF?: number;
  GL_CODE2?: string;
  CASHACCOUNTREF?: number;
  VIRMANREF?: number;
  SOURCEFREF?: number;
  DATE?: string;
  DEPARTMENT?: number;
  DIVISION?: number;
  MODULENR?: number;
  TRCODE?: number;
  LINENR?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  CYPHCODE?: string;
  AUXIL_CODE2?: string;
  TRANNO?: string;
  DOC_NUMBER?: string;
  DESCRIPTION?: string;
  GL_POSTED?: number;
  DEBIT?: number;
  CREDIT?: number;
  SIGN?: number;
  TOTAL_VAT?: number;
  TOTAL_VAT_TC?: number;
  TOTAL_VAT_RC?: number;
  GROSS_AMOUNT?: number;
  GROSS_AMOUNT_TC?: number;
  GROSS_AMOUNT_RC?: number;
  NET_AMOUNT?: number;
  NET_AMOUNT_TC?: number;
  NET_AMOUNT_RC?: number;
  AMOUNT?: number;
  CURR_TRANS?: number;
  TC_XRATE?: number;
  TC_AMOUNT?: number;
  RC_XRATE?: number;
  RC_AMOUNT?: number;
  BNLN_TC_CURR?: number;
  BNLN_TC_XRATE?: number;
  BNLN_TC_AMOUNT?: number;
  EXTENREF?: number;
  PAYMENT_CODE?: string;
  PAYDEFREF?: number;
  ACCFICHEREF?: number;
  PRINTCNT?: number;
  PRINT_DATE?: string;
  CANCELLED?: number;
  TRGFLAG?: number;
  TRADING_GRP?: string;
  CURRSEL_TRANS?: number;
  SINGLE_PAYMENT?: number;
  DISCOUNTED?: number;
  DISCOUNT_RATE?: number;
  STOPPAGE_AMOUNT?: number;
  STOPPAGE_AMOUNT_TC?: number;
  STOPPAGE_AMOUNT_RC?: number;
  VAT_RATE?: number;
  VAT_AMOUNTX?: number;
  VAT_AMOUNTX_TC?: number;
  VAT_AMOUNTX_RC?: number;
  DISCOUNTED_AMOUNT?: number;
  GL_CODE3?: string;
  DISCACCREF?: number;
  OHP_CODE3?: string;
  DISCCENREF?: number;
  GL_CODE4?: string;
  VATRACCREF?: number;
  OHP_CODE4?: string;
  PAYMENT_LIST?: RscollectionrsPaylstxml;
  VATRCENREF?: number;
  PAYMENTREF?: number;
  XBUFS?: string;
  INFLATION_IDX?: number;
  CASH_TRAN_GRP_NO?: string;
  CASH_TRAN_GRPLINE_NO?: number;
  CASH_INFLDX?: number;
  CASH_ORGLOGOID?: number;
  INVOICE_ORGLOGOID?: number;
  CREDIT_CARD_NO?: string;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  EXIM_FILECODE_CLF?: string;
  EXIM_FILECODE?: string;
  EXIM_FILEREF?: number;
  EXIM_FILELINENR?: number;
  EXIM_PROCNR?: number;
  FUNDSHARERAT?: number;
  FUNDSHARE_AMOUNT?: number;
  FUNDSHARE_AMOUNT_TC?: number;
  FUNDSHARE_AMOUNT_RC?: number;
  MONTH?: number;
  YEAR?: number;
  AFFECT_COLLATRL?: number;
  GRPFIRMTRANS?: number;
  AFFECT_RISK?: number;
  BATCH_NR?: string;
  APPROVE_NR?: string;
  ORGLOGOID?: string;
  BANKACCREF?: number;
  BANKACC_CODE?: string;
  BNACCREF?: number;
  BANK_GL_CODE?: string;
  BNCENTERREF?: number;
  BANK_OHP_CODE?: string;
  DEVIR_PROC_DATE?: string;
  DOC_DATE?: string;
  SALESMANREF?: number;
  SALESMAN_CODE?: string;
  POSCOMMACCREF?: number;
  POSCOMM_GL_CODE?: string;
  POSCOMMCENREF?: number;
  POSCOMM_OHP_CODE?: string;
  POINTCOMMACCREF?: number;
  POINTCOMM_GL_CODE?: string;
  POINTCOMMCENREF?: number;
  POINTCOMM_OHP_CODE?: string;
  VAT_AMOUNT?: number;
  RETCCFCREF?: number;
  RET_CC_FC_NO?: string;
  CAN_DEDUCT?: number;
  DEDUCTION_PART1?: number;
  DEDUCTION_PART2?: number;
  DEDUCTION_AMOUNT?: number;
  DEDUCTION_AMOUNT_TC?: number;
  DEDUCTION_AMOUNT_RC?: number;
  CANT_CRE_DEDUCT?: number;
  INC_DEDUCT_AMOUNT?: number;
  GL_CODE5?: string;
  VAT_DEDUCT_ACCREF?: number;
  OHP_CODE5?: string;
  VAT_DEDUCT_CENREF?: number;
  GL_CODE6?: string;
  VAT_DEDUCT_OTHACCREF?: number;
  OHP_CODE6?: string;
  VAT_DEDUCT_OTHCENREF?: number;
  DISTRIBUTION_TYPE_FNO?: number;
  OFFER_REFERENCE?: number;
  AFFECT_COST?: number;
  SERVICE_REASON?: string;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  PREACCLINES?: RscollectionrsPreaccdistlnxml;
  GUID?: string;
  EQUALIZE_BALANCE?: number;
}

/**
 * RsPaylstxml transaction line item
 *
 * Represents individual transaction records within a ArpSlips collection.
 */
export interface RsPaylstxml extends BaseEntity {
  CARDREF?: number;
  DATE?: string;
  MODULENR?: number;
  SIGN?: number;
  FICHEREF?: number;
  FICHELINEREF?: number;
  TRCODE?: number;
  TOTAL?: number;
  PAID?: number;
  DAYS?: number;
  EARLYINTRATE?: number;
  LATELYINTRATE?: number;
  CROSSREF?: number;
  PAIDINCASH?: number;
  CANCELLED?: number;
  PROCDATE?: string;
  TRCURR?: number;
  TRRATE?: number;
  REPORTRATE?: number;
  MODIFIED?: number;
  REMIND_LEVEL?: number;
  REMIND_SENT?: number;
  CROSSCURR?: number;
  CROSSTOTAL?: number;
  DISCOUNTED?: number;
  DATE_SITEID?: number;
  WFSTATUS?: number;
  CLOSINGRATE?: number;
  DISCOUNT_DUEDATE?: string;
  OP_STATUS?: number;
  INFLATION_IDX?: number;
  PAY_NO?: number;
  DELAY_TOTAL?: number;
  LAST_SEND_REM_LEV?: number;
  POINT_TRANS?: number;
  BANK_PAY_DATE?: string;
  POS_COMSN?: number;
  POINT_COMSN?: number;
  BANKACCREF?: number;
  BANKACC_CODE?: string;
  PAYMENT_TYPE?: number;
  DISCTRLIST?: RscollectionrsDiscpaytrxml;
  DISCTRDELLIST?: string;
  CASHACCREF?: number;
  CASHACC_CODE?: string;
  TRNET?: number;
  REPAYPLANREF?: number;
  DUEDIFF_COMSN?: number;
  CALC_TYPE?: number;
  NET_TOTAL?: number;
  REPAYPLN_APPLIED?: number;
  PAYTR_CURR?: number;
  PAYTR_RATE?: number;
  PAYTR_NET?: number;
  REPAYPLAN_CODE?: string;
  BNFCLINE?: number;
  ORGLOGOID?: string;
  CREDIT_CARD_NUMBER?: string;
  VAL_BEG_DATE?: string;
  RET_REF_NUMBER?: string;
  DO_CODE?: string;
  BATCH_NUMBER?: string;
  APPROVE_NUMBER?: string;
  POS_TERMINAL_NUMBER?: string;
  GLOBAL_CODE?: string;
  CL_BNACC_NUMBER?: string;
  OLD_TOTAL?: number;
  OLD_BNACC_NUMBER?: string;
  LINE_EXP?: string;
  CURR_DIFF_RATE?: number;
  CURR_DIFF_CLOSED?: number;
  CURR_DIFF_CLSREF?: number;
  VAT_FLAG?: number;
}

/**
 * RsDiscpaytrxml transaction line item
 *
 * Represents individual transaction records within a ArpSlips collection.
 */
export interface RsDiscpaytrxml extends BaseEntity {
  PAYTRANREF?: number;
  CARDREF?: number;
  TRCODE?: number;
  MODULENR?: number;
  TSIGN?: number;
  FICHEREF?: number;
  FICHELINEREF?: number;
  DISC_RATE?: number;
  DISCDUE_DATE?: string;
  WFSTATUS?: number;
}

/**
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a ArpSlips collection.
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
 * RsPreaccdistlnxml transaction line item
 *
 * Represents individual transaction records within a ArpSlips collection.
 */
export interface RsPreaccdistlnxml extends BaseEntity {
  FICHEREF?: number;
  LINENR?: number;
  PREVLINEREF?: number;
  CENTERREF?: number;
  PROJECTREF?: number;
  DISTRATE?: number;
  LINEEXCTYP?: number;
  DATE?: string;
  TSIGN?: number;
  CANCELED?: number;
  WFSTATUS?: number;
  STATUS?: number;
  MONTH?: number;
  YEAR?: number;
  PREVLINETYPE?: number;
  MODULNR?: number;
  CENTERCODE?: string;
  CENTERNAME?: string;
  PROJECTCODE?: string;
  PROJECTNAME?: string;
  CREDEBNET?: number;
  EDTCREDEBNET?: number;
  EMUCREDEBNET?: number;
}

/**
 * RsLabelxml transaction line item
 *
 * Represents individual transaction records within a ArpSlips collection.
 */
export interface RsLabelxml extends BaseEntity {
  NAME?: string;
  DEFINITION?: string;
  USER_TYPE?: number;
}

/**
 * ArpSlips entity interface based on swagger definition
 */
export interface ArpSlips extends BaseEntity {
  NUMBER?: string;
  DATE?: string;
  DOC_NUMBER?: string;
  TYPE?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  DIVISION?: number;
  DEPARTMENT?: number;
  NOTES1?: string;
  NOTES2?: string;
  NOTES3?: string;
  NOTES4?: string;
  TOTAL_DEBIT?: number;
  TOTAL_CREDIT?: number;
  RC_TOTAL_DEBIT?: number;
  RC_TOTAL_CREDIT?: number;
  GL_POSTED?: number;
  INVOREF?: number;
  GL_CODE?: string;
  CASHACCREF?: number;
  OHP_CODE?: string;
  CASHCENREF?: number;
  PRINT_COUNTER?: number;
  PRINT_DATE?: string;
  CANCELLED?: number;
  CANCELLEDACC?: number;
  ACCFICHEREF?: number;
  CURRSEL_TOTALS?: number;
  CURRSEL_DETAILS?: number;
  TRANSACTIONS?: RscollectionrsArptransxml;
  XBUFS?: string;
  DOCALS?: string;
  ITEXT?: string;
  CLCARDREF?: number;
  ARP_CODE?: string;
  TIME?: number;
  BANKACCREF?: number;
  BANKACC_CODE?: string;
  BNACCREF?: number;
  BNGL_CODE?: string;
  BNCENTERREF?: number;
  BNOHP_CODE?: string;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  ORGLOGOID?: string;
  AFFECT_COLLATRL?: number;
  STATUS?: number;
  GRPFIRMTRANS?: number;
  AFFECT_RISK?: number;
  POS_TERMINAL_NR?: string;
  APPROVE?: number;
  APPROVE_DATE?: string;
  ACC_FICHE_SITEID?: number;
  DOC_DATE?: string;
  SALESMANREF?: number;
  SALESMAN_CODE?: string;
  DEDUCT_CODE?: string;
  TYPE_CODE?: string;
  EINVOICE?: number;
  HOUR?: number;
  MINUTE?: number;
  ELECT_DOC?: number;
  CANCEL_AUTO_GL_PROC?: number;
  EBOOK_DOCDATE?: string;
  EBOOK_NODOCUMENT?: number;
  EBOOK_DOCNR?: string;
  EBOOK_DOCTYPE?: number;
  EBOOK_EXPLAIN?: string;
  EBOOK_PAYTYPE?: string;
  EBOOK_NOPAY?: number;
  ETRADE_STATUS?: number;
  ETRADE_GRPKOD?: number;
  ETRADE_SENDMOD?: number;
  ETRADE_TAXNR?: string;
  ETRADE_TCKNO?: string;
  ETRADE_NAME?: string;
  ETRADE_SURNAME?: string;
  ETRADE_DEFINITION?: string;
  ETRADE_ADDR1?: string;
  ETRADE_ADDR2?: string;
  ETRADE_CITYCODE?: string;
  ETRADE_CITY?: string;
  ETRADE_COUNTRYCODE?: string;
  ETRADE_COUNTRY?: string;
  ETRADE_POSTCODE?: string;
  ETRADE_DISTRICTCODE?: string;
  ETRADE_DISTRICT?: string;
  ETRADE_TOWNCODE?: string;
  ETRADE_TOWN?: string;
  ETRADE_EMAILADDR?: string;
  ETRADE_ISCOMP?: number;
  GUID?: string;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  LABEL_LIST?: RscollectionrsLabelxml;
  PARTIALCSPAYREF?: number;
  NOTES5?: string;
  NOTES6?: string;
  TOTAL_DEBIT_STR?: string;
  TC_AMOUNT_STR?: string;
}

/**
 * Union type of all ArpSlips field names for type-safe field selection and sorting
 */
export type ArpSlipsField =
  | 'INTERNAL_REFERENCE'
  | 'NUMBER'
  | 'DATE'
  | 'DOC_NUMBER'
  | 'TYPE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'DIVISION'
  | 'DEPARTMENT'
  | 'NOTES1'
  | 'NOTES2'
  | 'NOTES3'
  | 'NOTES4'
  | 'TOTAL_DEBIT'
  | 'TOTAL_CREDIT'
  | 'RC_TOTAL_DEBIT'
  | 'RC_TOTAL_CREDIT'
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
  | 'GL_POSTED'
  | 'INVOREF'
  | 'GL_CODE'
  | 'CASHACCREF'
  | 'OHP_CODE'
  | 'CASHCENREF'
  | 'PRINT_COUNTER'
  | 'PRINT_DATE'
  | 'CANCELLED'
  | 'CANCELLEDACC'
  | 'ACCFICHEREF'
  | 'CURRSEL_TOTALS'
  | 'CURRSEL_DETAILS'
  | 'TEXTINC'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'TRANSACTIONS'
  | 'XBUFS'
  | 'DOCALS'
  | 'ITEXT'
  | 'XML_ATTRIBUTE'
  | 'CLCARDREF'
  | 'ARP_CODE'
  | 'TIME'
  | 'BANKACCREF'
  | 'BANKACC_CODE'
  | 'BNACCREF'
  | 'BNGL_CODE'
  | 'BNCENTERREF'
  | 'BNOHP_CODE'
  | 'PROJECTREF'
  | 'PROJECT_CODE'
  | 'ORGLOGOID'
  | 'AFFECT_COLLATRL'
  | 'STATUS'
  | 'GRPFIRMTRANS'
  | 'AFFECT_RISK'
  | 'POS_TERMINAL_NR'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'ACC_FICHE_SITEID'
  | 'DOC_DATE'
  | 'SALESMANREF'
  | 'SALESMAN_CODE'
  | 'DEDUCT_CODE'
  | 'TYPE_CODE'
  | 'EINVOICE'
  | 'HOUR'
  | 'MINUTE'
  | 'ELECT_DOC'
  | 'CANCEL_AUTO_GL_PROC'
  | 'EBOOK_DOCDATE'
  | 'EBOOK_NODOCUMENT'
  | 'EBOOK_DOCNR'
  | 'EBOOK_DOCTYPE'
  | 'EBOOK_EXPLAIN'
  | 'EBOOK_PAYTYPE'
  | 'EBOOK_NOPAY'
  | 'ETRADE_STATUS'
  | 'ETRADE_GRPKOD'
  | 'ETRADE_SENDMOD'
  | 'ETRADE_TAXNR'
  | 'ETRADE_TCKNO'
  | 'ETRADE_NAME'
  | 'ETRADE_SURNAME'
  | 'ETRADE_DEFINITION'
  | 'ETRADE_ADDR1'
  | 'ETRADE_ADDR2'
  | 'ETRADE_CITYCODE'
  | 'ETRADE_CITY'
  | 'ETRADE_COUNTRYCODE'
  | 'ETRADE_COUNTRY'
  | 'ETRADE_POSTCODE'
  | 'ETRADE_DISTRICTCODE'
  | 'ETRADE_DISTRICT'
  | 'ETRADE_TOWNCODE'
  | 'ETRADE_TOWN'
  | 'ETRADE_EMAILADDR'
  | 'ETRADE_ISCOMP'
  | 'GUID'
  | 'DEFNFLDSLIST'
  | 'LABEL_LIST'
  | 'PARTIALCSPAYREF'
  | 'NOTES5'
  | 'NOTES6'
  | 'TOTAL_DEBIT_STR'
  | 'TC_AMOUNT_STR';

/**
 * Type-safe sort specification for ArpSlips queries
 */
export type ArpSlipsSortSpec =
  | [ArpSlipsField]
  | [ArpSlipsField, 'asc' | 'desc']
  | [ArpSlipsField[], 'asc' | 'desc']
  | [ArpSlipsField[]];

/**
 * Type-safe query options for ArpSlips entities
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
export interface ArpSlipsQueryOptions extends Omit<QueryOptions<ArpSlipsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ArpSlipsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ArpSlipsSortSpec;
}

/**
 * Search criteria for ArpSlips entities
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
export interface ArpSlipsSearchCriteria {
  internalReference?: NumberFieldValue;
  number?: StringFieldValue;
  date?: StringFieldValue;
  docNumber?: StringFieldValue;
  type?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  division?: NumberFieldValue;
  department?: NumberFieldValue;
  notes1?: StringFieldValue;
  notes2?: StringFieldValue;
  notes3?: StringFieldValue;
  notes4?: StringFieldValue;
  totalDebit?: NumberFieldValue;
  totalCredit?: NumberFieldValue;
  rcTotalDebit?: NumberFieldValue;
  rcTotalCredit?: NumberFieldValue;
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
  glPosted?: NumberFieldValue;
  invoref?: NumberFieldValue;
  glCode?: StringFieldValue;
  cashaccref?: NumberFieldValue;
  ohpCode?: StringFieldValue;
  cashcenref?: NumberFieldValue;
  printCounter?: NumberFieldValue;
  printDate?: StringFieldValue;
  cancelled?: NumberFieldValue;
  cancelledacc?: NumberFieldValue;
  accficheref?: NumberFieldValue;
  currselTotals?: NumberFieldValue;
  currselDetails?: NumberFieldValue;
  textinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  transactions?: DateFieldValue;
  xbufs?: StringFieldValue;
  docals?: StringFieldValue;
  itext?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  clcardref?: NumberFieldValue;
  arpCode?: StringFieldValue;
  time?: NumberFieldValue;
  bankaccref?: NumberFieldValue;
  bankaccCode?: StringFieldValue;
  bnaccref?: NumberFieldValue;
  bnglCode?: StringFieldValue;
  bncenterref?: NumberFieldValue;
  bnohpCode?: StringFieldValue;
  projectref?: NumberFieldValue;
  projectCode?: StringFieldValue;
  orglogoid?: StringFieldValue;
  affectCollatrl?: NumberFieldValue;
  status?: NumberFieldValue;
  grpfirmtrans?: NumberFieldValue;
  affectRisk?: NumberFieldValue;
  posTerminalNr?: StringFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  accFicheSiteid?: NumberFieldValue;
  docDate?: StringFieldValue;
  salesmanref?: NumberFieldValue;
  salesmanCode?: StringFieldValue;
  deductCode?: StringFieldValue;
  typeCode?: StringFieldValue;
  einvoice?: NumberFieldValue;
  hour?: NumberFieldValue;
  minute?: NumberFieldValue;
  electDoc?: NumberFieldValue;
  cancelAutoGlProc?: NumberFieldValue;
  ebookDocdate?: StringFieldValue;
  ebookNodocument?: NumberFieldValue;
  ebookDocnr?: StringFieldValue;
  ebookDoctype?: NumberFieldValue;
  ebookExplain?: StringFieldValue;
  ebookPaytype?: StringFieldValue;
  ebookNopay?: NumberFieldValue;
  etradeStatus?: NumberFieldValue;
  etradeGrpkod?: NumberFieldValue;
  etradeSendmod?: NumberFieldValue;
  etradeTaxnr?: StringFieldValue;
  etradeTckno?: StringFieldValue;
  etradeName?: StringFieldValue;
  etradeSurname?: StringFieldValue;
  etradeDefinition?: StringFieldValue;
  etradeAddr1?: StringFieldValue;
  etradeAddr2?: StringFieldValue;
  etradeCitycode?: StringFieldValue;
  etradeCity?: StringFieldValue;
  etradeCountrycode?: StringFieldValue;
  etradeCountry?: StringFieldValue;
  etradePostcode?: StringFieldValue;
  etradeDistrictcode?: StringFieldValue;
  etradeDistrict?: StringFieldValue;
  etradeTowncode?: StringFieldValue;
  etradeTown?: StringFieldValue;
  etradeEmailaddr?: StringFieldValue;
  etradeIscomp?: NumberFieldValue;
  guid?: StringFieldValue;
  defnfldslist?: DateFieldValue;
  labelList?: DateFieldValue;
  partialcspayref?: NumberFieldValue;
  notes5?: StringFieldValue;
  notes6?: StringFieldValue;
  totalDebitStr?: StringFieldValue;
  tcAmountStr?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ArpSlips entities
 */
export interface ArpSlipsAnalytics {
  total: number;
  // Add ArpSlips-specific analytics fields
}
