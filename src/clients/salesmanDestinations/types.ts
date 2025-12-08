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
 * SalesmanDestinations entity interface based on swagger definition
 */
export interface SalesmanDestinations extends BaseEntity {
  CODE?: string;
  DEFINITION?: string;
  TYP?: number;
  BEG_DATE?: string;
  END_DATE?: string;
  SALESMANREF?: number;
  ST_CODE?: string;
  ST_GROUP_CODE?: string;
  TARGET_SALE_AMOUNT?: number;
  SALE_AMOUNT_LIMIT?: number;
  NET_SALE_AMOUNT?: number;
  SALE_DISCOUNT_LIMIT?: number;
  SALE_EXPENSE_LIMIT?: number;
  SALESMAN_CODE?: string;
}

/**
 * Union type of all SalesmanDestinations field names for type-safe field selection and sorting
 */
export type SalesmanDestinationsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'DEFINITION'
  | 'TYP'
  | 'BEG_DATE'
  | 'END_DATE'
  | 'SALESMANREF'
  | 'ST_CODE'
  | 'ST_GROUP_CODE'
  | 'TARGET_SALE_AMOUNT'
  | 'SALE_AMOUNT_LIMIT'
  | 'NET_SALE_AMOUNT'
  | 'SALE_DISCOUNT_LIMIT'
  | 'SALE_EXPENSE_LIMIT'
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
  | 'SALESMAN_CODE'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE';

/**
 * Type-safe sort specification for SalesmanDestinations queries
 */
export type SalesmanDestinationsSortSpec =
  | [SalesmanDestinationsField]
  | [SalesmanDestinationsField, 'asc' | 'desc']
  | [SalesmanDestinationsField[], 'asc' | 'desc']
  | [SalesmanDestinationsField[]];

/**
 * Type-safe query options for SalesmanDestinations entities
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
export interface SalesmanDestinationsQueryOptions extends Omit<
  QueryOptions<SalesmanDestinationsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: SalesmanDestinationsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: SalesmanDestinationsSortSpec;
}

/**
 * Search criteria for SalesmanDestinations entities
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
export interface SalesmanDestinationsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  definition?: StringFieldValue;
  typ?: NumberFieldValue;
  begDate?: StringFieldValue;
  endDate?: StringFieldValue;
  salesmanref?: NumberFieldValue;
  stCode?: StringFieldValue;
  stGroupCode?: StringFieldValue;
  targetSaleAmount?: NumberFieldValue;
  saleAmountLimit?: NumberFieldValue;
  netSaleAmount?: NumberFieldValue;
  saleDiscountLimit?: NumberFieldValue;
  saleExpenseLimit?: NumberFieldValue;
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
  salesmanCode?: StringFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for SalesmanDestinations entities
 */
export interface SalesmanDestinationsAnalytics {
  total: number;
  // Add SalesmanDestinations-specific analytics fields
}
