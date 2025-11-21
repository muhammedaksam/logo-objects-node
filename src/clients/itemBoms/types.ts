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
 * ItemBoms entity interface based on swagger definition
 */
export interface ItemBoms extends BaseEntity {
  ITEMREF?: number;
  BOMREF?: number;
  REL_TYPE?: number;
  FACTORY_NR?: number;
  PRIORITY?: number;
  LINE_NR?: number;
  MAX_QUANTITY?: number;
  MIN_QUANTITY?: number;
  BEG_DATE?: string;
  END_DATE?: string;
  STD_COST_FLAG?: number;
  BOM_CODE?: string;
  BOM_TYPE?: number;
  BOMDEF?: string;
  ITEM_CODE?: string;
  FOR_MRP?: number;
  STD_COSTFLAG?: number;
}

/**
 * Union type of all ItemBoms field names for type-safe field selection and sorting
 */
export type ItemBomsField =
  | 'INTERNAL_REFERENCE'
  | 'ITEMREF'
  | 'BOMREF'
  | 'REL_TYPE'
  | 'FACTORY_NR'
  | 'PRIORITY'
  | 'LINE_NR'
  | 'MAX_QUANTITY'
  | 'MIN_QUANTITY'
  | 'BEG_DATE'
  | 'END_DATE'
  | 'STD_COST_FLAG'
  | 'BOM_CODE'
  | 'BOM_TYPE'
  | 'BOMDEF'
  | 'ITEM_CODE'
  | 'FOR_MRP'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'STD_COSTFLAG';

/**
 * Type-safe sort specification for ItemBoms queries
 */
export type ItemBomsSortSpec =
  | [ItemBomsField]
  | [ItemBomsField, 'asc' | 'desc']
  | [ItemBomsField[], 'asc' | 'desc']
  | [ItemBomsField[]];

/**
 * Type-safe query options for ItemBoms entities
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
export interface ItemBomsQueryOptions extends Omit<QueryOptions<ItemBomsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ItemBomsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ItemBomsSortSpec;
}

/**
 * Search criteria for ItemBoms entities
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
export interface ItemBomsSearchCriteria {
  internalReference?: NumberFieldValue;
  itemref?: NumberFieldValue;
  bomref?: NumberFieldValue;
  relType?: NumberFieldValue;
  factoryNr?: NumberFieldValue;
  priority?: NumberFieldValue;
  lineNr?: NumberFieldValue;
  maxQuantity?: NumberFieldValue;
  minQuantity?: NumberFieldValue;
  begDate?: StringFieldValue;
  endDate?: StringFieldValue;
  stdCostFlag?: NumberFieldValue;
  bomCode?: StringFieldValue;
  bomType?: NumberFieldValue;
  bomdef?: StringFieldValue;
  itemCode?: StringFieldValue;
  forMrp?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  stdCostflag?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ItemBoms entities
 */
export interface ItemBomsAnalytics {
  total: number;
  // Add ItemBoms-specific analytics fields
}
