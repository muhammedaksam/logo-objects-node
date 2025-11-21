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
 * ArpShipmentLocations entity interface based on swagger definition
 */
export interface ArpShipmentLocations extends BaseEntity {
  ARP_CODE?: string;
  CLIENTREF?: number;
  CODE?: string;
  DESCRIPTION?: string;
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
  TAX_NR?: string;
  TAX_OFFICE?: string;
  TRADING_GRP?: string;
  VAT_NR?: string;
  XBUFS?: string;
  INCHANGE?: string;
  LONGITUDE?: string;
  LATITUDE?: string;
  CITY_ID?: string;
  TOWN_ID?: string;
  SHIP_BEG_TIME1?: number;
  SHIP_BEG_TIME2?: number;
  SHIP_BEG_TIME3?: number;
  SHIP_END_TIME1?: number;
  SHIP_END_TIME2?: number;
  SHIP_END_TIME3?: number;
  EMAIL_ADDR?: string;
  DEFAULT_FLAG?: number;
  POST_LABEL?: string;
  SENDER_LABEL?: string;
  POST_LABEL_DESP?: string;
  SENDER_LABEL_DESP?: string;
  PERSCOMPANY?: number;
  TCKNO?: string;
  NAME?: string;
  SURNAME?: string;
}

/**
 * Union type of all ArpShipmentLocations field names for type-safe field selection and sorting
 */
export type ArpShipmentLocationsField =
  | 'INTERNAL_REFERENCE'
  | 'ARP_CODE'
  | 'CLIENTREF'
  | 'CODE'
  | 'DESCRIPTION'
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
  | 'TELEPHONE1_CODE'
  | 'TELEPHONE2'
  | 'TELEPHONE2_CODE'
  | 'FAX'
  | 'FAX_CODE'
  | 'TAX_NR'
  | 'TAX_OFFICE'
  | 'TRADING_GRP'
  | 'VAT_NR'
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
  | 'XBUFS'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'RECORD_STATUS'
  | 'TEXTINC'
  | 'INCHANGE'
  | 'LONGITUDE'
  | 'LATITUDE'
  | 'CITY_ID'
  | 'TOWN_ID'
  | 'SHIP_BEG_TIME1'
  | 'SHIP_BEG_TIME2'
  | 'SHIP_BEG_TIME3'
  | 'SHIP_END_TIME1'
  | 'SHIP_END_TIME2'
  | 'SHIP_END_TIME3'
  | 'EMAIL_ADDR'
  | 'DEFAULT_FLAG'
  | 'POST_LABEL'
  | 'SENDER_LABEL'
  | 'POST_LABEL_DESP'
  | 'SENDER_LABEL_DESP'
  | 'PERSCOMPANY'
  | 'TCKNO'
  | 'NAME'
  | 'SURNAME';

/**
 * Type-safe sort specification for ArpShipmentLocations queries
 */
export type ArpShipmentLocationsSortSpec =
  | [ArpShipmentLocationsField]
  | [ArpShipmentLocationsField, 'asc' | 'desc']
  | [ArpShipmentLocationsField[], 'asc' | 'desc']
  | [ArpShipmentLocationsField[]];

/**
 * Type-safe query options for ArpShipmentLocations entities
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
export interface ArpShipmentLocationsQueryOptions
  extends Omit<QueryOptions<ArpShipmentLocationsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ArpShipmentLocationsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ArpShipmentLocationsSortSpec;
}

/**
 * Search criteria for ArpShipmentLocations entities
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
export interface ArpShipmentLocationsSearchCriteria {
  internalReference?: NumberFieldValue;
  arpCode?: StringFieldValue;
  clientref?: NumberFieldValue;
  code?: StringFieldValue;
  description?: StringFieldValue;
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
  telephone1Code?: StringFieldValue;
  telephone2?: StringFieldValue;
  telephone2Code?: StringFieldValue;
  fax?: StringFieldValue;
  faxCode?: StringFieldValue;
  taxNr?: StringFieldValue;
  taxOffice?: StringFieldValue;
  tradingGrp?: StringFieldValue;
  vatNr?: StringFieldValue;
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
  xbufs?: StringFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  textinc?: NumberFieldValue;
  inchange?: StringFieldValue;
  longitude?: StringFieldValue;
  latitude?: StringFieldValue;
  cityId?: StringFieldValue;
  townId?: StringFieldValue;
  shipBegTime1?: NumberFieldValue;
  shipBegTime2?: NumberFieldValue;
  shipBegTime3?: NumberFieldValue;
  shipEndTime1?: NumberFieldValue;
  shipEndTime2?: NumberFieldValue;
  shipEndTime3?: NumberFieldValue;
  emailAddr?: StringFieldValue;
  defaultFlag?: NumberFieldValue;
  postLabel?: StringFieldValue;
  senderLabel?: StringFieldValue;
  postLabelDesp?: StringFieldValue;
  senderLabelDesp?: StringFieldValue;
  perscompany?: NumberFieldValue;
  tckno?: StringFieldValue;
  name?: StringFieldValue;
  surname?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ArpShipmentLocations entities
 */
export interface ArpShipmentLocationsAnalytics {
  total: number;
  // Add ArpShipmentLocations-specific analytics fields
}
