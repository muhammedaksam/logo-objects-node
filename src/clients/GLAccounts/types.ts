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
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
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
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a Glaccounts collection.
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
 * Glaccounts entity interface based on swagger definition
 */
export interface Glaccounts extends BaseEntity {
  ACTIVE?: number;
  CODE?: string;
  DESCRIPTION?: string;
  DESCRIPTION2?: string;
  AUXIL_CODE?: string;
  AUXIL_CODE2?: string;
  AUXIL_CODE3?: string;
  AUXIL_CODE4?: string;
  AUXIL_CODE5?: string;
  AUTH_CODE?: string;
  UNIT?: string;
  ADDINFOPTR?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
  DIFFACC_CODE?: string;
  CURRDIFREF?: number;
  SUBACCOUNTS?: number;
  LEVEL?: number;
  GROUP_CODE?: number;
  ACCOUNT_TYPE?: number;
  MNDTRY_QUAN?: number;
  MNDTRY_OHP?: number;
  EXTENREF?: number;
  EDITCODE?: string;
  XBUFS?: string;
  LANGP?: string;
  ACCOUNT_CHAR?: number;
  INFLATION_FLAG?: number;
  CURR_DIFF_DEBTREF?: number;
  DIFFDEBTACC_CODE?: string;
  GRPTRANSACCREF?: number;
  GRPTRANSACC_CODE?: string;
  CATEGORY?: number;
  PROJECT_CONTROL?: number;
  INF_DIFF_ACCCODE?: string;
  INF_DIFF_ACCREF?: number;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  FTFLAGS?: string;
  CCURRENCY?: number;
  CURRATETYPE?: number;
  FIXEDCURRTYPE?: number;
  CL_NAME?: string;
  TAX_NR?: string;
  FOR_TAX_DECL?: number;
  VAT_ACC?: number;
  IS_BDGT_LINE?: number;
  BDGTACCREF?: number;
  BDGT_ACC_CODE?: string;
  BDREFLACCREF?: number;
  BDGT_REFL_ACC_CODE?: string;
  BDGTPAYAREF?: number;
  BDGT_PAY_ACC_CODE?: string;
  BDPAYREFLAREF?: number;
  BDGT_PAY_REFL_ACC_CODE?: string;
  CRBDGTACCLN?: number;
  CRBDGTPAYALN?: number;
  CORP_CODE1?: string;
  CORP_CODE2?: string;
  CORP_CODE3?: string;
  CORP_CODE4?: string;
  FUNC_CODE1?: string;
  FUNC_CODE2?: string;
  FUNC_CODE3?: string;
  FUNC_CODE4?: string;
  FIN_CODE?: string;
  ECO_CODE1?: string;
  ECO_CODE2?: string;
  ECO_CODE3?: string;
  ECO_CODE4?: string;
  VATREFLAREF?: number;
  VAT_REFL_ACC_CODE?: string;
  VATREFLOTHAREF?: number;
  VAT_REFL_OTH_ACC_CODE?: string;
  TCKNO?: string;
  PERSCOMPANY?: number;
  IS_CASH?: number;
  ITEXT?: string;
  TEXTINCENG?: number;
  ITEXTENG?: string;
  GUID?: string;
  ACCRELCONTROL?: string;
  REFLECTINCACCREF?: number;
  REFLECTOUTCACCREF?: number;
  INFCORRACCREF?: number;
  POSDIFFACCREF?: number;
  NEGDIFFACCREF?: number;
  PINDEXCALCTYP?: number;
}

/**
 * Union type of all Glaccounts field names for type-safe field selection and sorting
 */
export type GlaccountsField =
  | 'INTERNAL_REFERENCE'
  | 'RECORD_STATUS'
  | 'ACTIVE'
  | 'CODE'
  | 'DESCRIPTION'
  | 'DESCRIPTION2'
  | 'AUXIL_CODE'
  | 'AUXIL_CODE2'
  | 'AUXIL_CODE3'
  | 'AUXIL_CODE4'
  | 'AUXIL_CODE5'
  | 'AUTH_CODE'
  | 'UNIT'
  | 'ADDINFOPTR'
  | 'OHP_CODE'
  | 'CENTERREF'
  | 'DIFFACC_CODE'
  | 'CURRDIFREF'
  | 'SUBACCOUNTS'
  | 'LEVEL'
  | 'GROUP_CODE'
  | 'ACCOUNT_TYPE'
  | 'MNDTRY_QUAN'
  | 'MNDTRY_OHP'
  | 'EXTENREF'
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
  | 'EDITCODE'
  | 'XBUFS'
  | 'LANGP'
  | 'XML_ATTRIBUTE'
  | 'ACCOUNT_CHAR'
  | 'INFLATION_FLAG'
  | 'CURR_DIFF_DEBTREF'
  | 'DIFFDEBTACC_CODE'
  | 'GRPTRANSACCREF'
  | 'GRPTRANSACC_CODE'
  | 'CATEGORY'
  | 'PROJECT_CONTROL'
  | 'INF_DIFF_ACCCODE'
  | 'INF_DIFF_ACCREF'
  | 'DEFNFLDSLIST'
  | 'FTFLAGS'
  | 'CCURRENCY'
  | 'CURRATETYPE'
  | 'FIXEDCURRTYPE'
  | 'CL_NAME'
  | 'TAX_NR'
  | 'FOR_TAX_DECL'
  | 'VAT_ACC'
  | 'IS_BDGT_LINE'
  | 'BDGTACCREF'
  | 'BDGT_ACC_CODE'
  | 'BDREFLACCREF'
  | 'BDGT_REFL_ACC_CODE'
  | 'BDGTPAYAREF'
  | 'BDGT_PAY_ACC_CODE'
  | 'BDPAYREFLAREF'
  | 'BDGT_PAY_REFL_ACC_CODE'
  | 'CRBDGTACCLN'
  | 'CRBDGTPAYALN'
  | 'CORP_CODE1'
  | 'CORP_CODE2'
  | 'CORP_CODE3'
  | 'CORP_CODE4'
  | 'FUNC_CODE1'
  | 'FUNC_CODE2'
  | 'FUNC_CODE3'
  | 'FUNC_CODE4'
  | 'FIN_CODE'
  | 'ECO_CODE1'
  | 'ECO_CODE2'
  | 'ECO_CODE3'
  | 'ECO_CODE4'
  | 'VATREFLAREF'
  | 'VAT_REFL_ACC_CODE'
  | 'VATREFLOTHAREF'
  | 'VAT_REFL_OTH_ACC_CODE'
  | 'TCKNO'
  | 'PERSCOMPANY'
  | 'IS_CASH'
  | 'TEXTINC'
  | 'ITEXT'
  | 'TEXTINCENG'
  | 'ITEXTENG'
  | 'GUID'
  | 'ACCRELCONTROL'
  | 'REFLECTINCACCREF'
  | 'REFLECTOUTCACCREF'
  | 'INFCORRACCREF'
  | 'POSDIFFACCREF'
  | 'NEGDIFFACCREF'
  | 'PINDEXCALCTYP';

/**
 * Type-safe sort specification for Glaccounts queries
 */
export type GlaccountsSortSpec =
  | [GlaccountsField]
  | [GlaccountsField, 'asc' | 'desc']
  | [GlaccountsField[], 'asc' | 'desc']
  | [GlaccountsField[]];

/**
 * Type-safe query options for Glaccounts entities
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
export interface GlaccountsQueryOptions extends Omit<
  QueryOptions<GlaccountsField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: GlaccountsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: GlaccountsSortSpec;
}

/**
 * Search criteria for Glaccounts entities
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
export interface GlaccountsSearchCriteria {
  internalReference?: NumberFieldValue;
  recordStatus?: NumberFieldValue;
  active?: NumberFieldValue;
  code?: StringFieldValue;
  description?: StringFieldValue;
  description2?: StringFieldValue;
  auxilCode?: StringFieldValue;
  auxilCode2?: StringFieldValue;
  auxilCode3?: StringFieldValue;
  auxilCode4?: StringFieldValue;
  auxilCode5?: StringFieldValue;
  authCode?: StringFieldValue;
  unit?: StringFieldValue;
  addinfoptr?: NumberFieldValue;
  ohpCode?: StringFieldValue;
  centerref?: NumberFieldValue;
  diffaccCode?: StringFieldValue;
  currdifref?: NumberFieldValue;
  subaccounts?: NumberFieldValue;
  level?: NumberFieldValue;
  groupCode?: NumberFieldValue;
  accountType?: NumberFieldValue;
  mndtryQuan?: NumberFieldValue;
  mndtryOhp?: NumberFieldValue;
  extenref?: NumberFieldValue;
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
  editcode?: StringFieldValue;
  xbufs?: StringFieldValue;
  langp?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  accountChar?: NumberFieldValue;
  inflationFlag?: NumberFieldValue;
  currDiffDebtref?: NumberFieldValue;
  diffdebtaccCode?: StringFieldValue;
  grptransaccref?: NumberFieldValue;
  grptransaccCode?: StringFieldValue;
  category?: NumberFieldValue;
  projectControl?: NumberFieldValue;
  infDiffAcccode?: StringFieldValue;
  infDiffAccref?: NumberFieldValue;
  defnfldslist?: DateFieldValue;
  ftflags?: StringFieldValue;
  ccurrency?: NumberFieldValue;
  curratetype?: NumberFieldValue;
  fixedcurrtype?: NumberFieldValue;
  clName?: StringFieldValue;
  taxNr?: StringFieldValue;
  forTaxDecl?: NumberFieldValue;
  vatAcc?: NumberFieldValue;
  isBdgtLine?: NumberFieldValue;
  bdgtaccref?: NumberFieldValue;
  bdgtAccCode?: StringFieldValue;
  bdreflaccref?: NumberFieldValue;
  bdgtReflAccCode?: StringFieldValue;
  bdgtpayaref?: NumberFieldValue;
  bdgtPayAccCode?: StringFieldValue;
  bdpayreflaref?: NumberFieldValue;
  bdgtPayReflAccCode?: StringFieldValue;
  crbdgtaccln?: NumberFieldValue;
  crbdgtpayaln?: NumberFieldValue;
  corpCode1?: StringFieldValue;
  corpCode2?: StringFieldValue;
  corpCode3?: StringFieldValue;
  corpCode4?: StringFieldValue;
  funcCode1?: StringFieldValue;
  funcCode2?: StringFieldValue;
  funcCode3?: StringFieldValue;
  funcCode4?: StringFieldValue;
  finCode?: StringFieldValue;
  ecoCode1?: StringFieldValue;
  ecoCode2?: StringFieldValue;
  ecoCode3?: StringFieldValue;
  ecoCode4?: StringFieldValue;
  vatreflaref?: NumberFieldValue;
  vatReflAccCode?: StringFieldValue;
  vatreflotharef?: NumberFieldValue;
  vatReflOthAccCode?: StringFieldValue;
  tckno?: StringFieldValue;
  perscompany?: NumberFieldValue;
  isCash?: NumberFieldValue;
  textinc?: NumberFieldValue;
  itext?: StringFieldValue;
  textinceng?: NumberFieldValue;
  itexteng?: StringFieldValue;
  guid?: StringFieldValue;
  accrelcontrol?: StringFieldValue;
  reflectincaccref?: NumberFieldValue;
  reflectoutcaccref?: NumberFieldValue;
  infcorraccref?: NumberFieldValue;
  posdiffaccref?: NumberFieldValue;
  negdiffaccref?: NumberFieldValue;
  pindexcalctyp?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Glaccounts entities
 */
export interface GlaccountsAnalytics {
  total: number;
  // Add Glaccounts-specific analytics fields
}
