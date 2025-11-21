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
 * Interface for RSCollection[RS_WFlowCardLnXML]
 */
export interface RscollectionrsWflowcardlnxml {
  Meta?: Meta;
  items?: RsWflowcardlnxml[];
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
 * RsWflowcardlnxml transaction line item
 *
 * Represents individual transaction records within a WorkflowDefinitions collection.
 */
export interface RsWflowcardlnxml extends BaseEntity {
  WFCARDREF?: number;
  LINENR?: number;
  LEVEL?: number;
  USERNR?: number;
  ROLEREF?: number;
  INFORM?: number;
  TASKTIMEAMNT?: number;
  TASKTIMEUNIT?: number;
  DELAYSTATUS?: number;
  SENDWARN?: number;
  WARNTYPE?: number;
  WARNUSERNR?: number;
  WARNROLEREF?: number;
  CONDITION?: string;
  TASKTYPE?: number;
  TASKDEF?: string;
  PROCESSTYPE?: number;
  ROLECODE?: string;
  ROLENAME?: string;
  WARNROLECODE?: string;
  WARNROLENAME?: string;
  ROLEUSERL?: string;
  WROLEUSERL?: string;
  PROCESSSTR?: string;
  REMINDER?: number;
  IMPORTANCE?: number;
  NOTIFICATION?: number;
  EMAIL?: number;
  SMS?: number;
  MSG_TEMP_REF?: number;
}

/**
 * WorkflowDefinitions entity interface based on swagger definition
 */
export interface WorkflowDefinitions extends BaseEntity {
  CODE?: string;
  NAME?: string;
  SPECODE?: string;
  CYPHCODE?: string;
  WORKPLACE?: number;
  ACTIONTYPE?: number;
  ACTIVE?: number;
  PRIORITY?: number;
  WFUSERNR?: number;
  WFROLEREF?: number;
  CONDITION?: string;
  BEGDATE?: string;
  ENDDATE?: string;
  CAPIBLOCK_CREATEDBY?: number;
  CAPIBLOK_CREADEDDATE?: string;
  CAPIBLOCK_CREATEDHOUR?: number;
  CAPIBLOCK_CREATEDMIN?: number;
  CAPIBLOCK_CREATEDSEC?: number;
  CAPIBLOCK_MODIFIEDBY?: number;
  CAPIBLOCK_MODIFIEDDATE?: string;
  CAPIBLOCK_MODIFIEDHOUR?: number;
  CAPIBLOCK_MODIFIEDMIN?: number;
  CAPIBLOCK_MODIFIEDSEC?: number;
  WFSTATUS?: number;
  TRANSACTIONS?: RscollectionrsWflowcardlnxml;
  DELLIST?: string;
  FLIST?: string;
  FDELLIST?: string;
  ROLECODE?: string;
  ROLENAME?: string;
  ROLEUSERL?: string;
  NEXTWFREF?: number;
  NEXTWFCODE?: string;
  STATUSGRPA?: number;
  STATUSGRPB?: number;
  STATUSGRPC?: number;
  STATUSGRPD?: number;
  STATUSGRPE?: number;
  STATUSGRPF?: number;
  CARD_TYPE?: number;
  MODULE?: number;
  PROC_TYPE?: number;
  MSG_TEMP_REF?: number;
}

/**
 * Union type of all WorkflowDefinitions field names for type-safe field selection and sorting
 */
export type WorkflowDefinitionsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'SPECODE'
  | 'CYPHCODE'
  | 'WORKPLACE'
  | 'ACTIONTYPE'
  | 'ACTIVE'
  | 'PRIORITY'
  | 'WFUSERNR'
  | 'WFROLEREF'
  | 'CONDITION'
  | 'BEGDATE'
  | 'ENDDATE'
  | 'CAPIBLOCK_CREATEDBY'
  | 'CAPIBLOK_CREADEDDATE'
  | 'CAPIBLOCK_CREATEDHOUR'
  | 'CAPIBLOCK_CREATEDMIN'
  | 'CAPIBLOCK_CREATEDSEC'
  | 'CAPIBLOCK_MODIFIEDBY'
  | 'CAPIBLOCK_MODIFIEDDATE'
  | 'CAPIBLOCK_MODIFIEDHOUR'
  | 'CAPIBLOCK_MODIFIEDMIN'
  | 'CAPIBLOCK_MODIFIEDSEC'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'TEXTINC'
  | 'WFSTATUS'
  | 'TRANSACTIONS'
  | 'DELLIST'
  | 'FLIST'
  | 'FDELLIST'
  | 'ROLECODE'
  | 'ROLENAME'
  | 'ROLEUSERL'
  | 'NEXTWFREF'
  | 'NEXTWFCODE'
  | 'STATUSGRPA'
  | 'STATUSGRPB'
  | 'STATUSGRPC'
  | 'STATUSGRPD'
  | 'STATUSGRPE'
  | 'STATUSGRPF'
  | 'CARD_TYPE'
  | 'MODULE'
  | 'PROC_TYPE'
  | 'MSG_TEMP_REF';

/**
 * Type-safe sort specification for WorkflowDefinitions queries
 */
export type WorkflowDefinitionsSortSpec =
  | [WorkflowDefinitionsField]
  | [WorkflowDefinitionsField, 'asc' | 'desc']
  | [WorkflowDefinitionsField[], 'asc' | 'desc']
  | [WorkflowDefinitionsField[]];

/**
 * Type-safe query options for WorkflowDefinitions entities
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
export interface WorkflowDefinitionsQueryOptions
  extends Omit<QueryOptions<WorkflowDefinitionsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: WorkflowDefinitionsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: WorkflowDefinitionsSortSpec;
}

/**
 * Search criteria for WorkflowDefinitions entities
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
export interface WorkflowDefinitionsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  specode?: StringFieldValue;
  cyphcode?: StringFieldValue;
  workplace?: NumberFieldValue;
  actiontype?: NumberFieldValue;
  active?: NumberFieldValue;
  priority?: NumberFieldValue;
  wfusernr?: NumberFieldValue;
  wfroleref?: NumberFieldValue;
  condition?: StringFieldValue;
  begdate?: StringFieldValue;
  enddate?: StringFieldValue;
  capiblockCreatedby?: NumberFieldValue;
  capiblokCreadeddate?: StringFieldValue;
  capiblockCreatedhour?: NumberFieldValue;
  capiblockCreatedmin?: NumberFieldValue;
  capiblockCreatedsec?: NumberFieldValue;
  capiblockModifiedby?: NumberFieldValue;
  capiblockModifieddate?: StringFieldValue;
  capiblockModifiedhour?: NumberFieldValue;
  capiblockModifiedmin?: NumberFieldValue;
  capiblockModifiedsec?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  textinc?: NumberFieldValue;
  wfstatus?: NumberFieldValue;
  transactions?: DateFieldValue;
  dellist?: StringFieldValue;
  flist?: StringFieldValue;
  fdellist?: StringFieldValue;
  rolecode?: StringFieldValue;
  rolename?: StringFieldValue;
  roleuserl?: StringFieldValue;
  nextwfref?: NumberFieldValue;
  nextwfcode?: StringFieldValue;
  statusgrpa?: NumberFieldValue;
  statusgrpb?: NumberFieldValue;
  statusgrpc?: NumberFieldValue;
  statusgrpd?: NumberFieldValue;
  statusgrpe?: NumberFieldValue;
  statusgrpf?: NumberFieldValue;
  cardType?: NumberFieldValue;
  module?: NumberFieldValue;
  procType?: NumberFieldValue;
  msgTempRef?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for WorkflowDefinitions entities
 */
export interface WorkflowDefinitionsAnalytics {
  total: number;
  // Add WorkflowDefinitions-specific analytics fields
}
