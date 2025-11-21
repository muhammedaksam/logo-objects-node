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
 * Interface for RSCollection[RS_AddTaxLinesXML]
 */
export interface RscollectionrsAddtaxlinesxml {
  Meta?: Meta;
  items?: RsAddtaxlinesxml[];
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
 * RsAddtaxlinesxml transaction line item
 *
 * Represents individual transaction records within a AdditionalTaxes collection.
 */
export interface RsAddtaxlinesxml extends BaseEntity {
  ADDTAXREF?: number;
  BEG_DATE?: string;
  TAX_TYPE?: number;
  RATE?: number;
  AMOUNT?: number;
  UNIT_TYPE?: number;
  UNITSETREF?: number;
  UNITREF?: number;
  TAX_TYPE_STR?: string;
  U_TYPE_STR?: string;
  UNIT_SET_CODE?: string;
  UNIT_CODE?: string;
  DISCAMNT?: number;
  EXCEPTRATE?: number;
  EXCEPTAMOUNT?: number;
  COLLECTRATE?: number;
  COLLECTAMOUNT?: number;
  FICHE_SPE_CODE?: string;
  TRANS_SPE_CODE1?: string;
  TRANS_SPE_CODE2?: string;
}

/**
 * AdditionalTaxes entity interface based on swagger definition
 */
export interface AdditionalTaxes extends BaseEntity {
  TAX_GROUP_ID?: string;
  TAX_CODE?: string;
  TAX_NAME?: string;
  ADD_TO_COST?: number;
  MULTI_ADD_TAX?: number;
  MULTI_ORDER_NR?: number;
  LINES?: RscollectionrsAddtaxlinesxml;
  DELLIST?: string;
  CLIPFLAG?: number;
  INFO_LOGICALREF?: number;
  INFO_ADDTAXREF?: number;
  INFO_BEGDATE?: string;
  INFO_TAXTYPE?: number;
  INFO_RATE?: number;
  INFO_AMOUNT?: number;
  INFO_UNITTYPE?: number;
  INFO_UNITSETREF?: number;
  INFO_UNITREF?: number;
  INFO_SITEID?: number;
  INFO_RECSTATUS?: number;
  INFO_ORGLOGICREF?: number;
  TAX_TYPE_STR?: string;
  U_TYPE_STR?: string;
  UNIT_SET_CODE?: string;
  UNIT_CODE?: string;
  INFO_DISCAMNT?: number;
  EFFECT_VAT?: number;
  GLOBAL_CODE?: string;
  INLINE_NET?: number;
}

/**
 * Union type of all AdditionalTaxes field names for type-safe field selection and sorting
 */
export type AdditionalTaxesField =
  | 'INTERNAL_REFERENCE'
  | 'TAX_GROUP_ID'
  | 'TAX_CODE'
  | 'TAX_NAME'
  | 'ADD_TO_COST'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'MULTI_ADD_TAX'
  | 'MULTI_ORDER_NR'
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
  | 'LINES'
  | 'DELLIST'
  | 'CLIPFLAG'
  | 'INFO_LOGICALREF'
  | 'INFO_ADDTAXREF'
  | 'INFO_BEGDATE'
  | 'INFO_TAXTYPE'
  | 'INFO_RATE'
  | 'INFO_AMOUNT'
  | 'INFO_UNITTYPE'
  | 'INFO_UNITSETREF'
  | 'INFO_UNITREF'
  | 'INFO_SITEID'
  | 'INFO_RECSTATUS'
  | 'INFO_ORGLOGICREF'
  | 'TAX_TYPE_STR'
  | 'U_TYPE_STR'
  | 'UNIT_SET_CODE'
  | 'UNIT_CODE'
  | 'INFO_DISCAMNT'
  | 'EFFECT_VAT'
  | 'GLOBAL_CODE'
  | 'INLINE_NET';

/**
 * Type-safe sort specification for AdditionalTaxes queries
 */
export type AdditionalTaxesSortSpec =
  | [AdditionalTaxesField]
  | [AdditionalTaxesField, 'asc' | 'desc']
  | [AdditionalTaxesField[], 'asc' | 'desc']
  | [AdditionalTaxesField[]];

/**
 * Type-safe query options for AdditionalTaxes entities
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
export interface AdditionalTaxesQueryOptions
  extends Omit<QueryOptions<AdditionalTaxesField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: AdditionalTaxesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: AdditionalTaxesSortSpec;
}

/**
 * Search criteria for AdditionalTaxes entities
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
export interface AdditionalTaxesSearchCriteria {
  internalReference?: NumberFieldValue;
  taxGroupId?: StringFieldValue;
  taxCode?: StringFieldValue;
  taxName?: StringFieldValue;
  addToCost?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  multiAddTax?: NumberFieldValue;
  multiOrderNr?: NumberFieldValue;
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
  lines?: DateFieldValue;
  dellist?: StringFieldValue;
  clipflag?: NumberFieldValue;
  infoLogicalref?: NumberFieldValue;
  infoAddtaxref?: NumberFieldValue;
  infoBegdate?: StringFieldValue;
  infoTaxtype?: NumberFieldValue;
  infoRate?: NumberFieldValue;
  infoAmount?: NumberFieldValue;
  infoUnittype?: NumberFieldValue;
  infoUnitsetref?: NumberFieldValue;
  infoUnitref?: NumberFieldValue;
  infoSiteid?: NumberFieldValue;
  infoRecstatus?: NumberFieldValue;
  infoOrglogicref?: NumberFieldValue;
  taxTypeStr?: StringFieldValue;
  uTypeStr?: StringFieldValue;
  unitSetCode?: StringFieldValue;
  unitCode?: StringFieldValue;
  infoDiscamnt?: NumberFieldValue;
  effectVat?: NumberFieldValue;
  globalCode?: StringFieldValue;
  inlineNet?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for AdditionalTaxes entities
 */
export interface AdditionalTaxesAnalytics {
  total: number;
  // Add AdditionalTaxes-specific analytics fields
}
