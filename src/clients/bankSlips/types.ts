import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { DataObjectParameter, Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_BankTransXML]
 */
export interface RscollectionrsBanktransxml {
  Meta?: Meta;
  items?: RsBanktransxml[];
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
 * Interface for RSCollection[purchaseInvoices]
 */
export interface Rscollectionpurchaseinvoices {
  Meta?: Meta;
  items?: PurchaseInvoices[];
}

/**
 * Interface for RSCollection[purchaseDispatches]
 */
export interface Rscollectionpurchasedispatches {
  Meta?: Meta;
  items?: PurchaseDispatches[];
}

/**
 * Interface for RSCollection[RS_DespTransXML]
 */
export interface RscollectionrsDesptransxml {
  Meta?: Meta;
  items?: RsDesptransxml[];
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
 * Interface for RSCollection[RS_CampCodesListXML]
 */
export interface RscollectionrsCampcodeslistxml {
  Meta?: Meta;
  items?: RsCampcodeslistxml[];
}

/**
 * Interface for RSCollection[RS_AddTaxMultiLineX]
 */
export interface RscollectionrsAddtaxmultilinex {
  Meta?: Meta;
  items?: RsAddtaxmultilinex[];
}

/**
 * Interface for RSCollection[RS_LabelXML]
 */
export interface RscollectionrsLabelxml {
  Meta?: Meta;
  items?: RsLabelxml[];
}

/**
 * Interface for RSCollection[RS_IntelListXML]
 */
export interface RscollectionrsIntellistxml {
  Meta?: Meta;
  items?: RsIntellistxml[];
}

/**
 * Interface for RSCollection[RS_OKCInfoXML]
 */
export interface RscollectionrsOkcinfoxml {
  Meta?: Meta;
  items?: RsOkcinfoxml[];
}

/**
 * Interface for RSCollection[chequeAndPnoteRolls]
 */
export interface Rscollectionchequeandpnoterolls {
  Meta?: Meta;
  items?: ChequeAndPnoteRolls[];
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
 * Interface for RSCollection[RS_ARPTransXML]
 */
export interface RscollectionrsArptransxml {
  Meta?: Meta;
  items?: RsArptransxml[];
}

/**
 * Interface for RSCollection[RS_BankCrePayXML]
 */
export interface RscollectionrsBankcrepayxml {
  Meta?: Meta;
  items?: RsBankcrepayxml[];
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
 * Interface for Arps
 */
export interface Arps {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  RECORD_STATUS?: number;
  ACCOUNT_TYPE?: number;
  CODE?: string;
  TITLE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  ADDRESS1?: string;
  ADDRESS2?: string;
  DISTRICT_CODE?: string;
  DISTRICT?: string;
  TOWN_CODE?: string;
  TOWN?: string;
  CITY_CODE?: string;
  CITY?: string;
  COUNTRY_CODE?: string;
  COUNTRY?: string;
  POSTAL_CODE?: string;
  TELEPHONE1?: string;
  TELEPHONE1_CODE?: string;
  TELEPHONE2?: string;
  TELEPHONE2_CODE?: string;
  FAX?: string;
  FAX_CODE?: string;
  TAX_ID?: string;
  TAX_OFFICE?: string;
  TAX_OFFICE_CODE?: string;
  CONTACT?: string;
  DISCOUNT_RATE?: number;
  EXTENREF?: number;
  PAYMENT_CODE?: string;
  PAYMENTREF?: number;
  E_MAIL?: string;
  WEB_URL?: string;
  FACEBOOK_URL?: string;
  TWITTER_URL?: string;
  APPLE_ID?: string;
  SKYPE_ID?: string;
  REMINDER_TYPE?: number;
  REMINDER_EMAIL?: string;
  REMINDER_FAX?: string;
  CORRESP_LANG?: number;
  VAT_ID?: string;
  BLOCKED?: number;
  BANK_ID1?: string;
  BANK_ID2?: string;
  BANK_ID3?: string;
  BANK_ID4?: string;
  BANK_ID5?: string;
  BANK_ID6?: string;
  BANK_ID7?: string;
  BANK_NAME1?: string;
  BANK_NAME2?: string;
  BANK_NAME3?: string;
  BANK_NAME4?: string;
  BANK_NAME5?: string;
  BANK_NAME6?: string;
  BANK_NAME7?: string;
  BANK_ACCOUNT1?: string;
  BANK_ACCOUNT2?: string;
  BANK_ACCOUNT3?: string;
  BANK_ACCOUNT4?: string;
  BANK_ACCOUNT5?: string;
  BANK_ACCOUNT6?: string;
  BANK_ACCOUNT7?: string;
  DELIVERY_METHOD?: string;
  SHIPMENT_AGENT?: string;
  CURRENCY?: number;
  TEXTINC?: number;
  DATA_SITEID?: number;
  DATA_REFERENCE?: number;
  E_COMM_ID?: string;
  TRADING_GRP?: string;
  CREATED_BY?: number;
  DATE_CREATED?: string;
  HOUR_CREATED?: number;
  MIN_CREATED?: number;
  SEC_CREATED?: number;
  MODIFIED_BY?: number;
  DATE_MODIFIED?: string;
  HOUR_MODIFIED?: number;
  MIN_MODIFIED?: number;
  SEC_MODIFIED?: number;
  DEBT_TRCK_TYPE?: number;
  XRTDIF_TYPE?: number;
  NOTES?: RscollectionrsArpnotesxml;
  CREDIT_TYPE?: number;
  CREDIT_LIMIT?: number;
  CREDIT_BALANCED?: number;
  RISKFACT_CHQ?: number;
  RISKFACT_PROMNT?: number;
  ACTION_CREDHOLD?: number;
  XBUFS?: string;
  GL_CODE?: string;
  ACCOUNTREF?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  FLDALS?: string;
  ITEXT?: string;
  LANGP?: string;
  PP_GROUP_CODE?: string;
  XML_ATTRIBUTE?: number;
  USE_REP_RISK?: number;
  RISK_LIMIT?: number;
  RISK_BALANCED?: number;
  ORD_SEND_METHOD?: number;
  ORD_SEND_EMAIL?: string;
  ORD_SEND_FAX?: string;
  DSP_SEND_METHOD?: number;
  DSP_SEND_EMAIL?: string;
  DSP_SEND_FAX?: string;
  INV_SEND_METHOD?: number;
  INV_SEND_EMAIL?: string;
  INV_SEND_FAX?: string;
  SUBSCRIBER_STATUS?: number;
  SUBSCRIBER_EXT?: string;
  AUTO_PAID_BANK?: string;
  PAYMENT_TYPE?: number;
  LAST_SEND_REM_LEV?: number;
  EXT_ACC_FLAGS?: number;
  ORD_SEND_FORMAT?: number;
  DSP_SEND_FORMAT?: number;
  INV_SEND_FORMAT?: number;
  REM_SEND_FORMAT?: number;
  STORE_CREDIT_CARD_NO?: string;
  CL_ORD_FREQ?: number;
  ORD_DAY?: number;
  LOGOID?: string;
  LID_Confirmed?: number;
  E_BSNS_SEND_TYPE?: number;
  LDX_DEF_ORDER_STAT?: number;
  LDX_DEF_ORDER_PRC?: number;
  ITR_SEND_METHOD?: number;
  ITR_SEND_MAIL_ADR?: string;
  ITR_SEND_FAX?: string;
  ITR_SEND_FORMAT?: number;
  IMG2INC?: number;
  CELL_PHONE?: string;
  INVOICE_PRNT_CNT?: number;
  GENIUSFLDSLIST?: Rscollectionextendedfielddefinitions;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  WFLOWCARDREF?: number;
  PARENTCLCODE?: string;
  PARENTCLREF?: number;
  CODE_CHANGED?: number;
  COLLECTINV?: number;
  PIECEORDINFLICT?: number;
  ORGLOGOID?: string;
  PURCHBRWS?: number;
  SALESBRWS?: number;
  IMPBRWS?: number;
  EXPBRWS?: number;
  FINBRWS?: number;
  COLLATRLRISK_TYPE?: number;
  COLLRISK_OVER?: number;
  COLLRISK_ORD_RISK_OVER?: number;
  COLLRISK_DESP_RISK_OVER?: number;
  COLLRISK_USE_REP_RISK?: number;
  COLLRISK_PCOLLATRL_TOTAL?: number;
  COLLRISK_REP_PCOLLATRL_TOT?: number;
  COLLRISK_SCOLLATRL_TOTAL?: number;
  COLLRISK_TOTAL?: number;
  COLLRISK_REP_RISK_TOTAL?: number;
  COLLRISK_DESP_TOTAL?: number;
  COLLRISK_REP_DESP_RISK_TOT?: number;
  COLLRISK_LIMIT?: number;
  COLLRISK_REP_LIMIT?: number;
  COLLRISK_BALANCED?: number;
  COLLRISK_REP_BALANCED?: number;
  COLLRISK_ORD_RISK_TOTAL?: number;
  COLLRISK_REP_ORD_RISK_TOT?: number;
  COLLRISK_ORD_RISK_TOT_SUGG?: number;
  COLLRISK_REP_ORD_RISK_TOT_SUG?: number;
  COLLRISK_SEP_CS_RISK_TOT?: number;
  COLLRISK_CS_RISK_OVER?: number;
  COLLRISK_CS_RISK_TOTAL?: number;
  COLLRISK_REP_CS_RISK_TOT?: number;
  GRPFIRMNR?: number;
  CONSCODEREF?: number;
  CONSCODE?: string;
  AUXIL_CODE2?: string;
  AUXIL_CODE3?: string;
  AUXIL_CODE4?: string;
  AUXIL_CODE5?: string;
  EBANKCODE?: number;
  OFF_SEND_METHOD?: number;
  OFF_SEND_MAIL_ADDR?: string;
  OFF_SEND_FAX?: string;
  OFF_SEND_FORMAT?: number;
  RISK_TYPE1?: number;
  RISK_TYPE2?: number;
  RISK_TYPE3?: number;
  RISK_TYPE4?: number;
  RISK_TYPE5?: number;
  RISK_TYPE6?: number;
  RISK_TYPE7?: number;
  RISK_TYPE8?: number;
  RISK_TYPE9?: number;
  RISK_TYPE10?: number;
  RISK_TYPE11?: number;
  RISK_TYPE12?: number;
  RISK_TYPE13?: number;
  RISK_TYPE14?: number;
  RISK_TYPE15?: number;
  CST_CEK_RISK_FACTOR?: number;
  CST_SENET_RISK_FACTOR?: number;
  RISK_GRP_CONTROL?: number;
  ACTION_CREDHOLD_ORD?: number;
  ACTION_CREDHOLD_DESP?: number;
  ACTION_CREDHOLD_ACC?: number;
  ACTION_CREDHOLD_CST_CS?: number;
  ACTION_CREDHOLD_MY_CS?: number;
  RISK_CTRL_TYPE?: number;
  ACC_RISK_TOTAL?: number;
  REP_ACC_RISK_TOTAL?: number;
  CST_CS_RISK_TOTAL?: number;
  REP_CST_CS_RISK_TOTAL?: number;
  MY_CS_RISK_TOTAL?: number;
  REP_MY_CS_RISK_TOTAL?: number;
  ORD_RISK_TOTAL?: number;
  REP_ORD_RISK_TOTAL?: number;
  ORD_RISK_TOTAL_SUGG?: number;
  REP_ORD_RISK_TOTAL_SUGG?: number;
  DESP_RISK_TOTAL?: number;
  REP_DESP_RISK_TOTAL?: number;
  ACC_RISK_LIMIT?: number;
  REP_ACC_RISK_LIMIT?: number;
  CST_CS_RISK_LIMIT?: number;
  REP_CST_CS_RISK_LIMIT?: number;
  MY_CS_RISK_LIMIT?: number;
  REP_MY_CS_RISK_LIMIT?: number;
  DESP_RISK_LIMIT?: number;
  REP_DESP_RISK_LIMIT?: number;
  ORD_RISK_LIMIT?: number;
  REP_ORD_RISK_LIMIT?: number;
  ORD_RISK_LIMIT_SUGG?: number;
  REP_ORD_SIRK_LIMIT_SUGG?: number;
  ACC_RISK_BALANCED?: number;
  REP_ACC_RISK_BALANCED?: number;
  CST_CS_RISK_BALANCED?: number;
  REP_CST_CS_RISK_BALANCED?: number;
  MY_CS_RISK_BALANCED?: number;
  REP_MY_CS_RISK_BALANCED?: number;
  DESP_RISK_BALANCED?: number;
  REP_DESP_RISK_BALANCED?: number;
  ORD_RISK_BALANCED?: number;
  REP_ORD_RISK_BALANCED?: number;
  ORD_RISK_BALANCED_SUGG?: number;
  REP_ORD_RISK_BALANCED_SUGG?: number;
  LOAN_GRP_CTRL?: number;
  EBUS_DATA_SEND_TYPE?: number;
  INI_STATUS_FLAGS?: number;
  SLS_ORDER_STATUS?: number;
  SLS_ORDER_PRICE?: number;
  SAME_ITEM_CODE_USE?: number;
  IMAGE?: string;
  IMAGE_SIZE?: number;
  MAP_ID?: string;
  LONGITUDE?: string;
  LATITUDE?: string;
  CITY_ID?: string;
  TOWN_ID?: string;
  BANK_IBAN1?: string;
  BANK_IBAN2?: string;
  BANK_IBAN3?: string;
  BANK_IBAN4?: string;
  BANK_IBAN5?: string;
  BANK_IBAN6?: string;
  BANK_IBAN7?: string;
  BANK_BIC1?: string;
  BANK_BIC2?: string;
  BANK_BIC3?: string;
  BANK_BIC4?: string;
  BANK_BIC5?: string;
  BANK_BIC6?: string;
  BANK_BIC7?: string;
  PERSCOMPANY?: number;
  TCKNO?: string;
  EXT_SEND_METHOD?: number;
  EXT_SEND_EMAIL?: string;
  EXT_SEND_FAX?: string;
  EXT_SEND_FORMAT?: number;
  ADDTOREFLIST?: number;
  ORD_RISK_OVER_SUGG?: number;
  CASH_CODE?: string;
  CASHREF?: number;
  USED_IN_PERIODS?: number;
  CONTACT2?: string;
  CONTACT3?: string;
  E_MAIL2?: string;
  E_MAIL3?: string;
  CONTACT1_TEL_CODE?: string;
  CONTACT2_TEL_CODE?: string;
  CONTACT3_TEL_CODE?: string;
  CONTACT1_TEL?: string;
  CONTACT2_TEL?: string;
  CONTACT3_TEL?: string;
  CONTACT1_TEL_EXT?: string;
  CONTACT2_TEL_EXT?: string;
  CONTACT3_TEL_EXT?: string;
  RSKLIM_CNTRL?: number;
  DUEDATE_CNTRL?: number;
  AGING_CNTRL?: number;
  AGING_DAY?: number;
  ORD_PRIORITY?: number;
  ACCEPT_EINV?: number;
  EIVOICEID?: string;
  PROFILE_ID?: number;
  PURC_ORDER_STATUS?: number;
  PURC_ORDER_PRICE?: number;
  BANK_CURR1?: string;
  BANK_CURR2?: string;
  BANK_CURR3?: string;
  BANK_CURR4?: string;
  BANK_CURR5?: string;
  BANK_CURR6?: string;
  BANK_CURR7?: string;
  CS_DOWNS_RISK?: number;
  CST_CS_CIRO_RISK_OVER?: number;
  CST_CIRO_CEK_RISK_FAC?: number;
  CST_CIRO_SENET_RISK_FAC?: number;
  CS_CIRO_DOWNS_RISK?: number;
  CST_CS_CIRO_RISK_LIMIT?: number;
  REP_CST_CS_CIRO_RISK_LIMIT?: number;
  CST_CS_CIRO_RISK_BALANCED?: number;
  REP_CST_CS_CIRO_RISK_BALANCED?: number;
  CST_CS_OWN_RISK_TOTAL?: number;
  REP_CST_CS_OWN_RISK_TOTAL?: number;
  CST_CS_CIRO_RISK_TOTAL?: number;
  REP_CST_CS_CIRO_RISK_TOTAL?: number;
  DESP_RISK_OVER_SUGG?: number;
  DESP_RISK_LIMIT_SUGG?: number;
  REP_DESP_RISK_LIMIT_SUGG?: number;
  DESP_RISK_TOTAL_SUGG?: number;
  REP_DESP_RISK_TOTAL_SUGG?: number;
  DESP_RISK_BALANCED_SUGG?: number;
  REP_DESP_RISK_BALANCED_SUGG?: number;
  DBS_LIMIT1?: number;
  DBS_LIMIT2?: number;
  DBS_LIMIT3?: number;
  DBS_LIMIT4?: number;
  DBS_LIMIT5?: number;
  DBS_LIMIT6?: number;
  DBS_LIMIT7?: number;
  DBS_TOTAL1?: number;
  DBS_TOTAL2?: number;
  DBS_TOTAL3?: number;
  DBS_TOTAL4?: number;
  DBS_TOTAL5?: number;
  DBS_TOTAL6?: number;
  DBS_TOTAL7?: number;
  DBS_BANKNO1?: number;
  DBS_BANKNO2?: number;
  DBS_BANKNO3?: number;
  DBS_BANKNO4?: number;
  DBS_BANKNO5?: number;
  DBS_BANKNO6?: number;
  DBS_BANKNO7?: number;
  DBS_RSKCTRL1?: number;
  DBS_RSKCTRL2?: number;
  DBS_RSKCTRL3?: number;
  DBS_RSKCTRL4?: number;
  DBS_RSKCTRL5?: number;
  DBS_RSKCTRL6?: number;
  DBS_RSKCTRL7?: number;
  DBS_CURR1?: number;
  DBS_CURR2?: number;
  DBS_CURR3?: number;
  DBS_CURR4?: number;
  DBS_CURR5?: number;
  DBS_CURR6?: number;
  DBS_CURR7?: number;
  BANK_CORRP_ACC1?: string;
  BANK_CORRP_ACC2?: string;
  BANK_CORRP_ACC3?: string;
  BANK_CORRP_ACC4?: string;
  BANK_CORRP_ACC5?: string;
  BANK_CORRP_ACC6?: string;
  BANK_CORRP_ACC7?: string;
  BANK_VOEN1?: string;
  BANK_VOEN2?: string;
  BANK_VOEN3?: string;
  BANK_VOEN4?: string;
  BANK_VOEN5?: string;
  BANK_VOEN6?: string;
  BANK_VOEN7?: string;
  EINVOICE_TYPE?: number;
  EARCHIVE_SEND_MODE?: number;
  EARCHIVE_IS_RETAIL_AR_AP?: number;
  TITLE2?: string;
  TELEPHONE_EXTENSION1?: string;
  TELEPHONE_EXTENSION2?: string;
  FAX_EXTENSION?: string;
  GLOBAL_ID?: string;
  ISFOREIGN?: number;
  POST_LABEL?: string;
  SENDER_LABEL?: string;
  DEG_ACTIVE?: number;
  DEG_CURR?: number;
  NAME?: string;
  SURNAME?: string;
  LABEL_INFO?: number;
  DUE_DATE_CONTOL1?: number;
  DUE_DATE_CONTOL2?: number;
  DUE_DATE_CONTOL3?: number;
  DUE_DATE_CONTOL4?: number;
  DUE_DATE_CONTOL5?: number;
  DUE_DATE_CONTOL6?: number;
  DUE_DATE_CONTOL7?: number;
  DUE_DATE_CONTOL8?: number;
  DUE_DATE_CONTOL9?: number;
  DUE_DATE_CONTOL10?: number;
  DUE_DATE_CONTOL11?: number;
  DUE_DATE_CONTOL12?: number;
  DUE_DATE_CONTOL13?: number;
  DUE_DATE_CONTOL14?: number;
  DUE_DATE_CONTOL15?: number;
  DUE_DATE_COUNT?: number;
  DUE_DATE_LIMIT?: number;
  DUE_DATE_TRACK?: number;
  CLOSE_DATE_COUNT?: number;
  CLOSE_DATE_TRACK?: number;
  DEFBNACCREF?: number;
  DEFAULT_BANKACC_CODE?: string;
  CURR_RATE_TYPE?: number;
  INSTEAD_OF_DISPATCH?: number;
  EINV_EARC_TYPE?: number;
  ADDRESS_NO?: string;
  FBS_SEND_METHOD?: number;
  FBS_SEND_EMAILADDR?: string;
  FBS_SEND_FORMAT?: number;
  FBS_SEND_FAXNR?: string;
  FBA_SEND_METHOD?: number;
  FBA_SEND_EMAILADDR?: string;
  FBA_SEND_FORMAT?: number;
  FBA_SEND_FAXNR?: string;
  SECTOR_MAIN_REF?: number;
  SECTOR_MAIN_CODE?: string;
  SECTOR_SUB_REF?: number;
  SECTOR_SUB_CODE?: string;
  PERSONEL_COSTS?: number;
  EARC_EMAIL_ADDRESS1?: string;
  EARC_EMAIL_ADDRESS2?: string;
  EARC_EMAIL_ADDRESS3?: string;
  FACTORY_DIV_NR?: number;
  FACTORY_NR?: number;
  IN_INVEN_NR?: number;
  OUT_INVEN_NR?: number;
  QTY_DEP_DURATION?: number;
  QTY_IN_DEP_DURATION?: number;
  OVER_LAP_TYPE?: number;
  OVER_LAP_AMOUNT?: number;
  OVER_LAP_PERC?: number;
  BROKER_COMP?: number;
  CREATE_WH_FICHE?: number;
  EINV_CUSTOMS?: number;
  SUB_CONT?: number;
  ACCEPT_DESP?: number;
  PROFILEID_DESP?: number;
  LABEL_INFO_DESP?: number;
  POST_LABEL_CODE_DESP?: string;
  SENDER_LABEL_CODE_DESP?: string;
  ACCEPT_EINV_PUBLIC?: number;
  PUBLICBNACCREF?: number;
  PUBLIC_BNACC_CODE?: string;
  PUBLIC_BNACC_IBAN?: string;
  PUBLIC_BNACC_CURRENCY?: number;
  KVKK_PERM_STATUS?: number;
  KVKK_BEGIN_DATE?: string;
  KVKK_END_DATE?: string;
  KVKK_CANCEL_DATE?: string;
  KVKK_ANONYMIZE_STATUS?: number;
  KVKK_ANONYMIZE_DATE?: string;
  EXIM_SEND_METHOD?: number;
  EXIM_SEND_EMAILADR?: string;
  EXIM_SEND_FORMAT?: number;
  EXIM_SEND_FAXNR?: string;
  CAN_DEDUCT?: number;
  DRIVERREF?: number;
  EX_COUNTRY_TYPE?: number;
  EX_COUNTRYREF?: number;
  EX_COUNTRY_CODE?: string;
  EX_COUNTRY_NAME?: string;
  IM_COUNTRY_TYPE?: number;
  IM_COUNTRYREF?: number;
  IM_COUNTRY_CODE?: string;
  IM_COUNTRY_NAME?: string;
  EXIM_PAYTYPEREF?: number;
  EXIM_PAYTYPE_CODE?: string;
  EXIM_BRBANKREF?: number;
  EXIM_BRBANK_CODE?: string;
  EXIM_CUSTOMREF?: number;
  EXIM_CUSTOM_CODE?: string;
  EXIM_REGTYPEREF?: number;
  EXIM_REGTYPE_CODE?: string;
  EXIM_NOTIFYCLREF?: number;
  EXIM_NOTIFY_ARPCODE?: string;
  EXIM_CONSULTCLREF?: number;
  EXIM_CONSULT_ARPCODE?: string;
  EXIM_FREIGHTCLREF?: number;
  EXIM_FREIGHT_ARPCODE?: string;
  DISP_PRINT_CNT?: number;
  ORD_PRINT_CNT?: number;
  GUID?: string;
  CLPTYPEFORPPAYDT?: number;
  CLSTYPEFORPPAYDT?: number;
  MERSIS_NO?: string;
  COMM_RECORD_NO?: string;
  LOW_LEVEL_CODES1?: number;
  LOW_LEVEL_CODES2?: number;
  LOW_LEVEL_CODES3?: number;
  LOW_LEVEL_CODES4?: number;
  LOW_LEVEL_CODES5?: number;
  LOW_LEVEL_CODES6?: number;
  LOW_LEVEL_CODES7?: number;
  LOW_LEVEL_CODES8?: number;
  LOW_LEVEL_CODES9?: number;
  LOW_LEVEL_CODES10?: number;
  INSTAGRAMURL?: string;
  LINKEDINURL?: string;
  WHATSAPPID?: string;
}

/**
 * Interface for RSCollection[RS_ARPNotesXML]
 */
export interface RscollectionrsArpnotesxml {
  Meta?: Meta;
  items?: RsArpnotesxml[];
}

/**
 * Interface for RS_ARPNotesXML
 */
export interface RsArpnotesxml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  CLIENTREF?: number;
  LINENUM?: number;
  LINE?: string;
}

/**
 * Interface for purchasedServices
 */
export interface PurchasedServices {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  RECORD_STATUS?: number;
  CARD_TYPE?: number;
  CODE?: string;
  PARENTSRVREF?: number;
  PARENT_CODE?: string;
  DESCRIPTION?: string;
  DESCRIPTION2?: string;
  AUXIL_CODE?: string;
  AUXIL_CODE2?: string;
  AUXIL_CODE3?: string;
  AUXIL_CODE4?: string;
  AUXIL_CODE5?: string;
  AUTH_CODE?: string;
  VAT_PERC?: number;
  EXTENREF?: number;
  PAYMENT_CODE?: string;
  PAYMENTREF?: number;
  UNITSET_CODE?: string;
  UNITSETREF?: number;
  CREATED_BY?: number;
  DATE_CREATED?: string;
  HOUR_CREATED?: number;
  MIN_CREATED?: number;
  SEC_CREATED?: number;
  MODIFIED_BY?: number;
  DATE_MODIFIED?: string;
  HOUR_MODIFIED?: number;
  MIN_MODIFIED?: number;
  SEC_MODIFIED?: number;
  DATA_SITEID?: number;
  DATA_REFERENCE?: number;
  XDEFS?: string;
  WH_PARAMS?: RscollectionrsSrvinvenxml;
  UNITS?: RscollectionrsServunitasgn;
  GL_LINKS?: RscollectionrsGlpostxml;
  MAINUNITCODE?: string;
  XML_ATTRIBUTE?: number;
  RETURNVAT?: number;
  IMPORT_EXPENSES?: number;
  AFFECT_COST?: number;
  ADD_TAXREF?: number;
  ADD_TAXCODE?: string;
  MULTI_ADD_TAX?: number;
  ADDTAXLIST?: RscollectionrsAddtaxmultixml;
  ADDTAXDELLIST?: string;
  DIST_TYPE?: number;
  CANDEDUCT?: number;
  DEDUCT_CODE?: string;
  DEDUCT_DEF?: string;
  DEDUCTION_PART1?: number;
  DEDUCTION_PART2?: number;
  EXT_ACCESS_FLAGS?: number;
  EXEMPT_FROM_TAXDECL?: number;
  CURRDIFF?: number;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  GTIP_CODE?: string;
  CPA_CODE?: string;
  PUBLICCOUNTRYREF?: number;
  PUBLIC_COUNTRY_CODE?: string;
  PUBLIC_COUNTRY_NAME?: string;
  OPPOSESRVREF?: number;
  COUNTER_SRV_CODE?: string;
  VEHICLE_EXP?: number;
  VEHICLE_RENT?: number;
  TEXTINC?: number;
  TEXTINCENG?: number;
  OPEX?: number;
  UNITSERIALCODE?: string;
}

/**
 * Interface for RSCollection[RS_SrvInvenXML]
 */
export interface RscollectionrsSrvinvenxml {
  Meta?: Meta;
  items?: RsSrvinvenxml[];
}

/**
 * Interface for RS_SrvInvenXML
 */
export interface RsSrvinvenxml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  SRVCARDREF?: number;
  WH_NUMBER?: number;
  LEAD_TIME?: number;
  ORDERED?: number;
  SHIPPED?: number;
  LAST_TRAN_DATE?: string;
}

/**
 * Interface for RSCollection[RS_ServUnitAsgn]
 */
export interface RscollectionrsServunitasgn {
  Meta?: Meta;
  items?: RsServunitasgn[];
}

/**
 * Interface for RS_ServUnitAsgn
 */
export interface RsServunitasgn {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  SRVREF?: number;
  LINENR?: number;
  UNIT_CODE?: string;
  UNITLINEREF?: number;
  PRIORITY?: number;
}

/**
 * Interface for RSCollection[RS_GLPostXML]
 */
export interface RscollectionrsGlpostxml {
  Meta?: Meta;
  items?: RsGlpostxml[];
}

/**
 * Interface for RS_GLPostXML
 */
export interface RsGlpostxml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  CARDTYPE?: number;
  CARDREF?: number;
  INFO_TYPE?: number;
  GLACC_CODE?: string;
  ACCOUNTREF?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
  DATA_SITEID?: number;
  XML_ATTRIBUTE?: number;
  DATA_REFERENCE?: number;
}

/**
 * Interface for RSCollection[RS_AddTaxMultiXML]
 */
export interface RscollectionrsAddtaxmultixml {
  Meta?: Meta;
  items?: RsAddtaxmultixml[];
}

/**
 * Interface for RS_AddTaxMultiXML
 */
export interface RsAddtaxmultixml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  CARD_TYPE?: number;
  CARDREF?: number;
  ADDTAXREF?: number;
  ORDER_NUMBER?: number;
  ADD_TAX_CODE?: string;
  ADD_TAX_DEF?: string;
  EFFECT_KDV?: number;
  INLINENET?: number;
}

/**
 * Interface for purchaseDiscounts
 */
export interface PurchaseDiscounts {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  CARDTYPE?: number;
  RECORD_STATUS?: number;
  CODE?: string;
  DESCRIPTION?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  FORMULA?: string;
  ROUND_BASE?: number;
  VAT_PERC?: number;
  COUNTER?: number;
  CREATED_BY?: number;
  DATE_CREATED?: string;
  HOUR_CREATED?: number;
  MIN_CREATED?: number;
  SEC_CREATED?: number;
  MODIFIED_BY?: number;
  DATE_MODIFIED?: string;
  HOUR_MODIFIED?: number;
  MIN_MODIFIED?: number;
  SEC_MODIFIED?: number;
  UNIT?: string;
  PROD_STATUS?: number;
  DATA_SITEID?: number;
  DATA_REFERENCE?: number;
  UPDATED?: number;
  TRCODE?: number;
  CARDREF?: number;
  TYP?: number;
  GL_CODE?: string;
  ACCOUNTREF?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
  XBUFS?: string;
  XML_ATTRIBUTE?: number;
  EXT_ACCESS_FLAGS?: number;
  STOPPAGE_DISC?: number;
  UNICODE?: string;
  UNICODE_DEF?: string;
}

/**
 * Interface for items
 */
export interface Items {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  RECORD_STATUS?: number;
  CARD_TYPE?: number;
  CODE?: string;
  NAME?: string;
  GROUP_CODE?: string;
  PRODUCER_CODE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  CLASS_TYPE?: number;
  USEF_PURCHASING?: number;
  USEF_SALES?: number;
  USEF_MM?: number;
  VAT?: number;
  PAYMENT_CODE?: string;
  PAYMENTREF?: number;
  TRACK_TYPE?: number;
  LOCATION_TRACKING?: number;
  TOOL?: number;
  AUTOINCSL?: number;
  LOTS_DIVISIBLE?: number;
  DEMAND_MEET_SORT_FLD1?: string;
  DEMAND_MEET_SORT_FLD2?: string;
  DEMAND_MEET_SORT_FLD3?: string;
  DEMAND_MEET_SORT_FLD4?: string;
  DEMAND_MEET_SORT_FLD5?: string;
  SHELF_LIFE?: number;
  SHELF_DATE?: number;
  DOMINANTREFS1?: number;
  DOMINANTREFS2?: number;
  DOMINANTREFS3?: number;
  DOMINANTREFS4?: number;
  DOMINANTREFS5?: number;
  DOMINANTREFS6?: number;
  DOMINANTREFS7?: number;
  DOMINANTREFS8?: number;
  DOMINANTREFS9?: number;
  DOMINANTREFS10?: number;
  DOMINANTREFS11?: number;
  DOMINANTREFS12?: number;
  IMAGEINC?: number;
  TEXTINC?: number;
  DEPREC_TYPE?: number;
  DEPREC_RATE?: number;
  DEPREC_DURATION?: number;
  SALVAGE_VALUE?: number;
  REVAL_FLAG?: number;
  REVDEPREC_RFLAG?: number;
  PARTIAL_DEPREC?: number;
  DEPREC_TYPE2?: number;
  DEPREC_RATE2?: number;
  DEPREC_DURATION2?: number;
  REVAL_FLAG2?: number;
  REVDEPREC_FLAG2?: number;
  PARTIAL_DEPREC2?: number;
  APPROVED?: number;
  UNITSET_CODE?: string;
  UNITSETREF?: number;
  QCCSET_CODE?: string;
  QCCSETREF?: number;
  DISTRIBUTED_AMOUNT?: number;
  CREATED_BY?: number;
  DATE_CREATED?: string;
  HOUR_CREATED?: number;
  MIN_CREATED?: number;
  SEC_CREATED?: number;
  MODIFIED_BY?: number;
  DATE_MODIFIED?: string;
  HOUR_MODIFIED?: number;
  MIN_MODIFIED?: number;
  SEC_MODIFIED?: number;
  DATA_SITEID?: number;
  DATA_REFERENCE?: number;
  UNIVERSAL_ID?: string;
  DIST_LOT_UNITS?: number;
  COMB_LOT_UNITS?: number;
  MAINUNIT?: string;
  FACTORY_PARAMS?: RscollectionrsItemfactoryxml;
  INVENLIST?: string;
  WH_PARAMS?: RscollectionrsIteminvenxml;
  INVENDEFDELLIST?: string;
  CHARACTERISTICS?: RscollectionrsItemchcodesxml;
  CHARDELLIST?: string;
  VALLIST?: string;
  VALDELLIST?: string;
  DOMINANT_CLASSES?: RscollectionrsXmldomcls;
  CLASDELLIST?: string;
  UNITS?: RscollectionrsItemunitasgn;
  UNITDELLIST?: string;
  COMPOSITES?: RscollectionrsItemcmpxml;
  CMPDELLIST?: string;
  GL_LINKS?: RscollectionrsGlpostxml;
  SUPPLIERS?: RscollectionrsItemsuppxml;
  SUPPDELLIST?: string;
  WSLIST?: string;
  WSTOTLIST?: string;
  SUBSLIST?: string;
  SUBSDELLIST?: string;
  BOMLIST?: string;
  BOMDELLIST?: string;
  XBUFS?: string;
  XCNT?: number;
  ITEXT?: string;
  IMAGE?: string;
  LANGP?: string;
  XML_ATTRIBUTE?: number;
  DIST_POINT?: number;
  CAN_USE_IN_TRANS?: number;
  ISO_NR?: string;
  GROUP_NR?: string;
  PROD_COUNTRY?: string;
  ADD_TAX_REF?: number;
  EXT_ACC_FLAGS?: number;
  ADD_TAX_CODE?: string;
  MULTI_ADD_TAX?: number;
  ADDTAXLIST?: RscollectionrsAddtaxmultixml;
  ADDTAXDELLIST?: string;
  PACKET?: number;
  SALVAGE_VAL?: number;
  SELVAT?: number;
  RETURNVAT?: number;
  SELPRVAT?: number;
  RETURNPRVAT?: number;
  LOGOID?: string;
  LID_CONFIRMED?: number;
  QPRODS?: RscollectionrsItemqprodxml;
  QPRODDELLIST?: string;
  QPRODSUBCONTS?: RscollectionrsItemqprodxml;
  QPRODSUBCONTDELLIST?: string;
  GTIPCODE?: string;
  B2CCODE?: string;
  MARKREF?: number;
  MARKCODE?: string;
  IMG2INC?: number;
  EXPCTGNR?: string;
  EXTCRD_FLAGS?: number;
  MIN_ORD_AMNT?: number;
  FREIGHT_PLACE?: string;
  FREIGHT_TYPE_CODE1?: string;
  FREIGHT_TYPE_CODE2?: string;
  FREIGHT_TYPE_CODE3?: string;
  FREIGHT_TYPE_CODE4?: string;
  FREIGHT_TYPE_CODE5?: string;
  FREIGHT_TYPE_CODE6?: string;
  FREIGHT_TYPE_CODE7?: string;
  FREIGHT_TYPE_CODE8?: string;
  FREIGHT_TYPE_CODE9?: string;
  FREIGHT_TYPE_CODE10?: string;
  FREIGHT_TYPE_DEF1?: number;
  FREIGHT_TYPE_DEF2?: number;
  FREIGHT_TYPE_DEF3?: number;
  FREIGHT_TYPE_DEF4?: number;
  FREIGHT_TYPE_DEF5?: number;
  FREIGHT_TYPE_DEF6?: number;
  FREIGHT_TYPE_DEF7?: number;
  FREIGHT_TYPE_DEF8?: number;
  FREIGHT_TYPE_DEF9?: number;
  FREIGHT_TYPE_DEF10?: number;
  QPRODAMNT?: number;
  QPROD_UOM?: number;
  QPROD_UNITCODE?: string;
  QPRODSOURCEINDEX?: number;
  QPROD_DEPARTMENT?: number;
  QPRODSUB_AMOUNT?: number;
  QPRODSUB_UOM?: number;
  QPRODSUB_UNITCODE?: string;
  QPRODSUB_SOURCEINDEX?: number;
  QPRODSUB_DEPARTMENT?: number;
  EXPCATEGORY?: string;
  EAN_BARCODE?: string;
  TEXTINCENG?: number;
  ITEXTENG?: string;
  LOSTFACTOR?: number;
  GENIUSFLDSLIST?: Rscollectionextendedfielddefinitions;
  DEPRCLASSTYPE?: string;
  ADD_COST?: number;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  WFLOWCARDREF?: number;
  ORGLOGOID?: string;
  CODE_CHANGED?: number;
  AVR_WH_DURAITON?: number;
  IMAGE1?: string;
  IMAGE1_SIZE?: number;
  IMAGE2?: string;
  IMAGE2_SIZE?: number;
  CANCONFIGURE?: number;
  CHARSETREF?: number;
  CHARSET?: string;
  CHARSETNAME?: string;
  VGEN_DATA_REFERENCE?: number;
  VRNTEXCEPTIONS?: RscollectionrsExclistnodexml;
  VRNTCODETEMPS?: RscollectionrsVrntcdtemplatexm;
  VRNTEXCPTEMPS?: RscollectionrsVrntcdtemplatexm;
  CONSCODEREF?: number;
  CONSCODE?: string;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  AUXIL_CODE2?: string;
  AUXIL_CODE3?: string;
  AUXIL_CODE4?: string;
  AUXIL_CODE5?: string;
  UPDATECHILDS?: number;
  CAN_DEDUCT?: number;
  EXPENSE?: number;
  EXIM_TAX1?: number;
  EXIM_TAX2?: number;
  EXIM_TAX3?: number;
  EXIM_TAX4?: number;
  EXIM_TAX5?: number;
  REYON_CODE?: string;
  KDV_DEPT_NR?: number;
  SCALES?: number;
  SCALE_NR?: number;
  ORIGIN?: string;
  NAME2?: string;
  APP_SPE_VAT_MATRAH?: number;
  NAME3?: string;
  NAME4?: string;
  GLOBAL_ID?: string;
  FLTIMAGE1?: number;
  FLTIMAGE2?: number;
  DEDUCT_CODE?: string;
  DEDUCT_DEF?: string;
  SALE_DEDUCTION_PART1?: number;
  SALE_DEDUCTION_PART2?: number;
  PURCH_DEDUCTION_PART1?: number;
  PURCH_DEDUCTION_PART2?: number;
  CATEGORY_ID?: string;
  CATEGORY_NAME?: string;
  KEYWORD1?: string;
  KEYWORD2?: string;
  KEYWORD3?: string;
  KEYWORD4?: string;
  KEYWORD5?: string;
  SUBSGOOD_CODE?: string;
  PRODUCT_LEVEL?: number;
  PORD_AMOUNT_TOLERANCE?: number;
  SORD_AMOUNT_TOLERANCE?: number;
  ALTERNATIVES?: Rscollectionitemalternatives;
  LABEL_LIST?: RscollectionrsLabelxml;
  CPA_CODE?: string;
  PUBLICCOUNTRYREF?: number;
  PUBLIC_COUNTRY_CODE?: string;
  PUBLIC_COUNTRY_NAME?: string;
  FA_USEFUL_LIFE_CODE1?: string;
  FA_USEFUL_LIFE_CODE2?: string;
  MOLD?: number;
  MOLD_LIFETRACKTYPE?: number;
  MOLD_USAGELIFE?: number;
  MOLD_FACTOR?: number;
  MOLD_MAINTNUMBER?: number;
  MOLD_MAINTLIFETYPE?: number;
  MOLD_MAINTLIFE?: number;
  MOLD_LIFEASRATIO?: number;
  MOLD_MAINTTYPE?: number;
  MOLD_MAINTBEGDATE?: string;
  MOLD_MAINTPERIOD?: number;
  MOLD_MAINTPERUNIT?: number;
  OBTAIN_TYPE?: number;
  GAIN_TYPE?: number;
  FORE_CAST_CODE?: string;
  SALES_LIMIT_QUANTITY?: number;
  NO_DISCOUNT?: number;
  LEVEL_CONTROL?: number;
  GUID?: string;
  TSENR?: string;
  PAYERNAME?: string;
  PAYERSUBTITLE?: string;
  PAYERBARCODE?: string;
  PAYERPURCHPRICE?: number;
  PAYERSALESPRICE?: number;
  PAYERID?: string;
  PAYERACTIVE?: number;
  PURCH_DEDUCT_CODE?: string;
  EXIMREGTYPREF?: number;
  PROFITMARGINRATE?: number;
  ORDCMPRICETYPECODE?: string;
  PURCHDISPRATETOT?: number;
  SALESDISPRATETOT?: number;
  ADDTAXPURCHBRWS?: number;
  ADDTAXSALESBRWS?: number;
  DRAFTOFFERBRWS?: number;
  PRODCLREF?: number;
  TIBBICIHAZ?: number;
  GTIN_UNO?: string;
}

/**
 * Interface for RSCollection[RS_ItemFactoryXML]
 */
export interface RscollectionrsItemfactoryxml {
  Meta?: Meta;
  items?: RsItemfactoryxml[];
}

/**
 * Interface for RS_ItemFactoryXML
 */
export interface RsItemfactoryxml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  FACTORYNR?: number;
  ITEMREF?: number;
  SPECIALIZED?: number;
  PROCURECLASS?: number;
  LOWLEVELCODE?: number;
  DIVLOTSIZE?: number;
  MRPCNTRL?: number;
  PLANPOLICY?: number;
  LOTSIZINGMTD?: number;
  FIXEDLOTSIZE?: number;
  YIELD?: number;
  MINORDERQTY?: number;
  MAXORDERQTY?: number;
  MULTORDERQTY?: number;
  MINORDERDAY?: number;
  MAXORDERDAY?: number;
  REORDERPOINT?: number;
  AUTOMTRISSUE?: number;
  PLANNERREF?: string;
  BUYERREF?: string;
  SELADMINREF?: string;
  CSTANALYSTREF?: string;
  DEFSERILOTNO?: string;
  AUTOLOTOUTMTD?: number;
  LOTPARTY?: number;
  OUTLOTSIZE?: number;
  COUNTFORMPS?: number;
  LOT_SIZING_MTD2?: number;
  FIXED_LOT_SIZE2?: number;
  YIELD2?: number;
  MIN_ORDER_QTY2?: number;
  MAX_ORDER_QTY2?: number;
  MULT_ORDER_QTY2?: number;
  FACTORYNAME?: string;
  CLAS?: number;
  DOMINANTFLAG?: number;
  DOMINANTREF?: number;
  DOMINANTCODE?: string;
  UPDATED?: number;
  PROCURE_INVEN?: number;
}

/**
 * Interface for RSCollection[RS_ItemInvenXML]
 */
export interface RscollectionrsIteminvenxml {
  Meta?: Meta;
  items?: RsIteminvenxml[];
}

/**
 * Interface for RS_ItemInvenXML
 */
export interface RsIteminvenxml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  WH_NUMBER?: number;
  ITEMREF?: number;
  MIN_LEVEL?: number;
  MAX_LEVEL?: number;
  SAFETY_LEVEL?: number;
  LOCATION_CODE?: string;
  LOCATIONREF?: number;
  PERIOD_CLOSE_DATE?: string;
  ABC_CODE?: number;
  IO_FLAG?: number;
  MIN_LEVEL_FLAG?: number;
  MAX_LEVEL_FLAG?: number;
  SAFETY_LEVEL_FLAG?: number;
  BACKORDER_FLAG?: number;
  CLAS?: number;
  OUT_FLAG?: number;
}

/**
 * Interface for RSCollection[RS_ItemChCodesXML]
 */
export interface RscollectionrsItemchcodesxml {
  Meta?: Meta;
  items?: RsItemchcodesxml[];
}

/**
 * Interface for RS_ItemChCodesXML
 */
export interface RsItemchcodesxml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  ITEMREF?: number;
  CHARCODEREF?: number;
  CHARVALREF?: number;
  LINENR?: number;
  MATRIXLOC?: number;
  PRIORITY?: number;
  DLIST?: string;
  CCODE?: string;
  CNAME?: string;
  VALUES?: RscollectionrsItemchvaluesxml;
  VCODE?: string;
}

/**
 * Interface for RSCollection[RS_ItemChValuesXML]
 */
export interface RscollectionrsItemchvaluesxml {
  Meta?: Meta;
  items?: RsItemchvaluesxml[];
}

/**
 * Interface for RS_ItemChValuesXML
 */
export interface RsItemchvaluesxml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  ITEMREF?: number;
  CHARCODEREF?: number;
  CHARVALREF?: number;
  LINENR?: number;
  MATRIXLOC?: number;
  PRIORITY?: number;
  VLIST?: string;
  DLIST?: string;
  CCODE?: string;
  CNAME?: string;
  VCODE?: string;
  VNAME?: string;
}

/**
 * Interface for RSCollection[RS_XMLDomCls]
 */
export interface RscollectionrsXmldomcls {
  Meta?: Meta;
  items?: RsXmldomcls[];
}

/**
 * Interface for RS_XMLDomCls
 */
export interface RsXmldomcls {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  DOM_TYPE?: number;
  CLASS_CODE?: string;
}

/**
 * Interface for RSCollection[RS_ItemUnitAsgn]
 */
export interface RscollectionrsItemunitasgn {
  Meta?: Meta;
  items?: RsItemunitasgn[];
}

/**
 * Interface for RS_ItemUnitAsgn
 */
export interface RsItemunitasgn {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  UNITLINEREF?: number;
  UNIT_CODE?: string;
  BARCODE?: string;
  USEF_MTRLCLASS?: number;
  USEF_PURCHCLAS?: number;
  USEF_SALESCLAS?: number;
  MTRL_PRIORITY?: number;
  PURCH_PRIORTY?: number;
  SALES_PRIORITY?: number;
  WIDTH?: number;
  LENGTH?: number;
  HEIGHT?: number;
  AREA?: number;
  VOLUME?: number;
  WEIGHT?: number;
  WIDTHREF?: number;
  LENGTHREF?: number;
  HEIGHTREF?: number;
  AREAREF?: number;
  VOLUMEREF?: number;
  WEIGHTREF?: number;
  GROSS_VOLUME?: number;
  GROSS_WEIGHT?: number;
  GROSSVOLREF?: number;
  GROSSWGHTREF?: number;
  CONV_FACT1?: number;
  CONV_FACT2?: number;
  EXT_ACC_FLAGS?: number;
  WIDTH_CODE?: string;
  LENGTH_CODE?: string;
  HEIGHT_CODE?: string;
  AREA_CODE?: string;
  VOLUME_CODE?: string;
  WEIGHT_CODE?: string;
  GROSS_VOL_CODE?: string;
  GROSS_WGHT_CODE?: string;
  XML_ATTRIBUTE?: number;
  DATA_REFERENCE?: number;
  DATA_SITEID?: number;
  INTERNAL_REFERENCE?: number;
  BARCODE2?: string;
  BARCODE3?: string;
  WITHUNIT_BARCODE?: string;
  WBARCODESHIFT?: number;
  BARCODE_LIST?: RscollectionrsBarcodexml;
  GLOBAL_ID?: string;
  FORMULA?: string;
}

/**
 * Interface for RSCollection[RS_BarCodeXML]
 */
export interface RscollectionrsBarcodexml {
  Meta?: Meta;
  items?: RsBarcodexml[];
}

/**
 * Interface for RS_BarCodeXML
 */
export interface RsBarcodexml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  ITMUNITAREF?: number;
  ITEMREF?: number;
  VARIANTREF?: number;
  UNITLINEREF?: number;
  LINENR?: number;
  BARCODE?: string;
  DATA_SITEID?: number;
  XML_ATTRIBUTE?: number;
  DATA_REFERENCE?: number;
  TYPE?: number;
  WBARCODESHIFT?: number;
  GLOBAL_ID?: string;
  CREATED_BY?: number;
  DATE_CREATED?: string;
  HOUR_CREATED?: number;
  MIN_CREATED?: number;
  SEC_CREATED?: number;
  MODIFIED_BY?: number;
  DATE_MODIFIED?: string;
  HOUR_MODIFIED?: number;
  MIN_MODIFIED?: number;
  SEC_MODIFIED?: number;
}

/**
 * Interface for RSCollection[RS_ItemCmpXML]
 */
export interface RscollectionrsItemcmpxml {
  Meta?: Meta;
  items?: RsItemcmpxml[];
}

/**
 * Interface for RS_ItemCmpXML
 */
export interface RsItemcmpxml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  CODE?: string;
  STCREF?: number;
  QUANTITY?: number;
  PRICE?: number;
  SHARE_PERC?: number;
  MAINCREF?: number;
  LINENO?: number;
  DESCRIPTION?: string;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  ALT_ITEM_USE?: number;
  UNIT_CONV1?: number;
  UNIT_CONV2?: number;
  UNIT_CONV3?: number;
  UNIT_CONV4?: number;
  UNIT_CONV5?: number;
  UNIT_CONV6?: number;
  UNIT_CONV7?: number;
  UNIT_CONV8?: number;
  GROSS_U_INFO1?: number;
  GROSS_U_INFO2?: number;
}

/**
 * Interface for RSCollection[RS_ItemSuppXML]
 */
export interface RscollectionrsItemsuppxml {
  Meta?: Meta;
  items?: RsItemsuppxml[];
}

/**
 * Interface for RS_ItemSuppXML
 */
export interface RsItemsuppxml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  ITEMREF?: number;
  SUPPLY_TYPE?: number;
  PRIORITY?: number;
  LINE_NO?: number;
  CLIENTREF?: number;
  TRADING_GRP?: string;
  CL_CARD_TYPE?: number;
  QCC_CHECK?: number;
  LEAD_TIME?: number;
  MAX_QUANTITY?: number;
  MIN_QUANTITY?: number;
  BEG_DATE?: string;
  SPECIALIZED?: number;
  ICUST_SUP_CODE?: string;
  ICUST_SUP_NAME?: string;
  QTY_DEP_LEAD_TIME?: number;
  ARP_CODE?: string;
  PACKETREF?: number;
  PACKET_CODE?: string;
  PACKAGING_AMNT?: number;
  PACKAGINGUOMREF?: number;
  UNIT_CODE?: string;
  PACKET_USE_TYPE?: number;
  UNITSET_CODE?: string;
  ORD_PERC?: number;
  ORD_FREC?: number;
  VARIANT_REF?: number;
}

/**
 * Interface for RSCollection[RS_ItemQProdXML]
 */
export interface RscollectionrsItemqprodxml {
  Meta?: Meta;
  items?: RsItemqprodxml[];
}

/**
 * Interface for RS_ItemQProdXML
 */
export interface RsItemqprodxml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  STCREF?: number;
  AMNT?: number;
  PRICE?: number;
  PERC?: number;
  MAINCREF?: number;
  LINENO?: number;
  LOSTFACTOR?: number;
  SOURCEINDEX?: number;
  DEPARTMENT?: number;
  UOMREF?: number;
  CARDTYPE?: number;
  SCODE?: string;
  SDEF?: string;
  UEDIT?: string;
  UUNIT?: string;
  CLIENTREF?: number;
  ARP_CODE?: string;
  COMP_TYPE?: number;
  ALT_ITEM_USE?: number;
  UNIT_CONV1?: number;
  UNIT_CONV2?: number;
  UNIT_CONV3?: number;
  UNIT_CONV4?: number;
  UNIT_CONV5?: number;
  UNIT_CONV6?: number;
  UNIT_CONV7?: number;
  UNIT_CONV8?: number;
  GROSS_U_INFO1?: number;
  GROSS_U_INFO2?: number;
}

/**
 * Interface for RSCollection[RS_ExcListNodeXML]
 */
export interface RscollectionrsExclistnodexml {
  Meta?: Meta;
  items?: RsExclistnodexml[];
}

/**
 * Interface for RS_ExcListNodeXML
 */
export interface RsExclistnodexml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  EINFOSZ?: number;
  EPOLICY?: number;
  NUMOFVAL?: number;
  CHAR_CODE?: string;
  VALREFSLIST?: RscollectionrsExclistnodevalxm;
}

/**
 * Interface for RSCollection[RS_ExcListNodeValXM]
 */
export interface RscollectionrsExclistnodevalxm {
  Meta?: Meta;
  items?: RsExclistnodevalxm[];
}

/**
 * Interface for RS_ExcListNodeValXM
 */
export interface RsExclistnodevalxm {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  VALREF?: number;
  VALCODE?: string;
}

/**
 * Interface for RSCollection[RS_VrntCdTemplateXM]
 */
export interface RscollectionrsVrntcdtemplatexm {
  Meta?: Meta;
  items?: RsVrntcdtemplatexm[];
}

/**
 * Interface for RS_VrntCdTemplateXM
 */
export interface RsVrntcdtemplatexm {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  TYP?: number;
  ITEMREF?: number;
  INCREMENT?: number;
  CHARREF?: number;
  LENGTH?: number;
  SSTART?: string;
  SEND?: string;
  CHARVALREF?: number;
  CHARABBREV?: string;
  LINENR?: number;
  DATA_SITEID?: number;
  XML_ATTRIBUTE?: number;
  DATA_REFERENCE?: number;
  CHARCODE?: string;
  INCCODE?: string;
  TILLCODE?: string;
  FIRSTTIME?: number;
  VISITED?: number;
  VCOUNT?: number;
  COUNT?: number;
  TEMPVALS?: RscollectionrsVrntcdtempvaluex;
  DELLIST?: string;
}

/**
 * Interface for RSCollection[RS_VrntCdTempValueX]
 */
export interface RscollectionrsVrntcdtempvaluex {
  Meta?: Meta;
  items?: RsVrntcdtempvaluex[];
}

/**
 * Interface for RS_VrntCdTempValueX
 */
export interface RsVrntcdtempvaluex {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  CHARVALREF?: number;
  CHARCODEREF?: number;
  CHARVALCODE?: string;
  CHARABBREV?: string;
  VALCHECKED?: number;
  INTERNAL_REFERENCE?: number;
}

/**
 * Interface for RSCollection[itemAlternatives]
 */
export interface Rscollectionitemalternatives {
  Meta?: Meta;
  items?: ItemAlternatives[];
}

/**
 * Interface for itemAlternatives
 */
export interface ItemAlternatives {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  MAINITEMREF?: number;
  SUBITEMREF?: number;
  LINE_NO?: number;
  PRIORITY?: number;
  CONV_FACT1?: number;
  CONV_FACT2?: number;
  MAX_QUANTITY?: number;
  MIN_QUANTITY?: number;
  BEG_DATE?: string;
  END_DATE?: string;
  SUBS_CODE?: string;
  MAIN_CODE?: string;
  DATA_SITEID?: number;
  XML_ATTRIBUTE?: number;
  DATA_REFERENCE?: number;
  MAINVRNTREF?: number;
  SUBVRNTREF?: number;
  MAIN_VRNTCODE?: string;
  SUBS_VRNTCODE?: string;
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
 * RsBanktransxml transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
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
 * RsPaylstxml transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
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
 * Represents individual transaction records within a BankSlips collection.
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
 * Represents individual transaction records within a BankSlips collection.
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
 * Represents individual transaction records within a BankSlips collection.
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
 * PurchaseInvoices transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
 */
export interface PurchaseInvoices extends BaseEntity {
  GRPCODE?: number;
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
  OHP_CODE?: string;
  CENTERREF?: number;
  GL_CODE?: string;
  ACCOUNTREF?: number;
  SOURCE_WH?: number;
  SOURCE_COST_GRP?: number;
  CANCELLED?: number;
  CANCEL_DATE?: string;
  GL_POSTED?: number;
  PAIDINCASH?: number;
  FROMSAFE?: number;
  POST_FLAGS?: number;
  VAT_RATE?: number;
  ADD_DISCOUNTS?: number;
  TOTAL_DISCOUNTS?: number;
  TOTAL_DISCOUNTED?: number;
  ADD_EXPENSES?: number;
  TOTAL_EXPENSES?: number;
  EXPENSE_DISTRB?: number;
  TOTAL_DEPOSITED?: number;
  TOTAL_PROMOTIONS?: number;
  TOTAL_GROSSVINC?: number;
  TOTAL_VAT?: number;
  TOTAL_GROSS?: number;
  TOTAL_NET?: number;
  NOTES1?: string;
  NOTES2?: string;
  NOTES3?: string;
  NOTES4?: string;
  NOTES5?: string;
  NOTES6?: string;
  INTEREST_ACCRD?: number;
  CURR_INVOICE?: number;
  TC_XRATE?: number;
  TC_NET?: number;
  RC_XRATE?: number;
  RC_NET?: number;
  SINGLE_PAYMENT?: number;
  KASTRANSREF?: number;
  PAYMENT_CODE?: string;
  PAYDEFREF?: number;
  PRINT_COUNTER?: number;
  PRINT_DATE?: string;
  VAT_INCLUDED_GRS?: number;
  DIVISION?: number;
  DEPARTMENT?: number;
  ACCFICHEREF?: number;
  ADDEXPACCREF?: number;
  ADDEXPCENTREF?: number;
  PRICE_UPD_NEG?: number;
  SALESMAN_CODE?: string;
  SALESMANREF?: number;
  CANCELLEDACC?: number;
  SHIPMENT_TYPE?: string;
  SHIPPING_AGENT?: string;
  TRACK_NR?: string;
  CURRSEL_TOTALS?: number;
  CURRSEL_DETAILS?: number;
  TRADING_GRP?: string;
  FACTORY?: number;
  DISPATCH_DATE?: number;
  DISP_NUMBER?: string;
  DISPATCHES?: Rscollectionpurchasedispatches;
  TRANSACTIONS?: RscollectionrsDesptransxml;
  PAYMENT_LIST?: RscollectionrsPaylstxml;
  DETLINES?: string;
  STOPAJ_RATE?: number;
  SSDF_RATE?: number;
  BORSA_RATE?: number;
  KOMISYON_RATE?: number;
  KOMKDV_RATE?: number;
  BAGKUR_RATE?: number;
  STOPAJ?: number;
  SSDF?: number;
  BORSA?: number;
  KOMISYON?: number;
  KOMKDV?: number;
  BAGKUR?: number;
  EK1_PER?: number;
  EK1?: number;
  EK2_PER?: number;
  EK2?: number;
  STOPAJACC?: string;
  STOPAJACCREF?: number;
  SSDFACC?: string;
  SSDFACCREF?: number;
  BORSAACC?: string;
  BORSAACCREF?: number;
  KOMISYONACC?: string;
  KOMISYONACCREF?: number;
  KOMKDVACC?: string;
  KOMKDVACCREF?: number;
  BAGKURACC?: string;
  BAGKURACCREF?: number;
  STOPAJCOST?: string;
  STOPAJCREF?: number;
  SSDFCOST?: string;
  SSDFCREF?: number;
  BORSACOST?: string;
  BORSACREF?: number;
  KOMISYONCOST?: string;
  KOMISYONCREF?: number;
  KOMKDVCOST?: string;
  KOMKDVCREF?: number;
  BAGKURCOST?: string;
  BAGKURCREF?: number;
  KOM_TYPE?: number;
  EK1ACC?: string;
  EK1ACCREF?: number;
  EK2ACC?: string;
  EK2ACCREF?: number;
  EK1COST?: string;
  EK1CREF?: number;
  EK2COST?: string;
  EK2CREF?: number;
  EK3ACC?: string;
  EK3ACCREF?: number;
  EK4ACC?: string;
  EK4ACCREF?: number;
  EK5ACC?: string;
  EK5ACCREF?: number;
  EK3COST?: string;
  EK3CREF?: number;
  EK4COST?: string;
  EK4CREF?: number;
  EK5COST?: string;
  EK5CREF?: number;
  STOPAJ_CALC_TYPE?: number;
  BAGKUR_CALC_TYPE?: number;
  XBUFS?: string;
  DOCALS?: string;
  ITEXT?: string;
  DISTORDERREF?: number;
  COSTOFSALEFCREF?: number;
  DLV_CLIENT?: number;
  OP_STATUS?: number;
  TOTAL_ADD_TAX?: number;
  PAYMENT_TYPE?: number;
  ACCOUNTED_CNT?: number;
  INFLATION_IDX?: number;
  CASH_TRAN_GRP_NO?: string;
  CASH_TRAN_GRPLINE_NO?: number;
  CASH_INFLDX?: number;
  ORGLOGOID?: string;
  FROM_EXIM?: number;
  CASH_ORGLOGOID?: string;
  FRG_TYP_CODE?: string;
  FRG_TYP_DESC?: string;
  EXIM_FICHE_TYPE?: number;
  GENIUSFLDSLIST?: Rscollectionextendedfielddefinitions;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  WFLOWCARDREF?: number;
  STATUS?: number;
  DEDUCTIONPART1?: number;
  DEDUCTIONPART2?: number;
  DATA_LINK_REFERENCE?: number;
  TOTALEXADDTAX?: number;
  EXACCOUNTED?: number;
  FROMBANK?: number;
  BNTRANSREF?: number;
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
  FROMORDWITHPAY?: number;
  INTEL_LIST?: RscollectionrsIntellistxml;
  GRPFIRMTRANS?: number;
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
  CONTROL_INFO?: number;
  POS_TRANSFER_INFO?: number;
  TAX_FREE_CHECK?: number;
  PASSPORT_NO?: string;
  CREDIT_CARD_NO?: string;
  CREDIT_CARD_NUMBER?: string;
  APPROVE?: number;
  APPROVE_DATE?: string;
  ACC_FICHE_SITEID?: number;
  PREACCLINES?: RscollectionrsPreaccdistlnxml;
  ENTRUST?: number;
  EK3_PER?: number;
  EK3?: number;
  EK4_PER?: number;
  EK4?: number;
  EK5_PER?: number;
  EK5?: number;
  DOC_DATE?: string;
  AUTOFILL_SLDETAILS?: number;
  EINVOICE?: number;
  PROFILE_ID?: number;
  GUID?: string;
  ESEND_DATE?: string;
  ESTATUS?: number;
  ESTARTDATE?: string;
  EENDDATE?: string;
  EDESCRIPTION?: string;
  EDURATION?: number;
  EDURATION_TYPE?: number;
  EINSTEAD_OF_DISPATCH?: number;
  EINVOICE_SENDCUSTOM?: number;
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
  PAYPLAN_GLOBAL_CODE?: string;
  TRCURR_GLOBAL_CODE?: string;
  EDTCURR_GLOBAL_CODE?: string;
  CANCEL_AUTO_GL_PROC?: number;
  FILL_GL_CODES_CONN?: number;
  FILL_GL_CODES_CARD?: number;
  GLOBAL_ID?: string;
  DEVIR?: number;
  LOC_CONTROL_OFF?: number;
  CANT_CRE_DEDUCT?: number;
  VATEXCEPT_REASON?: string;
  VATEXCEPT_CODE?: string;
  ADDTAXEXCEPT_REASON?: string;
  ADDTAXEXCEPT_CODE?: string;
  EINVOICE_TYPE?: number;
  TOTAL_NET_STR?: string;
  TR_NET_STR?: string;
  CANCEL_AUTO_CAMP_PROC?: number;
  CAMPAIGN_CODE?: string;
  SHIPLOC_DEF?: string;
  TOTAL_SERVICES?: number;
  FROMEXCHDIFF?: number;
  EXIMVAT?: number;
  SERIAL_CODE?: string;
  CHECK_CLDAILYDEDUCTLIMIT?: number;
  STAFF_OTHER_EXPENSES?: number;
  OFFER_REFERENCE?: number;
  NO_CALCULATE?: number;
  APPLY_ARP_DISCOUNT?: number;
  MARKREF?: number;
  MARK_CODE?: string;
  EARCHIVEDETR_LOGICALREF?: number;
  EARCHIVEDETR_INVOICEREF?: number;
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
  EARCHIVEDETR_OLDEARCHIVESTATUS?: number;
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
  EBOOK_DOCDATE?: string;
  EBOOK_NODOCUMENT?: number;
  EBOOK_DOCNR?: string;
  EBOOK_DOCTYPE?: number;
  EBOOK_EXPLAIN?: string;
  EBOOK_PAYTYPE?: string;
  EBOOK_NOPAY?: number;
  EPRODUCER_STATUS?: number;
  EPRODUCER_SENDMOD?: number;
  EPRODUCER_TAXNR?: string;
  EPRODUCER_TCKNO?: string;
  EPRODUCER_NAME?: string;
  EPRODUCER_SURNAME?: string;
  EPRODUCER_DEFINITION?: string;
  EPRODUCER_ADDR1?: string;
  EPRODUCER_ADDR2?: string;
  EPRODUCER_CITYCODE?: string;
  EPRODUCER_CITY?: string;
  EPRODUCER_COUNTRYCODE?: string;
  EPRODUCER_COUNTRY?: string;
  EPRODUCER_POSTCODE?: string;
  EPRODUCER_DISTRICTCODE?: string;
  EPRODUCER_DISTRICT?: string;
  EPRODUCER_TOWNCODE?: string;
  EPRODUCER_TOWN?: string;
  EPRODUCER_EMAILADDR?: string;
  EPRODUCER_ISCOMP?: number;
  EPRODUCER_DELIVERYDATEORG?: number;
  EPRODUCER_DELIVERYDATE?: string;
  EPRODUCER_ISPERCURR?: number;
  IS_OKC_FICHE?: number;
  OKCINFO_LIST?: RscollectionrsOkcinfoxml;
  EXIM_PAYTYPEREF?: number;
  EXIM_PAYTYPE_CODE?: string;
  EXIM_PAYTYPE_NAME?: string;
  EXIM_BRBANKREF?: number;
  EXIM_BRBANK_CODE?: string;
  EXIM_BRBANK_NAME?: string;
  DELIVERY_CODE?: string;
  ACCEPT_EINV_PUBLIC?: number;
  PUBLICBNACCREF?: number;
  PUBLIC_BNACC_CODE?: string;
  PUBLIC_BNACC_IBAN?: string;
  PUBLIC_BNACC_CURRENCY?: number;
  TYPE_CODE?: string;
  FUTURE_MONTH_YREXPINC?: number;
  DOC_DETAIL?: number;
  CALC_ADD_TAX_VAT_SEP?: number;
  ELECT_DOC?: number;
  LABEL_LIST?: RscollectionrsLabelxml;
  FROMINTEGTYPE?: number;
  FILL_TRDGRP?: number;
  EPRINTCNT?: number;
  RIGHTOFRETURNTYP?: string;
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
  COSFCREFINFL?: number;
  ESENDTIME?: number;
  RECEIPT?: number;
  INEFFECTIVECOST?: number;
}

/**
 * PurchaseDispatches transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
 */
export interface PurchaseDispatches extends BaseEntity {
  GRPCODE?: number;
  TYPE?: number;
  IOCODE?: number;
  NUMBER?: string;
  DOC_TRACK_NR?: string;
  PRINTED_DESP_NUMBER?: string;
  DATE?: string;
  TIME?: number;
  DOC_NUMBER?: string;
  INVOICE_NUMBER?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  INVOICEREF?: number;
  ARP_CODE?: string;
  CLIENTREF?: number;
  ARP_CODE_SHPM?: string;
  RECVREF?: number;
  SHIPLOC_CODE?: string;
  SHIPLOC_DEF?: string;
  GL_CODE?: string;
  ACCOUNTREF?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
  PRODORDERREF?: number;
  PORDER_NUMBER?: string;
  PORDER_SLP_INRESERVE?: number;
  PORDER_TYPE?: number;
  QPROD_TYPE?: number;
  SOURCE_TYPE?: number;
  SOURCE_WH?: number;
  SOURCEWSCODE?: string;
  SOURCEWSREF?: number;
  SOURCEPOLNREF?: number;
  SOURCE_COST_GRP?: number;
  DEST_TYPE?: number;
  DEST_WH?: number;
  DESTWSCODE?: string;
  DESTWSREF?: number;
  DESTPOLNREF?: number;
  DEST_COST_GRP?: number;
  FACTORY?: number;
  DIVISION?: number;
  DEPARTMENT?: number;
  DEST_DIVISION?: number;
  DEST_DEPARTMENT?: number;
  DEST_FACTORY?: number;
  PROD_STATUS?: number;
  DEVIR?: number;
  CANCELLED?: number;
  INVOICED?: number;
  GL_POSTED?: number;
  INUSE?: number;
  INVOICE_TYPE?: number;
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
  NOTES1?: string;
  NOTES2?: string;
  NOTES3?: string;
  NOTES4?: string;
  NOTES5?: string;
  NOTES6?: string;
  RC_RATE?: number;
  RC_NET?: number;
  EXTENREF?: number;
  PAYMENT_CODE?: string;
  PAYDEFREF?: number;
  PRINT_COUNTER?: number;
  PRINT_DATE?: string;
  FICHECNT?: number;
  ACCFICHEREF?: number;
  SALESMANCODE?: string;
  SALESMANREF?: number;
  GL_POST_CANCL?: number;
  SHIPMENT_TYPE?: string;
  SHIPPING_AGENT?: string;
  TRACK_NR?: string;
  CURRSEL_TOTALS?: number;
  CURRSEL_DETAILS?: number;
  TRADING_GRP?: string;
  ORIG_NUMBER?: string;
  TRANSACTIONS?: RscollectionrsDesptransxml;
  ACCLIST?: string;
  XBUFS?: string;
  PFICHENO?: string;
  PFICHEDATE?: number;
  SPOLINENO?: string;
  DPOLINENO?: string;
  DOCALS?: string;
  ITEXT?: string;
  DISTORDERREF?: number;
  DLV_CLIENT?: number;
  DOC_TRACKING_NR?: string;
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
  SHP_INF_REF?: number;
  EXIM_WH_FICHEREF?: number;
  EXIM_WH_FICHENO?: string;
  EXIM_FICHE_TYPE?: number;
  CURR_TRANSACTION?: number;
  TC_RATE?: number;
  TC_NET?: number;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  WFLOWCRDREF?: number;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  UPDCURR?: number;
  UPDTRCURR?: number;
  TOTALEXADDTAX?: number;
  AFFECT_COLLATRL?: number;
  STATUS?: number;
  GRPFIRMTRANS?: number;
  DEDUCTIONPART1?: number;
  DEDUCTIONPART2?: number;
  CANT_CRE_DEDUCT?: number;
  AFFECT_RISK?: number;
  EXCHINFO_INTERNAL_REFERENCE?: number;
  EXCHINFO_FICHE_REF?: number;
  EXCHINFO_ADD_DISCOUNTS?: number;
  EXCHINFO_TOTAL_DISCOUNTS?: number;
  EXCHINFO_TOTAL_DISCOUNTED?: number;
  EXCHINFO_ADD_EXPENSES?: number;
  EXCHINFO_TOTAL_EXPENSES?: number;
  EXCHINFO_DIST_EXPENSES?: number;
  EXCHINFO_TOTAL_DEPOZITO?: number;
  EXCHINFO_TOTAL_PROMOTIONS?: number;
  EXCHINFO_VAT_INC_GROSS?: number;
  EXCHINFO_TOTAL_VAT?: number;
  EXCHINFO_GROSS_TOTAL?: number;
  EXCHINFO_TOTAL_ADD_TAX?: number;
  EXCHINFO_TOTAL_EX_ADD_tAX?: number;
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
  DISP_STATUS?: number;
  AUTOFILL_SLDETAILS?: number;
  MAIN_MF_REFERENCE?: number;
  MAIN_MF_SITEID?: number;
  GUID?: string;
  GLOBAL_ID?: string;
  LOC_CONTROL_OFF?: number;
  CANCEL_AUTO_CAMP_PROC?: number;
  CAMPAIGN_CODE?: string;
  OFFER_REFERENCE?: number;
  NO_CALCULATE?: number;
  APPLY_ARP_DISCOUNT?: number;
  SHIP_DATE?: string;
  SHIP_TIME?: number;
  DOC_DATE?: string;
  DOC_TIME?: number;
  FROMORDWITHPAY?: number;
  DELIVERY_CODE?: string;
  DEST_STATUS?: number;
  CANCEL_EXP?: string;
  UNDO_EXP?: string;
  CANCEL_DATE?: string;
  CREATE_WHERE?: number;
  PUBLICBNACCREF?: number;
  PUBLIC_BNACC_CODE?: string;
  PUBLIC_BNACC_IBAN?: string;
  PUBLIC_BNACC_CURRENCY?: number;
  ACCEPT_EINV_PUBLIC?: number;
  VATEXCEPT_CODE?: string;
  VATEXCEPT_REASON?: string;
  ADDTAXEXCEPT_CODE?: string;
  ADDTAXEXCEPT_REASON?: string;
  TAX_FREE_CHECK?: number;
  TOTAL_NET_STR?: string;
  TR_NET_STR?: string;
  IS_OKC_FICHE?: number;
  LABEL_LIST?: RscollectionrsLabelxml;
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
  EINVOICE_BUYERCLIENTREF?: number;
  EINVOICE_BUYERCLIENTCODE?: string;
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
  EARCHIVEDETR_OLDEARCHIVESTATUS?: number;
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
  EARCHIVEDETR_BUYERCLIENTREF?: number;
  EARCHIVEDETR_BUYERCLIENTCODE?: string;
  EPRODUCER_STATUS?: number;
  EPRODUCER_SENDMOD?: number;
  EPRODUCER_TAXNR?: string;
  EPRODUCER_TCKNO?: string;
  EPRODUCER_NAME?: string;
  EPRODUCER_SURNAME?: string;
  EPRODUCER_DEFINITION?: string;
  EPRODUCER_ADDR1?: string;
  EPRODUCER_ADDR2?: string;
  EPRODUCER_CITYCODE?: string;
  EPRODUCER_CITY?: string;
  EPRODUCER_COUNTRYCODE?: string;
  EPRODUCER_COUNTRY?: string;
  EPRODUCER_POSTCODE?: string;
  EPRODUCER_DISTRICTCODE?: string;
  EPRODUCER_DISTRICT?: string;
  EPRODUCER_TOWNCODE?: string;
  EPRODUCER_TOWN?: string;
  EPRODUCER_EMAILADDR?: string;
  EPRODUCER_ISCOMP?: number;
  EPRODUCER_DELIVERYDATEORG?: number;
  EPRODUCER_DELIVERYDATE?: string;
  EPRODUCER_ISPERCURR?: number;
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
 * RsDesptransxml transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
 */
export interface RsDesptransxml extends BaseEntity {
  TYPE?: number;
  MASTER_CODE?: string;
  STOCKREF?: number;
  PREVLINEREF?: number;
  PREVLINENO?: number;
  DETLINE?: number;
  TRCODE?: number;
  DATE?: string;
  FTIME?: number;
  DETAIL_LEVEL?: number;
  DISCEXP_CALC?: number;
  PRODORDERREF?: number;
  PORDER_TYPE?: number;
  QPROD_TYPE?: number;
  QPROD_ITEM_TYPE?: number;
  SUBCONTORDERREF?: number;
  SCORDER_NUMBER?: string;
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
  CLIENTREF?: number;
  ORDER_REFERENCE?: number;
  ORDER_NUMBER?: string;
  ORDER_SITE?: number;
  OFFERTRANS_REF?: number;
  OFFERTRANS_SITE?: number;
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
  PROMOTION_CODE?: string;
  PROMREF?: number;
  ADDITIONAL_ITEMS_CODE?: string;
  PAYMENT_CODE?: string;
  PAYDEFREF?: number;
  AUXIL_CODE?: string;
  DELVRY_CODE?: string;
  MERGED_COUNT?: number;
  QUANTITY?: number;
  PRICE?: number;
  TOTAL?: number;
  CURR_PRICE?: number;
  PC_PRICE?: number;
  CURR_TRANSACTION?: number;
  TC_XRATE?: number;
  RC_XRATE?: number;
  COST_DISTR?: number;
  DISCOUNT_DISTR?: number;
  EXPENSE_DISTR?: number;
  PROMOTION_DISTR?: number;
  DISCOUNT_RATE?: number;
  BASE_AMOUNT?: number;
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
  UNIT_CONV9?: number;
  VAT_INCLUDED?: number;
  VAT_RATE?: number;
  VAT_AMOUNT?: number;
  VAT_BASE?: number;
  VAT_ADJUSTMENT?: number;
  BILLED_ITEM?: number;
  BILLED?: number;
  COMPOSITE?: number;
  RET_COST_TYPE?: number;
  SOURCE_SITE?: number;
  SOURCE_REFERENCE?: number;
  RET_COST?: number;
  TC_RETCOST?: number;
  OUT_COST?: number;
  TC_OUTCOST?: number;
  RET_QUANTITY?: number;
  FIXAST_CODE?: string;
  FAREGREF?: number;
  FIXAST_STATUS?: number;
  CANCELLED?: number;
  TOTAL_NET?: number;
  DISTADDEXP?: number;
  FADACCREF?: number;
  FADCENTERREF?: number;
  FARACCREF?: number;
  FARCENTERREF?: number;
  PRICE_UPDATE?: number;
  PRICE_UPDCOST?: number;
  PRICE_UPDNEG?: number;
  LPRODSTAT?: number;
  PROD_EXPN_DISTR?: number;
  RC_PRICE_UPD?: number;
  RC_PRICE_UPDCOST?: number;
  SALESMANREF?: number;
  FAPLACCREF?: number;
  FAPLCENTERREF?: number;
  OUTPUT_CODE?: string;
  DREF?: number;
  COST_RATE?: number;
  XPRICEUPD?: number;
  XPRICE?: number;
  XREPRATE?: number;
  DISTCOEF?: number;
  QC_OK?: number;
  NET_DSC_FLAG?: number;
  NET_DSC_RATE?: number;
  NET_DSC_AMOUNT?: number;
  DISPATCH_NUMBER?: string;
  FA_INFO?: RscollectionrsFaregtrnxml;
  SL_DETAILS?: RscollectionrsSlloctrnxml;
  SLDELLIST?: string;
  DETAILS?: RscollectionrsDetmattrxml;
  DETDELLIST?: string;
  QCLIST?: RscollectionrsQccvalentryxml;
  DIST_ORD_SITEIID?: number;
  DIST_ORD_REFERENCE?: number;
  CAMPAIGN_INFOS?: RscollectionrsCampcodeslistxml;
  CAMPAIGN_POINT?: number;
  PROM_CLAS_ITEM_CODE?: string;
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
  MULTI_ADD_TAX?: number;
  ADDTAXLINELIST?: RscollectionrsAddtaxmultilinex;
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
  EDT_CURR?: number;
  EDT_PRICE?: number;
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
  SALEMANCODE?: string;
  FACTORY?: number;
  EXIM_FICHE_TYPE?: number;
  TRANS_EXP_LINE?: number;
  INS_EXP_LINE?: number;
  EXIM_PROC_NO?: number;
  EXIM_FILE_CODE?: string;
  EXIM_FILE_REF?: number;
  EXIM_FILELINENR?: number;
  EXIM_WHFICHE_NO?: string;
  EXIM_WHFICHE_REF?: number;
  EXIM_WHFICHE_LNNO?: number;
  GENIUSFLDSLIST?: Rscollectionextendedfielddefinitions;
  ITEXT?: string;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  DIIB_REF?: number;
  DIIB_CODE?: string;
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
  FROMORDWITHPAY?: number;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  CANCONFIG?: number;
  VCHARLIST?: string;
  FAREGDEFNFLDLIST?: Rscollectionextendedfielddefinitions;
  ADD_TAX_EFFECT_KDV?: number;
  AFFECT_RISK?: number;
  EXCHLINE_INTERNAL_REFERNCE?: number;
  EXCHLINE_TRANS_REF?: number;
  EXCHLINE_PRICE?: number;
  EXCHLINE_TOTAL?: number;
  EXCHLINE_DIST_COST?: number;
  EXCHLINE_DIST_DISC?: number;
  EXCHLINE_DIST_EXP?: number;
  EXCHLINE_DIST_PROM?: number;
  EXCHLINE_VAT_AMOUNT?: number;
  EXCHLINE_VAT_MATRAH?: number;
  EXCHLINE_LINE_NET?: number;
  EXCHLINE_DIST_ADD_EXP?: number;
  EXCHLINE_NET_DISC_AMOUNT?: number;
  EXCHLINE_VAT_CALC_DIFF?: number;
  EXCHLINE_EU_VAT_AMOUNT?: number;
  EXCHLINE_ADD_TAX_AMOUNT?: number;
  EXCHLINE_ADD_TAX_CONV_FACT?: number;
  EXCHLINE_ADD_TAX_DISC_AMOUNT?: number;
  EXCHLINE_EX_ADD_TAX_AMOUNT?: number;
  EXCHLINE_EX_ADD_TAX_CONVF?: number;
  ADD_TAX_VAT_MATRAH?: number;
  EXCHLINE_ADD_TAX_VAT_MATRAH?: number;
  PREACCLINES?: RscollectionrsPreaccdistlnxml;
  ADD_TAX_REF?: number;
  ADD_TAX_CODE?: string;
  ADD_TAX_DEF?: string;
  ADDTAX_GLOBAL_CODE?: string;
  UNIT_GLOBAL_CODE?: string;
  PAYPL_GLOBAL_CODE?: string;
  PRCURR_GLOBAL_CODE?: string;
  TRCURR_GLOBAL_CODE?: string;
  EDTCURR_GLOBAL_CODE?: string;
  CANDEDUCT?: number;
  MAIN_MT_REFERENCE?: number;
  MAIN_MT_SITEID?: number;
  MADE_OF_SHRED?: number;
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
  DEDUCTION_PART1?: number;
  DEDUCTION_PART2?: number;
  GUID?: string;
  FAD_GL_CODE?: string;
  AUXIL_CODE2?: string;
  VATEXCEPT_REASON?: string;
  VATEXCEPT_CODE?: string;
  ADDTAXEXCEPT_REASON?: string;
  ADDTAXEXCEPT_CODE?: string;
  DEDUCTION_TOT?: number;
  DEDUCTION_TOT_TC?: number;
  MASTER_DEF?: string;
  MASTER_DEF2?: string;
  MASTER_DEF3?: string;
  BARCODE?: string;
  PARENTLNREF?: number;
  DEDUCT_CODE?: string;
  DEDUCT_DEF?: string;
  FOREIGN_TRADE_TYPE?: number;
  DISTRIBUTION_TYPE_WHS?: number;
  DISTRIBUTION_TYPE_FNO?: number;
  ITM_PROD_COUNTRY_CODE?: string;
  ITM_PROD_COUNTRY_DEF?: string;
  INF_DATE?: string;
  DEST_STATUS?: number;
  REGTYPREF?: number;
  REG_TYPE_CODE?: string;
  CPA_CODE?: string;
  GTIP_CODE?: string;
  PUBLICCOUNTRYREF?: number;
  PUBLIC_COUNTRY_CODE?: string;
  PUBLIC_COUNTRY_NAME?: string;
  APPLY_ADD_TAX?: number;
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
  ADD_TAX_INLNNET?: number;
  ORDFICHECMREF?: number;
  PURCHACCREFINFL?: number;
  PURCHCENTREFINFL?: number;
  COSACCREFINFL?: number;
  COSCNTREFINFL?: number;
  PROUTCOSTINFLDIFF?: number;
  PROUTCOSTCRINFLDIFF?: number;
  ADD_TAX_TYPE?: number;
  ORGPRICE?: number;
  RETSOURCELINK?: number;
  DIIBLINECODE?: string;
}

/**
 * RsFaregtrnxml transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
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
 * Represents individual transaction records within a BankSlips collection.
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
 * Represents individual transaction records within a BankSlips collection.
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
 * Represents individual transaction records within a BankSlips collection.
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
 * Represents individual transaction records within a BankSlips collection.
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
 * RsCampcodeslistxml transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
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
 * RsAddtaxmultilinex transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
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
 * RsLabelxml transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
 */
export interface RsLabelxml extends BaseEntity {
  NAME?: string;
  DEFINITION?: string;
  USER_TYPE?: number;
}

/**
 * RsIntellistxml transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
 */
export interface RsIntellistxml extends BaseEntity {
  LOGICALREF?: number;
  INVOICEREF?: number;
  CLIENTREF?: number;
  INVOICEINFO1?: string;
  INVOICEINFO2?: string;
  INVOICEINFO3?: string;
  INVOICEINFO4?: string;
  INVOICEINFO5?: string;
  INVOICEINFO6?: string;
  INVOICEINFO7?: string;
  INVOICEINFO8?: string;
  INVOICEINFO9?: string;
  INVOICEINFO10?: string;
  INTELDESC?: string;
  LINENUM?: number;
}

/**
 * RsOkcinfoxml transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
 */
export interface RsOkcinfoxml extends BaseEntity {
  INVOICE_REFERENCE?: number;
  STFICHE_REFERENCE?: number;
  FICHE_TYPE?: number;
  FICHE_NUMBER?: string;
  DATE?: string;
  TIME?: number;
  SERIAL_NUMBER?: string;
  Z_NUMBER?: string;
  FIXED_VALUE?: string;
  LINE_NUMBER?: number;
}

/**
 * ChequeAndPnoteRolls transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
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
 * RsChqpntransxml transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
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
 * Represents individual transaction records within a BankSlips collection.
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
 * RsArptransxml transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
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
 * RsBankcrepayxml transaction line item
 *
 * Represents individual transaction records within a BankSlips collection.
 */
export interface RsBankcrepayxml extends BaseEntity {
  CREDITREF?: number;
  PER_NR?: number;
  TRANS_TYPE?: number;
  PARENT_REF?: number;
  DUE_DATE?: string;
  OPR_DATE?: string;
  LINE_NR?: number;
  TOTAL?: number;
  INT_TOTAL?: number;
  BSMV_TOTAL?: number;
  KKDF_TOTAL?: number;
  BANK_FICHE_REF?: number;
  MODIFIED?: number;
  BNACCREF?: number;
  TR_RATE_CR?: number;
  TR_RATE_ACC?: number;
  EARLY_INT_RATE?: number;
  EARLY_INT_TOT?: number;
  LATE_INT_RATE?: number;
  LATE_INT_TOT?: number;
  WFSTATUS?: number;
  LN_ACC_CODE?: string;
  LN_BN_CR_CODE?: string;
  TR_CURR_ACC?: number;
  TR_CURR_CR?: number;
  BANK_CREDIT_CODE?: string;
  TRANS_LINE_EXP?: string;
  TRANS_AUXIL_CODE?: string;
  INTEREST_RATE?: number;
  BSMV_RATE?: number;
  STRUCTED?: number;
  BNCRPARENTREF?: number;
  BANK_CREDIT_PARENT_CODE?: string;
}

/**
 * BankSlips entity interface based on swagger definition
 */
export interface BankSlips extends BaseEntity {
  DATE?: string;
  TIME?: number;
  NUMBER?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  DIVISION?: number;
  DEPARMENT?: number;
  TYPE?: number;
  MODULENR?: number;
  SOURCEFREF?: number;
  GL_POSTED?: number;
  CANCELLED?: number;
  SIGN?: number;
  TOTAL_DEBIT?: number;
  TOTAL_CREDIT?: number;
  NOTES1?: string;
  NOTES2?: string;
  NOTES3?: string;
  NOTES4?: string;
  PRINT_COUNTER?: number;
  PRINT_DATE?: string;
  CANCELLEDACC?: number;
  ACCFICHEREF?: number;
  CURRSEL_TOTALS?: number;
  CURRSEL_DETAILS?: number;
  RC_TOTAL_DEBIT?: number;
  RC_TOTAL_CREDIT?: number;
  TRANSACTIONS?: RscollectionrsBanktransxml;
  XBUFS?: string;
  DOCALS?: string;
  ITEXT?: string;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  BNACCREF?: number;
  BNACCCODE?: string;
  TRANGRPNO?: string;
  ATTACHMENT_INVOICE?: Rscollectionpurchaseinvoices;
  COLLATRL_ROLLFC?: string;
  COLLATRL_ROLLREF?: number;
  COLLATRL_ROLLTRNSREF?: number;
  BNCREREF?: number;
  BANK_CREDIT_CODE?: string;
  ORGLOGOID?: string;
  ATTACHMENT_ROLL?: Rscollectionchequeandpnoterolls;
  CRCARD_WIZARD?: number;
  APPROVE?: number;
  APPROVE_DATE?: string;
  ACC_FICHE_SITEID?: number;
  COLLATRL_CARD_REF?: number;
  COLLATRL_CARD_SITEID?: number;
  SALESMANREF?: number;
  SALESMAN_CODE?: string;
  CRCARD_FICHEREF?: number;
  FROM_CREDIT_CLOSE?: number;
  FROM_CURR_DIFF_PROC?: number;
  FROM_CR_STRUCT?: number;
  STATUS?: number;
  CANCEL_AUTO_GL_PROC?: number;
  BNCREPAYMENTLIST?: RscollectionrsBankcrepayxml;
  EBOOK_DOCDATE?: string;
  EBOOK_NODOCUMENT?: number;
  EBOOK_DOCNR?: string;
  EBOOK_DOCTYPE?: number;
  EBOOK_EXPLAIN?: string;
  EBOOK_PAYTYPE?: string;
  EBOOK_NOPAY?: number;
  GUID?: string;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  EXIMVAT?: number;
  PARTIALCSPAYREF?: number;
}

/**
 * Union type of all BankSlips field names for type-safe field selection and sorting
 */
export type BankSlipsField =
  | 'INTERNAL_REFERENCE'
  | 'DATE'
  | 'TIME'
  | 'NUMBER'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'DIVISION'
  | 'DEPARMENT'
  | 'TYPE'
  | 'MODULENR'
  | 'SOURCEFREF'
  | 'GL_POSTED'
  | 'CANCELLED'
  | 'SIGN'
  | 'TOTAL_DEBIT'
  | 'TOTAL_CREDIT'
  | 'NOTES1'
  | 'NOTES2'
  | 'NOTES3'
  | 'NOTES4'
  | 'PRINT_COUNTER'
  | 'PRINT_DATE'
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
  | 'CANCELLEDACC'
  | 'ACCFICHEREF'
  | 'CURRSEL_TOTALS'
  | 'CURRSEL_DETAILS'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'RC_TOTAL_DEBIT'
  | 'RC_TOTAL_CREDIT'
  | 'TEXTINC'
  | 'TRANSACTIONS'
  | 'XBUFS'
  | 'DOCALS'
  | 'XML_ATTRIBUTE'
  | 'ITEXT'
  | 'PROJECT_CODE'
  | 'PROJECTREF'
  | 'BNACCREF'
  | 'BNACCCODE'
  | 'TRANGRPNO'
  | 'ATTACHMENT_INVOICE'
  | 'COLLATRL_ROLLFC'
  | 'COLLATRL_ROLLREF'
  | 'COLLATRL_ROLLTRNSREF'
  | 'BNCREREF'
  | 'BANK_CREDIT_CODE'
  | 'ORGLOGOID'
  | 'ATTACHMENT_ROLL'
  | 'CRCARD_WIZARD'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'ACC_FICHE_SITEID'
  | 'COLLATRL_CARD_REF'
  | 'COLLATRL_CARD_SITEID'
  | 'SALESMANREF'
  | 'SALESMAN_CODE'
  | 'CRCARD_FICHEREF'
  | 'FROM_CREDIT_CLOSE'
  | 'FROM_CURR_DIFF_PROC'
  | 'FROM_CR_STRUCT'
  | 'STATUS'
  | 'CANCEL_AUTO_GL_PROC'
  | 'BNCREPAYMENTLIST'
  | 'EBOOK_DOCDATE'
  | 'EBOOK_NODOCUMENT'
  | 'EBOOK_DOCNR'
  | 'EBOOK_DOCTYPE'
  | 'EBOOK_EXPLAIN'
  | 'EBOOK_PAYTYPE'
  | 'EBOOK_NOPAY'
  | 'GUID'
  | 'DEFNFLDSLIST'
  | 'EXIMVAT'
  | 'PARTIALCSPAYREF';

/**
 * Type-safe sort specification for BankSlips queries
 */
export type BankSlipsSortSpec =
  | [BankSlipsField]
  | [BankSlipsField, 'asc' | 'desc']
  | [BankSlipsField[], 'asc' | 'desc']
  | [BankSlipsField[]];

/**
 * Type-safe query options for BankSlips entities
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
export interface BankSlipsQueryOptions
  extends Omit<QueryOptions<BankSlipsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: BankSlipsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: BankSlipsSortSpec;
}

/**
 * Search criteria for BankSlips entities
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
export interface BankSlipsSearchCriteria {
  internalReference?: NumberFieldValue;
  date?: StringFieldValue;
  time?: NumberFieldValue;
  number?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  division?: NumberFieldValue;
  deparment?: NumberFieldValue;
  type?: NumberFieldValue;
  modulenr?: NumberFieldValue;
  sourcefref?: NumberFieldValue;
  glPosted?: NumberFieldValue;
  cancelled?: NumberFieldValue;
  sign?: NumberFieldValue;
  totalDebit?: NumberFieldValue;
  totalCredit?: NumberFieldValue;
  notes1?: StringFieldValue;
  notes2?: StringFieldValue;
  notes3?: StringFieldValue;
  notes4?: StringFieldValue;
  printCounter?: NumberFieldValue;
  printDate?: StringFieldValue;
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
  cancelledacc?: NumberFieldValue;
  accficheref?: NumberFieldValue;
  currselTotals?: NumberFieldValue;
  currselDetails?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  rcTotalDebit?: NumberFieldValue;
  rcTotalCredit?: NumberFieldValue;
  textinc?: NumberFieldValue;
  transactions?: DateFieldValue;
  xbufs?: StringFieldValue;
  docals?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  itext?: StringFieldValue;
  projectCode?: StringFieldValue;
  projectref?: NumberFieldValue;
  bnaccref?: NumberFieldValue;
  bnacccode?: StringFieldValue;
  trangrpno?: StringFieldValue;
  attachmentInvoice?: DateFieldValue;
  collatrlRollfc?: StringFieldValue;
  collatrlRollref?: NumberFieldValue;
  collatrlRolltrnsref?: NumberFieldValue;
  bncreref?: NumberFieldValue;
  bankCreditCode?: StringFieldValue;
  orglogoid?: StringFieldValue;
  attachmentRoll?: DateFieldValue;
  crcardWizard?: NumberFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  accFicheSiteid?: NumberFieldValue;
  collatrlCardRef?: NumberFieldValue;
  collatrlCardSiteid?: NumberFieldValue;
  salesmanref?: NumberFieldValue;
  salesmanCode?: StringFieldValue;
  crcardFicheref?: NumberFieldValue;
  fromCreditClose?: NumberFieldValue;
  fromCurrDiffProc?: NumberFieldValue;
  fromCrStruct?: NumberFieldValue;
  status?: NumberFieldValue;
  cancelAutoGlProc?: NumberFieldValue;
  bncrepaymentlist?: DateFieldValue;
  ebookDocdate?: StringFieldValue;
  ebookNodocument?: NumberFieldValue;
  ebookDocnr?: StringFieldValue;
  ebookDoctype?: NumberFieldValue;
  ebookExplain?: StringFieldValue;
  ebookPaytype?: StringFieldValue;
  ebookNopay?: NumberFieldValue;
  guid?: StringFieldValue;
  defnfldslist?: DateFieldValue;
  eximvat?: NumberFieldValue;
  partialcspayref?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for BankSlips entities
 */
export interface BankSlipsAnalytics {
  total: number;
  // Add BankSlips-specific analytics fields
}
