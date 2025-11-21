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
 * Interface for RSCollection[RS_SrvInvenXML]
 */
export interface RscollectionrsSrvinvenxml {
  Meta?: Meta;
  items?: RsSrvinvenxml[];
}

/**
 * Interface for RSCollection[RS_ServUnitAsgn]
 */
export interface RscollectionrsServunitasgn {
  Meta?: Meta;
  items?: RsServunitasgn[];
}

/**
 * Interface for RSCollection[RS_GLPostXML]
 */
export interface RscollectionrsGlpostxml {
  Meta?: Meta;
  items?: RsGlpostxml[];
}

/**
 * Interface for RSCollection[RS_AddTaxMultiXML]
 */
export interface RscollectionrsAddtaxmultixml {
  Meta?: Meta;
  items?: RsAddtaxmultixml[];
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
 * RsSrvinvenxml transaction line item
 *
 * Represents individual transaction records within a PurchasedServices collection.
 */
export interface RsSrvinvenxml extends BaseEntity {
  SRVCARDREF?: number;
  WH_NUMBER?: number;
  LEAD_TIME?: number;
  ORDERED?: number;
  SHIPPED?: number;
  LAST_TRAN_DATE?: string;
}

/**
 * RsServunitasgn transaction line item
 *
 * Represents individual transaction records within a PurchasedServices collection.
 */
export interface RsServunitasgn extends BaseEntity {
  SRVREF?: number;
  LINENR?: number;
  UNIT_CODE?: string;
  UNITLINEREF?: number;
  PRIORITY?: number;
}

/**
 * RsGlpostxml transaction line item
 *
 * Represents individual transaction records within a PurchasedServices collection.
 */
export interface RsGlpostxml extends BaseEntity {
  CARDTYPE?: number;
  CARDREF?: number;
  INFO_TYPE?: number;
  GLACC_CODE?: string;
  ACCOUNTREF?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
}

/**
 * RsAddtaxmultixml transaction line item
 *
 * Represents individual transaction records within a PurchasedServices collection.
 */
export interface RsAddtaxmultixml extends BaseEntity {
  CARD_TYPE?: number;
  CARDREF?: number;
  ADDTAXREF?: number;
  ORDER_NUMBER?: number;
  ADD_TAX_CODE?: string;
  ADD_TAX_DEF?: string;
  EFFECT_KDV?: number;
  INLINENET?: number;
}

/**
 * PurchasedServices entity interface based on swagger definition
 */
export interface PurchasedServices extends BaseEntity {
  CARD_TYPE?: number;
  CODE?: string;
  PARENTSRVREF?: number;
  PARENT_CODE?: string;
  DESCRIPTION?: string;
  DESCRIPTION2?: string;
  AUXIL_CODE?: string;
  AUXIL_CODE2?: string;
  AUXIL_CODE3?: string;
  AUXIL_CODE4?: string;
  AUXIL_CODE5?: string;
  AUTH_CODE?: string;
  VAT_PERC?: number;
  EXTENREF?: number;
  PAYMENT_CODE?: string;
  PAYMENTREF?: number;
  UNITSET_CODE?: string;
  UNITSETREF?: number;
  XDEFS?: string;
  WH_PARAMS?: RscollectionrsSrvinvenxml;
  UNITS?: RscollectionrsServunitasgn;
  GL_LINKS?: RscollectionrsGlpostxml;
  MAINUNITCODE?: string;
  RETURNVAT?: number;
  IMPORT_EXPENSES?: number;
  AFFECT_COST?: number;
  ADD_TAXREF?: number;
  ADD_TAXCODE?: string;
  MULTI_ADD_TAX?: number;
  ADDTAXLIST?: RscollectionrsAddtaxmultixml;
  ADDTAXDELLIST?: string;
  DIST_TYPE?: number;
  CANDEDUCT?: number;
  DEDUCT_CODE?: string;
  DEDUCT_DEF?: string;
  DEDUCTION_PART1?: number;
  DEDUCTION_PART2?: number;
  EXT_ACCESS_FLAGS?: number;
  EXEMPT_FROM_TAXDECL?: number;
  CURRDIFF?: number;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  GTIP_CODE?: string;
  CPA_CODE?: string;
  PUBLICCOUNTRYREF?: number;
  PUBLIC_COUNTRY_CODE?: string;
  PUBLIC_COUNTRY_NAME?: string;
  OPPOSESRVREF?: number;
  COUNTER_SRV_CODE?: string;
  VEHICLE_EXP?: number;
  VEHICLE_RENT?: number;
  TEXTINCENG?: number;
  OPEX?: number;
  UNITSERIALCODE?: string;
}

/**
 * Union type of all PurchasedServices field names for type-safe field selection and sorting
 */
export type PurchasedServicesField =
  | 'INTERNAL_REFERENCE'
  | 'RECORD_STATUS'
  | 'CARD_TYPE'
  | 'CODE'
  | 'PARENTSRVREF'
  | 'PARENT_CODE'
  | 'DESCRIPTION'
  | 'DESCRIPTION2'
  | 'AUXIL_CODE'
  | 'AUXIL_CODE2'
  | 'AUXIL_CODE3'
  | 'AUXIL_CODE4'
  | 'AUXIL_CODE5'
  | 'AUTH_CODE'
  | 'VAT_PERC'
  | 'EXTENREF'
  | 'PAYMENT_CODE'
  | 'PAYMENTREF'
  | 'UNITSET_CODE'
  | 'UNITSETREF'
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
  | 'DATA_REFERENCE'
  | 'XDEFS'
  | 'WH_PARAMS'
  | 'UNITS'
  | 'GL_LINKS'
  | 'MAINUNITCODE'
  | 'XML_ATTRIBUTE'
  | 'RETURNVAT'
  | 'IMPORT_EXPENSES'
  | 'AFFECT_COST'
  | 'ADD_TAXREF'
  | 'ADD_TAXCODE'
  | 'MULTI_ADD_TAX'
  | 'ADDTAXLIST'
  | 'ADDTAXDELLIST'
  | 'DIST_TYPE'
  | 'CANDEDUCT'
  | 'DEDUCT_CODE'
  | 'DEDUCT_DEF'
  | 'DEDUCTION_PART1'
  | 'DEDUCTION_PART2'
  | 'EXT_ACCESS_FLAGS'
  | 'EXEMPT_FROM_TAXDECL'
  | 'CURRDIFF'
  | 'PROJECTREF'
  | 'PROJECT_CODE'
  | 'GTIP_CODE'
  | 'CPA_CODE'
  | 'PUBLICCOUNTRYREF'
  | 'PUBLIC_COUNTRY_CODE'
  | 'PUBLIC_COUNTRY_NAME'
  | 'OPPOSESRVREF'
  | 'COUNTER_SRV_CODE'
  | 'VEHICLE_EXP'
  | 'VEHICLE_RENT'
  | 'TEXTINC'
  | 'TEXTINCENG'
  | 'OPEX'
  | 'UNITSERIALCODE';

/**
 * Type-safe sort specification for PurchasedServices queries
 */
export type PurchasedServicesSortSpec =
  | [PurchasedServicesField]
  | [PurchasedServicesField, 'asc' | 'desc']
  | [PurchasedServicesField[], 'asc' | 'desc']
  | [PurchasedServicesField[]];

/**
 * Type-safe query options for PurchasedServices entities
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
export interface PurchasedServicesQueryOptions
  extends Omit<QueryOptions<PurchasedServicesField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: PurchasedServicesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: PurchasedServicesSortSpec;
}

/**
 * Search criteria for PurchasedServices entities
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
export interface PurchasedServicesSearchCriteria {
  internalReference?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  cardType?: NumberFieldValue;
  code?: StringFieldValue;
  parentsrvref?: NumberFieldValue;
  parentCode?: StringFieldValue;
  description?: StringFieldValue;
  description2?: StringFieldValue;
  auxilCode?: StringFieldValue;
  auxilCode2?: StringFieldValue;
  auxilCode3?: StringFieldValue;
  auxilCode4?: StringFieldValue;
  auxilCode5?: StringFieldValue;
  authCode?: StringFieldValue;
  vatPerc?: NumberFieldValue;
  extenref?: NumberFieldValue;
  paymentCode?: StringFieldValue;
  paymentref?: NumberFieldValue;
  unitsetCode?: StringFieldValue;
  unitsetref?: NumberFieldValue;
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
  dataReference?: NumberFieldValue;
  xdefs?: StringFieldValue;
  whParams?: DateFieldValue;
  units?: DateFieldValue;
  glLinks?: DateFieldValue;
  mainunitcode?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  returnvat?: NumberFieldValue;
  importExpenses?: NumberFieldValue;
  affectCost?: NumberFieldValue;
  addTaxref?: NumberFieldValue;
  addTaxcode?: StringFieldValue;
  multiAddTax?: NumberFieldValue;
  addtaxlist?: DateFieldValue;
  addtaxdellist?: StringFieldValue;
  distType?: NumberFieldValue;
  candeduct?: NumberFieldValue;
  deductCode?: StringFieldValue;
  deductDef?: StringFieldValue;
  deductionPart1?: NumberFieldValue;
  deductionPart2?: NumberFieldValue;
  extAccessFlags?: NumberFieldValue;
  exemptFromTaxdecl?: NumberFieldValue;
  currdiff?: NumberFieldValue;
  projectref?: NumberFieldValue;
  projectCode?: StringFieldValue;
  gtipCode?: StringFieldValue;
  cpaCode?: StringFieldValue;
  publiccountryref?: NumberFieldValue;
  publicCountryCode?: StringFieldValue;
  publicCountryName?: StringFieldValue;
  opposesrvref?: NumberFieldValue;
  counterSrvCode?: StringFieldValue;
  vehicleExp?: NumberFieldValue;
  vehicleRent?: NumberFieldValue;
  textinc?: NumberFieldValue;
  textinceng?: NumberFieldValue;
  opex?: NumberFieldValue;
  unitserialcode?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for PurchasedServices entities
 */
export interface PurchasedServicesAnalytics {
  total: number;
  // Add PurchasedServices-specific analytics fields
}
