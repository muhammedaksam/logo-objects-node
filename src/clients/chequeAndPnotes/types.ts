import { BaseEntity, QueryOptions } from '../../types';
import { NumberFieldValue, StringFieldValue, AllFieldValues } from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

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
 * ChequeAndPnotes entity interface based on swagger definition
 */
export interface ChequeAndPnotes extends BaseEntity {
  TYPE?: number;
  CURRENT_STATUS?: number;
  BANK_CODE?: string;
  OURBANKREF?: number;
  BNCREREF?: number;
  BANK_CREDIT_CODE?: string;
  NUMBER?: string;
  SERIAL_NUMBER?: string;
  BANK_TITLE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  CITY?: string;
  OWING?: string;
  GUARANTOR?: string;
  INFORMANT?: string;
  DIVISION_NO?: string;
  DIVISION?: number;
  ACCOUNT_NO?: string;
  DUE_DATE?: string;
  DATE?: string;
  STAMP_FEE?: number;
  AMOUNT?: number;
  CURRENCY?: number;
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
  CANCELLED?: number;
  CURR_TRANS?: number;
  STAMP_FEE_REQD?: number;
  OWNACC_CODE?: string;
  CHREF1?: number;
  ARP_CODE?: string;
  CHREF2?: number;
  BANKPROC?: number;
  OLDSELSTAT?: number;
  XBUFS?: string;
  XCNT?: number;
  DOCALS?: string;
  BN_BRANCH_NR?: string;
  BN_ACCOUNT_NR?: string;
  DEPT_ADDR1?: string;
  DEPT_ADDR2?: string;
  DEPT_CITY?: string;
  DEPT_CITY_CODE?: string;
  DEPT_COUNTRY?: string;
  DEPT_COUNTRY_CODE?: string;
  DEPT_POST_CODE?: string;
  DEPT_TEL_NRS1?: string;
  DEPT_TEL_CODE1?: string;
  DEPT_TEL_NRS2?: string;
  DEPT_TEL_CODE2?: string;
  DEPT_FAX_NR?: string;
  DEPT_FAX_CODE?: string;
  DEPT_TOWN?: string;
  DEPT_TOWN_CODE?: string;
  DEPT_DISTRICT?: string;
  DEPT_DISTRICT_CODE?: string;
  OP_STATUS?: number;
  PRINT_CNT?: number;
  NEW_SERIAL_NO?: string;
  PROJECTREF?: number;
  PROJECTCODE?: string;
  AFFECT_COLLATRL?: number;
  AFFECT_RISK?: number;
  ORGLOGOID?: string;
  TAX_NR?: string;
  IBAN?: string;
  SALESMANREF?: number;
  SALESMAN_CODE?: string;
  DEPT_ADDRESS1?: string;
  DEPT_ADDRESS2?: string;
  DEPT_TELNR1?: string;
  DEPT_TELNR2?: string;
  DEPT_FAXNR?: string;
  SUBDURATION?: number;
  CIRO?: number;
  STATUS?: number;
  TRADING_GRP?: string;
}

/**
 * Union type of all ChequeAndPnotes field names for type-safe field selection and sorting
 */
export type ChequeAndPnotesField =
  | 'INTERNAL_REFERENCE'
  | 'TYPE'
  | 'CURRENT_STATUS'
  | 'BANK_CODE'
  | 'OURBANKREF'
  | 'BNCREREF'
  | 'BANK_CREDIT_CODE'
  | 'NUMBER'
  | 'SERIAL_NUMBER'
  | 'BANK_TITLE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'CITY'
  | 'OWING'
  | 'GUARANTOR'
  | 'INFORMANT'
  | 'DIVISION_NO'
  | 'DIVISION'
  | 'ACCOUNT_NO'
  | 'DUE_DATE'
  | 'DATE'
  | 'STAMP_FEE'
  | 'AMOUNT'
  | 'CURRENCY'
  | 'TC_XRATE'
  | 'TC_AMOUNT'
  | 'RC_XRATE'
  | 'RC_AMOUNT'
  | 'CREDIT_FLAG'
  | 'TRANSFERRED'
  | 'INUSE'
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
  | 'RC_XRATE_COLL'
  | 'TC_XRATE_COLL'
  | 'CANCELLED'
  | 'CURR_TRANS'
  | 'TEXTINC'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'STAMP_FEE_REQD'
  | 'OWNACC_CODE'
  | 'CHREF1'
  | 'ARP_CODE'
  | 'CHREF2'
  | 'BANKPROC'
  | 'OLDSELSTAT'
  | 'XBUFS'
  | 'XCNT'
  | 'DOCALS'
  | 'XML_ATTRIBUTE'
  | 'BN_BRANCH_NR'
  | 'BN_ACCOUNT_NR'
  | 'DEPT_ADDR1'
  | 'DEPT_ADDR2'
  | 'DEPT_CITY'
  | 'DEPT_CITY_CODE'
  | 'DEPT_COUNTRY'
  | 'DEPT_COUNTRY_CODE'
  | 'DEPT_POST_CODE'
  | 'DEPT_TEL_NRS1'
  | 'DEPT_TEL_CODE1'
  | 'DEPT_TEL_NRS2'
  | 'DEPT_TEL_CODE2'
  | 'DEPT_FAX_NR'
  | 'DEPT_FAX_CODE'
  | 'DEPT_TOWN'
  | 'DEPT_TOWN_CODE'
  | 'DEPT_DISTRICT'
  | 'DEPT_DISTRICT_CODE'
  | 'OP_STATUS'
  | 'PRINT_CNT'
  | 'NEW_SERIAL_NO'
  | 'PROJECTREF'
  | 'PROJECTCODE'
  | 'AFFECT_COLLATRL'
  | 'AFFECT_RISK'
  | 'ORGLOGOID'
  | 'TAX_NR'
  | 'IBAN'
  | 'SALESMANREF'
  | 'SALESMAN_CODE'
  | 'DEPT_ADDRESS1'
  | 'DEPT_ADDRESS2'
  | 'DEPT_TELNR1'
  | 'DEPT_TELNR2'
  | 'DEPT_FAXNR'
  | 'SUBDURATION'
  | 'CIRO'
  | 'STATUS'
  | 'TRADING_GRP';

/**
 * Type-safe sort specification for ChequeAndPnotes queries
 */
export type ChequeAndPnotesSortSpec =
  | [ChequeAndPnotesField]
  | [ChequeAndPnotesField, 'asc' | 'desc']
  | [ChequeAndPnotesField[], 'asc' | 'desc']
  | [ChequeAndPnotesField[]];

/**
 * Type-safe query options for ChequeAndPnotes entities
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
export interface ChequeAndPnotesQueryOptions extends Omit<
  QueryOptions<ChequeAndPnotesField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ChequeAndPnotesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ChequeAndPnotesSortSpec;
}

/**
 * Search criteria for ChequeAndPnotes entities
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
export interface ChequeAndPnotesSearchCriteria {
  internalReference?: NumberFieldValue;
  type?: NumberFieldValue;
  currentStatus?: NumberFieldValue;
  bankCode?: StringFieldValue;
  ourbankref?: NumberFieldValue;
  bncreref?: NumberFieldValue;
  bankCreditCode?: StringFieldValue;
  number?: StringFieldValue;
  serialNumber?: StringFieldValue;
  bankTitle?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  city?: StringFieldValue;
  owing?: StringFieldValue;
  guarantor?: StringFieldValue;
  informant?: StringFieldValue;
  divisionNo?: StringFieldValue;
  division?: NumberFieldValue;
  accountNo?: StringFieldValue;
  dueDate?: StringFieldValue;
  date?: StringFieldValue;
  stampFee?: NumberFieldValue;
  amount?: NumberFieldValue;
  currency?: NumberFieldValue;
  tcXrate?: NumberFieldValue;
  tcAmount?: NumberFieldValue;
  rcXrate?: NumberFieldValue;
  rcAmount?: NumberFieldValue;
  creditFlag?: NumberFieldValue;
  transferred?: NumberFieldValue;
  inuse?: NumberFieldValue;
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
  rcXrateColl?: NumberFieldValue;
  tcXrateColl?: NumberFieldValue;
  cancelled?: NumberFieldValue;
  currTrans?: NumberFieldValue;
  textinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  stampFeeReqd?: NumberFieldValue;
  ownaccCode?: StringFieldValue;
  chref1?: NumberFieldValue;
  arpCode?: StringFieldValue;
  chref2?: NumberFieldValue;
  bankproc?: NumberFieldValue;
  oldselstat?: NumberFieldValue;
  xbufs?: StringFieldValue;
  xcnt?: NumberFieldValue;
  docals?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  bnBranchNr?: StringFieldValue;
  bnAccountNr?: StringFieldValue;
  deptAddr1?: StringFieldValue;
  deptAddr2?: StringFieldValue;
  deptCity?: StringFieldValue;
  deptCityCode?: StringFieldValue;
  deptCountry?: StringFieldValue;
  deptCountryCode?: StringFieldValue;
  deptPostCode?: StringFieldValue;
  deptTelNrs1?: StringFieldValue;
  deptTelCode1?: StringFieldValue;
  deptTelNrs2?: StringFieldValue;
  deptTelCode2?: StringFieldValue;
  deptFaxNr?: StringFieldValue;
  deptFaxCode?: StringFieldValue;
  deptTown?: StringFieldValue;
  deptTownCode?: StringFieldValue;
  deptDistrict?: StringFieldValue;
  deptDistrictCode?: StringFieldValue;
  opStatus?: NumberFieldValue;
  printCnt?: NumberFieldValue;
  newSerialNo?: StringFieldValue;
  projectref?: NumberFieldValue;
  projectcode?: StringFieldValue;
  affectCollatrl?: NumberFieldValue;
  affectRisk?: NumberFieldValue;
  orglogoid?: StringFieldValue;
  taxNr?: StringFieldValue;
  iban?: StringFieldValue;
  salesmanref?: NumberFieldValue;
  salesmanCode?: StringFieldValue;
  deptAddress1?: StringFieldValue;
  deptAddress2?: StringFieldValue;
  deptTelnr1?: StringFieldValue;
  deptTelnr2?: StringFieldValue;
  deptFaxnr?: StringFieldValue;
  subduration?: NumberFieldValue;
  ciro?: NumberFieldValue;
  status?: NumberFieldValue;
  tradingGrp?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ChequeAndPnotes entities
 */
export interface ChequeAndPnotesAnalytics {
  total: number;
  // Add ChequeAndPnotes-specific analytics fields
}
