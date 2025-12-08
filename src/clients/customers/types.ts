import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { DataObjectParameter, Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_CstSectorAsgnXML]
 */
export interface RscollectionrsCstsectorasgnxml {
  Meta?: Meta;
  items?: RsCstsectorasgnxml[];
}

/**
 * Interface for RSCollection[RS_SlsCstAsgnXML]
 */
export interface RscollectionrsSlscstasgnxml {
  Meta?: Meta;
  items?: RsSlscstasgnxml[];
}

/**
 * Interface for RSCollection[RS_CstARPAsgnXML]
 */
export interface RscollectionrsCstarpasgnxml {
  Meta?: Meta;
  items?: RsCstarpasgnxml[];
}

/**
 * Interface for RSCollection[contacts]
 */
export interface Rscollectioncontacts {
  Meta?: Meta;
  items?: Contacts[];
}

/**
 * Interface for RSCollection[RS_ContSpeDaysXML]
 */
export interface RscollectionrsContspedaysxml {
  Meta?: Meta;
  items?: RsContspedaysxml[];
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
 * Interface for customersOfSalesmen
 */
export interface CustomersOfSalesmen {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  CODE?: string;
  NAME?: string;
  CARDTYPE?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  POSITION?: string;
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
  RECORD_STATUS?: number;
  DATA_SITEID?: number;
  DATA_REFERENCE?: number;
  USER_ID?: number;
  DEPT_ID?: number;
  DIVIS_ID?: number;
  FIRM_NO?: number;
  CL_LIST?: RscollectionrsSlsclrelxml;
  TARGETS?: string;
  XBUFS?: string;
  XML_ATTRIBUTE?: number;
  TYPE?: number;
  EMAILADDR?: string;
}

/**
 * Interface for RSCollection[RS_SlsClRelXML]
 */
export interface RscollectionrsSlsclrelxml {
  Meta?: Meta;
  items?: RsSlsclrelxml[];
}

/**
 * Interface for RS_SlsClRelXML
 */
export interface RsSlsclrelxml {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  INTERNAL_REFERENCE?: number;
  SALESMANREF?: number;
  LINE_NO?: number;
  CLIENTREF?: number;
  CODE?: string;
  NAME?: string;
  BEG_DATE?: string;
  VISIT_DAY?: number;
  VISIT_PERIOD?: string;
  SHIPREF?: number;
  SHIP_CODE?: string;
  CL_LINE_NO?: number;
}

/**
 * RsCstsectorasgnxml transaction line item
 *
 * Represents individual transaction records within a Customers collection.
 */
export interface RsCstsectorasgnxml extends BaseEntity {
  CSTVNDREF?: number;
  INDREF?: number;
  PRIMARYFLG?: number;
  ANNVOLUME?: number;
  VOLCURR?: number;
  ANNVOLUMERC?: number;
  EMPLOYEECNT?: number;
  ICODE?: string;
  IDESC?: string;
}

/**
 * RsSlscstasgnxml transaction line item
 *
 * Represents individual transaction records within a Customers collection.
 */
export interface RsSlscstasgnxml extends BaseEntity {
  CSTVNDREF?: number;
  SALESMANREF?: number;
  SLSCODE?: string;
  CLDEF?: string;
}

/**
 * RsCstarpasgnxml transaction line item
 *
 * Represents individual transaction records within a Customers collection.
 */
export interface RsCstarpasgnxml extends BaseEntity {
  CSTVNDREF?: number;
  ARPREF?: number;
  FIRMNO?: number;
  DEFAULTFLG?: number;
  CCODE?: string;
  CDESC?: string;
}

/**
 * Contacts transaction line item
 *
 * Represents individual transaction records within a Customers collection.
 */
export interface Contacts extends BaseEntity {
  NAME?: string;
  MIDINIT?: string;
  FAMNAME?: string;
  TITLE?: string;
  CSTVNDREF?: number;
  CUSTOMER_CODE?: string;
  JOBTITLE?: string;
  AUXILCODE?: string;
  AUTHCODE?: string;
  WORKPHONE?: string;
  HOMEPHONE?: string;
  MOBPHONE?: string;
  ASSTPHONE?: string;
  OFFICEFAX?: string;
  EMAILADDR?: string;
  ADDRESS1?: string;
  ADDRESS2?: string;
  CITY?: string;
  COUNTRY?: string;
  POSTCODE?: string;
  CONTCAT?: number;
  CAPIBLOCK_CREATEDBY?: number;
  CAPIBLOCK_CREADEDDATE?: string;
  CAPIBLOCK_CREATEDHOUR?: number;
  CAPIBLOCK_CREATEDMIN?: number;
  CAPIBLOCK_CREATEDSEC?: number;
  CAPIBLOCK_MODIFIEDBY?: number;
  CAPIBLOCK_MODIFIEDDATE?: string;
  CAPIBLOCK_MODIFIEDHOUR?: number;
  CAPIBLOCK_MODIFIEDMIN?: number;
  CAPIBLOCK_MODIFIEDSEC?: number;
  COUNTRYCODE?: string;
  CITYCODE?: string;
  TOWNCODE?: string;
  TOWN?: string;
  DISTRICTCODE?: string;
  DISTRICT?: string;
  WORKPHCOD?: string;
  HOMEPHCOD?: string;
  MOBPHCOD?: string;
  ASSTPHCOD?: string;
  OFFFAXCOD?: string;
  UPDATED?: number;
  FLDALS?: string;
  XBUFS?: string;
  ITEXT?: string;
  TEXTCHG?: number;
  SPEDAYSLIST?: RscollectionrsContspedaysxml;
}

/**
 * RsContspedaysxml transaction line item
 *
 * Represents individual transaction records within a Customers collection.
 */
export interface RsContspedaysxml extends BaseEntity {
  CONTREF?: number;
  SPEDAY?: string;
  SPEDAYCAT?: number;
  PERSNOTE?: string;
}

/**
 * Customers entity interface based on swagger definition
 */
export interface Customers extends BaseEntity {
  ACTIVE?: number;
  CARDTYPE?: number;
  CODE?: string;
  TITLE?: string;
  AUXILCODE?: string;
  AUTHCODE?: string;
  ADDRESS1?: string;
  ADDRESS2?: string;
  CITY?: string;
  COUNTRY?: string;
  ORIGIN?: string;
  POSTCODE?: string;
  TELNR1?: string;
  TELNR2?: string;
  FAXNR?: string;
  CLANGUAGE?: number;
  CCURRENCY?: number;
  WEBURL?: string;
  CUSTCAT?: number;
  GROUPORG?: number;
  PARENTORG?: number;
  SITEID?: number;
  ORGLOGICREF?: number;
  CAPIBLOCK_CREATEDBY?: number;
  CAPIBLOCK_CREADEDDATE?: string;
  CAPIBLOCK_CREATEDHOUR?: number;
  CAPIBLOCK_CREATEDMIN?: number;
  CAPIBLOCK_CREATEDSEC?: number;
  CAPIBLOCK_MODIFIEDBY?: number;
  CAPIBLOCK_MODIFIEDDATE?: string;
  CAPIBLOCK_MODIFIEDHOUR?: number;
  CAPIBLOCK_MODIFIEDMIN?: number;
  CAPIBLOCK_MODIFIEDSEC?: number;
  PRIMARYCONTREF?: number;
  COUNTRYCODE?: string;
  CITYCODE?: string;
  TOWNCODE?: string;
  TOWN?: string;
  DISTRICTCODE?: string;
  DISTRICT?: string;
  RECSTATUS?: number;
  RIVALFIRM?: string;
  TELCODES1?: string;
  TELCODES2?: string;
  FAXCODE?: string;
  PARNCODE?: string;
  PARNDESC?: string;
  INDLST?: RscollectionrsCstsectorasgnxml;
  SLSMLST?: RscollectionrsSlscstasgnxml;
  ARPLST?: RscollectionrsCstarpasgnxml;
  FLDALS?: string;
  ITEXT?: string;
  TEXTCHG?: number;
  XBUFS?: string;
  CONTNAME?: string;
  CONTACTINFO?: Rscollectioncontacts;
}

/**
 * Union type of all Customers field names for type-safe field selection and sorting
 */
export type CustomersField =
  | 'INTERNAL_REFERENCE'
  | 'ACTIVE'
  | 'CARDTYPE'
  | 'CODE'
  | 'TITLE'
  | 'AUXILCODE'
  | 'AUTHCODE'
  | 'ADDRESS1'
  | 'ADDRESS2'
  | 'CITY'
  | 'COUNTRY'
  | 'ORIGIN'
  | 'POSTCODE'
  | 'TELNR1'
  | 'TELNR2'
  | 'FAXNR'
  | 'CLANGUAGE'
  | 'CCURRENCY'
  | 'WEBURL'
  | 'CUSTCAT'
  | 'GROUPORG'
  | 'PARENTORG'
  | 'TEXTINC'
  | 'SITEID'
  | 'ORGLOGICREF'
  | 'CAPIBLOCK_CREATEDBY'
  | 'CAPIBLOCK_CREADEDDATE'
  | 'CAPIBLOCK_CREATEDHOUR'
  | 'CAPIBLOCK_CREATEDMIN'
  | 'CAPIBLOCK_CREATEDSEC'
  | 'CAPIBLOCK_MODIFIEDBY'
  | 'CAPIBLOCK_MODIFIEDDATE'
  | 'CAPIBLOCK_MODIFIEDHOUR'
  | 'CAPIBLOCK_MODIFIEDMIN'
  | 'CAPIBLOCK_MODIFIEDSEC'
  | 'PRIMARYCONTREF'
  | 'COUNTRYCODE'
  | 'CITYCODE'
  | 'TOWNCODE'
  | 'TOWN'
  | 'DISTRICTCODE'
  | 'DISTRICT'
  | 'RECSTATUS'
  | 'RIVALFIRM'
  | 'TELCODES1'
  | 'TELCODES2'
  | 'FAXCODE'
  | 'PARNCODE'
  | 'PARNDESC'
  | 'INDLST'
  | 'SLSMLST'
  | 'ARPLST'
  | 'FLDALS'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'XBUFS'
  | 'CONTNAME'
  | 'CONTACTINFO';

/**
 * Type-safe sort specification for Customers queries
 */
export type CustomersSortSpec =
  | [CustomersField]
  | [CustomersField, 'asc' | 'desc']
  | [CustomersField[], 'asc' | 'desc']
  | [CustomersField[]];

/**
 * Type-safe query options for Customers entities
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
export interface CustomersQueryOptions extends Omit<
  QueryOptions<CustomersField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: CustomersField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: CustomersSortSpec;
}

/**
 * Search criteria for Customers entities
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
export interface CustomersSearchCriteria {
  internalReference?: NumberFieldValue;
  active?: NumberFieldValue;
  cardtype?: NumberFieldValue;
  code?: StringFieldValue;
  title?: StringFieldValue;
  auxilcode?: StringFieldValue;
  authcode?: StringFieldValue;
  address1?: StringFieldValue;
  address2?: StringFieldValue;
  city?: StringFieldValue;
  country?: StringFieldValue;
  origin?: StringFieldValue;
  postcode?: StringFieldValue;
  telnr1?: StringFieldValue;
  telnr2?: StringFieldValue;
  faxnr?: StringFieldValue;
  clanguage?: NumberFieldValue;
  ccurrency?: NumberFieldValue;
  weburl?: StringFieldValue;
  custcat?: NumberFieldValue;
  grouporg?: NumberFieldValue;
  parentorg?: NumberFieldValue;
  textinc?: NumberFieldValue;
  siteid?: NumberFieldValue;
  orglogicref?: NumberFieldValue;
  capiblockCreatedby?: NumberFieldValue;
  capiblockCreadeddate?: StringFieldValue;
  capiblockCreatedhour?: NumberFieldValue;
  capiblockCreatedmin?: NumberFieldValue;
  capiblockCreatedsec?: NumberFieldValue;
  capiblockModifiedby?: NumberFieldValue;
  capiblockModifieddate?: StringFieldValue;
  capiblockModifiedhour?: NumberFieldValue;
  capiblockModifiedmin?: NumberFieldValue;
  capiblockModifiedsec?: NumberFieldValue;
  primarycontref?: NumberFieldValue;
  countrycode?: StringFieldValue;
  citycode?: StringFieldValue;
  towncode?: StringFieldValue;
  town?: StringFieldValue;
  districtcode?: StringFieldValue;
  district?: StringFieldValue;
  recstatus?: NumberFieldValue;
  rivalfirm?: StringFieldValue;
  telcodes1?: StringFieldValue;
  telcodes2?: StringFieldValue;
  faxcode?: StringFieldValue;
  parncode?: StringFieldValue;
  parndesc?: StringFieldValue;
  indlst?: DateFieldValue;
  slsmlst?: DateFieldValue;
  arplst?: DateFieldValue;
  fldals?: StringFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  xbufs?: StringFieldValue;
  contname?: StringFieldValue;
  contactinfo?: DateFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Customers entities
 */
export interface CustomersAnalytics {
  total: number;
  // Add Customers-specific analytics fields
}
