import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_ARPNotesXML]
 */
export interface RscollectionrsArpnotesxml {
  Meta?: Meta;
  items?: RsArpnotesxml[];
}

/**
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
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
 * RsArpnotesxml transaction line item
 *
 * Represents individual transaction records within a ArpGroupAssignments collection.
 */
export interface RsArpnotesxml extends BaseEntity {
  CLIENTREF?: number;
  LINENUM?: number;
  LINE?: string;
}

/**
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a ArpGroupAssignments collection.
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
 * ArpGroupAssignments entity interface based on swagger definition
 */
export interface ArpGroupAssignments extends BaseEntity {
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
  TELEPHONE2?: string;
  FAX?: string;
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
  E_COMM_ID?: string;
  TRADING_GRP?: string;
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
  FLDALS?: string;
  ITEXT?: string;
  LANGP?: string;
  PP_GROUP_CODE?: string;
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
  AUXIL_CODE2?: string;
  AUXIL_CODE3?: string;
  AUXIL_CODE4?: string;
  AUXIL_CODE5?: string;
  EBANKNO?: number;
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
  REP_ORD_RISK_LIMIT_SUGG?: number;
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
  TTILE2?: string;
  TELEPHONE_EXTENSION1?: string;
  TELEPHONE_EXTENSION2?: string;
  FAX_EXTENSION?: string;
  EINV_CUSTOMS?: number;
  SUB_CONT?: number;
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
  GLOBAL_ID?: string;
  GUID?: string;
}

/**
 * Union type of all ArpGroupAssignments field names for type-safe field selection and sorting
 */
export type ArpGroupAssignmentsField =
  | 'INTERNAL_REFERENCE'
  | 'RECORD_STATUS'
  | 'ACCOUNT_TYPE'
  | 'CODE'
  | 'TITLE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'ADDRESS1'
  | 'ADDRESS2'
  | 'DISTRICT_CODE'
  | 'DISTRICT'
  | 'TOWN_CODE'
  | 'TOWN'
  | 'CITY_CODE'
  | 'CITY'
  | 'COUNTRY_CODE'
  | 'COUNTRY'
  | 'POSTAL_CODE'
  | 'TELEPHONE1'
  | 'TELEPHONE2'
  | 'FAX'
  | 'TAX_ID'
  | 'TAX_OFFICE'
  | 'TAX_OFFICE_CODE'
  | 'CONTACT'
  | 'DISCOUNT_RATE'
  | 'EXTENREF'
  | 'PAYMENT_CODE'
  | 'PAYMENTREF'
  | 'E_MAIL'
  | 'WEB_URL'
  | 'REMINDER_TYPE'
  | 'REMINDER_EMAIL'
  | 'REMINDER_FAX'
  | 'CORRESP_LANG'
  | 'VAT_ID'
  | 'BLOCKED'
  | 'BANK_ID1'
  | 'BANK_ID2'
  | 'BANK_ID3'
  | 'BANK_ID4'
  | 'BANK_ID5'
  | 'BANK_ID6'
  | 'BANK_ID7'
  | 'BANK_NAME1'
  | 'BANK_NAME2'
  | 'BANK_NAME3'
  | 'BANK_NAME4'
  | 'BANK_NAME5'
  | 'BANK_NAME6'
  | 'BANK_NAME7'
  | 'BANK_ACCOUNT1'
  | 'BANK_ACCOUNT2'
  | 'BANK_ACCOUNT3'
  | 'BANK_ACCOUNT4'
  | 'BANK_ACCOUNT5'
  | 'BANK_ACCOUNT6'
  | 'BANK_ACCOUNT7'
  | 'DELIVERY_METHOD'
  | 'SHIPMENT_AGENT'
  | 'CURRENCY'
  | 'TEXTINC'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'E_COMM_ID'
  | 'TRADING_GRP'
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
  | 'DEBT_TRCK_TYPE'
  | 'XRTDIF_TYPE'
  | 'NOTES'
  | 'CREDIT_TYPE'
  | 'CREDIT_LIMIT'
  | 'CREDIT_BALANCED'
  | 'RISKFACT_CHQ'
  | 'RISKFACT_PROMNT'
  | 'ACTION_CREDHOLD'
  | 'XBUFS'
  | 'GL_CODE'
  | 'ACCOUNTREF'
  | 'OHP_CODE'
  | 'CENTERREF'
  | 'FLDALS'
  | 'ITEXT'
  | 'LANGP'
  | 'PP_GROUP_CODE'
  | 'XML_ATTRIBUTE'
  | 'USE_REP_RISK'
  | 'RISK_LIMIT'
  | 'RISK_BALANCED'
  | 'ORD_SEND_METHOD'
  | 'ORD_SEND_EMAIL'
  | 'ORD_SEND_FAX'
  | 'DSP_SEND_METHOD'
  | 'DSP_SEND_EMAIL'
  | 'DSP_SEND_FAX'
  | 'INV_SEND_METHOD'
  | 'INV_SEND_EMAIL'
  | 'INV_SEND_FAX'
  | 'SUBSCRIBER_STATUS'
  | 'SUBSCRIBER_EXT'
  | 'AUTO_PAID_BANK'
  | 'PAYMENT_TYPE'
  | 'LAST_SEND_REM_LEV'
  | 'EXT_ACC_FLAGS'
  | 'ORD_SEND_FORMAT'
  | 'DSP_SEND_FORMAT'
  | 'INV_SEND_FORMAT'
  | 'REM_SEND_FORMAT'
  | 'STORE_CREDIT_CARD_NO'
  | 'CL_ORD_FREQ'
  | 'ORD_DAY'
  | 'LOGOID'
  | 'LID_Confirmed'
  | 'E_BSNS_SEND_TYPE'
  | 'LDX_DEF_ORDER_STAT'
  | 'LDX_DEF_ORDER_PRC'
  | 'ITR_SEND_METHOD'
  | 'ITR_SEND_MAIL_ADR'
  | 'ITR_SEND_FAX'
  | 'ITR_SEND_FORMAT'
  | 'IMG2INC'
  | 'CELL_PHONE'
  | 'INVOICE_PRNT_CNT'
  | 'GENIUSFLDSLIST'
  | 'DEFNFLDSLIST'
  | 'WFLOWCARDREF'
  | 'PARENTCLCODE'
  | 'PARENTCLREF'
  | 'CODE_CHANGED'
  | 'COLLECTINV'
  | 'PIECEORDINFLICT'
  | 'ORGLOGOID'
  | 'PURCHBRWS'
  | 'SALESBRWS'
  | 'IMPBRWS'
  | 'EXPBRWS'
  | 'FINBRWS'
  | 'AUXIL_CODE2'
  | 'AUXIL_CODE3'
  | 'AUXIL_CODE4'
  | 'AUXIL_CODE5'
  | 'EBANKNO'
  | 'OFF_SEND_METHOD'
  | 'OFF_SEND_MAIL_ADDR'
  | 'OFF_SEND_FAX'
  | 'OFF_SEND_FORMAT'
  | 'RISK_TYPE1'
  | 'RISK_TYPE2'
  | 'RISK_TYPE3'
  | 'RISK_TYPE4'
  | 'RISK_TYPE5'
  | 'RISK_TYPE6'
  | 'RISK_TYPE7'
  | 'RISK_TYPE8'
  | 'RISK_TYPE9'
  | 'RISK_TYPE10'
  | 'RISK_TYPE11'
  | 'RISK_TYPE12'
  | 'RISK_TYPE13'
  | 'RISK_TYPE14'
  | 'RISK_TYPE15'
  | 'CST_CEK_RISK_FACTOR'
  | 'CST_SENET_RISK_FACTOR'
  | 'RISK_GRP_CONTROL'
  | 'ACTION_CREDHOLD_ORD'
  | 'ACTION_CREDHOLD_DESP'
  | 'ACTION_CREDHOLD_ACC'
  | 'ACTION_CREDHOLD_CST_CS'
  | 'ACTION_CREDHOLD_MY_CS'
  | 'RISK_CTRL_TYPE'
  | 'ACC_RISK_TOTAL'
  | 'REP_ACC_RISK_TOTAL'
  | 'CST_CS_RISK_TOTAL'
  | 'REP_CST_CS_RISK_TOTAL'
  | 'MY_CS_RISK_TOTAL'
  | 'REP_MY_CS_RISK_TOTAL'
  | 'ORD_RISK_TOTAL'
  | 'REP_ORD_RISK_TOTAL'
  | 'ORD_RISK_TOTAL_SUGG'
  | 'REP_ORD_RISK_TOTAL_SUGG'
  | 'DESP_RISK_TOTAL'
  | 'REP_DESP_RISK_TOTAL'
  | 'ACC_RISK_LIMIT'
  | 'REP_ACC_RISK_LIMIT'
  | 'CST_CS_RISK_LIMIT'
  | 'REP_CST_CS_RISK_LIMIT'
  | 'MY_CS_RISK_LIMIT'
  | 'REP_MY_CS_RISK_LIMIT'
  | 'DESP_RISK_LIMIT'
  | 'REP_DESP_RISK_LIMIT'
  | 'ORD_RISK_LIMIT'
  | 'REP_ORD_RISK_LIMIT'
  | 'ORD_RISK_LIMIT_SUGG'
  | 'REP_ORD_RISK_LIMIT_SUGG'
  | 'ACC_RISK_BALANCED'
  | 'REP_ACC_RISK_BALANCED'
  | 'CST_CS_RISK_BALANCED'
  | 'REP_CST_CS_RISK_BALANCED'
  | 'MY_CS_RISK_BALANCED'
  | 'REP_MY_CS_RISK_BALANCED'
  | 'DESP_RISK_BALANCED'
  | 'REP_DESP_RISK_BALANCED'
  | 'ORD_RISK_BALANCED'
  | 'REP_ORD_RISK_BALANCED'
  | 'ORD_RISK_BALANCED_SUGG'
  | 'REP_ORD_RISK_BALANCED_SUGG'
  | 'LOAN_GRP_CTRL'
  | 'BANK_IBAN1'
  | 'BANK_IBAN2'
  | 'BANK_IBAN3'
  | 'BANK_IBAN4'
  | 'BANK_IBAN5'
  | 'BANK_IBAN6'
  | 'BANK_IBAN7'
  | 'BANK_BIC1'
  | 'BANK_BIC2'
  | 'BANK_BIC3'
  | 'BANK_BIC4'
  | 'BANK_BIC5'
  | 'BANK_BIC6'
  | 'BANK_BIC7'
  | 'PERSCOMPANY'
  | 'TCKNO'
  | 'EXT_SEND_METHOD'
  | 'EXT_SEND_EMAIL'
  | 'EXT_SEND_FAX'
  | 'EXT_SEND_FORMAT'
  | 'ADDTOREFLIST'
  | 'ORD_RISK_OVER_SUGG'
  | 'CASH_CODE'
  | 'CASHREF'
  | 'USED_IN_PERIODS'
  | 'CONTACT2'
  | 'CONTACT3'
  | 'E_MAIL2'
  | 'E_MAIL3'
  | 'CONTACT1_TEL_CODE'
  | 'CONTACT2_TEL_CODE'
  | 'CONTACT3_TEL_CODE'
  | 'CONTACT1_TEL'
  | 'CONTACT2_TEL'
  | 'CONTACT3_TEL'
  | 'CONTACT1_TEL_EXT'
  | 'CONTACT2_TEL_EXT'
  | 'CONTACT3_TEL_EXT'
  | 'RSKLIM_CNTRL'
  | 'DUEDATE_CNTRL'
  | 'AGING_CNTRL'
  | 'AGING_DAY'
  | 'ORD_PRIORITY'
  | 'ACCEPT_EINV'
  | 'EIVOICEID'
  | 'PROFILE_ID'
  | 'PURC_ORDER_STATUS'
  | 'PURC_ORDER_PRICE'
  | 'BANK_CURR1'
  | 'BANK_CURR2'
  | 'BANK_CURR3'
  | 'BANK_CURR4'
  | 'BANK_CURR5'
  | 'BANK_CURR6'
  | 'BANK_CURR7'
  | 'CS_DOWNS_RISK'
  | 'CST_CS_CIRO_RISK_OVER'
  | 'CST_CIRO_CEK_RISK_FAC'
  | 'CST_CIRO_SENET_RISK_FAC'
  | 'CS_CIRO_DOWNS_RISK'
  | 'CST_CS_CIRO_RISK_LIMIT'
  | 'REP_CST_CS_CIRO_RISK_LIMIT'
  | 'CST_CS_CIRO_RISK_BALANCED'
  | 'REP_CST_CS_CIRO_RISK_BALANCED'
  | 'CST_CS_OWN_RISK_TOTAL'
  | 'REP_CST_CS_OWN_RISK_TOTAL'
  | 'CST_CS_CIRO_RISK_TOTAL'
  | 'REP_CST_CS_CIRO_RISK_TOTAL'
  | 'DESP_RISK_OVER_SUGG'
  | 'DESP_RISK_LIMIT_SUGG'
  | 'REP_DESP_RISK_LIMIT_SUGG'
  | 'DESP_RISK_TOTAL_SUGG'
  | 'REP_DESP_RISK_TOTAL_SUGG'
  | 'DESP_RISK_BALANCED_SUGG'
  | 'REP_DESP_RISK_BALANCED_SUGG'
  | 'DBS_LIMIT1'
  | 'DBS_LIMIT2'
  | 'DBS_LIMIT3'
  | 'DBS_LIMIT4'
  | 'DBS_LIMIT5'
  | 'DBS_LIMIT6'
  | 'DBS_LIMIT7'
  | 'DBS_TOTAL1'
  | 'DBS_TOTAL2'
  | 'DBS_TOTAL3'
  | 'DBS_TOTAL4'
  | 'DBS_TOTAL5'
  | 'DBS_TOTAL6'
  | 'DBS_TOTAL7'
  | 'DBS_BANKNO1'
  | 'DBS_BANKNO2'
  | 'DBS_BANKNO3'
  | 'DBS_BANKNO4'
  | 'DBS_BANKNO5'
  | 'DBS_BANKNO6'
  | 'DBS_BANKNO7'
  | 'DBS_RSKCTRL1'
  | 'DBS_RSKCTRL2'
  | 'DBS_RSKCTRL3'
  | 'DBS_RSKCTRL4'
  | 'DBS_RSKCTRL5'
  | 'DBS_RSKCTRL6'
  | 'DBS_RSKCTRL7'
  | 'DBS_CURR1'
  | 'DBS_CURR2'
  | 'DBS_CURR3'
  | 'DBS_CURR4'
  | 'DBS_CURR5'
  | 'DBS_CURR6'
  | 'DBS_CURR7'
  | 'TTILE2'
  | 'TELEPHONE_EXTENSION1'
  | 'TELEPHONE_EXTENSION2'
  | 'FAX_EXTENSION'
  | 'EINV_CUSTOMS'
  | 'SUB_CONT'
  | 'ACCEPT_EINV_PUBLIC'
  | 'PUBLICBNACCREF'
  | 'PUBLIC_BNACC_CODE'
  | 'PUBLIC_BNACC_IBAN'
  | 'PUBLIC_BNACC_CURRENCY'
  | 'KVKK_PERM_STATUS'
  | 'KVKK_BEGIN_DATE'
  | 'KVKK_END_DATE'
  | 'KVKK_CANCEL_DATE'
  | 'KVKK_ANONYMIZE_STATUS'
  | 'KVKK_ANONYMIZE_DATE'
  | 'EXIM_SEND_METHOD'
  | 'EXIM_SEND_EMAILADR'
  | 'EXIM_SEND_FORMAT'
  | 'EXIM_SEND_FAXNR'
  | 'CAN_DEDUCT'
  | 'DRIVERREF'
  | 'GLOBAL_ID'
  | 'GUID';

/**
 * Type-safe sort specification for ArpGroupAssignments queries
 */
export type ArpGroupAssignmentsSortSpec =
  | [ArpGroupAssignmentsField]
  | [ArpGroupAssignmentsField, 'asc' | 'desc']
  | [ArpGroupAssignmentsField[], 'asc' | 'desc']
  | [ArpGroupAssignmentsField[]];

/**
 * Type-safe query options for ArpGroupAssignments entities
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
export interface ArpGroupAssignmentsQueryOptions
  extends Omit<QueryOptions<ArpGroupAssignmentsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ArpGroupAssignmentsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ArpGroupAssignmentsSortSpec;
}

/**
 * Search criteria for ArpGroupAssignments entities
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
export interface ArpGroupAssignmentsSearchCriteria {
  internalReference?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  accountType?: NumberFieldValue;
  code?: StringFieldValue;
  title?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  address1?: StringFieldValue;
  address2?: StringFieldValue;
  districtCode?: StringFieldValue;
  district?: StringFieldValue;
  townCode?: StringFieldValue;
  town?: StringFieldValue;
  cityCode?: StringFieldValue;
  city?: StringFieldValue;
  countryCode?: StringFieldValue;
  country?: StringFieldValue;
  postalCode?: StringFieldValue;
  telephone1?: StringFieldValue;
  telephone2?: StringFieldValue;
  fax?: StringFieldValue;
  taxId?: StringFieldValue;
  taxOffice?: StringFieldValue;
  taxOfficeCode?: StringFieldValue;
  contact?: StringFieldValue;
  discountRate?: NumberFieldValue;
  extenref?: NumberFieldValue;
  paymentCode?: StringFieldValue;
  paymentref?: NumberFieldValue;
  eMail?: StringFieldValue;
  webUrl?: StringFieldValue;
  reminderType?: NumberFieldValue;
  reminderEmail?: StringFieldValue;
  reminderFax?: StringFieldValue;
  correspLang?: NumberFieldValue;
  vatId?: StringFieldValue;
  blocked?: NumberFieldValue;
  bankId1?: StringFieldValue;
  bankId2?: StringFieldValue;
  bankId3?: StringFieldValue;
  bankId4?: StringFieldValue;
  bankId5?: StringFieldValue;
  bankId6?: StringFieldValue;
  bankId7?: StringFieldValue;
  bankName1?: StringFieldValue;
  bankName2?: StringFieldValue;
  bankName3?: StringFieldValue;
  bankName4?: StringFieldValue;
  bankName5?: StringFieldValue;
  bankName6?: StringFieldValue;
  bankName7?: StringFieldValue;
  bankAccount1?: StringFieldValue;
  bankAccount2?: StringFieldValue;
  bankAccount3?: StringFieldValue;
  bankAccount4?: StringFieldValue;
  bankAccount5?: StringFieldValue;
  bankAccount6?: StringFieldValue;
  bankAccount7?: StringFieldValue;
  deliveryMethod?: StringFieldValue;
  shipmentAgent?: StringFieldValue;
  currency?: NumberFieldValue;
  textinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  eCommId?: StringFieldValue;
  tradingGrp?: StringFieldValue;
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
  debtTrckType?: NumberFieldValue;
  xrtdifType?: NumberFieldValue;
  notes?: DateFieldValue;
  creditType?: NumberFieldValue;
  creditLimit?: NumberFieldValue;
  creditBalanced?: NumberFieldValue;
  riskfactChq?: NumberFieldValue;
  riskfactPromnt?: NumberFieldValue;
  actionCredhold?: NumberFieldValue;
  xbufs?: StringFieldValue;
  glCode?: StringFieldValue;
  accountref?: NumberFieldValue;
  ohpCode?: StringFieldValue;
  centerref?: NumberFieldValue;
  fldals?: StringFieldValue;
  itext?: StringFieldValue;
  langp?: StringFieldValue;
  ppGroupCode?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  useRepRisk?: NumberFieldValue;
  riskLimit?: NumberFieldValue;
  riskBalanced?: NumberFieldValue;
  ordSendMethod?: NumberFieldValue;
  ordSendEmail?: StringFieldValue;
  ordSendFax?: StringFieldValue;
  dspSendMethod?: NumberFieldValue;
  dspSendEmail?: StringFieldValue;
  dspSendFax?: StringFieldValue;
  invSendMethod?: NumberFieldValue;
  invSendEmail?: StringFieldValue;
  invSendFax?: StringFieldValue;
  subscriberStatus?: NumberFieldValue;
  subscriberExt?: StringFieldValue;
  autoPaidBank?: StringFieldValue;
  paymentType?: NumberFieldValue;
  lastSendRemLev?: NumberFieldValue;
  extAccFlags?: NumberFieldValue;
  ordSendFormat?: NumberFieldValue;
  dspSendFormat?: NumberFieldValue;
  invSendFormat?: NumberFieldValue;
  remSendFormat?: NumberFieldValue;
  storeCreditCardNo?: StringFieldValue;
  clOrdFreq?: NumberFieldValue;
  ordDay?: NumberFieldValue;
  logoid?: StringFieldValue;
  lidConfirmed?: NumberFieldValue;
  eBsnsSendType?: NumberFieldValue;
  ldxDefOrderStat?: NumberFieldValue;
  ldxDefOrderPrc?: NumberFieldValue;
  itrSendMethod?: NumberFieldValue;
  itrSendMailAdr?: StringFieldValue;
  itrSendFax?: StringFieldValue;
  itrSendFormat?: NumberFieldValue;
  img2inc?: NumberFieldValue;
  cellPhone?: StringFieldValue;
  invoicePrntCnt?: NumberFieldValue;
  geniusfldslist?: DateFieldValue;
  defnfldslist?: DateFieldValue;
  wflowcardref?: NumberFieldValue;
  parentclcode?: StringFieldValue;
  parentclref?: NumberFieldValue;
  codeChanged?: NumberFieldValue;
  collectinv?: NumberFieldValue;
  pieceordinflict?: NumberFieldValue;
  orglogoid?: StringFieldValue;
  purchbrws?: NumberFieldValue;
  salesbrws?: NumberFieldValue;
  impbrws?: NumberFieldValue;
  expbrws?: NumberFieldValue;
  finbrws?: NumberFieldValue;
  auxilCode2?: StringFieldValue;
  auxilCode3?: StringFieldValue;
  auxilCode4?: StringFieldValue;
  auxilCode5?: StringFieldValue;
  ebankno?: NumberFieldValue;
  offSendMethod?: NumberFieldValue;
  offSendMailAddr?: StringFieldValue;
  offSendFax?: StringFieldValue;
  offSendFormat?: NumberFieldValue;
  riskType1?: NumberFieldValue;
  riskType2?: NumberFieldValue;
  riskType3?: NumberFieldValue;
  riskType4?: NumberFieldValue;
  riskType5?: NumberFieldValue;
  riskType6?: NumberFieldValue;
  riskType7?: NumberFieldValue;
  riskType8?: NumberFieldValue;
  riskType9?: NumberFieldValue;
  riskType10?: NumberFieldValue;
  riskType11?: NumberFieldValue;
  riskType12?: NumberFieldValue;
  riskType13?: NumberFieldValue;
  riskType14?: NumberFieldValue;
  riskType15?: NumberFieldValue;
  cstCekRiskFactor?: NumberFieldValue;
  cstSenetRiskFactor?: NumberFieldValue;
  riskGrpControl?: NumberFieldValue;
  actionCredholdOrd?: NumberFieldValue;
  actionCredholdDesp?: NumberFieldValue;
  actionCredholdAcc?: NumberFieldValue;
  actionCredholdCstCs?: NumberFieldValue;
  actionCredholdMyCs?: NumberFieldValue;
  riskCtrlType?: NumberFieldValue;
  accRiskTotal?: NumberFieldValue;
  repAccRiskTotal?: NumberFieldValue;
  cstCsRiskTotal?: NumberFieldValue;
  repCstCsRiskTotal?: NumberFieldValue;
  myCsRiskTotal?: NumberFieldValue;
  repMyCsRiskTotal?: NumberFieldValue;
  ordRiskTotal?: NumberFieldValue;
  repOrdRiskTotal?: NumberFieldValue;
  ordRiskTotalSugg?: NumberFieldValue;
  repOrdRiskTotalSugg?: NumberFieldValue;
  despRiskTotal?: NumberFieldValue;
  repDespRiskTotal?: NumberFieldValue;
  accRiskLimit?: NumberFieldValue;
  repAccRiskLimit?: NumberFieldValue;
  cstCsRiskLimit?: NumberFieldValue;
  repCstCsRiskLimit?: NumberFieldValue;
  myCsRiskLimit?: NumberFieldValue;
  repMyCsRiskLimit?: NumberFieldValue;
  despRiskLimit?: NumberFieldValue;
  repDespRiskLimit?: NumberFieldValue;
  ordRiskLimit?: NumberFieldValue;
  repOrdRiskLimit?: NumberFieldValue;
  ordRiskLimitSugg?: NumberFieldValue;
  repOrdRiskLimitSugg?: NumberFieldValue;
  accRiskBalanced?: NumberFieldValue;
  repAccRiskBalanced?: NumberFieldValue;
  cstCsRiskBalanced?: NumberFieldValue;
  repCstCsRiskBalanced?: NumberFieldValue;
  myCsRiskBalanced?: NumberFieldValue;
  repMyCsRiskBalanced?: NumberFieldValue;
  despRiskBalanced?: NumberFieldValue;
  repDespRiskBalanced?: NumberFieldValue;
  ordRiskBalanced?: NumberFieldValue;
  repOrdRiskBalanced?: NumberFieldValue;
  ordRiskBalancedSugg?: NumberFieldValue;
  repOrdRiskBalancedSugg?: NumberFieldValue;
  loanGrpCtrl?: NumberFieldValue;
  bankIban1?: StringFieldValue;
  bankIban2?: StringFieldValue;
  bankIban3?: StringFieldValue;
  bankIban4?: StringFieldValue;
  bankIban5?: StringFieldValue;
  bankIban6?: StringFieldValue;
  bankIban7?: StringFieldValue;
  bankBic1?: StringFieldValue;
  bankBic2?: StringFieldValue;
  bankBic3?: StringFieldValue;
  bankBic4?: StringFieldValue;
  bankBic5?: StringFieldValue;
  bankBic6?: StringFieldValue;
  bankBic7?: StringFieldValue;
  perscompany?: NumberFieldValue;
  tckno?: StringFieldValue;
  extSendMethod?: NumberFieldValue;
  extSendEmail?: StringFieldValue;
  extSendFax?: StringFieldValue;
  extSendFormat?: NumberFieldValue;
  addtoreflist?: NumberFieldValue;
  ordRiskOverSugg?: NumberFieldValue;
  cashCode?: StringFieldValue;
  cashref?: NumberFieldValue;
  usedInPeriods?: NumberFieldValue;
  contact2?: StringFieldValue;
  contact3?: StringFieldValue;
  eMail2?: StringFieldValue;
  eMail3?: StringFieldValue;
  contact1TelCode?: StringFieldValue;
  contact2TelCode?: StringFieldValue;
  contact3TelCode?: StringFieldValue;
  contact1Tel?: StringFieldValue;
  contact2Tel?: StringFieldValue;
  contact3Tel?: StringFieldValue;
  contact1TelExt?: StringFieldValue;
  contact2TelExt?: StringFieldValue;
  contact3TelExt?: StringFieldValue;
  rsklimCntrl?: NumberFieldValue;
  duedateCntrl?: NumberFieldValue;
  agingCntrl?: NumberFieldValue;
  agingDay?: NumberFieldValue;
  ordPriority?: NumberFieldValue;
  acceptEinv?: NumberFieldValue;
  eivoiceid?: StringFieldValue;
  profileId?: NumberFieldValue;
  purcOrderStatus?: NumberFieldValue;
  purcOrderPrice?: NumberFieldValue;
  bankCurr1?: StringFieldValue;
  bankCurr2?: StringFieldValue;
  bankCurr3?: StringFieldValue;
  bankCurr4?: StringFieldValue;
  bankCurr5?: StringFieldValue;
  bankCurr6?: StringFieldValue;
  bankCurr7?: StringFieldValue;
  csDownsRisk?: NumberFieldValue;
  cstCsCiroRiskOver?: NumberFieldValue;
  cstCiroCekRiskFac?: NumberFieldValue;
  cstCiroSenetRiskFac?: NumberFieldValue;
  csCiroDownsRisk?: NumberFieldValue;
  cstCsCiroRiskLimit?: NumberFieldValue;
  repCstCsCiroRiskLimit?: NumberFieldValue;
  cstCsCiroRiskBalanced?: NumberFieldValue;
  repCstCsCiroRiskBalanced?: NumberFieldValue;
  cstCsOwnRiskTotal?: NumberFieldValue;
  repCstCsOwnRiskTotal?: NumberFieldValue;
  cstCsCiroRiskTotal?: NumberFieldValue;
  repCstCsCiroRiskTotal?: NumberFieldValue;
  despRiskOverSugg?: NumberFieldValue;
  despRiskLimitSugg?: NumberFieldValue;
  repDespRiskLimitSugg?: NumberFieldValue;
  despRiskTotalSugg?: NumberFieldValue;
  repDespRiskTotalSugg?: NumberFieldValue;
  despRiskBalancedSugg?: NumberFieldValue;
  repDespRiskBalancedSugg?: NumberFieldValue;
  dbsLimit1?: NumberFieldValue;
  dbsLimit2?: NumberFieldValue;
  dbsLimit3?: NumberFieldValue;
  dbsLimit4?: NumberFieldValue;
  dbsLimit5?: NumberFieldValue;
  dbsLimit6?: NumberFieldValue;
  dbsLimit7?: NumberFieldValue;
  dbsTotal1?: NumberFieldValue;
  dbsTotal2?: NumberFieldValue;
  dbsTotal3?: NumberFieldValue;
  dbsTotal4?: NumberFieldValue;
  dbsTotal5?: NumberFieldValue;
  dbsTotal6?: NumberFieldValue;
  dbsTotal7?: NumberFieldValue;
  dbsBankno1?: NumberFieldValue;
  dbsBankno2?: NumberFieldValue;
  dbsBankno3?: NumberFieldValue;
  dbsBankno4?: NumberFieldValue;
  dbsBankno5?: NumberFieldValue;
  dbsBankno6?: NumberFieldValue;
  dbsBankno7?: NumberFieldValue;
  dbsRskctrl1?: NumberFieldValue;
  dbsRskctrl2?: NumberFieldValue;
  dbsRskctrl3?: NumberFieldValue;
  dbsRskctrl4?: NumberFieldValue;
  dbsRskctrl5?: NumberFieldValue;
  dbsRskctrl6?: NumberFieldValue;
  dbsRskctrl7?: NumberFieldValue;
  dbsCurr1?: NumberFieldValue;
  dbsCurr2?: NumberFieldValue;
  dbsCurr3?: NumberFieldValue;
  dbsCurr4?: NumberFieldValue;
  dbsCurr5?: NumberFieldValue;
  dbsCurr6?: NumberFieldValue;
  dbsCurr7?: NumberFieldValue;
  ttile2?: StringFieldValue;
  telephoneExtension1?: StringFieldValue;
  telephoneExtension2?: StringFieldValue;
  faxExtension?: StringFieldValue;
  einvCustoms?: NumberFieldValue;
  subCont?: NumberFieldValue;
  acceptEinvPublic?: NumberFieldValue;
  publicbnaccref?: NumberFieldValue;
  publicBnaccCode?: StringFieldValue;
  publicBnaccIban?: StringFieldValue;
  publicBnaccCurrency?: NumberFieldValue;
  kvkkPermStatus?: NumberFieldValue;
  kvkkBeginDate?: StringFieldValue;
  kvkkEndDate?: StringFieldValue;
  kvkkCancelDate?: StringFieldValue;
  kvkkAnonymizeStatus?: NumberFieldValue;
  kvkkAnonymizeDate?: StringFieldValue;
  eximSendMethod?: NumberFieldValue;
  eximSendEmailadr?: StringFieldValue;
  eximSendFormat?: NumberFieldValue;
  eximSendFaxnr?: StringFieldValue;
  canDeduct?: NumberFieldValue;
  driverref?: NumberFieldValue;
  globalId?: StringFieldValue;
  guid?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ArpGroupAssignments entities
 */
export interface ArpGroupAssignmentsAnalytics {
  total: number;
  // Add ArpGroupAssignments-specific analytics fields
}
