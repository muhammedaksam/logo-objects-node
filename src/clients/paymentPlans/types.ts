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
 * Interface for RSCollection[RS_PaymTermsXML]
 */
export interface RscollectionrsPaymtermsxml {
  Meta?: Meta;
  items?: RsPaymtermsxml[];
}

/**
 * Interface for RSCollection[RS_DiscPayLnXML]
 */
export interface RscollectionrsDiscpaylnxml {
  Meta?: Meta;
  items?: RsDiscpaylnxml[];
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
 * RsPaymtermsxml transaction line item
 *
 * Represents individual transaction records within a PaymentPlans collection.
 */
export interface RsPaymtermsxml extends BaseEntity {
  PAYPLANREF?: number;
  LINENO?: number;
  AFTER_DAYS?: number;
  FORMULA?: string;
  CONDITION?: string;
  DAY?: string;
  MOUNTH?: string;
  YEAR?: string;
  ROUND_BASE?: number;
  ABSOLUTE_DATE?: string;
  DATE_SELECTOR?: number;
  DISC_RATE?: number;
  DISCLIST?: RscollectionrsDiscpaylnxml;
  DISCDELLIST?: string;
  PAYMENT_TYPE?: number;
  BANKACCREF?: number;
  REPAYDEFREF?: number;
  BANKACC_CODE?: string;
  REPAYPLAN_CODE?: string;
  TR_CURR?: number;
  GLOBAL_CODE?: string;
}

/**
 * RsDiscpaylnxml transaction line item
 *
 * Represents individual transaction records within a PaymentPlans collection.
 */
export interface RsDiscpaylnxml extends BaseEntity {
  PAYPLANREF?: number;
  PAYLINEREF?: number;
  DAY?: string;
  DISCRATE?: number;
  WFSTATUS?: number;
}

/**
 * PaymentPlans entity interface based on swagger definition
 */
export interface PaymentPlans extends BaseEntity {
  CODE?: string;
  DESCRIPTION?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  EARLY_INTRATE?: number;
  LATE_INTRATE?: number;
  COUNTER?: number;
  WORK_DAYS?: number;
  PAYMENT_TERMS?: RscollectionrsPaymtermsxml;
  XBUFS?: string;
  PP_GROUP_CODE?: string;
  BANKACCREF?: number;
  CRDCARD_CODE?: string;
  PP_GROUP_REF?: number;
  GLOBAL_CODE?: string;
  SEPERATE_DAYS?: number;
  LAST_DAY_MONTH?: number;
}

/**
 * Union type of all PaymentPlans field names for type-safe field selection and sorting
 */
export type PaymentPlansField =
  | 'INTERNAL_REFERENCE'
  | 'RECORD_STATUS'
  | 'CODE'
  | 'DESCRIPTION'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'EARLY_INTRATE'
  | 'LATE_INTRATE'
  | 'COUNTER'
  | 'WORK_DAYS'
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
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'PAYMENT_TERMS'
  | 'XBUFS'
  | 'XML_ATTRIBUTE'
  | 'PP_GROUP_CODE'
  | 'BANKACCREF'
  | 'CRDCARD_CODE'
  | 'PP_GROUP_REF'
  | 'GLOBAL_CODE'
  | 'SEPERATE_DAYS'
  | 'LAST_DAY_MONTH';

/**
 * Type-safe sort specification for PaymentPlans queries
 */
export type PaymentPlansSortSpec =
  | [PaymentPlansField]
  | [PaymentPlansField, 'asc' | 'desc']
  | [PaymentPlansField[], 'asc' | 'desc']
  | [PaymentPlansField[]];

/**
 * Type-safe query options for PaymentPlans entities
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
export interface PaymentPlansQueryOptions extends Omit<
  QueryOptions<PaymentPlansField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: PaymentPlansField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: PaymentPlansSortSpec;
}

/**
 * Search criteria for PaymentPlans entities
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
export interface PaymentPlansSearchCriteria {
  internalReference?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  code?: StringFieldValue;
  description?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  earlyIntrate?: NumberFieldValue;
  lateIntrate?: NumberFieldValue;
  counter?: NumberFieldValue;
  workDays?: NumberFieldValue;
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
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  paymentTerms?: DateFieldValue;
  xbufs?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  ppGroupCode?: StringFieldValue;
  bankaccref?: NumberFieldValue;
  crdcardCode?: StringFieldValue;
  ppGroupRef?: NumberFieldValue;
  globalCode?: StringFieldValue;
  seperateDays?: NumberFieldValue;
  lastDayMonth?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for PaymentPlans entities
 */
export interface PaymentPlansAnalytics {
  total: number;
  // Add PaymentPlans-specific analytics fields
}
