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
 * Interface for RSCollection[RS_DIIBLineXML]
 */
export interface RscollectionrsDiiblinexml {
  Meta?: Meta;
  items?: RsDiiblinexml[];
}

/**
 * Interface for RSCollection[RS_DIIBBOMLineXML]
 */
export interface RscollectionrsDiibbomlinexml {
  Meta?: Meta;
  items?: RsDiibbomlinexml[];
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
 * RsDiiblinexml transaction line item
 *
 * Represents individual transaction records within a InwardProcessingPermits collection.
 */
export interface RsDiiblinexml extends BaseEntity {
  DIIBFICHE_ORGREF?: number;
  LINETYPE?: number;
  LINENO?: number;
  GTIPCODE?: string;
  UOMREF?: number;
  USREF?: number;
  AMOUNT?: number;
  TRNET?: number;
  TRCURR?: number;
  USAGEAMOUNT?: number;
  LINEEXP?: string;
  AUXIL_CODE?: string;
  BOM_LINES?: RscollectionrsDiibbomlinexml;
  BOMDELLIST?: string;
  GTIPCODEREF?: number;
  GTIPDESC?: string;
  USETCODE?: string;
  UNITCODE?: string;
  CUROP?: number;
  XBUFS?: string;
}

/**
 * RsDiibbomlinexml transaction line item
 *
 * Represents individual transaction records within a InwardProcessingPermits collection.
 */
export interface RsDiibbomlinexml extends BaseEntity {
  DIIBFICHEREF?: number;
  EXPLINE_ORGREF?: number;
  IMPLINE_ORGREF?: number;
  LINENO?: number;
  AMOUNT?: number;
  SCRAPPER?: number;
  GTIPCODE?: string;
  GTIPDESC?: string;
  USETCODE?: string;
  UNITCODE?: string;
}

/**
 * InwardProcessingPermits entity interface based on swagger definition
 */
export interface InwardProcessingPermits extends BaseEntity {
  FICHENO?: string;
  BEGDATE?: string;
  ENDDATE?: string;
  DOCODE?: string;
  STATUS?: number;
  AUXIL_CODE?: string;
  CYPHCODE?: string;
  TRCURR?: number;
  CANCELLED?: number;
  PRINTCNT?: number;
  PRINT_DATE?: string;
  IMPORT_LINES?: RscollectionrsDiiblinexml;
  IMPDELLIST?: string;
  EXPORT_LINES?: RscollectionrsDiiblinexml;
  EXPDELLIST?: string;
  UPDATED?: number;
  IMLNCOUNT?: number;
  EXLNCOUNT?: number;
  CUROP?: number;
  DOCNRREF?: number;
  XBUFS?: string;
  DOCALS?: string;
  WARNACTIVE?: number;
  TEXTCHG?: number;
  ITEXT?: string;
  FCNOCHANGED?: number;
}

/**
 * Union type of all InwardProcessingPermits field names for type-safe field selection and sorting
 */
export type InwardProcessingPermitsField =
  | 'INTERNAL_REFERENCE'
  | 'FICHENO'
  | 'BEGDATE'
  | 'ENDDATE'
  | 'DOCODE'
  | 'STATUS'
  | 'AUXIL_CODE'
  | 'CYPHCODE'
  | 'TRCURR'
  | 'CANCELLED'
  | 'PRINTCNT'
  | 'PRINT_DATE'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'TEXTINC'
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
  | 'IMPORT_LINES'
  | 'IMPDELLIST'
  | 'EXPORT_LINES'
  | 'EXPDELLIST'
  | 'UPDATED'
  | 'IMLNCOUNT'
  | 'EXLNCOUNT'
  | 'CUROP'
  | 'DOCNRREF'
  | 'XBUFS'
  | 'DOCALS'
  | 'WARNACTIVE'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'FCNOCHANGED';

/**
 * Type-safe sort specification for InwardProcessingPermits queries
 */
export type InwardProcessingPermitsSortSpec =
  | [InwardProcessingPermitsField]
  | [InwardProcessingPermitsField, 'asc' | 'desc']
  | [InwardProcessingPermitsField[], 'asc' | 'desc']
  | [InwardProcessingPermitsField[]];

/**
 * Type-safe query options for InwardProcessingPermits entities
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
export interface InwardProcessingPermitsQueryOptions extends Omit<
  QueryOptions<InwardProcessingPermitsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: InwardProcessingPermitsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: InwardProcessingPermitsSortSpec;
}

/**
 * Search criteria for InwardProcessingPermits entities
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
export interface InwardProcessingPermitsSearchCriteria {
  internalReference?: NumberFieldValue;
  ficheno?: StringFieldValue;
  begdate?: StringFieldValue;
  enddate?: StringFieldValue;
  docode?: StringFieldValue;
  status?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  cyphcode?: StringFieldValue;
  trcurr?: NumberFieldValue;
  cancelled?: NumberFieldValue;
  printcnt?: NumberFieldValue;
  printDate?: StringFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  textinc?: NumberFieldValue;
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
  importLines?: DateFieldValue;
  impdellist?: StringFieldValue;
  exportLines?: DateFieldValue;
  expdellist?: StringFieldValue;
  updated?: NumberFieldValue;
  imlncount?: NumberFieldValue;
  exlncount?: NumberFieldValue;
  curop?: NumberFieldValue;
  docnrref?: NumberFieldValue;
  xbufs?: StringFieldValue;
  docals?: StringFieldValue;
  warnactive?: NumberFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;
  fcnochanged?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for InwardProcessingPermits entities
 */
export interface InwardProcessingPermitsAnalytics {
  total: number;
  // Add InwardProcessingPermits-specific analytics fields
}
