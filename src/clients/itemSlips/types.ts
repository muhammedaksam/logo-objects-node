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
 * Interface for RSCollection[RS_MatTransXML]
 */
export interface RscollectionrsMattransxml {
  Meta?: Meta;
  items?: RsMattransxml[];
}

/**
 * Interface for RSCollection[RS_FARegTrnXML]
 */
export interface RscollectionrsFaregtrnxml {
  Meta?: Meta;
  items?: RsFaregtrnxml[];
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
 * Interface for RSCollection[RS_DetMatTrXML]
 */
export interface RscollectionrsDetmattrxml {
  Meta?: Meta;
  items?: RsDetmattrxml[];
}

/**
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
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
 * RsMattransxml transaction line item
 *
 * Represents individual transaction records within a ItemSlips collection.
 */
export interface RsMattransxml extends BaseEntity {
  ITEM_CODE?: string;
  ITEM_REFERENCE?: number;
  LINE_TYPE?: number;
  PREVLINEREF?: number;
  PREVLINENO?: number;
  DETLINE?: number;
  TYPE?: number;
  DATE?: string;
  TIME?: number;
  DETAIL_LEVEL?: number;
  DISCEXP_CALC?: number;
  PORDER_CODE?: string;
  PRORD_SITE?: number;
  PRORD_REFERENCE?: number;
  PORDER_SLP_INRESERVE?: number;
  PRORD_TYPE?: number;
  QPROD_TYPE?: number;
  QPROD_ITEM_TYPE?: number;
  SUBCONTORDERREF?: number;
  SCORDER_NUMBER?: string;
  SOURCETYPE?: number;
  SOURCEINDEX?: number;
  SOURCECOSTGRP?: number;
  SOURCEWSREF?: number;
  SOURCEPOLN_REFERENCE?: number;
  DESTTYPE?: number;
  DESTINDEX?: number;
  DESTCOSTGRP?: number;
  DESTWSREF?: number;
  DESTPOLN_REFERENCE?: number;
  FACTORYNR?: number;
  IOCODE?: number;
  STFICHEREF?: number;
  LINE_NUMBER?: number;
  INVOICEREF?: number;
  INVOICELNNO?: number;
  CLIENTREF?: number;
  ORDER_VOUCH_NR?: string;
  ORDTRANSREF?: number;
  ORDFICHEREF?: number;
  GL_CODE1?: string;
  OHP_CODE1?: string;
  CENTERREF?: number;
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
  PAYMENT_CODE?: string;
  PAYDEFREF?: number;
  AUXIL_CODE?: string;
  DELVRY_CODE?: string;
  QUANTITY?: number;
  PRICE?: number;
  TOTAL?: number;
  NET_TOTAL?: number;
  CURR_PRICE?: number;
  PC_PRICE?: number;
  CURR_TRANS?: number;
  TC_XRATE?: number;
  RC_XRATE?: number;
  TCOST_DISTR?: number;
  DISCOUNT_DISTR?: number;
  EXPENSE_DISTR?: number;
  PROMOTION_DISTR?: number;
  DISCOUNT_PERC?: number;
  DESCRIPTION?: string;
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
  PLNAMOUNT?: number;
  VAT_INCLUDED?: number;
  VAT_PERC?: number;
  VAT_AMNT?: number;
  VAT_BASE?: number;
  BILLEDITEM?: number;
  BILLED?: number;
  COMPOSITE?: number;
  RET_COST_TYPE?: number;
  SOURCELINK?: number;
  RET_COST?: number;
  CURR_RET_COST?: number;
  OUT_COST?: number;
  CURR_OUT_COST?: number;
  RET_QUANTITY?: number;
  FAREG_CODE?: string;
  FAREGREF?: number;
  FA_STATUS?: number;
  CANCELLED?: number;
  DISTADDEXP?: number;
  FADACCREF?: number;
  FADCENTERREF?: number;
  FARACCREF?: number;
  FARCENTERREF?: number;
  PRICE_ADJUSTMENT?: number;
  COST_ADJUSTMENT_PR?: number;
  NEGPRC_ADJUSTMENT?: number;
  LPRODSTAT?: number;
  PRDEXPTOTAL?: number;
  RC_PRJADJUST?: number;
  RC_COSTADJUST?: number;
  SALESMANREF?: number;
  FAPLACCREF?: number;
  FAPLCENTERREF?: number;
  OUTPUT_IDCODE?: string;
  DREF?: number;
  COST_RATE?: number;
  XPRICEUPD?: number;
  XPRICE?: number;
  XREPRATE?: number;
  DISTCOEF?: number;
  QC_STATUS?: number;
  FA_INFO?: RscollectionrsFaregtrnxml;
  SL_DETAILS?: RscollectionrsSlloctrnxml;
  SLDELLIST?: string;
  DETAILS?: RscollectionrsDetmattrxml;
  DETDELLIST?: string;
  QCLIST?: string;
  VEND_COMM?: number;
  PREV_OUT_COST?: number;
  COSTOFSALEACCREF?: number;
  COST_OF_SALE_GL_CODE?: string;
  PURCHACCREF?: number;
  PURCH_GL_CODE?: string;
  COSTOFSALECNTREF?: number;
  COST_OF_SALE_OHP_CODE?: string;
  PURCHCENTREF?: number;
  PURCH_OHP_CODE?: string;
  PREV_OUT_COST_CURR?: number;
  EU_VAT_AMOUNT?: number;
  EU_VAT_STATUS?: number;
  PR_RATE?: number;
  ADD_TAX_RATE?: number;
  ADD_TAX_CONV_FACT?: number;
  ADD_TAX_AMOUNT?: number;
  ADD_TAX_PRCOST?: number;
  ADD_TAX_RETCOST?: number;
  ADD_TAX_RETCOSTCURR?: number;
  GROSS_U_INFO1?: number;
  GROSS_U_INFO2?: number;
  ADD_TAX_PRCOSTCURR?: number;
  ADD_TAX_ACCREF?: number;
  GL_CODE5?: string;
  ADD_TAX_CENTERREF?: number;
  OHP_CODE5?: string;
  ADD_TAX_AMNT_IS_UPD?: number;
  PLN_STTRANS_PER_NR?: number;
  PORD_CLS_PLN_AMNT?: number;
  PLN_STTRANS_REFERENCE?: number;
  PLN_AMOUNT?: number;
  INFLATION_IDX?: number;
  PRDORD_TOT_COEF?: number;
  DEMPEGGED_AMNT?: number;
  STDUNIT_COST?: number;
  STDRPUNIT_COST?: number;
  INFLDX?: number;
  COSTDIFF_ACCREF?: number;
  COSTDIFF_ACCCODE?: string;
  COSTDIFF_CENREF?: number;
  COSTDIFF_CENCODE?: string;
  ADDTAXDISC_AMNT?: number;
  ORGLOGOID?: string;
  EXIM_FICHENO?: string;
  EXIM_FILELINENR?: number;
  ITEXT?: string;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  ORGLINKREF?: number;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  PORDSYMOUTLN?: number;
  PRCLISTREF?: number;
  EXADDTAXRATE?: number;
  EXADDTAXCONVF?: number;
  EXADDTAXACODE?: string;
  EXADDTAXAREF?: number;
  EXADDTAXCCODE?: string;
  EXADDTAXCREF?: number;
  OTHRADDTAXACODE?: string;
  OTHRADDTAXAREF?: number;
  OTHRADDTAXCCODE?: string;
  OTHRADDTAXCREF?: number;
  EXADDTAXAMNT?: number;
  AFFECT_COLLATRL?: number;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  CANCONFIG?: number;
  VCHARLIST?: string;
  EDT_PRICE?: number;
  EDT_CURR?: number;
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
  RELTRANSLNREF?: number;
  FROMTRANSFER?: number;
  MAIN_MT_REFERENCE?: number;
  MAIN_MT_SITEID?: number;
  PRCLISTCODE?: string;
  PRCLISTTYPE?: number;
  FAPL_GL_CODE?: string;
  FAPL_OHP_CODE?: string;
  FAPROFITACCREF?: number;
  FAPROFIT_GL_CODE?: string;
  FAPROFITCENTREF?: number;
  FAPROFIT_OHP_CODE?: string;
  FALOSSACCREF?: number;
  FALOSS_GL_CODE?: string;
  FALOSSCENTREF?: number;
  FALOSS_OHP_CODE?: string;
  GLOBAL_ID?: string;
  AUXIL_CODE2?: string;
  INF_DATE?: string;
  DEST_STATUS?: number;
  REGTYPREF?: number;
  REG_TYPE_CODE?: string;
  CPA_CODE?: string;
  GTIP_CODE?: string;
  PUBLICCOUNTRYREF?: number;
  PUBLIC_COUNTRY_CODE?: string;
  PUBLIC_COUNTRY_NAME?: string;
  FUTURE_MONTH_COUNT?: number;
  FUTURE_MONTH_BEGDATE?: string;
  FUTURE_MONTH_ENDDATE?: string;
  QC_TRANSFER_REF?: number;
  QC_TRANSFER_AMOUNT?: number;
  FA_KKEG_AMOUNT?: number;
  KKEGACCREF?: number;
  KKEG_GL_CODE?: string;
  KKEGCENREF?: number;
  KKEG_OHP_CODE?: string;
  KKEGVATACCREF?: number;
  KKEG_VAT_GL_CODE?: string;
  KKEGVATCENREF?: number;
  KKEG_VAT_OHP_CODE?: string;
  EXPRACCREF?: number;
  EXPR_GL_CODE?: string;
  EXPRCNTRREF?: number;
  EXPR_OHP_CODE?: string;
  ADDTAXVATACCREF?: number;
  ADD_TAX_VAT_ACC_CODE?: string;
  ADDTAXVATCENREF?: number;
  ADD_TAX_VAT_OHP_CODE?: string;
  MIDDLEMAN_EXP_TYPE?: number;
  MARKING_TAGNO?: string;
  OWNER?: string;
  TCK_TAXNR?: string;
  EXP_DAYS?: number;
  FROMINTEGTYPE?: number;
  FROMINTEGREF?: number;
  TAXFREEACCREF?: number;
  TAXFREECNTRREF?: number;
  EISRVDSTADDTAXINC?: number;
  QCTRANSFERREF2?: number;
  QCTRANSFERAMNT2?: number;
  ITMDISC?: number;
  MERGED_COUNT?: number;
  ADD_TAX_REF?: number;
  ADD_TAX_EFFECT_KDV?: number;
  ADD_TAX_INLNNET?: number;
  ORDFICHECMREF?: number;
  PURCHACCREFINFL?: number;
  PURCHCENTREFINFL?: number;
  COSACCREFINFL?: number;
  COSCNTREFINFL?: number;
  PROUTCOSTINFLDIFF?: number;
  PROUTCOSTCRINFLDIFF?: number;
  ORGPRICE?: number;
  RETSOURCELINK?: number;
  DIIBLINECODE?: string;
}

/**
 * RsFaregtrnxml transaction line item
 *
 * Represents individual transaction records within a ItemSlips collection.
 */
export interface RsFaregtrnxml extends BaseEntity {
  CODE?: string;
  DIVISION?: number;
  DEPARTMENT?: number;
  SOURCE_WH?: number;
  TRANSFER?: number;
  CRDREF?: number;
  FICHEREF?: number;
  DATE_ACQUIRED?: string;
  DATE_DEPRSTART?: string;
  QUANTITY?: number;
  QUANTITY_OUT?: number;
  ACQ_VALUE?: number;
  VAT_AMOUNT?: number;
  VAT_POST_DUR?: number;
  DEPR_RATE?: number;
  DEPR_DUR?: number;
  DEPR_TYPE?: number;
  REVALUATE?: number;
  REV_DEPR?: number;
  PARTIAL_DEPR?: number;
  CANCELLED?: number;
  RC_XRATE?: number;
  RC_ACQ_VALUE?: number;
  TOTAL_EXPENSES?: number;
  ACCUM_DEPR?: number;
  ACCUM_REVAL?: number;
  RC_TOTAL_EXPN?: number;
  RC_ACCUM_DEPR?: number;
  RC_ACCUM_REVAL?: number;
  DEPR_TYPE2?: number;
  DEPR_RATE2?: number;
  DEPR_DUR2?: number;
  REVALUATE2?: number;
  REV_DEPR2?: number;
  OPEN_REVAL?: number;
  OPEN_DEPR?: number;
  OPEN_REVDEPR?: number;
  RC_OPENREV?: number;
  RC_OPENDEPR?: number;
  RC_OPENREVDEPR?: number;
  OPEN_REVAL2?: number;
  OPEN_DEPR2?: number;
  OPEN_REVDEPR2?: number;
  RC_OPENREV2?: number;
  RC_OPENDEPR2?: number;
  RC_OPENREVDEPR2?: number;
  DATE_DEPRSTART2?: number;
  PART_DEP2?: number;
  DIFF_PRICE?: number;
  DIFFREP_PRICE?: number;
  DISC_INCL?: number;
  DISC_RATE?: number;
  ANNUAL_DIST_VAL?: number;
  INF_BASED_VALUE?: number;
  REGTYPCODE?: string;
  REGTYPDEF?: string;
  REGEXPENSCODE?: string;
  REGEXPENSDEF?: string;
  APPROVE?: number;
  APPROVE_DATE?: string;
  OTV_AMOUNT?: number;
  GUID?: string;
  FIGS_TOT_COST?: number;
  FIGS_TOT_COSTX?: number;
}

/**
 * RsSlloctrnxml transaction line item
 *
 * Represents individual transaction records within a ItemSlips collection.
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
 * Represents individual transaction records within a ItemSlips collection.
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
 * Represents individual transaction records within a ItemSlips collection.
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
 * RsDetmattrxml transaction line item
 *
 * Represents individual transaction records within a ItemSlips collection.
 */
export interface RsDetmattrxml extends BaseEntity {
  ITEM_CODE?: string;
  ITEM_REFERENCE?: number;
  LINE_TYPE?: number;
  PREVLINEREF?: number;
  PREVLINENO?: number;
  DETLINE?: number;
  TYPE?: number;
  DATE?: string;
  TIME?: number;
  DETAIL_LEVEL?: number;
  DISCEXP_CALC?: number;
  PORDER_CODE?: string;
  PRODORDERREF?: number;
  QPROD_ITEM_TYPE?: number;
  SOURCETYPE?: number;
  SOURCEINDEX?: number;
  SOURCECOSTGRP?: number;
  SOURCEWSREF?: number;
  SOURCEPOLNREF?: number;
  DESTTYPE?: number;
  DESTINDEX?: number;
  DESTCOSTGRP?: number;
  DESTWSREF?: number;
  DESTPOLNREF?: number;
  FACTORYNR?: number;
  IOCODE?: number;
  STFICHEREF?: number;
  LINE_NUMBER?: number;
  INVOICEREF?: number;
  INVOICELNNO?: number;
  CLIENTREF?: number;
  ORDER_VOUCH_NR?: string;
  ORDER_REFERENCE?: number;
  ORDER_SITE?: number;
  GL_CODE1?: string;
  OHP_CODE1?: string;
  CENTERREF?: number;
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
  PAYMENT_CODE?: string;
  PAYDEFREF?: number;
  AUXIL_CODE?: string;
  DELVRY_CODE?: string;
  QUANTITY?: number;
  PRICE?: number;
  TOTAL?: number;
  NET_TOTAL?: number;
  CURR_PRICE?: number;
  PC_PRICE?: number;
  CURR_TRANS?: number;
  TC_XRATE?: number;
  RC_XRATE?: number;
  TCOST_DISTR?: number;
  DISCOUNT_DISTR?: number;
  EXPENSE_DISTR?: number;
  PROMOTION_DISTR?: number;
  DISCOUNT_PERC?: number;
  DESCRIPTION?: string;
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
  PLNAMOUNT?: number;
  VAT_INCLUDED?: number;
  VAT_PERC?: number;
  VAT_AMNT?: number;
  VAT_BASE?: number;
  BILLEDITEM?: number;
  BILLED?: number;
  COMPOSITE?: number;
  RET_COST_TYPE?: number;
  SOURCE_SITE?: number;
  SOURCE_REFERENCE?: number;
  RET_COST?: number;
  CURR_RET_COST?: number;
  OUT_COST?: number;
  CURR_OUT_COST?: number;
  RET_QUANTITY?: number;
  FAREG_CODE?: string;
  FAREGREF?: number;
  FA_STATUS?: number;
  CANCELLED?: number;
  DISTADDEXP?: number;
  FADACCREF?: number;
  FADCENTERREF?: number;
  FARACCREF?: number;
  FARCENTERREF?: number;
  FAPROFITACCREF?: number;
  FAPROFIT_GL_CODE?: string;
  FAPROFITCENTREF?: number;
  FAPROFIT_OHP_CODE?: string;
  FALOSSACCREF?: number;
  FALOSS_GL_CODE?: string;
  FALOSSCENTREF?: number;
  FALOSS_OHP_CODE?: string;
  PRICE_ADJUSTMENT?: number;
  COST_ADJUSTMENT_PR?: number;
  NEGPRC_ADJUSTMENT?: number;
  LPRODSTAT?: number;
  PRDEXPTOTAL?: number;
  RC_PRJADJUST?: number;
  RC_COSTADJUST?: number;
  SALESMANREF?: number;
  FAPLACCREF?: number;
  FAPLCENTERREF?: number;
  OUTPUT_IDCODE?: string;
  DREF?: number;
  COST_RATE?: number;
  XPRICEUPD?: number;
  XPRICE?: number;
  XREPRATE?: number;
  DISTCOEF?: number;
  QC_STATUS?: number;
  FA_INFO?: RscollectionrsFaregtrnxml;
  SL_DETAILS?: RscollectionrsSlloctrnxml;
  SLDELLIST?: string;
  DETLIST?: string;
  DETDELLIST?: string;
  QCLIST?: string;
  CMPG_LINE_REF?: number;
  VEND_COMM?: number;
  PREV_OUT_COST?: number;
  COSTOFSALEACCREF?: number;
  COST_OF_SALE_GL_CODE?: string;
  PURCHACCREF?: number;
  PURCH_GL_CODE?: string;
  COSTOFSALECNTREF?: number;
  COST_OF_SALE_OHP_CODE?: string;
  PURCHCENTREF?: number;
  PURCH_OHP_CODE?: string;
  PREV_OUT_COST_CURR?: number;
  EU_VAT_AMOUNT?: number;
  EU_VAT_STATUS?: number;
  PR_RATE?: number;
  ADD_TAX_RATE?: number;
  ADD_TAX_CONV_FACT?: number;
  ADD_TAX_AMOUNT?: number;
  ADD_TAX_PRCOST?: number;
  ADD_TAX_RETCOST?: number;
  ADD_TAX_RETCOSTCURR?: number;
  GROSS_U_INFO1?: number;
  GROSS_U_INFO2?: number;
  ADD_TAX_PRCOSTCURR?: number;
  ADD_TAX_ACCREF?: number;
  GL_CODE5?: string;
  ADD_TAX_CENTERREF?: number;
  OHP_CODE5?: string;
  ADD_TAX_AMNT_IS_UPD?: number;
  PLN_STTRANS_PER_NR?: number;
  PORD_CLS_PLN_AMNT?: number;
  PLN_STTRANS_REFERENCE?: number;
  PLN_AMOUNT?: number;
  INFLATION_IDX?: number;
  PRDORD_TOT_COEFF?: number;
  DEMPEGGED_AMNT?: number;
  STDUNIT_COST?: number;
  STDRPUNIT_COST?: number;
  INFLDX?: number;
  COSTDIFF_ACCREF?: number;
  COSTDIFF_ACCCODE?: string;
  COSTDIFF_CENREF?: number;
  COSTDIFF_CENCODE?: string;
  ADDTAXDISC_AMNT?: number;
  ORGLOGOID?: string;
  EXIM_FICHENO?: string;
  EXIM_FILELINENR?: number;
  ITEXT?: string;
  MONTH?: number;
  YEAR?: number;
  PORDSYMOUTLN?: number;
  PRCLISTREF?: number;
  EXADDTAXRATE?: number;
  EXADDTAXCONVF?: number;
  EXADDTAXACODE?: string;
  EXADDTAXAREF?: number;
  EXADDTAXCCODE?: string;
  EXADDTAXCREF?: number;
  OTHRADDTAXACODE?: string;
  OTHRADDTAXAREF?: number;
  OTHRADDTAXCCODE?: string;
  OTHRADDTAXCREF?: number;
  EXADDTAXAMNT?: number;
  AFFECT_COLLATRL?: number;
  EDT_PRICE?: number;
  EDT_CURR?: number;
  ADD_TAX_EFFECT_KDV?: number;
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
  ADDTAX_GLOBAL_CODE?: string;
  UNIT_GLOBAL_CODE?: string;
  PAYPL_GLOBAL_CODE?: string;
  PRCURR_GLOBAL_CODE?: string;
  TRCURR_GLOBAL_CODE?: string;
  EDTCURR_GLOBAL_CODE?: string;
  PRCLISTCODE?: string;
  PRCLISTTYPE?: number;
  ADDTAXEXCEPT_REASON?: string;
  ADDTAXEXCEPT_CODE?: string;
  GLOBAL_ID?: string;
  DEDUCTION_PART1?: number;
  DEDUCTION_PART2?: number;
  GUID?: string;
  INF_DATE?: string;
  DEST_STATUS?: number;
  REGTYPREF?: number;
  REG_TYPE_CODE?: string;
  CPA_CODE?: string;
  GTIP_CODE?: string;
  PUBLICCOUNTRYREF?: number;
  PUBLIC_COUNTRY_CODE?: string;
  PUBLIC_COUNTRY_NAME?: string;
  FUTURE_MONTH_COUNT?: number;
  FUTURE_MONTH_BEGDATE?: string;
  FUTURE_MONTH_ENDDATE?: string;
  QC_TRANSFER_REF?: number;
  QC_TRANSFER_AMOUNT?: number;
  FA_KKEG_AMOUNT?: number;
  KKEGACCREF?: number;
  KKEG_GL_CODE?: string;
  KKEGCENREF?: number;
  KKEG_OHP_CODE?: string;
  KKEGVATACCREF?: number;
  KKEG_VAT_GL_CODE?: string;
  KKEGVATCENREF?: number;
  KKEG_VAT_OHP_CODE?: string;
  EXPRACCREF?: number;
  EXPR_GL_CODE?: string;
  EXPRCNTRREF?: number;
  EXPR_OHP_CODE?: string;
  ADDTAXVATACCREF?: number;
  ADD_TAX_VAT_ACC_CODE?: string;
  ADDTAXVATCENREF?: number;
  ADD_TAX_VAT_OHP_CODE?: string;
  MIDDLEMAN_EXP_TYPE?: number;
  MARKING_TAGNO?: string;
  OWNER?: string;
  TCK_TAXNR?: string;
  EXP_DAYS?: number;
  FROMINTEGTYPE?: number;
  FROMINTEGREF?: number;
  TAXFREEACCREF?: number;
  TAXFREECNTRREF?: number;
  EISRVDSTADDTAXINC?: number;
  QCTRANSFERREF2?: number;
  QCTRANSFERAMNT2?: number;
  ITMDISC?: number;
  ADD_TAX_REF?: number;
  ADD_TAX_INLNNET?: number;
  ORDFICHECMREF?: number;
  PURCHACCREFINFL?: number;
  PURCHCENTREFINFL?: number;
  COSACCREFINFL?: number;
  COSCNTREFINFL?: number;
  PROUTCOSTINFLDIFF?: number;
  PROUTCOSTCRINFLDIFF?: number;
  ORGPRICE?: number;
  RETSOURCELINK?: number;
  DIIBLINECODE?: string;
}

/**
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a ItemSlips collection.
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
 * DemandPeggings transaction line item
 *
 * Represents individual transaction records within a ItemSlips collection.
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
 * Represents individual transaction records within a ItemSlips collection.
 */
export interface RsLabelxml extends BaseEntity {
  NAME?: string;
  DEFINITION?: string;
  USER_TYPE?: number;
}

/**
 * ItemSlips entity interface based on swagger definition
 */
export interface ItemSlips extends BaseEntity {
  GROUP?: number;
  TYPE?: number;
  IO_TYPE?: number;
  NUMBER?: string;
  DOC_TRACK_NR?: string;
  DATE?: string;
  TIME?: number;
  DOC_NUMBER?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  CLIENTREF?: number;
  ARP_CODE?: string;
  PRODORDERREF?: number;
  PORDER_FICHE_NR?: string;
  PORDER_SLP_INRESERVE?: number;
  PORDER_TYPE?: number;
  QPROD_TYPE?: number;
  SOURCE_TYPE?: number;
  SOURCE_WH?: number;
  SOURCE_WSCODE?: string;
  SOURCEWSREF?: number;
  SPO_DETAIL_CODE?: string;
  SRCPOLN_REFERENCE?: number;
  SOURCE_COST_GRP?: number;
  DEST_TYPE?: number;
  DEST_WH?: number;
  DEST_WSCODE?: string;
  DESTWSREF?: number;
  DPO_DETAIL_CODE?: string;
  DESTPOLN_REFERENCE?: number;
  DEST_COST_GRP?: number;
  SOURCE_FACTORY_NR?: number;
  SOURCE_DIVISION_NR?: number;
  SOURCE_DEPARTMENT_NR?: number;
  DEST_DIVISION_NR?: number;
  DEST_DEPARTMENT_NR?: number;
  DEST_FACTORY?: number;
  PORDER_STATUS?: number;
  FY_TRANSFER?: number;
  CANCELLED?: number;
  GL_STATUS?: number;
  XRATE_STATUS?: number;
  ADD_DISCOUNTS?: number;
  TOTAL_DISCOUNTS?: number;
  TOTAL_DISCOUNTED?: number;
  ADD_EXPENSES?: number;
  TOTAL_EXPENSES?: number;
  TOTAL_DEPOSITED?: number;
  TOTAL_PROMOTIONS?: number;
  TOTAL_VAT?: number;
  TOTAL_GROSS?: number;
  TOTAL_NET?: number;
  FOOTNOTE1?: string;
  FOOTNOTE2?: string;
  FOOTNOTE3?: string;
  FOOTNOTE4?: string;
  RC_RATE?: number;
  RC_NET?: number;
  TC_CURR?: number;
  TC_RATE?: number;
  TC_NET?: number;
  PRINT_COUNTER?: number;
  PRINT_DATE?: string;
  FICHECNT?: number;
  ACCFICHEREF?: number;
  GL_CANCELLED?: number;
  SHIPMENT_TYPE?: string;
  SHIPPING_AGENT?: string;
  TRACK_NR?: string;
  CURRSEL_TOTALS?: number;
  CURRSEL_DETAILS?: number;
  TRADING_GRP?: string;
  TRANSACTIONS?: RscollectionrsMattransxml;
  DELLIST?: string;
  ACCLIST?: string;
  DELACCLIST?: string;
  ACCCODE?: string;
  CSTCODE?: string;
  XBUFS?: string;
  XCNT?: number;
  PFICHENO?: string;
  PFICHEDATE?: number;
  DOCALS?: string;
  ITEXT?: string;
  ADD_TAX_CALC?: number;
  TOTAL_ADD_TAX?: number;
  U_DOC_TRACKING_NR?: string;
  VA_ACCREF?: number;
  VA_ACCCODE?: string;
  VA_CENTERREF?: number;
  VA_CENTERCODE?: string;
  ORGLOGOID?: string;
  FROM_EXIM?: number;
  FRG_TYP_CODE?: string;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  TOTALEXADDTAX?: number;
  AFFECT_COLLATRL?: number;
  QPRODFCREF?: number;
  GRPFIRMTRANS?: number;
  DEMANDPEGGINGS?: Rscollectiondemandpeggings;
  LABEL_LIST?: RscollectionrsLabelxml;
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
  CONTROL_INFO?: number;
  APPROVE?: number;
  APPROVE_DATE?: string;
  ACC_FICHE_SITEID?: number;
  SHIPLOC_CODE?: string;
  SHIP_DATE?: string;
  SHIP_TIME?: number;
  DOC_DATE?: string;
  DOC_TIME?: number;
  AUTOFILL_SLDETAILS?: number;
  RELTRANSFCREF?: number;
  FROMTRANSFER?: number;
  STATUS?: number;
  GLOBAL_ID?: string;
  LOC_CONTROL_OFF?: number;
  CANCEL_AUTO_GL_PROC?: number;
  OFFER_REFERENCE?: number;
  DELIVERY_CODE?: string;
  DEST_STATUS?: number;
  CANCEL_EXP?: string;
  UNDO_EXP?: string;
  CANCEL_DATE?: string;
  CREATE_WHERE?: number;
  IS_OKC_FICHE?: number;
  GUID?: string;
  ESEND_DATE?: string;
  EBOOK_DOCDATE?: string;
  EBOOK_NODOCUMENT?: number;
  EBOOK_DOCNR?: string;
  EBOOK_DOCTYPE?: number;
  EBOOK_EXPLAIN?: string;
  EBOOK_PAYTYPE?: string;
  EBOOK_NOPAY?: number;
  EDESPATCH?: number;
  EDESPATCH_PROFILEID?: number;
  EDESPATCH_STATUS?: number;
  EINVOICE?: number;
  EINVOICE_TYPE?: number;
  EINVOICE_PROFILEID?: number;
  EINVOICE_STATUS?: number;
  EINVOICE_STARTDATE?: string;
  EINVOICE_ENDDATE?: string;
  EINVOICE_DESCRIPTION?: string;
  EINVOICE_DURATION?: number;
  EINVOICE_DURATIONTYPE?: number;
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
  EARCHIVEDETR_LOGICALREF?: number;
  EARCHIVEDETR_STREF?: number;
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
  FROMINTEGTYPE?: number;
  FROMINTEGREF?: number;
  EPRINTCNT?: number;
  CLNOTREFLAACCREF?: number;
  CLNOTREFLACNTRREF?: number;
  PAYERCRPROVIDER?: string;
  PAYERCRKEY?: string;
  FORENTRUST?: number;
  EINVOICE_TELCODE?: string;
  EINVOICE_TELNR?: string;
  ORDFICHECMREF?: number;
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
  EINVOICE_ESURAPORIDDATE?: string;
  ESENDTIME?: number;
}

/**
 * Union type of all ItemSlips field names for type-safe field selection and sorting
 */
export type ItemSlipsField =
  | 'INTERNAL_REFERENCE'
  | 'GROUP'
  | 'TYPE'
  | 'IO_TYPE'
  | 'NUMBER'
  | 'DOC_TRACK_NR'
  | 'DATE'
  | 'TIME'
  | 'DOC_NUMBER'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'CLIENTREF'
  | 'ARP_CODE'
  | 'PRODORDERREF'
  | 'PORDER_FICHE_NR'
  | 'PORDER_SLP_INRESERVE'
  | 'PORDER_TYPE'
  | 'QPROD_TYPE'
  | 'SOURCE_TYPE'
  | 'SOURCE_WH'
  | 'SOURCE_WSCODE'
  | 'SOURCEWSREF'
  | 'SPO_DETAIL_CODE'
  | 'SRCPOLN_REFERENCE'
  | 'SOURCE_COST_GRP'
  | 'DEST_TYPE'
  | 'DEST_WH'
  | 'DEST_WSCODE'
  | 'DESTWSREF'
  | 'DPO_DETAIL_CODE'
  | 'DESTPOLN_REFERENCE'
  | 'DEST_COST_GRP'
  | 'SOURCE_FACTORY_NR'
  | 'SOURCE_DIVISION_NR'
  | 'SOURCE_DEPARTMENT_NR'
  | 'DEST_DIVISION_NR'
  | 'DEST_DEPARTMENT_NR'
  | 'DEST_FACTORY'
  | 'PORDER_STATUS'
  | 'FY_TRANSFER'
  | 'CANCELLED'
  | 'GL_STATUS'
  | 'XRATE_STATUS'
  | 'ADD_DISCOUNTS'
  | 'TOTAL_DISCOUNTS'
  | 'TOTAL_DISCOUNTED'
  | 'ADD_EXPENSES'
  | 'TOTAL_EXPENSES'
  | 'TOTAL_DEPOSITED'
  | 'TOTAL_PROMOTIONS'
  | 'TOTAL_VAT'
  | 'TOTAL_GROSS'
  | 'TOTAL_NET'
  | 'FOOTNOTE1'
  | 'FOOTNOTE2'
  | 'FOOTNOTE3'
  | 'FOOTNOTE4'
  | 'RC_RATE'
  | 'RC_NET'
  | 'TC_CURR'
  | 'TC_RATE'
  | 'TC_NET'
  | 'PRINT_COUNTER'
  | 'PRINT_DATE'
  | 'FICHECNT'
  | 'ACCFICHEREF'
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
  | 'GL_CANCELLED'
  | 'SHIPMENT_TYPE'
  | 'SHIPPING_AGENT'
  | 'TRACK_NR'
  | 'CURRSEL_TOTALS'
  | 'CURRSEL_DETAILS'
  | 'TRADING_GRP'
  | 'TEXTINC'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'TRANSACTIONS'
  | 'DELLIST'
  | 'ACCLIST'
  | 'DELACCLIST'
  | 'ACCCODE'
  | 'CSTCODE'
  | 'XBUFS'
  | 'XCNT'
  | 'PFICHENO'
  | 'PFICHEDATE'
  | 'DOCALS'
  | 'ITEXT'
  | 'XML_ATTRIBUTE'
  | 'ADD_TAX_CALC'
  | 'TOTAL_ADD_TAX'
  | 'U_DOC_TRACKING_NR'
  | 'VA_ACCREF'
  | 'VA_ACCCODE'
  | 'VA_CENTERREF'
  | 'VA_CENTERCODE'
  | 'ORGLOGOID'
  | 'FROM_EXIM'
  | 'FRG_TYP_CODE'
  | 'PROJECT_CODE'
  | 'PROJECTREF'
  | 'DEFNFLDSLIST'
  | 'TOTALEXADDTAX'
  | 'AFFECT_COLLATRL'
  | 'QPRODFCREF'
  | 'GRPFIRMTRANS'
  | 'DEMANDPEGGINGS'
  | 'LABEL_LIST'
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
  | 'CONTROL_INFO'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'ACC_FICHE_SITEID'
  | 'SHIPLOC_CODE'
  | 'SHIP_DATE'
  | 'SHIP_TIME'
  | 'DOC_DATE'
  | 'DOC_TIME'
  | 'AUTOFILL_SLDETAILS'
  | 'RELTRANSFCREF'
  | 'FROMTRANSFER'
  | 'STATUS'
  | 'GLOBAL_ID'
  | 'LOC_CONTROL_OFF'
  | 'CANCEL_AUTO_GL_PROC'
  | 'OFFER_REFERENCE'
  | 'DELIVERY_CODE'
  | 'DEST_STATUS'
  | 'CANCEL_EXP'
  | 'UNDO_EXP'
  | 'CANCEL_DATE'
  | 'CREATE_WHERE'
  | 'IS_OKC_FICHE'
  | 'GUID'
  | 'ESEND_DATE'
  | 'EBOOK_DOCDATE'
  | 'EBOOK_NODOCUMENT'
  | 'EBOOK_DOCNR'
  | 'EBOOK_DOCTYPE'
  | 'EBOOK_EXPLAIN'
  | 'EBOOK_PAYTYPE'
  | 'EBOOK_NOPAY'
  | 'EDESPATCH'
  | 'EDESPATCH_PROFILEID'
  | 'EDESPATCH_STATUS'
  | 'EINVOICE'
  | 'EINVOICE_TYPE'
  | 'EINVOICE_PROFILEID'
  | 'EINVOICE_STATUS'
  | 'EINVOICE_STARTDATE'
  | 'EINVOICE_ENDDATE'
  | 'EINVOICE_DESCRIPTION'
  | 'EINVOICE_DURATION'
  | 'EINVOICE_DURATIONTYPE'
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
  | 'EARCHIVEDETR_LOGICALREF'
  | 'EARCHIVEDETR_STREF'
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
  | 'FROMINTEGTYPE'
  | 'FROMINTEGREF'
  | 'EPRINTCNT'
  | 'CLNOTREFLAACCREF'
  | 'CLNOTREFLACNTRREF'
  | 'PAYERCRPROVIDER'
  | 'PAYERCRKEY'
  | 'FORENTRUST'
  | 'EINVOICE_TELCODE'
  | 'EINVOICE_TELNR'
  | 'ORDFICHECMREF'
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
  | 'EINVOICE_ESURAPORIDDATE'
  | 'ESENDTIME';

/**
 * Type-safe sort specification for ItemSlips queries
 */
export type ItemSlipsSortSpec =
  | [ItemSlipsField]
  | [ItemSlipsField, 'asc' | 'desc']
  | [ItemSlipsField[], 'asc' | 'desc']
  | [ItemSlipsField[]];

/**
 * Type-safe query options for ItemSlips entities
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
export interface ItemSlipsQueryOptions
  extends Omit<QueryOptions<ItemSlipsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ItemSlipsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ItemSlipsSortSpec;
}

/**
 * Search criteria for ItemSlips entities
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
export interface ItemSlipsSearchCriteria {
  internalReference?: NumberFieldValue;
  group?: NumberFieldValue;
  type?: NumberFieldValue;
  ioType?: NumberFieldValue;
  number?: StringFieldValue;
  docTrackNr?: StringFieldValue;
  date?: StringFieldValue;
  time?: NumberFieldValue;
  docNumber?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  clientref?: NumberFieldValue;
  arpCode?: StringFieldValue;
  prodorderref?: NumberFieldValue;
  porderFicheNr?: StringFieldValue;
  porderSlpInreserve?: NumberFieldValue;
  porderType?: NumberFieldValue;
  qprodType?: NumberFieldValue;
  sourceType?: NumberFieldValue;
  sourceWh?: NumberFieldValue;
  sourceWscode?: StringFieldValue;
  sourcewsref?: NumberFieldValue;
  spoDetailCode?: StringFieldValue;
  srcpolnReference?: NumberFieldValue;
  sourceCostGrp?: NumberFieldValue;
  destType?: NumberFieldValue;
  destWh?: NumberFieldValue;
  destWscode?: StringFieldValue;
  destwsref?: NumberFieldValue;
  dpoDetailCode?: StringFieldValue;
  destpolnReference?: NumberFieldValue;
  destCostGrp?: NumberFieldValue;
  sourceFactoryNr?: NumberFieldValue;
  sourceDivisionNr?: NumberFieldValue;
  sourceDepartmentNr?: NumberFieldValue;
  destDivisionNr?: NumberFieldValue;
  destDepartmentNr?: NumberFieldValue;
  destFactory?: NumberFieldValue;
  porderStatus?: NumberFieldValue;
  fyTransfer?: NumberFieldValue;
  cancelled?: NumberFieldValue;
  glStatus?: NumberFieldValue;
  xrateStatus?: NumberFieldValue;
  addDiscounts?: NumberFieldValue;
  totalDiscounts?: NumberFieldValue;
  totalDiscounted?: NumberFieldValue;
  addExpenses?: NumberFieldValue;
  totalExpenses?: NumberFieldValue;
  totalDeposited?: NumberFieldValue;
  totalPromotions?: NumberFieldValue;
  totalVat?: NumberFieldValue;
  totalGross?: NumberFieldValue;
  totalNet?: NumberFieldValue;
  footnote1?: StringFieldValue;
  footnote2?: StringFieldValue;
  footnote3?: StringFieldValue;
  footnote4?: StringFieldValue;
  rcRate?: NumberFieldValue;
  rcNet?: NumberFieldValue;
  tcCurr?: NumberFieldValue;
  tcRate?: NumberFieldValue;
  tcNet?: NumberFieldValue;
  printCounter?: NumberFieldValue;
  printDate?: StringFieldValue;
  fichecnt?: NumberFieldValue;
  accficheref?: NumberFieldValue;
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
  glCancelled?: NumberFieldValue;
  shipmentType?: StringFieldValue;
  shippingAgent?: StringFieldValue;
  trackNr?: StringFieldValue;
  currselTotals?: NumberFieldValue;
  currselDetails?: NumberFieldValue;
  tradingGrp?: StringFieldValue;
  textinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  transactions?: DateFieldValue;
  dellist?: StringFieldValue;
  acclist?: StringFieldValue;
  delacclist?: StringFieldValue;
  acccode?: StringFieldValue;
  cstcode?: StringFieldValue;
  xbufs?: StringFieldValue;
  xcnt?: NumberFieldValue;
  pficheno?: StringFieldValue;
  pfichedate?: NumberFieldValue;
  docals?: StringFieldValue;
  itext?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  addTaxCalc?: NumberFieldValue;
  totalAddTax?: NumberFieldValue;
  uDocTrackingNr?: StringFieldValue;
  vaAccref?: NumberFieldValue;
  vaAcccode?: StringFieldValue;
  vaCenterref?: NumberFieldValue;
  vaCentercode?: StringFieldValue;
  orglogoid?: StringFieldValue;
  fromExim?: NumberFieldValue;
  frgTypCode?: StringFieldValue;
  projectCode?: StringFieldValue;
  projectref?: NumberFieldValue;
  defnfldslist?: DateFieldValue;
  totalexaddtax?: NumberFieldValue;
  affectCollatrl?: NumberFieldValue;
  qprodfcref?: NumberFieldValue;
  grpfirmtrans?: NumberFieldValue;
  demandpeggings?: DateFieldValue;
  labelList?: DateFieldValue;
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
  controlInfo?: NumberFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  accFicheSiteid?: NumberFieldValue;
  shiplocCode?: StringFieldValue;
  shipDate?: StringFieldValue;
  shipTime?: NumberFieldValue;
  docDate?: StringFieldValue;
  docTime?: NumberFieldValue;
  autofillSldetails?: NumberFieldValue;
  reltransfcref?: NumberFieldValue;
  fromtransfer?: NumberFieldValue;
  status?: NumberFieldValue;
  globalId?: StringFieldValue;
  locControlOff?: NumberFieldValue;
  cancelAutoGlProc?: NumberFieldValue;
  offerReference?: NumberFieldValue;
  deliveryCode?: StringFieldValue;
  destStatus?: NumberFieldValue;
  cancelExp?: StringFieldValue;
  undoExp?: StringFieldValue;
  cancelDate?: StringFieldValue;
  createWhere?: NumberFieldValue;
  isOkcFiche?: NumberFieldValue;
  guid?: StringFieldValue;
  esendDate?: StringFieldValue;
  ebookDocdate?: StringFieldValue;
  ebookNodocument?: NumberFieldValue;
  ebookDocnr?: StringFieldValue;
  ebookDoctype?: NumberFieldValue;
  ebookExplain?: StringFieldValue;
  ebookPaytype?: StringFieldValue;
  ebookNopay?: NumberFieldValue;
  edespatch?: NumberFieldValue;
  edespatchProfileid?: NumberFieldValue;
  edespatchStatus?: NumberFieldValue;
  einvoice?: NumberFieldValue;
  einvoiceType?: NumberFieldValue;
  einvoiceProfileid?: NumberFieldValue;
  einvoiceStatus?: NumberFieldValue;
  einvoiceStartdate?: StringFieldValue;
  einvoiceEnddate?: StringFieldValue;
  einvoiceDescription?: StringFieldValue;
  einvoiceDuration?: NumberFieldValue;
  einvoiceDurationtype?: NumberFieldValue;
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
  earchivedetrLogicalref?: NumberFieldValue;
  earchivedetrStref?: NumberFieldValue;
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
  fromintegtype?: NumberFieldValue;
  fromintegref?: NumberFieldValue;
  eprintcnt?: NumberFieldValue;
  clnotreflaaccref?: NumberFieldValue;
  clnotreflacntrref?: NumberFieldValue;
  payercrprovider?: StringFieldValue;
  payercrkey?: StringFieldValue;
  forentrust?: NumberFieldValue;
  einvoiceTelcode?: StringFieldValue;
  einvoiceTelnr?: StringFieldValue;
  ordfichecmref?: NumberFieldValue;
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
  einvoiceEsuraporiddate?: StringFieldValue;
  esendtime?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ItemSlips entities
 */
export interface ItemSlipsAnalytics {
  total: number;
  // Add ItemSlips-specific analytics fields
}
