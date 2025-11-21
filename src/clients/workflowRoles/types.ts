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
 * Interface for RSCollection[RS_WFlowRoleDefTran]
 */
export interface RscollectionrsWflowroledeftran {
  Meta?: Meta;
  items?: RsWflowroledeftran[];
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
 * RsWflowroledeftran transaction line item
 *
 * Represents individual transaction records within a WorkflowRoles collection.
 */
export interface RsWflowroledeftran extends BaseEntity {
  LINENR?: number;
  WFROLEREF?: number;
  WFUSERNR?: number;
}

/**
 * WorkflowRoles entity interface based on swagger definition
 */
export interface WorkflowRoles extends BaseEntity {
  CODE?: string;
  NAME?: string;
  SPECODE?: string;
  CYPHCODE?: string;
  WFSTATUS?: number;
  CARD_TYPE?: number;
  TRANSACTIONS?: RscollectionrsWflowroledeftran;
  DELLIST?: string;
}

/**
 * Union type of all WorkflowRoles field names for type-safe field selection and sorting
 */
export type WorkflowRolesField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'SPECODE'
  | 'CYPHCODE'
  | 'TEXTINC'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WFSTATUS'
  | 'CARD_TYPE'
  | 'TRANSACTIONS'
  | 'DELLIST';

/**
 * Type-safe sort specification for WorkflowRoles queries
 */
export type WorkflowRolesSortSpec =
  | [WorkflowRolesField]
  | [WorkflowRolesField, 'asc' | 'desc']
  | [WorkflowRolesField[], 'asc' | 'desc']
  | [WorkflowRolesField[]];

/**
 * Type-safe query options for WorkflowRoles entities
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
export interface WorkflowRolesQueryOptions
  extends Omit<QueryOptions<WorkflowRolesField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: WorkflowRolesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: WorkflowRolesSortSpec;
}

/**
 * Search criteria for WorkflowRoles entities
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
export interface WorkflowRolesSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  specode?: StringFieldValue;
  cyphcode?: StringFieldValue;
  textinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  cardType?: NumberFieldValue;
  transactions?: DateFieldValue;
  dellist?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for WorkflowRoles entities
 */
export interface WorkflowRolesAnalytics {
  total: number;
  // Add WorkflowRoles-specific analytics fields
}
