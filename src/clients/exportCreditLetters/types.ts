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
 * Interface for RSCollection[RS_RelatedDocXML]
 */
export interface RscollectionrsRelateddocxml {
  Meta?: Meta;
  items?: RsRelateddocxml[];
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
 * RsRelateddocxml transaction line item
 *
 * Represents individual transaction records within a ExportCreditLetters collection.
 */
export interface RsRelateddocxml extends BaseEntity {
  DOC_CODE?: string;
  DOC_DEFINITION?: string;
  CRELETTERREF?: number;
  ORIGINAL_COUNT?: number;
  COPY_COUNT?: number;
}

/**
 * ExportCreditLetters entity interface based on swagger definition
 */
export interface ExportCreditLetters extends BaseEntity {
  TYP?: number;
  LETTER_NR?: string;
  ISSUE_DATE?: string;
  DUE_DATE?: string;
  DOC_DELIVERY_DATE?: string;
  POLICY_DUE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  EXPLAIN?: string;
  EXIM_FICHE_REFERENCE?: number;
  EXIM_INVOICE_REFERENCE?: number;
  CURRENCY_TYPE?: number;
  CURRENCY_RATE?: number;
  CURR_TOTAL?: number;
  REPORT_RATE?: number;
  REPORT_NET?: number;
  TOTAL?: number;
  SENDLTD_FLAG?: number;
  TRANSFER_FLAG?: number;
  RETURN_FLAG?: number;
  CONFIRM_FLAG?: number;
  INSURANCE_RANGE?: number;
  USAGE_TYPE?: number;
  BANKREF?: number;
  BNACCREF?: number;
  REFERENCE_NR?: string;
  INFO_BANK_NAME?: string;
  INFO_BANK_ADDR1?: string;
  INFO_BANK_ADDR2?: string;
  CONF_BANK_NAME?: string;
  CONF_BANK_ADDR1?: string;
  CONF_BANK_ADDR2?: string;
  PAYMENT_TYPE?: number;
  RAMS_BANK_NAME?: string;
  RAMS_BANK_ADDR1?: string;
  RAMS_BANK_ADDR2?: string;
  EXP_IN_FLAG?: number;
  EXP_OUT_FLAG?: number;
  INFO_BANK_COMM_FLAG?: number;
  COMMAST_BANK?: number;
  COM_INFO_BANK?: number;
  DELIVERY_PLACE?: string;
  DELIVERY_DATE?: string;
  DELIVERY_ADDR?: string;
  DATE_CREADED?: string;
  CREDITREF?: number;
  CREDIT_TOTAL?: number;
  CREDIT_CRATE?: number;
  FRG_TYP_COD?: string;
  STATUS?: number;
  REVOLVING?: number;
  BACKTOBACK?: number;
  STANDBY?: number;
  RED_CLAUSE?: number;
  GREEN_CLAUSE?: number;
  BANK_ACC_CODE?: string;
  BANK_ACC_DEF?: string;
  BANK_CODE?: string;
  DOCNRREF?: number;
  CREDIT_CODE?: string;
  CREDIT_NAME?: string;
  RELATED_DOCUMENTS?: RscollectionrsRelateddocxml;
  DELDOCLIST?: string;
  EXIMLIST?: string;
  FLDALS?: string;
  XBUFS?: string;
  TEXTCHG?: number;
  ITEXT?: string;
}

/**
 * Union type of all ExportCreditLetters field names for type-safe field selection and sorting
 */
export type ExportCreditLettersField =
  | 'INTERNAL_REFERENCE'
  | 'TYP'
  | 'LETTER_NR'
  | 'ISSUE_DATE'
  | 'DUE_DATE'
  | 'DOC_DELIVERY_DATE'
  | 'POLICY_DUE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'EXPLAIN'
  | 'EXIM_FICHE_REFERENCE'
  | 'EXIM_INVOICE_REFERENCE'
  | 'CURRENCY_TYPE'
  | 'CURRENCY_RATE'
  | 'CURR_TOTAL'
  | 'REPORT_RATE'
  | 'REPORT_NET'
  | 'TOTAL'
  | 'SENDLTD_FLAG'
  | 'TRANSFER_FLAG'
  | 'RETURN_FLAG'
  | 'CONFIRM_FLAG'
  | 'INSURANCE_RANGE'
  | 'USAGE_TYPE'
  | 'BANKREF'
  | 'BNACCREF'
  | 'REFERENCE_NR'
  | 'INFO_BANK_NAME'
  | 'INFO_BANK_ADDR1'
  | 'INFO_BANK_ADDR2'
  | 'CONF_BANK_NAME'
  | 'CONF_BANK_ADDR1'
  | 'CONF_BANK_ADDR2'
  | 'PAYMENT_TYPE'
  | 'RAMS_BANK_NAME'
  | 'RAMS_BANK_ADDR1'
  | 'RAMS_BANK_ADDR2'
  | 'EXP_IN_FLAG'
  | 'EXP_OUT_FLAG'
  | 'INFO_BANK_COMM_FLAG'
  | 'COMMAST_BANK'
  | 'COM_INFO_BANK'
  | 'DELIVERY_PLACE'
  | 'DELIVERY_DATE'
  | 'DELIVERY_ADDR'
  | 'CREATED_BY'
  | 'DATE_CREADED'
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
  | 'CREDITREF'
  | 'CREDIT_TOTAL'
  | 'CREDIT_CRATE'
  | 'FRG_TYP_COD'
  | 'STATUS'
  | 'REVOLVING'
  | 'BACKTOBACK'
  | 'STANDBY'
  | 'RED_CLAUSE'
  | 'GREEN_CLAUSE'
  | 'TEXTINC'
  | 'BANK_ACC_CODE'
  | 'BANK_ACC_DEF'
  | 'BANK_CODE'
  | 'DOCNRREF'
  | 'CREDIT_CODE'
  | 'CREDIT_NAME'
  | 'RELATED_DOCUMENTS'
  | 'DELDOCLIST'
  | 'EXIMLIST'
  | 'FLDALS'
  | 'XBUFS'
  | 'TEXTCHG'
  | 'ITEXT';

/**
 * Type-safe sort specification for ExportCreditLetters queries
 */
export type ExportCreditLettersSortSpec =
  | [ExportCreditLettersField]
  | [ExportCreditLettersField, 'asc' | 'desc']
  | [ExportCreditLettersField[], 'asc' | 'desc']
  | [ExportCreditLettersField[]];

/**
 * Type-safe query options for ExportCreditLetters entities
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
export interface ExportCreditLettersQueryOptions extends Omit<
  QueryOptions<ExportCreditLettersField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ExportCreditLettersField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ExportCreditLettersSortSpec;
}

/**
 * Search criteria for ExportCreditLetters entities
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
export interface ExportCreditLettersSearchCriteria {
  internalReference?: NumberFieldValue;
  typ?: NumberFieldValue;
  letterNr?: StringFieldValue;
  issueDate?: StringFieldValue;
  dueDate?: StringFieldValue;
  docDeliveryDate?: StringFieldValue;
  policyDue?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  explain?: StringFieldValue;
  eximFicheReference?: NumberFieldValue;
  eximInvoiceReference?: NumberFieldValue;
  currencyType?: NumberFieldValue;
  currencyRate?: NumberFieldValue;
  currTotal?: NumberFieldValue;
  reportRate?: NumberFieldValue;
  reportNet?: NumberFieldValue;
  total?: NumberFieldValue;
  sendltdFlag?: NumberFieldValue;
  transferFlag?: NumberFieldValue;
  returnFlag?: NumberFieldValue;
  confirmFlag?: NumberFieldValue;
  insuranceRange?: NumberFieldValue;
  usageType?: NumberFieldValue;
  bankref?: NumberFieldValue;
  bnaccref?: NumberFieldValue;
  referenceNr?: StringFieldValue;
  infoBankName?: StringFieldValue;
  infoBankAddr1?: StringFieldValue;
  infoBankAddr2?: StringFieldValue;
  confBankName?: StringFieldValue;
  confBankAddr1?: StringFieldValue;
  confBankAddr2?: StringFieldValue;
  paymentType?: NumberFieldValue;
  ramsBankName?: StringFieldValue;
  ramsBankAddr1?: StringFieldValue;
  ramsBankAddr2?: StringFieldValue;
  expInFlag?: NumberFieldValue;
  expOutFlag?: NumberFieldValue;
  infoBankCommFlag?: NumberFieldValue;
  commastBank?: NumberFieldValue;
  comInfoBank?: NumberFieldValue;
  deliveryPlace?: StringFieldValue;
  deliveryDate?: StringFieldValue;
  deliveryAddr?: StringFieldValue;
  createdBy?: NumberFieldValue;
  dateCreaded?: StringFieldValue;
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
  creditref?: NumberFieldValue;
  creditTotal?: NumberFieldValue;
  creditCrate?: NumberFieldValue;
  frgTypCod?: StringFieldValue;
  status?: NumberFieldValue;
  revolving?: NumberFieldValue;
  backtoback?: NumberFieldValue;
  standby?: NumberFieldValue;
  redClause?: NumberFieldValue;
  greenClause?: NumberFieldValue;
  textinc?: NumberFieldValue;
  bankAccCode?: StringFieldValue;
  bankAccDef?: StringFieldValue;
  bankCode?: StringFieldValue;
  docnrref?: NumberFieldValue;
  creditCode?: StringFieldValue;
  creditName?: StringFieldValue;
  relatedDocuments?: DateFieldValue;
  deldoclist?: StringFieldValue;
  eximlist?: StringFieldValue;
  fldals?: StringFieldValue;
  xbufs?: StringFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ExportCreditLetters entities
 */
export interface ExportCreditLettersAnalytics {
  total: number;
  // Add ExportCreditLetters-specific analytics fields
}
