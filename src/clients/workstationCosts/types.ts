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
 * WorkstationCosts entity interface based on swagger definition
 */
export interface WorkstationCosts extends BaseEntity {
  RESTYPE?: number;
  RESREF?: number;
  BEGDATE?: string;
  UNITREF?: number;
  HOURLY_STD_COST?: number;
  HOURLY_STDRP_COST?: number;
  APPROVED?: number;
  WS_CODE?: string;
  WS_NAME?: string;
  UPDATED?: number;
}

/**
 * Union type of all WorkstationCosts field names for type-safe field selection and sorting
 */
export type WorkstationCostsField =
  | 'INTERNAL_REFERENCE'
  | 'RESTYPE'
  | 'RESREF'
  | 'BEGDATE'
  | 'UNITREF'
  | 'HOURLY_STD_COST'
  | 'HOURLY_STDRP_COST'
  | 'APPROVED'
  | 'RECORD_STATUS'
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
  | 'WS_CODE'
  | 'WS_NAME'
  | 'UPDATED'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE';

/**
 * Type-safe sort specification for WorkstationCosts queries
 */
export type WorkstationCostsSortSpec =
  | [WorkstationCostsField]
  | [WorkstationCostsField, 'asc' | 'desc']
  | [WorkstationCostsField[], 'asc' | 'desc']
  | [WorkstationCostsField[]];

/**
 * Type-safe query options for WorkstationCosts entities
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
export interface WorkstationCostsQueryOptions
  extends Omit<QueryOptions<WorkstationCostsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: WorkstationCostsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: WorkstationCostsSortSpec;
}

/**
 * Search criteria for WorkstationCosts entities
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
export interface WorkstationCostsSearchCriteria {
  internalReference?: NumberFieldValue;
  restype?: NumberFieldValue;
  resref?: NumberFieldValue;
  begdate?: StringFieldValue;
  unitref?: NumberFieldValue;
  hourlyStdCost?: NumberFieldValue;
  hourlyStdrpCost?: NumberFieldValue;
  approved?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
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
  wsCode?: StringFieldValue;
  wsName?: StringFieldValue;
  updated?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for WorkstationCosts entities
 */
export interface WorkstationCostsAnalytics {
  total: number;
  // Add WorkstationCosts-specific analytics fields
}
