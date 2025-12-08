import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_QCCSetLineXML]
 */
export interface RscollectionrsQccsetlinexml {
  Meta?: Meta;
  items?: RsQccsetlinexml[];
}

/**
 * Interface for RSCollection[RS_QCCSetValXML]
 */
export interface RscollectionrsQccsetvalxml {
  Meta?: Meta;
  items?: RsQccsetvalxml[];
}

/**
 * Interface for RSCollection[RS_QCCSetTrgXML]
 */
export interface RscollectionrsQccsettrgxml {
  Meta?: Meta;
  items?: RsQccsettrgxml[];
}

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
 * RsQccsetlinexml transaction line item
 *
 * Represents individual transaction records within a Qccriteriasets collection.
 */
export interface RsQccsetlinexml extends BaseEntity {
  CODE?: string;
  NAME?: string;
  SETREF?: number;
  QTYPE?: number;
  QUNIT?: string;
  TOOLCODE?: string;
  CONTROLLER?: number;
  INSPPOINT?: number;
  INSPFICHES1?: number;
  INSPFICHES2?: number;
  INSPFICHES3?: number;
  IMPORTANCE?: string;
  FREQUENCY?: number;
  COUNTER?: number;
  SAMPLESIZE?: number;
  NOMVAL?: number;
  MINVAL?: number;
  MAXVAL?: number;
  MINTOL?: number;
  MAXTOL?: number;
  EXPLINE?: string;
  CONFORMRATE?: number;
  LINENO?: number;
  IMPORTANCEVAL?: number;
  VAL_LIST?: RscollectionrsQccsetvalxml;
  TOOLREF?: number;
  DELLIST?: string;
  TARGETLIST?: RscollectionrsQccsettrgxml;
  TARGETDELLIST?: string;
  TEXTCHG?: number;
  ITEXT?: string;
  FLDALS?: string;
  TCODE?: string;
}

/**
 * RsQccsetvalxml transaction line item
 *
 * Represents individual transaction records within a Qccriteriasets collection.
 */
export interface RsQccsetvalxml extends BaseEntity {
  CODE?: string;
  NAME?: string;
  SETREF?: number;
  LINEREF?: number;
  TARGETFLAG?: number;
  LINENO?: number;
}

/**
 * RsQccsettrgxml transaction line item
 *
 * Represents individual transaction records within a Qccriteriasets collection.
 */
export interface RsQccsettrgxml extends BaseEntity {
  CODE?: string;
  NAME?: string;
  SETREF?: number;
  LINEREF?: number;
  TARGETFLAG?: number;
  LINENO?: number;
}

/**
 * Qccriteriasets entity interface based on swagger definition
 */
export interface Qccriteriasets extends BaseEntity {
  CODE?: string;
  NAME?: string;
  ITYPE?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  WFSTATUS?: number;
  LINELIST?: RscollectionrsQccsetlinexml;
  DELLINELIST?: string;
  TEXTCHG?: number;
  ITEXT?: string;
  FLDALS?: string;
  XBUFS?: string;
}

/**
 * Union type of all Qccriteriasets field names for type-safe field selection and sorting
 */
export type QccriteriasetsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'ITYPE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
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
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'TEXTINC'
  | 'WFSTATUS'
  | 'LINELIST'
  | 'DELLINELIST'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'FLDALS'
  | 'XBUFS';

/**
 * Type-safe sort specification for Qccriteriasets queries
 */
export type QccriteriasetsSortSpec =
  | [QccriteriasetsField]
  | [QccriteriasetsField, 'asc' | 'desc']
  | [QccriteriasetsField[], 'asc' | 'desc']
  | [QccriteriasetsField[]];

/**
 * Type-safe query options for Qccriteriasets entities
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
export interface QccriteriasetsQueryOptions extends Omit<
  QueryOptions<QccriteriasetsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: QccriteriasetsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: QccriteriasetsSortSpec;
}

/**
 * Search criteria for Qccriteriasets entities
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
export interface QccriteriasetsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  itype?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
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
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  textinc?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  linelist?: DateFieldValue;
  dellinelist?: StringFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;
  fldals?: StringFieldValue;
  xbufs?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Qccriteriasets entities
 */
export interface QccriteriasetsAnalytics {
  total: number;
  // Add Qccriteriasets-specific analytics fields
}
