import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_ItemFactoryXML]
 */
export interface RscollectionrsItemfactoryxml {
  Meta?: Meta;
  items?: RsItemfactoryxml[];
}

/**
 * Interface for RSCollection[RS_ItemInvenXML]
 */
export interface RscollectionrsIteminvenxml {
  Meta?: Meta;
  items?: RsIteminvenxml[];
}

/**
 * Interface for RSCollection[RS_ItemChCodesXML]
 */
export interface RscollectionrsItemchcodesxml {
  Meta?: Meta;
  items?: RsItemchcodesxml[];
}

/**
 * Interface for RSCollection[RS_ItemChValuesXML]
 */
export interface RscollectionrsItemchvaluesxml {
  Meta?: Meta;
  items?: RsItemchvaluesxml[];
}

/**
 * Interface for RSCollection[RS_XMLDomCls]
 */
export interface RscollectionrsXmldomcls {
  Meta?: Meta;
  items?: RsXmldomcls[];
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
 * Interface for RSCollection[RS_ItemCmpXML]
 */
export interface RscollectionrsItemcmpxml {
  Meta?: Meta;
  items?: RsItemcmpxml[];
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
 * Interface for RSCollection[RS_AddTaxMultiXML]
 */
export interface RscollectionrsAddtaxmultixml {
  Meta?: Meta;
  items?: RsAddtaxmultixml[];
}

/**
 * Interface for RSCollection[RS_ItemQProdXML]
 */
export interface RscollectionrsItemqprodxml {
  Meta?: Meta;
  items?: RsItemqprodxml[];
}

/**
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
}

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
 * Interface for RSCollection[RS_VrntCdTemplateXM]
 */
export interface RscollectionrsVrntcdtemplatexm {
  Meta?: Meta;
  items?: RsVrntcdtemplatexm[];
}

/**
 * Interface for RSCollection[RS_VrntCdTempValueX]
 */
export interface RscollectionrsVrntcdtempvaluex {
  Meta?: Meta;
  items?: RsVrntcdtempvaluex[];
}

/**
 * Interface for RSCollection[itemAlternatives]
 */
export interface Rscollectionitemalternatives {
  Meta?: Meta;
  items?: ItemAlternatives[];
}

/**
 * Interface for RSCollection[RS_LabelXML]
 */
export interface RscollectionrsLabelxml {
  Meta?: Meta;
  items?: RsLabelxml[];
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
 * RsItemfactoryxml transaction line item
 *
 * Represents individual transaction records within a Items collection.
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
 * RsIteminvenxml transaction line item
 *
 * Represents individual transaction records within a Items collection.
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
 * RsItemchcodesxml transaction line item
 *
 * Represents individual transaction records within a Items collection.
 */
export interface RsItemchcodesxml extends BaseEntity {
  ITEMREF?: number;
  CHARCODEREF?: number;
  CHARVALREF?: number;
  LINENR?: number;
  MATRIXLOC?: number;
  PRIORITY?: number;
  DLIST?: string;
  CCODE?: string;
  CNAME?: string;
  VALUES?: RscollectionrsItemchvaluesxml;
  VCODE?: string;
}

/**
 * RsItemchvaluesxml transaction line item
 *
 * Represents individual transaction records within a Items collection.
 */
export interface RsItemchvaluesxml extends BaseEntity {
  ITEMREF?: number;
  CHARCODEREF?: number;
  CHARVALREF?: number;
  LINENR?: number;
  MATRIXLOC?: number;
  PRIORITY?: number;
  VLIST?: string;
  DLIST?: string;
  CCODE?: string;
  CNAME?: string;
  VCODE?: string;
  VNAME?: string;
}

/**
 * RsXmldomcls transaction line item
 *
 * Represents individual transaction records within a Items collection.
 */
export interface RsXmldomcls extends BaseEntity {
  DOM_TYPE?: number;
  CLASS_CODE?: string;
}

/**
 * RsItemunitasgn transaction line item
 *
 * Represents individual transaction records within a Items collection.
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
 * Represents individual transaction records within a Items collection.
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
 * RsItemcmpxml transaction line item
 *
 * Represents individual transaction records within a Items collection.
 */
export interface RsItemcmpxml extends BaseEntity {
  CODE?: string;
  STCREF?: number;
  QUANTITY?: number;
  PRICE?: number;
  SHARE_PERC?: number;
  MAINCREF?: number;
  LINENO?: number;
  DESCRIPTION?: string;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  ALT_ITEM_USE?: number;
  UNIT_CONV1?: number;
  UNIT_CONV2?: number;
  UNIT_CONV3?: number;
  UNIT_CONV4?: number;
  UNIT_CONV5?: number;
  UNIT_CONV6?: number;
  UNIT_CONV7?: number;
  UNIT_CONV8?: number;
  GROSS_U_INFO1?: number;
  GROSS_U_INFO2?: number;
}

/**
 * RsGlpostxml transaction line item
 *
 * Represents individual transaction records within a Items collection.
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
 * Represents individual transaction records within a Items collection.
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
 * RsAddtaxmultixml transaction line item
 *
 * Represents individual transaction records within a Items collection.
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
 * RsItemqprodxml transaction line item
 *
 * Represents individual transaction records within a Items collection.
 */
export interface RsItemqprodxml extends BaseEntity {
  STCREF?: number;
  AMNT?: number;
  PRICE?: number;
  PERC?: number;
  MAINCREF?: number;
  LINENO?: number;
  LOSTFACTOR?: number;
  SOURCEINDEX?: number;
  DEPARTMENT?: number;
  UOMREF?: number;
  CARDTYPE?: number;
  SCODE?: string;
  SDEF?: string;
  UEDIT?: string;
  UUNIT?: string;
  CLIENTREF?: number;
  ARP_CODE?: string;
  COMP_TYPE?: number;
  ALT_ITEM_USE?: number;
  UNIT_CONV1?: number;
  UNIT_CONV2?: number;
  UNIT_CONV3?: number;
  UNIT_CONV4?: number;
  UNIT_CONV5?: number;
  UNIT_CONV6?: number;
  UNIT_CONV7?: number;
  UNIT_CONV8?: number;
  GROSS_U_INFO1?: number;
  GROSS_U_INFO2?: number;
}

/**
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a Items collection.
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
 * RsExclistnodexml transaction line item
 *
 * Represents individual transaction records within a Items collection.
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
 * Represents individual transaction records within a Items collection.
 */
export interface RsExclistnodevalxm extends BaseEntity {
  VALREF?: number;
  VALCODE?: string;
}

/**
 * RsVrntcdtemplatexm transaction line item
 *
 * Represents individual transaction records within a Items collection.
 */
export interface RsVrntcdtemplatexm extends BaseEntity {
  TYP?: number;
  ITEMREF?: number;
  INCREMENT?: number;
  CHARREF?: number;
  LENGTH?: number;
  SSTART?: string;
  SEND?: string;
  CHARVALREF?: number;
  CHARABBREV?: string;
  LINENR?: number;
  CHARCODE?: string;
  INCCODE?: string;
  TILLCODE?: string;
  FIRSTTIME?: number;
  VISITED?: number;
  VCOUNT?: number;
  COUNT?: number;
  TEMPVALS?: RscollectionrsVrntcdtempvaluex;
  DELLIST?: string;
}

/**
 * RsVrntcdtempvaluex transaction line item
 *
 * Represents individual transaction records within a Items collection.
 */
export interface RsVrntcdtempvaluex extends BaseEntity {
  CHARVALREF?: number;
  CHARCODEREF?: number;
  CHARVALCODE?: string;
  CHARABBREV?: string;
  VALCHECKED?: number;
}

/**
 * ItemAlternatives transaction line item
 *
 * Represents individual transaction records within a Items collection.
 */
export interface ItemAlternatives extends BaseEntity {
  MAINITEMREF?: number;
  SUBITEMREF?: number;
  LINE_NO?: number;
  PRIORITY?: number;
  CONV_FACT1?: number;
  CONV_FACT2?: number;
  MAX_QUANTITY?: number;
  MIN_QUANTITY?: number;
  BEG_DATE?: string;
  END_DATE?: string;
  SUBS_CODE?: string;
  MAIN_CODE?: string;
  MAINVRNTREF?: number;
  SUBVRNTREF?: number;
  MAIN_VRNTCODE?: string;
  SUBS_VRNTCODE?: string;
}

/**
 * RsLabelxml transaction line item
 *
 * Represents individual transaction records within a Items collection.
 */
export interface RsLabelxml extends BaseEntity {
  NAME?: string;
  DEFINITION?: string;
  USER_TYPE?: number;
}

/**
 * Items entity interface based on swagger definition
 */
export interface Items extends BaseEntity {
  CARD_TYPE?: number;
  CODE?: string;
  NAME?: string;
  GROUP_CODE?: string;
  PRODUCER_CODE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  CLASS_TYPE?: number;
  USEF_PURCHASING?: number;
  USEF_SALES?: number;
  USEF_MM?: number;
  VAT?: number;
  PAYMENT_CODE?: string;
  PAYMENTREF?: number;
  TRACK_TYPE?: number;
  LOCATION_TRACKING?: number;
  TOOL?: number;
  AUTOINCSL?: number;
  LOTS_DIVISIBLE?: number;
  DEMAND_MEET_SORT_FLD1?: string;
  DEMAND_MEET_SORT_FLD2?: string;
  DEMAND_MEET_SORT_FLD3?: string;
  DEMAND_MEET_SORT_FLD4?: string;
  DEMAND_MEET_SORT_FLD5?: string;
  SHELF_LIFE?: number;
  SHELF_DATE?: number;
  DOMINANTREFS1?: number;
  DOMINANTREFS2?: number;
  DOMINANTREFS3?: number;
  DOMINANTREFS4?: number;
  DOMINANTREFS5?: number;
  DOMINANTREFS6?: number;
  DOMINANTREFS7?: number;
  DOMINANTREFS8?: number;
  DOMINANTREFS9?: number;
  DOMINANTREFS10?: number;
  DOMINANTREFS11?: number;
  DOMINANTREFS12?: number;
  DEPREC_TYPE?: number;
  DEPREC_RATE?: number;
  DEPREC_DURATION?: number;
  SALVAGE_VALUE?: number;
  REVAL_FLAG?: number;
  REVDEPREC_RFLAG?: number;
  PARTIAL_DEPREC?: number;
  DEPREC_TYPE2?: number;
  DEPREC_RATE2?: number;
  DEPREC_DURATION2?: number;
  REVAL_FLAG2?: number;
  REVDEPREC_FLAG2?: number;
  PARTIAL_DEPREC2?: number;
  APPROVED?: number;
  UNITSET_CODE?: string;
  UNITSETREF?: number;
  QCCSET_CODE?: string;
  QCCSETREF?: number;
  DISTRIBUTED_AMOUNT?: number;
  UNIVERSAL_ID?: string;
  DIST_LOT_UNITS?: number;
  COMB_LOT_UNITS?: number;
  MAINUNIT?: string;
  FACTORY_PARAMS?: RscollectionrsItemfactoryxml;
  INVENLIST?: string;
  WH_PARAMS?: RscollectionrsIteminvenxml;
  INVENDEFDELLIST?: string;
  CHARACTERISTICS?: RscollectionrsItemchcodesxml;
  CHARDELLIST?: string;
  VALLIST?: string;
  VALDELLIST?: string;
  DOMINANT_CLASSES?: RscollectionrsXmldomcls;
  CLASDELLIST?: string;
  UNITS?: RscollectionrsItemunitasgn;
  UNITDELLIST?: string;
  COMPOSITES?: RscollectionrsItemcmpxml;
  CMPDELLIST?: string;
  GL_LINKS?: RscollectionrsGlpostxml;
  SUPPLIERS?: RscollectionrsItemsuppxml;
  SUPPDELLIST?: string;
  WSLIST?: string;
  WSTOTLIST?: string;
  SUBSLIST?: string;
  SUBSDELLIST?: string;
  BOMLIST?: string;
  BOMDELLIST?: string;
  XBUFS?: string;
  XCNT?: number;
  ITEXT?: string;
  IMAGE?: string;
  LANGP?: string;
  DIST_POINT?: number;
  CAN_USE_IN_TRANS?: number;
  ISO_NR?: string;
  GROUP_NR?: string;
  PROD_COUNTRY?: string;
  ADD_TAX_REF?: number;
  EXT_ACC_FLAGS?: number;
  ADD_TAX_CODE?: string;
  MULTI_ADD_TAX?: number;
  ADDTAXLIST?: RscollectionrsAddtaxmultixml;
  ADDTAXDELLIST?: string;
  PACKET?: number;
  SALVAGE_VAL?: number;
  SELVAT?: number;
  RETURNVAT?: number;
  SELPRVAT?: number;
  RETURNPRVAT?: number;
  LOGOID?: string;
  LID_CONFIRMED?: number;
  QPRODS?: RscollectionrsItemqprodxml;
  QPRODDELLIST?: string;
  QPRODSUBCONTS?: RscollectionrsItemqprodxml;
  QPRODSUBCONTDELLIST?: string;
  GTIPCODE?: string;
  B2CCODE?: string;
  MARKREF?: number;
  MARKCODE?: string;
  IMG2INC?: number;
  EXPCTGNR?: string;
  EXTCRD_FLAGS?: number;
  MIN_ORD_AMNT?: number;
  FREIGHT_PLACE?: string;
  FREIGHT_TYPE_CODE1?: string;
  FREIGHT_TYPE_CODE2?: string;
  FREIGHT_TYPE_CODE3?: string;
  FREIGHT_TYPE_CODE4?: string;
  FREIGHT_TYPE_CODE5?: string;
  FREIGHT_TYPE_CODE6?: string;
  FREIGHT_TYPE_CODE7?: string;
  FREIGHT_TYPE_CODE8?: string;
  FREIGHT_TYPE_CODE9?: string;
  FREIGHT_TYPE_CODE10?: string;
  FREIGHT_TYPE_DEF1?: number;
  FREIGHT_TYPE_DEF2?: number;
  FREIGHT_TYPE_DEF3?: number;
  FREIGHT_TYPE_DEF4?: number;
  FREIGHT_TYPE_DEF5?: number;
  FREIGHT_TYPE_DEF6?: number;
  FREIGHT_TYPE_DEF7?: number;
  FREIGHT_TYPE_DEF8?: number;
  FREIGHT_TYPE_DEF9?: number;
  FREIGHT_TYPE_DEF10?: number;
  QPRODAMNT?: number;
  QPROD_UOM?: number;
  QPROD_UNITCODE?: string;
  QPRODSOURCEINDEX?: number;
  QPROD_DEPARTMENT?: number;
  QPRODSUB_AMOUNT?: number;
  QPRODSUB_UOM?: number;
  QPRODSUB_UNITCODE?: string;
  QPRODSUB_SOURCEINDEX?: number;
  QPRODSUB_DEPARTMENT?: number;
  EXPCATEGORY?: string;
  EAN_BARCODE?: string;
  TEXTINCENG?: number;
  ITEXTENG?: string;
  LOSTFACTOR?: number;
  GENIUSFLDSLIST?: Rscollectionextendedfielddefinitions;
  DEPRCLASSTYPE?: string;
  ADD_COST?: number;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  WFLOWCARDREF?: number;
  ORGLOGOID?: string;
  CODE_CHANGED?: number;
  AVR_WH_DURAITON?: number;
  IMAGE1?: string;
  IMAGE1_SIZE?: number;
  IMAGE2?: string;
  IMAGE2_SIZE?: number;
  CANCONFIGURE?: number;
  CHARSETREF?: number;
  CHARSET?: string;
  CHARSETNAME?: string;
  VGEN_DATA_REFERENCE?: number;
  VRNTEXCEPTIONS?: RscollectionrsExclistnodexml;
  VRNTCODETEMPS?: RscollectionrsVrntcdtemplatexm;
  VRNTEXCPTEMPS?: RscollectionrsVrntcdtemplatexm;
  CONSCODEREF?: number;
  CONSCODE?: string;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  AUXIL_CODE2?: string;
  AUXIL_CODE3?: string;
  AUXIL_CODE4?: string;
  AUXIL_CODE5?: string;
  UPDATECHILDS?: number;
  CAN_DEDUCT?: number;
  EXPENSE?: number;
  EXIM_TAX1?: number;
  EXIM_TAX2?: number;
  EXIM_TAX3?: number;
  EXIM_TAX4?: number;
  EXIM_TAX5?: number;
  REYON_CODE?: string;
  KDV_DEPT_NR?: number;
  SCALES?: number;
  SCALE_NR?: number;
  ORIGIN?: string;
  NAME2?: string;
  APP_SPE_VAT_MATRAH?: number;
  NAME3?: string;
  NAME4?: string;
  GLOBAL_ID?: string;
  FLTIMAGE1?: number;
  FLTIMAGE2?: number;
  DEDUCT_CODE?: string;
  DEDUCT_DEF?: string;
  SALE_DEDUCTION_PART1?: number;
  SALE_DEDUCTION_PART2?: number;
  PURCH_DEDUCTION_PART1?: number;
  PURCH_DEDUCTION_PART2?: number;
  CATEGORY_ID?: string;
  CATEGORY_NAME?: string;
  KEYWORD1?: string;
  KEYWORD2?: string;
  KEYWORD3?: string;
  KEYWORD4?: string;
  KEYWORD5?: string;
  SUBSGOOD_CODE?: string;
  PRODUCT_LEVEL?: number;
  PORD_AMOUNT_TOLERANCE?: number;
  SORD_AMOUNT_TOLERANCE?: number;
  ALTERNATIVES?: Rscollectionitemalternatives;
  LABEL_LIST?: RscollectionrsLabelxml;
  CPA_CODE?: string;
  PUBLICCOUNTRYREF?: number;
  PUBLIC_COUNTRY_CODE?: string;
  PUBLIC_COUNTRY_NAME?: string;
  FA_USEFUL_LIFE_CODE1?: string;
  FA_USEFUL_LIFE_CODE2?: string;
  MOLD?: number;
  MOLD_LIFETRACKTYPE?: number;
  MOLD_USAGELIFE?: number;
  MOLD_FACTOR?: number;
  MOLD_MAINTNUMBER?: number;
  MOLD_MAINTLIFETYPE?: number;
  MOLD_MAINTLIFE?: number;
  MOLD_LIFEASRATIO?: number;
  MOLD_MAINTTYPE?: number;
  MOLD_MAINTBEGDATE?: string;
  MOLD_MAINTPERIOD?: number;
  MOLD_MAINTPERUNIT?: number;
  OBTAIN_TYPE?: number;
  GAIN_TYPE?: number;
  FORE_CAST_CODE?: string;
  SALES_LIMIT_QUANTITY?: number;
  NO_DISCOUNT?: number;
  LEVEL_CONTROL?: number;
  GUID?: string;
  TSENR?: string;
  PAYERNAME?: string;
  PAYERSUBTITLE?: string;
  PAYERBARCODE?: string;
  PAYERPURCHPRICE?: number;
  PAYERSALESPRICE?: number;
  PAYERID?: string;
  PAYERACTIVE?: number;
  PURCH_DEDUCT_CODE?: string;
  EXIMREGTYPREF?: number;
  PROFITMARGINRATE?: number;
  ORDCMPRICETYPECODE?: string;
  PURCHDISPRATETOT?: number;
  SALESDISPRATETOT?: number;
  ADDTAXPURCHBRWS?: number;
  ADDTAXSALESBRWS?: number;
  DRAFTOFFERBRWS?: number;
  PRODCLREF?: number;
  TIBBICIHAZ?: number;
  GTIN_UNO?: string;
}

/**
 * Union type of all Items field names for type-safe field selection and sorting
 */
export type ItemsField =
  | 'INTERNAL_REFERENCE'
  | 'RECORD_STATUS'
  | 'CARD_TYPE'
  | 'CODE'
  | 'NAME'
  | 'GROUP_CODE'
  | 'PRODUCER_CODE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'CLASS_TYPE'
  | 'USEF_PURCHASING'
  | 'USEF_SALES'
  | 'USEF_MM'
  | 'VAT'
  | 'PAYMENT_CODE'
  | 'PAYMENTREF'
  | 'TRACK_TYPE'
  | 'LOCATION_TRACKING'
  | 'TOOL'
  | 'AUTOINCSL'
  | 'LOTS_DIVISIBLE'
  | 'DEMAND_MEET_SORT_FLD1'
  | 'DEMAND_MEET_SORT_FLD2'
  | 'DEMAND_MEET_SORT_FLD3'
  | 'DEMAND_MEET_SORT_FLD4'
  | 'DEMAND_MEET_SORT_FLD5'
  | 'SHELF_LIFE'
  | 'SHELF_DATE'
  | 'DOMINANTREFS1'
  | 'DOMINANTREFS2'
  | 'DOMINANTREFS3'
  | 'DOMINANTREFS4'
  | 'DOMINANTREFS5'
  | 'DOMINANTREFS6'
  | 'DOMINANTREFS7'
  | 'DOMINANTREFS8'
  | 'DOMINANTREFS9'
  | 'DOMINANTREFS10'
  | 'DOMINANTREFS11'
  | 'DOMINANTREFS12'
  | 'IMAGEINC'
  | 'TEXTINC'
  | 'DEPREC_TYPE'
  | 'DEPREC_RATE'
  | 'DEPREC_DURATION'
  | 'SALVAGE_VALUE'
  | 'REVAL_FLAG'
  | 'REVDEPREC_RFLAG'
  | 'PARTIAL_DEPREC'
  | 'DEPREC_TYPE2'
  | 'DEPREC_RATE2'
  | 'DEPREC_DURATION2'
  | 'REVAL_FLAG2'
  | 'REVDEPREC_FLAG2'
  | 'PARTIAL_DEPREC2'
  | 'APPROVED'
  | 'UNITSET_CODE'
  | 'UNITSETREF'
  | 'QCCSET_CODE'
  | 'QCCSETREF'
  | 'DISTRIBUTED_AMOUNT'
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
  | 'UNIVERSAL_ID'
  | 'DIST_LOT_UNITS'
  | 'COMB_LOT_UNITS'
  | 'MAINUNIT'
  | 'FACTORY_PARAMS'
  | 'INVENLIST'
  | 'WH_PARAMS'
  | 'INVENDEFDELLIST'
  | 'CHARACTERISTICS'
  | 'CHARDELLIST'
  | 'VALLIST'
  | 'VALDELLIST'
  | 'DOMINANT_CLASSES'
  | 'CLASDELLIST'
  | 'UNITS'
  | 'UNITDELLIST'
  | 'COMPOSITES'
  | 'CMPDELLIST'
  | 'GL_LINKS'
  | 'SUPPLIERS'
  | 'SUPPDELLIST'
  | 'WSLIST'
  | 'WSTOTLIST'
  | 'SUBSLIST'
  | 'SUBSDELLIST'
  | 'BOMLIST'
  | 'BOMDELLIST'
  | 'XBUFS'
  | 'XCNT'
  | 'ITEXT'
  | 'IMAGE'
  | 'LANGP'
  | 'XML_ATTRIBUTE'
  | 'DIST_POINT'
  | 'CAN_USE_IN_TRANS'
  | 'ISO_NR'
  | 'GROUP_NR'
  | 'PROD_COUNTRY'
  | 'ADD_TAX_REF'
  | 'EXT_ACC_FLAGS'
  | 'ADD_TAX_CODE'
  | 'MULTI_ADD_TAX'
  | 'ADDTAXLIST'
  | 'ADDTAXDELLIST'
  | 'PACKET'
  | 'SALVAGE_VAL'
  | 'SELVAT'
  | 'RETURNVAT'
  | 'SELPRVAT'
  | 'RETURNPRVAT'
  | 'LOGOID'
  | 'LID_CONFIRMED'
  | 'QPRODS'
  | 'QPRODDELLIST'
  | 'QPRODSUBCONTS'
  | 'QPRODSUBCONTDELLIST'
  | 'GTIPCODE'
  | 'B2CCODE'
  | 'MARKREF'
  | 'MARKCODE'
  | 'IMG2INC'
  | 'EXPCTGNR'
  | 'EXTCRD_FLAGS'
  | 'MIN_ORD_AMNT'
  | 'FREIGHT_PLACE'
  | 'FREIGHT_TYPE_CODE1'
  | 'FREIGHT_TYPE_CODE2'
  | 'FREIGHT_TYPE_CODE3'
  | 'FREIGHT_TYPE_CODE4'
  | 'FREIGHT_TYPE_CODE5'
  | 'FREIGHT_TYPE_CODE6'
  | 'FREIGHT_TYPE_CODE7'
  | 'FREIGHT_TYPE_CODE8'
  | 'FREIGHT_TYPE_CODE9'
  | 'FREIGHT_TYPE_CODE10'
  | 'FREIGHT_TYPE_DEF1'
  | 'FREIGHT_TYPE_DEF2'
  | 'FREIGHT_TYPE_DEF3'
  | 'FREIGHT_TYPE_DEF4'
  | 'FREIGHT_TYPE_DEF5'
  | 'FREIGHT_TYPE_DEF6'
  | 'FREIGHT_TYPE_DEF7'
  | 'FREIGHT_TYPE_DEF8'
  | 'FREIGHT_TYPE_DEF9'
  | 'FREIGHT_TYPE_DEF10'
  | 'QPRODAMNT'
  | 'QPROD_UOM'
  | 'QPROD_UNITCODE'
  | 'QPRODSOURCEINDEX'
  | 'QPROD_DEPARTMENT'
  | 'QPRODSUB_AMOUNT'
  | 'QPRODSUB_UOM'
  | 'QPRODSUB_UNITCODE'
  | 'QPRODSUB_SOURCEINDEX'
  | 'QPRODSUB_DEPARTMENT'
  | 'EXPCATEGORY'
  | 'EAN_BARCODE'
  | 'TEXTINCENG'
  | 'ITEXTENG'
  | 'LOSTFACTOR'
  | 'GENIUSFLDSLIST'
  | 'DEPRCLASSTYPE'
  | 'ADD_COST'
  | 'DEFNFLDSLIST'
  | 'WFLOWCARDREF'
  | 'ORGLOGOID'
  | 'CODE_CHANGED'
  | 'AVR_WH_DURAITON'
  | 'IMAGE1'
  | 'IMAGE1_SIZE'
  | 'IMAGE2'
  | 'IMAGE2_SIZE'
  | 'CANCONFIGURE'
  | 'CHARSETREF'
  | 'CHARSET'
  | 'CHARSETNAME'
  | 'VGEN_DATA_REFERENCE'
  | 'VRNTEXCEPTIONS'
  | 'VRNTCODETEMPS'
  | 'VRNTEXCPTEMPS'
  | 'CONSCODEREF'
  | 'CONSCODE'
  | 'PROJECTREF'
  | 'PROJECT_CODE'
  | 'AUXIL_CODE2'
  | 'AUXIL_CODE3'
  | 'AUXIL_CODE4'
  | 'AUXIL_CODE5'
  | 'UPDATECHILDS'
  | 'CAN_DEDUCT'
  | 'EXPENSE'
  | 'EXIM_TAX1'
  | 'EXIM_TAX2'
  | 'EXIM_TAX3'
  | 'EXIM_TAX4'
  | 'EXIM_TAX5'
  | 'REYON_CODE'
  | 'KDV_DEPT_NR'
  | 'SCALES'
  | 'SCALE_NR'
  | 'ORIGIN'
  | 'NAME2'
  | 'APP_SPE_VAT_MATRAH'
  | 'NAME3'
  | 'NAME4'
  | 'GLOBAL_ID'
  | 'FLTIMAGE1'
  | 'FLTIMAGE2'
  | 'DEDUCT_CODE'
  | 'DEDUCT_DEF'
  | 'SALE_DEDUCTION_PART1'
  | 'SALE_DEDUCTION_PART2'
  | 'PURCH_DEDUCTION_PART1'
  | 'PURCH_DEDUCTION_PART2'
  | 'CATEGORY_ID'
  | 'CATEGORY_NAME'
  | 'KEYWORD1'
  | 'KEYWORD2'
  | 'KEYWORD3'
  | 'KEYWORD4'
  | 'KEYWORD5'
  | 'SUBSGOOD_CODE'
  | 'PRODUCT_LEVEL'
  | 'PORD_AMOUNT_TOLERANCE'
  | 'SORD_AMOUNT_TOLERANCE'
  | 'ALTERNATIVES'
  | 'LABEL_LIST'
  | 'CPA_CODE'
  | 'PUBLICCOUNTRYREF'
  | 'PUBLIC_COUNTRY_CODE'
  | 'PUBLIC_COUNTRY_NAME'
  | 'FA_USEFUL_LIFE_CODE1'
  | 'FA_USEFUL_LIFE_CODE2'
  | 'MOLD'
  | 'MOLD_LIFETRACKTYPE'
  | 'MOLD_USAGELIFE'
  | 'MOLD_FACTOR'
  | 'MOLD_MAINTNUMBER'
  | 'MOLD_MAINTLIFETYPE'
  | 'MOLD_MAINTLIFE'
  | 'MOLD_LIFEASRATIO'
  | 'MOLD_MAINTTYPE'
  | 'MOLD_MAINTBEGDATE'
  | 'MOLD_MAINTPERIOD'
  | 'MOLD_MAINTPERUNIT'
  | 'OBTAIN_TYPE'
  | 'GAIN_TYPE'
  | 'FORE_CAST_CODE'
  | 'SALES_LIMIT_QUANTITY'
  | 'NO_DISCOUNT'
  | 'LEVEL_CONTROL'
  | 'GUID'
  | 'TSENR'
  | 'PAYERNAME'
  | 'PAYERSUBTITLE'
  | 'PAYERBARCODE'
  | 'PAYERPURCHPRICE'
  | 'PAYERSALESPRICE'
  | 'PAYERID'
  | 'PAYERACTIVE'
  | 'PURCH_DEDUCT_CODE'
  | 'EXIMREGTYPREF'
  | 'PROFITMARGINRATE'
  | 'ORDCMPRICETYPECODE'
  | 'PURCHDISPRATETOT'
  | 'SALESDISPRATETOT'
  | 'ADDTAXPURCHBRWS'
  | 'ADDTAXSALESBRWS'
  | 'DRAFTOFFERBRWS'
  | 'PRODCLREF'
  | 'TIBBICIHAZ'
  | 'GTIN_UNO';

/**
 * Type-safe sort specification for Items queries
 */
export type ItemsSortSpec =
  | [ItemsField]
  | [ItemsField, 'asc' | 'desc']
  | [ItemsField[], 'asc' | 'desc']
  | [ItemsField[]];

/**
 * Type-safe query options for Items entities
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
export interface ItemsQueryOptions extends Omit<QueryOptions<ItemsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ItemsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ItemsSortSpec;
}

/**
 * Search criteria for Items entities
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
export interface ItemsSearchCriteria {
  internalReference?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  cardType?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  groupCode?: StringFieldValue;
  producerCode?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  classType?: NumberFieldValue;
  usefPurchasing?: NumberFieldValue;
  usefSales?: NumberFieldValue;
  usefMm?: NumberFieldValue;
  vat?: NumberFieldValue;
  paymentCode?: StringFieldValue;
  paymentref?: NumberFieldValue;
  trackType?: NumberFieldValue;
  locationTracking?: NumberFieldValue;
  tool?: NumberFieldValue;
  autoincsl?: NumberFieldValue;
  lotsDivisible?: NumberFieldValue;
  demandMeetSortFld1?: StringFieldValue;
  demandMeetSortFld2?: StringFieldValue;
  demandMeetSortFld3?: StringFieldValue;
  demandMeetSortFld4?: StringFieldValue;
  demandMeetSortFld5?: StringFieldValue;
  shelfLife?: NumberFieldValue;
  shelfDate?: NumberFieldValue;
  dominantrefs1?: NumberFieldValue;
  dominantrefs2?: NumberFieldValue;
  dominantrefs3?: NumberFieldValue;
  dominantrefs4?: NumberFieldValue;
  dominantrefs5?: NumberFieldValue;
  dominantrefs6?: NumberFieldValue;
  dominantrefs7?: NumberFieldValue;
  dominantrefs8?: NumberFieldValue;
  dominantrefs9?: NumberFieldValue;
  dominantrefs10?: NumberFieldValue;
  dominantrefs11?: NumberFieldValue;
  dominantrefs12?: NumberFieldValue;
  imageinc?: NumberFieldValue;
  textinc?: NumberFieldValue;
  deprecType?: NumberFieldValue;
  deprecRate?: NumberFieldValue;
  deprecDuration?: NumberFieldValue;
  salvageValue?: NumberFieldValue;
  revalFlag?: NumberFieldValue;
  revdeprecRflag?: NumberFieldValue;
  partialDeprec?: NumberFieldValue;
  deprecType2?: NumberFieldValue;
  deprecRate2?: NumberFieldValue;
  deprecDuration2?: NumberFieldValue;
  revalFlag2?: NumberFieldValue;
  revdeprecFlag2?: NumberFieldValue;
  partialDeprec2?: NumberFieldValue;
  approved?: NumberFieldValue;
  unitsetCode?: StringFieldValue;
  unitsetref?: NumberFieldValue;
  qccsetCode?: StringFieldValue;
  qccsetref?: NumberFieldValue;
  distributedAmount?: NumberFieldValue;
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
  universalId?: StringFieldValue;
  distLotUnits?: NumberFieldValue;
  combLotUnits?: NumberFieldValue;
  mainunit?: StringFieldValue;
  factoryParams?: DateFieldValue;
  invenlist?: StringFieldValue;
  whParams?: DateFieldValue;
  invendefdellist?: StringFieldValue;
  characteristics?: DateFieldValue;
  chardellist?: StringFieldValue;
  vallist?: StringFieldValue;
  valdellist?: StringFieldValue;
  dominantClasses?: DateFieldValue;
  clasdellist?: StringFieldValue;
  units?: DateFieldValue;
  unitdellist?: StringFieldValue;
  composites?: DateFieldValue;
  cmpdellist?: StringFieldValue;
  glLinks?: DateFieldValue;
  suppliers?: DateFieldValue;
  suppdellist?: StringFieldValue;
  wslist?: StringFieldValue;
  wstotlist?: StringFieldValue;
  subslist?: StringFieldValue;
  subsdellist?: StringFieldValue;
  bomlist?: StringFieldValue;
  bomdellist?: StringFieldValue;
  xbufs?: StringFieldValue;
  xcnt?: NumberFieldValue;
  itext?: StringFieldValue;
  image?: StringFieldValue;
  langp?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  distPoint?: NumberFieldValue;
  canUseInTrans?: NumberFieldValue;
  isoNr?: StringFieldValue;
  groupNr?: StringFieldValue;
  prodCountry?: StringFieldValue;
  addTaxRef?: NumberFieldValue;
  extAccFlags?: NumberFieldValue;
  addTaxCode?: StringFieldValue;
  multiAddTax?: NumberFieldValue;
  addtaxlist?: DateFieldValue;
  addtaxdellist?: StringFieldValue;
  packet?: NumberFieldValue;
  salvageVal?: NumberFieldValue;
  selvat?: NumberFieldValue;
  returnvat?: NumberFieldValue;
  selprvat?: NumberFieldValue;
  returnprvat?: NumberFieldValue;
  logoid?: StringFieldValue;
  lidConfirmed?: NumberFieldValue;
  qprods?: DateFieldValue;
  qproddellist?: StringFieldValue;
  qprodsubconts?: DateFieldValue;
  qprodsubcontdellist?: StringFieldValue;
  gtipcode?: StringFieldValue;
  b2ccode?: StringFieldValue;
  markref?: NumberFieldValue;
  markcode?: StringFieldValue;
  img2inc?: NumberFieldValue;
  expctgnr?: StringFieldValue;
  extcrdFlags?: NumberFieldValue;
  minOrdAmnt?: NumberFieldValue;
  freightPlace?: StringFieldValue;
  freightTypeCode1?: StringFieldValue;
  freightTypeCode2?: StringFieldValue;
  freightTypeCode3?: StringFieldValue;
  freightTypeCode4?: StringFieldValue;
  freightTypeCode5?: StringFieldValue;
  freightTypeCode6?: StringFieldValue;
  freightTypeCode7?: StringFieldValue;
  freightTypeCode8?: StringFieldValue;
  freightTypeCode9?: StringFieldValue;
  freightTypeCode10?: StringFieldValue;
  freightTypeDef1?: NumberFieldValue;
  freightTypeDef2?: NumberFieldValue;
  freightTypeDef3?: NumberFieldValue;
  freightTypeDef4?: NumberFieldValue;
  freightTypeDef5?: NumberFieldValue;
  freightTypeDef6?: NumberFieldValue;
  freightTypeDef7?: NumberFieldValue;
  freightTypeDef8?: NumberFieldValue;
  freightTypeDef9?: NumberFieldValue;
  freightTypeDef10?: NumberFieldValue;
  qprodamnt?: NumberFieldValue;
  qprodUom?: NumberFieldValue;
  qprodUnitcode?: StringFieldValue;
  qprodsourceindex?: NumberFieldValue;
  qprodDepartment?: NumberFieldValue;
  qprodsubAmount?: NumberFieldValue;
  qprodsubUom?: NumberFieldValue;
  qprodsubUnitcode?: StringFieldValue;
  qprodsubSourceindex?: NumberFieldValue;
  qprodsubDepartment?: NumberFieldValue;
  expcategory?: StringFieldValue;
  eanBarcode?: StringFieldValue;
  textinceng?: NumberFieldValue;
  itexteng?: StringFieldValue;
  lostfactor?: NumberFieldValue;
  geniusfldslist?: DateFieldValue;
  deprclasstype?: StringFieldValue;
  addCost?: NumberFieldValue;
  defnfldslist?: DateFieldValue;
  wflowcardref?: NumberFieldValue;
  orglogoid?: StringFieldValue;
  codeChanged?: NumberFieldValue;
  avrWhDuraiton?: NumberFieldValue;
  image1?: StringFieldValue;
  image1Size?: NumberFieldValue;
  image2?: StringFieldValue;
  image2Size?: NumberFieldValue;
  canconfigure?: NumberFieldValue;
  charsetref?: NumberFieldValue;
  charset?: StringFieldValue;
  charsetname?: StringFieldValue;
  vgenDataReference?: NumberFieldValue;
  vrntexceptions?: DateFieldValue;
  vrntcodetemps?: DateFieldValue;
  vrntexcptemps?: DateFieldValue;
  conscoderef?: NumberFieldValue;
  conscode?: StringFieldValue;
  projectref?: NumberFieldValue;
  projectCode?: StringFieldValue;
  auxilCode2?: StringFieldValue;
  auxilCode3?: StringFieldValue;
  auxilCode4?: StringFieldValue;
  auxilCode5?: StringFieldValue;
  updatechilds?: NumberFieldValue;
  canDeduct?: NumberFieldValue;
  expense?: NumberFieldValue;
  eximTax1?: NumberFieldValue;
  eximTax2?: NumberFieldValue;
  eximTax3?: NumberFieldValue;
  eximTax4?: NumberFieldValue;
  eximTax5?: NumberFieldValue;
  reyonCode?: StringFieldValue;
  kdvDeptNr?: NumberFieldValue;
  scales?: NumberFieldValue;
  scaleNr?: NumberFieldValue;
  origin?: StringFieldValue;
  name2?: StringFieldValue;
  appSpeVatMatrah?: NumberFieldValue;
  name3?: StringFieldValue;
  name4?: StringFieldValue;
  globalId?: StringFieldValue;
  fltimage1?: NumberFieldValue;
  fltimage2?: NumberFieldValue;
  deductCode?: StringFieldValue;
  deductDef?: StringFieldValue;
  saleDeductionPart1?: NumberFieldValue;
  saleDeductionPart2?: NumberFieldValue;
  purchDeductionPart1?: NumberFieldValue;
  purchDeductionPart2?: NumberFieldValue;
  categoryId?: StringFieldValue;
  categoryName?: StringFieldValue;
  keyword1?: StringFieldValue;
  keyword2?: StringFieldValue;
  keyword3?: StringFieldValue;
  keyword4?: StringFieldValue;
  keyword5?: StringFieldValue;
  subsgoodCode?: StringFieldValue;
  productLevel?: NumberFieldValue;
  pordAmountTolerance?: NumberFieldValue;
  sordAmountTolerance?: NumberFieldValue;
  alternatives?: DateFieldValue;
  labelList?: DateFieldValue;
  cpaCode?: StringFieldValue;
  publiccountryref?: NumberFieldValue;
  publicCountryCode?: StringFieldValue;
  publicCountryName?: StringFieldValue;
  faUsefulLifeCode1?: StringFieldValue;
  faUsefulLifeCode2?: StringFieldValue;
  mold?: NumberFieldValue;
  moldLifetracktype?: NumberFieldValue;
  moldUsagelife?: NumberFieldValue;
  moldFactor?: NumberFieldValue;
  moldMaintnumber?: NumberFieldValue;
  moldMaintlifetype?: NumberFieldValue;
  moldMaintlife?: NumberFieldValue;
  moldLifeasratio?: NumberFieldValue;
  moldMainttype?: NumberFieldValue;
  moldMaintbegdate?: StringFieldValue;
  moldMaintperiod?: NumberFieldValue;
  moldMaintperunit?: NumberFieldValue;
  obtainType?: NumberFieldValue;
  gainType?: NumberFieldValue;
  foreCastCode?: StringFieldValue;
  salesLimitQuantity?: NumberFieldValue;
  noDiscount?: NumberFieldValue;
  levelControl?: NumberFieldValue;
  guid?: StringFieldValue;
  tsenr?: StringFieldValue;
  payername?: StringFieldValue;
  payersubtitle?: StringFieldValue;
  payerbarcode?: StringFieldValue;
  payerpurchprice?: NumberFieldValue;
  payersalesprice?: NumberFieldValue;
  payerid?: StringFieldValue;
  payeractive?: NumberFieldValue;
  purchDeductCode?: StringFieldValue;
  eximregtypref?: NumberFieldValue;
  profitmarginrate?: NumberFieldValue;
  ordcmpricetypecode?: StringFieldValue;
  purchdispratetot?: NumberFieldValue;
  salesdispratetot?: NumberFieldValue;
  addtaxpurchbrws?: NumberFieldValue;
  addtaxsalesbrws?: NumberFieldValue;
  draftofferbrws?: NumberFieldValue;
  prodclref?: NumberFieldValue;
  tibbicihaz?: NumberFieldValue;
  gtinUno?: StringFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Items entities
 */
export interface ItemsAnalytics {
  total: number;
  // Add Items-specific analytics fields
}
