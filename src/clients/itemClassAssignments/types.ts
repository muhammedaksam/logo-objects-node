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
 * ItemClassAssignments entity interface based on swagger definition
 */
export interface ItemClassAssignments extends BaseEntity {
  PARENTREF?: number;
  CHILDREF?: number;
  CLASS_CODE?: string;
  CLASS_NAME?: string;
  UPLEVEL?: number;
  DMNT_FLGS?: string;
  SET_UOM_DMNT?: number;
  ITEM_CODE?: string;
  ITEM_NAME?: string;
}

/**
 * Union type of all ItemClassAssignments field names for type-safe field selection and sorting
 */
export type ItemClassAssignmentsField =
  | 'INTERNAL_REFERENCE'
  | 'PARENTREF'
  | 'CHILDREF'
  | 'CLASS_CODE'
  | 'CLASS_NAME'
  | 'UPLEVEL'
  | 'DMNT_FLGS'
  | 'SET_UOM_DMNT'
  | 'ITEM_CODE'
  | 'ITEM_NAME'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE';

/**
 * Type-safe sort specification for ItemClassAssignments queries
 */
export type ItemClassAssignmentsSortSpec =
  | [ItemClassAssignmentsField]
  | [ItemClassAssignmentsField, 'asc' | 'desc']
  | [ItemClassAssignmentsField[], 'asc' | 'desc']
  | [ItemClassAssignmentsField[]];

/**
 * Type-safe query options for ItemClassAssignments entities
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
export interface ItemClassAssignmentsQueryOptions extends Omit<
  QueryOptions<ItemClassAssignmentsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ItemClassAssignmentsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ItemClassAssignmentsSortSpec;
}

/**
 * Search criteria for ItemClassAssignments entities
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
export interface ItemClassAssignmentsSearchCriteria {
  internalReference?: NumberFieldValue;
  parentref?: NumberFieldValue;
  childref?: NumberFieldValue;
  classCode?: StringFieldValue;
  className?: StringFieldValue;
  uplevel?: NumberFieldValue;
  dmntFlgs?: StringFieldValue;
  setUomDmnt?: NumberFieldValue;
  itemCode?: StringFieldValue;
  itemName?: StringFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ItemClassAssignments entities
 */
export interface ItemClassAssignmentsAnalytics {
  total: number;
  // Add ItemClassAssignments-specific analytics fields
}
