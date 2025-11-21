import { BaseEntity, QueryOptions } from '../../types';
import { AllFieldValues } from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for PT_PrdItmClsLines
 */
export interface PtPrditmclslines {
  Meta?: Meta;
  Item?: RscollectionptPrditmclsline;
  Count?: number;
}

/**
 * Interface for RSCollection[PT_PrdItmClsLine]
 */
export interface RscollectionptPrditmclsline {
  Meta?: Meta;
  items?: PtPrditmclsline[];
}

/**
 * Interface for PT_PrdItmClsLine
 */
export interface PtPrditmclsline {
  Meta?: Meta;
  ItemRef?: number;
  amount?: number;
  variantRef?: number;
}

/**
 * Interface for KeyValueParameter
 */
export interface KeyValueParameter {
  Name?: string;
  Value?: Object;
}

/**
 * Interface for PT_FastRealizeSlipRefLists
 */
export interface PtFastrealizeslipreflists {
  Meta?: Meta;
  UsageSlips?: PtFastrsliplists;
  WHTransSlips?: PtFastrsliplists;
  InputfromProdSlips?: PtFastrsliplists;
  ScarpSlips?: PtFastrsliplists;
}

/**
 * Interface for PT_FastRSlipLists
 */
export interface PtFastrsliplists {
  Meta?: Meta;
  Item?: RscollectionptFastrsliplist;
  Count?: number;
}

/**
 * Interface for RSCollection[PT_FastRSlipList]
 */
export interface RscollectionptFastrsliplist {
  Meta?: Meta;
  items?: PtFastrsliplist[];
}

/**
 * Interface for PT_FastRSlipList
 */
export interface PtFastrsliplist {
  Meta?: Meta;
  lref?: number;
}

/**
 * Interface for PT_PrdDispLines
 */
export interface PtPrddisplines {
  Meta?: Meta;
  Item?: RscollectionptPrddispline;
  Count?: number;
}

/**
 * Interface for RSCollection[PT_PrdDispLine]
 */
export interface RscollectionptPrddispline {
  Meta?: Meta;
  items?: PtPrddispline[];
}

/**
 * Interface for PT_PrdDispLine
 */
export interface PtPrddispline {
  Meta?: Meta;
  OpRef?: number;
  WorkStRef?: number;
  BOMRef?: number;
  RevRef?: number;
}

/**
 * Interface for PT_WorkOrdLists
 */
export interface PtWorkordlists {
  Meta?: Meta;
  Item?: RscollectionptLreflist;
  Count?: number;
}

/**
 * Interface for RSCollection[PT_LRefList]
 */
export interface RscollectionptLreflist {
  Meta?: Meta;
  items?: PtLreflist[];
}

/**
 * Interface for PT_LRefList
 */
export interface PtLreflist {
  Meta?: Meta;
  lref?: number;
}

/**
 * Interface for PT_ProdPlnRltnLists
 */
export interface PtProdplnrltnlists {
  Meta?: Meta;
  Item?: RscollectionptProdplnrltnlist;
  Count?: number;
}

/**
 * Interface for RSCollection[PT_ProdPlnRltnList]
 */
export interface RscollectionptProdplnrltnlist {
  Meta?: Meta;
  items?: PtProdplnrltnlist[];
}

/**
 * Interface for PT_ProdPlnRltnList
 */
export interface PtProdplnrltnlist {
  Meta?: Meta;
  prodOrdRef?: number;
  ficheNo?: string;
  date?: string;
  plnBegDate?: string;
  plnBegTime?: string;
  plnEndDate?: string;
  plnEndTime?: string;
  ItemRef?: number;
  itemCode?: string;
  itemName?: string;
  uomRef?: number;
  RevRef?: number;
  uSetRef?: number;
  plnAmnt?: number;
  actAmnt?: number;
  levelIdx?: number;
  ficheType?: number;
  headCode?: string;
  headName?: string;
  sourceIndex?: number;
  Department?: number;
  FactoryNr?: number;
  cliCode?: string;
  cliName?: string;
  payDefRef?: number;
  lineAmnt?: number;
  lineRef?: number;
  ficheRef?: number;
  orflnDueD?: string;
  lineUnit?: string;
  BOMRef?: number;
}

/**
 * Interface for PT_QuickProdSlipRefLists
 */
export interface PtQuickprodslipreflists {
  Meta?: Meta;
  QProdSlips?: PtReflists;
  UsageSlips?: PtReflists;
  WHTransSlips?: PtReflists;
  InputfromProdSlips?: PtReflists;
  ScarpSlips?: PtReflists;
}

/**
 * Interface for PT_RefLists
 */
export interface PtReflists {
  Meta?: Meta;
  Item?: RscollectionptLreflist;
  Count?: number;
}

/**
 * Interface for PT_RealizedSlips
 */
export interface PtRealizedslips {
  Meta?: Meta;
  Item?: RscollectionptRealizedslip;
  Count?: number;
}

/**
 * Interface for RSCollection[PT_RealizedSlip]
 */
export interface RscollectionptRealizedslip {
  Meta?: Meta;
  items?: PtRealizedslip[];
}

/**
 * Interface for PT_RealizedSlip
 */
export interface PtRealizedslip {
  Meta?: Meta;
  fcType?: number;
  fcDate?: string;
  lineNr?: number;
  lineType?: number;
  itemCode?: string;
  vrntCode?: string;
  amount?: number;
  uomCode?: string;
  usCode?: string;
  inWh?: number;
  outWh?: number;
  inDiv?: number;
  outDiv?: number;
  poLineRef?: number;
  srcPoLnRef?: number;
  destPoLnRef?: number;
}

/**
 * Interface for PT_ProdParams
 */
export interface PtProdparams {
  Meta?: Meta;
  Item?: RscollectionptProdparam;
  Count?: number;
}

/**
 * Interface for RSCollection[PT_ProdParam]
 */
export interface RscollectionptProdparam {
  Meta?: Meta;
  items?: PtProdparam[];
}

/**
 * Interface for PT_ProdParam
 */
export interface PtProdparam {
  Meta?: Meta;
  paramCode?: string;
  paramRef?: number;
  Value?: number;
}

/**
 * Interface for PT_MeetTypeList
 */
export interface PtMeettypelist {
  Meta?: Meta;
  purchase?: boolean;
  production?: boolean;
  invTrans?: boolean;
  stockMeet?: boolean;
  demandMeetProposal?: boolean;
}

/**
 * Productions entity interface based on swagger definition
 */
export interface Productions extends BaseEntity {}

/**
 * Union type of all Productions field names for type-safe field selection and sorting
 */
export type ProductionsField =
  | 'INTERNAL_REFERENCE'
  | 'RECORD_STATUS'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'XML_ATTRIBUTE'
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
  | 'IMAGEINC';

/**
 * Type-safe sort specification for Productions queries
 */
export type ProductionsSortSpec =
  | [ProductionsField]
  | [ProductionsField, 'asc' | 'desc']
  | [ProductionsField[], 'asc' | 'desc']
  | [ProductionsField[]];

/**
 * Type-safe query options for Productions entities
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
export interface ProductionsQueryOptions
  extends Omit<QueryOptions<ProductionsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ProductionsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ProductionsSortSpec;
}

/**
 * Search criteria for Productions entities
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
export interface ProductionsSearchCriteria {
  // No specific fields defined - use buildQuery() method for custom queries

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Productions entities
 */
export interface ProductionsAnalytics {
  total: number;
  // Add Productions-specific analytics fields
}
