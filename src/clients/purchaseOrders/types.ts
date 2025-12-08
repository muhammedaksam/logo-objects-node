import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_OrdTransXML]
 */
export interface RscollectionrsOrdtransxml {
  Meta?: Meta;
  items?: RsOrdtransxml[];
}

/**
 * Interface for RSCollection[RS_OrdDetTrnXML]
 */
export interface RscollectionrsOrddettrnxml {
  Meta?: Meta;
  items?: RsOrddettrnxml[];
}

/**
 * Interface for RSCollection[RS_CampCodesListXML]
 */
export interface RscollectionrsCampcodeslistxml {
  Meta?: Meta;
  items?: RsCampcodeslistxml[];
}

/**
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
}

/**
 * Interface for RSCollection[RS_AddTaxMultiLineX]
 */
export interface RscollectionrsAddtaxmultilinex {
  Meta?: Meta;
  items?: RsAddtaxmultilinex[];
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
 * Interface for RSCollection[demandPeggings]
 */
export interface Rscollectiondemandpeggings {
  Meta?: Meta;
  items?: DemandPeggings[];
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
 * RsOrdtransxml transaction line item
 *
 * Represents individual transaction records within a PurchaseOrders collection.
 */
export interface RsOrdtransxml extends BaseEntity {
  DEVIR?: string;
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
  CALC_TYPE?: number;
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
  NET_DSC_FLAG?: number;
  NET_DSC_RATE?: number;
  NET_DSC_AMOUNT?: number;
  PRODUCED?: number;
  ORDER_CODE?: string;
  DETAILS?: RscollectionrsOrddettrnxml;
  DETDELLIST?: string;
  REASON_FOR_NOT_SHP?: number;
  CMPG_LINE_REF?: number;
  CAMPAIGN_INFOS?: RscollectionrsCampcodeslistxml;
  CAMPAIGN_POINT?: number;
  PROM_CLAS_ITEM_CODE?: string;
  PR_RATE?: number;
  GROSS_U_INFO1?: number;
  GROSS_U_INFO2?: number;
  CANCELLED?: number;
  DEM_PEGGED_AMNT?: number;
  SALESMAN_CODE?: string;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  DEFNFLDS?: Rscollectionextendedfielddefinitions;
  CURR_TRANSACTIN?: number;
  ITEXT?: string;
  PRCLISTREF?: number;
  AFFECT_COLLATRL?: number;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  CANCONFIG?: number;
  VCHARLIST?: string;
  PRIORITY?: number;
  ADD_TAX_RATE?: number;
  ADD_TAX_CONVFACT?: number;
  ADD_TAX_AMOUNT?: number;
  ADD_TAX_ACCREF?: number;
  ADD_TAX_CENTERREF?: number;
  ADD_TAX_AMNTISUPD?: number;
  ADD_TAX_DISC_AMOUNT?: number;
  EX_ADD_TAX_RATE?: number;
  EX_ADD_TAX_CONVF?: number;
  EX_ADD_TAX_AMOUNT?: number;
  EU_VAT_STATUS?: number;
  MULTI_ADD_TAX?: number;
  ADDTAXLINELIST?: RscollectionrsAddtaxmultilinex;
  AFFECT_RISK?: number;
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
  ADD_TAX_VAT_MATRAH?: number;
  EXCLINE_ADD_TAX_VAT_MATRAH?: number;
  EDT_PRICE?: number;
  EDT_CURR?: number;
  ORG_DUE_DATE?: string;
  ORG_QUANTITY?: number;
  ORG_PRICE?: number;
  AUXIL_CODE2?: string;
  RESERVE_DATE?: string;
  RESERVE_AMOUNT?: number;
  PRCLISTCODE?: string;
  PRCLISTTYPE?: number;
  GLOBAL_ID?: string;
  DEDUCTION_PART1?: number;
  DEDUCTION_PART2?: number;
  CANDEDUCT?: number;
  DEDUCTION_TOT?: number;
  DEDUCTION_TOT_TC?: number;
  OFFERREF?: number;
  OFFTRANSREF?: number;
  PRODUCER_CODE?: string;
  BOMREF?: number;
  BOM_CODE?: string;
  BOM_TYPE?: number;
  BOMREVREF?: number;
  BOM_REV_CODE?: string;
  ROUTINGREF?: number;
  ROUTING_CODE?: string;
  OPERATIONREF?: number;
  OPERATION_CODE?: string;
  WSREF?: number;
  WS_CODE?: string;
  ADDITIONAL_ITEMS_CODE?: string;
  PROMOTION_CODE?: string;
  APPLY_ADD_TAX?: number;
  VATEXCEPT_CODE?: string;
  VATEXCEPT_REASON?: string;
  ADDTAXEXCEPT_CODE?: string;
  ADDTAXEXCEPT_REASON?: string;
  CPA_CODE?: string;
  GTIP_CODE?: string;
  PUBLICCOUNTRYREF?: number;
  PUBLIC_COUNTRY_CODE?: string;
  PUBLIC_COUNTRY_NAME?: string;
  DIST_DISC_VAT?: number;
  DEDUCT_CODE?: string;
  DEDUCT_DEF?: string;
  GUID?: string;
  PARENTLNREF?: number;
  ITMDISC?: number;
  ADD_TAX_REF?: number;
  ADD_TAX_EFFECT_KDV?: number;
  ADD_TAX_INLNNET?: number;
  DRAFTSTOCKNAME?: string;
  DRAFTSTOCKNAME2?: string;
  DRAFTSTOCKNAME3?: string;
  PARENTSTOCKREF?: number;
  PURCHOFFCAPTION?: string;
  ADD_TAX_TYPE?: number;
  GETSTOCKLINEPRICE?: string;
}

/**
 * RsOrddettrnxml transaction line item
 *
 * Represents individual transaction records within a PurchaseOrders collection.
 */
export interface RsOrddettrnxml extends BaseEntity {
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
  CALC_TYPE?: number;
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
  PRODUCED?: number;
  ORDER_CODE?: string;
  DETLIST?: string;
  DETDELLIST?: string;
  REASON_FOR_NOT_SHP?: number;
  CMPG_LINE_REF?: number;
  DEM_PEGGED_AMNT?: number;
  PRCLISTREF?: number;
  AFFECT_COLLATRL?: number;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  CANCONFIG?: number;
  VCHARLIST?: string;
  PRIORITY?: number;
  ADD_TAX_RATE?: number;
  ADD_TAX_CONVFACT?: number;
  ADD_TAX_AMOUNT?: number;
  ADD_TAX_ACCREF?: number;
  ADD_TAX_CENTERREF?: number;
  ADD_TAX_AMNTISUPD?: number;
  ADD_TAX_DISC_AMOUNT?: number;
  EX_ADD_TAX_RATE?: number;
  EX_ADD_TAX_CONVF?: number;
  EX_ADD_TAX_AMOUNT?: number;
  EU_VAT_STATUS?: number;
  AFFECT_RISK?: number;
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
  ADD_TAX_VAT_MATRAH?: number;
  EXCLINE_ADD_TAX_VAT_MATRAH?: number;
  EDT_PRICE?: number;
  EDT_CURR?: number;
  ORG_DUE_DATE?: string;
  ORG_QUANTITY?: number;
  ORG_PRICE?: number;
  AUXIL_CODE2?: string;
  RESERVE_DATE?: string;
  PRCLISTCODE?: string;
  PRCLISTTYPE?: number;
  GLOBAL_ID?: string;
  DEDUCTION_PART1?: number;
  DEDUCTION_PART2?: number;
  BOMREF?: number;
  BOM_CODE?: string;
  BOM_TYPE?: number;
  BOMREVREF?: number;
  BOM_REV_CODE?: string;
  ROUTINGREF?: number;
  ROUTING_CODE?: string;
  OPERATIONREF?: number;
  OPERATION_CODE?: string;
  WSREF?: number;
  WS_CODE?: string;
  DIST_DISC_VAT?: number;
  DEVIR?: number;
  PARENTLNREF?: number;
  ITMDISC?: number;
  ADD_TAX_REF?: number;
  ADD_TAX_EFFECT_KDV?: number;
  ADD_TAX_INLNNET?: number;
  DRAFTSTOCKNAME?: string;
  DRAFTSTOCKNAME2?: string;
  DRAFTSTOCKNAME3?: string;
  PARENTSTOCKREF?: number;
  PURCHOFFCAPTION?: string;
  ADD_TAX_TYPE?: number;
}

/**
 * RsCampcodeslistxml transaction line item
 *
 * Represents individual transaction records within a PurchaseOrders collection.
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
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a PurchaseOrders collection.
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
 * RsAddtaxmultilinex transaction line item
 *
 * Represents individual transaction records within a PurchaseOrders collection.
 */
export interface RsAddtaxmultilinex extends BaseEntity {
  FICHETYPE?: number;
  FICHEREF?: number;
  LINEREF?: number;
  ADDTAXREF?: number;
  ADD_TAX_CODE?: string;
  ADD_TAX_GLOBAL_CODE?: string;
  ADD_TAX_AMOUNT?: number;
  ADD_TAX_VATMATRAH?: number;
  ADD_TAX_AMNTISUPD?: number;
  ADD_TAX_RATE?: number;
  ADD_TAX_CONVFACT?: number;
  ADD_TAX_DISCAMOUNT?: number;
  ADD_TAX_ACCREF?: number;
  ADD_TAX_GL_CODE?: string;
  ADD_TAX_CENTERREF?: number;
  ADD_TAX_OHP_CODE?: string;
  ADD_TAX_AMOUNTX?: number;
  ADD_TAX_VATMATRAHX?: number;
  ADD_TAX_CONVFACTX?: number;
  ADD_TAX_DISCAMOUNTX?: number;
  EX_ADD_TAX_AMNTX?: number;
  EX_ADD_TAX_CONVFX?: number;
  EX_ADD_TAX_AMNT?: number;
  EX_ADD_TAX_RATE?: number;
  EX_ADD_TAX_CONVF?: number;
  EX_ADD_TAX_AREF?: number;
  EX_ADD_TAX_GL_CODE?: string;
  EX_ADD_TAX_CREF?: number;
  EX_ADD_TAX_OHP_CODE?: string;
  OTHR_ADD_TAX_AREF?: number;
  OTHR_ADD_TAX_GL_CODE?: string;
  OTHR_ADD_TAX_CREF?: number;
  OTHR_ADD_TAX_OHP_CODE?: string;
  VATMATRAH?: number;
  ADD_TAX_TYPE?: number;
}

/**
 * RsPaylstxml transaction line item
 *
 * Represents individual transaction records within a PurchaseOrders collection.
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
 * Represents individual transaction records within a PurchaseOrders collection.
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
 * DemandPeggings transaction line item
 *
 * Represents individual transaction records within a PurchaseOrders collection.
 */
export interface DemandPeggings extends BaseEntity {
  DEMAND_REFERENCE?: number;
  DEMAND_SITEID?: number;
  PARENTTYPE?: number;
  PARENTREF?: number;
  CHILD_TYPE?: number;
  CHILD_REFERENCE?: number;
  FICHE_TYPE?: number;
  ITEM_ALTER?: number;
  ITEMREF?: number;
  UNITREF?: number;
  MAINITEMREF?: number;
  MAINUNITREF?: number;
  MEET_AMNT?: number;
  MAIN_MEET_AMNT?: number;
  ORD_PERIOD?: number;
  CLIENTREF?: number;
  BOMMASTERREF?: number;
  BOMREVREF?: number;
  LINE_TYPE?: number;
  DET_LINE?: number;
  PREVLINEREF?: number;
  PREV_LINE_NO?: number;
  LINE_NO?: number;
  FICHE_NO?: string;
  FICHE_DATE?: string;
  ITEM_CODE?: string;
  ITEM_NAME?: string;
  TR_AMNT?: number;
  U_EDIT?: string;
  BOM_CODE?: string;
  BOM_REV_CODE?: string;
  ARP_CODE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  PEGREF?: number;
  DOCNRREF?: number;
  LINE_PTR?: string;
  FCNOCGHD?: number;
  DET_LIST?: string;
  DET_DEL_LIST?: string;
  PROPOSAL?: number;
  WAIT_AMNT?: number;
  FACTORY_NR?: number;
  SOURCE_INDEX?: number;
  AMNTCONVF?: number;
  DO_CODE?: string;
  ARP_NAME?: string;
  FIC_STATUS?: number;
  MAIN_ITEM_CODE?: string;
  MAIN_ITEM_NAME?: string;
  MAIN_U_EDIT?: string;
  PRICE?: number;
  PAYPLANREF?: number;
  PAYPLAN_CODE?: string;
  PROJECT_CODE?: string;
  PrOJECTREF?: number;
  VARIANTREF?: number;
  MAINVARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  BOM_TYPE?: number;
}

/**
 * RsLabelxml transaction line item
 *
 * Represents individual transaction records within a PurchaseOrders collection.
 */
export interface RsLabelxml extends BaseEntity {
  NAME?: string;
  DEFINITION?: string;
  USER_TYPE?: number;
}

/**
 * PurchaseOrders entity interface based on swagger definition
 */
export interface PurchaseOrders extends BaseEntity {
  TYPE?: number;
  NUMBER?: string;
  DOC_TRACK_NR?: string;
  DATE?: string;
  TIME?: number;
  DOC_NUMBER?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  ARP_CODE?: string;
  CLIENTREF?: number;
  ARP_CODE_SHPM?: string;
  RECVREF?: number;
  SHIPLOC_CODE?: string;
  GL_CODE?: string;
  ACCOUNTREF?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
  SOURCE_WH?: number;
  SOURCE_COST_GRP?: number;
  UPDCURR?: number;
  ADD_DISCOUNTS?: number;
  TOTAL_DISCOUNTS?: number;
  TOTAL_DISCOUNTED?: number;
  ADD_EXPENSES?: number;
  TOTAL_EXPENSES?: number;
  TOTAL_PROMOTIONS?: number;
  TOTAL_VAT?: number;
  TOTAL_GROSS?: number;
  TOTAL_NET?: number;
  RC_RATE?: number;
  RC_NET?: number;
  NOTES1?: string;
  NOTES2?: string;
  NOTES3?: string;
  NOTES4?: string;
  NOTES5?: string;
  NOTES6?: string;
  EXTENREF?: number;
  PAYMENT_CODE?: string;
  PAYDEFREF?: number;
  PRINT_COUNTER?: number;
  PRINT_DATE?: string;
  DIVISION?: number;
  DEPARTMENT?: number;
  ORDER_STATUS?: number;
  SALESMAN_CODE?: string;
  SALESMANREF?: number;
  SHIPMENT_TYPE?: string;
  SHIPPING_AGENT?: string;
  CURRSEL_TOTAL?: number;
  CURRSEL_DETAILS?: number;
  TRADING_GRP?: string;
  FACTORY?: number;
  TRANSACTIONS?: RscollectionrsOrdtransxml;
  XBUFS?: string;
  XCNT?: number;
  DOCALS?: string;
  ITEXT?: string;
  CUST_ORD_NO?: string;
  DLV_CLIENT?: number;
  DOC_TRACKING_NR?: string;
  CANCELLED?: number;
  ORGLOGOID?: string;
  OFFER_REFERENCE?: number;
  OFFALT_REFERENCE?: number;
  OFFER_TYP?: number;
  OFFER_ALTNR?: number;
  CURR_TRANSACTIN?: number;
  TC_RATE?: number;
  TC_NET?: number;
  WITH_PAYMENT?: number;
  PAYMENT_LIST?: RscollectionrsPaylstxml;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  WFLOWCARDREF?: number;
  OP_STATUS?: number;
  UPD_CURR?: number;
  UPD_TRCURR?: number;
  GUARANTOR1_FICHETYPE?: number;
  GUARANTOR1_NR?: number;
  GUARANTOR1_NAMESURNAME?: string;
  GUARANTOR1_ADDR1?: string;
  GUARANTOR1_ADDR2?: string;
  GUARANTOR1_DISTRICT?: string;
  GUARANTOR1_TOWN?: string;
  GUARANTOR1_CITY?: string;
  GUARANTOR1_COUNTRY?: string;
  GUARANTOR1_POSTCODE?: string;
  GUARANTOR1_TELNR1?: string;
  GUARANTOR1_TELNR2?: string;
  GUARANTOR1_FAXNR?: string;
  GUARANTOR1_SITEID?: number;
  GUARANTOR1_ORGLOGICREF?: number;
  GUARANTOR1_CLIENTREF?: number;
  GUARANTOR1_TAXNR?: string;
  GUARANTOR1_TAXOFFICE?: string;
  GUARANTOR1_TAXXOFFCODE?: string;
  GUARANTOR1_BANKBRANCHCODE?: string;
  GUARANTOR1_BANKBRANCHS?: string;
  GUARANTOR1_BANKACCOUNTS?: string;
  GUARANTOR2_FICHETYPE?: number;
  GUARANTOR2_NR?: number;
  GUARANTOR2_NAMESURNAME?: string;
  GUARANTOR2_ADDR1?: string;
  GUARANTOR2_ADDR2?: string;
  GUARANTOR2_DISTRICT?: string;
  GUARANTOR2_TOWN?: string;
  GUARANTOR2_CITY?: string;
  GUARANTOR2_COUNTRY?: string;
  GUARANTOR2_POSTCODE?: string;
  GUARANTOR2_TELNR1?: string;
  GUARANTOR2_TELNR2?: string;
  GUARANTOR2_FAXNR?: string;
  GUARANTOR2_SITEID?: number;
  GUARANTOR2_ORGLOGICREF?: number;
  GUARANTOR2_CLIENTREF?: number;
  GUARANTOR2_TAXNR?: string;
  GUARANTOR2_TAXOFFICE?: string;
  GUARANTOR2_TAXOFFCODE?: string;
  GUARANTOR2_BANKBRANCHCODE?: string;
  GUARANTOR2_BANKBRANCHS?: string;
  GUARANTOR2_BANKACCOUNTS?: string;
  AFFECT_COLLATRL?: number;
  DEMANDPEGGINGS?: Rscollectiondemandpeggings;
  TOTAL_ADD_TAX?: number;
  TOTAL_EX_ADD_TAX?: number;
  AFFECT_RISK?: number;
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
  PAYMENT_TYPE?: number;
  APPROVE?: number;
  APPROVE_DATE?: string;
  GUID?: string;
  FC_STATUS_NAME?: string;
  DEDUCTIONPART1?: number;
  DEDUCTIONPART2?: number;
  GLOBAL_ID?: string;
  CANCEL_AUTO_CAMP_PROC?: number;
  CAMPAIGN_CODE?: string;
  APPLY_ARP_DISCOUNT?: number;
  DEVIR?: number;
  DELIVERY_CODE?: string;
  ORIGINAL_DATE?: string;
  ACTIVITY_RENTING?: number;
  ADD_DISCOUNTS_VAT?: number;
  EINVOICE_TYPE?: number;
  EINVOICE?: number;
  EINVOICE_PROFILEID?: number;
  EINVOICE_STATUS?: number;
  EINVOICE_STARTDATE?: string;
  EINVOICE_ENDDATE?: string;
  EINVOICE_DESCRIPTION?: string;
  EINVOICE_DURATION?: number;
  EINVOICE_DURATIONTYPE?: number;
  EINVOICE_TAXTYPE?: number;
  EINVOICE_TUNAME?: string;
  EINVOICE_TUSURNAME?: string;
  EINVOICE_TUPASSPORTNO?: string;
  EINVOICE_TUPASSPORTDATE?: string;
  EINVOICE_TUNATIONALITY?: string;
  EINVOICE_TUNATIONALITYNAME?: string;
  EINVOICE_TUBANKNAME?: string;
  EINVOICE_TUBNACCOUNTNO?: string;
  EINVOICE_TUBNBRANCH?: string;
  EINVOICE_TUPAYMENTNOTE?: string;
  EINVOICE_TUBNCURR?: string;
  EINVOICE_ADDR1?: string;
  EINVOICE_ADDR2?: string;
  EINVOICE_CITYCODE?: string;
  EINVOICE_CITY?: string;
  EINVOICE_COUNTRYCODE?: string;
  EINVOICE_COUNTRY?: string;
  EINVOICE_DISTRICTCODE?: string;
  EINVOICE_DISTRICT?: string;
  EINVOICE_TOWNCODE?: string;
  EINVOICE_TOWN?: string;
  EINVOICE_EXITTOWN?: string;
  EINVOICE_EXITGATECODE?: string;
  EINVOICE_EXITGATE?: string;
  EINVOICE_AGENCYCODE?: string;
  EINVOICE_AGENCY?: string;
  EINVOICE_EXITCOUNTRYCODE?: string;
  EINVOICE_EXITCOUNTRY?: string;
  EINVOICE_TRANSPORTTYP?: number;
  EINVOICE_TRANSPORTTYPCODE?: string;
  EINVOICE_TRANSPORTTYPNAME?: string;
  EINVOICE_EXITDATE?: string;
  EINVOICE_EXITTIME?: number;
  EINVOICE_FLIGHTNUMBER?: string;
  EINVOICE_GUIDE?: string;
  EINVOICE_TURETPRICE?: number;
  EINVOICE_TURETPRICESTR?: string;
  EINVOICE_SENDEINVCUSTOM?: number;
  EINVOICE_EINVOICETYPSGK?: number;
  EINVOICE_TAXPAYERCODE?: string;
  EINVOICE_TAXPAYERNAME?: string;
  EINVOICE_DOCUMENTNOSGK?: string;
  EINVOICE_DRIVERNAME1?: string;
  EINVOICE_DRIVERSURNAME1?: string;
  EINVOICE_DRIVERTCKNO1?: string;
  EINVOICE_PLATENUM1?: string;
  EINVOICE_CHASSISNUM1?: string;
  EINVOICE_DRIVERNAME2?: string;
  EINVOICE_DRIVERSURNAME2?: string;
  EINVOICE_DRIVERTCKNO2?: string;
  EINVOICE_PLATENUM2?: string;
  EINVOICE_CHASSISNUM2?: string;
  EINVOICE_DRIVERNAME3?: string;
  EINVOICE_DRIVERSURNAME3?: string;
  EINVOICE_DRIVERTCKNO3?: string;
  EINVOICE_PLATENUM3?: string;
  EINVOICE_CHASSISNUM3?: string;
  EINVOICE_CHAINDELIVERY?: number;
  EINVOICE_SELLERCLIENTREF?: number;
  EINVOICE_SELLERCLIENTCODE?: string;
  EINVOICE_TAXNRTOPAY?: string;
  PUBLICBNACCREF?: number;
  PUBLIC_BNACC_CODE?: string;
  PUBLIC_BNACC_IBAN?: string;
  PUBLIC_BNACC_CURRENCY?: number;
  ACCEPT_EINV_PUBLIC?: number;
  EINSTEAD_OF_DISPATCH?: number;
  VATEXCEPT_CODE?: string;
  VATEXCEPT_REASON?: string;
  ADDTAXEXCEPT_CODE?: string;
  ADDTAXEXCEPT_REASON?: string;
  TAX_FREE_CHECK?: number;
  EARCHIVEDETR_LOGICALREF?: number;
  EARCHIVEDETR_ORDFCREF?: number;
  EARCHIVEDETR_INSTALLMENTNUMBER?: string;
  EARCHIVEDETR_EARCHIVESTATUS?: number;
  EARCHIVEDETR_EARCHIVESTATUSOLD?: number;
  EARCHIVEDETR_SENDMOD?: number;
  EARCHIVEDETR_INTSALESADDR?: string;
  EARCHIVEDETR_INTPAYMENTDESC?: string;
  EARCHIVEDETR_INTPAYMENTTYPE?: number;
  EARCHIVEDETR_INTPAYMENTAGENT?: string;
  EARCHIVEDETR_INTPAYMENTDATEORG?: number;
  EARCHIVEDETR_INTPAYMENTDATE?: string;
  EARCHIVEDETR_OCKSERIALNUMBER?: string;
  EARCHIVEDETR_OCKZNUMBER?: string;
  EARCHIVEDETR_OCKFICHENUMBER?: string;
  EARCHIVEDETR_OCKFICHEDATEORG?: number;
  EARCHIVEDETR_OCKFICHEDATE?: string;
  EARCHIVEDETR_ISCOMP?: number;
  EARCHIVEDETR_TAXNR?: string;
  EARCHIVEDETR_TCKNO?: string;
  EARCHIVEDETR_NAME?: string;
  EARCHIVEDETR_SURNAME?: string;
  EARCHIVEDETR_DEFINITION?: string;
  EARCHIVEDETR_ADDR1?: string;
  EARCHIVEDETR_ADDR2?: string;
  EARCHIVEDETR_CITYCODE?: string;
  EARCHIVEDETR_CITY?: string;
  EARCHIVEDETR_COUNTRYCODE?: string;
  EARCHIVEDETR_COUNTRY?: string;
  EARCHIVEDETR_POSTCODE?: string;
  EARCHIVEDETR_DISTRICTCODE?: string;
  EARCHIVEDETR_DISTRICT?: string;
  EARCHIVEDETR_TOWNCODE?: string;
  EARCHIVEDETR_TOWN?: string;
  EARCHIVEDETR_EMAILADDR?: string;
  EARCHIVEDETR_ISPERCURR?: number;
  EARCHIVEDETR_INSTEADOFDESP?: number;
  EARCHIVEDETR_TAXOFFICE?: string;
  EARCHIVEDETR_TELCODES1?: string;
  EARCHIVEDETR_TELCODES2?: string;
  EARCHIVEDETR_TELNRS1?: string;
  EARCHIVEDETR_TELNRS2?: string;
  EARCHIVEDETR_DRIVERNAME1?: string;
  EARCHIVEDETR_DRIVERSURNAME1?: string;
  EARCHIVEDETR_DRIVERTCKNO1?: string;
  EARCHIVEDETR_PLATENUM1?: string;
  EARCHIVEDETR_CHASSISNUM1?: string;
  EARCHIVEDETR_DRIVERNAME2?: string;
  EARCHIVEDETR_DRIVERSURNAME2?: string;
  EARCHIVEDETR_DRIVERTCKNO2?: string;
  EARCHIVEDETR_PLATENUM2?: string;
  EARCHIVEDETR_CHASSISNUM2?: string;
  EARCHIVEDETR_DRIVERNAME3?: string;
  EARCHIVEDETR_DRIVERSURNAME3?: string;
  EARCHIVEDETR_DRIVERTCKNO3?: string;
  EARCHIVEDETR_PLATENUM3?: string;
  EARCHIVEDETR_CHASSISNUM3?: string;
  EARCHIVEDETR_CHAINDELIVERY?: number;
  EARCHIVEDETR_SELLERCLIENTREF?: number;
  EARCHIVEDETR_SELLERCLIENTCODE?: string;
  LABEL_LIST?: RscollectionrsLabelxml;
  PAYERID?: string;
  PAYERTYPE?: number;
  CANT_CRE_DEDUCT?: number;
  COMMITMENT?: number;
  CMBEGDATE?: string;
  CMENDDATE?: string;
  CMEXP?: string;
  CMTYPE?: number;
  CMAMOUNT?: number;
  CMTOTAL?: number;
  CMSHIPPEDAMOUNT?: number;
  CMSHIPPEDTOTAL?: number;
  CMPAYMENTTOTAL?: number;
  CMPRICE?: number;
  EINVOICE_TELCODE?: string;
  EINVOICE_TELNR?: string;
  CMPAIDTOTAL?: number;
  CMCANDEDUCT?: number;
  CMDEDUCTPART1?: number;
  CMDEDUCTPART2?: number;
  CMVAT?: number;
  CMDEVIRODEMEBAKIYE?: number;
  EARCHIVEDETR_ENRGPLATENUM?: string;
  EARCHIVEDETR_ENRGCARID?: string;
  EARCHIVEDETR_CHRGBEGDATE?: string;
  EARCHIVEDETR_CHRGBEGTIME?: number;
  EARCHIVEDETR_CHRGENDDATE?: string;
  EARCHIVEDETR_CHRGENDTIME?: number;
  EARCHIVEDETR_ESURAPORID?: string;
  EARCHIVEDETR_ESURAPORIDDATE?: string;
  EINVOICE_ENRGPLATENUM?: string;
  EINVOICE_ENRGCARID?: string;
  EINVOICE_CHRGBEGDATE?: string;
  EINVOICE_CHRGBEGTIME?: number;
  EINVOICE_CHRGENDDATE?: string;
  EINVOICE_CHRGENDTIME?: number;
  EINVOICE_ESURAPORID?: string;
  PAYERMICRO?: number;
  CONTACTREF?: number;
}

/**
 * Union type of all PurchaseOrders field names for type-safe field selection and sorting
 */
export type PurchaseOrdersField =
  | 'INTERNAL_REFERENCE'
  | 'TYPE'
  | 'NUMBER'
  | 'DOC_TRACK_NR'
  | 'DATE'
  | 'TIME'
  | 'DOC_NUMBER'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'ARP_CODE'
  | 'CLIENTREF'
  | 'ARP_CODE_SHPM'
  | 'RECVREF'
  | 'SHIPLOC_CODE'
  | 'GL_CODE'
  | 'ACCOUNTREF'
  | 'OHP_CODE'
  | 'CENTERREF'
  | 'SOURCE_WH'
  | 'SOURCE_COST_GRP'
  | 'UPDCURR'
  | 'ADD_DISCOUNTS'
  | 'TOTAL_DISCOUNTS'
  | 'TOTAL_DISCOUNTED'
  | 'ADD_EXPENSES'
  | 'TOTAL_EXPENSES'
  | 'TOTAL_PROMOTIONS'
  | 'TOTAL_VAT'
  | 'TOTAL_GROSS'
  | 'TOTAL_NET'
  | 'RC_RATE'
  | 'RC_NET'
  | 'NOTES1'
  | 'NOTES2'
  | 'NOTES3'
  | 'NOTES4'
  | 'NOTES5'
  | 'NOTES6'
  | 'EXTENREF'
  | 'PAYMENT_CODE'
  | 'PAYDEFREF'
  | 'PRINT_COUNTER'
  | 'PRINT_DATE'
  | 'DIVISION'
  | 'DEPARTMENT'
  | 'ORDER_STATUS'
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
  | 'SALESMAN_CODE'
  | 'SALESMANREF'
  | 'SHIPMENT_TYPE'
  | 'SHIPPING_AGENT'
  | 'CURRSEL_TOTAL'
  | 'CURRSEL_DETAILS'
  | 'TRADING_GRP'
  | 'TEXTINC'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'FACTORY'
  | 'TRANSACTIONS'
  | 'XBUFS'
  | 'XCNT'
  | 'DOCALS'
  | 'ITEXT'
  | 'XML_ATTRIBUTE'
  | 'CUST_ORD_NO'
  | 'DLV_CLIENT'
  | 'DOC_TRACKING_NR'
  | 'CANCELLED'
  | 'ORGLOGOID'
  | 'OFFER_REFERENCE'
  | 'OFFALT_REFERENCE'
  | 'OFFER_TYP'
  | 'OFFER_ALTNR'
  | 'CURR_TRANSACTIN'
  | 'TC_RATE'
  | 'TC_NET'
  | 'WITH_PAYMENT'
  | 'PAYMENT_LIST'
  | 'PROJECT_CODE'
  | 'PROJECTREF'
  | 'DEFNFLDSLIST'
  | 'WFLOWCARDREF'
  | 'OP_STATUS'
  | 'UPD_CURR'
  | 'UPD_TRCURR'
  | 'GUARANTOR1_FICHETYPE'
  | 'GUARANTOR1_NR'
  | 'GUARANTOR1_NAMESURNAME'
  | 'GUARANTOR1_ADDR1'
  | 'GUARANTOR1_ADDR2'
  | 'GUARANTOR1_DISTRICT'
  | 'GUARANTOR1_TOWN'
  | 'GUARANTOR1_CITY'
  | 'GUARANTOR1_COUNTRY'
  | 'GUARANTOR1_POSTCODE'
  | 'GUARANTOR1_TELNR1'
  | 'GUARANTOR1_TELNR2'
  | 'GUARANTOR1_FAXNR'
  | 'GUARANTOR1_SITEID'
  | 'GUARANTOR1_ORGLOGICREF'
  | 'GUARANTOR1_CLIENTREF'
  | 'GUARANTOR1_TAXNR'
  | 'GUARANTOR1_TAXOFFICE'
  | 'GUARANTOR1_TAXXOFFCODE'
  | 'GUARANTOR1_BANKBRANCHCODE'
  | 'GUARANTOR1_BANKBRANCHS'
  | 'GUARANTOR1_BANKACCOUNTS'
  | 'GUARANTOR2_FICHETYPE'
  | 'GUARANTOR2_NR'
  | 'GUARANTOR2_NAMESURNAME'
  | 'GUARANTOR2_ADDR1'
  | 'GUARANTOR2_ADDR2'
  | 'GUARANTOR2_DISTRICT'
  | 'GUARANTOR2_TOWN'
  | 'GUARANTOR2_CITY'
  | 'GUARANTOR2_COUNTRY'
  | 'GUARANTOR2_POSTCODE'
  | 'GUARANTOR2_TELNR1'
  | 'GUARANTOR2_TELNR2'
  | 'GUARANTOR2_FAXNR'
  | 'GUARANTOR2_SITEID'
  | 'GUARANTOR2_ORGLOGICREF'
  | 'GUARANTOR2_CLIENTREF'
  | 'GUARANTOR2_TAXNR'
  | 'GUARANTOR2_TAXOFFICE'
  | 'GUARANTOR2_TAXOFFCODE'
  | 'GUARANTOR2_BANKBRANCHCODE'
  | 'GUARANTOR2_BANKBRANCHS'
  | 'GUARANTOR2_BANKACCOUNTS'
  | 'AFFECT_COLLATRL'
  | 'DEMANDPEGGINGS'
  | 'TOTAL_ADD_TAX'
  | 'TOTAL_EX_ADD_TAX'
  | 'AFFECT_RISK'
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
  | 'PAYMENT_TYPE'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'GUID'
  | 'FC_STATUS_NAME'
  | 'DEDUCTIONPART1'
  | 'DEDUCTIONPART2'
  | 'GLOBAL_ID'
  | 'CANCEL_AUTO_CAMP_PROC'
  | 'CAMPAIGN_CODE'
  | 'APPLY_ARP_DISCOUNT'
  | 'DEVIR'
  | 'DELIVERY_CODE'
  | 'ORIGINAL_DATE'
  | 'ACTIVITY_RENTING'
  | 'ADD_DISCOUNTS_VAT'
  | 'EINVOICE_TYPE'
  | 'EINVOICE'
  | 'EINVOICE_PROFILEID'
  | 'EINVOICE_STATUS'
  | 'EINVOICE_STARTDATE'
  | 'EINVOICE_ENDDATE'
  | 'EINVOICE_DESCRIPTION'
  | 'EINVOICE_DURATION'
  | 'EINVOICE_DURATIONTYPE'
  | 'EINVOICE_TAXTYPE'
  | 'EINVOICE_TUNAME'
  | 'EINVOICE_TUSURNAME'
  | 'EINVOICE_TUPASSPORTNO'
  | 'EINVOICE_TUPASSPORTDATE'
  | 'EINVOICE_TUNATIONALITY'
  | 'EINVOICE_TUNATIONALITYNAME'
  | 'EINVOICE_TUBANKNAME'
  | 'EINVOICE_TUBNACCOUNTNO'
  | 'EINVOICE_TUBNBRANCH'
  | 'EINVOICE_TUPAYMENTNOTE'
  | 'EINVOICE_TUBNCURR'
  | 'EINVOICE_ADDR1'
  | 'EINVOICE_ADDR2'
  | 'EINVOICE_CITYCODE'
  | 'EINVOICE_CITY'
  | 'EINVOICE_COUNTRYCODE'
  | 'EINVOICE_COUNTRY'
  | 'EINVOICE_DISTRICTCODE'
  | 'EINVOICE_DISTRICT'
  | 'EINVOICE_TOWNCODE'
  | 'EINVOICE_TOWN'
  | 'EINVOICE_EXITTOWN'
  | 'EINVOICE_EXITGATECODE'
  | 'EINVOICE_EXITGATE'
  | 'EINVOICE_AGENCYCODE'
  | 'EINVOICE_AGENCY'
  | 'EINVOICE_EXITCOUNTRYCODE'
  | 'EINVOICE_EXITCOUNTRY'
  | 'EINVOICE_TRANSPORTTYP'
  | 'EINVOICE_TRANSPORTTYPCODE'
  | 'EINVOICE_TRANSPORTTYPNAME'
  | 'EINVOICE_EXITDATE'
  | 'EINVOICE_EXITTIME'
  | 'EINVOICE_FLIGHTNUMBER'
  | 'EINVOICE_GUIDE'
  | 'EINVOICE_TURETPRICE'
  | 'EINVOICE_TURETPRICESTR'
  | 'EINVOICE_SENDEINVCUSTOM'
  | 'EINVOICE_EINVOICETYPSGK'
  | 'EINVOICE_TAXPAYERCODE'
  | 'EINVOICE_TAXPAYERNAME'
  | 'EINVOICE_DOCUMENTNOSGK'
  | 'EINVOICE_DRIVERNAME1'
  | 'EINVOICE_DRIVERSURNAME1'
  | 'EINVOICE_DRIVERTCKNO1'
  | 'EINVOICE_PLATENUM1'
  | 'EINVOICE_CHASSISNUM1'
  | 'EINVOICE_DRIVERNAME2'
  | 'EINVOICE_DRIVERSURNAME2'
  | 'EINVOICE_DRIVERTCKNO2'
  | 'EINVOICE_PLATENUM2'
  | 'EINVOICE_CHASSISNUM2'
  | 'EINVOICE_DRIVERNAME3'
  | 'EINVOICE_DRIVERSURNAME3'
  | 'EINVOICE_DRIVERTCKNO3'
  | 'EINVOICE_PLATENUM3'
  | 'EINVOICE_CHASSISNUM3'
  | 'EINVOICE_CHAINDELIVERY'
  | 'EINVOICE_SELLERCLIENTREF'
  | 'EINVOICE_SELLERCLIENTCODE'
  | 'EINVOICE_TAXNRTOPAY'
  | 'PUBLICBNACCREF'
  | 'PUBLIC_BNACC_CODE'
  | 'PUBLIC_BNACC_IBAN'
  | 'PUBLIC_BNACC_CURRENCY'
  | 'ACCEPT_EINV_PUBLIC'
  | 'EINSTEAD_OF_DISPATCH'
  | 'VATEXCEPT_CODE'
  | 'VATEXCEPT_REASON'
  | 'ADDTAXEXCEPT_CODE'
  | 'ADDTAXEXCEPT_REASON'
  | 'TAX_FREE_CHECK'
  | 'EARCHIVEDETR_LOGICALREF'
  | 'EARCHIVEDETR_ORDFCREF'
  | 'EARCHIVEDETR_INSTALLMENTNUMBER'
  | 'EARCHIVEDETR_EARCHIVESTATUS'
  | 'EARCHIVEDETR_EARCHIVESTATUSOLD'
  | 'EARCHIVEDETR_SENDMOD'
  | 'EARCHIVEDETR_INTSALESADDR'
  | 'EARCHIVEDETR_INTPAYMENTDESC'
  | 'EARCHIVEDETR_INTPAYMENTTYPE'
  | 'EARCHIVEDETR_INTPAYMENTAGENT'
  | 'EARCHIVEDETR_INTPAYMENTDATEORG'
  | 'EARCHIVEDETR_INTPAYMENTDATE'
  | 'EARCHIVEDETR_OCKSERIALNUMBER'
  | 'EARCHIVEDETR_OCKZNUMBER'
  | 'EARCHIVEDETR_OCKFICHENUMBER'
  | 'EARCHIVEDETR_OCKFICHEDATEORG'
  | 'EARCHIVEDETR_OCKFICHEDATE'
  | 'EARCHIVEDETR_ISCOMP'
  | 'EARCHIVEDETR_TAXNR'
  | 'EARCHIVEDETR_TCKNO'
  | 'EARCHIVEDETR_NAME'
  | 'EARCHIVEDETR_SURNAME'
  | 'EARCHIVEDETR_DEFINITION'
  | 'EARCHIVEDETR_ADDR1'
  | 'EARCHIVEDETR_ADDR2'
  | 'EARCHIVEDETR_CITYCODE'
  | 'EARCHIVEDETR_CITY'
  | 'EARCHIVEDETR_COUNTRYCODE'
  | 'EARCHIVEDETR_COUNTRY'
  | 'EARCHIVEDETR_POSTCODE'
  | 'EARCHIVEDETR_DISTRICTCODE'
  | 'EARCHIVEDETR_DISTRICT'
  | 'EARCHIVEDETR_TOWNCODE'
  | 'EARCHIVEDETR_TOWN'
  | 'EARCHIVEDETR_EMAILADDR'
  | 'EARCHIVEDETR_ISPERCURR'
  | 'EARCHIVEDETR_INSTEADOFDESP'
  | 'EARCHIVEDETR_TAXOFFICE'
  | 'EARCHIVEDETR_TELCODES1'
  | 'EARCHIVEDETR_TELCODES2'
  | 'EARCHIVEDETR_TELNRS1'
  | 'EARCHIVEDETR_TELNRS2'
  | 'EARCHIVEDETR_DRIVERNAME1'
  | 'EARCHIVEDETR_DRIVERSURNAME1'
  | 'EARCHIVEDETR_DRIVERTCKNO1'
  | 'EARCHIVEDETR_PLATENUM1'
  | 'EARCHIVEDETR_CHASSISNUM1'
  | 'EARCHIVEDETR_DRIVERNAME2'
  | 'EARCHIVEDETR_DRIVERSURNAME2'
  | 'EARCHIVEDETR_DRIVERTCKNO2'
  | 'EARCHIVEDETR_PLATENUM2'
  | 'EARCHIVEDETR_CHASSISNUM2'
  | 'EARCHIVEDETR_DRIVERNAME3'
  | 'EARCHIVEDETR_DRIVERSURNAME3'
  | 'EARCHIVEDETR_DRIVERTCKNO3'
  | 'EARCHIVEDETR_PLATENUM3'
  | 'EARCHIVEDETR_CHASSISNUM3'
  | 'EARCHIVEDETR_CHAINDELIVERY'
  | 'EARCHIVEDETR_SELLERCLIENTREF'
  | 'EARCHIVEDETR_SELLERCLIENTCODE'
  | 'LABEL_LIST'
  | 'PAYERID'
  | 'PAYERTYPE'
  | 'CANT_CRE_DEDUCT'
  | 'COMMITMENT'
  | 'CMBEGDATE'
  | 'CMENDDATE'
  | 'CMEXP'
  | 'CMTYPE'
  | 'CMAMOUNT'
  | 'CMTOTAL'
  | 'CMSHIPPEDAMOUNT'
  | 'CMSHIPPEDTOTAL'
  | 'CMPAYMENTTOTAL'
  | 'CMPRICE'
  | 'EINVOICE_TELCODE'
  | 'EINVOICE_TELNR'
  | 'CMPAIDTOTAL'
  | 'CMCANDEDUCT'
  | 'CMDEDUCTPART1'
  | 'CMDEDUCTPART2'
  | 'CMVAT'
  | 'CMDEVIRODEMEBAKIYE'
  | 'EARCHIVEDETR_ENRGPLATENUM'
  | 'EARCHIVEDETR_ENRGCARID'
  | 'EARCHIVEDETR_CHRGBEGDATE'
  | 'EARCHIVEDETR_CHRGBEGTIME'
  | 'EARCHIVEDETR_CHRGENDDATE'
  | 'EARCHIVEDETR_CHRGENDTIME'
  | 'EARCHIVEDETR_ESURAPORID'
  | 'EARCHIVEDETR_ESURAPORIDDATE'
  | 'EINVOICE_ENRGPLATENUM'
  | 'EINVOICE_ENRGCARID'
  | 'EINVOICE_CHRGBEGDATE'
  | 'EINVOICE_CHRGBEGTIME'
  | 'EINVOICE_CHRGENDDATE'
  | 'EINVOICE_CHRGENDTIME'
  | 'EINVOICE_ESURAPORID'
  | 'PAYERMICRO'
  | 'CONTACTREF';

/**
 * Type-safe sort specification for PurchaseOrders queries
 */
export type PurchaseOrdersSortSpec =
  | [PurchaseOrdersField]
  | [PurchaseOrdersField, 'asc' | 'desc']
  | [PurchaseOrdersField[], 'asc' | 'desc']
  | [PurchaseOrdersField[]];

/**
 * Type-safe query options for PurchaseOrders entities
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
export interface PurchaseOrdersQueryOptions extends Omit<
  QueryOptions<PurchaseOrdersField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: PurchaseOrdersField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: PurchaseOrdersSortSpec;
}

/**
 * Search criteria for PurchaseOrders entities
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
export interface PurchaseOrdersSearchCriteria {
  internalReference?: NumberFieldValue;
  type?: NumberFieldValue;
  number?: StringFieldValue;
  docTrackNr?: StringFieldValue;
  date?: StringFieldValue;
  time?: NumberFieldValue;
  docNumber?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  arpCode?: StringFieldValue;
  clientref?: NumberFieldValue;
  arpCodeShpm?: StringFieldValue;
  recvref?: NumberFieldValue;
  shiplocCode?: StringFieldValue;
  glCode?: StringFieldValue;
  accountref?: NumberFieldValue;
  ohpCode?: StringFieldValue;
  centerref?: NumberFieldValue;
  sourceWh?: NumberFieldValue;
  sourceCostGrp?: NumberFieldValue;
  updcurr?: NumberFieldValue;
  addDiscounts?: NumberFieldValue;
  totalDiscounts?: NumberFieldValue;
  totalDiscounted?: NumberFieldValue;
  addExpenses?: NumberFieldValue;
  totalExpenses?: NumberFieldValue;
  totalPromotions?: NumberFieldValue;
  totalVat?: NumberFieldValue;
  totalGross?: NumberFieldValue;
  totalNet?: NumberFieldValue;
  rcRate?: NumberFieldValue;
  rcNet?: NumberFieldValue;
  notes1?: StringFieldValue;
  notes2?: StringFieldValue;
  notes3?: StringFieldValue;
  notes4?: StringFieldValue;
  notes5?: StringFieldValue;
  notes6?: StringFieldValue;
  extenref?: NumberFieldValue;
  paymentCode?: StringFieldValue;
  paydefref?: NumberFieldValue;
  printCounter?: NumberFieldValue;
  printDate?: StringFieldValue;
  division?: NumberFieldValue;
  department?: NumberFieldValue;
  orderStatus?: NumberFieldValue;
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
  salesmanCode?: StringFieldValue;
  salesmanref?: NumberFieldValue;
  shipmentType?: StringFieldValue;
  shippingAgent?: StringFieldValue;
  currselTotal?: NumberFieldValue;
  currselDetails?: NumberFieldValue;
  tradingGrp?: StringFieldValue;
  textinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  factory?: NumberFieldValue;
  transactions?: DateFieldValue;
  xbufs?: StringFieldValue;
  xcnt?: NumberFieldValue;
  docals?: StringFieldValue;
  itext?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  custOrdNo?: StringFieldValue;
  dlvClient?: NumberFieldValue;
  docTrackingNr?: StringFieldValue;
  cancelled?: NumberFieldValue;
  orglogoid?: StringFieldValue;
  offerReference?: NumberFieldValue;
  offaltReference?: NumberFieldValue;
  offerTyp?: NumberFieldValue;
  offerAltnr?: NumberFieldValue;
  currTransactin?: NumberFieldValue;
  tcRate?: NumberFieldValue;
  tcNet?: NumberFieldValue;
  withPayment?: NumberFieldValue;
  paymentList?: DateFieldValue;
  projectCode?: StringFieldValue;
  projectref?: NumberFieldValue;
  defnfldslist?: DateFieldValue;
  wflowcardref?: NumberFieldValue;
  opStatus?: NumberFieldValue;
  updCurr?: NumberFieldValue;
  updTrcurr?: NumberFieldValue;
  guarantor1Fichetype?: NumberFieldValue;
  guarantor1Nr?: NumberFieldValue;
  guarantor1Namesurname?: StringFieldValue;
  guarantor1Addr1?: StringFieldValue;
  guarantor1Addr2?: StringFieldValue;
  guarantor1District?: StringFieldValue;
  guarantor1Town?: StringFieldValue;
  guarantor1City?: StringFieldValue;
  guarantor1Country?: StringFieldValue;
  guarantor1Postcode?: StringFieldValue;
  guarantor1Telnr1?: StringFieldValue;
  guarantor1Telnr2?: StringFieldValue;
  guarantor1Faxnr?: StringFieldValue;
  guarantor1Siteid?: NumberFieldValue;
  guarantor1Orglogicref?: NumberFieldValue;
  guarantor1Clientref?: NumberFieldValue;
  guarantor1Taxnr?: StringFieldValue;
  guarantor1Taxoffice?: StringFieldValue;
  guarantor1Taxxoffcode?: StringFieldValue;
  guarantor1Bankbranchcode?: StringFieldValue;
  guarantor1Bankbranchs?: StringFieldValue;
  guarantor1Bankaccounts?: StringFieldValue;
  guarantor2Fichetype?: NumberFieldValue;
  guarantor2Nr?: NumberFieldValue;
  guarantor2Namesurname?: StringFieldValue;
  guarantor2Addr1?: StringFieldValue;
  guarantor2Addr2?: StringFieldValue;
  guarantor2District?: StringFieldValue;
  guarantor2Town?: StringFieldValue;
  guarantor2City?: StringFieldValue;
  guarantor2Country?: StringFieldValue;
  guarantor2Postcode?: StringFieldValue;
  guarantor2Telnr1?: StringFieldValue;
  guarantor2Telnr2?: StringFieldValue;
  guarantor2Faxnr?: StringFieldValue;
  guarantor2Siteid?: NumberFieldValue;
  guarantor2Orglogicref?: NumberFieldValue;
  guarantor2Clientref?: NumberFieldValue;
  guarantor2Taxnr?: StringFieldValue;
  guarantor2Taxoffice?: StringFieldValue;
  guarantor2Taxoffcode?: StringFieldValue;
  guarantor2Bankbranchcode?: StringFieldValue;
  guarantor2Bankbranchs?: StringFieldValue;
  guarantor2Bankaccounts?: StringFieldValue;
  affectCollatrl?: NumberFieldValue;
  demandpeggings?: DateFieldValue;
  totalAddTax?: NumberFieldValue;
  totalExAddTax?: NumberFieldValue;
  affectRisk?: NumberFieldValue;
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
  paymentType?: NumberFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  guid?: StringFieldValue;
  fcStatusName?: StringFieldValue;
  deductionpart1?: NumberFieldValue;
  deductionpart2?: NumberFieldValue;
  globalId?: StringFieldValue;
  cancelAutoCampProc?: NumberFieldValue;
  campaignCode?: StringFieldValue;
  applyArpDiscount?: NumberFieldValue;
  devir?: NumberFieldValue;
  deliveryCode?: StringFieldValue;
  originalDate?: StringFieldValue;
  activityRenting?: NumberFieldValue;
  addDiscountsVat?: NumberFieldValue;
  einvoiceType?: NumberFieldValue;
  einvoice?: NumberFieldValue;
  einvoiceProfileid?: NumberFieldValue;
  einvoiceStatus?: NumberFieldValue;
  einvoiceStartdate?: StringFieldValue;
  einvoiceEnddate?: StringFieldValue;
  einvoiceDescription?: StringFieldValue;
  einvoiceDuration?: NumberFieldValue;
  einvoiceDurationtype?: NumberFieldValue;
  einvoiceTaxtype?: NumberFieldValue;
  einvoiceTuname?: StringFieldValue;
  einvoiceTusurname?: StringFieldValue;
  einvoiceTupassportno?: StringFieldValue;
  einvoiceTupassportdate?: StringFieldValue;
  einvoiceTunationality?: StringFieldValue;
  einvoiceTunationalityname?: StringFieldValue;
  einvoiceTubankname?: StringFieldValue;
  einvoiceTubnaccountno?: StringFieldValue;
  einvoiceTubnbranch?: StringFieldValue;
  einvoiceTupaymentnote?: StringFieldValue;
  einvoiceTubncurr?: StringFieldValue;
  einvoiceAddr1?: StringFieldValue;
  einvoiceAddr2?: StringFieldValue;
  einvoiceCitycode?: StringFieldValue;
  einvoiceCity?: StringFieldValue;
  einvoiceCountrycode?: StringFieldValue;
  einvoiceCountry?: StringFieldValue;
  einvoiceDistrictcode?: StringFieldValue;
  einvoiceDistrict?: StringFieldValue;
  einvoiceTowncode?: StringFieldValue;
  einvoiceTown?: StringFieldValue;
  einvoiceExittown?: StringFieldValue;
  einvoiceExitgatecode?: StringFieldValue;
  einvoiceExitgate?: StringFieldValue;
  einvoiceAgencycode?: StringFieldValue;
  einvoiceAgency?: StringFieldValue;
  einvoiceExitcountrycode?: StringFieldValue;
  einvoiceExitcountry?: StringFieldValue;
  einvoiceTransporttyp?: NumberFieldValue;
  einvoiceTransporttypcode?: StringFieldValue;
  einvoiceTransporttypname?: StringFieldValue;
  einvoiceExitdate?: StringFieldValue;
  einvoiceExittime?: NumberFieldValue;
  einvoiceFlightnumber?: StringFieldValue;
  einvoiceGuide?: StringFieldValue;
  einvoiceTuretprice?: NumberFieldValue;
  einvoiceTuretpricestr?: StringFieldValue;
  einvoiceSendeinvcustom?: NumberFieldValue;
  einvoiceEinvoicetypsgk?: NumberFieldValue;
  einvoiceTaxpayercode?: StringFieldValue;
  einvoiceTaxpayername?: StringFieldValue;
  einvoiceDocumentnosgk?: StringFieldValue;
  einvoiceDrivername1?: StringFieldValue;
  einvoiceDriversurname1?: StringFieldValue;
  einvoiceDrivertckno1?: StringFieldValue;
  einvoicePlatenum1?: StringFieldValue;
  einvoiceChassisnum1?: StringFieldValue;
  einvoiceDrivername2?: StringFieldValue;
  einvoiceDriversurname2?: StringFieldValue;
  einvoiceDrivertckno2?: StringFieldValue;
  einvoicePlatenum2?: StringFieldValue;
  einvoiceChassisnum2?: StringFieldValue;
  einvoiceDrivername3?: StringFieldValue;
  einvoiceDriversurname3?: StringFieldValue;
  einvoiceDrivertckno3?: StringFieldValue;
  einvoicePlatenum3?: StringFieldValue;
  einvoiceChassisnum3?: StringFieldValue;
  einvoiceChaindelivery?: NumberFieldValue;
  einvoiceSellerclientref?: NumberFieldValue;
  einvoiceSellerclientcode?: StringFieldValue;
  einvoiceTaxnrtopay?: StringFieldValue;
  publicbnaccref?: NumberFieldValue;
  publicBnaccCode?: StringFieldValue;
  publicBnaccIban?: StringFieldValue;
  publicBnaccCurrency?: NumberFieldValue;
  acceptEinvPublic?: NumberFieldValue;
  einsteadOfDispatch?: NumberFieldValue;
  vatexceptCode?: StringFieldValue;
  vatexceptReason?: StringFieldValue;
  addtaxexceptCode?: StringFieldValue;
  addtaxexceptReason?: StringFieldValue;
  taxFreeCheck?: NumberFieldValue;
  earchivedetrLogicalref?: NumberFieldValue;
  earchivedetrOrdfcref?: NumberFieldValue;
  earchivedetrInstallmentnumber?: StringFieldValue;
  earchivedetrEarchivestatus?: NumberFieldValue;
  earchivedetrEarchivestatusold?: NumberFieldValue;
  earchivedetrSendmod?: NumberFieldValue;
  earchivedetrIntsalesaddr?: StringFieldValue;
  earchivedetrIntpaymentdesc?: StringFieldValue;
  earchivedetrIntpaymenttype?: NumberFieldValue;
  earchivedetrIntpaymentagent?: StringFieldValue;
  earchivedetrIntpaymentdateorg?: NumberFieldValue;
  earchivedetrIntpaymentdate?: StringFieldValue;
  earchivedetrOckserialnumber?: StringFieldValue;
  earchivedetrOckznumber?: StringFieldValue;
  earchivedetrOckfichenumber?: StringFieldValue;
  earchivedetrOckfichedateorg?: NumberFieldValue;
  earchivedetrOckfichedate?: StringFieldValue;
  earchivedetrIscomp?: NumberFieldValue;
  earchivedetrTaxnr?: StringFieldValue;
  earchivedetrTckno?: StringFieldValue;
  earchivedetrName?: StringFieldValue;
  earchivedetrSurname?: StringFieldValue;
  earchivedetrDefinition?: StringFieldValue;
  earchivedetrAddr1?: StringFieldValue;
  earchivedetrAddr2?: StringFieldValue;
  earchivedetrCitycode?: StringFieldValue;
  earchivedetrCity?: StringFieldValue;
  earchivedetrCountrycode?: StringFieldValue;
  earchivedetrCountry?: StringFieldValue;
  earchivedetrPostcode?: StringFieldValue;
  earchivedetrDistrictcode?: StringFieldValue;
  earchivedetrDistrict?: StringFieldValue;
  earchivedetrTowncode?: StringFieldValue;
  earchivedetrTown?: StringFieldValue;
  earchivedetrEmailaddr?: StringFieldValue;
  earchivedetrIspercurr?: NumberFieldValue;
  earchivedetrInsteadofdesp?: NumberFieldValue;
  earchivedetrTaxoffice?: StringFieldValue;
  earchivedetrTelcodes1?: StringFieldValue;
  earchivedetrTelcodes2?: StringFieldValue;
  earchivedetrTelnrs1?: StringFieldValue;
  earchivedetrTelnrs2?: StringFieldValue;
  earchivedetrDrivername1?: StringFieldValue;
  earchivedetrDriversurname1?: StringFieldValue;
  earchivedetrDrivertckno1?: StringFieldValue;
  earchivedetrPlatenum1?: StringFieldValue;
  earchivedetrChassisnum1?: StringFieldValue;
  earchivedetrDrivername2?: StringFieldValue;
  earchivedetrDriversurname2?: StringFieldValue;
  earchivedetrDrivertckno2?: StringFieldValue;
  earchivedetrPlatenum2?: StringFieldValue;
  earchivedetrChassisnum2?: StringFieldValue;
  earchivedetrDrivername3?: StringFieldValue;
  earchivedetrDriversurname3?: StringFieldValue;
  earchivedetrDrivertckno3?: StringFieldValue;
  earchivedetrPlatenum3?: StringFieldValue;
  earchivedetrChassisnum3?: StringFieldValue;
  earchivedetrChaindelivery?: NumberFieldValue;
  earchivedetrSellerclientref?: NumberFieldValue;
  earchivedetrSellerclientcode?: StringFieldValue;
  labelList?: DateFieldValue;
  payerid?: StringFieldValue;
  payertype?: NumberFieldValue;
  cantCreDeduct?: NumberFieldValue;
  commitment?: NumberFieldValue;
  cmbegdate?: StringFieldValue;
  cmenddate?: StringFieldValue;
  cmexp?: StringFieldValue;
  cmtype?: NumberFieldValue;
  cmamount?: NumberFieldValue;
  cmtotal?: NumberFieldValue;
  cmshippedamount?: NumberFieldValue;
  cmshippedtotal?: NumberFieldValue;
  cmpaymenttotal?: NumberFieldValue;
  cmprice?: NumberFieldValue;
  einvoiceTelcode?: StringFieldValue;
  einvoiceTelnr?: StringFieldValue;
  cmpaidtotal?: NumberFieldValue;
  cmcandeduct?: NumberFieldValue;
  cmdeductpart1?: NumberFieldValue;
  cmdeductpart2?: NumberFieldValue;
  cmvat?: NumberFieldValue;
  cmdevirodemebakiye?: NumberFieldValue;
  earchivedetrEnrgplatenum?: StringFieldValue;
  earchivedetrEnrgcarid?: StringFieldValue;
  earchivedetrChrgbegdate?: StringFieldValue;
  earchivedetrChrgbegtime?: NumberFieldValue;
  earchivedetrChrgenddate?: StringFieldValue;
  earchivedetrChrgendtime?: NumberFieldValue;
  earchivedetrEsuraporid?: StringFieldValue;
  earchivedetrEsuraporiddate?: StringFieldValue;
  einvoiceEnrgplatenum?: StringFieldValue;
  einvoiceEnrgcarid?: StringFieldValue;
  einvoiceChrgbegdate?: StringFieldValue;
  einvoiceChrgbegtime?: NumberFieldValue;
  einvoiceChrgenddate?: StringFieldValue;
  einvoiceChrgendtime?: NumberFieldValue;
  einvoiceEsuraporid?: StringFieldValue;
  payermicro?: NumberFieldValue;
  contactref?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for PurchaseOrders entities
 */
export interface PurchaseOrdersAnalytics {
  total: number;
  // Add PurchaseOrders-specific analytics fields
}
