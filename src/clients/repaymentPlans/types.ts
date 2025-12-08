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
 * Interface for RSCollection[RS_RePayPlansLnXML]
 */
export interface RscollectionrsRepayplanslnxml {
  Meta?: Meta;
  items?: RsRepayplanslnxml[];
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
 * RsRepayplanslnxml transaction line item
 *
 * Represents individual transaction records within a RepaymentPlans collection.
 */
export interface RsRepayplanslnxml extends BaseEntity {
  REPAYPLANREF?: number;
  LINENO?: number;
  FORMULA?: string;
  CONDITION?: string;
  DAY?: string;
  MONTH?: string;
  YEAR?: string;
  RNDVALUE?: number;
  DISCRATE?: number;
  POS_COMSN?: number;
  POINT_COMSN?: number;
  DUEDIFF_COMSN?: number;
  CALCTYPE?: number;
  REPAY_DAY?: string;
  REPAY_MONTH?: string;
  FORMULA1?: string;
  FORMULA2?: string;
  FORMULA3?: string;
}

/**
 * RepaymentPlans entity interface based on swagger definition
 */
export interface RepaymentPlans extends BaseEntity {
  CODE?: string;
  TITLE?: string;
  BANKACC_CODE?: string;
  BANKACC_TYPE?: number;
  BANKACCREF?: number;
  BEG_DATE?: string;
  END_DATE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  WRKDAYS?: number;
  ACTIVE?: number;
  WFSTATUS?: number;
  LINES?: RscollectionrsRepayplanslnxml;
  DELLINELIST?: string;
  UPDATED?: number;
  EARLY_INTEREST?: number;
  LATE_INTEREST?: number;
}

/**
 * Union type of all RepaymentPlans field names for type-safe field selection and sorting
 */
export type RepaymentPlansField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'TITLE'
  | 'BANKACC_CODE'
  | 'BANKACC_TYPE'
  | 'BANKACCREF'
  | 'BEG_DATE'
  | 'END_DATE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'WRKDAYS'
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
  | 'ACTIVE'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WFSTATUS'
  | 'LINES'
  | 'DELLINELIST'
  | 'UPDATED'
  | 'EARLY_INTEREST'
  | 'LATE_INTEREST';

/**
 * Type-safe sort specification for RepaymentPlans queries
 */
export type RepaymentPlansSortSpec =
  | [RepaymentPlansField]
  | [RepaymentPlansField, 'asc' | 'desc']
  | [RepaymentPlansField[], 'asc' | 'desc']
  | [RepaymentPlansField[]];

/**
 * Type-safe query options for RepaymentPlans entities
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
export interface RepaymentPlansQueryOptions extends Omit<
  QueryOptions<RepaymentPlansField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: RepaymentPlansField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: RepaymentPlansSortSpec;
}

/**
 * Search criteria for RepaymentPlans entities
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
export interface RepaymentPlansSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  title?: StringFieldValue;
  bankaccCode?: StringFieldValue;
  bankaccType?: NumberFieldValue;
  bankaccref?: NumberFieldValue;
  begDate?: StringFieldValue;
  endDate?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  wrkdays?: NumberFieldValue;
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
  active?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  lines?: DateFieldValue;
  dellinelist?: StringFieldValue;
  updated?: NumberFieldValue;
  earlyInterest?: NumberFieldValue;
  lateInterest?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for RepaymentPlans entities
 */
export interface RepaymentPlansAnalytics {
  total: number;
  // Add RepaymentPlans-specific analytics fields
}
