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
 * Interface for RSCollection[RS_CampLinesXML]
 */
export interface RscollectionrsCamplinesxml {
  Meta?: Meta;
  items?: RsCamplinesxml[];
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
 * RsCamplinesxml transaction line item
 *
 * Represents individual transaction records within a PurchaseCampaigns collection.
 */
export interface RsCamplinesxml extends BaseEntity {
  CAMPCARDREF?: number;
  LINE_NR?: number;
  LINE_TYPE?: number;
  APPLY_TYPE?: number;
  COND_ITEM_CODE?: string;
  CONDITION?: string;
  FORMULA?: string;
  ITEMREF?: number;
  USREF?: number;
  UOMREF?: number;
  PROMIS_CLASS?: number;
  ITEM_CODE?: string;
  UOM_CODE?: string;
  LINE_EXP?: string;
  ACCOUNTREF?: number;
  CENTERREF?: number;
  ACC_CODE?: string;
  CST_CODE?: string;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  CANCONFIG?: string;
}

/**
 * PurchaseCampaigns entity interface based on swagger definition
 */
export interface PurchaseCampaigns extends BaseEntity {
  CARD_TYPE?: number;
  CODE?: string;
  NAME?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  BEG_DATE?: string;
  END_DATE?: string;
  PRIORITY_GRP?: string;
  PRIORITY?: number;
  DONT_FIX_LINES?: number;
  CLIENT_CODE?: string;
  CL_AUXIL_CODE?: string;
  TRADING_GRP?: string;
  PAY_PLAN_CODE?: string;
  PP_GROUP_CODE?: string;
  TOWN_CODE?: string;
  DISTRICT_CODE?: string;
  CITY_CODE?: string;
  COUNTRY_CODE?: string;
  VARIABLE_DEFS1?: string;
  VARIABLE_DEFS2?: string;
  VARIABLE_DEFS3?: string;
  VARIABLE_DEFS4?: string;
  VARIABLE_DEFS5?: string;
  WFSTATUS?: number;
  CAMPAIGN_LINES?: RscollectionrsCamplinesxml;
  DELLIST?: string;
  ORGLOGOID?: string;
  FICHE_DOC_NUMBER?: string;
  FICHE_AUXIL_CODE?: string;
  FICHE_AUTH_CODE?: string;
  CL_AUXIL_CODE2?: string;
  CL_AUXIL_CODE3?: string;
  CL_AUXIL_CODE4?: string;
  CL_AUXIL_CODE5?: string;
  CL_AUTH_CODE?: string;
  VARIABLE_DEFS6?: string;
  VARIABLE_DEFS7?: string;
  VARIABLE_DEFS8?: string;
  VARIABLE_DEFS9?: string;
  VARIABLE_DEFS10?: string;
  GUID?: string;
  VARIABLE_DEFS11?: string;
  VARIABLE_DEFS12?: string;
  VARIABLE_DEFS13?: string;
  VARIABLE_DEFS14?: string;
  VARIABLE_DEFS15?: string;
  VARIABLE_DEFS16?: string;
  VARIABLE_DEFS17?: string;
  VARIABLE_DEFS18?: string;
  VARIABLE_DEFS19?: string;
  VARIABLE_DEFS20?: string;
}

/**
 * Union type of all PurchaseCampaigns field names for type-safe field selection and sorting
 */
export type PurchaseCampaignsField =
  | 'INTERNAL_REFERENCE'
  | 'RECORD_STATUS'
  | 'CARD_TYPE'
  | 'CODE'
  | 'NAME'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'BEG_DATE'
  | 'END_DATE'
  | 'PRIORITY_GRP'
  | 'PRIORITY'
  | 'DONT_FIX_LINES'
  | 'CLIENT_CODE'
  | 'CL_AUXIL_CODE'
  | 'TRADING_GRP'
  | 'PAY_PLAN_CODE'
  | 'PP_GROUP_CODE'
  | 'TOWN_CODE'
  | 'DISTRICT_CODE'
  | 'CITY_CODE'
  | 'COUNTRY_CODE'
  | 'VARIABLE_DEFS1'
  | 'VARIABLE_DEFS2'
  | 'VARIABLE_DEFS3'
  | 'VARIABLE_DEFS4'
  | 'VARIABLE_DEFS5'
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
  | 'WFSTATUS'
  | 'CAMPAIGN_LINES'
  | 'DELLIST'
  | 'ORGLOGOID'
  | 'FICHE_DOC_NUMBER'
  | 'FICHE_AUXIL_CODE'
  | 'FICHE_AUTH_CODE'
  | 'CL_AUXIL_CODE2'
  | 'CL_AUXIL_CODE3'
  | 'CL_AUXIL_CODE4'
  | 'CL_AUXIL_CODE5'
  | 'CL_AUTH_CODE'
  | 'VARIABLE_DEFS6'
  | 'VARIABLE_DEFS7'
  | 'VARIABLE_DEFS8'
  | 'VARIABLE_DEFS9'
  | 'VARIABLE_DEFS10'
  | 'GUID'
  | 'VARIABLE_DEFS11'
  | 'VARIABLE_DEFS12'
  | 'VARIABLE_DEFS13'
  | 'VARIABLE_DEFS14'
  | 'VARIABLE_DEFS15'
  | 'VARIABLE_DEFS16'
  | 'VARIABLE_DEFS17'
  | 'VARIABLE_DEFS18'
  | 'VARIABLE_DEFS19'
  | 'VARIABLE_DEFS20';

/**
 * Type-safe sort specification for PurchaseCampaigns queries
 */
export type PurchaseCampaignsSortSpec =
  | [PurchaseCampaignsField]
  | [PurchaseCampaignsField, 'asc' | 'desc']
  | [PurchaseCampaignsField[], 'asc' | 'desc']
  | [PurchaseCampaignsField[]];

/**
 * Type-safe query options for PurchaseCampaigns entities
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
export interface PurchaseCampaignsQueryOptions
  extends Omit<QueryOptions<PurchaseCampaignsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: PurchaseCampaignsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: PurchaseCampaignsSortSpec;
}

/**
 * Search criteria for PurchaseCampaigns entities
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
export interface PurchaseCampaignsSearchCriteria {
  internalReference?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  cardType?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  begDate?: StringFieldValue;
  endDate?: StringFieldValue;
  priorityGrp?: StringFieldValue;
  priority?: NumberFieldValue;
  dontFixLines?: NumberFieldValue;
  clientCode?: StringFieldValue;
  clAuxilCode?: StringFieldValue;
  tradingGrp?: StringFieldValue;
  payPlanCode?: StringFieldValue;
  ppGroupCode?: StringFieldValue;
  townCode?: StringFieldValue;
  districtCode?: StringFieldValue;
  cityCode?: StringFieldValue;
  countryCode?: StringFieldValue;
  variableDefs1?: StringFieldValue;
  variableDefs2?: StringFieldValue;
  variableDefs3?: StringFieldValue;
  variableDefs4?: StringFieldValue;
  variableDefs5?: StringFieldValue;
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
  wfstatus?: NumberFieldValue;
  campaignLines?: DateFieldValue;
  dellist?: StringFieldValue;
  orglogoid?: StringFieldValue;
  ficheDocNumber?: StringFieldValue;
  ficheAuxilCode?: StringFieldValue;
  ficheAuthCode?: StringFieldValue;
  clAuxilCode2?: StringFieldValue;
  clAuxilCode3?: StringFieldValue;
  clAuxilCode4?: StringFieldValue;
  clAuxilCode5?: StringFieldValue;
  clAuthCode?: StringFieldValue;
  variableDefs6?: StringFieldValue;
  variableDefs7?: StringFieldValue;
  variableDefs8?: StringFieldValue;
  variableDefs9?: StringFieldValue;
  variableDefs10?: StringFieldValue;
  guid?: StringFieldValue;
  variableDefs11?: StringFieldValue;
  variableDefs12?: StringFieldValue;
  variableDefs13?: StringFieldValue;
  variableDefs14?: StringFieldValue;
  variableDefs15?: StringFieldValue;
  variableDefs16?: StringFieldValue;
  variableDefs17?: StringFieldValue;
  variableDefs18?: StringFieldValue;
  variableDefs19?: StringFieldValue;
  variableDefs20?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for PurchaseCampaigns entities
 */
export interface PurchaseCampaignsAnalytics {
  total: number;
  // Add PurchaseCampaigns-specific analytics fields
}
