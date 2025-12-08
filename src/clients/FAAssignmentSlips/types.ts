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
 * Faassignmentslips entity interface based on swagger definition
 */
export interface Faassignmentslips extends BaseEntity {
  PERREF?: number;
  EMPGRPREF?: number;
  FAREF?: number;
  TRCODE?: number;
  FICHENO?: string;
  DOCODE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  DIVISION?: number;
  FACTORY?: number;
  DEPARTMENT?: number;
  WAREHOUSE?: number;
  FADEPARTMENT?: string;
  QUANTITY?: number;
  DATE?: string;
  LASTTRANDATE?: string;
  HAVEDATE?: string;
  PLNDUEDATE?: string;
  DUEDATE?: string;
  FASTATUS?: number;
  EXP?: string;
  ISEMPGRP?: number;
  FATRANSREF?: number;
  OLDAMNT?: number;
  CUROP?: number;
  FAREGCODE?: string;
  FACODE?: string;
  FANAME?: string;
  FCNOCHANGED?: number;
  DOCNRREF?: number;
  PERREGCODE?: string;
  EMPGRPCODE?: string;
  ZFICHENO?: string;
  XBUFS?: string;
}

/**
 * Union type of all Faassignmentslips field names for type-safe field selection and sorting
 */
export type FaassignmentslipsField =
  | 'INTERNAL_REFERENCE'
  | 'PERREF'
  | 'EMPGRPREF'
  | 'FAREF'
  | 'TRCODE'
  | 'FICHENO'
  | 'DOCODE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'DIVISION'
  | 'FACTORY'
  | 'DEPARTMENT'
  | 'WAREHOUSE'
  | 'FADEPARTMENT'
  | 'QUANTITY'
  | 'DATE'
  | 'LASTTRANDATE'
  | 'HAVEDATE'
  | 'PLNDUEDATE'
  | 'DUEDATE'
  | 'FASTATUS'
  | 'EXP'
  | 'ISEMPGRP'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
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
  | 'FATRANSREF'
  | 'OLDAMNT'
  | 'CUROP'
  | 'FAREGCODE'
  | 'FACODE'
  | 'FANAME'
  | 'FCNOCHANGED'
  | 'DOCNRREF'
  | 'PERREGCODE'
  | 'EMPGRPCODE'
  | 'ZFICHENO'
  | 'XBUFS';

/**
 * Type-safe sort specification for Faassignmentslips queries
 */
export type FaassignmentslipsSortSpec =
  | [FaassignmentslipsField]
  | [FaassignmentslipsField, 'asc' | 'desc']
  | [FaassignmentslipsField[], 'asc' | 'desc']
  | [FaassignmentslipsField[]];

/**
 * Type-safe query options for Faassignmentslips entities
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
export interface FaassignmentslipsQueryOptions extends Omit<
  QueryOptions<FaassignmentslipsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: FaassignmentslipsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: FaassignmentslipsSortSpec;
}

/**
 * Search criteria for Faassignmentslips entities
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
export interface FaassignmentslipsSearchCriteria {
  internalReference?: NumberFieldValue;
  perref?: NumberFieldValue;
  empgrpref?: NumberFieldValue;
  faref?: NumberFieldValue;
  trcode?: NumberFieldValue;
  ficheno?: StringFieldValue;
  docode?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  division?: NumberFieldValue;
  factory?: NumberFieldValue;
  department?: NumberFieldValue;
  warehouse?: NumberFieldValue;
  fadepartment?: StringFieldValue;
  quantity?: NumberFieldValue;
  date?: StringFieldValue;
  lasttrandate?: StringFieldValue;
  havedate?: StringFieldValue;
  plnduedate?: StringFieldValue;
  duedate?: StringFieldValue;
  fastatus?: NumberFieldValue;
  exp?: StringFieldValue;
  isempgrp?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
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
  fatransref?: NumberFieldValue;
  oldamnt?: NumberFieldValue;
  curop?: NumberFieldValue;
  faregcode?: StringFieldValue;
  facode?: StringFieldValue;
  faname?: StringFieldValue;
  fcnochanged?: NumberFieldValue;
  docnrref?: NumberFieldValue;
  perregcode?: StringFieldValue;
  empgrpcode?: StringFieldValue;
  zficheno?: StringFieldValue;
  xbufs?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Faassignmentslips entities
 */
export interface FaassignmentslipsAnalytics {
  total: number;
  // Add Faassignmentslips-specific analytics fields
}
