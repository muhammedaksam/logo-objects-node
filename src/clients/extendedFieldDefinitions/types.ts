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
 * ExtendedFieldDefinitions entity interface based on swagger definition
 */
export interface ExtendedFieldDefinitions extends BaseEntity {
  MODULENR?: number;
  LEVEL_?: number;
  PARENTREF?: number;
  OWNERREF?: number;
  TEXTFLDS1?: string;
  TEXTFLDS2?: string;
  TEXTFLDS3?: string;
  TEXTFLDS4?: string;
  TEXTFLDS5?: string;
  TEXTFLDS6?: string;
  TEXTFLDS7?: string;
  TEXTFLDS8?: string;
  TEXTFLDS9?: string;
  TEXTFLDS10?: string;
  TEXTFLDS11?: string;
  TEXTFLDS12?: string;
  TEXTFLDS13?: string;
  TEXTFLDS14?: string;
  TEXTFLDS15?: string;
  TEXTFLDS16?: string;
  TEXTFLDS17?: string;
  TEXTFLDS18?: string;
  TEXTFLDS19?: string;
  TEXTFLDS20?: string;
  TEXTFLDS21?: string;
  TEXTFLDS22?: string;
  TEXTFLDS23?: string;
  TEXTFLDS24?: string;
  TEXTFLDS25?: string;
  TEXTFLDS26?: string;
  TEXTFLDS27?: string;
  TEXTFLDS28?: string;
  TEXTFLDS29?: string;
  TEXTFLDS30?: string;
  TEXTFLDS31?: string;
  TEXTFLDS32?: string;
  TEXTFLDS33?: string;
  TEXTFLDS34?: string;
  TEXTFLDS35?: string;
  TEXTFLDS36?: string;
  TEXTFLDS37?: string;
  TEXTFLDS38?: string;
  TEXTFLDS39?: string;
  TEXTFLDS40?: string;
  TEXTFLDS41?: string;
  TEXTFLDS42?: string;
  TEXTFLDS43?: string;
  TEXTFLDS44?: string;
  TEXTFLDS45?: string;
  TEXTFLDS46?: string;
  TEXTFLDS47?: string;
  TEXTFLDS48?: string;
  TEXTFLDS49?: string;
  TEXTFLDS50?: string;
  NUMFLDS1?: number;
  NUMFLDS2?: number;
  NUMFLDS3?: number;
  NUMFLDS4?: number;
  NUMFLDS5?: number;
  NUMFLDS6?: number;
  NUMFLDS7?: number;
  NUMFLDS8?: number;
  NUMFLDS9?: number;
  NUMFLDS10?: number;
  NUMFLDS11?: number;
  NUMFLDS12?: number;
  NUMFLDS13?: number;
  NUMFLDS14?: number;
  NUMFLDS15?: number;
  NUMFLDS16?: number;
  NUMFLDS17?: number;
  NUMFLDS18?: number;
  NUMFLDS19?: number;
  NUMFLDS20?: number;
  NUMFLDS21?: number;
  NUMFLDS22?: number;
  NUMFLDS23?: number;
  NUMFLDS24?: number;
  NUMFLDS25?: number;
  NUMFLDS26?: number;
  NUMFLDS27?: number;
  NUMFLDS28?: number;
  NUMFLDS29?: number;
  NUMFLDS30?: number;
  NUMFLDS31?: number;
  NUMFLDS32?: number;
  NUMFLDS33?: number;
  NUMFLDS34?: number;
  NUMFLDS35?: number;
  NUMFLDS36?: number;
  NUMFLDS37?: number;
  NUMFLDS38?: number;
  NUMFLDS39?: number;
  NUMFLDS40?: number;
  NUMFLDS41?: number;
  NUMFLDS42?: number;
  NUMFLDS43?: number;
  NUMFLDS44?: number;
  NUMFLDS45?: number;
  NUMFLDS46?: number;
  NUMFLDS47?: number;
  NUMFLDS48?: number;
  NUMFLDS49?: number;
  NUMFLDS50?: number;
}

/**
 * Union type of all ExtendedFieldDefinitions field names for type-safe field selection and sorting
 */
export type ExtendedFieldDefinitionsField =
  | 'INTERNAL_REFERENCE'
  | 'MODULENR'
  | 'LEVEL_'
  | 'PARENTREF'
  | 'OWNERREF'
  | 'TEXTFLDS1'
  | 'TEXTFLDS2'
  | 'TEXTFLDS3'
  | 'TEXTFLDS4'
  | 'TEXTFLDS5'
  | 'TEXTFLDS6'
  | 'TEXTFLDS7'
  | 'TEXTFLDS8'
  | 'TEXTFLDS9'
  | 'TEXTFLDS10'
  | 'TEXTFLDS11'
  | 'TEXTFLDS12'
  | 'TEXTFLDS13'
  | 'TEXTFLDS14'
  | 'TEXTFLDS15'
  | 'TEXTFLDS16'
  | 'TEXTFLDS17'
  | 'TEXTFLDS18'
  | 'TEXTFLDS19'
  | 'TEXTFLDS20'
  | 'TEXTFLDS21'
  | 'TEXTFLDS22'
  | 'TEXTFLDS23'
  | 'TEXTFLDS24'
  | 'TEXTFLDS25'
  | 'TEXTFLDS26'
  | 'TEXTFLDS27'
  | 'TEXTFLDS28'
  | 'TEXTFLDS29'
  | 'TEXTFLDS30'
  | 'TEXTFLDS31'
  | 'TEXTFLDS32'
  | 'TEXTFLDS33'
  | 'TEXTFLDS34'
  | 'TEXTFLDS35'
  | 'TEXTFLDS36'
  | 'TEXTFLDS37'
  | 'TEXTFLDS38'
  | 'TEXTFLDS39'
  | 'TEXTFLDS40'
  | 'TEXTFLDS41'
  | 'TEXTFLDS42'
  | 'TEXTFLDS43'
  | 'TEXTFLDS44'
  | 'TEXTFLDS45'
  | 'TEXTFLDS46'
  | 'TEXTFLDS47'
  | 'TEXTFLDS48'
  | 'TEXTFLDS49'
  | 'TEXTFLDS50'
  | 'NUMFLDS1'
  | 'NUMFLDS2'
  | 'NUMFLDS3'
  | 'NUMFLDS4'
  | 'NUMFLDS5'
  | 'NUMFLDS6'
  | 'NUMFLDS7'
  | 'NUMFLDS8'
  | 'NUMFLDS9'
  | 'NUMFLDS10'
  | 'NUMFLDS11'
  | 'NUMFLDS12'
  | 'NUMFLDS13'
  | 'NUMFLDS14'
  | 'NUMFLDS15'
  | 'NUMFLDS16'
  | 'NUMFLDS17'
  | 'NUMFLDS18'
  | 'NUMFLDS19'
  | 'NUMFLDS20'
  | 'NUMFLDS21'
  | 'NUMFLDS22'
  | 'NUMFLDS23'
  | 'NUMFLDS24'
  | 'NUMFLDS25'
  | 'NUMFLDS26'
  | 'NUMFLDS27'
  | 'NUMFLDS28'
  | 'NUMFLDS29'
  | 'NUMFLDS30'
  | 'NUMFLDS31'
  | 'NUMFLDS32'
  | 'NUMFLDS33'
  | 'NUMFLDS34'
  | 'NUMFLDS35'
  | 'NUMFLDS36'
  | 'NUMFLDS37'
  | 'NUMFLDS38'
  | 'NUMFLDS39'
  | 'NUMFLDS40'
  | 'NUMFLDS41'
  | 'NUMFLDS42'
  | 'NUMFLDS43'
  | 'NUMFLDS44'
  | 'NUMFLDS45'
  | 'NUMFLDS46'
  | 'NUMFLDS47'
  | 'NUMFLDS48'
  | 'NUMFLDS49'
  | 'NUMFLDS50'
  | 'XML_ATTRIBUTE'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE';

/**
 * Type-safe sort specification for ExtendedFieldDefinitions queries
 */
export type ExtendedFieldDefinitionsSortSpec =
  | [ExtendedFieldDefinitionsField]
  | [ExtendedFieldDefinitionsField, 'asc' | 'desc']
  | [ExtendedFieldDefinitionsField[], 'asc' | 'desc']
  | [ExtendedFieldDefinitionsField[]];

/**
 * Type-safe query options for ExtendedFieldDefinitions entities
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
export interface ExtendedFieldDefinitionsQueryOptions
  extends Omit<QueryOptions<ExtendedFieldDefinitionsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ExtendedFieldDefinitionsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ExtendedFieldDefinitionsSortSpec;
}

/**
 * Search criteria for ExtendedFieldDefinitions entities
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
export interface ExtendedFieldDefinitionsSearchCriteria {
  internalReference?: NumberFieldValue;
  modulenr?: NumberFieldValue;
  level_?: NumberFieldValue;
  parentref?: NumberFieldValue;
  ownerref?: NumberFieldValue;
  textflds1?: StringFieldValue;
  textflds2?: StringFieldValue;
  textflds3?: StringFieldValue;
  textflds4?: StringFieldValue;
  textflds5?: StringFieldValue;
  textflds6?: StringFieldValue;
  textflds7?: StringFieldValue;
  textflds8?: StringFieldValue;
  textflds9?: StringFieldValue;
  textflds10?: StringFieldValue;
  textflds11?: StringFieldValue;
  textflds12?: StringFieldValue;
  textflds13?: StringFieldValue;
  textflds14?: StringFieldValue;
  textflds15?: StringFieldValue;
  textflds16?: StringFieldValue;
  textflds17?: StringFieldValue;
  textflds18?: StringFieldValue;
  textflds19?: StringFieldValue;
  textflds20?: StringFieldValue;
  textflds21?: StringFieldValue;
  textflds22?: StringFieldValue;
  textflds23?: StringFieldValue;
  textflds24?: StringFieldValue;
  textflds25?: StringFieldValue;
  textflds26?: StringFieldValue;
  textflds27?: StringFieldValue;
  textflds28?: StringFieldValue;
  textflds29?: StringFieldValue;
  textflds30?: StringFieldValue;
  textflds31?: StringFieldValue;
  textflds32?: StringFieldValue;
  textflds33?: StringFieldValue;
  textflds34?: StringFieldValue;
  textflds35?: StringFieldValue;
  textflds36?: StringFieldValue;
  textflds37?: StringFieldValue;
  textflds38?: StringFieldValue;
  textflds39?: StringFieldValue;
  textflds40?: StringFieldValue;
  textflds41?: StringFieldValue;
  textflds42?: StringFieldValue;
  textflds43?: StringFieldValue;
  textflds44?: StringFieldValue;
  textflds45?: StringFieldValue;
  textflds46?: StringFieldValue;
  textflds47?: StringFieldValue;
  textflds48?: StringFieldValue;
  textflds49?: StringFieldValue;
  textflds50?: StringFieldValue;
  numflds1?: NumberFieldValue;
  numflds2?: NumberFieldValue;
  numflds3?: NumberFieldValue;
  numflds4?: NumberFieldValue;
  numflds5?: NumberFieldValue;
  numflds6?: NumberFieldValue;
  numflds7?: NumberFieldValue;
  numflds8?: NumberFieldValue;
  numflds9?: NumberFieldValue;
  numflds10?: NumberFieldValue;
  numflds11?: NumberFieldValue;
  numflds12?: NumberFieldValue;
  numflds13?: NumberFieldValue;
  numflds14?: NumberFieldValue;
  numflds15?: NumberFieldValue;
  numflds16?: NumberFieldValue;
  numflds17?: NumberFieldValue;
  numflds18?: NumberFieldValue;
  numflds19?: NumberFieldValue;
  numflds20?: NumberFieldValue;
  numflds21?: NumberFieldValue;
  numflds22?: NumberFieldValue;
  numflds23?: NumberFieldValue;
  numflds24?: NumberFieldValue;
  numflds25?: NumberFieldValue;
  numflds26?: NumberFieldValue;
  numflds27?: NumberFieldValue;
  numflds28?: NumberFieldValue;
  numflds29?: NumberFieldValue;
  numflds30?: NumberFieldValue;
  numflds31?: NumberFieldValue;
  numflds32?: NumberFieldValue;
  numflds33?: NumberFieldValue;
  numflds34?: NumberFieldValue;
  numflds35?: NumberFieldValue;
  numflds36?: NumberFieldValue;
  numflds37?: NumberFieldValue;
  numflds38?: NumberFieldValue;
  numflds39?: NumberFieldValue;
  numflds40?: NumberFieldValue;
  numflds41?: NumberFieldValue;
  numflds42?: NumberFieldValue;
  numflds43?: NumberFieldValue;
  numflds44?: NumberFieldValue;
  numflds45?: NumberFieldValue;
  numflds46?: NumberFieldValue;
  numflds47?: NumberFieldValue;
  numflds48?: NumberFieldValue;
  numflds49?: NumberFieldValue;
  numflds50?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ExtendedFieldDefinitions entities
 */
export interface ExtendedFieldDefinitionsAnalytics {
  total: number;
  // Add ExtendedFieldDefinitions-specific analytics fields
}
