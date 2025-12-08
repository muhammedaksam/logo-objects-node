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
 * Interface for RSCollection[RS_ExImCreditLineXM]
 */
export interface RscollectionrsEximcreditlinexm {
  Meta?: Meta;
  items?: RsEximcreditlinexm[];
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
 * RsEximcreditlinexm transaction line item
 *
 * Represents individual transaction records within a ExportCredits collection.
 */
export interface RsEximcreditlinexm extends BaseEntity {
  EXCREDIT_REF?: number;
  GTIPCODE?: string;
  UNITSETREF?: number;
  UOM_REF?: number;
  AMOUNT?: number;
  TRCURR?: number;
  TRTOTAL?: number;
  TRRATE?: number;
  REPORT_RATE?: number;
  LINENO?: number;
  UNIT_SET_CODE?: string;
  UNIT_CODE?: string;
}

/**
 * ExportCredits entity interface based on swagger definition
 */
export interface ExportCredits extends BaseEntity {
  CODE?: string;
  NAME?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  CREDIT_TYPE?: number;
  BEGIN_DATE?: string;
  END_DATE?: string;
  TR_CURRENCY?: number;
  TR_TOTAL?: number;
  TR_RATE?: number;
  REPORT_RATE?: number;
  STATUS?: number;
  INTEREST_RATE?: number;
  INTEREST_TOTAL?: number;
  BANK_REF?: number;
  BANK_ACCOUNT?: string;
  BANKACCREF?: number;
  LINES?: RscollectionrsEximcreditlinexm;
  DELLIST?: string;
}

/**
 * Union type of all ExportCredits field names for type-safe field selection and sorting
 */
export type ExportCreditsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'CREDIT_TYPE'
  | 'BEGIN_DATE'
  | 'END_DATE'
  | 'TR_CURRENCY'
  | 'TR_TOTAL'
  | 'TR_RATE'
  | 'REPORT_RATE'
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
  | 'STATUS'
  | 'INTEREST_RATE'
  | 'INTEREST_TOTAL'
  | 'TEXTINC'
  | 'BANK_REF'
  | 'BANK_ACCOUNT'
  | 'BANKACCREF'
  | 'LINES'
  | 'DELLIST';

/**
 * Type-safe sort specification for ExportCredits queries
 */
export type ExportCreditsSortSpec =
  | [ExportCreditsField]
  | [ExportCreditsField, 'asc' | 'desc']
  | [ExportCreditsField[], 'asc' | 'desc']
  | [ExportCreditsField[]];

/**
 * Type-safe query options for ExportCredits entities
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
export interface ExportCreditsQueryOptions extends Omit<
  QueryOptions<ExportCreditsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ExportCreditsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ExportCreditsSortSpec;
}

/**
 * Search criteria for ExportCredits entities
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
export interface ExportCreditsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  creditType?: NumberFieldValue;
  beginDate?: StringFieldValue;
  endDate?: StringFieldValue;
  trCurrency?: NumberFieldValue;
  trTotal?: NumberFieldValue;
  trRate?: NumberFieldValue;
  reportRate?: NumberFieldValue;
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
  status?: NumberFieldValue;
  interestRate?: NumberFieldValue;
  interestTotal?: NumberFieldValue;
  textinc?: NumberFieldValue;
  bankRef?: NumberFieldValue;
  bankAccount?: StringFieldValue;
  bankaccref?: NumberFieldValue;
  lines?: DateFieldValue;
  dellist?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ExportCredits entities
 */
export interface ExportCreditsAnalytics {
  total: number;
  // Add ExportCredits-specific analytics fields
}
