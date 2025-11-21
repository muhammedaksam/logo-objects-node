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
 * BomStandardCosts entity interface based on swagger definition
 */
export interface BomStandardCosts extends BaseEntity {
  FACTORYNR?: number;
  PERIODREF?: number;
  STOCKREF?: number;
  BOMREF?: number;
  BOMREVREF?: number;
  REPORTRATE?: number;
  CRTYPE?: number;
  TRCURRDATE?: number;
  AMOUNT?: number;
  UOMREF?: number;
  UNIT_CODE?: string;
  STDMTRCOSTLOCAL?: number;
  STDMTRCOSTTRCURR?: number;
  STDMTRCOSTREPCURR?: number;
  STDLBRCOSTLOCAL?: number;
  STDLBRCOSTTRCURR?: number;
  STDLBRCOSTREPCURR?: number;
  STDWSCOSTLOCAL?: number;
  STDWSCOSTTRCURR?: number;
  STDWSCOSTREPCURR?: number;
  STDOVHDCOSTLOCAL?: number;
  STDOVHDCOSTTRCURR?: number;
  STDOVHDCOSTREPCURR?: number;
  OVHDCOSTFORMULA?: string;
  OVHDCOSTREPFORMULA?: string;
  STDUNITCOSTLOCAL?: number;
  STDUNITCOSTTRCURR?: number;
  STDUNITCOSTREPCURR?: number;
  PERIODCODE?: string;
  PERIODNAME?: string;
  ITEMCODE?: string;
  ITEMNAME?: string;
  BOMCODE?: string;
  BOMNAME?: string;
  BOMTYPE?: number;
  REVCODE?: string;
  REVNAME?: string;
  DELLINE?: number;
  STDOVHDCOSTLOCAL2?: number;
  STDOVHDCOSTLOCAL3?: number;
  STDOVHDCOSTLOCAL4?: number;
  STDOVHDCOSTLOCAL5?: number;
  STDOVHDCOSTLOCAL6?: number;
  STDOVHDCOSTLOCAL7?: number;
  STDOVHDCOSTLOCAL8?: number;
  STDOVHDCOSTLOCAL9?: number;
  STDOVHDCOSTLOCAL10?: number;
  STDOVHDCOSTTRCURR2?: number;
  STDOVHDCOSTTRCURR3?: number;
  STDOVHDCOSTTRCURR4?: number;
  STDOVHDCOSTTRCURR5?: number;
  STDOVHDCOSTTRCURR6?: number;
  STDOVHDCOSTTRCURR7?: number;
  STDOVHDCOSTTRCURR8?: number;
  STDOVHDCOSTTRCURR9?: number;
  STDOVHDCOSTTRCURR10?: number;
  STDOVHDCOSTREPCURR2?: number;
  STDOVHDCOSTREPCURR3?: number;
  STDOVHDCOSTREPCURR4?: number;
  STDOVHDCOSTREPCURR5?: number;
  STDOVHDCOSTREPCURR6?: number;
  STDOVHDCOSTREPCURR7?: number;
  STDOVHDCOSTREPCURR8?: number;
  STDOVHDCOSTREPCURR9?: number;
  STDOVHDCOSTREPCURR10?: number;
  OVHDCOSTFORMULA2?: string;
  OVHDCOSTFORMULA3?: string;
  OVHDCOSTFORMULA4?: string;
  OVHDCOSTFORMULA5?: string;
  OVHDCOSTFORMULA6?: string;
  OVHDCOSTFORMULA7?: string;
  OVHDCOSTFORMULA8?: string;
  OVHDCOSTFORMULA9?: string;
  OVHDCOSTFORMULA10?: string;
  OVHDCOSTREPFORMULA2?: string;
  OVHDCOSTREPFORMULA3?: string;
  OVHDCOSTREPFORMULA4?: string;
  OVHDCOSTREPFORMULA5?: string;
  OVHDCOSTREPFORMULA6?: string;
  OVHDCOSTREPFORMULA7?: string;
  OVHDCOSTREPFORMULA8?: string;
  OVHDCOSTREPFORMULA9?: string;
  OVHDCOSTREPFORMULA10?: string;
}

/**
 * Union type of all BomStandardCosts field names for type-safe field selection and sorting
 */
export type BomStandardCostsField =
  | 'INTERNAL_REFERENCE'
  | 'FACTORYNR'
  | 'PERIODREF'
  | 'STOCKREF'
  | 'BOMREF'
  | 'BOMREVREF'
  | 'REPORTRATE'
  | 'CRTYPE'
  | 'TRCURRDATE'
  | 'AMOUNT'
  | 'UOMREF'
  | 'UNIT_CODE'
  | 'STDMTRCOSTLOCAL'
  | 'STDMTRCOSTTRCURR'
  | 'STDMTRCOSTREPCURR'
  | 'STDLBRCOSTLOCAL'
  | 'STDLBRCOSTTRCURR'
  | 'STDLBRCOSTREPCURR'
  | 'STDWSCOSTLOCAL'
  | 'STDWSCOSTTRCURR'
  | 'STDWSCOSTREPCURR'
  | 'STDOVHDCOSTLOCAL'
  | 'STDOVHDCOSTTRCURR'
  | 'STDOVHDCOSTREPCURR'
  | 'OVHDCOSTFORMULA'
  | 'OVHDCOSTREPFORMULA'
  | 'STDUNITCOSTLOCAL'
  | 'STDUNITCOSTTRCURR'
  | 'STDUNITCOSTREPCURR'
  | 'PERIODCODE'
  | 'PERIODNAME'
  | 'ITEMCODE'
  | 'ITEMNAME'
  | 'BOMCODE'
  | 'BOMNAME'
  | 'BOMTYPE'
  | 'REVCODE'
  | 'REVNAME'
  | 'DELLINE'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'STDOVHDCOSTLOCAL2'
  | 'STDOVHDCOSTLOCAL3'
  | 'STDOVHDCOSTLOCAL4'
  | 'STDOVHDCOSTLOCAL5'
  | 'STDOVHDCOSTLOCAL6'
  | 'STDOVHDCOSTLOCAL7'
  | 'STDOVHDCOSTLOCAL8'
  | 'STDOVHDCOSTLOCAL9'
  | 'STDOVHDCOSTLOCAL10'
  | 'STDOVHDCOSTTRCURR2'
  | 'STDOVHDCOSTTRCURR3'
  | 'STDOVHDCOSTTRCURR4'
  | 'STDOVHDCOSTTRCURR5'
  | 'STDOVHDCOSTTRCURR6'
  | 'STDOVHDCOSTTRCURR7'
  | 'STDOVHDCOSTTRCURR8'
  | 'STDOVHDCOSTTRCURR9'
  | 'STDOVHDCOSTTRCURR10'
  | 'STDOVHDCOSTREPCURR2'
  | 'STDOVHDCOSTREPCURR3'
  | 'STDOVHDCOSTREPCURR4'
  | 'STDOVHDCOSTREPCURR5'
  | 'STDOVHDCOSTREPCURR6'
  | 'STDOVHDCOSTREPCURR7'
  | 'STDOVHDCOSTREPCURR8'
  | 'STDOVHDCOSTREPCURR9'
  | 'STDOVHDCOSTREPCURR10'
  | 'OVHDCOSTFORMULA2'
  | 'OVHDCOSTFORMULA3'
  | 'OVHDCOSTFORMULA4'
  | 'OVHDCOSTFORMULA5'
  | 'OVHDCOSTFORMULA6'
  | 'OVHDCOSTFORMULA7'
  | 'OVHDCOSTFORMULA8'
  | 'OVHDCOSTFORMULA9'
  | 'OVHDCOSTFORMULA10'
  | 'OVHDCOSTREPFORMULA2'
  | 'OVHDCOSTREPFORMULA3'
  | 'OVHDCOSTREPFORMULA4'
  | 'OVHDCOSTREPFORMULA5'
  | 'OVHDCOSTREPFORMULA6'
  | 'OVHDCOSTREPFORMULA7'
  | 'OVHDCOSTREPFORMULA8'
  | 'OVHDCOSTREPFORMULA9'
  | 'OVHDCOSTREPFORMULA10';

/**
 * Type-safe sort specification for BomStandardCosts queries
 */
export type BomStandardCostsSortSpec =
  | [BomStandardCostsField]
  | [BomStandardCostsField, 'asc' | 'desc']
  | [BomStandardCostsField[], 'asc' | 'desc']
  | [BomStandardCostsField[]];

/**
 * Type-safe query options for BomStandardCosts entities
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
export interface BomStandardCostsQueryOptions
  extends Omit<QueryOptions<BomStandardCostsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: BomStandardCostsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: BomStandardCostsSortSpec;
}

/**
 * Search criteria for BomStandardCosts entities
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
export interface BomStandardCostsSearchCriteria {
  internalReference?: NumberFieldValue;
  factorynr?: NumberFieldValue;
  periodref?: NumberFieldValue;
  stockref?: NumberFieldValue;
  bomref?: NumberFieldValue;
  bomrevref?: NumberFieldValue;
  reportrate?: NumberFieldValue;
  crtype?: NumberFieldValue;
  trcurrdate?: NumberFieldValue;
  amount?: NumberFieldValue;
  uomref?: NumberFieldValue;
  unitCode?: StringFieldValue;
  stdmtrcostlocal?: NumberFieldValue;
  stdmtrcosttrcurr?: NumberFieldValue;
  stdmtrcostrepcurr?: NumberFieldValue;
  stdlbrcostlocal?: NumberFieldValue;
  stdlbrcosttrcurr?: NumberFieldValue;
  stdlbrcostrepcurr?: NumberFieldValue;
  stdwscostlocal?: NumberFieldValue;
  stdwscosttrcurr?: NumberFieldValue;
  stdwscostrepcurr?: NumberFieldValue;
  stdovhdcostlocal?: NumberFieldValue;
  stdovhdcosttrcurr?: NumberFieldValue;
  stdovhdcostrepcurr?: NumberFieldValue;
  ovhdcostformula?: StringFieldValue;
  ovhdcostrepformula?: StringFieldValue;
  stdunitcostlocal?: NumberFieldValue;
  stdunitcosttrcurr?: NumberFieldValue;
  stdunitcostrepcurr?: NumberFieldValue;
  periodcode?: StringFieldValue;
  periodname?: StringFieldValue;
  itemcode?: StringFieldValue;
  itemname?: StringFieldValue;
  bomcode?: StringFieldValue;
  bomname?: StringFieldValue;
  bomtype?: NumberFieldValue;
  revcode?: StringFieldValue;
  revname?: StringFieldValue;
  delline?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  stdovhdcostlocal2?: NumberFieldValue;
  stdovhdcostlocal3?: NumberFieldValue;
  stdovhdcostlocal4?: NumberFieldValue;
  stdovhdcostlocal5?: NumberFieldValue;
  stdovhdcostlocal6?: NumberFieldValue;
  stdovhdcostlocal7?: NumberFieldValue;
  stdovhdcostlocal8?: NumberFieldValue;
  stdovhdcostlocal9?: NumberFieldValue;
  stdovhdcostlocal10?: NumberFieldValue;
  stdovhdcosttrcurr2?: NumberFieldValue;
  stdovhdcosttrcurr3?: NumberFieldValue;
  stdovhdcosttrcurr4?: NumberFieldValue;
  stdovhdcosttrcurr5?: NumberFieldValue;
  stdovhdcosttrcurr6?: NumberFieldValue;
  stdovhdcosttrcurr7?: NumberFieldValue;
  stdovhdcosttrcurr8?: NumberFieldValue;
  stdovhdcosttrcurr9?: NumberFieldValue;
  stdovhdcosttrcurr10?: NumberFieldValue;
  stdovhdcostrepcurr2?: NumberFieldValue;
  stdovhdcostrepcurr3?: NumberFieldValue;
  stdovhdcostrepcurr4?: NumberFieldValue;
  stdovhdcostrepcurr5?: NumberFieldValue;
  stdovhdcostrepcurr6?: NumberFieldValue;
  stdovhdcostrepcurr7?: NumberFieldValue;
  stdovhdcostrepcurr8?: NumberFieldValue;
  stdovhdcostrepcurr9?: NumberFieldValue;
  stdovhdcostrepcurr10?: NumberFieldValue;
  ovhdcostformula2?: StringFieldValue;
  ovhdcostformula3?: StringFieldValue;
  ovhdcostformula4?: StringFieldValue;
  ovhdcostformula5?: StringFieldValue;
  ovhdcostformula6?: StringFieldValue;
  ovhdcostformula7?: StringFieldValue;
  ovhdcostformula8?: StringFieldValue;
  ovhdcostformula9?: StringFieldValue;
  ovhdcostformula10?: StringFieldValue;
  ovhdcostrepformula2?: StringFieldValue;
  ovhdcostrepformula3?: StringFieldValue;
  ovhdcostrepformula4?: StringFieldValue;
  ovhdcostrepformula5?: StringFieldValue;
  ovhdcostrepformula6?: StringFieldValue;
  ovhdcostrepformula7?: StringFieldValue;
  ovhdcostrepformula8?: StringFieldValue;
  ovhdcostrepformula9?: StringFieldValue;
  ovhdcostrepformula10?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for BomStandardCosts entities
 */
export interface BomStandardCostsAnalytics {
  total: number;
  // Add BomStandardCosts-specific analytics fields
}
