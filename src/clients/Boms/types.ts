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
 * Interface for RSCollection[RS_BOMPrmListXML]
 */
export interface RscollectionrsBomprmlistxml {
  Meta?: Meta;
  items?: RsBomprmlistxml[];
}

/**
 * Interface for RSCollection[RS_ToolReqListXML]
 */
export interface RscollectionrsToolreqlistxml {
  Meta?: Meta;
  items?: RsToolreqlistxml[];
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
 * Represents individual transaction records within a Boms collection.
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
 * Represents individual transaction records within a Boms collection.
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
 * Represents individual transaction records within a Boms collection.
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
 * Represents individual transaction records within a Boms collection.
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
 * RsBomprmlistxml transaction line item
 *
 * Represents individual transaction records within a Boms collection.
 */
export interface RsBomprmlistxml extends BaseEntity {
  PARAMREF?: number;
  BOMMASTERREF?: number;
  LINE_NO?: number;
  PARAM_CODE?: string;
  PARAM_NAME?: string;
  PARAM_DEFAULT?: number;
}

/**
 * RsToolreqlistxml transaction line item
 *
 * Represents individual transaction records within a Boms collection.
 */
export interface RsToolreqlistxml extends BaseEntity {
  OPREQREF?: number;
  LINE_NO?: number;
  TOOLREF?: number;
  AMOUNT?: number;
  UOMREF?: number;
  ITEM_CODE?: string;
  ITEM_NAME?: string;
  UNIT_SET_CODE?: string;
  UNIT_CODE?: string;
  TOOL_TYPE?: number;
  REVREF?: number;
  REVISION_CODE?: string;
  OPERATIONREF?: number;
  OPERATION_CODE?: string;
}

/**
 * Boms entity interface based on swagger definition
 */
export interface Boms extends BaseEntity {
  CODE?: string;
  NAME?: string;
  TYPE?: number;
  CLIENTREF?: number;
  ARP_CODE?: string;
  VALIDREVREF?: number;
  MAINPRODREF?: number;
  APPROVED?: number;
  DEMONTAJ?: number;
  AUXIL_CODE?: string;
  AUXIL_CODE2?: string;
  AUTH_CODE?: string;
  WF_STATUS?: number;
  ROUTINGREF?: number;
  LOGICALREF?: number;
  REV_CODE?: string;
  REV_NAME?: string;
  REV_RECORD_STATUS?: number;
  BOMMASTERREF?: number;
  ENGCHGREF?: number;
  REV_DATE?: string;
  REV_DATA_SITEID?: number;
  RECSTATUS?: number;
  REV_DATA_REFERENCE?: number;
  REV_WF_STATUS?: number;
  QTY_DEPT_TIME?: number;
  QTY_UNDEPT_TIME?: number;
  STD_OVHD_FORMULA?: string;
  STD_OVHD_RP_FORMULA?: string;
  QTY_DEP_DURATION?: number;
  QTY_INDEP_DURATION?: number;
  OVERLAP_TYPE?: number;
  OVERLAP_AMOUNT?: number;
  OVERLAP_PERCENT?: number;
  REV_PRINT_CNT?: number;
  REV_PRINT_DATE?: string;
  UPDATED?: number;
  REVUPDATED?: number;
  SAVE_NEW_REV?: number;
  OLD_REV_NAME?: string;
  OLD_REV_CODE?: string;
  LINES?: RscollectionrsBomlinexml;
  DELLINELIST?: string;
  MP_CODE?: string;
  MP_NAME?: string;
  ROUT_CODE?: string;
  ROUT_NAME?: string;
  WARNACTIVE?: number;
  ITEXT?: string;
  TEXTCHG?: number;
  FLDALS?: string;
  XBUFS?: string;
  BOM_PARAMETERS?: RscollectionrsBomprmlistxml;
  PARAMDELLIST?: string;
  PRODUCTLINEREF?: number;
  PRINT_CNT?: number;
  PRINT_DATE?: string;
  PRODUCT_LINE_CODE?: string;
  STD_OVHD_FORMULA2?: string;
  STD_OVHD_RP_FORMULA2?: string;
  STD_OVHD_FORMULA3?: string;
  STD_OVHD_RP_FORMULA3?: string;
  STD_OVHD_FORMULA4?: string;
  STD_OVHD_RP_FORMULA4?: string;
  STD_OVHD_FORMULA5?: string;
  STD_OVHD_RP_FORMULA5?: string;
  STD_OVHD_FORMULA6?: string;
  STD_OVHD_RP_FORMULA6?: string;
  STD_OVHD_FORMULA7?: string;
  STD_OVHD_RP_FORMULA7?: string;
  STD_OVHD_FORMULA8?: string;
  STD_OVHD_RP_FORMULA8?: string;
  STD_OVHD_FORMULA9?: string;
  STD_OVHD_RP_FORMULA9?: string;
  STD_OVHD_FORMULA10?: string;
  STD_OVHD_RP_FORMULA10?: string;
  VARIABLE_DEF1?: string;
  VARIABLE_DEF2?: string;
  VARIABLE_DEF3?: string;
  VARIABLE_DEF4?: string;
  VARIABLE_DEF5?: string;
  VARIABLE_DEF6?: string;
  VARIABLE_DEF7?: string;
  VARIABLE_DEF8?: string;
  VARIABLE_DEF9?: string;
  VARIABLE_DEF10?: string;
  WITHOUT_ROUTING?: number;
  USE_DEPT_TIME_FOR_PRD?: number;
  PEG_TYPE?: number;
  PEG_GUID?: string;
  GUID?: string;
  USE_WS_FOR_PRD?: number;
  WSREF?: number;
  WS_CODE?: string;
  WS_TYPE?: number;
  OPREQREF?: number;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  MOLDREQLIST?: RscollectionrsToolreqlistxml;
  DELMOLDREQLIST?: string;
  IMAGE2INC?: number;
}

/**
 * Union type of all Boms field names for type-safe field selection and sorting
 */
export type BomsField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'NAME'
  | 'TYPE'
  | 'CLIENTREF'
  | 'ARP_CODE'
  | 'VALIDREVREF'
  | 'MAINPRODREF'
  | 'APPROVED'
  | 'RECORD_STATUS'
  | 'DEMONTAJ'
  | 'AUXIL_CODE'
  | 'AUXIL_CODE2'
  | 'AUTH_CODE'
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
  | 'TEXTINC'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'WF_STATUS'
  | 'ROUTINGREF'
  | 'LOGICALREF'
  | 'REV_CODE'
  | 'REV_NAME'
  | 'REV_RECORD_STATUS'
  | 'BOMMASTERREF'
  | 'ENGCHGREF'
  | 'REV_DATE'
  | 'REV_DATA_SITEID'
  | 'RECSTATUS'
  | 'REV_DATA_REFERENCE'
  | 'REV_WF_STATUS'
  | 'QTY_DEPT_TIME'
  | 'QTY_UNDEPT_TIME'
  | 'STD_OVHD_FORMULA'
  | 'STD_OVHD_RP_FORMULA'
  | 'QTY_DEP_DURATION'
  | 'QTY_INDEP_DURATION'
  | 'OVERLAP_TYPE'
  | 'OVERLAP_AMOUNT'
  | 'OVERLAP_PERCENT'
  | 'REV_PRINT_CNT'
  | 'REV_PRINT_DATE'
  | 'UPDATED'
  | 'REVUPDATED'
  | 'SAVE_NEW_REV'
  | 'OLD_REV_NAME'
  | 'OLD_REV_CODE'
  | 'LINES'
  | 'DELLINELIST'
  | 'MP_CODE'
  | 'MP_NAME'
  | 'ROUT_CODE'
  | 'ROUT_NAME'
  | 'WARNACTIVE'
  | 'ITEXT'
  | 'TEXTCHG'
  | 'FLDALS'
  | 'XBUFS'
  | 'BOM_PARAMETERS'
  | 'PARAMDELLIST'
  | 'PRODUCTLINEREF'
  | 'PRINT_CNT'
  | 'PRINT_DATE'
  | 'PRODUCT_LINE_CODE'
  | 'STD_OVHD_FORMULA2'
  | 'STD_OVHD_RP_FORMULA2'
  | 'STD_OVHD_FORMULA3'
  | 'STD_OVHD_RP_FORMULA3'
  | 'STD_OVHD_FORMULA4'
  | 'STD_OVHD_RP_FORMULA4'
  | 'STD_OVHD_FORMULA5'
  | 'STD_OVHD_RP_FORMULA5'
  | 'STD_OVHD_FORMULA6'
  | 'STD_OVHD_RP_FORMULA6'
  | 'STD_OVHD_FORMULA7'
  | 'STD_OVHD_RP_FORMULA7'
  | 'STD_OVHD_FORMULA8'
  | 'STD_OVHD_RP_FORMULA8'
  | 'STD_OVHD_FORMULA9'
  | 'STD_OVHD_RP_FORMULA9'
  | 'STD_OVHD_FORMULA10'
  | 'STD_OVHD_RP_FORMULA10'
  | 'VARIABLE_DEF1'
  | 'VARIABLE_DEF2'
  | 'VARIABLE_DEF3'
  | 'VARIABLE_DEF4'
  | 'VARIABLE_DEF5'
  | 'VARIABLE_DEF6'
  | 'VARIABLE_DEF7'
  | 'VARIABLE_DEF8'
  | 'VARIABLE_DEF9'
  | 'VARIABLE_DEF10'
  | 'WITHOUT_ROUTING'
  | 'USE_DEPT_TIME_FOR_PRD'
  | 'PEG_TYPE'
  | 'PEG_GUID'
  | 'GUID'
  | 'USE_WS_FOR_PRD'
  | 'WSREF'
  | 'WS_CODE'
  | 'WS_TYPE'
  | 'OPREQREF'
  | 'DEFNFLDSLIST'
  | 'MOLDREQLIST'
  | 'DELMOLDREQLIST'
  | 'IMAGEINC'
  | 'IMAGE2INC';

/**
 * Type-safe sort specification for Boms queries
 */
export type BomsSortSpec =
  | [BomsField]
  | [BomsField, 'asc' | 'desc']
  | [BomsField[], 'asc' | 'desc']
  | [BomsField[]];

/**
 * Type-safe query options for Boms entities
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
export interface BomsQueryOptions extends Omit<QueryOptions<BomsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: BomsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: BomsSortSpec;
}

/**
 * Search criteria for Boms entities
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
export interface BomsSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  name?: StringFieldValue;
  type?: NumberFieldValue;
  clientref?: NumberFieldValue;
  arpCode?: StringFieldValue;
  validrevref?: NumberFieldValue;
  mainprodref?: NumberFieldValue;
  approved?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  demontaj?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  auxilCode2?: StringFieldValue;
  authCode?: StringFieldValue;
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
  textinc?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  wfStatus?: NumberFieldValue;
  routingref?: NumberFieldValue;
  logicalref?: NumberFieldValue;
  revCode?: StringFieldValue;
  revName?: StringFieldValue;
  revRecordStatus?: NumberFieldValue;
  bommasterref?: NumberFieldValue;
  engchgref?: NumberFieldValue;
  revDate?: StringFieldValue;
  revDataSiteid?: NumberFieldValue;
  recstatus?: NumberFieldValue;
  revDataReference?: NumberFieldValue;
  revWfStatus?: NumberFieldValue;
  qtyDeptTime?: NumberFieldValue;
  qtyUndeptTime?: NumberFieldValue;
  stdOvhdFormula?: StringFieldValue;
  stdOvhdRpFormula?: StringFieldValue;
  qtyDepDuration?: NumberFieldValue;
  qtyIndepDuration?: NumberFieldValue;
  overlapType?: NumberFieldValue;
  overlapAmount?: NumberFieldValue;
  overlapPercent?: NumberFieldValue;
  revPrintCnt?: NumberFieldValue;
  revPrintDate?: StringFieldValue;
  updated?: NumberFieldValue;
  revupdated?: NumberFieldValue;
  saveNewRev?: NumberFieldValue;
  oldRevName?: StringFieldValue;
  oldRevCode?: StringFieldValue;
  lines?: DateFieldValue;
  dellinelist?: StringFieldValue;
  mpCode?: StringFieldValue;
  mpName?: StringFieldValue;
  routCode?: StringFieldValue;
  routName?: StringFieldValue;
  warnactive?: NumberFieldValue;
  itext?: StringFieldValue;
  textchg?: NumberFieldValue;
  fldals?: StringFieldValue;
  xbufs?: StringFieldValue;
  bomParameters?: DateFieldValue;
  paramdellist?: StringFieldValue;
  productlineref?: NumberFieldValue;
  printCnt?: NumberFieldValue;
  printDate?: StringFieldValue;
  productLineCode?: StringFieldValue;
  stdOvhdFormula2?: StringFieldValue;
  stdOvhdRpFormula2?: StringFieldValue;
  stdOvhdFormula3?: StringFieldValue;
  stdOvhdRpFormula3?: StringFieldValue;
  stdOvhdFormula4?: StringFieldValue;
  stdOvhdRpFormula4?: StringFieldValue;
  stdOvhdFormula5?: StringFieldValue;
  stdOvhdRpFormula5?: StringFieldValue;
  stdOvhdFormula6?: StringFieldValue;
  stdOvhdRpFormula6?: StringFieldValue;
  stdOvhdFormula7?: StringFieldValue;
  stdOvhdRpFormula7?: StringFieldValue;
  stdOvhdFormula8?: StringFieldValue;
  stdOvhdRpFormula8?: StringFieldValue;
  stdOvhdFormula9?: StringFieldValue;
  stdOvhdRpFormula9?: StringFieldValue;
  stdOvhdFormula10?: StringFieldValue;
  stdOvhdRpFormula10?: StringFieldValue;
  variableDef1?: StringFieldValue;
  variableDef2?: StringFieldValue;
  variableDef3?: StringFieldValue;
  variableDef4?: StringFieldValue;
  variableDef5?: StringFieldValue;
  variableDef6?: StringFieldValue;
  variableDef7?: StringFieldValue;
  variableDef8?: StringFieldValue;
  variableDef9?: StringFieldValue;
  variableDef10?: StringFieldValue;
  withoutRouting?: NumberFieldValue;
  useDeptTimeForPrd?: NumberFieldValue;
  pegType?: NumberFieldValue;
  pegGuid?: StringFieldValue;
  guid?: StringFieldValue;
  useWsForPrd?: NumberFieldValue;
  wsref?: NumberFieldValue;
  wsCode?: StringFieldValue;
  wsType?: NumberFieldValue;
  opreqref?: NumberFieldValue;
  defnfldslist?: DateFieldValue;
  moldreqlist?: DateFieldValue;
  delmoldreqlist?: StringFieldValue;
  imageinc?: NumberFieldValue;
  image2inc?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Boms entities
 */
export interface BomsAnalytics {
  total: number;
  // Add Boms-specific analytics fields
}
