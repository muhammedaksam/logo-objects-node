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
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a BankAccounts collection.
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
 * BankAccounts entity interface based on swagger definition
 */
export interface BankAccounts extends BaseEntity {
  ACCOUNT_TYPE?: number;
  CODE?: string;
  DESCRIPTION?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  BANK_CODE?: string;
  BANKREF?: number;
  CHEQUE_MARGIN?: number;
  PN_MARGIN?: number;
  CHEQUE_LIMIT?: number;
  PN_LIMIT?: number;
  INTRATE_GEN?: number;
  INTRATE_CHQCRD?: number;
  INTRATE_PNCRD?: number;
  DEDTAX_RATE?: number;
  OFCFUND_RATE?: number;
  CURRENCY?: number;
  EXTENREF?: number;
  ACCOUNT_NR?: string;
  EDTCODE?: string;
  ITEXT?: string;
  XBUFS?: string;
  XCNT?: number;
  GL_CODE1?: string;
  ACCOUNTREF1?: number;
  OHP_CODE1?: string;
  CENTERREF1?: number;
  GL_CODE2?: string;
  ACCOUNTREF2?: number;
  OHP_CODE2?: string;
  CENTERREF2?: number;
  GL_CODE3?: string;
  ACCOUNTREF3?: number;
  OHP_CODE3?: string;
  CENTERREF3?: number;
  GL_CODE4?: string;
  ACCOUNTREF4?: number;
  OHP_CODE4?: string;
  CENTERREF4?: number;
  FLDALS?: string;
  KKUSAGE?: number;
  COLLATRL_LIMIT?: number;
  WITH_CLTRL_INTEREST?: number;
  WITH_CLTRL_LIMIT?: number;
  CURR_RATE_TYPE?: number;
  DIVISION_ID?: string;
  IBAN?: string;
  GL_CODE5?: string;
  ACCOUNTREF5?: number;
  OHP_CODE5?: string;
  CENTERREF5?: number;
  GL_CODE6?: string;
  ACCOUNTREF6?: number;
  OHP_CODE6?: string;
  CENTERREF6?: number;
  GL_CODE7?: string;
  ACCOUNTREF7?: number;
  OHP_CODE7?: string;
  CENTERREF7?: number;
  GL_CODE8?: string;
  ACCOUNTREF8?: number;
  OHP_CODE8?: string;
  CENTERREF8?: number;
  GL_CODE9?: string;
  ACCOUNTREF9?: number;
  OHP_CODE9?: string;
  CENTERREF9?: number;
  GL_CODE10?: string;
  ACCOUNTREF10?: number;
  OHP_CODE10?: string;
  CENTERREF10?: number;
  GL_CODE11?: string;
  ACCOUNTREF11?: number;
  OHP_CODE11?: string;
  CENTERREF11?: number;
  GL_CODE12?: string;
  ACCOUNTREF12?: number;
  OHP_CODE12?: string;
  CENTERREF12?: number;
  GL_CODE13?: string;
  ACCOUNTREF13?: number;
  OHP_CODE13?: string;
  CENTERREF13?: number;
  GL_CODE14?: string;
  ACCOUNTREF14?: number;
  OHP_CODE14?: string;
  CENTERREF14?: number;
  GL_CODE15?: string;
  ACCOUNTREF15?: number;
  OHP_CODE15?: string;
  CENTERREF15?: number;
  GL_CODE16?: string;
  ACCOUNTREF16?: number;
  OHP_CODE16?: string;
  CENTERREF16?: number;
  GL_CODE17?: string;
  ACCOUNTREF17?: number;
  OHP_CODE17?: string;
  CENTERREF17?: number;
  GL_CODE18?: string;
  ACCOUNTREF18?: number;
  OHP_CODE18?: string;
  CENTERREF18?: number;
  GL_CODE19?: string;
  ACCOUNTREF19?: number;
  OHP_CODE19?: string;
  CENTERREF19?: number;
  GL_CODE20?: string;
  ACCOUNTREF20?: number;
  OHP_CODE20?: string;
  CENTERREF20?: number;
  GL_CODE21?: string;
  ACCOUNTREF21?: number;
  OHP_CODE21?: string;
  CENTERREF21?: number;
  GL_CODE22?: string;
  ACCOUNTREF22?: number;
  OHP_CODE22?: string;
  CENTERREF22?: number;
  GL_CODE23?: string;
  ACCOUNTREF23?: number;
  OHP_CODE23?: string;
  CENTERREF23?: number;
  GL_CODE24?: string;
  ACCOUNTREF24?: number;
  OHP_CODE24?: string;
  CENTERREF24?: number;
  CREDIT_CARD_LIMIT?: number;
  CREDIT_CARD_NO?: string;
  GLOBAL_BANK_BRANCH?: string;
  DEF_BANK_ACC_REF?: number;
  DEF_BANK_ACC_CODE?: string;
  DEF_CASH_ACC_REF?: number;
  DEF_CASH_ACC_CODE?: string;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  BATCH_NO?: string;
  POS_TERMINAL_NO?: string;
  STOPAJ_PER?: number;
  ISPRECIOUSMETAL?: number;
  POSTERMINALNUM2?: string;
  POSTERMINALNUMUSE01?: number;
  POSTERMINALNUMUSE02?: number;
  BRANCH?: number;
  VATACC?: number;
}

/**
 * Union type of all BankAccounts field names for type-safe field selection and sorting
 */
export type BankAccountsField =
  | 'INTERNAL_REFERENCE'
  | 'ACCOUNT_TYPE'
  | 'RECORD_STATUS'
  | 'CODE'
  | 'DESCRIPTION'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'BANK_CODE'
  | 'BANKREF'
  | 'CHEQUE_MARGIN'
  | 'PN_MARGIN'
  | 'CHEQUE_LIMIT'
  | 'PN_LIMIT'
  | 'INTRATE_GEN'
  | 'INTRATE_CHQCRD'
  | 'INTRATE_PNCRD'
  | 'DEDTAX_RATE'
  | 'OFCFUND_RATE'
  | 'CURRENCY'
  | 'EXTENREF'
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
  | 'ACCOUNT_NR'
  | 'TEXTINC'
  | 'EDTCODE'
  | 'ITEXT'
  | 'XBUFS'
  | 'XCNT'
  | 'GL_CODE1'
  | 'ACCOUNTREF1'
  | 'OHP_CODE1'
  | 'CENTERREF1'
  | 'GL_CODE2'
  | 'ACCOUNTREF2'
  | 'OHP_CODE2'
  | 'CENTERREF2'
  | 'GL_CODE3'
  | 'ACCOUNTREF3'
  | 'OHP_CODE3'
  | 'CENTERREF3'
  | 'GL_CODE4'
  | 'ACCOUNTREF4'
  | 'OHP_CODE4'
  | 'CENTERREF4'
  | 'FLDALS'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'KKUSAGE'
  | 'COLLATRL_LIMIT'
  | 'WITH_CLTRL_INTEREST'
  | 'WITH_CLTRL_LIMIT'
  | 'CURR_RATE_TYPE'
  | 'DIVISION_ID'
  | 'IBAN'
  | 'GL_CODE5'
  | 'ACCOUNTREF5'
  | 'OHP_CODE5'
  | 'CENTERREF5'
  | 'GL_CODE6'
  | 'ACCOUNTREF6'
  | 'OHP_CODE6'
  | 'CENTERREF6'
  | 'GL_CODE7'
  | 'ACCOUNTREF7'
  | 'OHP_CODE7'
  | 'CENTERREF7'
  | 'GL_CODE8'
  | 'ACCOUNTREF8'
  | 'OHP_CODE8'
  | 'CENTERREF8'
  | 'GL_CODE9'
  | 'ACCOUNTREF9'
  | 'OHP_CODE9'
  | 'CENTERREF9'
  | 'GL_CODE10'
  | 'ACCOUNTREF10'
  | 'OHP_CODE10'
  | 'CENTERREF10'
  | 'GL_CODE11'
  | 'ACCOUNTREF11'
  | 'OHP_CODE11'
  | 'CENTERREF11'
  | 'GL_CODE12'
  | 'ACCOUNTREF12'
  | 'OHP_CODE12'
  | 'CENTERREF12'
  | 'GL_CODE13'
  | 'ACCOUNTREF13'
  | 'OHP_CODE13'
  | 'CENTERREF13'
  | 'GL_CODE14'
  | 'ACCOUNTREF14'
  | 'OHP_CODE14'
  | 'CENTERREF14'
  | 'GL_CODE15'
  | 'ACCOUNTREF15'
  | 'OHP_CODE15'
  | 'CENTERREF15'
  | 'GL_CODE16'
  | 'ACCOUNTREF16'
  | 'OHP_CODE16'
  | 'CENTERREF16'
  | 'GL_CODE17'
  | 'ACCOUNTREF17'
  | 'OHP_CODE17'
  | 'CENTERREF17'
  | 'GL_CODE18'
  | 'ACCOUNTREF18'
  | 'OHP_CODE18'
  | 'CENTERREF18'
  | 'GL_CODE19'
  | 'ACCOUNTREF19'
  | 'OHP_CODE19'
  | 'CENTERREF19'
  | 'GL_CODE20'
  | 'ACCOUNTREF20'
  | 'OHP_CODE20'
  | 'CENTERREF20'
  | 'GL_CODE21'
  | 'ACCOUNTREF21'
  | 'OHP_CODE21'
  | 'CENTERREF21'
  | 'GL_CODE22'
  | 'ACCOUNTREF22'
  | 'OHP_CODE22'
  | 'CENTERREF22'
  | 'GL_CODE23'
  | 'ACCOUNTREF23'
  | 'OHP_CODE23'
  | 'CENTERREF23'
  | 'GL_CODE24'
  | 'ACCOUNTREF24'
  | 'OHP_CODE24'
  | 'CENTERREF24'
  | 'CREDIT_CARD_LIMIT'
  | 'CREDIT_CARD_NO'
  | 'GLOBAL_BANK_BRANCH'
  | 'DEF_BANK_ACC_REF'
  | 'DEF_BANK_ACC_CODE'
  | 'DEF_CASH_ACC_REF'
  | 'DEF_CASH_ACC_CODE'
  | 'DEFNFLDSLIST'
  | 'BATCH_NO'
  | 'POS_TERMINAL_NO'
  | 'STOPAJ_PER'
  | 'ISPRECIOUSMETAL'
  | 'POSTERMINALNUM2'
  | 'POSTERMINALNUMUSE01'
  | 'POSTERMINALNUMUSE02'
  | 'BRANCH'
  | 'VATACC';

/**
 * Type-safe sort specification for BankAccounts queries
 */
export type BankAccountsSortSpec =
  | [BankAccountsField]
  | [BankAccountsField, 'asc' | 'desc']
  | [BankAccountsField[], 'asc' | 'desc']
  | [BankAccountsField[]];

/**
 * Type-safe query options for BankAccounts entities
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
export interface BankAccountsQueryOptions
  extends Omit<QueryOptions<BankAccountsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: BankAccountsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: BankAccountsSortSpec;
}

/**
 * Search criteria for BankAccounts entities
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
export interface BankAccountsSearchCriteria {
  internalReference?: NumberFieldValue;
  accountType?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  code?: StringFieldValue;
  description?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  bankCode?: StringFieldValue;
  bankref?: NumberFieldValue;
  chequeMargin?: NumberFieldValue;
  pnMargin?: NumberFieldValue;
  chequeLimit?: NumberFieldValue;
  pnLimit?: NumberFieldValue;
  intrateGen?: NumberFieldValue;
  intrateChqcrd?: NumberFieldValue;
  intratePncrd?: NumberFieldValue;
  dedtaxRate?: NumberFieldValue;
  ofcfundRate?: NumberFieldValue;
  currency?: NumberFieldValue;
  extenref?: NumberFieldValue;
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
  accountNr?: StringFieldValue;
  textinc?: NumberFieldValue;
  edtcode?: StringFieldValue;
  itext?: StringFieldValue;
  xbufs?: StringFieldValue;
  xcnt?: NumberFieldValue;
  glCode1?: StringFieldValue;
  accountref1?: NumberFieldValue;
  ohpCode1?: StringFieldValue;
  centerref1?: NumberFieldValue;
  glCode2?: StringFieldValue;
  accountref2?: NumberFieldValue;
  ohpCode2?: StringFieldValue;
  centerref2?: NumberFieldValue;
  glCode3?: StringFieldValue;
  accountref3?: NumberFieldValue;
  ohpCode3?: StringFieldValue;
  centerref3?: NumberFieldValue;
  glCode4?: StringFieldValue;
  accountref4?: NumberFieldValue;
  ohpCode4?: StringFieldValue;
  centerref4?: NumberFieldValue;
  fldals?: StringFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  kkusage?: NumberFieldValue;
  collatrlLimit?: NumberFieldValue;
  withCltrlInterest?: NumberFieldValue;
  withCltrlLimit?: NumberFieldValue;
  currRateType?: NumberFieldValue;
  divisionId?: StringFieldValue;
  iban?: StringFieldValue;
  glCode5?: StringFieldValue;
  accountref5?: NumberFieldValue;
  ohpCode5?: StringFieldValue;
  centerref5?: NumberFieldValue;
  glCode6?: StringFieldValue;
  accountref6?: NumberFieldValue;
  ohpCode6?: StringFieldValue;
  centerref6?: NumberFieldValue;
  glCode7?: StringFieldValue;
  accountref7?: NumberFieldValue;
  ohpCode7?: StringFieldValue;
  centerref7?: NumberFieldValue;
  glCode8?: StringFieldValue;
  accountref8?: NumberFieldValue;
  ohpCode8?: StringFieldValue;
  centerref8?: NumberFieldValue;
  glCode9?: StringFieldValue;
  accountref9?: NumberFieldValue;
  ohpCode9?: StringFieldValue;
  centerref9?: NumberFieldValue;
  glCode10?: StringFieldValue;
  accountref10?: NumberFieldValue;
  ohpCode10?: StringFieldValue;
  centerref10?: NumberFieldValue;
  glCode11?: StringFieldValue;
  accountref11?: NumberFieldValue;
  ohpCode11?: StringFieldValue;
  centerref11?: NumberFieldValue;
  glCode12?: StringFieldValue;
  accountref12?: NumberFieldValue;
  ohpCode12?: StringFieldValue;
  centerref12?: NumberFieldValue;
  glCode13?: StringFieldValue;
  accountref13?: NumberFieldValue;
  ohpCode13?: StringFieldValue;
  centerref13?: NumberFieldValue;
  glCode14?: StringFieldValue;
  accountref14?: NumberFieldValue;
  ohpCode14?: StringFieldValue;
  centerref14?: NumberFieldValue;
  glCode15?: StringFieldValue;
  accountref15?: NumberFieldValue;
  ohpCode15?: StringFieldValue;
  centerref15?: NumberFieldValue;
  glCode16?: StringFieldValue;
  accountref16?: NumberFieldValue;
  ohpCode16?: StringFieldValue;
  centerref16?: NumberFieldValue;
  glCode17?: StringFieldValue;
  accountref17?: NumberFieldValue;
  ohpCode17?: StringFieldValue;
  centerref17?: NumberFieldValue;
  glCode18?: StringFieldValue;
  accountref18?: NumberFieldValue;
  ohpCode18?: StringFieldValue;
  centerref18?: NumberFieldValue;
  glCode19?: StringFieldValue;
  accountref19?: NumberFieldValue;
  ohpCode19?: StringFieldValue;
  centerref19?: NumberFieldValue;
  glCode20?: StringFieldValue;
  accountref20?: NumberFieldValue;
  ohpCode20?: StringFieldValue;
  centerref20?: NumberFieldValue;
  glCode21?: StringFieldValue;
  accountref21?: NumberFieldValue;
  ohpCode21?: StringFieldValue;
  centerref21?: NumberFieldValue;
  glCode22?: StringFieldValue;
  accountref22?: NumberFieldValue;
  ohpCode22?: StringFieldValue;
  centerref22?: NumberFieldValue;
  glCode23?: StringFieldValue;
  accountref23?: NumberFieldValue;
  ohpCode23?: StringFieldValue;
  centerref23?: NumberFieldValue;
  glCode24?: StringFieldValue;
  accountref24?: NumberFieldValue;
  ohpCode24?: StringFieldValue;
  centerref24?: NumberFieldValue;
  creditCardLimit?: NumberFieldValue;
  creditCardNo?: StringFieldValue;
  globalBankBranch?: StringFieldValue;
  defBankAccRef?: NumberFieldValue;
  defBankAccCode?: StringFieldValue;
  defCashAccRef?: NumberFieldValue;
  defCashAccCode?: StringFieldValue;
  defnfldslist?: DateFieldValue;
  batchNo?: StringFieldValue;
  posTerminalNo?: StringFieldValue;
  stopajPer?: NumberFieldValue;
  ispreciousmetal?: NumberFieldValue;
  posterminalnum2?: StringFieldValue;
  posterminalnumuse01?: NumberFieldValue;
  posterminalnumuse02?: NumberFieldValue;
  branch?: NumberFieldValue;
  vatacc?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for BankAccounts entities
 */
export interface BankAccountsAnalytics {
  total: number;
  // Add BankAccounts-specific analytics fields
}
