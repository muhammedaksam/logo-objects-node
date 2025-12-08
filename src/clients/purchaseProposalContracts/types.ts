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
 * Interface for RSCollection[RS_PurchOfferTransX]
 */
export interface RscollectionrsPurchoffertransx {
  Meta?: Meta;
  items?: RsPurchoffertransx[];
}

/**
 * Interface for RSCollection[RS_CampCodesListXML]
 */
export interface RscollectionrsCampcodeslistxml {
  Meta?: Meta;
  items?: RsCampcodeslistxml[];
}

/**
 * Interface for RSCollection[RS_PurchOfferDetXML]
 */
export interface RscollectionrsPurchofferdetxml {
  Meta?: Meta;
  items?: RsPurchofferdetxml[];
}

/**
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
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
 * RsPaylstxml transaction line item
 *
 * Represents individual transaction records within a PurchaseProposalContracts collection.
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
 * Represents individual transaction records within a PurchaseProposalContracts collection.
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
 * RsPurchoffertransx transaction line item
 *
 * Represents individual transaction records within a PurchaseProposalContracts collection.
 */
export interface RsPurchoffertransx extends BaseEntity {
  TYPE?: number;
  MASTER_CODE?: string;
  STOCKREF?: number;
  ORDFICHEREF?: number;
  CLIENTREF?: number;
  LINETYPE?: number;
  PREVLINEREF?: number;
  PREVLINENO?: number;
  DETLINE?: number;
  LINENO?: number;
  TRCODE?: number;
  DATE?: string;
  TIME?: number;
  GLOBTRANS?: number;
  CALCTYPE?: number;
  OHP_CODE1?: string;
  CENTERREF?: number;
  GL_CODE1?: string;
  ACCOUNTREF?: number;
  GL_CODE2?: string;
  VATACCREF?: number;
  OHP_CODE2?: string;
  VATCENTERREF?: number;
  GL_CODE3?: string;
  PRACCREF?: number;
  OHP_CODE3?: string;
  PRCENTERREF?: number;
  GL_CODE4?: string;
  PRVATACCREF?: number;
  OHP_CODE4?: string;
  PRVATCENREF?: number;
  PROMREF?: number;
  AUXIL_CODE?: string;
  DELVRY_CODE?: string;
  QUANTITY?: number;
  PRICE?: number;
  TOTAL?: number;
  SHIPPEDAMOUNT?: number;
  DISCPER?: number;
  DISTCOST?: number;
  DISTDISC?: number;
  DISTEXP?: number;
  DISTPROM?: number;
  VAT?: number;
  VATAMNT?: number;
  VATMATRAH?: number;
  LINEEXP?: string;
  UOMREF?: number;
  USREF?: number;
  UINFO1?: number;
  UINFO2?: number;
  UINFO3?: number;
  UINFO4?: number;
  UINFO5?: number;
  UINFO6?: number;
  UINFO7?: number;
  UINFO8?: number;
  VATINC?: number;
  CLOSED?: number;
  DORESERVE?: number;
  INUSE?: number;
  DUEDATE?: string;
  PRCURR?: number;
  PRPRICE?: number;
  REPORTRATE?: number;
  BILLEDITEM?: number;
  PAYMENT_CODE?: string;
  PAYDEFREF?: number;
  EXTENREF?: number;
  CPSTFLAG?: number;
  SOURCEINDEX?: number;
  SOURCECOSTGRP?: number;
  BRANCH?: number;
  DEPARTMENT?: number;
  LINENET?: number;
  SALESMANREF?: number;
  ORDER_STATUS?: number;
  DREF?: number;
  TRGFLAG?: number;
  FACTORYNR?: number;
  WFSTATUS?: number;
  NETDISCFLAG?: number;
  NETDISCPERC?: number;
  NETDISCAMNT?: number;
  REASONFORNOTSHP?: number;
  CAMPAIGN_INFOS?: RscollectionrsCampcodeslistxml;
  CAMPPOINT?: number;
  CMPGLINEREF?: number;
  PROM_CLAS_ITEM_CODE?: string;
  PRRATE?: number;
  GROSSUINFO1?: number;
  GROSSUINFO2?: number;
  CANCELLED?: number;
  DEMPEGGEDAMNT?: number;
  OFFERREF?: number;
  ORDERPARAM?: number;
  ITEMASGREF?: number;
  EXIMAMOUNT?: number;
  OFFTRANSREF?: number;
  ORDEREDAMOUNT?: number;
  ORGLOGOID?: string;
  TRCURR?: number;
  TRRATE?: number;
  WITHPAYTRANS?: number;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  AFFECTCOLLATRL?: number;
  FCTYP?: number;
  PURCHOFFNR?: number;
  DEMFICHEREF?: number;
  DEMTRANSREF?: number;
  UEDIT?: string;
  ALTREF?: number;
  PRODUCED?: number;
  ORDCODE?: string;
  DETAILS?: RscollectionrsPurchofferdetxml;
  DETDELLIST?: string;
  DISTVAT?: number;
  ALTPROMFLAG?: number;
  SALORDDEMPEGLIST?: string;
  DELSALORDDEMPEGLIST?: string;
  ITEXT?: string;
  SALESMANCODE?: string;
  DEFNFLDS?: Rscollectionextendedfielddefinitions;
  PRCLISTREF?: number;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  CANCONFIG?: number;
  VCHARLIST?: string;
  ADD_TAX_EFFECT_KDV?: number;
  EXCLINE_INTERNAL_REFERENCE?: number;
  EXCLINE_TRANS_REF?: number;
  EXCLINE_PRICE?: number;
  EXCLINE_TOTAL?: number;
  EXCLINE_DIST_COST?: number;
  EXCLINE_DIST_DISC?: number;
  EXCLINE_DIST_EXP?: number;
  EXCLINE_DIST_PROM?: number;
  EXCLINE_VAT_AMOUNT?: number;
  EXCLINE_VAT_MATRAH?: number;
  EXCLINE_LINE_NET?: number;
  EXCLINE_DIST_ADD_EXP?: number;
  EXCLINE_NET_DISC_AMOUNT?: number;
  EXCLINE_VAT_CALC_DIFF?: number;
  EXCLINE_EU_VAT_AMOUNT?: number;
  EXCLINE_ADD_TAX_AMOUNT?: number;
  EXCLINE_ADD_TAX_CONV_FACT?: number;
  EXCLINE_ADD_TAX_DISC_AMOUNT?: number;
  EXCLINE_EX_ADD_TAX_AMOUNT?: number;
  EXCLINE_EX_ADD_TAX_CONVF?: number;
  RPRICE?: number;
  EDT_RPRICE?: number;
  EDT_PRICE?: number;
  EDT_CURR?: number;
  PRCLISTCODE?: string;
  CANDEDUCT?: number;
  DEDUCTION_PART1?: number;
  DEDUCTION_PART2?: number;
  DEDUCT_CODE?: string;
  DIST_DISC_VAT?: number;
  DEVIR?: number;
  PARENTLNREF?: number;
  ITMDISC?: number;
  ADD_TAX_REF?: number;
  ADD_TAX_INLNNET?: number;
  PURCHOFFCAPTION?: string;
}

/**
 * RsCampcodeslistxml transaction line item
 *
 * Represents individual transaction records within a PurchaseProposalContracts collection.
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
 * RsPurchofferdetxml transaction line item
 *
 * Represents individual transaction records within a PurchaseProposalContracts collection.
 */
export interface RsPurchofferdetxml extends BaseEntity {
  TYPE?: number;
  MASTER_CODE?: string;
  STOCKREF?: number;
  ORDFICHEREF?: number;
  CLIENTREF?: number;
  PREVLINEREF?: number;
  PREVLINENO?: number;
  DETLINE?: number;
  LINENO?: number;
  SLIP_TYPE?: number;
  DATE?: string;
  TIME?: number;
  DETAIL_LEVEL?: number;
  CALCTYPE?: number;
  OHP_CODE1?: string;
  CENTERREF?: number;
  GL_CODE1?: string;
  ACCOUNTREF?: number;
  GL_CODE2?: string;
  VATACCREF?: number;
  OHP_CODE2?: string;
  VATCENTERREF?: number;
  PRACCREF?: number;
  PRCENTERREF?: number;
  PRVATACCREF?: number;
  PRVATCENREF?: number;
  PROMREF?: number;
  AUXIL_CODE?: string;
  DELVRY_CODE?: string;
  QUANTITY?: number;
  PRICE?: number;
  TOTAL?: number;
  QUANTITY_SHIPPED?: number;
  DISCOUNT_RATE?: number;
  COST_DISTR?: number;
  DISCOUNT_DISTR?: number;
  EXPENSE_DISTR?: number;
  PROMOTION_DISTR?: number;
  VAT_RATE?: number;
  VAT_AMOUNT?: number;
  VAT_BASE?: number;
  TRANS_DESCRIPTION?: string;
  UNIT_CODE?: string;
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
  VAT_INCLUDED?: number;
  ORDER_CLOSED?: number;
  ORDER_RESERVE?: number;
  INUSE?: number;
  DUE_DATE?: string;
  CURR_PRICE?: number;
  PC_PRICE?: number;
  RC_XRATE?: number;
  BILLED_ITEM?: number;
  PAYMENT_CODE?: string;
  PAYDEFREF?: number;
  EXTENREF?: number;
  COMPOSITE?: number;
  SOURCE_WH?: number;
  SOURCE_COST_GRP?: number;
  DIVISION?: number;
  DEPARTMENT?: number;
  TOTAL_NET?: number;
  SALESMANREF?: number;
  ORDER_STATUS?: number;
  DREF?: number;
  TRGFLAG?: number;
  FACTORY?: number;
  OFFERREF?: number;
  ORDERPARAM?: number;
  ITEMASGREF?: number;
  EXIMAMOUNT?: number;
  OFFTRANSREF?: number;
  ORDEREDAMOUNT?: number;
  ORGLOGOID?: string;
  AFFECTCOLLATRL?: number;
  PURCHOFFNR?: number;
  PRODUCED?: number;
  ORDER_CODE?: string;
  DETLIST?: string;
  REASON_FOR_NOT_SHP?: number;
  CMPG_LINE_REF?: number;
  DEM_PEGGED_AMNT?: number;
  PRCLISTREF?: number;
  ADD_TAX_EFFECT_KDV?: number;
  EXCLINE_INTERNAL_REFERENCE?: number;
  EXCLINE_TRANS_REF?: number;
  EXCLINE_PRICE?: number;
  EXCLINE_TOTAL?: number;
  EXCLINE_DIST_COST?: number;
  EXCLINE_DIST_DISC?: number;
  EXCLINE_DIST_EXP?: number;
  EXCLINE_DIST_PROM?: number;
  EXCLINE_VAT_AMOUNT?: number;
  EXCLINE_VAT_MATRAH?: number;
  EXCLINE_LINE_NET?: number;
  EXCLINE_DIST_ADD_EXP?: number;
  EXCLINE_NET_DISC_AMOUNT?: number;
  EXCLINE_VAT_CALC_DIFF?: number;
  EXCLINE_EU_VAT_AMOUNT?: number;
  EXCLINE_ADD_TAX_AMOUNT?: number;
  EXCLINE_ADD_TAX_CONV_FACT?: number;
  EXCLINE_ADD_TAX_DISC_AMOUNT?: number;
  EXCLINE_EX_ADD_TAX_AMOUNT?: number;
  EXCLINE_EX_ADD_TAX_CONVF?: number;
  PRCLISTCODE?: string;
  CANDEDUCT?: number;
  DEDUCTION_PART1?: number;
  DEDUCTION_PART2?: number;
  DEDUCT_CODE?: string;
  DIST_DISC_VAT?: number;
  DEVIR?: number;
  PARENTLNREF?: number;
  ITMDISC?: number;
  ADD_TAX_REF?: number;
  ADD_TAX_INLNNET?: number;
  DRAFTSTOCKNAME?: string;
  DRAFTSTOCKNAME2?: string;
  DRAFTSTOCKNAME3?: string;
  PARENTSTOCKREF?: number;
  PURCHOFFCAPTION?: string;
}

/**
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a PurchaseProposalContracts collection.
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
 * PurchaseProposalContracts entity interface based on swagger definition
 */
export interface PurchaseProposalContracts extends BaseEntity {
  TRCODE?: number;
  FICHENO?: string;
  DATE?: string;
  TIME?: number;
  DOCODE?: string;
  SPECODE?: string;
  CYPHCODE?: string;
  ARP_CODE?: string;
  CLIENTREF?: number;
  ARP_CODE_SHPM?: string;
  RECVREF?: number;
  GL_CODE?: string;
  ACCOUNTREF?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
  SOURCEINDEX?: number;
  SOURCECOSTGRP?: number;
  UPDCURR?: number;
  ADDDISCOUNTS?: number;
  TOTALDISCOUNTS?: number;
  TOTALDISCOUNTED?: number;
  ADDEXPENSES?: number;
  TOTALEXPENSES?: number;
  TOTALPROMOTIONS?: number;
  TOTALVAT?: number;
  GROSSTOTAL?: number;
  NETTOTAL?: number;
  REPORTRATE?: number;
  REPORTNET?: number;
  GENEXP1?: string;
  GENEXP2?: string;
  GENEXP3?: string;
  GENEXP4?: string;
  EXTENREF?: number;
  PAYMENT_CODE?: string;
  PAYDEF?: string;
  PAYDEFREF?: number;
  PRINTCNT?: number;
  PRINT_DATE?: string;
  BRANCH?: number;
  DEPARTMENT?: number;
  STATUS?: number;
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
  SALESMAN_CODE?: string;
  SALESMANREF?: number;
  SHPTYPCOD?: string;
  SHPAGNCOD?: string;
  GENEXCTYP?: number;
  LINEEXCTYP?: number;
  TRADINGGRP?: string;
  FACTORYNR?: number;
  WFSTATUS?: number;
  SHIPINFOREF?: number;
  CUSTORDNO?: string;
  SENDCNT?: number;
  DLVCLIENT?: number;
  DOCTRACKINGNR?: string;
  CANCELLED?: number;
  ORGLOGOID?: string;
  OFFERREF?: number;
  OFFALTREF?: number;
  TYP?: number;
  ALTNR?: number;
  ADVANCEPAYM?: number;
  TRCURR?: number;
  TRRATE?: number;
  TRNET?: number;
  PAYMENTTYPE?: number;
  ONLYONEPAYLINE?: number;
  OPSTAT?: number;
  WITHPAYTRANS?: number;
  PAYMENT_LIST?: RscollectionrsPaylstxml;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  WFLOWCRDREF?: number;
  UPDTRCURR?: number;
  AFFECTCOLLATRL?: number;
  POFFERBEGDT?: string;
  POFFERENDDT?: string;
  REVISNR?: string;
  LASTREVISION?: number;
  CHECKAMOUNT?: number;
  CHECKPRICE?: number;
  CHECKTOTAL?: number;
  DEFAULTFICHE?: number;
  TRANSACTIONS?: RscollectionrsPurchoffertransx;
  TOTBEFVAT?: number;
  TITLE?: string;
  ALLSHIPPED?: number;
  ALLCLOSED?: number;
  TRUNCATED?: number;
  PRICEIDX?: number;
  LINECNT?: number;
  UPDATED?: number;
  ADDEXPVAT?: number;
  CONDRUN?: number;
  LOGEVENT?: number;
  LINESINUSE?: number;
  SHIPMENTS?: number;
  DISTRIBUTIONS?: number;
  PRODLINKED?: number;
  PROMLINKED?: number;
  OLDFDATE?: string;
  GLOBALPROM?: number;
  BTYPE?: number;
  XBUFS?: string;
  XCNT?: number;
  CUROP?: number;
  OLDSTATUS?: number;
  DOCALS?: string;
  CLCARDACTIVE?: number;
  PAYPLANACTIVE?: number;
  SLSMANACTIVE?: number;
  WARNACTIVE?: number;
  EDTTOTEXPENSE?: number;
  EDTTOTALDISC?: number;
  EDTTOTBEFVAT?: number;
  EDTTOTALVAT?: number;
  EDTNETTOTAL?: number;
  SHPCLTITLE?: string;
  FCNOCHANGED?: number;
  DOCNRREF?: number;
  TEXTCHG?: number;
  ITEXT?: string;
  SHIPINFCODE?: string;
  SHIPINFDEF?: string;
  VATEXEMPT?: number;
  FASTDATAWINON?: number;
  CONTRACTNO?: string;
  PAYOUTLINES?: string;
  FROMPOS?: number;
  GUARANTOR1_LOGICALR?: number;
  GUARANTOR1_FICHETYP?: number;
  GUARANTOR1_FICHEREF?: number;
  GUARANTOR1_GUARANTO?: number;
  GUARANTOR1_GNAMESUR?: string;
  GUARANTOR1_ADDR1?: string;
  GUARANTOR1_ADDR2?: string;
  GUARANTOR1_DISTRICT?: string;
  GUARANTOR1_TOWN?: string;
  GUARANTOR1_CITY?: string;
  GUARANTOR1_COUNTRY?: string;
  GUARANTOR1_POSTCODE?: string;
  GUARANTOR1_TELNRS1?: string;
  GUARANTOR1_TELNRS2?: string;
  GUARANTOR1_FAXNR?: string;
  GUARANTOR1_SITEID?: number;
  GUARANTOR1_RECSTATU?: number;
  GUARANTOR1_ORGLOGIC?: number;
  GUARANTOR1_CLIENTRE?: number;
  GUARANTOR1_TAXNR?: string;
  GUARANTOR1_TAXOFFIC?: string;
  GUARANTOR1_TAXOFFCO?: string;
  GUARANTOR1_BANKBRAN?: string;
  GUARANTOR1_BANKACCO?: string;
  GUARANTOR2_LOGICALR?: number;
  GUARANTOR2_FICHETYP?: number;
  GUARANTOR2_FICHEREF?: number;
  GUARANTOR2_GUARANTO?: number;
  GUARANTOR2_GNAMESUR?: string;
  GUARANTOR2_ADDR1?: string;
  GUARANTOR2_ADDR2?: string;
  GUARANTOR2_DISTRICT?: string;
  GUARANTOR2_TOWN?: string;
  GUARANTOR2_CITY?: string;
  GUARANTOR2_COUNTRY?: string;
  GUARANTOR2_POSTCODE?: string;
  GUARANTOR2_TELNRS1?: string;
  GUARANTOR2_TELNRS2?: string;
  GUARANTOR2_FAXNR?: string;
  GUARANTOR2_SITEID?: number;
  GUARANTOR2_RECSTATU?: number;
  GUARANTOR2_ORGLOGIC?: number;
  GUARANTOR2_CLIENTRE?: number;
  GUARANTOR2_TAXNR?: string;
  GUARANTOR2_TAXOFFIC?: string;
  GUARANTOR2_TAXOFFCO?: string;
  GUARANTOR2_BANKBRAN?: string;
  GUARANTOR2_BANKACCO?: string;
  FROMINSTAL?: number;
  PROJECTCACTIVE?: number;
  FROMTASKBRW?: number;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  BDGTERRNO?: number;
  BDGTERRACCREF1?: number;
  BDGTERRACCREF2?: number;
  NORESERVATION?: number;
  FROMDEVIR?: number;
  ACTALTNR?: number;
  TRANSFERTYP?: number;
  SLSOPPERREF?: number;
  SLSOPPRNO?: string;
  SLSACTREF?: number;
  SLSCUSTREF?: number;
  SLSCUSTCODE?: string;
  EXCHINFO_INTERNAL_REFERENCE?: number;
  EXCHINFO_FICHE_REF?: number;
  EXCHINFO_ADD_DISCOUNTS?: number;
  EXCHINFO_TOTAL_DISCOUNTS?: number;
  EXCHINFO_TOTAL_DISCOUNTED?: number;
  EXCHINFO_ADD_EXPENSES?: number;
  EXCHINFO_TOTAL_EXPENSES?: number;
  EXCHINFO_DIST_EXPENSE?: number;
  EXCHINFO_TOTAL_DEPOZITO?: number;
  EXCHINFO_TOTAL_PROMOTIONS?: number;
  EXCHINFO_VAT_INC_GROSS?: number;
  EXCHINFO_TOTAL_VAT?: number;
  EXCHINFO_GROSS_TOTAL?: number;
  EXCHINFO_TOTAL_ADD_TAX?: number;
  EXCHINFO_TOTAL_EX_ADD_TAX?: number;
  EXCHINFO_BAGKUR?: number;
  EXCHINFO_STOPAJ?: number;
  EXCHINFO_SSDF?: number;
  EXCHINFO_BORSA?: number;
  EXCHINFO_KOMISYON?: number;
  EXCHINFO_KOM_KDV?: number;
  EXCHINFO_EK1?: number;
  EXCHINFO_EK2?: number;
  EXCHINFO_EK3?: number;
  EXCHINFO_EK4?: number;
  EXCHINFO_EK5?: number;
  APPROVE?: number;
  APPROVE_DATE?: string;
  DEVIR?: number;
  DELIVERY_CODE?: string;
  ORIGINAL_DATE?: string;
  ACTIVITY_RENTING?: number;
  ADD_DISCOUNTS_VAT?: number;
  PAYERID?: string;
  PAYERTYPE?: number;
  CANT_CRE_DEDUCT?: number;
  PAYERMICRO?: number;
  CONTACTREF?: number;
}

/**
 * Union type of all PurchaseProposalContracts field names for type-safe field selection and sorting
 */
export type PurchaseProposalContractsField =
  | 'INTERNAL_REFERENCE'
  | 'TRCODE'
  | 'FICHENO'
  | 'DATE'
  | 'TIME'
  | 'DOCODE'
  | 'SPECODE'
  | 'CYPHCODE'
  | 'ARP_CODE'
  | 'CLIENTREF'
  | 'ARP_CODE_SHPM'
  | 'RECVREF'
  | 'GL_CODE'
  | 'ACCOUNTREF'
  | 'OHP_CODE'
  | 'CENTERREF'
  | 'SOURCEINDEX'
  | 'SOURCECOSTGRP'
  | 'UPDCURR'
  | 'ADDDISCOUNTS'
  | 'TOTALDISCOUNTS'
  | 'TOTALDISCOUNTED'
  | 'ADDEXPENSES'
  | 'TOTALEXPENSES'
  | 'TOTALPROMOTIONS'
  | 'TOTALVAT'
  | 'GROSSTOTAL'
  | 'NETTOTAL'
  | 'REPORTRATE'
  | 'REPORTNET'
  | 'GENEXP1'
  | 'GENEXP2'
  | 'GENEXP3'
  | 'GENEXP4'
  | 'EXTENREF'
  | 'PAYMENT_CODE'
  | 'PAYDEF'
  | 'PAYDEFREF'
  | 'PRINTCNT'
  | 'PRINT_DATE'
  | 'BRANCH'
  | 'DEPARTMENT'
  | 'STATUS'
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
  | 'SALESMAN_CODE'
  | 'SALESMANREF'
  | 'SHPTYPCOD'
  | 'SHPAGNCOD'
  | 'GENEXCTYP'
  | 'LINEEXCTYP'
  | 'TRADINGGRP'
  | 'TEXTINC'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'FACTORYNR'
  | 'WFSTATUS'
  | 'SHIPINFOREF'
  | 'CUSTORDNO'
  | 'SENDCNT'
  | 'DLVCLIENT'
  | 'DOCTRACKINGNR'
  | 'CANCELLED'
  | 'ORGLOGOID'
  | 'OFFERREF'
  | 'OFFALTREF'
  | 'TYP'
  | 'ALTNR'
  | 'ADVANCEPAYM'
  | 'TRCURR'
  | 'TRRATE'
  | 'TRNET'
  | 'PAYMENTTYPE'
  | 'ONLYONEPAYLINE'
  | 'OPSTAT'
  | 'WITHPAYTRANS'
  | 'PAYMENT_LIST'
  | 'PROJECT_CODE'
  | 'PROJECTREF'
  | 'WFLOWCRDREF'
  | 'UPDTRCURR'
  | 'AFFECTCOLLATRL'
  | 'POFFERBEGDT'
  | 'POFFERENDDT'
  | 'REVISNR'
  | 'LASTREVISION'
  | 'CHECKAMOUNT'
  | 'CHECKPRICE'
  | 'CHECKTOTAL'
  | 'DEFAULTFICHE'
  | 'TRANSACTIONS'
  | 'TOTBEFVAT'
  | 'TITLE'
  | 'ALLSHIPPED'
  | 'ALLCLOSED'
  | 'TRUNCATED'
  | 'PRICEIDX'
  | 'LINECNT'
  | 'UPDATED'
  | 'ADDEXPVAT'
  | 'CONDRUN'
  | 'LOGEVENT'
  | 'LINESINUSE'
  | 'SHIPMENTS'
  | 'DISTRIBUTIONS'
  | 'PRODLINKED'
  | 'PROMLINKED'
  | 'OLDFDATE'
  | 'GLOBALPROM'
  | 'BTYPE'
  | 'XBUFS'
  | 'XCNT'
  | 'CUROP'
  | 'OLDSTATUS'
  | 'DOCALS'
  | 'CLCARDACTIVE'
  | 'PAYPLANACTIVE'
  | 'SLSMANACTIVE'
  | 'WARNACTIVE'
  | 'EDTTOTEXPENSE'
  | 'EDTTOTALDISC'
  | 'EDTTOTBEFVAT'
  | 'EDTTOTALVAT'
  | 'EDTNETTOTAL'
  | 'SHPCLTITLE'
  | 'FCNOCHANGED'
  | 'DOCNRREF'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'SHIPINFCODE'
  | 'SHIPINFDEF'
  | 'VATEXEMPT'
  | 'FASTDATAWINON'
  | 'CONTRACTNO'
  | 'PAYOUTLINES'
  | 'FROMPOS'
  | 'GUARANTOR1_LOGICALR'
  | 'GUARANTOR1_FICHETYP'
  | 'GUARANTOR1_FICHEREF'
  | 'GUARANTOR1_GUARANTO'
  | 'GUARANTOR1_GNAMESUR'
  | 'GUARANTOR1_ADDR1'
  | 'GUARANTOR1_ADDR2'
  | 'GUARANTOR1_DISTRICT'
  | 'GUARANTOR1_TOWN'
  | 'GUARANTOR1_CITY'
  | 'GUARANTOR1_COUNTRY'
  | 'GUARANTOR1_POSTCODE'
  | 'GUARANTOR1_TELNRS1'
  | 'GUARANTOR1_TELNRS2'
  | 'GUARANTOR1_FAXNR'
  | 'GUARANTOR1_SITEID'
  | 'GUARANTOR1_RECSTATU'
  | 'GUARANTOR1_ORGLOGIC'
  | 'GUARANTOR1_CLIENTRE'
  | 'GUARANTOR1_TAXNR'
  | 'GUARANTOR1_TAXOFFIC'
  | 'GUARANTOR1_TAXOFFCO'
  | 'GUARANTOR1_BANKBRAN'
  | 'GUARANTOR1_BANKACCO'
  | 'GUARANTOR2_LOGICALR'
  | 'GUARANTOR2_FICHETYP'
  | 'GUARANTOR2_FICHEREF'
  | 'GUARANTOR2_GUARANTO'
  | 'GUARANTOR2_GNAMESUR'
  | 'GUARANTOR2_ADDR1'
  | 'GUARANTOR2_ADDR2'
  | 'GUARANTOR2_DISTRICT'
  | 'GUARANTOR2_TOWN'
  | 'GUARANTOR2_CITY'
  | 'GUARANTOR2_COUNTRY'
  | 'GUARANTOR2_POSTCODE'
  | 'GUARANTOR2_TELNRS1'
  | 'GUARANTOR2_TELNRS2'
  | 'GUARANTOR2_FAXNR'
  | 'GUARANTOR2_SITEID'
  | 'GUARANTOR2_RECSTATU'
  | 'GUARANTOR2_ORGLOGIC'
  | 'GUARANTOR2_CLIENTRE'
  | 'GUARANTOR2_TAXNR'
  | 'GUARANTOR2_TAXOFFIC'
  | 'GUARANTOR2_TAXOFFCO'
  | 'GUARANTOR2_BANKBRAN'
  | 'GUARANTOR2_BANKACCO'
  | 'FROMINSTAL'
  | 'PROJECTCACTIVE'
  | 'FROMTASKBRW'
  | 'DEFNFLDSLIST'
  | 'BDGTERRNO'
  | 'BDGTERRACCREF1'
  | 'BDGTERRACCREF2'
  | 'NORESERVATION'
  | 'FROMDEVIR'
  | 'ACTALTNR'
  | 'TRANSFERTYP'
  | 'SLSOPPERREF'
  | 'SLSOPPRNO'
  | 'SLSACTREF'
  | 'SLSCUSTREF'
  | 'SLSCUSTCODE'
  | 'EXCHINFO_INTERNAL_REFERENCE'
  | 'EXCHINFO_FICHE_REF'
  | 'EXCHINFO_ADD_DISCOUNTS'
  | 'EXCHINFO_TOTAL_DISCOUNTS'
  | 'EXCHINFO_TOTAL_DISCOUNTED'
  | 'EXCHINFO_ADD_EXPENSES'
  | 'EXCHINFO_TOTAL_EXPENSES'
  | 'EXCHINFO_DIST_EXPENSE'
  | 'EXCHINFO_TOTAL_DEPOZITO'
  | 'EXCHINFO_TOTAL_PROMOTIONS'
  | 'EXCHINFO_VAT_INC_GROSS'
  | 'EXCHINFO_TOTAL_VAT'
  | 'EXCHINFO_GROSS_TOTAL'
  | 'EXCHINFO_TOTAL_ADD_TAX'
  | 'EXCHINFO_TOTAL_EX_ADD_TAX'
  | 'EXCHINFO_BAGKUR'
  | 'EXCHINFO_STOPAJ'
  | 'EXCHINFO_SSDF'
  | 'EXCHINFO_BORSA'
  | 'EXCHINFO_KOMISYON'
  | 'EXCHINFO_KOM_KDV'
  | 'EXCHINFO_EK1'
  | 'EXCHINFO_EK2'
  | 'EXCHINFO_EK3'
  | 'EXCHINFO_EK4'
  | 'EXCHINFO_EK5'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'DEVIR'
  | 'DELIVERY_CODE'
  | 'ORIGINAL_DATE'
  | 'ACTIVITY_RENTING'
  | 'ADD_DISCOUNTS_VAT'
  | 'PAYERID'
  | 'PAYERTYPE'
  | 'CANT_CRE_DEDUCT'
  | 'PAYERMICRO'
  | 'CONTACTREF';

/**
 * Type-safe sort specification for PurchaseProposalContracts queries
 */
export type PurchaseProposalContractsSortSpec =
  | [PurchaseProposalContractsField]
  | [PurchaseProposalContractsField, 'asc' | 'desc']
  | [PurchaseProposalContractsField[], 'asc' | 'desc']
  | [PurchaseProposalContractsField[]];

/**
 * Type-safe query options for PurchaseProposalContracts entities
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
export interface PurchaseProposalContractsQueryOptions extends Omit<
  QueryOptions<PurchaseProposalContractsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: PurchaseProposalContractsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: PurchaseProposalContractsSortSpec;
}

/**
 * Search criteria for PurchaseProposalContracts entities
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
export interface PurchaseProposalContractsSearchCriteria {
  internalReference?: NumberFieldValue;
  trcode?: NumberFieldValue;
  ficheno?: StringFieldValue;
  date?: StringFieldValue;
  time?: NumberFieldValue;
  docode?: StringFieldValue;
  specode?: StringFieldValue;
  cyphcode?: StringFieldValue;
  arpCode?: StringFieldValue;
  clientref?: NumberFieldValue;
  arpCodeShpm?: StringFieldValue;
  recvref?: NumberFieldValue;
  glCode?: StringFieldValue;
  accountref?: NumberFieldValue;
  ohpCode?: StringFieldValue;
  centerref?: NumberFieldValue;
  sourceindex?: NumberFieldValue;
  sourcecostgrp?: NumberFieldValue;
  updcurr?: NumberFieldValue;
  adddiscounts?: NumberFieldValue;
  totaldiscounts?: NumberFieldValue;
  totaldiscounted?: NumberFieldValue;
  addexpenses?: NumberFieldValue;
  totalexpenses?: NumberFieldValue;
  totalpromotions?: NumberFieldValue;
  totalvat?: NumberFieldValue;
  grosstotal?: NumberFieldValue;
  nettotal?: NumberFieldValue;
  reportrate?: NumberFieldValue;
  reportnet?: NumberFieldValue;
  genexp1?: StringFieldValue;
  genexp2?: StringFieldValue;
  genexp3?: StringFieldValue;
  genexp4?: StringFieldValue;
  extenref?: NumberFieldValue;
  paymentCode?: StringFieldValue;
  paydef?: StringFieldValue;
  paydefref?: NumberFieldValue;
  printcnt?: NumberFieldValue;
  printDate?: StringFieldValue;
  branch?: NumberFieldValue;
  department?: NumberFieldValue;
  status?: NumberFieldValue;
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
  salesmanCode?: StringFieldValue;
  salesmanref?: NumberFieldValue;
  shptypcod?: StringFieldValue;
  shpagncod?: StringFieldValue;
  genexctyp?: NumberFieldValue;
  lineexctyp?: NumberFieldValue;
  tradinggrp?: StringFieldValue;
  textinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  factorynr?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  shipinforef?: NumberFieldValue;
  custordno?: StringFieldValue;
  sendcnt?: NumberFieldValue;
  dlvclient?: NumberFieldValue;
  doctrackingnr?: StringFieldValue;
  cancelled?: NumberFieldValue;
  orglogoid?: StringFieldValue;
  offerref?: NumberFieldValue;
  offaltref?: NumberFieldValue;
  typ?: NumberFieldValue;
  altnr?: NumberFieldValue;
  advancepaym?: NumberFieldValue;
  trcurr?: NumberFieldValue;
  trrate?: NumberFieldValue;
  trnet?: NumberFieldValue;
  paymenttype?: NumberFieldValue;
  onlyonepayline?: NumberFieldValue;
  opstat?: NumberFieldValue;
  withpaytrans?: NumberFieldValue;
  paymentList?: DateFieldValue;
  projectCode?: StringFieldValue;
  projectref?: NumberFieldValue;
  wflowcrdref?: NumberFieldValue;
  updtrcurr?: NumberFieldValue;
  affectcollatrl?: NumberFieldValue;
  pofferbegdt?: StringFieldValue;
  pofferenddt?: StringFieldValue;
  revisnr?: StringFieldValue;
  lastrevision?: NumberFieldValue;
  checkamount?: NumberFieldValue;
  checkprice?: NumberFieldValue;
  checktotal?: NumberFieldValue;
  defaultfiche?: NumberFieldValue;
  transactions?: DateFieldValue;
  totbefvat?: NumberFieldValue;
  title?: StringFieldValue;
  allshipped?: NumberFieldValue;
  allclosed?: NumberFieldValue;
  truncated?: NumberFieldValue;
  priceidx?: NumberFieldValue;
  linecnt?: NumberFieldValue;
  updated?: NumberFieldValue;
  addexpvat?: NumberFieldValue;
  condrun?: NumberFieldValue;
  logevent?: NumberFieldValue;
  linesinuse?: NumberFieldValue;
  shipments?: NumberFieldValue;
  distributions?: NumberFieldValue;
  prodlinked?: NumberFieldValue;
  promlinked?: NumberFieldValue;
  oldfdate?: StringFieldValue;
  globalprom?: NumberFieldValue;
  btype?: NumberFieldValue;
  xbufs?: StringFieldValue;
  xcnt?: NumberFieldValue;
  curop?: NumberFieldValue;
  oldstatus?: NumberFieldValue;
  docals?: StringFieldValue;
  clcardactive?: NumberFieldValue;
  payplanactive?: NumberFieldValue;
  slsmanactive?: NumberFieldValue;
  warnactive?: NumberFieldValue;
  edttotexpense?: NumberFieldValue;
  edttotaldisc?: NumberFieldValue;
  edttotbefvat?: NumberFieldValue;
  edttotalvat?: NumberFieldValue;
  edtnettotal?: NumberFieldValue;
  shpcltitle?: StringFieldValue;
  fcnochanged?: NumberFieldValue;
  docnrref?: NumberFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;
  shipinfcode?: StringFieldValue;
  shipinfdef?: StringFieldValue;
  vatexempt?: NumberFieldValue;
  fastdatawinon?: NumberFieldValue;
  contractno?: StringFieldValue;
  payoutlines?: StringFieldValue;
  frompos?: NumberFieldValue;
  guarantor1Logicalr?: NumberFieldValue;
  guarantor1Fichetyp?: NumberFieldValue;
  guarantor1Ficheref?: NumberFieldValue;
  guarantor1Guaranto?: NumberFieldValue;
  guarantor1Gnamesur?: StringFieldValue;
  guarantor1Addr1?: StringFieldValue;
  guarantor1Addr2?: StringFieldValue;
  guarantor1District?: StringFieldValue;
  guarantor1Town?: StringFieldValue;
  guarantor1City?: StringFieldValue;
  guarantor1Country?: StringFieldValue;
  guarantor1Postcode?: StringFieldValue;
  guarantor1Telnrs1?: StringFieldValue;
  guarantor1Telnrs2?: StringFieldValue;
  guarantor1Faxnr?: StringFieldValue;
  guarantor1Siteid?: NumberFieldValue;
  guarantor1Recstatu?: NumberFieldValue;
  guarantor1Orglogic?: NumberFieldValue;
  guarantor1Clientre?: NumberFieldValue;
  guarantor1Taxnr?: StringFieldValue;
  guarantor1Taxoffic?: StringFieldValue;
  guarantor1Taxoffco?: StringFieldValue;
  guarantor1Bankbran?: StringFieldValue;
  guarantor1Bankacco?: StringFieldValue;
  guarantor2Logicalr?: NumberFieldValue;
  guarantor2Fichetyp?: NumberFieldValue;
  guarantor2Ficheref?: NumberFieldValue;
  guarantor2Guaranto?: NumberFieldValue;
  guarantor2Gnamesur?: StringFieldValue;
  guarantor2Addr1?: StringFieldValue;
  guarantor2Addr2?: StringFieldValue;
  guarantor2District?: StringFieldValue;
  guarantor2Town?: StringFieldValue;
  guarantor2City?: StringFieldValue;
  guarantor2Country?: StringFieldValue;
  guarantor2Postcode?: StringFieldValue;
  guarantor2Telnrs1?: StringFieldValue;
  guarantor2Telnrs2?: StringFieldValue;
  guarantor2Faxnr?: StringFieldValue;
  guarantor2Siteid?: NumberFieldValue;
  guarantor2Recstatu?: NumberFieldValue;
  guarantor2Orglogic?: NumberFieldValue;
  guarantor2Clientre?: NumberFieldValue;
  guarantor2Taxnr?: StringFieldValue;
  guarantor2Taxoffic?: StringFieldValue;
  guarantor2Taxoffco?: StringFieldValue;
  guarantor2Bankbran?: StringFieldValue;
  guarantor2Bankacco?: StringFieldValue;
  frominstal?: NumberFieldValue;
  projectcactive?: NumberFieldValue;
  fromtaskbrw?: NumberFieldValue;
  defnfldslist?: DateFieldValue;
  bdgterrno?: NumberFieldValue;
  bdgterraccref1?: NumberFieldValue;
  bdgterraccref2?: NumberFieldValue;
  noreservation?: NumberFieldValue;
  fromdevir?: NumberFieldValue;
  actaltnr?: NumberFieldValue;
  transfertyp?: NumberFieldValue;
  slsopperref?: NumberFieldValue;
  slsopprno?: StringFieldValue;
  slsactref?: NumberFieldValue;
  slscustref?: NumberFieldValue;
  slscustcode?: StringFieldValue;
  exchinfoInternalReference?: NumberFieldValue;
  exchinfoFicheRef?: NumberFieldValue;
  exchinfoAddDiscounts?: NumberFieldValue;
  exchinfoTotalDiscounts?: NumberFieldValue;
  exchinfoTotalDiscounted?: NumberFieldValue;
  exchinfoAddExpenses?: NumberFieldValue;
  exchinfoTotalExpenses?: NumberFieldValue;
  exchinfoDistExpense?: NumberFieldValue;
  exchinfoTotalDepozito?: NumberFieldValue;
  exchinfoTotalPromotions?: NumberFieldValue;
  exchinfoVatIncGross?: NumberFieldValue;
  exchinfoTotalVat?: NumberFieldValue;
  exchinfoGrossTotal?: NumberFieldValue;
  exchinfoTotalAddTax?: NumberFieldValue;
  exchinfoTotalExAddTax?: NumberFieldValue;
  exchinfoBagkur?: NumberFieldValue;
  exchinfoStopaj?: NumberFieldValue;
  exchinfoSsdf?: NumberFieldValue;
  exchinfoBorsa?: NumberFieldValue;
  exchinfoKomisyon?: NumberFieldValue;
  exchinfoKomKdv?: NumberFieldValue;
  exchinfoEk1?: NumberFieldValue;
  exchinfoEk2?: NumberFieldValue;
  exchinfoEk3?: NumberFieldValue;
  exchinfoEk4?: NumberFieldValue;
  exchinfoEk5?: NumberFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  devir?: NumberFieldValue;
  deliveryCode?: StringFieldValue;
  originalDate?: StringFieldValue;
  activityRenting?: NumberFieldValue;
  addDiscountsVat?: NumberFieldValue;
  payerid?: StringFieldValue;
  payertype?: NumberFieldValue;
  cantCreDeduct?: NumberFieldValue;
  payermicro?: NumberFieldValue;
  contactref?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for PurchaseProposalContracts entities
 */
export interface PurchaseProposalContractsAnalytics {
  total: number;
  // Add PurchaseProposalContracts-specific analytics fields
}
