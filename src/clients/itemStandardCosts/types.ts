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
 * ItemStandardCosts entity interface based on swagger definition
 */
export interface ItemStandardCosts extends BaseEntity {
  CARDTYPE?: number;
  CARDREF?: number;
  PERIODREF?: number;
  FACTORYNR?: number;
  UNITCOST?: number;
  REPUNITCOST?: number;
  TRUNITCOST?: number;
  TRCURR?: number;
  TRRATE?: number;
  REPORTRATE?: number;
  LINENO?: number;
  LOGICALREF?: number;
  PERIODCODE?: string;
  PERIODNAME?: string;
  FACTNAME?: string;
  CARD_CODE?: string;
}

/**
 * Union type of all ItemStandardCosts field names for type-safe field selection and sorting
 */
export type ItemStandardCostsField =
  | 'INTERNAL_REFERENCE'
  | 'CARDTYPE'
  | 'CARDREF'
  | 'PERIODREF'
  | 'FACTORYNR'
  | 'UNITCOST'
  | 'REPUNITCOST'
  | 'TRUNITCOST'
  | 'TRCURR'
  | 'TRRATE'
  | 'REPORTRATE'
  | 'LINENO'
  | 'LOGICALREF'
  | 'PERIODCODE'
  | 'PERIODNAME'
  | 'FACTNAME'
  | 'CARD_CODE'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE';

/**
 * Type-safe sort specification for ItemStandardCosts queries
 */
export type ItemStandardCostsSortSpec =
  | [ItemStandardCostsField]
  | [ItemStandardCostsField, 'asc' | 'desc']
  | [ItemStandardCostsField[], 'asc' | 'desc']
  | [ItemStandardCostsField[]];

/**
 * Type-safe query options for ItemStandardCosts entities
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
export interface ItemStandardCostsQueryOptions extends Omit<
  QueryOptions<ItemStandardCostsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ItemStandardCostsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ItemStandardCostsSortSpec;
}

/**
 * Search criteria for ItemStandardCosts entities
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
export interface ItemStandardCostsSearchCriteria {
  internalReference?: NumberFieldValue;
  cardtype?: NumberFieldValue;
  cardref?: NumberFieldValue;
  periodref?: NumberFieldValue;
  factorynr?: NumberFieldValue;
  unitcost?: NumberFieldValue;
  repunitcost?: NumberFieldValue;
  trunitcost?: NumberFieldValue;
  trcurr?: NumberFieldValue;
  trrate?: NumberFieldValue;
  reportrate?: NumberFieldValue;
  lineno?: NumberFieldValue;
  logicalref?: NumberFieldValue;
  periodcode?: StringFieldValue;
  periodname?: StringFieldValue;
  factname?: StringFieldValue;
  cardCode?: StringFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ItemStandardCosts entities
 */
export interface ItemStandardCostsAnalytics {
  total: number;
  // Add ItemStandardCosts-specific analytics fields
}
