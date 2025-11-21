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
 * Vehicles entity interface based on swagger definition
 */
export interface Vehicles extends BaseEntity {
  CODE?: string;
  DEFINITION?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  PLAQUE?: string;
  WIDTH?: number;
  LENGTH?: number;
  HEIGHT?: number;
  AREA?: number;
  VOLUME?: number;
  WEIGHT?: number;
  WIDTHREF?: number;
  LENGTHREF?: number;
  HEIGHTREF?: number;
  AREAREF?: number;
  VOLUMEREF?: number;
  WEIGHTREF?: number;
  SCORE?: number;
  USER1?: string;
  USER2?: string;
  ACTIVE?: number;
  WFSTATUS?: number;
  WIDTHCODE?: string;
  LENGTHCODE?: string;
  HEIGHTCODE?: string;
  AREACODE?: string;
  VOLUMECODE?: string;
  WEIGHTCODE?: string;
  XBUFS?: string;
  UNIT_COST?: number;
  UNIT_COST_CODE?: string;
  WAITING_PROCE?: number;
  FIXED_PRICE?: number;
  MINIMAL_PRICE?: number;
  ITEM_AUXIL_CODE1?: string;
  ITEM_AUXIL_CODE2?: string;
  ITEM_AUXIL_CODE3?: string;
  ITEM_AUXIL_CODE4?: string;
  ITEM_AUXIL_CODE5?: string;
}

/**
 * Union type of all Vehicles field names for type-safe field selection and sorting
 */
export type VehiclesField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'DEFINITION'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'PLAQUE'
  | 'WIDTH'
  | 'LENGTH'
  | 'HEIGHT'
  | 'AREA'
  | 'VOLUME'
  | 'WEIGHT'
  | 'WIDTHREF'
  | 'LENGTHREF'
  | 'HEIGHTREF'
  | 'AREAREF'
  | 'VOLUMEREF'
  | 'WEIGHTREF'
  | 'SCORE'
  | 'USER1'
  | 'USER2'
  | 'ACTIVE'
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
  | 'WIDTHCODE'
  | 'LENGTHCODE'
  | 'HEIGHTCODE'
  | 'AREACODE'
  | 'VOLUMECODE'
  | 'WEIGHTCODE'
  | 'XBUFS'
  | 'UNIT_COST'
  | 'UNIT_COST_CODE'
  | 'WAITING_PROCE'
  | 'FIXED_PRICE'
  | 'MINIMAL_PRICE'
  | 'ITEM_AUXIL_CODE1'
  | 'ITEM_AUXIL_CODE2'
  | 'ITEM_AUXIL_CODE3'
  | 'ITEM_AUXIL_CODE4'
  | 'ITEM_AUXIL_CODE5';

/**
 * Type-safe sort specification for Vehicles queries
 */
export type VehiclesSortSpec =
  | [VehiclesField]
  | [VehiclesField, 'asc' | 'desc']
  | [VehiclesField[], 'asc' | 'desc']
  | [VehiclesField[]];

/**
 * Type-safe query options for Vehicles entities
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
export interface VehiclesQueryOptions extends Omit<QueryOptions<VehiclesField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: VehiclesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: VehiclesSortSpec;
}

/**
 * Search criteria for Vehicles entities
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
export interface VehiclesSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  definition?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  plaque?: StringFieldValue;
  width?: NumberFieldValue;
  length?: NumberFieldValue;
  height?: NumberFieldValue;
  area?: NumberFieldValue;
  volume?: NumberFieldValue;
  weight?: NumberFieldValue;
  widthref?: NumberFieldValue;
  lengthref?: NumberFieldValue;
  heightref?: NumberFieldValue;
  arearef?: NumberFieldValue;
  volumeref?: NumberFieldValue;
  weightref?: NumberFieldValue;
  score?: NumberFieldValue;
  user1?: StringFieldValue;
  user2?: StringFieldValue;
  active?: NumberFieldValue;
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
  widthcode?: StringFieldValue;
  lengthcode?: StringFieldValue;
  heightcode?: StringFieldValue;
  areacode?: StringFieldValue;
  volumecode?: StringFieldValue;
  weightcode?: StringFieldValue;
  xbufs?: StringFieldValue;
  unitCost?: NumberFieldValue;
  unitCostCode?: StringFieldValue;
  waitingProce?: NumberFieldValue;
  fixedPrice?: NumberFieldValue;
  minimalPrice?: NumberFieldValue;
  itemAuxilCode1?: StringFieldValue;
  itemAuxilCode2?: StringFieldValue;
  itemAuxilCode3?: StringFieldValue;
  itemAuxilCode4?: StringFieldValue;
  itemAuxilCode5?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Vehicles entities
 */
export interface VehiclesAnalytics {
  total: number;
  // Add Vehicles-specific analytics fields
}
