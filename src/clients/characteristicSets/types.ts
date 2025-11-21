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
 * Interface for RSCollection[RS_ItemCharSetAsgnX]
 */
export interface RscollectionrsItemcharsetasgnx {
  Meta?: Meta;
  items?: RsItemcharsetasgnx[];
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
 * RsItemcharsetasgnx transaction line item
 *
 * Represents individual transaction records within a CharacteristicSets collection.
 */
export interface RsItemcharsetasgnx extends BaseEntity {
  CHARSETREF?: number;
  CHARCODEREF?: number;
  LINENR?: number;
  SITEID?: number;
  CODE?: string;
  NAME?: string;
}

/**
 * CharacteristicSets entity interface based on swagger definition
 */
export interface CharacteristicSets extends BaseEntity {
  CODE?: string;
  NAME?: string;
  SPECODE?: string;
  CYPHCODE?: string;
  SITEID?: number;
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
  ITEMCHSETASGNS?: RscollectionrsItemcharsetasgnx;
  DELLIST?: string;
  UPDATED?: number;
  TEXTCHG?: number;
  ITEXT?: string;
  FLDALS?: string;
  XBUFS?: string;
}

/**
 * Union type of all CharacteristicSets field names for type-safe field selection and sorting
 */
export type CharacteristicSetsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'SPECODE'
  | 'CYPHCODE'
  | 'TEXTINC'
  | 'SITEID'
  | 'XML_ATTRIBUTE'
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
  | 'ITEMCHSETASGNS'
  | 'DELLIST'
  | 'UPDATED'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'FLDALS'
  | 'XBUFS';

/**
 * Type-safe sort specification for CharacteristicSets queries
 */
export type CharacteristicSetsSortSpec =
  | [CharacteristicSetsField]
  | [CharacteristicSetsField, 'asc' | 'desc']
  | [CharacteristicSetsField[], 'asc' | 'desc']
  | [CharacteristicSetsField[]];

/**
 * Type-safe query options for CharacteristicSets entities
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
export interface CharacteristicSetsQueryOptions
  extends Omit<QueryOptions<CharacteristicSetsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: CharacteristicSetsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: CharacteristicSetsSortSpec;
}

/**
 * Search criteria for CharacteristicSets entities
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
export interface CharacteristicSetsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  specode?: StringFieldValue;
  cyphcode?: StringFieldValue;
  textinc?: NumberFieldValue;
  siteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
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
  itemchsetasgns?: DateFieldValue;
  dellist?: StringFieldValue;
  updated?: NumberFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;
  fldals?: StringFieldValue;
  xbufs?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for CharacteristicSets entities
 */
export interface CharacteristicSetsAnalytics {
  total: number;
  // Add CharacteristicSets-specific analytics fields
}
