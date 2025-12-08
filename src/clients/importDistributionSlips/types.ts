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
 * Interface for RSCollection[RS_ExImDistLnXML]
 */
export interface RscollectionrsEximdistlnxml {
  Meta?: Meta;
  items?: RsEximdistlnxml[];
}

/**
 * Interface for RSCollection[RS_ExImDistPegLnXML]
 */
export interface RscollectionrsEximdistpeglnxml {
  Meta?: Meta;
  items?: RsEximdistpeglnxml[];
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
 * RsEximdistlnxml transaction line item
 *
 * Represents individual transaction records within a ImportDistributionSlips collection.
 */
export interface RsEximdistlnxml extends BaseEntity {
  SRVREF?: number;
  DATE?: string;
  FTIME?: number;
  SOURCEINDEX?: number;
  EXIMINFOREF?: number;
  EXIMDISTFCREF?: number;
  PROCESSNR?: number;
  SRVTRANSREF?: number;
  LINENR?: number;
  DISTTOTAL?: number;
  SRVACCREF?: number;
  SRVCENTERREF?: number;
  WFSTATUS?: number;
  SRVTOTAL?: number;
  DISTEDTOTAL?: number;
  SRVCODE?: string;
  SRCNAME?: string;
  SRVDISTTYPE?: number;
  FICHENO?: string;
  PEG_LINES?: RscollectionrsEximdistpeglnxml;
  PEGDELLIST?: string;
  FICHETYPE?: number;
  SRVINVLINENR?: number;
}

/**
 * RsEximdistpeglnxml transaction line item
 *
 * Represents individual transaction records within a ImportDistributionSlips collection.
 */
export interface RsEximdistpeglnxml extends BaseEntity {
  EXIMINFOREF?: number;
  EXIMDISTFCREF?: number;
  EXIMDISTLNREF?: number;
  PROCESSNR?: number;
  SRVTRANSREF?: number;
  STTRANSREF?: number;
  LINENR?: number;
  ITEMREF?: number;
  TOTALAMNT?: number;
  UNITPRICE?: number;
  ADDEXPENSE?: number;
  ISDISTRIBUTED?: number;
  STACCREF?: number;
  STCENTERREF?: number;
  WFSTATUS?: number;
  FICHENO?: string;
  ITEMCODE?: string;
  ITEMNAME?: string;
  ITEMMAINUNITE?: string;
  IMPPRICE?: number;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  ADDRPEXPENSE?: number;
  DISTTOTAL?: number;
  INVOICELNNO?: number;
}

/**
 * ImportDistributionSlips entity interface based on swagger definition
 */
export interface ImportDistributionSlips extends BaseEntity {
  FICHENO?: string;
  DATE?: string;
  FTIME?: number;
  DOCODE?: string;
  SPECODE?: string;
  CYPHCODE?: string;
  SOURCEINDEX?: number;
  FACTORYNR?: number;
  BRANCH?: number;
  DEPARTMENT?: number;
  EXIMINFOREF?: number;
  PROCESSNR?: number;
  ACCOUNTED?: number;
  ACCFICHEREF?: number;
  ACCOUNTEDCNT?: number;
  PRINT_COUNTER?: number;
  PRINT_DATE?: string;
  WFSTATUS?: number;
  EXIMINFO_FILECODE?: string;
  EXIMINFO_FILENAME?: string;
  EXIMINFOINVREF?: number;
  TRANSACTIONS?: RscollectionrsEximdistlnxml;
  DELLIST?: string;
  DOCALS?: string;
  XBUFS?: string;
  DOCNRREF?: number;
  LINECNT?: number;
  TEXTCHG?: number;
  ITEXT?: string;
  FCNOCHANGED?: number;
  CURREDLNSRVREF?: number;
  CURREDLNPEGLIST?: string;
  EXIM_FILELINENR?: number;
  APPROVE?: number;
  APPROVE_DATE?: string;
  ACC_FICHE_SITEID?: number;
  EISRVDSTTYP?: number;
  CANCEL_AUTO_GL_PROC?: number;
}

/**
 * Union type of all ImportDistributionSlips field names for type-safe field selection and sorting
 */
export type ImportDistributionSlipsField =
  | 'INTERNAL_REFERENCE'
  | 'FICHENO'
  | 'DATE'
  | 'FTIME'
  | 'DOCODE'
  | 'SPECODE'
  | 'CYPHCODE'
  | 'SOURCEINDEX'
  | 'FACTORYNR'
  | 'BRANCH'
  | 'DEPARTMENT'
  | 'EXIMINFOREF'
  | 'PROCESSNR'
  | 'ACCOUNTED'
  | 'ACCFICHEREF'
  | 'ACCOUNTEDCNT'
  | 'PRINT_COUNTER'
  | 'PRINT_DATE'
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
  | 'TEXTINC'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WFSTATUS'
  | 'EXIMINFO_FILECODE'
  | 'EXIMINFO_FILENAME'
  | 'EXIMINFOINVREF'
  | 'TRANSACTIONS'
  | 'DELLIST'
  | 'DOCALS'
  | 'XBUFS'
  | 'DOCNRREF'
  | 'LINECNT'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'FCNOCHANGED'
  | 'CURREDLNSRVREF'
  | 'CURREDLNPEGLIST'
  | 'EXIM_FILELINENR'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'ACC_FICHE_SITEID'
  | 'EISRVDSTTYP'
  | 'CANCEL_AUTO_GL_PROC';

/**
 * Type-safe sort specification for ImportDistributionSlips queries
 */
export type ImportDistributionSlipsSortSpec =
  | [ImportDistributionSlipsField]
  | [ImportDistributionSlipsField, 'asc' | 'desc']
  | [ImportDistributionSlipsField[], 'asc' | 'desc']
  | [ImportDistributionSlipsField[]];

/**
 * Type-safe query options for ImportDistributionSlips entities
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
export interface ImportDistributionSlipsQueryOptions extends Omit<
  QueryOptions<ImportDistributionSlipsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ImportDistributionSlipsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ImportDistributionSlipsSortSpec;
}

/**
 * Search criteria for ImportDistributionSlips entities
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
export interface ImportDistributionSlipsSearchCriteria {
  internalReference?: NumberFieldValue;
  ficheno?: StringFieldValue;
  date?: StringFieldValue;
  ftime?: NumberFieldValue;
  docode?: StringFieldValue;
  specode?: StringFieldValue;
  cyphcode?: StringFieldValue;
  sourceindex?: NumberFieldValue;
  factorynr?: NumberFieldValue;
  branch?: NumberFieldValue;
  department?: NumberFieldValue;
  eximinforef?: NumberFieldValue;
  processnr?: NumberFieldValue;
  accounted?: NumberFieldValue;
  accficheref?: NumberFieldValue;
  accountedcnt?: NumberFieldValue;
  printCounter?: NumberFieldValue;
  printDate?: StringFieldValue;
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
  textinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  eximinfoFilecode?: StringFieldValue;
  eximinfoFilename?: StringFieldValue;
  eximinfoinvref?: NumberFieldValue;
  transactions?: DateFieldValue;
  dellist?: StringFieldValue;
  docals?: StringFieldValue;
  xbufs?: StringFieldValue;
  docnrref?: NumberFieldValue;
  linecnt?: NumberFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;
  fcnochanged?: NumberFieldValue;
  curredlnsrvref?: NumberFieldValue;
  curredlnpeglist?: StringFieldValue;
  eximFilelinenr?: NumberFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  accFicheSiteid?: NumberFieldValue;
  eisrvdsttyp?: NumberFieldValue;
  cancelAutoGlProc?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ImportDistributionSlips entities
 */
export interface ImportDistributionSlipsAnalytics {
  total: number;
  // Add ImportDistributionSlips-specific analytics fields
}
