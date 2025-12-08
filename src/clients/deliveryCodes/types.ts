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
 * DeliveryCodes entity interface based on swagger definition
 */
export interface DeliveryCodes extends BaseEntity {
  CODE_TYPE?: number;
  SPE_CODE_TYPE?: number;
  CODE?: string;
  DEFINITION?: string;
  DEFINITION2?: string;
  DEFINITION3?: string;
  COLOR?: number;
  WINCOLOR?: number;
  SPE_CODE_TYPE1?: number;
  SPE_CODE_TYPE2?: number;
  SPE_CODE_TYPE3?: number;
  SPE_CODE_TYPE4?: number;
  SPE_CODE_TYPE5?: number;
  GLOBAL_ID?: string;
}

/**
 * Union type of all DeliveryCodes field names for type-safe field selection and sorting
 */
export type DeliveryCodesField =
  | 'INTERNAL_REFERENCE'
  | 'CODE_TYPE'
  | 'SPE_CODE_TYPE'
  | 'CODE'
  | 'DEFINITION'
  | 'DEFINITION2'
  | 'DEFINITION3'
  | 'COLOR'
  | 'WINCOLOR'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'SPE_CODE_TYPE1'
  | 'SPE_CODE_TYPE2'
  | 'SPE_CODE_TYPE3'
  | 'SPE_CODE_TYPE4'
  | 'SPE_CODE_TYPE5'
  | 'GLOBAL_ID';

/**
 * Type-safe sort specification for DeliveryCodes queries
 */
export type DeliveryCodesSortSpec =
  | [DeliveryCodesField]
  | [DeliveryCodesField, 'asc' | 'desc']
  | [DeliveryCodesField[], 'asc' | 'desc']
  | [DeliveryCodesField[]];

/**
 * Type-safe query options for DeliveryCodes entities
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
export interface DeliveryCodesQueryOptions extends Omit<
  QueryOptions<DeliveryCodesField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: DeliveryCodesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: DeliveryCodesSortSpec;
}

/**
 * Search criteria for DeliveryCodes entities
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
export interface DeliveryCodesSearchCriteria {
  internalReference?: NumberFieldValue;
  codeType?: NumberFieldValue;
  speCodeType?: NumberFieldValue;
  code?: StringFieldValue;
  definition?: StringFieldValue;
  definition2?: StringFieldValue;
  definition3?: StringFieldValue;
  color?: NumberFieldValue;
  wincolor?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  speCodeType1?: NumberFieldValue;
  speCodeType2?: NumberFieldValue;
  speCodeType3?: NumberFieldValue;
  speCodeType4?: NumberFieldValue;
  speCodeType5?: NumberFieldValue;
  globalId?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for DeliveryCodes entities
 */
export interface DeliveryCodesAnalytics {
  total: number;
  // Add DeliveryCodes-specific analytics fields
}
