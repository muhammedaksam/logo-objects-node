import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

// Static definition for a generic Items type if it's causing issues
export interface Items {
  [key: string]: unknown;
}

/**
 * Interface for KeyValueParameter
 */
export interface KeyValueParameter {
  Name?: string;
  Value?: Object;
}

/**
 * Interface for RSCollection[RS_VariantAsgnsXML]
 */
export interface RscollectionrsVariantasgnsxml {
  Meta?: Meta;
  items?: RsVariantasgnsxml[];
}

/**
 * Interface for RSCollection[RS_ItemUnitAsgn]
 */
export interface RscollectionrsItemunitasgn {
  Meta?: Meta;
  items?: RsItemunitasgn[];
}

/**
 * Interface for RSCollection[RS_BarCodeXML]
 */
export interface RscollectionrsBarcodexml {
  Meta?: Meta;
  items?: RsBarcodexml[];
}

/**
 * Interface for RSCollection[RS_ItemInvenXML]
 */
export interface RscollectionrsIteminvenxml {
  Meta?: Meta;
  items?: RsIteminvenxml[];
}

/**
 * Interface for RSCollection[RS_ItemFactoryXML]
 */
export interface RscollectionrsItemfactoryxml {
  Meta?: Meta;
  items?: RsItemfactoryxml[];
}

/**
 * Interface for RSCollection[RS_GLPostXML]
 */
export interface RscollectionrsGlpostxml {
  Meta?: Meta;
  items?: RsGlpostxml[];
}

/**
 * Interface for RSCollection[RS_ItemSuppXML]
 */
export interface RscollectionrsItemsuppxml {
  Meta?: Meta;
  items?: RsItemsuppxml[];
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
 * RsVariantasgnsxml transaction line item
 *
 * Represents individual transaction records within a Variants collection.
 */
export interface RsVariantasgnsxml extends BaseEntity {
  ITEMREF?: number;
  VARIANTREF?: number;
  CHARCODEREF?: number;
  CHARCODE?: string;
  CHARDEF?: string;
  CHARVALREF?: number;
  CHARVAL?: string;
  LINENR?: number;
  SITEID?: number;
  ORGLOGOID?: string;
}

/**
 * RsItemunitasgn transaction line item
 *
 * Represents individual transaction records within a Variants collection.
 */
export interface RsItemunitasgn extends BaseEntity {
  UNITLINEREF?: number;
  UNIT_CODE?: string;
  BARCODE?: string;
  USEF_MTRLCLASS?: number;
  USEF_PURCHCLAS?: number;
  USEF_SALESCLAS?: number;
  MTRL_PRIORITY?: number;
  PURCH_PRIORTY?: number;
  SALES_PRIORITY?: number;
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
  GROSS_VOLUME?: number;
  GROSS_WEIGHT?: number;
  GROSSVOLREF?: number;
  GROSSWGHTREF?: number;
  CONV_FACT1?: number;
  CONV_FACT2?: number;
  EXT_ACC_FLAGS?: number;
  WIDTH_CODE?: string;
  LENGTH_CODE?: string;
  HEIGHT_CODE?: string;
  AREA_CODE?: string;
  VOLUME_CODE?: string;
  WEIGHT_CODE?: string;
  GROSS_VOL_CODE?: string;
  GROSS_WGHT_CODE?: string;
  BARCODE2?: string;
  BARCODE3?: string;
  WITHUNIT_BARCODE?: string;
  WBARCODESHIFT?: number;
  BARCODE_LIST?: RscollectionrsBarcodexml;
  GLOBAL_ID?: string;
  FORMULA?: string;
}

/**
 * RsBarcodexml transaction line item
 *
 * Represents individual transaction records within a Variants collection.
 */
export interface RsBarcodexml extends BaseEntity {
  ITMUNITAREF?: number;
  ITEMREF?: number;
  VARIANTREF?: number;
  UNITLINEREF?: number;
  LINENR?: number;
  BARCODE?: string;
  TYPE?: number;
  WBARCODESHIFT?: number;
  GLOBAL_ID?: string;
}

/**
 * RsIteminvenxml transaction line item
 *
 * Represents individual transaction records within a Variants collection.
 */
export interface RsIteminvenxml extends BaseEntity {
  WH_NUMBER?: number;
  ITEMREF?: number;
  MIN_LEVEL?: number;
  MAX_LEVEL?: number;
  SAFETY_LEVEL?: number;
  LOCATION_CODE?: string;
  LOCATIONREF?: number;
  PERIOD_CLOSE_DATE?: string;
  ABC_CODE?: number;
  IO_FLAG?: number;
  MIN_LEVEL_FLAG?: number;
  MAX_LEVEL_FLAG?: number;
  SAFETY_LEVEL_FLAG?: number;
  BACKORDER_FLAG?: number;
  CLAS?: number;
  OUT_FLAG?: number;
}

/**
 * RsItemfactoryxml transaction line item
 *
 * Represents individual transaction records within a Variants collection.
 */
export interface RsItemfactoryxml extends BaseEntity {
  FACTORYNR?: number;
  ITEMREF?: number;
  SPECIALIZED?: number;
  PROCURECLASS?: number;
  LOWLEVELCODE?: number;
  DIVLOTSIZE?: number;
  MRPCNTRL?: number;
  PLANPOLICY?: number;
  LOTSIZINGMTD?: number;
  FIXEDLOTSIZE?: number;
  YIELD?: number;
  MINORDERQTY?: number;
  MAXORDERQTY?: number;
  MULTORDERQTY?: number;
  MINORDERDAY?: number;
  MAXORDERDAY?: number;
  REORDERPOINT?: number;
  AUTOMTRISSUE?: number;
  PLANNERREF?: string;
  BUYERREF?: string;
  SELADMINREF?: string;
  CSTANALYSTREF?: string;
  DEFSERILOTNO?: string;
  AUTOLOTOUTMTD?: number;
  LOTPARTY?: number;
  OUTLOTSIZE?: number;
  COUNTFORMPS?: number;
  LOT_SIZING_MTD2?: number;
  FIXED_LOT_SIZE2?: number;
  YIELD2?: number;
  MIN_ORDER_QTY2?: number;
  MAX_ORDER_QTY2?: number;
  MULT_ORDER_QTY2?: number;
  FACTORYNAME?: string;
  CLAS?: number;
  DOMINANTFLAG?: number;
  DOMINANTREF?: number;
  DOMINANTCODE?: string;
  UPDATED?: number;
  PROCURE_INVEN?: number;
}

/**
 * RsGlpostxml transaction line item
 *
 * Represents individual transaction records within a Variants collection.
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
 * RsItemsuppxml transaction line item
 *
 * Represents individual transaction records within a Variants collection.
 */
export interface RsItemsuppxml extends BaseEntity {
  ITEMREF?: number;
  SUPPLY_TYPE?: number;
  PRIORITY?: number;
  LINE_NO?: number;
  CLIENTREF?: number;
  TRADING_GRP?: string;
  CL_CARD_TYPE?: number;
  QCC_CHECK?: number;
  LEAD_TIME?: number;
  MAX_QUANTITY?: number;
  MIN_QUANTITY?: number;
  BEG_DATE?: string;
  SPECIALIZED?: number;
  ICUST_SUP_CODE?: string;
  ICUST_SUP_NAME?: string;
  QTY_DEP_LEAD_TIME?: number;
  ARP_CODE?: string;
  PACKETREF?: number;
  PACKET_CODE?: string;
  PACKAGING_AMNT?: number;
  PACKAGINGUOMREF?: number;
  UNIT_CODE?: string;
  PACKET_USE_TYPE?: number;
  UNITSET_CODE?: string;
  ORD_PERC?: number;
  ORD_FREC?: number;
  VARIANT_REF?: number;
}

/**
 * Variants entity interface based on swagger definition
 */
export interface Variants extends BaseEntity {
  ITEMREF?: number;
  CARDTYPE?: number;
  CODE?: string;
  NAME?: string;
  NAME2?: string;
  ACTIVE?: number;
  SPECODE?: string;
  SPECODE2?: string;
  SPECODE3?: string;
  SPECODE4?: string;
  SPECODE5?: string;
  STGRPCODE?: string;
  PRODUCERCODE?: string;
  CYPHCODE?: string;
  UNITSETREF?: number;
  UNITSETCODE?: string;
  QCCSETREF?: number;
  QCCSETCODE?: string;
  GTIP_CODE?: string;
  SITEID?: number;
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
  VRNT_ASSIGNS?: RscollectionrsVariantasgnsxml;
  VALDELLIST?: string;
  IREF?: number;
  ICODE?: string;
  IDEF?: string;
  XBUFS?: string;
  FLDALS?: string;
  TEXTCHG?: number;
  ITEXT?: string;
  UNITLIST?: RscollectionrsItemunitasgn;
  ASGN_INTERNAL_REFERENCE?: number;
  ASGN_ITEMREF?: number;
  ASGN_LINENR?: number;
  ASGN_UNITLINEREF?: number;
  ASGN_BARCODE?: string;
  ASGN_MTRLCLAS?: number;
  ASGN_PURCHCLAS?: number;
  ASGN_SALESCLAS?: number;
  ASGN_MTRLPRIORITY?: number;
  ASGN_PURCHPRIORTY?: number;
  ASGN_SALESPRIORITY?: number;
  ASGN_WIDTH?: number;
  ASGN_LENGTH?: number;
  ASGN_HEIGHT?: number;
  ASGN_AREA?: number;
  ASGN_VOLUME?: number;
  ASGN_WEIGHT?: number;
  ASGN_WIDTHREF?: number;
  ASGN_LENGTHREF?: number;
  ASGN_HEIGHTREF?: number;
  ASGN_AREAREF?: number;
  ASGN_VOLUMEREF?: number;
  ASGN_WEIGHTREF?: number;
  ASGN_GROSSVOLUME?: number;
  ASGN_GROSSWEIGHT?: number;
  ASGN_GROSSVOLREF?: number;
  ASGN_GROSSWGHTREF?: number;
  ASGN_CONVFACT1?: number;
  ASGN_CONVFACT2?: number;
  ASGN_EXTACCESSFLAG?: number;
  ASGN_SITEID?: number;
  ASGN_XML_ATTRIBUTE?: number;
  ASGN_DATA_REFERENCE?: number;
  ASGN_BARCODE2?: string;
  ASGN_BARCODE3?: string;
  ASGN_WBARCODE?: string;
  ASGN_WBARCODESHIFT?: number;
  ASGN_VARIANTREF?: number;
  INFO_INTERNAL_REFERENCE?: number;
  INFO_CODE?: string;
  INFO_NAME?: string;
  INFO_UNITSETREF?: number;
  INFO_LINENR?: number;
  INFO_MAINUNIT?: number;
  INFO_CONVFACT1?: number;
  INFO_CONVFACT2?: number;
  INFO_WIDTH?: number;
  INFO_LENGTH?: number;
  INFO_HEIGHT?: number;
  INFO_AREA?: number;
  INFO_VOLUME?: number;
  INFO_WEIGHT?: number;
  INFO_WIDTHREF?: number;
  INFO_LENGTHREF?: number;
  INFO_HEIGHTREF?: number;
  INFO_AREAREF?: number;
  INFO_VOLUMEREF?: number;
  INFO_WEIGHTREF?: number;
  INFO_DIVUNIT?: number;
  WIDTHCODE?: string;
  LENGTHCODE?: string;
  HEIGHTCODE?: string;
  AREACODE?: string;
  VOLUMECODE?: string;
  WEIGHTCODE?: string;
  GROSSVOLCODE?: string;
  GROSSWGHTCODE?: string;
  MAINUNIT?: string;
  XINFOFLAGS1?: number;
  XINFOFLAGS2?: number;
  XINFOFLAGS3?: number;
  XINFOFLAGS4?: number;
  XINFOFLAGS5?: number;
  XINFOFLAGS6?: number;
  XINFOFLAGS7?: number;
  XINFOFLAGS8?: number;
  XINFOFLAGS9?: number;
  XINFOFLAGS10?: number;
  INFOCHGD1?: number;
  INFOCHGD2?: number;
  INFOCHGD3?: number;
  INFOCHGD4?: number;
  INFOCHGD5?: number;
  INFOCHGD6?: number;
  INFOCHGD7?: number;
  INFOCHGD8?: number;
  INFOCHGD9?: number;
  INFOCHGD10?: number;
  USETREF?: number;
  SELINDEX?: number;
  SELREF?: number;
  ALWLST?: number;
  SELLST?: string;
  SELECTED?: number;
  INVENLIST?: string;
  WH_PARAMS?: RscollectionrsIteminvenxml;
  INVENDEFDELLIST?: string;
  FACTORY_PARAMS?: RscollectionrsItemfactoryxml;
  CTYP?: number;
  TRACKTYP?: number;
  LOCTRACK?: number;
  ITEMPRICELIST?: string;
  VRNTPRICELIST?: string;
  ACCLIST?: RscollectionrsGlpostxml;
  SUPPLIST?: RscollectionrsItemsuppxml;
  ORGLOGOID?: string;
  PORD_AMOUNT_TOLERANCE?: number;
  SORD_AMOUNT_TOLERANCE?: number;
  PAYERID?: string;
}

/**
 * Union type of all Variants field names for type-safe field selection and sorting
 */
export type VariantsField =
  | 'INTERNAL_REFERENCE'
  | 'ITEMREF'
  | 'CARDTYPE'
  | 'CODE'
  | 'NAME'
  | 'NAME2'
  | 'ACTIVE'
  | 'SPECODE'
  | 'SPECODE2'
  | 'SPECODE3'
  | 'SPECODE4'
  | 'SPECODE5'
  | 'STGRPCODE'
  | 'PRODUCERCODE'
  | 'CYPHCODE'
  | 'UNITSETREF'
  | 'UNITSETCODE'
  | 'QCCSETREF'
  | 'QCCSETCODE'
  | 'TEXTINC'
  | 'GTIP_CODE'
  | 'SITEID'
  | 'XML_ATTRIBUTE'
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
  | 'VRNT_ASSIGNS'
  | 'VALDELLIST'
  | 'IREF'
  | 'ICODE'
  | 'IDEF'
  | 'XBUFS'
  | 'FLDALS'
  | 'TEXTCHG'
  | 'ITEXT'
  | 'UNITLIST'
  | 'ASGN_INTERNAL_REFERENCE'
  | 'ASGN_ITEMREF'
  | 'ASGN_LINENR'
  | 'ASGN_UNITLINEREF'
  | 'ASGN_BARCODE'
  | 'ASGN_MTRLCLAS'
  | 'ASGN_PURCHCLAS'
  | 'ASGN_SALESCLAS'
  | 'ASGN_MTRLPRIORITY'
  | 'ASGN_PURCHPRIORTY'
  | 'ASGN_SALESPRIORITY'
  | 'ASGN_WIDTH'
  | 'ASGN_LENGTH'
  | 'ASGN_HEIGHT'
  | 'ASGN_AREA'
  | 'ASGN_VOLUME'
  | 'ASGN_WEIGHT'
  | 'ASGN_WIDTHREF'
  | 'ASGN_LENGTHREF'
  | 'ASGN_HEIGHTREF'
  | 'ASGN_AREAREF'
  | 'ASGN_VOLUMEREF'
  | 'ASGN_WEIGHTREF'
  | 'ASGN_GROSSVOLUME'
  | 'ASGN_GROSSWEIGHT'
  | 'ASGN_GROSSVOLREF'
  | 'ASGN_GROSSWGHTREF'
  | 'ASGN_CONVFACT1'
  | 'ASGN_CONVFACT2'
  | 'ASGN_EXTACCESSFLAG'
  | 'ASGN_SITEID'
  | 'ASGN_XML_ATTRIBUTE'
  | 'ASGN_DATA_REFERENCE'
  | 'ASGN_BARCODE2'
  | 'ASGN_BARCODE3'
  | 'ASGN_WBARCODE'
  | 'ASGN_WBARCODESHIFT'
  | 'ASGN_VARIANTREF'
  | 'INFO_INTERNAL_REFERENCE'
  | 'INFO_CODE'
  | 'INFO_NAME'
  | 'INFO_UNITSETREF'
  | 'INFO_LINENR'
  | 'INFO_MAINUNIT'
  | 'INFO_CONVFACT1'
  | 'INFO_CONVFACT2'
  | 'INFO_WIDTH'
  | 'INFO_LENGTH'
  | 'INFO_HEIGHT'
  | 'INFO_AREA'
  | 'INFO_VOLUME'
  | 'INFO_WEIGHT'
  | 'INFO_WIDTHREF'
  | 'INFO_LENGTHREF'
  | 'INFO_HEIGHTREF'
  | 'INFO_AREAREF'
  | 'INFO_VOLUMEREF'
  | 'INFO_WEIGHTREF'
  | 'INFO_DIVUNIT'
  | 'WIDTHCODE'
  | 'LENGTHCODE'
  | 'HEIGHTCODE'
  | 'AREACODE'
  | 'VOLUMECODE'
  | 'WEIGHTCODE'
  | 'GROSSVOLCODE'
  | 'GROSSWGHTCODE'
  | 'MAINUNIT'
  | 'XINFOFLAGS1'
  | 'XINFOFLAGS2'
  | 'XINFOFLAGS3'
  | 'XINFOFLAGS4'
  | 'XINFOFLAGS5'
  | 'XINFOFLAGS6'
  | 'XINFOFLAGS7'
  | 'XINFOFLAGS8'
  | 'XINFOFLAGS9'
  | 'XINFOFLAGS10'
  | 'INFOCHGD1'
  | 'INFOCHGD2'
  | 'INFOCHGD3'
  | 'INFOCHGD4'
  | 'INFOCHGD5'
  | 'INFOCHGD6'
  | 'INFOCHGD7'
  | 'INFOCHGD8'
  | 'INFOCHGD9'
  | 'INFOCHGD10'
  | 'USETREF'
  | 'SELINDEX'
  | 'SELREF'
  | 'ALWLST'
  | 'SELLST'
  | 'SELECTED'
  | 'INVENLIST'
  | 'WH_PARAMS'
  | 'INVENDEFDELLIST'
  | 'FACTORY_PARAMS'
  | 'CTYP'
  | 'TRACKTYP'
  | 'LOCTRACK'
  | 'ITEMPRICELIST'
  | 'VRNTPRICELIST'
  | 'ACCLIST'
  | 'SUPPLIST'
  | 'ORGLOGOID'
  | 'PORD_AMOUNT_TOLERANCE'
  | 'SORD_AMOUNT_TOLERANCE'
  | 'PAYERID';

/**
 * Type-safe sort specification for Variants queries
 */
export type VariantsSortSpec =
  | [VariantsField]
  | [VariantsField, 'asc' | 'desc']
  | [VariantsField[], 'asc' | 'desc']
  | [VariantsField[]];

/**
 * Type-safe query options for Variants entities
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
export interface VariantsQueryOptions extends Omit<QueryOptions<VariantsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: VariantsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: VariantsSortSpec;
}

/**
 * Search criteria for Variants entities
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
export interface VariantsSearchCriteria {
  internalReference?: NumberFieldValue;
  itemref?: NumberFieldValue;
  cardtype?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  name2?: StringFieldValue;
  active?: NumberFieldValue;
  specode?: StringFieldValue;
  specode2?: StringFieldValue;
  specode3?: StringFieldValue;
  specode4?: StringFieldValue;
  specode5?: StringFieldValue;
  stgrpcode?: StringFieldValue;
  producercode?: StringFieldValue;
  cyphcode?: StringFieldValue;
  unitsetref?: NumberFieldValue;
  unitsetcode?: StringFieldValue;
  qccsetref?: NumberFieldValue;
  qccsetcode?: StringFieldValue;
  textinc?: NumberFieldValue;
  gtipCode?: StringFieldValue;
  siteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
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
  vrntAssigns?: DateFieldValue;
  valdellist?: StringFieldValue;
  iref?: NumberFieldValue;
  icode?: StringFieldValue;
  idef?: StringFieldValue;
  xbufs?: StringFieldValue;
  fldals?: StringFieldValue;
  textchg?: NumberFieldValue;
  itext?: StringFieldValue;
  unitlist?: DateFieldValue;
  asgnInternalReference?: NumberFieldValue;
  asgnItemref?: NumberFieldValue;
  asgnLinenr?: NumberFieldValue;
  asgnUnitlineref?: NumberFieldValue;
  asgnBarcode?: StringFieldValue;
  asgnMtrlclas?: NumberFieldValue;
  asgnPurchclas?: NumberFieldValue;
  asgnSalesclas?: NumberFieldValue;
  asgnMtrlpriority?: NumberFieldValue;
  asgnPurchpriorty?: NumberFieldValue;
  asgnSalespriority?: NumberFieldValue;
  asgnWidth?: NumberFieldValue;
  asgnLength?: NumberFieldValue;
  asgnHeight?: NumberFieldValue;
  asgnArea?: NumberFieldValue;
  asgnVolume?: NumberFieldValue;
  asgnWeight?: NumberFieldValue;
  asgnWidthref?: NumberFieldValue;
  asgnLengthref?: NumberFieldValue;
  asgnHeightref?: NumberFieldValue;
  asgnArearef?: NumberFieldValue;
  asgnVolumeref?: NumberFieldValue;
  asgnWeightref?: NumberFieldValue;
  asgnGrossvolume?: NumberFieldValue;
  asgnGrossweight?: NumberFieldValue;
  asgnGrossvolref?: NumberFieldValue;
  asgnGrosswghtref?: NumberFieldValue;
  asgnConvfact1?: NumberFieldValue;
  asgnConvfact2?: NumberFieldValue;
  asgnExtaccessflag?: NumberFieldValue;
  asgnSiteid?: NumberFieldValue;
  asgnXmlAttribute?: NumberFieldValue;
  asgnDataReference?: NumberFieldValue;
  asgnBarcode2?: StringFieldValue;
  asgnBarcode3?: StringFieldValue;
  asgnWbarcode?: StringFieldValue;
  asgnWbarcodeshift?: NumberFieldValue;
  asgnVariantref?: NumberFieldValue;
  infoInternalReference?: NumberFieldValue;
  infoCode?: StringFieldValue;
  infoName?: StringFieldValue;
  infoUnitsetref?: NumberFieldValue;
  infoLinenr?: NumberFieldValue;
  infoMainunit?: NumberFieldValue;
  infoConvfact1?: NumberFieldValue;
  infoConvfact2?: NumberFieldValue;
  infoWidth?: NumberFieldValue;
  infoLength?: NumberFieldValue;
  infoHeight?: NumberFieldValue;
  infoArea?: NumberFieldValue;
  infoVolume?: NumberFieldValue;
  infoWeight?: NumberFieldValue;
  infoWidthref?: NumberFieldValue;
  infoLengthref?: NumberFieldValue;
  infoHeightref?: NumberFieldValue;
  infoArearef?: NumberFieldValue;
  infoVolumeref?: NumberFieldValue;
  infoWeightref?: NumberFieldValue;
  infoDivunit?: NumberFieldValue;
  widthcode?: StringFieldValue;
  lengthcode?: StringFieldValue;
  heightcode?: StringFieldValue;
  areacode?: StringFieldValue;
  volumecode?: StringFieldValue;
  weightcode?: StringFieldValue;
  grossvolcode?: StringFieldValue;
  grosswghtcode?: StringFieldValue;
  mainunit?: StringFieldValue;
  xinfoflags1?: NumberFieldValue;
  xinfoflags2?: NumberFieldValue;
  xinfoflags3?: NumberFieldValue;
  xinfoflags4?: NumberFieldValue;
  xinfoflags5?: NumberFieldValue;
  xinfoflags6?: NumberFieldValue;
  xinfoflags7?: NumberFieldValue;
  xinfoflags8?: NumberFieldValue;
  xinfoflags9?: NumberFieldValue;
  xinfoflags10?: NumberFieldValue;
  infochgd1?: NumberFieldValue;
  infochgd2?: NumberFieldValue;
  infochgd3?: NumberFieldValue;
  infochgd4?: NumberFieldValue;
  infochgd5?: NumberFieldValue;
  infochgd6?: NumberFieldValue;
  infochgd7?: NumberFieldValue;
  infochgd8?: NumberFieldValue;
  infochgd9?: NumberFieldValue;
  infochgd10?: NumberFieldValue;
  usetref?: NumberFieldValue;
  selindex?: NumberFieldValue;
  selref?: NumberFieldValue;
  alwlst?: NumberFieldValue;
  sellst?: StringFieldValue;
  selected?: NumberFieldValue;
  invenlist?: StringFieldValue;
  whParams?: DateFieldValue;
  invendefdellist?: StringFieldValue;
  factoryParams?: DateFieldValue;
  ctyp?: NumberFieldValue;
  tracktyp?: NumberFieldValue;
  loctrack?: NumberFieldValue;
  itempricelist?: StringFieldValue;
  vrntpricelist?: StringFieldValue;
  acclist?: DateFieldValue;
  supplist?: DateFieldValue;
  orglogoid?: StringFieldValue;
  pordAmountTolerance?: NumberFieldValue;
  sordAmountTolerance?: NumberFieldValue;
  payerid?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Variants entities
 */
export interface VariantsAnalytics {
  total: number;
  // Add Variants-specific analytics fields
}
