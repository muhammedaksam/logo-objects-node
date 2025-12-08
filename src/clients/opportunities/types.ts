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
 * Interface for RSCollection[RS_OppHistoryXML]
 */
export interface RscollectionrsOpphistoryxml {
  Meta?: Meta;
  items?: RsOpphistoryxml[];
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
 * RsOpphistoryxml transaction line item
 *
 * Represents individual transaction records within a Opportunities collection.
 */
export interface RsOpphistoryxml extends BaseEntity {
  SLSOPPREF?: number;
  SALESMANREF?: number;
  RECDATE?: string;
  RECTIME?: number;
  STATUS?: number;
  EXPLANATION?: string;
  CREATEDBY?: number;
  CREADEDDATE?: string;
  CREATEDHOUR?: number;
  CREATEDMIN?: number;
  CREATEDSEC?: number;
  MODIFIEDBY?: number;
  MODIFIEDDATE?: string;
  MODIFIEDHOUR?: number;
  MODIFIEDMIN?: number;
  MODIFIEDSEC?: number;
}

/**
 * Opportunities entity interface based on swagger definition
 */
export interface Opportunities extends BaseEntity {
  OPPNO?: string;
  DESCRIPTION?: string;
  DATE?: string;
  EXPECDATE?: string;
  CLOSEDATE?: string;
  AUXILCODE?: string;
  AUTHCODE?: string;
  SALESMANREF?: number;
  SALESMANCODE?: string;
  CSTVNDREF?: number;
  CONTACTREF?: number;
  EXPECREV?: number;
  REVCURR?: number;
  REVRATE?: number;
  REVCAMOUNT?: number;
  SUCCPROB?: number;
  STAGE?: number;
  COMMENTS?: string;
  CAPIBLOCK_CREATEDBY?: number;
  CAPIBLOCK_CREADEDDATE?: string;
  CAPIBLOCK_CREATEDHOUR?: number;
  CAPIBLOCK_CREATEDMIN?: number;
  CAPIBLOCK_CREATEDSEC?: number;
  CAPIBLOCK_MODIFIEDBY?: number;
  CAPIBLOCK_MODIFIEDDATE?: string;
  CAPIBLOCK_MODIFIEDHOUR?: number;
  CAPIBLOCK_MODIFIEDMIN?: number;
  CAPIBLOCK_MODIFIEDSEC?: number;
  RECSTATUS?: number;
  REPORTRATE?: number;
  REPORTREV?: number;
  CNTNAME?: string;
  CNTMNAME?: string;
  CNTFNAME?: string;
  CSTCODE?: string;
  CSTTITLE?: string;
  STAGEDSC?: string;
  UPDATED?: number;
  FLDALS?: string;
  XBUFS?: string;
  HLOGICALREF?: number;
  HSLSOPPREF?: number;
  HSALESMANREF?: number;
  HRECDATE?: string;
  HRECTIME?: number;
  HSTATUS?: number;
  HEXPLANATION?: string;
  HCAPIBLOCK_CREATEDBY?: number;
  HCAPIBLOCK_CREADEDDATE?: string;
  HCAPIBLOCK_CREATEDHOUR?: number;
  HCAPIBLOCK_CREATEDMIN?: number;
  HCAPIBLOCK_CREATEDSEC?: number;
  HCAPIBLOCK_MODIFIEDBY?: number;
  HCAPIBLOCK_MODIFIEDDATE?: string;
  HCAPIBLOCK_MODIFIEDHOUR?: number;
  HCAPIBLOCK_MODIFIEDMIN?: number;
  HCAPIBLOCK_MODIFIEDSEC?: number;
  OH_LOGICALREF?: number;
  OH_SLSOPPREF?: number;
  OH_SALESMANREF?: number;
  OH_RECDATE?: string;
  OH_RECTIME?: number;
  OH_STATUS?: number;
  OH_EXPLANATION?: string;
  OH_CAPIBLOCK_CREATEDBY?: number;
  OH_CAPIBLOCK_CREADEDDA?: string;
  OH_CAPIBLOCK_CREATEDHO?: number;
  OH_CAPIBLOCK_CREATEDMI?: number;
  OH_CAPIBLOCK_CREATEDSE?: number;
  OH_CAPIBLOCK_MODIFIEDB?: number;
  OH_CAPIBLOCK_MODIFIEDD?: string;
  OH_CAPIBLOCK_MODIFIEDH?: number;
  OH_CAPIBLOCK_MODIFIEDM?: number;
  OH_CAPIBLOCK_MODIFIEDS?: number;
  ITEXT?: string;
  TEXTCHG?: number;
  OPPNOCHANGED?: number;
  DOCNRREF?: number;
  CUSTOMBRW?: number;
  HISTORYLIST?: RscollectionrsOpphistoryxml;
}

/**
 * Union type of all Opportunities field names for type-safe field selection and sorting
 */
export type OpportunitiesField =
  | 'INTERNAL_REFERENCE'
  | 'OPPNO'
  | 'DESCRIPTION'
  | 'DATE'
  | 'EXPECDATE'
  | 'CLOSEDATE'
  | 'AUXILCODE'
  | 'AUTHCODE'
  | 'SALESMANREF'
  | 'SALESMANCODE'
  | 'CSTVNDREF'
  | 'CONTACTREF'
  | 'EXPECREV'
  | 'REVCURR'
  | 'REVRATE'
  | 'REVCAMOUNT'
  | 'SUCCPROB'
  | 'STAGE'
  | 'COMMENTS'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'CAPIBLOCK_CREATEDBY'
  | 'CAPIBLOCK_CREADEDDATE'
  | 'CAPIBLOCK_CREATEDHOUR'
  | 'CAPIBLOCK_CREATEDMIN'
  | 'CAPIBLOCK_CREATEDSEC'
  | 'CAPIBLOCK_MODIFIEDBY'
  | 'CAPIBLOCK_MODIFIEDDATE'
  | 'CAPIBLOCK_MODIFIEDHOUR'
  | 'CAPIBLOCK_MODIFIEDMIN'
  | 'CAPIBLOCK_MODIFIEDSEC'
  | 'RECSTATUS'
  | 'TEXTINC'
  | 'REPORTRATE'
  | 'REPORTREV'
  | 'CNTNAME'
  | 'CNTMNAME'
  | 'CNTFNAME'
  | 'CSTCODE'
  | 'CSTTITLE'
  | 'STAGEDSC'
  | 'UPDATED'
  | 'FLDALS'
  | 'XBUFS'
  | 'HLOGICALREF'
  | 'HSLSOPPREF'
  | 'HSALESMANREF'
  | 'HRECDATE'
  | 'HRECTIME'
  | 'HSTATUS'
  | 'HEXPLANATION'
  | 'HCAPIBLOCK_CREATEDBY'
  | 'HCAPIBLOCK_CREADEDDATE'
  | 'HCAPIBLOCK_CREATEDHOUR'
  | 'HCAPIBLOCK_CREATEDMIN'
  | 'HCAPIBLOCK_CREATEDSEC'
  | 'HCAPIBLOCK_MODIFIEDBY'
  | 'HCAPIBLOCK_MODIFIEDDATE'
  | 'HCAPIBLOCK_MODIFIEDHOUR'
  | 'HCAPIBLOCK_MODIFIEDMIN'
  | 'HCAPIBLOCK_MODIFIEDSEC'
  | 'OH_LOGICALREF'
  | 'OH_SLSOPPREF'
  | 'OH_SALESMANREF'
  | 'OH_RECDATE'
  | 'OH_RECTIME'
  | 'OH_STATUS'
  | 'OH_EXPLANATION'
  | 'OH_CAPIBLOCK_CREATEDBY'
  | 'OH_CAPIBLOCK_CREADEDDA'
  | 'OH_CAPIBLOCK_CREATEDHO'
  | 'OH_CAPIBLOCK_CREATEDMI'
  | 'OH_CAPIBLOCK_CREATEDSE'
  | 'OH_CAPIBLOCK_MODIFIEDB'
  | 'OH_CAPIBLOCK_MODIFIEDD'
  | 'OH_CAPIBLOCK_MODIFIEDH'
  | 'OH_CAPIBLOCK_MODIFIEDM'
  | 'OH_CAPIBLOCK_MODIFIEDS'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'OPPNOCHANGED'
  | 'DOCNRREF'
  | 'CUSTOMBRW'
  | 'HISTORYLIST';

/**
 * Type-safe sort specification for Opportunities queries
 */
export type OpportunitiesSortSpec =
  | [OpportunitiesField]
  | [OpportunitiesField, 'asc' | 'desc']
  | [OpportunitiesField[], 'asc' | 'desc']
  | [OpportunitiesField[]];

/**
 * Type-safe query options for Opportunities entities
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
export interface OpportunitiesQueryOptions extends Omit<
  QueryOptions<OpportunitiesField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: OpportunitiesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: OpportunitiesSortSpec;
}

/**
 * Search criteria for Opportunities entities
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
export interface OpportunitiesSearchCriteria {
  internalReference?: NumberFieldValue;
  oppno?: StringFieldValue;
  description?: StringFieldValue;
  date?: StringFieldValue;
  expecdate?: StringFieldValue;
  closedate?: StringFieldValue;
  auxilcode?: StringFieldValue;
  authcode?: StringFieldValue;
  salesmanref?: NumberFieldValue;
  salesmancode?: StringFieldValue;
  cstvndref?: NumberFieldValue;
  contactref?: NumberFieldValue;
  expecrev?: NumberFieldValue;
  revcurr?: NumberFieldValue;
  revrate?: NumberFieldValue;
  revcamount?: NumberFieldValue;
  succprob?: NumberFieldValue;
  stage?: NumberFieldValue;
  comments?: StringFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  capiblockCreatedby?: NumberFieldValue;
  capiblockCreadeddate?: StringFieldValue;
  capiblockCreatedhour?: NumberFieldValue;
  capiblockCreatedmin?: NumberFieldValue;
  capiblockCreatedsec?: NumberFieldValue;
  capiblockModifiedby?: NumberFieldValue;
  capiblockModifieddate?: StringFieldValue;
  capiblockModifiedhour?: NumberFieldValue;
  capiblockModifiedmin?: NumberFieldValue;
  capiblockModifiedsec?: NumberFieldValue;
  recstatus?: NumberFieldValue;
  textinc?: NumberFieldValue;
  reportrate?: NumberFieldValue;
  reportrev?: NumberFieldValue;
  cntname?: StringFieldValue;
  cntmname?: StringFieldValue;
  cntfname?: StringFieldValue;
  cstcode?: StringFieldValue;
  csttitle?: StringFieldValue;
  stagedsc?: StringFieldValue;
  updated?: NumberFieldValue;
  fldals?: StringFieldValue;
  xbufs?: StringFieldValue;
  hlogicalref?: NumberFieldValue;
  hslsoppref?: NumberFieldValue;
  hsalesmanref?: NumberFieldValue;
  hrecdate?: StringFieldValue;
  hrectime?: NumberFieldValue;
  hstatus?: NumberFieldValue;
  hexplanation?: StringFieldValue;
  hcapiblockCreatedby?: NumberFieldValue;
  hcapiblockCreadeddate?: StringFieldValue;
  hcapiblockCreatedhour?: NumberFieldValue;
  hcapiblockCreatedmin?: NumberFieldValue;
  hcapiblockCreatedsec?: NumberFieldValue;
  hcapiblockModifiedby?: NumberFieldValue;
  hcapiblockModifieddate?: StringFieldValue;
  hcapiblockModifiedhour?: NumberFieldValue;
  hcapiblockModifiedmin?: NumberFieldValue;
  hcapiblockModifiedsec?: NumberFieldValue;
  ohLogicalref?: NumberFieldValue;
  ohSlsoppref?: NumberFieldValue;
  ohSalesmanref?: NumberFieldValue;
  ohRecdate?: StringFieldValue;
  ohRectime?: NumberFieldValue;
  ohStatus?: NumberFieldValue;
  ohExplanation?: StringFieldValue;
  ohCapiblockCreatedby?: NumberFieldValue;
  ohCapiblockCreadedda?: StringFieldValue;
  ohCapiblockCreatedho?: NumberFieldValue;
  ohCapiblockCreatedmi?: NumberFieldValue;
  ohCapiblockCreatedse?: NumberFieldValue;
  ohCapiblockModifiedb?: NumberFieldValue;
  ohCapiblockModifiedd?: StringFieldValue;
  ohCapiblockModifiedh?: NumberFieldValue;
  ohCapiblockModifiedm?: NumberFieldValue;
  ohCapiblockModifieds?: NumberFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  oppnochanged?: NumberFieldValue;
  docnrref?: NumberFieldValue;
  custombrw?: NumberFieldValue;
  historylist?: DateFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Opportunities entities
 */
export interface OpportunitiesAnalytics {
  total: number;
  // Add Opportunities-specific analytics fields
}
