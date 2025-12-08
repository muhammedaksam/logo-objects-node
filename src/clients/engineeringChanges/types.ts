import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_BOMLineXML]
 */
export interface RscollectionrsBomlinexml {
  Meta?: Meta;
  items?: RsBomlinexml[];
}

/**
 * Interface for RSCollection[RS_BOMDetListXML]
 */
export interface RscollectionrsBomdetlistxml {
  Meta?: Meta;
  items?: RsBomdetlistxml[];
}

/**
 * Interface for RSCollection[RS_BOMLnFrmlListXML]
 */
export interface RscollectionrsBomlnfrmllistxml {
  Meta?: Meta;
  items?: RsBomlnfrmllistxml[];
}

/**
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
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
 * RsBomlinexml transaction line item
 *
 * Represents individual transaction records within a EngineeringChanges collection.
 */
export interface RsBomlinexml extends BaseEntity {
  BOMREVREF?: number;
  LINE_TYPE?: number;
  LINE_NO?: number;
  OUTITEMREF?: number;
  ITEMREF?: number;
  UOMREF?: number;
  USREF?: number;
  UINFO1?: number;
  UINFO2?: number;
  UINFO3?: number;
  UINFO4?: number;
  UINFO5?: number;
  UINFO6?: number;
  UINFO7?: number;
  UINFO8?: number;
  AMOUNT?: number;
  SCRAP_FACT?: number;
  SCRAP_CALC?: number;
  SCALABLE?: number;
  ALT_ITEM_USE?: number;
  TEMP_IN_USE?: number;
  NEXTLEVELBOMREF?: number;
  AUXIL_CODE?: string;
  BOM_LINE_EXP?: string;
  INVEN_NO?: number;
  ENGINEERING?: number;
  PRODUCTION?: number;
  COST?: number;
  COST_RATE?: number;
  FORMULA?: string;
  WF_STATUS?: number;
  BOMMASTERREF?: number;
  LINE_CLS_TYPE?: number;
  DET_LINE?: number;
  PREVLINEREF?: number;
  ROUTLINEREF?: number;
  OPERATIONREF?: number;
  FORMULAITEMREF?: number;
  NEXTLEVREVREF?: number;
  EFFECT_OP_TIME?: number;
  DISTTEMPREF?: number;
  BY_DEFAULT_EXISTS?: number;
  ITEM_CODE?: string;
  ITEM_NAME?: string;
  VARIANTREF?: number;
  VARIANTCODE?: string;
  VARIANTNAME?: string;
  CANCONFIG?: number;
  VCHARLIST?: string;
  UNIT_SET_CODE?: string;
  UNIT_CODE?: string;
  BOM_CODE?: string;
  BOM_NAME?: string;
  BOM_TYPE?: number;
  BOM_TYPE_NEXT_LEVEL?: number;
  OUT_ITEM_CODE?: string;
  OUT_ITEM_NAME?: string;
  ASGN_LIST?: string;
  ASGNDELLIST?: string;
  DET_LIST?: RscollectionrsBomdetlistxml;
  DETDELLIST?: string;
  COASGNREF?: number;
  FORMULA_ITEM_CODE?: string;
  FORMULA_ITEM_NAME?: string;
  OP_CODE?: string;
  OP_NAME?: string;
  REV_CODE?: string;
  REV_NAME?: string;
  FORMULA_ERR?: number;
  OPTIONAL?: number;
  GROSS_U_INFO1?: number;
  GROSS_U_INFO2?: number;
  PRODUCER_CODE?: string;
  DEF_COST_TYPE?: number;
  OVERLAP_WITH?: number;
  OVERLAP_METHOD?: number;
  OVERLAP_TYPE?: number;
  OVERLAP_VALUE?: number;
  OVERLAP_UNIT?: number;
  VARIANT_FORMULA_LIST?: RscollectionrsBomlnfrmllistxml;
  VARIANT_CONDITION_LIST?: RscollectionrsBomlnfrmllistxml;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
}

/**
 * RsBomdetlistxml transaction line item
 *
 * Represents individual transaction records within a EngineeringChanges collection.
 */
export interface RsBomdetlistxml extends BaseEntity {
  BOMREVREF?: number;
  LINE_TYPE?: number;
  LINE_NO?: number;
  OUTITEMREF?: number;
  ITEMREF?: number;
  UOMREF?: number;
  USREF?: number;
  UINFO1?: number;
  UINFO2?: number;
  UINFO3?: number;
  UINFO4?: number;
  UINFO5?: number;
  UINFO6?: number;
  UINFO7?: number;
  UINFO8?: number;
  AMOUNT?: number;
  SCRAP_FACT?: number;
  SCRAP_CALC?: number;
  SCALABLE?: number;
  ALT_ITEM_USE?: number;
  TEMP_IN_USE?: number;
  NEXTLEVELBOMREF?: number;
  AUXIL_CODE?: string;
  BOM_LINE_EXP?: string;
  INVEN_NO?: number;
  ENGINEERING?: number;
  PRODUCTION?: number;
  COST?: number;
  COST_RATE?: number;
  FORMULA?: string;
  WF_STATUS?: number;
  BOMMASTERREF?: number;
  LINE_CLST_YPE?: number;
  DET_LINE?: number;
  PREVLINEREF?: number;
  ROUTLINEREF?: number;
  OPERATIONREF?: number;
  FORMULAITEMREF?: number;
  NEXTLEVREVREF?: number;
  EFFECT_OP_TIME?: number;
  DISTTEMPREF?: number;
  BY_DEFAULT_EXISTS?: number;
  ITEM_CODE?: string;
  ITEM_NAME?: string;
  UNIT_SET_CODE?: string;
  UNIT_CODE?: string;
  BOM_CODE?: string;
  BOM_NAME?: string;
  OUT_ITEM_CODE?: string;
  OUT_ITEM_NAME?: string;
  ASGN_LIST?: string;
  ASGNDELLIST?: string;
  DET_LIST?: string;
  DETDELLIST?: string;
  COASGNREF?: number;
  FORMULA_ITEM_CODE?: string;
  FORMULA_ITEM_NAME?: string;
  OP_CODE?: string;
  OP_NAME?: string;
  REV_CODE?: string;
  REV_NAME?: string;
  FORMULA_ERR?: number;
  OPTIONAL?: number;
  DEF_COST_TYPE?: number;
}

/**
 * RsBomlnfrmllistxml transaction line item
 *
 * Represents individual transaction records within a EngineeringChanges collection.
 */
export interface RsBomlnfrmllistxml extends BaseEntity {
  BOMLREF?: number;
  TYP?: number;
  LINENR?: number;
  MAINITEMREF?: number;
  MAINCHARREF?: number;
  OPERATOR?: number;
  ASGTYP?: number;
  CARDREF?: number;
  LOGICOP?: number;
  ISITEMREFCBOML?: number;
  MAINVALREF?: number;
  MAIN_ITEM_CODE?: string;
  MAIN_CHAR_CODE?: string;
  CARD_CODE?: string;
  CHARC?: string;
  MAINVALC?: string;
}

/**
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a EngineeringChanges collection.
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
 * EngineeringChanges entity interface based on swagger definition
 */
export interface EngineeringChanges extends BaseEntity {
  FICHENO?: string;
  DATE?: string;
  CLIENTREF?: number;
  ARP_CODE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  APPSTATUS?: number;
  REASON?: string;
  BOMMASTERREF?: number;
  OLDREVREF?: number;
  NEWREVREF?: number;
  METHOD?: number;
  DATEFROM?: string;
  SERILOTFROM?: string;
  BOMLINEREF?: number;
  ITEMREF?: number;
  VALIDDATE?: string;
  VALIDSTATUS?: number;
  APPROVED?: number;
  ACTIVE?: number;
  MASTER_INTERNAL_REFERENCE?: number;
  MASTER_CODE?: string;
  MASTER_NAME?: string;
  MASTER_TYPE?: number;
  MASTER_VALIDREVREF?: number;
  MASTER_VALID_REV_CODE?: string;
  MASTER_MAINPRODREF?: number;
  MASTER_APPROVED?: number;
  MASTER_ACTIVE?: number;
  MASTER_DEMONTAJ?: number;
  MASTER_AUXIL_CODE?: string;
  MASTER_AUXIL_CODE2?: string;
  MASTER_AUTH_CODE?: string;
  MASTER_TEXTINC?: number;
  MASTER_DATA_SITEID?: number;
  MASTER_XML_ATTRIBUTE?: number;
  MASTER_DATA_REFERENCE?: number;
  MASTER_WFSTATUS?: number;
  MASTER_ROUTINGREF?: number;
  MASTER_PRODUCTLINEREF?: number;
  MASTER_PRINTCNT?: number;
  MASTER_PRINT_DATE?: string;
  REV_INTERNAL_REFERENCE?: number;
  REV_CODE?: string;
  REV_NAME?: string;
  REV_TYPE?: number;
  REV_ACTIVE?: number;
  REV_BOMMASTERREF?: number;
  REV_ROUTINGREF?: number;
  REV_ENGCHGREF?: number;
  REV_REVDATE?: string;
  REV_DATA_SITEID?: number;
  REV_XML_ATTRIBUTE?: number;
  REV_DATA_REFERENCE?: number;
  REV_WFSTATUS?: number;
  REV_QTYDEPTTIME?: number;
  REV_QTYUNDEPTTIME?: number;
  REV_STDOVHDFORMULA?: string;
  REV_STDOVHDRPFORMULA?: string;
  REV_QTYDEPDURATION?: number;
  REV_QTYINDEPDURATION?: number;
  REV_OVERLAPTYPE?: number;
  REV_OVERLAPAMNT?: number;
  REV_OVERLAPPERC?: number;
  REV_STDOVHDFORMULA2?: string;
  REV_STDOVHDRPFORMULA2?: string;
  REV_STDOVHDFORMULA3?: string;
  REV_STDOVHDRPFORMULA3?: string;
  REV_STDOVHDFORMULA4?: string;
  REV_STDOVHDRPFORMULA4?: string;
  REV_STDOVHDFORMULA5?: string;
  REV_STDOVHDRPFORMULA5?: string;
  REV_STDOVHDFORMULA6?: string;
  REV_STDOVHDRPFORMULA6?: string;
  REV_STDOVHDFORMULA7?: string;
  REV_STDOVHDRPFORMULA7?: string;
  REV_STDOVHDFORMULA8?: string;
  REV_STDOVHDRPFORMULA8?: string;
  REV_STDOVHDFORMULA9?: string;
  REV_STDOVHDRPFORMULA9?: string;
  REV_STDOVHDFORMULA10?: string;
  REV_STDOVHDRPFORMULA10?: string;
  REV_PRINT_CNT?: number;
  REV_PRINT_DATE?: string;
  UPDATED?: number;
  REVUPDATED?: number;
  SAVENEWREV?: number;
  OLDREVNAME?: string;
  OLDREVCODE?: string;
  LINELIST?: RscollectionrsBomlinexml;
  DELLINELIST?: string;
  MPCODE?: string;
  MPNAME?: string;
  ROUTCODE?: string;
  ROUTNAME?: string;
  WARNACTIVE?: number;
  ITEXT?: string;
  TEXTCHG?: number;
  FLDALS?: string;
  XBUFS?: string;
  PARAMLIST?: string;
  PARAMDELLIST?: string;
  PRODUCTLINECODE?: string;
  MAINITEMTYPE?: number;
  CANCONFIG?: number;
  ITEMCODE?: string;
  ITEMNAME?: string;
  DOCALS?: string;
  FCNOCHANGED?: number;
  REV_WITHOUT_ROUTING?: number;
  REV_USE_DEPT_TIME_FOR_PRD?: number;
  REV_PEG_TYPE?: number;
  REV_PEG_GUID?: string;
  REV_GUID?: string;
  REV_USE_WS_FOR_PRD?: number;
  REV_WS_TYPE?: number;
  REV_WSREF?: number;
  REV_WSCODE?: string;
  REV_OPREQREF?: number;
}

/**
 * Union type of all EngineeringChanges field names for type-safe field selection and sorting
 */
export type EngineeringChangesField =
  | 'INTERNAL_REFERENCE'
  | 'FICHENO'
  | 'DATE'
  | 'CLIENTREF'
  | 'ARP_CODE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'APPSTATUS'
  | 'REASON'
  | 'BOMMASTERREF'
  | 'OLDREVREF'
  | 'NEWREVREF'
  | 'METHOD'
  | 'DATEFROM'
  | 'SERILOTFROM'
  | 'BOMLINEREF'
  | 'ITEMREF'
  | 'VALIDDATE'
  | 'VALIDSTATUS'
  | 'APPROVED'
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
  | 'MASTER_INTERNAL_REFERENCE'
  | 'MASTER_CODE'
  | 'MASTER_NAME'
  | 'MASTER_TYPE'
  | 'MASTER_VALIDREVREF'
  | 'MASTER_VALID_REV_CODE'
  | 'MASTER_MAINPRODREF'
  | 'MASTER_APPROVED'
  | 'MASTER_ACTIVE'
  | 'MASTER_DEMONTAJ'
  | 'MASTER_AUXIL_CODE'
  | 'MASTER_AUXIL_CODE2'
  | 'MASTER_AUTH_CODE'
  | 'MASTER_TEXTINC'
  | 'MASTER_DATA_SITEID'
  | 'MASTER_XML_ATTRIBUTE'
  | 'MASTER_DATA_REFERENCE'
  | 'MASTER_WFSTATUS'
  | 'MASTER_ROUTINGREF'
  | 'MASTER_PRODUCTLINEREF'
  | 'MASTER_PRINTCNT'
  | 'MASTER_PRINT_DATE'
  | 'REV_INTERNAL_REFERENCE'
  | 'REV_CODE'
  | 'REV_NAME'
  | 'REV_TYPE'
  | 'REV_ACTIVE'
  | 'REV_BOMMASTERREF'
  | 'REV_ROUTINGREF'
  | 'REV_ENGCHGREF'
  | 'REV_REVDATE'
  | 'REV_DATA_SITEID'
  | 'REV_XML_ATTRIBUTE'
  | 'REV_DATA_REFERENCE'
  | 'REV_WFSTATUS'
  | 'REV_QTYDEPTTIME'
  | 'REV_QTYUNDEPTTIME'
  | 'REV_STDOVHDFORMULA'
  | 'REV_STDOVHDRPFORMULA'
  | 'REV_QTYDEPDURATION'
  | 'REV_QTYINDEPDURATION'
  | 'REV_OVERLAPTYPE'
  | 'REV_OVERLAPAMNT'
  | 'REV_OVERLAPPERC'
  | 'REV_STDOVHDFORMULA2'
  | 'REV_STDOVHDRPFORMULA2'
  | 'REV_STDOVHDFORMULA3'
  | 'REV_STDOVHDRPFORMULA3'
  | 'REV_STDOVHDFORMULA4'
  | 'REV_STDOVHDRPFORMULA4'
  | 'REV_STDOVHDFORMULA5'
  | 'REV_STDOVHDRPFORMULA5'
  | 'REV_STDOVHDFORMULA6'
  | 'REV_STDOVHDRPFORMULA6'
  | 'REV_STDOVHDFORMULA7'
  | 'REV_STDOVHDRPFORMULA7'
  | 'REV_STDOVHDFORMULA8'
  | 'REV_STDOVHDRPFORMULA8'
  | 'REV_STDOVHDFORMULA9'
  | 'REV_STDOVHDRPFORMULA9'
  | 'REV_STDOVHDFORMULA10'
  | 'REV_STDOVHDRPFORMULA10'
  | 'REV_PRINT_CNT'
  | 'REV_PRINT_DATE'
  | 'UPDATED'
  | 'REVUPDATED'
  | 'SAVENEWREV'
  | 'OLDREVNAME'
  | 'OLDREVCODE'
  | 'LINELIST'
  | 'DELLINELIST'
  | 'MPCODE'
  | 'MPNAME'
  | 'ROUTCODE'
  | 'ROUTNAME'
  | 'WARNACTIVE'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'FLDALS'
  | 'XBUFS'
  | 'PARAMLIST'
  | 'PARAMDELLIST'
  | 'PRODUCTLINECODE'
  | 'MAINITEMTYPE'
  | 'CANCONFIG'
  | 'ITEMCODE'
  | 'ITEMNAME'
  | 'DOCALS'
  | 'FCNOCHANGED'
  | 'REV_WITHOUT_ROUTING'
  | 'REV_USE_DEPT_TIME_FOR_PRD'
  | 'REV_PEG_TYPE'
  | 'REV_PEG_GUID'
  | 'REV_GUID'
  | 'REV_USE_WS_FOR_PRD'
  | 'REV_WS_TYPE'
  | 'REV_WSREF'
  | 'REV_WSCODE'
  | 'REV_OPREQREF';

/**
 * Type-safe sort specification for EngineeringChanges queries
 */
export type EngineeringChangesSortSpec =
  | [EngineeringChangesField]
  | [EngineeringChangesField, 'asc' | 'desc']
  | [EngineeringChangesField[], 'asc' | 'desc']
  | [EngineeringChangesField[]];

/**
 * Type-safe query options for EngineeringChanges entities
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
export interface EngineeringChangesQueryOptions extends Omit<
  QueryOptions<EngineeringChangesField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: EngineeringChangesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: EngineeringChangesSortSpec;
}

/**
 * Search criteria for EngineeringChanges entities
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
export interface EngineeringChangesSearchCriteria {
  internalReference?: NumberFieldValue;
  ficheno?: StringFieldValue;
  date?: StringFieldValue;
  clientref?: NumberFieldValue;
  arpCode?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  appstatus?: NumberFieldValue;
  reason?: StringFieldValue;
  bommasterref?: NumberFieldValue;
  oldrevref?: NumberFieldValue;
  newrevref?: NumberFieldValue;
  method?: NumberFieldValue;
  datefrom?: StringFieldValue;
  serilotfrom?: StringFieldValue;
  bomlineref?: NumberFieldValue;
  itemref?: NumberFieldValue;
  validdate?: StringFieldValue;
  validstatus?: NumberFieldValue;
  approved?: NumberFieldValue;
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
  masterInternalReference?: NumberFieldValue;
  masterCode?: StringFieldValue;
  masterName?: StringFieldValue;
  masterType?: NumberFieldValue;
  masterValidrevref?: NumberFieldValue;
  masterValidRevCode?: StringFieldValue;
  masterMainprodref?: NumberFieldValue;
  masterApproved?: NumberFieldValue;
  masterActive?: NumberFieldValue;
  masterDemontaj?: NumberFieldValue;
  masterAuxilCode?: StringFieldValue;
  masterAuxilCode2?: StringFieldValue;
  masterAuthCode?: StringFieldValue;
  masterTextinc?: NumberFieldValue;
  masterDataSiteid?: NumberFieldValue;
  masterXmlAttribute?: NumberFieldValue;
  masterDataReference?: NumberFieldValue;
  masterWfstatus?: NumberFieldValue;
  masterRoutingref?: NumberFieldValue;
  masterProductlineref?: NumberFieldValue;
  masterPrintcnt?: NumberFieldValue;
  masterPrintDate?: StringFieldValue;
  revInternalReference?: NumberFieldValue;
  revCode?: StringFieldValue;
  revName?: StringFieldValue;
  revType?: NumberFieldValue;
  revActive?: NumberFieldValue;
  revBommasterref?: NumberFieldValue;
  revRoutingref?: NumberFieldValue;
  revEngchgref?: NumberFieldValue;
  revRevdate?: StringFieldValue;
  revDataSiteid?: NumberFieldValue;
  revXmlAttribute?: NumberFieldValue;
  revDataReference?: NumberFieldValue;
  revWfstatus?: NumberFieldValue;
  revQtydepttime?: NumberFieldValue;
  revQtyundepttime?: NumberFieldValue;
  revStdovhdformula?: StringFieldValue;
  revStdovhdrpformula?: StringFieldValue;
  revQtydepduration?: NumberFieldValue;
  revQtyindepduration?: NumberFieldValue;
  revOverlaptype?: NumberFieldValue;
  revOverlapamnt?: NumberFieldValue;
  revOverlapperc?: NumberFieldValue;
  revStdovhdformula2?: StringFieldValue;
  revStdovhdrpformula2?: StringFieldValue;
  revStdovhdformula3?: StringFieldValue;
  revStdovhdrpformula3?: StringFieldValue;
  revStdovhdformula4?: StringFieldValue;
  revStdovhdrpformula4?: StringFieldValue;
  revStdovhdformula5?: StringFieldValue;
  revStdovhdrpformula5?: StringFieldValue;
  revStdovhdformula6?: StringFieldValue;
  revStdovhdrpformula6?: StringFieldValue;
  revStdovhdformula7?: StringFieldValue;
  revStdovhdrpformula7?: StringFieldValue;
  revStdovhdformula8?: StringFieldValue;
  revStdovhdrpformula8?: StringFieldValue;
  revStdovhdformula9?: StringFieldValue;
  revStdovhdrpformula9?: StringFieldValue;
  revStdovhdformula10?: StringFieldValue;
  revStdovhdrpformula10?: StringFieldValue;
  revPrintCnt?: NumberFieldValue;
  revPrintDate?: StringFieldValue;
  updated?: NumberFieldValue;
  revupdated?: NumberFieldValue;
  savenewrev?: NumberFieldValue;
  oldrevname?: StringFieldValue;
  oldrevcode?: StringFieldValue;
  linelist?: DateFieldValue;
  dellinelist?: StringFieldValue;
  mpcode?: StringFieldValue;
  mpname?: StringFieldValue;
  routcode?: StringFieldValue;
  routname?: StringFieldValue;
  warnactive?: NumberFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  fldals?: StringFieldValue;
  xbufs?: StringFieldValue;
  paramlist?: StringFieldValue;
  paramdellist?: StringFieldValue;
  productlinecode?: StringFieldValue;
  mainitemtype?: NumberFieldValue;
  canconfig?: NumberFieldValue;
  itemcode?: StringFieldValue;
  itemname?: StringFieldValue;
  docals?: StringFieldValue;
  fcnochanged?: NumberFieldValue;
  revWithoutRouting?: NumberFieldValue;
  revUseDeptTimeForPrd?: NumberFieldValue;
  revPegType?: NumberFieldValue;
  revPegGuid?: StringFieldValue;
  revGuid?: StringFieldValue;
  revUseWsForPrd?: NumberFieldValue;
  revWsType?: NumberFieldValue;
  revWsref?: NumberFieldValue;
  revWscode?: StringFieldValue;
  revOpreqref?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for EngineeringChanges entities
 */
export interface EngineeringChangesAnalytics {
  total: number;
  // Add EngineeringChanges-specific analytics fields
}
