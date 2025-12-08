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
 * Interface for RSCollection[RS_SlsActFileXML]
 */
export interface RscollectionrsSlsactfilexml {
  Meta?: Meta;
  items?: RsSlsactfilexml[];
}

/**
 * Interface for RSCollection[RS_SlsActPeplXML]
 */
export interface RscollectionrsSlsactpeplxml {
  Meta?: Meta;
  items?: RsSlsactpeplxml[];
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
 * RsSlsactfilexml transaction line item
 *
 * Represents individual transaction records within a SalesActivities collection.
 */
export interface RsSlsactfilexml extends BaseEntity {
  PATH?: string;
  FILENAME?: string;
  FILETYPE?: number;
  INDISK?: number;
  ACTREF?: number;
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
  UPDATED?: number;
  DELLIST?: string;
  LINELIST?: string;
  FLDALS?: string;
  XBUFS?: string;
}

/**
 * RsSlsactpeplxml transaction line item
 *
 * Represents individual transaction records within a SalesActivities collection.
 */
export interface RsSlsactpeplxml extends BaseEntity {
  NAME?: string;
  MIDINIT?: string;
  FAMNAME?: string;
  ACTREF?: number;
  EMAILADDR?: string;
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
  UPDATED?: number;
  FLDALS?: string;
  XBUFS?: string;
}

/**
 * SalesActivities entity interface based on swagger definition
 */
export interface SalesActivities extends BaseEntity {
  DATE?: string;
  TIME?: number;
  ACTTYPE?: number;
  OPPORREF?: number;
  OPPORNO?: string;
  SALESMANREF?: number;
  SALESMANCODE?: string;
  CSTVNDREF?: number;
  CUSTOMERCODE?: string;
  ACTORDER?: number;
  DESCRIPTION?: string;
  DESCRIPTION2?: string;
  PRIORITY?: number;
  APPROVAL?: number;
  DUEDATE?: string;
  DUETIME?: number;
  SENDVIA?: number;
  SENDREF?: number;
  AUXILCODE?: string;
  AUTHCODE?: string;
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
  LASTREVISION?: number;
  ACTDESC?: string;
  UPDATED?: number;
  DOCDELLIST?: string;
  DOCLIST?: RscollectionrsSlsactfilexml;
  DOCALS?: string;
  XBUFS?: string;
  SENDCNTNM?: string;
  FIRST_NAME?: string;
  MIDDLE_INITIAL?: string;
  FAMILY_NAME?: string;
  ACTTYPEDESC?: string;
  PERDELLIST?: string;
  PERLIST?: RscollectionrsSlsactpeplxml;
  ITEXT?: string;
  TEXTCHG?: number;
  CUSTOMBRW?: number;
}

/**
 * Union type of all SalesActivities field names for type-safe field selection and sorting
 */
export type SalesActivitiesField =
  | 'INTERNAL_REFERENCE'
  | 'DATE'
  | 'TIME'
  | 'ACTTYPE'
  | 'OPPORREF'
  | 'OPPORNO'
  | 'SALESMANREF'
  | 'SALESMANCODE'
  | 'CSTVNDREF'
  | 'CUSTOMERCODE'
  | 'ACTORDER'
  | 'DESCRIPTION'
  | 'DESCRIPTION2'
  | 'PRIORITY'
  | 'APPROVAL'
  | 'DUEDATE'
  | 'DUETIME'
  | 'SENDVIA'
  | 'SENDREF'
  | 'AUXILCODE'
  | 'AUTHCODE'
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
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'LASTREVISION'
  | 'TEXTINC'
  | 'ACTDESC'
  | 'UPDATED'
  | 'DOCDELLIST'
  | 'DOCLIST'
  | 'DOCALS'
  | 'XBUFS'
  | 'SENDCNTNM'
  | 'FIRST_NAME'
  | 'MIDDLE_INITIAL'
  | 'FAMILY_NAME'
  | 'ACTTYPEDESC'
  | 'PERDELLIST'
  | 'PERLIST'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'CUSTOMBRW';

/**
 * Type-safe sort specification for SalesActivities queries
 */
export type SalesActivitiesSortSpec =
  | [SalesActivitiesField]
  | [SalesActivitiesField, 'asc' | 'desc']
  | [SalesActivitiesField[], 'asc' | 'desc']
  | [SalesActivitiesField[]];

/**
 * Type-safe query options for SalesActivities entities
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
export interface SalesActivitiesQueryOptions extends Omit<
  QueryOptions<SalesActivitiesField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: SalesActivitiesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: SalesActivitiesSortSpec;
}

/**
 * Search criteria for SalesActivities entities
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
export interface SalesActivitiesSearchCriteria {
  internalReference?: NumberFieldValue;
  date?: StringFieldValue;
  time?: NumberFieldValue;
  acttype?: NumberFieldValue;
  opporref?: NumberFieldValue;
  opporno?: StringFieldValue;
  salesmanref?: NumberFieldValue;
  salesmancode?: StringFieldValue;
  cstvndref?: NumberFieldValue;
  customercode?: StringFieldValue;
  actorder?: NumberFieldValue;
  description?: StringFieldValue;
  description2?: StringFieldValue;
  priority?: NumberFieldValue;
  approval?: NumberFieldValue;
  duedate?: StringFieldValue;
  duetime?: NumberFieldValue;
  sendvia?: NumberFieldValue;
  sendref?: NumberFieldValue;
  auxilcode?: StringFieldValue;
  authcode?: StringFieldValue;
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
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  lastrevision?: NumberFieldValue;
  textinc?: NumberFieldValue;
  actdesc?: StringFieldValue;
  updated?: NumberFieldValue;
  docdellist?: StringFieldValue;
  doclist?: DateFieldValue;
  docals?: StringFieldValue;
  xbufs?: StringFieldValue;
  sendcntnm?: StringFieldValue;
  firstName?: StringFieldValue;
  middleInitial?: StringFieldValue;
  familyName?: StringFieldValue;
  acttypedesc?: StringFieldValue;
  perdellist?: StringFieldValue;
  perlist?: DateFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  custombrw?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for SalesActivities entities
 */
export interface SalesActivitiesAnalytics {
  total: number;
  // Add SalesActivities-specific analytics fields
}
