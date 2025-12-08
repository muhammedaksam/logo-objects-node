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
 * Interface for RSCollection[RS_BankCrePayXML]
 */
export interface RscollectionrsBankcrepayxml {
  Meta?: Meta;
  items?: RsBankcrepayxml[];
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
 * RsBankcrepayxml transaction line item
 *
 * Represents individual transaction records within a BankCredits collection.
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
 * BankCredits entity interface based on swagger definition
 */
export interface BankCredits extends BaseEntity {
  CODE?: string;
  NAME?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  CRCARD_TYPE?: number;
  CREDIT_TYPE?: number;
  CRCALC_TYPE?: number;
  GKSNO?: string;
  BEG_DATE?: string;
  END_DATE?: string;
  PAYMENT_BEG_DATE?: string;
  TRCURR?: number;
  TRTOTAL?: number;
  TRRATECR?: number;
  TRRATEACC?: number;
  REPORTRATE?: number;
  BNCRACCREF?: number;
  CR_BANK_ACC_CODE?: string;
  BNCRREF?: number;
  CR_BANK_CODE?: string;
  BNACCREF?: number;
  BANK_ACC_CODE?: string;
  BNREF?: number;
  BANK_CODE?: string;
  REPAYPLANREF?: number;
  REPAY_PLAN_CODE?: string;
  INT_RATE?: number;
  INT_TOTAL?: number;
  BSMV_RATE?: number;
  BSMV_TOTAL?: number;
  KKDF_RATE?: number;
  KKDF_TOTAL?: number;
  COMM_TOTAL?: number;
  TEXT_INC?: number;
  VTR_CURR?: number;
  CLOSED_TOT?: number;
  REM_TOT?: number;
  CLOSED_INT_TOT?: number;
  REM_INT_TOT?: number;
  CLOSED_BSMV_TOT?: number;
  REM_BSMV_TOT?: number;
  CLOSED_KKDF_TOT?: number;
  REM_KKDF_TOT?: number;
  XBUFS?: string;
  XCNT?: number;
  TEXTCHG?: number;
  ITEXT?: string;
  FLDALS?: string;
  PAYPP?: string;
  BANK_CRE_PAYMENT_LIST?: RscollectionrsBankcrepayxml;
  BRANCH?: number;
  REVERSE_PAYMENT?: number;
  DUE_DATE?: number;
  PROJECT_CODE?: string;
  PROJECTREF?: number;
  CREATE_BANK_SLIP?: number;
  PPI_DEDUCT?: number;
  STRUCT_DATE?: string;
  PERIOD_END_PAY?: number;
  PARENTREF?: number;
  PARENT_CODE?: string;
  GUID?: string;
  VALORCALC?: number;
}

/**
 * Union type of all BankCredits field names for type-safe field selection and sorting
 */
export type BankCreditsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'CRCARD_TYPE'
  | 'CREDIT_TYPE'
  | 'CRCALC_TYPE'
  | 'GKSNO'
  | 'BEG_DATE'
  | 'END_DATE'
  | 'PAYMENT_BEG_DATE'
  | 'TRCURR'
  | 'TRTOTAL'
  | 'TRRATECR'
  | 'TRRATEACC'
  | 'REPORTRATE'
  | 'BNCRACCREF'
  | 'CR_BANK_ACC_CODE'
  | 'BNCRREF'
  | 'CR_BANK_CODE'
  | 'BNACCREF'
  | 'BANK_ACC_CODE'
  | 'BNREF'
  | 'BANK_CODE'
  | 'REPAYPLANREF'
  | 'REPAY_PLAN_CODE'
  | 'INT_RATE'
  | 'INT_TOTAL'
  | 'BSMV_RATE'
  | 'BSMV_TOTAL'
  | 'KKDF_RATE'
  | 'KKDF_TOTAL'
  | 'COMM_TOTAL'
  | 'TEXT_INC'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
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
  | 'VTR_CURR'
  | 'CLOSED_TOT'
  | 'REM_TOT'
  | 'CLOSED_INT_TOT'
  | 'REM_INT_TOT'
  | 'CLOSED_BSMV_TOT'
  | 'REM_BSMV_TOT'
  | 'CLOSED_KKDF_TOT'
  | 'REM_KKDF_TOT'
  | 'XBUFS'
  | 'XCNT'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'FLDALS'
  | 'PAYPP'
  | 'BANK_CRE_PAYMENT_LIST'
  | 'BRANCH'
  | 'REVERSE_PAYMENT'
  | 'DUE_DATE'
  | 'PROJECT_CODE'
  | 'PROJECTREF'
  | 'CREATE_BANK_SLIP'
  | 'PPI_DEDUCT'
  | 'STRUCT_DATE'
  | 'PERIOD_END_PAY'
  | 'PARENTREF'
  | 'PARENT_CODE'
  | 'GUID'
  | 'VALORCALC';

/**
 * Type-safe sort specification for BankCredits queries
 */
export type BankCreditsSortSpec =
  | [BankCreditsField]
  | [BankCreditsField, 'asc' | 'desc']
  | [BankCreditsField[], 'asc' | 'desc']
  | [BankCreditsField[]];

/**
 * Type-safe query options for BankCredits entities
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
export interface BankCreditsQueryOptions extends Omit<
  QueryOptions<BankCreditsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: BankCreditsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: BankCreditsSortSpec;
}

/**
 * Search criteria for BankCredits entities
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
export interface BankCreditsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  crcardType?: NumberFieldValue;
  creditType?: NumberFieldValue;
  crcalcType?: NumberFieldValue;
  gksno?: StringFieldValue;
  begDate?: StringFieldValue;
  endDate?: StringFieldValue;
  paymentBegDate?: StringFieldValue;
  trcurr?: NumberFieldValue;
  trtotal?: NumberFieldValue;
  trratecr?: NumberFieldValue;
  trrateacc?: NumberFieldValue;
  reportrate?: NumberFieldValue;
  bncraccref?: NumberFieldValue;
  crBankAccCode?: StringFieldValue;
  bncrref?: NumberFieldValue;
  crBankCode?: StringFieldValue;
  bnaccref?: NumberFieldValue;
  bankAccCode?: StringFieldValue;
  bnref?: NumberFieldValue;
  bankCode?: StringFieldValue;
  repayplanref?: NumberFieldValue;
  repayPlanCode?: StringFieldValue;
  intRate?: NumberFieldValue;
  intTotal?: NumberFieldValue;
  bsmvRate?: NumberFieldValue;
  bsmvTotal?: NumberFieldValue;
  kkdfRate?: NumberFieldValue;
  kkdfTotal?: NumberFieldValue;
  commTotal?: NumberFieldValue;
  textInc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
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
  vtrCurr?: NumberFieldValue;
  closedTot?: NumberFieldValue;
  remTot?: NumberFieldValue;
  closedIntTot?: NumberFieldValue;
  remIntTot?: NumberFieldValue;
  closedBsmvTot?: NumberFieldValue;
  remBsmvTot?: NumberFieldValue;
  closedKkdfTot?: NumberFieldValue;
  remKkdfTot?: NumberFieldValue;
  xbufs?: StringFieldValue;
  xcnt?: NumberFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;
  fldals?: StringFieldValue;
  paypp?: StringFieldValue;
  bankCrePaymentList?: DateFieldValue;
  branch?: NumberFieldValue;
  reversePayment?: NumberFieldValue;
  dueDate?: NumberFieldValue;
  projectCode?: StringFieldValue;
  projectref?: NumberFieldValue;
  createBankSlip?: NumberFieldValue;
  ppiDeduct?: NumberFieldValue;
  structDate?: StringFieldValue;
  periodEndPay?: NumberFieldValue;
  parentref?: NumberFieldValue;
  parentCode?: StringFieldValue;
  guid?: StringFieldValue;
  valorcalc?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for BankCredits entities
 */
export interface BankCreditsAnalytics {
  total: number;
  // Add BankCredits-specific analytics fields
}
