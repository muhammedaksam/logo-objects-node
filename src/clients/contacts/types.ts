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
 * Interface for RSCollection[RS_ContSpeDaysXML]
 */
export interface RscollectionrsContspedaysxml {
  Meta?: Meta;
  items?: RsContspedaysxml[];
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
 * RsContspedaysxml transaction line item
 *
 * Represents individual transaction records within a Contacts collection.
 */
export interface RsContspedaysxml extends BaseEntity {
  CONTREF?: number;
  SPEDAY?: string;
  SPEDAYCAT?: number;
  PERSNOTE?: string;
}

/**
 * Contacts entity interface based on swagger definition
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
 * Union type of all Contacts field names for type-safe field selection and sorting
 */
export type ContactsField =
  | 'INTERNAL_REFERENCE'
  | 'NAME'
  | 'MIDINIT'
  | 'FAMNAME'
  | 'TITLE'
  | 'CSTVNDREF'
  | 'CUSTOMER_CODE'
  | 'JOBTITLE'
  | 'AUXILCODE'
  | 'AUTHCODE'
  | 'WORKPHONE'
  | 'HOMEPHONE'
  | 'MOBPHONE'
  | 'ASSTPHONE'
  | 'OFFICEFAX'
  | 'EMAILADDR'
  | 'ADDRESS1'
  | 'ADDRESS2'
  | 'CITY'
  | 'COUNTRY'
  | 'POSTCODE'
  | 'CONTCAT'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
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
  | 'TEXTINC'
  | 'COUNTRYCODE'
  | 'CITYCODE'
  | 'TOWNCODE'
  | 'TOWN'
  | 'DISTRICTCODE'
  | 'DISTRICT'
  | 'XML_ATTRIBUTE'
  | 'WORKPHCOD'
  | 'HOMEPHCOD'
  | 'MOBPHCOD'
  | 'ASSTPHCOD'
  | 'OFFFAXCOD'
  | 'UPDATED'
  | 'FLDALS'
  | 'XBUFS'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'SPEDAYSLIST';

/**
 * Type-safe sort specification for Contacts queries
 */
export type ContactsSortSpec =
  | [ContactsField]
  | [ContactsField, 'asc' | 'desc']
  | [ContactsField[], 'asc' | 'desc']
  | [ContactsField[]];

/**
 * Type-safe query options for Contacts entities
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
export interface ContactsQueryOptions extends Omit<QueryOptions<ContactsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ContactsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ContactsSortSpec;
}

/**
 * Search criteria for Contacts entities
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
export interface ContactsSearchCriteria {
  internalReference?: NumberFieldValue;
  name?: StringFieldValue;
  midinit?: StringFieldValue;
  famname?: StringFieldValue;
  title?: StringFieldValue;
  cstvndref?: NumberFieldValue;
  customerCode?: StringFieldValue;
  jobtitle?: StringFieldValue;
  auxilcode?: StringFieldValue;
  authcode?: StringFieldValue;
  workphone?: StringFieldValue;
  homephone?: StringFieldValue;
  mobphone?: StringFieldValue;
  asstphone?: StringFieldValue;
  officefax?: StringFieldValue;
  emailaddr?: StringFieldValue;
  address1?: StringFieldValue;
  address2?: StringFieldValue;
  city?: StringFieldValue;
  country?: StringFieldValue;
  postcode?: StringFieldValue;
  contcat?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
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
  textinc?: NumberFieldValue;
  countrycode?: StringFieldValue;
  citycode?: StringFieldValue;
  towncode?: StringFieldValue;
  town?: StringFieldValue;
  districtcode?: StringFieldValue;
  district?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  workphcod?: StringFieldValue;
  homephcod?: StringFieldValue;
  mobphcod?: StringFieldValue;
  asstphcod?: StringFieldValue;
  offfaxcod?: StringFieldValue;
  updated?: NumberFieldValue;
  fldals?: StringFieldValue;
  xbufs?: StringFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  spedayslist?: DateFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Contacts entities
 */
export interface ContactsAnalytics {
  total: number;
  // Add Contacts-specific analytics fields
}
