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
 * Interface for RSCollection[RS_ChqPNTransXML]
 */
export interface RscollectionrsChqpntransxml {
  Meta?: Meta;
  items?: RsChqpntransxml[];
}

/**
 * Interface for RSCollection[RS_ChqPNStatXML]
 */
export interface RscollectionrsChqpnstatxml {
  Meta?: Meta;
  items?: RsChqpnstatxml[];
}

/**
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
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
 * Interface for RSCollection[RS_PreAccDistLnXML]
 */
export interface RscollectionrsPreaccdistlnxml {
  Meta?: Meta;
  items?: RsPreaccdistlnxml[];
}

/**
 * Interface for RSCollection[RS_BankTransXML]
 */
export interface RscollectionrsBanktransxml {
  Meta?: Meta;
  items?: RsBanktransxml[];
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
 * RsChqpntransxml transaction line item
 *
 * Represents individual transaction records within a ChequeAndPnoteRolls collection.
 */
export interface RsChqpntransxml extends BaseEntity {
  TYPE?: number;
  CURRENT_STATUS?: number;
  BANK_CODE?: string;
  OURBANKREF?: number;
  NUMBER?: string;
  SERIAL_NUMBER?: string;
  BANK_TITLE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  CITY?: string;
  OWING?: string;
  GUARANTOR?: string;
  GUARANTOR2?: string;
  INFORMANT?: string;
  DIVISION_NO?: string;
  DIVISION?: number;
  ACCOUNT_NO?: string;
  DUE_DATE?: string;
  DATE?: string;
  STAMP_FEE?: number;
  AMOUNT?: number;
  CURR_TRANS?: number;
  TC_XRATE?: number;
  TC_AMOUNT?: number;
  RC_XRATE?: number;
  RC_AMOUNT?: number;
  CREDIT_FLAG?: number;
  TRANSFERRED?: number;
  INUSE?: number;
  EXTENREF?: number;
  RC_XRATE_COLL?: number;
  TC_XRATE_COLL?: number;
  USE_RAISED_VAL?: number;
  CANCELLED?: number;
  CURRSEL_TRANS?: number;
  STAMP_FEE_REQ?: number;
  CSREF?: number;
  ROLLREF?: number;
  TRCODE?: number;
  ACCOUNTED?: number;
  DEVIR?: number;
  TRANS_STATUS?: number;
  CARDMD?: number;
  CARDREF?: number;
  STATUS_ORDER?: number;
  LINENO?: number;
  GL_CODE1?: string;
  ACCREF?: number;
  OHP_CODE1?: string;
  COSTREF?: number;
  GL_CODE2?: string;
  CRSACCREF?: number;
  OHP_CODE2?: string;
  CRSCOSTREF?: number;
  FROMCASH?: number;
  LINEEXCTYP?: number;
  XBUFS?: string;
  DOCALS?: string;
  ITEXT?: string;
  OP_STATUS?: number;
  SERIAL_NR?: string;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  DATA_SITEID1?: number;
  DATA_REFERENCE1?: number;
  XML_ATTRIBUTE1?: number;
  AFFECT_COLLATRL?: number;
  COLLATRL_ROLLFC?: string;
  COLLATRL_ROLLREF?: number;
  COLLATRL_CARDNO?: string;
  COLLATRL_CARDREF?: number;
  AFFECT_RISK?: number;
  ORGLOGOID?: string;
  ORGLOGOID1?: string;
  GIRO_RC_XRATE?: number;
  GIRO_TC_XRATE?: number;
  GIRO_AMOUNT?: number;
  GIRO_RC_AMOUNT?: number;
  USE_GIRO_RATE?: number;
  TAX_NR?: string;
  STATUS_LIST?: RscollectionrsChqpnstatxml;
  CS_IBAN?: string;
  SALESMANREF?: number;
  SALESMAN_CODE?: string;
  DEPT_ADDRESS1?: string;
  DEPT_ADDRESS2?: string;
  DEPT_CITY?: string;
  DEPT_CITY_CODE?: string;
  DEPT_COUNTRY?: string;
  DEPT_COUNTRY_CODE?: string;
  DEPT_POST_CODE?: string;
  DEPT_TELNR1?: string;
  DEPT_TELNR2?: string;
  DEPT_FAXNR?: string;
  DEPT_TOWN?: string;
  DEPT_TOWN_CODE?: string;
  DEPT_DISTRICT?: string;
  DEPT_DISTRICT_CODE?: string;
  SUBDURATION?: number;
  CIRO?: number;
  GL_CODE3?: string;
  CLACCREF?: number;
  OHP_CODE3?: string;
  CLCOSTREF?: number;
  OFFER_REFERENCE?: number;
  TRADING_GRP?: string;
  BNCREREF?: number;
  BANK_CRE_CODE?: string;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  STATUS?: number;
  GUID?: string;
  PARTIAL?: number;
  CLTRCURR?: number;
  CLTRRATE?: number;
  CLTRNET?: number;
}

/**
 * RsChqpnstatxml transaction line item
 *
 * Represents individual transaction records within a ChequeAndPnoteRolls collection.
 */
export interface RsChqpnstatxml extends BaseEntity {
  DATE?: string;
  CSREF?: number;
  ROLLREF?: number;
  TRCODE?: number;
  ACCOUNTED?: number;
  DEVIR?: number;
  STATUS?: number;
  CARDMD?: number;
  CARDREF?: number;
  STATNO?: number;
  LINENO?: number;
  ACCREF?: number;
  COSTREF?: number;
  CRSACCREF?: number;
  CRSCOSTREF?: number;
  FROMCASH?: number;
  CANCELLED?: number;
  LINEEXCTYP?: number;
  OPSTAT?: number;
  PROVLNACCREF?: number;
  PROVLNCOSTREF?: number;
  AFFECTCOLLATRL?: number;
  AFFECTRISK?: number;
  ORGLOGOID?: string;
  USEGIRORATE?: number;
  FROMBANK?: number;
  STATSTR?: string;
  ACCSTR?: string;
  FCNR?: string;
  FCTYPE?: string;
  CASHFLAG?: string;
  BANK_CODE?: string;
  BANK_TITLE?: string;
  BANK_BRANCH?: string;
  BANK_BRANCH_NUMBER?: string;
  BANK_ACC_CODE?: string;
  BANK_ACC_TITLE?: string;
  BANK_ACC_NUMBER?: string;
  BNCREREF?: number;
  BANK_CRE_CODE?: string;
}

/**
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a ChequeAndPnoteRolls collection.
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
 * RsArptransxml transaction line item
 *
 * Represents individual transaction records within a ChequeAndPnoteRolls collection.
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
 * Represents individual transaction records within a ChequeAndPnoteRolls collection.
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
 * Represents individual transaction records within a ChequeAndPnoteRolls collection.
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
 * RsPreaccdistlnxml transaction line item
 *
 * Represents individual transaction records within a ChequeAndPnoteRolls collection.
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
 * RsBanktransxml transaction line item
 *
 * Represents individual transaction records within a ChequeAndPnoteRolls collection.
 */
export interface RsBanktransxml extends BaseEntity {
  TYPE?: number;
  TRANNO?: string;
  BANKREF?: number;
  BANKACC_CODE?: string;
  BNACCREF?: number;
  ARP_CODE?: string;
  CLIENTREF?: number;
  GL_CODE1?: string;
  ACCOUNTREF?: number;
  OHP_CODE1?: string;
  CENTERREF?: number;
  GL_CODE2?: string;
  BNACCOUNTREF?: number;
  OHP_CODE2?: string;
  BNCENTERREF?: number;
  VIRMANREF?: number;
  SOURCEFREF?: number;
  DATE?: string;
  TIME?: number;
  DEPARTMENT?: number;
  BRANCH?: number;
  SIGN?: number;
  TRCODE?: number;
  MODULENR?: number;
  LINENR?: number;
  AUXIL_CODE?: string;
  CYPHCODE?: string;
  DOC_NUMBER?: string;
  DESCRIPTION?: string;
  ACCOUNTED?: number;
  CURR_TRANS?: number;
  DEBIT?: number;
  CREDIT?: number;
  AMOUNT?: number;
  TC_XRATE?: number;
  TC_AMOUNT?: number;
  RC_XRATE?: number;
  RC_AMOUNT?: number;
  EXTENREF?: number;
  ACCFICHEREF?: number;
  PRINTCNT?: number;
  PRINT_DATE?: string;
  CANCELLED?: number;
  ARP_BNKDIV_NR?: string;
  ARP_BNKACCOUNT_NR?: string;
  BNK_TRACKING_NR?: string;
  TRN_STATE?: number;
  TRADING_GRP?: string;
  CURRSEL_TRANS?: number;
  DISCOUNTED?: number;
  DISCOUNT_RATE?: number;
  VAT_RATE?: number;
  ARP_CLOSE_AMOUNT?: number;
  GL_CODE3?: string;
  DISCACCREF?: number;
  OHP_CODE3?: string;
  DISCCENREF?: number;
  VATRACCREF?: number;
  VATRCENREF?: number;
  PAYMENTREF?: number;
  BANK_PROC_TYPE?: number;
  BANK_PROC_CODE?: number;
  XBUFS?: number;
  DUE_DATE?: string;
  OP_STATUS?: number;
  INFLATION_IDX?: number;
  CASH_TRAN_GRP_NO?: string;
  CASH_TRAN_GRPLINE_NO?: number;
  CASH_INFLDX?: number;
  EXIM_FICHENO?: string;
  CASH_ORGLOGOID?: string;
  BNTRAN_VAT_INC?: number;
  BNTRAN_VAT_RAT?: number;
  BNTRAN_VAT_ACCREF?: number;
  BNTRAN_VAT_CENREF?: number;
  BNTRAN_VAT_TOT?: number;
  EXIM_PARITY?: number;
  EXIM_CREDIT_CODE?: string;
  EXIM_CREDIT_REF?: number;
  EXIM_FILE_CODE?: string;
  EXIM_FILE_REF?: number;
  EXIM_FILELINENR?: number;
  COMS_TYPE?: number;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  TRANGRPDATE?: string;
  TRANGRPNO?: string;
  BANKREFNR?: string;
  CUSTOM_DOC_NUMBER?: string;
  DABLNREF?: number;
  TRANSREF?: number;
  AFFECT_COLLATRL?: number;
  COLLATRL_ROLLFC?: string;
  COLLATRL_ROLLREF?: number;
  COLLATRL_ROLLTRNSREF?: number;
  COLLATRL_CARDREF?: number;
  GRPFIRMTRANS?: number;
  AFFECT_RISK?: number;
  BNK_CRE_SOURCE?: number;
  BNK_CRE_LINE_TYPE?: number;
  ORGLOGOID?: string;
  PAYMENT_LIST?: RscollectionrsPaylstxml;
  CS_TRANS_REFERENCE?: number;
  IBAN?: string;
  BANK_BRANCHS?: string;
  BANK_NAMES?: string;
  COST_OWNER?: number;
  COST_ACCOUNT?: string;
  CRCARD_WIZARD?: number;
  BANK_BRANCH_NR?: string;
  BANK_ACCOUNT_NR?: string;
  CL_TCK_NR?: string;
  CL_TAX_NR?: string;
  CL_TR_CURR?: number;
  CL_TR_RATE?: number;
  CL_TR_NET?: number;
  COST_TOTAL?: number;
  BSMV_TOTAL?: number;
  REP_COST_TOTAL?: number;
  REP_BSMV_TOTAL?: number;
  TR_COST_TOTAL?: number;
  TR_BSMV_TOTAL?: number;
  BNTRCOSTACCREF?: number;
  BNTRCOSTACCREF2?: number;
  BNTRCOSTCENREF?: number;
  BNBSMVACCREF?: number;
  BNBSMVCENREF?: number;
  BN_COST_GL_CODE?: string;
  BN_COST_GL_CODE2?: string;
  BN_COST_OHP_CODE?: string;
  BN_BSMV_GL_CODE?: string;
  BN_BSMV_OHP_CODE?: string;
  SALESMANREF?: number;
  SALESMAN_CODE?: string;
  BNINTACCREF?: number;
  BN_INT_GL_CODE?: string;
  BNINTCENREF?: number;
  BN_INT_OHP_CODE?: string;
  BNKKDFACCREF?: number;
  BN_KKDF_GL_CODE?: string;
  BNKKDFCENREF?: number;
  BN_KKDF_OHP_CODE?: string;
  DBS?: number;
  CREDIT_LETTER_NUMBER?: string;
  BNTRANCOSTTOTINC?: number;
  BN_CRDTYPE?: number;
  DIVISION?: number;
  CRCARD_FICHEREF?: number;
  CRCARD_PAYTRREF?: number;
  BNFINCOSTACCREF?: number;
  BN_FIN_COST_GL_CODE?: string;
  BNFINCOSTCENREF?: number;
  BN_FIN_COST_OHP_CODE?: string;
  OFFER_REFERENCE?: number;
  DOC_DATE?: string;
  COSTACCREF?: number;
  COST_BNACC_CODE?: string;
  BANK_CREDIT_REF?: number;
  BANK_CREDIT_CODE?: string;
  BANK_CREDIT_TRRATE?: number;
  GUID?: string;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  CUST_TITLE?: string;
  BANK_GP_ADDR?: string;
  BANK_GP_PLATE?: string;
  PROCESSACCREF?: number;
  PROCESS_GL_CODE?: string;
  PROCESSCENREF?: number;
  PROCESS_OHP_CODE?: string;
  BNGPTAXACCREF?: number;
  BANK_GP_TAX_GL_CODE?: string;
  BNGPTAXCENREF?: number;
  BANK_GP_TAX_OHP_CODE?: string;
  BNGPFUNDACCREF?: number;
  BANK_GP_FUND_GL_CODE?: string;
  BNGPFUNDCENREF?: number;
  BANK_GP_FUND_OHP_CODE?: string;
  BANK_GP_OP_TYPE?: number;
  BANK_GP_INCOME_TAXRATE?: number;
  BANK_GP_FUND_SHARERATE?: number;
  TYPE_CODE?: string;
  FUND_QUANTITY?: number;
  STATUS?: number;
  PREACCLINES?: RscollectionrsPreaccdistlnxml;
  EQUALIZE_BALANCE?: number;
  PAYTYPE?: number;
  PAYINFO?: number;
  SPECODE2?: string;
  BNCRLONGDACCREF?: number;
  BNCRLONGDCENREF?: number;
  BNINTFYACCREF?: number;
  BNINTFYCENREF?: number;
  BNBSMVFYACCREF?: number;
  BNBSMVFYCENREF?: number;
  BNKKDFFYACCREF?: number;
  BNKKDFFYCENREF?: number;
  BNEXPACCRFMACCREF?: number;
  BNEXPACCRFMCENREF?: number;
  BNEXPACCRFYACCREF?: number;
  BNEXPACCRFYCENREF?: number;
  VATFLAG?: number;
  EXPBANKREF?: number;
  EXPPARENTREF?: number;
  EXPBNACCREF?: number;
  EXPBNCENREF?: number;
}

/**
 * ChequeAndPnoteRolls entity interface based on swagger definition
 */
export interface ChequeAndPnoteRolls extends BaseEntity {
  TYPE?: number;
  NUMBER?: string;
  DOC_NUMBER?: string;
  MASTER_MODULE?: number;
  MASTER_CODE?: string;
  CARDREF?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  DATE?: string;
  DIVISION?: number;
  DEPARTMENT?: number;
  DEST_DIVISION?: number;
  DEST_DEPARTMENT?: number;
  PROC_TYPE?: number;
  SINGLE_PAYMENT?: number;
  FROMCASH?: number;
  GL_POSTED?: number;
  AVERAGE_AGE?: number;
  DOCUMENT_COUNT?: number;
  PRINT_COUNTER?: number;
  PRINT_DATE?: string;
  TOTAL?: number;
  CURR_TRANS?: number;
  TC_XRATE?: number;
  TC_TOTAL?: number;
  RC_XRATE?: number;
  RC_TOTAL?: number;
  NOTES1?: string;
  NOTES2?: string;
  NOTES3?: string;
  NOTES4?: string;
  ACCFICHEREF?: number;
  CASHTRANSREF?: number;
  GL_CODE?: string;
  ACCREF?: number;
  CANCELLED?: number;
  CANCELLEDACC?: number;
  TRADING_GRP?: string;
  CURRSEL_TOTALS?: number;
  CURRSEL_DETAILS?: number;
  TRANSACTIONS?: RscollectionrsChqpntransxml;
  ARP_TRANSACTIONS?: RscollectionrsArptransxml;
  BANK_TRANSACTIONS?: RscollectionrsBanktransxml;
  XBUFS?: string;
  DOCALS?: string;
  ITEXT?: string;
  OP_STATUS?: number;
  INFLATION_IDX?: number;
  CASH_TRAN_GRP_NO?: string;
  CASH_TRAN_GRPLINE_NO?: number;
  CASH_INFLDX?: number;
  CASH_ORGLOGOID?: string;
  FROM_CASH?: number;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  PAYMENT_LIST?: RscollectionrsPaylstxml;
  COLLATRL_ROLLFC?: string;
  COLLATRL_ROLLREF?: number;
  AFFECT_COLLATRL?: number;
  GRPFIRMTRANS?: number;
  AFFECT_RISK?: number;
  BNCREREF?: number;
  BANK_CREDIT_CODE?: string;
  BNK_CRE_CTRL_TOT?: number;
  ORGLOGOID?: string;
  FROM_BANK?: number;
  DEG_ACTIVE?: number;
  DEG_CURR?: number;
  DEG_CURR_RATE?: number;
  APPROVE?: number;
  APPROVE_DATE?: string;
  ACC_FICHE_SITEID?: number;
  SALESMANREF?: number;
  SALESMAN_CODE?: string;
  CANCEL_AUTO_GL_PROC?: number;
  EBOOK_DOCDATE?: string;
  EBOOK_NODOCUMENT?: number;
  EBOOK_DOCNR?: string;
  EBOOK_DOCTYPE?: number;
  EBOOK_EXPLAIN?: string;
  EBOOK_PAYTYPE?: string;
  EBOOK_NOPAY?: number;
  DOC_DATE?: string;
  STATUS?: number;
  GUID?: string;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  FROMPARTIALCSPAY?: number;
}

/**
 * Union type of all ChequeAndPnoteRolls field names for type-safe field selection and sorting
 */
export type ChequeAndPnoteRollsField =
  | 'INTERNAL_REFERENCE'
  | 'TYPE'
  | 'NUMBER'
  | 'DOC_NUMBER'
  | 'MASTER_MODULE'
  | 'MASTER_CODE'
  | 'CARDREF'
  | 'OHP_CODE'
  | 'CENTERREF'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'DATE'
  | 'DIVISION'
  | 'DEPARTMENT'
  | 'DEST_DIVISION'
  | 'DEST_DEPARTMENT'
  | 'PROC_TYPE'
  | 'SINGLE_PAYMENT'
  | 'FROMCASH'
  | 'GL_POSTED'
  | 'AVERAGE_AGE'
  | 'DOCUMENT_COUNT'
  | 'PRINT_COUNTER'
  | 'PRINT_DATE'
  | 'TOTAL'
  | 'CURR_TRANS'
  | 'TC_XRATE'
  | 'TC_TOTAL'
  | 'RC_XRATE'
  | 'RC_TOTAL'
  | 'NOTES1'
  | 'NOTES2'
  | 'NOTES3'
  | 'NOTES4'
  | 'ACCFICHEREF'
  | 'CASHTRANSREF'
  | 'GL_CODE'
  | 'ACCREF'
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
  | 'CANCELLED'
  | 'CANCELLEDACC'
  | 'TRADING_GRP'
  | 'CURRSEL_TOTALS'
  | 'CURRSEL_DETAILS'
  | 'TEXTINC'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'TRANSACTIONS'
  | 'ARP_TRANSACTIONS'
  | 'BANK_TRANSACTIONS'
  | 'XBUFS'
  | 'DOCALS'
  | 'ITEXT'
  | 'XML_ATTRIBUTE'
  | 'OP_STATUS'
  | 'INFLATION_IDX'
  | 'CASH_TRAN_GRP_NO'
  | 'CASH_TRAN_GRPLINE_NO'
  | 'CASH_INFLDX'
  | 'CASH_ORGLOGOID'
  | 'FROM_CASH'
  | 'PROJECT_CODE'
  | 'PROJECTREF'
  | 'PAYMENT_LIST'
  | 'COLLATRL_ROLLFC'
  | 'COLLATRL_ROLLREF'
  | 'AFFECT_COLLATRL'
  | 'GRPFIRMTRANS'
  | 'AFFECT_RISK'
  | 'BNCREREF'
  | 'BANK_CREDIT_CODE'
  | 'BNK_CRE_CTRL_TOT'
  | 'ORGLOGOID'
  | 'FROM_BANK'
  | 'DEG_ACTIVE'
  | 'DEG_CURR'
  | 'DEG_CURR_RATE'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'ACC_FICHE_SITEID'
  | 'SALESMANREF'
  | 'SALESMAN_CODE'
  | 'CANCEL_AUTO_GL_PROC'
  | 'EBOOK_DOCDATE'
  | 'EBOOK_NODOCUMENT'
  | 'EBOOK_DOCNR'
  | 'EBOOK_DOCTYPE'
  | 'EBOOK_EXPLAIN'
  | 'EBOOK_PAYTYPE'
  | 'EBOOK_NOPAY'
  | 'DOC_DATE'
  | 'STATUS'
  | 'GUID'
  | 'DEFNFLDSLIST'
  | 'FROMPARTIALCSPAY';

/**
 * Type-safe sort specification for ChequeAndPnoteRolls queries
 */
export type ChequeAndPnoteRollsSortSpec =
  | [ChequeAndPnoteRollsField]
  | [ChequeAndPnoteRollsField, 'asc' | 'desc']
  | [ChequeAndPnoteRollsField[], 'asc' | 'desc']
  | [ChequeAndPnoteRollsField[]];

/**
 * Type-safe query options for ChequeAndPnoteRolls entities
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
export interface ChequeAndPnoteRollsQueryOptions
  extends Omit<QueryOptions<ChequeAndPnoteRollsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ChequeAndPnoteRollsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ChequeAndPnoteRollsSortSpec;
}

/**
 * Search criteria for ChequeAndPnoteRolls entities
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
export interface ChequeAndPnoteRollsSearchCriteria {
  internalReference?: NumberFieldValue;
  type?: NumberFieldValue;
  number?: StringFieldValue;
  docNumber?: StringFieldValue;
  masterModule?: NumberFieldValue;
  masterCode?: StringFieldValue;
  cardref?: NumberFieldValue;
  ohpCode?: StringFieldValue;
  centerref?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  date?: StringFieldValue;
  division?: NumberFieldValue;
  department?: NumberFieldValue;
  destDivision?: NumberFieldValue;
  destDepartment?: NumberFieldValue;
  procType?: NumberFieldValue;
  singlePayment?: NumberFieldValue;
  fromcash?: NumberFieldValue;
  glPosted?: NumberFieldValue;
  averageAge?: NumberFieldValue;
  documentCount?: NumberFieldValue;
  printCounter?: NumberFieldValue;
  printDate?: StringFieldValue;
  total?: NumberFieldValue;
  currTrans?: NumberFieldValue;
  tcXrate?: NumberFieldValue;
  tcTotal?: NumberFieldValue;
  rcXrate?: NumberFieldValue;
  rcTotal?: NumberFieldValue;
  notes1?: StringFieldValue;
  notes2?: StringFieldValue;
  notes3?: StringFieldValue;
  notes4?: StringFieldValue;
  accficheref?: NumberFieldValue;
  cashtransref?: NumberFieldValue;
  glCode?: StringFieldValue;
  accref?: NumberFieldValue;
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
  cancelled?: NumberFieldValue;
  cancelledacc?: NumberFieldValue;
  tradingGrp?: StringFieldValue;
  currselTotals?: NumberFieldValue;
  currselDetails?: NumberFieldValue;
  textinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  transactions?: DateFieldValue;
  arpTransactions?: DateFieldValue;
  bankTransactions?: DateFieldValue;
  xbufs?: StringFieldValue;
  docals?: StringFieldValue;
  itext?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  opStatus?: NumberFieldValue;
  inflationIdx?: NumberFieldValue;
  cashTranGrpNo?: StringFieldValue;
  cashTranGrplineNo?: NumberFieldValue;
  cashInfldx?: NumberFieldValue;
  cashOrglogoid?: StringFieldValue;
  fromCash?: NumberFieldValue;
  projectCode?: StringFieldValue;
  projectref?: NumberFieldValue;
  paymentList?: DateFieldValue;
  collatrlRollfc?: StringFieldValue;
  collatrlRollref?: NumberFieldValue;
  affectCollatrl?: NumberFieldValue;
  grpfirmtrans?: NumberFieldValue;
  affectRisk?: NumberFieldValue;
  bncreref?: NumberFieldValue;
  bankCreditCode?: StringFieldValue;
  bnkCreCtrlTot?: NumberFieldValue;
  orglogoid?: StringFieldValue;
  fromBank?: NumberFieldValue;
  degActive?: NumberFieldValue;
  degCurr?: NumberFieldValue;
  degCurrRate?: NumberFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  accFicheSiteid?: NumberFieldValue;
  salesmanref?: NumberFieldValue;
  salesmanCode?: StringFieldValue;
  cancelAutoGlProc?: NumberFieldValue;
  ebookDocdate?: StringFieldValue;
  ebookNodocument?: NumberFieldValue;
  ebookDocnr?: StringFieldValue;
  ebookDoctype?: NumberFieldValue;
  ebookExplain?: StringFieldValue;
  ebookPaytype?: StringFieldValue;
  ebookNopay?: NumberFieldValue;
  docDate?: StringFieldValue;
  status?: NumberFieldValue;
  guid?: StringFieldValue;
  defnfldslist?: DateFieldValue;
  frompartialcspay?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ChequeAndPnoteRolls entities
 */
export interface ChequeAndPnoteRollsAnalytics {
  total: number;
  // Add ChequeAndPnoteRolls-specific analytics fields
}
