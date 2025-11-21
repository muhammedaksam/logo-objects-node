import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_CostDistTrans]
 */
export interface RscollectionrsCostdisttrans {
  Meta?: Meta;
  items?: RsCostdisttrans[];
}

/**
 * Interface for RSCollection[RS_CostDistPeg]
 */
export interface RscollectionrsCostdistpeg {
  Meta?: Meta;
  items?: RsCostdistpeg[];
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
 * RsCostdisttrans transaction line item
 *
 * Represents individual transaction records within a SalesProvisionDistributionSlips collection.
 */
export interface RsCostdisttrans extends BaseEntity {
  SRVREF?: number;
  DATE?: string;
  FTIME?: number;
  COSTDISTFCREF?: number;
  SRVINVFICHENO?: string;
  SRVINVFICHELNNR?: number;
  SRVFICHEREF?: number;
  SRVINVTRANSREF?: number;
  FICHE_TYPE?: number;
  LINENR?: number;
  SRVCODE?: string;
  SRVNAME?: string;
  SRVTOTAL?: number;
  SRVDISTTYPE?: number;
  DISTTOTAL?: number;
  SRVACCREF?: number;
  SRV_GL_CODE?: string;
  SRVCENTERREF?: number;
  SRV_OHP_CODE?: string;
  WFSTATUS?: number;
  SRVTRINFO_LOGICALREF?: number;
  STOCKREF?: number;
  LINETYPE?: number;
  PREVLINEREF?: number;
  PREVLINENO?: number;
  DETLINE?: number;
  TRCODE?: number;
  GLOBTRANS?: number;
  CALCTYPE?: number;
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
  STFICHELNNO?: number;
  INVOICEREF?: number;
  INVOICELNNO?: number;
  ARP_CODE?: string;
  CLIENTREF?: number;
  ORDTRANSREF?: number;
  ORDFICHEREF?: number;
  CENTERREF?: number;
  ACCOUNTREF?: number;
  VATACCREF?: number;
  VATCENTERREF?: number;
  PRACCREF?: number;
  PRCENTERREF?: number;
  PRVATACCREF?: number;
  PRVATCENREF?: number;
  PROMREF?: number;
  PAYDEFREF?: number;
  SPECODE?: string;
  DELVRYCODE?: string;
  AMOUNT?: number;
  PRICE?: number;
  TOTAL?: number;
  PRCURR?: number;
  PRPRICE?: number;
  TRCURR?: number;
  TRRATE?: number;
  REPORTRATE?: number;
  DISTCOST?: number;
  DISTDISC?: number;
  DISTEXP?: number;
  DISTPROM?: number;
  DISCPER?: number;
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
  PLNAMOUNT?: number;
  VATINC?: number;
  VAT?: number;
  VATAMNT?: number;
  VATMATRAH?: number;
  BILLEDITEM?: number;
  BILLED?: number;
  CPSTFLAG?: number;
  RETCOSTTYPE?: number;
  SOURCELINK?: number;
  RETCOST?: number;
  RETCOSTCURR?: number;
  OUTCOST?: number;
  OUTCOSTCURR?: number;
  RETAMOUNT?: number;
  FAREGREF?: number;
  FAATTRIB?: number;
  CANCELLED?: number;
  LINENET?: number;
  DISTADDEXP?: number;
  FADACCREF?: number;
  FADCENTERREF?: number;
  FARACCREF?: number;
  FARCENTERREF?: number;
  DIFFPRICE?: number;
  DIFFPRCOST?: number;
  DECPRDIFF?: number;
  LPRODSTAT?: number;
  PRDEXPTOTAL?: number;
  DIFFREPPRICE?: number;
  DIFFPRCRCOST?: number;
  SALESMANREF?: number;
  FAPLACCREF?: number;
  FAPLCENTERREF?: number;
  FAPROFITACCREF?: number;
  FAPROFITCENTREF?: number;
  FALOSSACCREF?: number;
  FALOSSCENTREF?: number;
  OUTPUTIDCODE?: string;
  DREF?: number;
  COSTRATE?: number;
  XPRICEUPD?: number;
  XPRICE?: number;
  XREPRATE?: number;
  DISTCOEF?: number;
  TRANSQCOK?: number;
  POLINEREF?: number;
  PLNSTTRANSREF?: number;
  NETDISCFLAG?: number;
  NETDISCPERC?: number;
  NETDISCAMNT?: number;
  VATCALCDIFF?: number;
  CONDITIONREF?: number;
  DISTORDERREF?: number;
  DISTORDLINEREF?: number;
  CAMPAIGNREFS1?: number;
  CAMPAIGNREFS2?: number;
  CAMPAIGNREFS3?: number;
  CAMPAIGNREFS4?: number;
  CAMPAIGNREFS5?: number;
  POINTCAMPREF?: number;
  CAMPPOINT?: number;
  PROMCLASITEMREF?: number;
  CMPGLINEREF?: number;
  PLNSTTRANSPERNR?: number;
  PORDCLSPLNAMNT?: number;
  VENDCOMM?: number;
  PREVIOUSOUTCOST?: number;
  COSTOFSALEACCREF?: number;
  PURCHACCREF?: number;
  COSTOFSALECNTREF?: number;
  PURCHCENTREF?: number;
  PREVOUTCOSTCURR?: number;
  EUVATAMOUNT?: number;
  EUVATSTATUS?: number;
  PRRATE?: number;
  ADDTAXRATE?: number;
  ADDTAXCONVFACT?: number;
  ADDTAXAMOUNT?: number;
  ADDTAXPRCOST?: number;
  ADDTAXRETCOST?: number;
  ADDTAXRETCOSTCURR?: number;
  GROSSUINFO1?: number;
  GROSSUINFO2?: number;
  ADDTAXPRCOSTCURR?: number;
  ADDTAXACCREF?: number;
  ADDTAXCENTERREF?: number;
  ADDTAXAMNTISUPD?: number;
  INFIDX?: number;
  ADDTAXCOSACCREF?: number;
  ADDTAXCOSCNTREF?: number;
  PREVIOUSATAXPRCOST?: number;
  PREVATAXPRCOSTCURR?: number;
  PRDORDTOTCOEF?: number;
  DEMPEGGEDAMNT?: number;
  STDUNITCOST?: number;
  STDRPUNITCOST?: number;
  COSTDIFFACCREF?: number;
  COSTDIFFCENREF?: number;
  ADDTAXDISCAMOUNT?: number;
  ORGLOGOID?: string;
  EXIMFICHENO?: string;
  EXIMFCTYPE?: number;
  TRANSEXPLINE?: number;
  INSEXPLINE?: number;
  EXIMWHFCREF?: number;
  EXIMWHLNREF?: number;
  EXIMFILEREF?: number;
  EXIMPROCNR?: number;
  EISRVDSTTYP?: number;
  MAINSTLNREF?: number;
  MADEOFSHRED?: number;
  FROMORDWITHPAY?: number;
  PROJECTREF?: number;
  STATUS?: number;
  DORESERVE?: number;
  POINTCAMPREFS1?: number;
  POINTCAMPREFS2?: number;
  POINTCAMPREFS3?: number;
  POINTCAMPREFS4?: number;
  CAMPPOINTS1?: number;
  CAMPPOINTS2?: number;
  CAMPPOINTS3?: number;
  CAMPPOINTS4?: number;
  CMPGLINEREFS1?: number;
  CMPGLINEREFS2?: number;
  CMPGLINEREFS3?: number;
  CMPGLINEREFS4?: number;
  PRCLISTREF?: number;
  PORDSYMOUTLN?: number;
  MONTH?: number;
  YEAR?: number;
  EXADDTAXRATE?: number;
  EXADDTAXCONVF?: number;
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
  DISTEDTOTAL?: number;
  SRCNAME?: string;
  FICHENO?: string;
  PEGLINELIST?: RscollectionrsCostdistpeg;
  PEGDELLIST?: string;
  SRVREPTOTAL?: number;
  DISTEDREPTOT?: number;
  DISTREPTOTAL?: number;
  TYPE?: number;
  FROMINTEGTYPE?: number;
  FROMINTEGREF?: number;
  TAXFREEACCREF?: number;
  TAXFREECNTRREF?: number;
  EISRVDSTADDTAXINC?: number;
  QCTRANSFERREF2?: number;
  QCTRANSFERAMNT2?: number;
  ITMDISC?: number;
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
 * RsCostdistpeg transaction line item
 *
 * Represents individual transaction records within a SalesProvisionDistributionSlips collection.
 */
export interface RsCostdistpeg extends BaseEntity {
  COSTDISTFCREF?: number;
  COSTDISTLNREF?: number;
  SRVFICHEREF?: number;
  SRVTRANSREF?: number;
  INVOICEREF?: number;
  STFICHENO?: string;
  STFICHEREF?: number;
  STTRANSREF?: number;
  STFICHELNNR?: number;
  PARENTSTTRREF?: number;
  EXIMWHFCREF?: number;
  EXIMWHLNREF?: number;
  LINENR?: number;
  ITEMREF?: number;
  TOTALAMNT?: number;
  UNITPRICE?: number;
  UNITRPPRICE?: number;
  ADDEXPENSE?: number;
  ADDRPEXPENSE?: number;
  ISDISTRIBUTED?: number;
  DISTRATE?: number;
  DISTTOTAL?: number;
  STACCREF?: number;
  STC_GL_CODE?: string;
  STCENTERREF?: number;
  STC_OHP_CODE?: string;
  WFSTATUS?: number;
  STTRINFO_LOGICALREF?: number;
  STOCKREF?: number;
  LINETYPE?: number;
  PREVLINEREF?: number;
  PREVLINENO?: number;
  DETLINE?: number;
  TRCODE?: number;
  DATE?: string;
  FTIME?: number;
  GLOBTRANS?: number;
  CALCTYPE?: number;
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
  INVFICHENO?: string;
  INVOICELNNO?: number;
  ARP_CODE?: string;
  CLIENTREF?: number;
  ORDTRANSREF?: number;
  ORDFICHEREF?: number;
  CENTERREF?: number;
  ACCOUNTREF?: number;
  VATACCREF?: number;
  VATCENTERREF?: number;
  PRACCREF?: number;
  PRCENTERREF?: number;
  PRVATACCREF?: number;
  PRVATCENREF?: number;
  PROMREF?: number;
  PAYDEFREF?: number;
  SPECODE?: string;
  DELVRYCODE?: string;
  AMOUNT?: number;
  PRICE?: number;
  TOTAL?: number;
  PRCURR?: number;
  PRPRICE?: number;
  TRCURR?: number;
  TRRATE?: number;
  REPORTRATE?: number;
  DISTCOST?: number;
  DISTDISC?: number;
  DISTEXP?: number;
  DISTPROM?: number;
  DISCPER?: number;
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
  PLNAMOUNT?: number;
  VATINC?: number;
  VAT?: number;
  VATAMNT?: number;
  VATMATRAH?: number;
  BILLEDITEM?: number;
  BILLED?: number;
  CPSTFLAG?: number;
  RETCOSTTYPE?: number;
  SOURCELINK?: number;
  RETCOST?: number;
  RETCOSTCURR?: number;
  OUTCOST?: number;
  OUTCOSTCURR?: number;
  RETAMOUNT?: number;
  FAREGREF?: number;
  FAATTRIB?: number;
  CANCELLED?: number;
  LINENET?: number;
  DISTADDEXP?: number;
  FADACCREF?: number;
  FADCENTERREF?: number;
  FARACCREF?: number;
  FARCENTERREF?: number;
  DIFFPRICE?: number;
  DIFFPRCOST?: number;
  DECPRDIFF?: number;
  LPRODSTAT?: number;
  PRDEXPTOTAL?: number;
  DIFFREPPRICE?: number;
  DIFFPRCRCOST?: number;
  SALESMANREF?: number;
  FAPLACCREF?: number;
  FAPLCENTERREF?: number;
  FAPROFITACCREF?: number;
  FAPROFITCENTREF?: number;
  FALOSSACCREF?: number;
  FALOSSCENTREF?: number;
  OUTPUTIDCODE?: string;
  DREF?: number;
  COSTRATE?: number;
  XPRICEUPD?: number;
  XPRICE?: number;
  XREPRATE?: number;
  DISTCOEF?: number;
  TRANSQCOK?: number;
  XML_REFERENCE?: number;
  POLINEREF?: number;
  PLNSTTRANSREF?: number;
  NETDISCFLAG?: number;
  NETDISCPERC?: number;
  NETDISCAMNT?: number;
  VATCALCDIFF?: number;
  CONDITIONREF?: number;
  DISTORDERREF?: number;
  DISTORDLINEREF?: number;
  CAMPAIGNREFS1?: number;
  CAMPAIGNREFS2?: number;
  CAMPAIGNREFS3?: number;
  CAMPAIGNREFS4?: number;
  CAMPAIGNREFS5?: number;
  POINTCAMPREF?: number;
  CAMPPOINT?: number;
  PROMCLASITEMREF?: number;
  CMPGLINEREF?: number;
  PLNSTTRANSPERNR?: number;
  PORDCLSPLNAMNT?: number;
  VENDCOMM?: number;
  PREVIOUSOUTCOST?: number;
  COSTOFSALEACCREF?: number;
  PURCHACCREF?: number;
  COSTOFSALECNTREF?: number;
  PURCHCENTREF?: number;
  PREVOUTCOSTCURR?: number;
  EUVATAMOUNT?: number;
  EUVATSTATUS?: number;
  PRRATE?: number;
  ADDTAXRATE?: number;
  ADDTAXCONVFACT?: number;
  ADDTAXAMOUNT?: number;
  ADDTAXPRCOST?: number;
  ADDTAXRETCOST?: number;
  ADDTAXRETCOSTCURR?: number;
  GROSSUINFO1?: number;
  GROSSUINFO2?: number;
  ADDTAXPRCOSTCURR?: number;
  ADDTAXACCREF?: number;
  ADDTAXCENTERREF?: number;
  ADDTAXAMNTISUPD?: number;
  INFIDX?: number;
  ADDTAXCOSACCREF?: number;
  ADDTAXCOSCNTREF?: number;
  PREVIOUSATAXPRCOST?: number;
  PREVATAXPRCOSTCURR?: number;
  PRDORDTOTCOEF?: number;
  DEMPEGGEDAMNT?: number;
  STDUNITCOST?: number;
  STDRPUNITCOST?: number;
  COSTDIFFACCREF?: number;
  COSTDIFFCENREF?: number;
  ADDTAXDISCAMOUNT?: number;
  ORGLOGOID?: string;
  EXIMFICHENO?: string;
  EXIMFCTYPE?: number;
  TRANSEXPLINE?: number;
  INSEXPLINE?: number;
  EXIMFILEREF?: number;
  EXIMPROCNR?: number;
  EISRVDSTTYP?: number;
  MAINSTLNREF?: number;
  MADEOFSHRED?: number;
  FROMORDWITHPAY?: number;
  PROJECTREF?: number;
  STATUS?: number;
  DORESERVE?: number;
  POINTCAMPREFS1?: number;
  POINTCAMPREFS2?: number;
  POINTCAMPREFS3?: number;
  POINTCAMPREFS4?: number;
  CAMPPOINTS1?: number;
  CAMPPOINTS2?: number;
  CAMPPOINTS3?: number;
  CAMPPOINTS4?: number;
  CMPGLINEREFS1?: number;
  CMPGLINEREFS2?: number;
  CMPGLINEREFS3?: number;
  CMPGLINEREFS4?: number;
  PRCLISTREF?: number;
  PORDSYMOUTLN?: number;
  MONTH?: number;
  YEAR?: number;
  EXADDTAXRATE?: number;
  EXADDTAXCONVF?: number;
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
  FICHENO?: string;
  ITEMCODE?: string;
  ITEMNAME?: string;
  ITEMMAINUNITE?: string;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  TYPE?: number;
  FROMINTEGTYPE?: number;
  FROMINTEGREF?: number;
  TAXFREEACCREF?: number;
  TAXFREECNTRREF?: number;
  EISRVDSTADDTAXINC?: number;
  QCTRANSFERREF2?: number;
  QCTRANSFERAMNT2?: number;
  ITMDISC?: number;
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
 * SalesProvisionDistributionSlips entity interface based on swagger definition
 */
export interface SalesProvisionDistributionSlips extends BaseEntity {
  FICHENO?: string;
  DATE?: string;
  FTIME?: number;
  DOCODE?: string;
  SPECODE?: string;
  CYPHCODE?: string;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  ACCOUNTED?: number;
  ACCFICHEREF?: number;
  ACCOUNTEDCNT?: number;
  SITEID?: number;
  WFSTATUS?: number;
  TRANSACTIONS?: RscollectionrsCostdisttrans;
  DOCALS?: string;
  XBUFS?: string;
  DOCNRREF?: number;
  LINECNT?: number;
  TEXTCHG?: number;
  ITEXT?: string;
  FCNOCHANGED?: number;
  CURREDLNSRVTRNREF?: number;
  CURREDLNPEGLIST?: RscollectionrsCostdistpeg;
  APPROVE?: number;
  APPROVE_DATE?: string;
  ACC_FICHE_SITEID?: number;
  TYPE?: number;
  CANCEL_AUTO_GL_PROC?: number;
}

/**
 * Union type of all SalesProvisionDistributionSlips field names for type-safe field selection and sorting
 */
export type SalesProvisionDistributionSlipsField =
  | 'INTERNAL_REFERENCE'
  | 'FICHENO'
  | 'DATE'
  | 'FTIME'
  | 'DOCODE'
  | 'SPECODE'
  | 'CYPHCODE'
  | 'PROJECTREF'
  | 'PROJECT_CODE'
  | 'ACCOUNTED'
  | 'ACCFICHEREF'
  | 'ACCOUNTEDCNT'
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
  | 'TEXTINC'
  | 'SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WFSTATUS'
  | 'TRANSACTIONS'
  | 'DOCALS'
  | 'XBUFS'
  | 'DOCNRREF'
  | 'LINECNT'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'FCNOCHANGED'
  | 'CURREDLNSRVTRNREF'
  | 'CURREDLNPEGLIST'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'ACC_FICHE_SITEID'
  | 'TYPE'
  | 'CANCEL_AUTO_GL_PROC';

/**
 * Type-safe sort specification for SalesProvisionDistributionSlips queries
 */
export type SalesProvisionDistributionSlipsSortSpec =
  | [SalesProvisionDistributionSlipsField]
  | [SalesProvisionDistributionSlipsField, 'asc' | 'desc']
  | [SalesProvisionDistributionSlipsField[], 'asc' | 'desc']
  | [SalesProvisionDistributionSlipsField[]];

/**
 * Type-safe query options for SalesProvisionDistributionSlips entities
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
export interface SalesProvisionDistributionSlipsQueryOptions
  extends Omit<QueryOptions<SalesProvisionDistributionSlipsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: SalesProvisionDistributionSlipsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: SalesProvisionDistributionSlipsSortSpec;
}

/**
 * Search criteria for SalesProvisionDistributionSlips entities
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
export interface SalesProvisionDistributionSlipsSearchCriteria {
  internalReference?: NumberFieldValue;
  ficheno?: StringFieldValue;
  date?: StringFieldValue;
  ftime?: NumberFieldValue;
  docode?: StringFieldValue;
  specode?: StringFieldValue;
  cyphcode?: StringFieldValue;
  projectref?: NumberFieldValue;
  projectCode?: StringFieldValue;
  accounted?: NumberFieldValue;
  accficheref?: NumberFieldValue;
  accountedcnt?: NumberFieldValue;
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
  textinc?: NumberFieldValue;
  siteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  transactions?: DateFieldValue;
  docals?: StringFieldValue;
  xbufs?: StringFieldValue;
  docnrref?: NumberFieldValue;
  linecnt?: NumberFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;
  fcnochanged?: NumberFieldValue;
  curredlnsrvtrnref?: NumberFieldValue;
  curredlnpeglist?: DateFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  accFicheSiteid?: NumberFieldValue;
  type?: NumberFieldValue;
  cancelAutoGlProc?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for SalesProvisionDistributionSlips entities
 */
export interface SalesProvisionDistributionSlipsAnalytics {
  total: number;
  // Add SalesProvisionDistributionSlips-specific analytics fields
}
