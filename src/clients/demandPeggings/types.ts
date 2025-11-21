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
 * DemandPeggings entity interface based on swagger definition
 */
export interface DemandPeggings extends BaseEntity {
  DEMAND_REFERENCE?: number;
  DEMAND_SITEID?: number;
  PARENTTYPE?: number;
  PARENTREF?: number;
  CHILD_TYPE?: number;
  CHILD_REFERENCE?: number;
  FICHE_TYPE?: number;
  ITEM_ALTER?: number;
  ITEMREF?: number;
  UNITREF?: number;
  MAINITEMREF?: number;
  MAINUNITREF?: number;
  MEET_AMNT?: number;
  MAIN_MEET_AMNT?: number;
  ORD_PERIOD?: number;
  CLIENTREF?: number;
  BOMMASTERREF?: number;
  BOMREVREF?: number;
  LINE_TYPE?: number;
  DET_LINE?: number;
  PREVLINEREF?: number;
  PREV_LINE_NO?: number;
  LINE_NO?: number;
  FICHE_NO?: string;
  FICHE_DATE?: string;
  ITEM_CODE?: string;
  ITEM_NAME?: string;
  TR_AMNT?: number;
  U_EDIT?: string;
  BOM_CODE?: string;
  BOM_REV_CODE?: string;
  ARP_CODE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  PEGREF?: number;
  DOCNRREF?: number;
  LINE_PTR?: string;
  FCNOCGHD?: number;
  DET_LIST?: string;
  DET_DEL_LIST?: string;
  PROPOSAL?: number;
  WAIT_AMNT?: number;
  FACTORY_NR?: number;
  SOURCE_INDEX?: number;
  AMNTCONVF?: number;
  DO_CODE?: string;
  ARP_NAME?: string;
  FIC_STATUS?: number;
  MAIN_ITEM_CODE?: string;
  MAIN_ITEM_NAME?: string;
  MAIN_U_EDIT?: string;
  PRICE?: number;
  PAYPLANREF?: number;
  PAYPLAN_CODE?: string;
  PROJECT_CODE?: string;
  PrOJECTREF?: number;
  VARIANTREF?: number;
  MAINVARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  BOM_TYPE?: number;
}

/**
 * Union type of all DemandPeggings field names for type-safe field selection and sorting
 */
export type DemandPeggingsField =
  | 'INTERNAL_REFERENCE'
  | 'DEMAND_REFERENCE'
  | 'DEMAND_SITEID'
  | 'PARENTTYPE'
  | 'PARENTREF'
  | 'CHILD_TYPE'
  | 'CHILD_REFERENCE'
  | 'FICHE_TYPE'
  | 'ITEM_ALTER'
  | 'ITEMREF'
  | 'UNITREF'
  | 'MAINITEMREF'
  | 'MAINUNITREF'
  | 'MEET_AMNT'
  | 'MAIN_MEET_AMNT'
  | 'ORD_PERIOD'
  | 'CLIENTREF'
  | 'BOMMASTERREF'
  | 'BOMREVREF'
  | 'LINE_TYPE'
  | 'DET_LINE'
  | 'PREVLINEREF'
  | 'PREV_LINE_NO'
  | 'LINE_NO'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'XML_ATTRIBUTE'
  | 'FICHE_NO'
  | 'FICHE_DATE'
  | 'ITEM_CODE'
  | 'ITEM_NAME'
  | 'TR_AMNT'
  | 'U_EDIT'
  | 'BOM_CODE'
  | 'BOM_REV_CODE'
  | 'ARP_CODE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'PEGREF'
  | 'DOCNRREF'
  | 'LINE_PTR'
  | 'FCNOCGHD'
  | 'DET_LIST'
  | 'DET_DEL_LIST'
  | 'PROPOSAL'
  | 'WAIT_AMNT'
  | 'FACTORY_NR'
  | 'SOURCE_INDEX'
  | 'AMNTCONVF'
  | 'DO_CODE'
  | 'ARP_NAME'
  | 'FIC_STATUS'
  | 'MAIN_ITEM_CODE'
  | 'MAIN_ITEM_NAME'
  | 'MAIN_U_EDIT'
  | 'PRICE'
  | 'PAYPLANREF'
  | 'PAYPLAN_CODE'
  | 'PROJECT_CODE'
  | 'PrOJECTREF'
  | 'VARIANTREF'
  | 'MAINVARIANTREF'
  | 'VARIANTCODE'
  | 'VARIANTNAME'
  | 'BOM_TYPE';

/**
 * Type-safe sort specification for DemandPeggings queries
 */
export type DemandPeggingsSortSpec =
  | [DemandPeggingsField]
  | [DemandPeggingsField, 'asc' | 'desc']
  | [DemandPeggingsField[], 'asc' | 'desc']
  | [DemandPeggingsField[]];

/**
 * Type-safe query options for DemandPeggings entities
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
export interface DemandPeggingsQueryOptions
  extends Omit<QueryOptions<DemandPeggingsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: DemandPeggingsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: DemandPeggingsSortSpec;
}

/**
 * Search criteria for DemandPeggings entities
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
export interface DemandPeggingsSearchCriteria {
  internalReference?: NumberFieldValue;
  demandReference?: NumberFieldValue;
  demandSiteid?: NumberFieldValue;
  parenttype?: NumberFieldValue;
  parentref?: NumberFieldValue;
  childType?: NumberFieldValue;
  childReference?: NumberFieldValue;
  ficheType?: NumberFieldValue;
  itemAlter?: NumberFieldValue;
  itemref?: NumberFieldValue;
  unitref?: NumberFieldValue;
  mainitemref?: NumberFieldValue;
  mainunitref?: NumberFieldValue;
  meetAmnt?: NumberFieldValue;
  mainMeetAmnt?: NumberFieldValue;
  ordPeriod?: NumberFieldValue;
  clientref?: NumberFieldValue;
  bommasterref?: NumberFieldValue;
  bomrevref?: NumberFieldValue;
  lineType?: NumberFieldValue;
  detLine?: NumberFieldValue;
  prevlineref?: NumberFieldValue;
  prevLineNo?: NumberFieldValue;
  lineNo?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  ficheNo?: StringFieldValue;
  ficheDate?: StringFieldValue;
  itemCode?: StringFieldValue;
  itemName?: StringFieldValue;
  trAmnt?: NumberFieldValue;
  uEdit?: StringFieldValue;
  bomCode?: StringFieldValue;
  bomRevCode?: StringFieldValue;
  arpCode?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  pegref?: NumberFieldValue;
  docnrref?: NumberFieldValue;
  linePtr?: StringFieldValue;
  fcnocghd?: NumberFieldValue;
  detList?: StringFieldValue;
  detDelList?: StringFieldValue;
  proposal?: NumberFieldValue;
  waitAmnt?: NumberFieldValue;
  factoryNr?: NumberFieldValue;
  sourceIndex?: NumberFieldValue;
  amntconvf?: NumberFieldValue;
  doCode?: StringFieldValue;
  arpName?: StringFieldValue;
  ficStatus?: NumberFieldValue;
  mainItemCode?: StringFieldValue;
  mainItemName?: StringFieldValue;
  mainUEdit?: StringFieldValue;
  price?: NumberFieldValue;
  payplanref?: NumberFieldValue;
  payplanCode?: StringFieldValue;
  projectCode?: StringFieldValue;
  prOJECTREF?: NumberFieldValue;
  variantref?: NumberFieldValue;
  mainvariantref?: NumberFieldValue;
  variantcode?: StringFieldValue;
  variantname?: StringFieldValue;
  bomType?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for DemandPeggings entities
 */
export interface DemandPeggingsAnalytics {
  total: number;
  // Add DemandPeggings-specific analytics fields
}
