import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_ExcListNodeXML]
 */
export interface RscollectionrsExclistnodexml {
  Meta?: Meta;
  items?: RsExclistnodexml[];
}

/**
 * Interface for RSCollection[RS_ExcListNodeValXM]
 */
export interface RscollectionrsExclistnodevalxm {
  Meta?: Meta;
  items?: RsExclistnodevalxm[];
}

/**
 * Interface for RSCollection[RS_PrcDivLstXML]
 */
export interface RscollectionrsPrcdivlstxml {
  Meta?: Meta;
  items?: RsPrcdivlstxml[];
}

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
 * RsExclistnodexml transaction line item
 *
 * Represents individual transaction records within a PurchasedServicePrices collection.
 */
export interface RsExclistnodexml extends BaseEntity {
  EINFOSZ?: number;
  EPOLICY?: number;
  NUMOFVAL?: number;
  CHAR_CODE?: string;
  VALREFSLIST?: RscollectionrsExclistnodevalxm;
}

/**
 * RsExclistnodevalxm transaction line item
 *
 * Represents individual transaction records within a PurchasedServicePrices collection.
 */
export interface RsExclistnodevalxm extends BaseEntity {
  VALREF?: number;
  VALCODE?: string;
}

/**
 * RsPrcdivlstxml transaction line item
 *
 * Represents individual transaction records within a PurchasedServicePrices collection.
 */
export interface RsPrcdivlstxml extends BaseEntity {
  PARENTPRCREF?: number;
  DIVCODES?: string;
}

/**
 * PurchasedServicePrices entity interface based on swagger definition
 */
export interface PurchasedServicePrices extends BaseEntity {
  CARD_CODE?: string;
  OWNER_TYPE?: number;
  OWNER_CODE?: string;
  CARDREF?: number;
  ARP_CODE?: string;
  ARP_AUXCODE?: string;
  PAYMENT_CODE?: string;
  PAYPLANREF?: number;
  PRICE?: number;
  UNIT_CODE?: string;
  UOMREF?: number;
  VAT_INCL?: number;
  CURRENCY?: number;
  PRIORITY?: number;
  MTRL_TYPE?: number;
  LEAD_TIME?: number;
  DATE_STARTED?: string;
  DATE_ENDED?: string;
  CONDITION?: string;
  SHIPMENT_TYPE?: string;
  SPECIALIZED?: number;
  SRVCODE?: string;
  UNITSETCODE?: string;
  EXT_ACC_FLAGS?: number;
  UNIT_CONVERT?: number;
  CYPH_CODE?: string;
  ORGLOGOID?: string;
  TRADING_GRP?: string;
  BEG_TIME?: number;
  END_TIME?: number;
  DEFINITION?: string;
  GRPCODE?: string;
  GENIUSPAYTYPE?: string;
  UPDATE_CHILD_PRC?: number;
  GEN_PAY_TYPE?: string;
  GEN_SHP_NR?: number;
  ORDER_NR?: number;
  PRCALTER_TYP1?: number;
  PRCALTER_LMT1?: number;
  PRCALTER_TYP2?: number;
  PRCALTER_LMT2?: number;
  PRCALTER_TYP3?: number;
  PRCALTER_LMT3?: number;
  ACTIVE?: number;
  VGEN_DATA_REFERENCE?: number;
  VGENLIST?: string;
  VGENXMLLIST?: RscollectionrsExclistnodexml;
  BRANCH?: number;
  COST_VALUE?: number;
  ALL_DIVISIONS?: number;
  DIVISION_LIST?: RscollectionrsPrcdivlstxml;
  DIVISION_STR?: string;
  ARP_AUXCODE2?: string;
  ARP_AUXCODE3?: string;
  ARP_AUXCODE4?: string;
  ARP_AUXCODE5?: string;
  ARP_TRDGRP?: string;
  ARP_CYPHCODE?: string;
  GLOBAL_ID?: string;
  VARIANT_CODE?: string;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  MARKREF?: number;
  MARK_CODE?: string;
  TRANS_SPE_CODE?: string;
  GUID?: string;
}

/**
 * Union type of all PurchasedServicePrices field names for type-safe field selection and sorting
 */
export type PurchasedServicePricesField =
  | 'INTERNAL_REFERENCE'
  | 'CARD_CODE'
  | 'OWNER_TYPE'
  | 'OWNER_CODE'
  | 'CARDREF'
  | 'ARP_CODE'
  | 'ARP_AUXCODE'
  | 'PAYMENT_CODE'
  | 'PAYPLANREF'
  | 'PRICE'
  | 'UNIT_CODE'
  | 'UOMREF'
  | 'VAT_INCL'
  | 'CURRENCY'
  | 'PRIORITY'
  | 'MTRL_TYPE'
  | 'LEAD_TIME'
  | 'DATE_STARTED'
  | 'DATE_ENDED'
  | 'CONDITION'
  | 'SHIPMENT_TYPE'
  | 'SPECIALIZED'
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
  | 'SRVCODE'
  | 'UNITSETCODE'
  | 'XML_ATTRIBUTE'
  | 'EXT_ACC_FLAGS'
  | 'UNIT_CONVERT'
  | 'CYPH_CODE'
  | 'ORGLOGOID'
  | 'TRADING_GRP'
  | 'BEG_TIME'
  | 'END_TIME'
  | 'DEFINITION'
  | 'GRPCODE'
  | 'GENIUSPAYTYPE'
  | 'UPDATE_CHILD_PRC'
  | 'GEN_PAY_TYPE'
  | 'GEN_SHP_NR'
  | 'ORDER_NR'
  | 'PRCALTER_TYP1'
  | 'PRCALTER_LMT1'
  | 'PRCALTER_TYP2'
  | 'PRCALTER_LMT2'
  | 'PRCALTER_TYP3'
  | 'PRCALTER_LMT3'
  | 'ACTIVE'
  | 'VGEN_DATA_REFERENCE'
  | 'VGENLIST'
  | 'VGENXMLLIST'
  | 'BRANCH'
  | 'COST_VALUE'
  | 'ALL_DIVISIONS'
  | 'DIVISION_LIST'
  | 'DIVISION_STR'
  | 'ARP_AUXCODE2'
  | 'ARP_AUXCODE3'
  | 'ARP_AUXCODE4'
  | 'ARP_AUXCODE5'
  | 'ARP_TRDGRP'
  | 'ARP_CYPHCODE'
  | 'GLOBAL_ID'
  | 'VARIANT_CODE'
  | 'PROJECTREF'
  | 'PROJECT_CODE'
  | 'MARKREF'
  | 'MARK_CODE'
  | 'TRANS_SPE_CODE'
  | 'GUID';

/**
 * Type-safe sort specification for PurchasedServicePrices queries
 */
export type PurchasedServicePricesSortSpec =
  | [PurchasedServicePricesField]
  | [PurchasedServicePricesField, 'asc' | 'desc']
  | [PurchasedServicePricesField[], 'asc' | 'desc']
  | [PurchasedServicePricesField[]];

/**
 * Type-safe query options for PurchasedServicePrices entities
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
export interface PurchasedServicePricesQueryOptions
  extends Omit<QueryOptions<PurchasedServicePricesField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: PurchasedServicePricesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: PurchasedServicePricesSortSpec;
}

/**
 * Search criteria for PurchasedServicePrices entities
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
export interface PurchasedServicePricesSearchCriteria {
  internalReference?: NumberFieldValue;
  cardCode?: StringFieldValue;
  ownerType?: NumberFieldValue;
  ownerCode?: StringFieldValue;
  cardref?: NumberFieldValue;
  arpCode?: StringFieldValue;
  arpAuxcode?: StringFieldValue;
  paymentCode?: StringFieldValue;
  payplanref?: NumberFieldValue;
  price?: NumberFieldValue;
  unitCode?: StringFieldValue;
  uomref?: NumberFieldValue;
  vatIncl?: NumberFieldValue;
  currency?: NumberFieldValue;
  priority?: NumberFieldValue;
  mtrlType?: NumberFieldValue;
  leadTime?: NumberFieldValue;
  dateStarted?: StringFieldValue;
  dateEnded?: StringFieldValue;
  condition?: StringFieldValue;
  shipmentType?: StringFieldValue;
  specialized?: NumberFieldValue;
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
  srvcode?: StringFieldValue;
  unitsetcode?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  extAccFlags?: NumberFieldValue;
  unitConvert?: NumberFieldValue;
  cyphCode?: StringFieldValue;
  orglogoid?: StringFieldValue;
  tradingGrp?: StringFieldValue;
  begTime?: NumberFieldValue;
  endTime?: NumberFieldValue;
  definition?: StringFieldValue;
  grpcode?: StringFieldValue;
  geniuspaytype?: StringFieldValue;
  updateChildPrc?: NumberFieldValue;
  genPayType?: StringFieldValue;
  genShpNr?: NumberFieldValue;
  orderNr?: NumberFieldValue;
  prcalterTyp1?: NumberFieldValue;
  prcalterLmt1?: NumberFieldValue;
  prcalterTyp2?: NumberFieldValue;
  prcalterLmt2?: NumberFieldValue;
  prcalterTyp3?: NumberFieldValue;
  prcalterLmt3?: NumberFieldValue;
  active?: NumberFieldValue;
  vgenDataReference?: NumberFieldValue;
  vgenlist?: StringFieldValue;
  vgenxmllist?: DateFieldValue;
  branch?: NumberFieldValue;
  costValue?: NumberFieldValue;
  allDivisions?: NumberFieldValue;
  divisionList?: DateFieldValue;
  divisionStr?: StringFieldValue;
  arpAuxcode2?: StringFieldValue;
  arpAuxcode3?: StringFieldValue;
  arpAuxcode4?: StringFieldValue;
  arpAuxcode5?: StringFieldValue;
  arpTrdgrp?: StringFieldValue;
  arpCyphcode?: StringFieldValue;
  globalId?: StringFieldValue;
  variantCode?: StringFieldValue;
  projectref?: NumberFieldValue;
  projectCode?: StringFieldValue;
  markref?: NumberFieldValue;
  markCode?: StringFieldValue;
  transSpeCode?: StringFieldValue;
  guid?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for PurchasedServicePrices entities
 */
export interface PurchasedServicePricesAnalytics {
  total: number;
  // Add PurchasedServicePrices-specific analytics fields
}
