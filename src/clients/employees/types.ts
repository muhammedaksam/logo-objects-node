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
 * Employees entity interface based on swagger definition
 */
export interface Employees extends BaseEntity {
  CODE?: string;
  NAME?: string;
  FACTORYDIVNR?: number;
  FACTORYNR?: number;
  CALENDARREF?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  PERSCARDREF?: number;
  APPROVED?: number;
  OPERATION_TIME?: number;
  HOURLY_STD_COST?: number;
  HOURLY_STDRP_COST?: number;
  ACCOUNTREF?: number;
  CENTERREF?: number;
  WFSTATUS?: number;
  SHIFT_CODE?: string;
  UPDATED?: number;
  CALCODE?: string;
  EMP_NAME?: string;
  EMP_SURNAME?: string;
  TC_KNO?: string;
  BIRTH_DATE?: string;
  BLOOD_GROUP?: string;
  REGISTER_CODE?: string;
  SOCIAL_SEC_NO?: string;
  ADDRESS1?: string;
  ADDRESS2?: string;
  DISTRICT?: string;
  DISTRICT_CODE?: string;
  TOWN?: string;
  TOWN_CODE?: string;
  CITY?: string;
  CITY_CODE?: string;
  COUNTRY?: string;
  COUNTRY_CODE?: string;
  TELEPHONE1?: string;
  TELEPHONE2?: string;
  E_MAIL?: string;
  INFO_LOGICALREF?: number;
  TRCODE1?: number;
  INFO_CARDREF?: number;
  TYPE1?: number;
  INFO_ACCOUNTREF1?: number;
  INFO_CENTERREF1?: number;
  GL_CODE1?: string;
  OHP_CODE1?: string;
  INFO_TRCODE2?: number;
  TYPE2?: number;
  INFO_ACCOUNTREF2?: number;
  INFO_CENTERREF2?: number;
  GL_CODE2?: string;
  OHP_CODE2?: string;
  TRCODE3?: number;
  TYPE3?: number;
  INFO_ACCOUNTREF3?: number;
  INFO_CENTERREF3?: number;
  GL_CODE3?: string;
  OHP_CODE3?: string;
  TRCODE4?: number;
  TYPE4?: number;
  INFO_ACCOUNTREF4?: number;
  INFO_CENTERREF4?: number;
  GL_CODE4?: string;
  OHP_CODE4?: string;
  TRCODE5?: number;
  TYPE5?: number;
  INFO_ACCOUNTREF5?: number;
  INFO_CENTERREF5?: number;
  GL_CODE5?: string;
  OHP_CODE5?: string;
  TRCODE6?: number;
  TYPE6?: number;
  INFO_ACCOUNTREF6?: number;
  INFO_CENTERREF6?: number;
  GL_CODE6?: string;
  OHP_CODE6?: string;
  FLDALS?: string;
  ITEXT?: string;
  TEXTCHG?: number;
  XBUFS?: string;
}

/**
 * Union type of all Employees field names for type-safe field selection and sorting
 */
export type EmployeesField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'FACTORYDIVNR'
  | 'FACTORYNR'
  | 'CALENDARREF'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'PERSCARDREF'
  | 'APPROVED'
  | 'OPERATION_TIME'
  | 'HOURLY_STD_COST'
  | 'HOURLY_STDRP_COST'
  | 'ACCOUNTREF'
  | 'CENTERREF'
  | 'RECORD_STATUS'
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
  | 'TEXTINC'
  | 'IMAGEINC'
  | 'WFSTATUS'
  | 'SHIFT_CODE'
  | 'UPDATED'
  | 'CALCODE'
  | 'EMP_NAME'
  | 'EMP_SURNAME'
  | 'TC_KNO'
  | 'BIRTH_DATE'
  | 'BLOOD_GROUP'
  | 'REGISTER_CODE'
  | 'SOCIAL_SEC_NO'
  | 'ADDRESS1'
  | 'ADDRESS2'
  | 'DISTRICT'
  | 'DISTRICT_CODE'
  | 'TOWN'
  | 'TOWN_CODE'
  | 'CITY'
  | 'CITY_CODE'
  | 'COUNTRY'
  | 'COUNTRY_CODE'
  | 'TELEPHONE1'
  | 'TELEPHONE2'
  | 'E_MAIL'
  | 'INFO_LOGICALREF'
  | 'TRCODE1'
  | 'INFO_CARDREF'
  | 'TYPE1'
  | 'INFO_ACCOUNTREF1'
  | 'INFO_CENTERREF1'
  | 'GL_CODE1'
  | 'OHP_CODE1'
  | 'INFO_TRCODE2'
  | 'TYPE2'
  | 'INFO_ACCOUNTREF2'
  | 'INFO_CENTERREF2'
  | 'GL_CODE2'
  | 'OHP_CODE2'
  | 'TRCODE3'
  | 'TYPE3'
  | 'INFO_ACCOUNTREF3'
  | 'INFO_CENTERREF3'
  | 'GL_CODE3'
  | 'OHP_CODE3'
  | 'TRCODE4'
  | 'TYPE4'
  | 'INFO_ACCOUNTREF4'
  | 'INFO_CENTERREF4'
  | 'GL_CODE4'
  | 'OHP_CODE4'
  | 'TRCODE5'
  | 'TYPE5'
  | 'INFO_ACCOUNTREF5'
  | 'INFO_CENTERREF5'
  | 'GL_CODE5'
  | 'OHP_CODE5'
  | 'TRCODE6'
  | 'TYPE6'
  | 'INFO_ACCOUNTREF6'
  | 'INFO_CENTERREF6'
  | 'GL_CODE6'
  | 'OHP_CODE6'
  | 'FLDALS'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'XBUFS';

/**
 * Type-safe sort specification for Employees queries
 */
export type EmployeesSortSpec =
  | [EmployeesField]
  | [EmployeesField, 'asc' | 'desc']
  | [EmployeesField[], 'asc' | 'desc']
  | [EmployeesField[]];

/**
 * Type-safe query options for Employees entities
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
export interface EmployeesQueryOptions extends Omit<
  QueryOptions<EmployeesField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: EmployeesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: EmployeesSortSpec;
}

/**
 * Search criteria for Employees entities
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
export interface EmployeesSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  factorydivnr?: NumberFieldValue;
  factorynr?: NumberFieldValue;
  calendarref?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  perscardref?: NumberFieldValue;
  approved?: NumberFieldValue;
  operationTime?: NumberFieldValue;
  hourlyStdCost?: NumberFieldValue;
  hourlyStdrpCost?: NumberFieldValue;
  accountref?: NumberFieldValue;
  centerref?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
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
  textinc?: NumberFieldValue;
  imageinc?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  shiftCode?: StringFieldValue;
  updated?: NumberFieldValue;
  calcode?: StringFieldValue;
  empName?: StringFieldValue;
  empSurname?: StringFieldValue;
  tcKno?: StringFieldValue;
  birthDate?: StringFieldValue;
  bloodGroup?: StringFieldValue;
  registerCode?: StringFieldValue;
  socialSecNo?: StringFieldValue;
  address1?: StringFieldValue;
  address2?: StringFieldValue;
  district?: StringFieldValue;
  districtCode?: StringFieldValue;
  town?: StringFieldValue;
  townCode?: StringFieldValue;
  city?: StringFieldValue;
  cityCode?: StringFieldValue;
  country?: StringFieldValue;
  countryCode?: StringFieldValue;
  telephone1?: StringFieldValue;
  telephone2?: StringFieldValue;
  eMail?: StringFieldValue;
  infoLogicalref?: NumberFieldValue;
  trcode1?: NumberFieldValue;
  infoCardref?: NumberFieldValue;
  type1?: NumberFieldValue;
  infoAccountref1?: NumberFieldValue;
  infoCenterref1?: NumberFieldValue;
  glCode1?: StringFieldValue;
  ohpCode1?: StringFieldValue;
  infoTrcode2?: NumberFieldValue;
  type2?: NumberFieldValue;
  infoAccountref2?: NumberFieldValue;
  infoCenterref2?: NumberFieldValue;
  glCode2?: StringFieldValue;
  ohpCode2?: StringFieldValue;
  trcode3?: NumberFieldValue;
  type3?: NumberFieldValue;
  infoAccountref3?: NumberFieldValue;
  infoCenterref3?: NumberFieldValue;
  glCode3?: StringFieldValue;
  ohpCode3?: StringFieldValue;
  trcode4?: NumberFieldValue;
  type4?: NumberFieldValue;
  infoAccountref4?: NumberFieldValue;
  infoCenterref4?: NumberFieldValue;
  glCode4?: StringFieldValue;
  ohpCode4?: StringFieldValue;
  trcode5?: NumberFieldValue;
  type5?: NumberFieldValue;
  infoAccountref5?: NumberFieldValue;
  infoCenterref5?: NumberFieldValue;
  glCode5?: StringFieldValue;
  ohpCode5?: StringFieldValue;
  trcode6?: NumberFieldValue;
  type6?: NumberFieldValue;
  infoAccountref6?: NumberFieldValue;
  infoCenterref6?: NumberFieldValue;
  glCode6?: StringFieldValue;
  ohpCode6?: StringFieldValue;
  fldals?: StringFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  xbufs?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Employees entities
 */
export interface EmployeesAnalytics {
  total: number;
  // Add Employees-specific analytics fields
}
