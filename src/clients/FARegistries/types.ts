import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_FAYearXML]
 */
export interface RscollectionrsFayearxml {
  Meta?: Meta;
  items?: RsFayearxml[];
}

/**
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
}

/**
 * Interface for RSCollection[RS_FAProdNumXML]
 */
export interface RscollectionrsFaprodnumxml {
  Meta?: Meta;
  items?: RsFaprodnumxml[];
}

/**
 * Interface for RSCollection[RS_FAMaintainXML]
 */
export interface RscollectionrsFamaintainxml {
  Meta?: Meta;
  items?: RsFamaintainxml[];
}

/**
 * Interface for RSCollection[RS_FAGuaranteeXML]
 */
export interface RscollectionrsFaguaranteexml {
  Meta?: Meta;
  items?: RsFaguaranteexml[];
}

/**
 * Interface for RSCollection[RS_FARegNewValXML]
 */
export interface RscollectionrsFaregnewvalxml {
  Meta?: Meta;
  items?: RsFaregnewvalxml[];
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
 * RsFayearxml transaction line item
 *
 * Represents individual transaction records within a Faregistries collection.
 */
export interface RsFayearxml extends BaseEntity {
  TABLE_TYPE?: number;
  FREGREF?: number;
  YEAR?: number;
  DEPR_RATE?: number;
  REVAL_RATE?: number;
  DEPR_TYPE?: number;
  QUANTITY_OUT?: number;
  LC_INIT_COST?: number;
  LC_EXPENSES?: number;
  LC_EXPENSES_EXCLRV?: number;
  LC_CUMEXPEN_EXCLRV?: number;
  LC_AMOUNT_OUT?: number;
  LC_AMNOUT_EXCLRV?: number;
  LC_BOOKVAL_OPEN?: number;
  LC_ACCDEPR_OPEN?: number;
  LC_ACCDEPR_OUT?: number;
  LC_BOOKVAL_REVD?: number;
  LC_ACCDEPR_REVD?: number;
  LC_ANNDEPR?: number;
  LC_ACCDEPR_YREND?: number;
  LC_ACCDEPR_INCOST?: number;
  LC_REV_AMOUNT_IN?: number;
  LC_REV_AMOUNT_OUT?: number;
  LC_NET_VAL_RV?: number;
  LC_PERIOD_REVD?: number;
  LC_PERIOD_ACCDEPR_REVD?: number;
  LC_PERIOD_DEPR?: number;
  LC_PERIOD_DEPR_KKEG?: number;
  LC_REV_FUND?: number;
  FC_INIT_COST?: number;
  FC_EXPENSES?: number;
  FC_EXPENSES_EXCLRV?: number;
  FC_CUMEXPEN_EXCLRV?: number;
  FC_AMOUNT_OUT?: number;
  FC_AMNOUT_EXCLRV?: number;
  FC_BOOKVAL_OPEN?: number;
  FC_ACCDEPR_OPEN?: number;
  FC_ACCDEPR_OUT?: number;
  FC_BOOKVAL_REVD?: number;
  FC_ACCDEPR_REVD?: number;
  FC_ANNDEPR?: number;
  FC_ACCDEPR_YREND?: number;
  FC_ACCDEPR_INCOST?: number;
  FC_REV_AMOUNT_IN?: number;
  FC_REV_AMOUNT_OUT?: number;
  FC_NET_VAL_RV?: number;
  FC_PERIOD_REVD?: number;
  FC_PERIOD_ACCDEPR_REVD?: number;
  FC_PERIOD_DEPR?: number;
  FC_PERIOD_DEPR_KKEG?: number;
  FC_REV_FUND?: number;
  VAT_DEDUCTED?: number;
  DEPR_POSTED?: number;
  REVAL_POSTED?: number;
  VAT_POSTED?: number;
  MONTH_CALC?: number;
  ACCFICHEREF?: number;
  INFIDX?: number;
  CLOSED?: number;
  FA_EXP_ITEM_REF?: number;
  FA_EXP_TYPE?: number;
  FA_EXP_ITEM_CODE?: string;
  PROD_AMOUNT?: number;
  CUT_DEPR_AMOUNT?: number;
  STOPPED?: number;
  DIVISION?: number;
  ALLOCATE_ALL?: number;
  SKIP_DEPR?: number;
  REV_PRICE_IDX_DATE?: string;
  REV_ACC_FICHE_REF?: number;
  LC_TOT_COST?: number;
  FC_TOT_COST?: number;
  REVCALCTYPE?: number;
  LC_NETFAVAL?: number;
  FC_NETFAVAL?: number;
  INFREVRATE?: number;
  PERDINFCORRECT?: number;
  PERDACCDEPRCORRECT?: number;
  PERDINFCORRECTCALC?: number;
  PERDACCDEPRCORRECT2?: number;
}

/**
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a Faregistries collection.
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
 * RsFaprodnumxml transaction line item
 *
 * Represents individual transaction records within a Faregistries collection.
 */
export interface RsFaprodnumxml extends BaseEntity {
  YEAR?: number;
  MONTH_TOTALS1?: number;
  MONTH_TOTALS2?: number;
  MONTH_TOTALS3?: number;
  MONTH_TOTALS4?: number;
  MONTH_TOTALS5?: number;
  MONTH_TOTALS6?: number;
  MONTH_TOTALS7?: number;
  MONTH_TOTALS8?: number;
  MONTH_TOTALS9?: number;
  MONTH_TOTALS10?: number;
  MONTH_TOTALS11?: number;
  MONTH_TOTALS12?: number;
  YEAR_TOTAL?: number;
}

/**
 * RsFamaintainxml transaction line item
 *
 * Represents individual transaction records within a Faregistries collection.
 */
export interface RsFamaintainxml extends BaseEntity {
  MNTLOCTYPE?: number;
  CLIENTREF?: number;
  FAREF?: number;
  DATE?: string;
  QUANTITY?: number;
  TOTAL?: number;
  EXP?: string;
  CLIENTCODE?: string;
}

/**
 * RsFaguaranteexml transaction line item
 *
 * Represents individual transaction records within a Faregistries collection.
 */
export interface RsFaguaranteexml extends BaseEntity {
  FAREF?: number;
  GRNTDOCNO?: string;
  BEGDATE?: string;
  ENDDATE?: string;
  EXP?: string;
  DATA_REFRENCE?: number;
}

/**
 * RsFaregnewvalxml transaction line item
 *
 * Represents individual transaction records within a Faregistries collection.
 */
export interface RsFaregnewvalxml extends BaseEntity {
  FAREGREF?: number;
  DATE?: string;
  NEWVALUE?: number;
  LINENO?: number;
  ACCFLG?: number;
  ACCFICHEREF?: number;
  REPORTRATE?: number;
  NEWREPORTNET?: number;
  LASTBOOKVAL?: number;
  DIFFVALINC?: number;
  DIFFVALDEC?: number;
  DIFFREPVALINC?: number;
  DIFFREPVALDEC?: number;
  LASTREPBOOKVAL?: number;
  GL_CODE1?: string;
  GL_CODE2?: string;
  OHP_CODE1?: string;
  OHP_CODE2?: string;
}

/**
 * Faregistries entity interface based on swagger definition
 */
export interface Faregistries extends BaseEntity {
  CODE?: string;
  DIVISION?: number;
  DEPARTMENT?: number;
  SOURCE_WH?: number;
  TRANSFER?: number;
  ITEM_CODE?: string;
  CRDREF?: number;
  FICHEREF?: number;
  DATE_ACQUIRED?: string;
  DATE_DEPRSTART?: string;
  QUANTITY?: number;
  QUANTITY_OUT?: number;
  ACQ_VALUE?: number;
  VAT_AMOUNT?: number;
  VAT_POST_DUR?: number;
  DEPR_RATE?: number;
  DEPR_DUR?: number;
  DEPR_TYPE?: number;
  REVALUATE?: number;
  REV_DEPR?: number;
  PARTIAL_DEPR?: number;
  CANCELLED?: number;
  RC_XRATE?: number;
  RC_ACQ_VALUE?: number;
  TOTAL_EXPENSES?: number;
  ACCUM_DEPR?: number;
  ACCUM_REVAL?: number;
  RC_TOTAL_EXPN?: number;
  RC_ACCUM_DEPR?: number;
  RC_ACCUM_REVAL?: number;
  DEPR_TYPE2?: number;
  DEPR_RATE2?: number;
  DEPR_DUR2?: number;
  REVALUATE2?: number;
  REV_DEPR2?: number;
  OPEN_REVAL?: number;
  OPEN_DEPR?: number;
  OPEN_REVDEPR?: number;
  RC_OPENREV?: number;
  RC_OPENDEPR?: number;
  RC_OPENREVDEPR?: number;
  OPEN_REVAL2?: number;
  OPEN_DEPR2?: number;
  OPEN_REVDEPR2?: number;
  RC_OPENREV2?: number;
  RC_OPENDEPR2?: number;
  RC_OPENREVDEPR2?: number;
  XBUFS?: string;
  YEARLY_LOCAL?: RscollectionrsFayearxml;
  YEARLY_FC?: RscollectionrsFayearxml;
  YEARLY_LOCAL_INFL?: RscollectionrsFayearxml;
  YEARLY_FC_INFL?: RscollectionrsFayearxml;
  DATE_DEPRSTART2ORG?: number;
  DATE_DEPRSTART2?: string;
  PART_DEP2?: number;
  DEPR_TYPE3?: number;
  DEPR_RATE3?: number;
  DEPR_DUR3?: number;
  PART_DEP3?: number;
  DATE_DEPRSTART3?: string;
  OPEN_REVAL3?: number;
  OPEN_DEPR3?: number;
  OPEN_REVDEPR3?: number;
  RC_OPENREV3?: number;
  RC_OPENDEPR3?: number;
  RC_OPENREVDEPR3?: number;
  DIFF_PRICE?: number;
  DIFFREP_PRICE?: number;
  PACKET?: number;
  SELLVAT?: number;
  RETURNVAT?: number;
  CRD_LOGOID?: string;
  INFLDX?: number;
  LID_CONFIRMED?: number;
  DISC_INCL?: number;
  DISC_RATE?: number;
  ANNUAL_DIST_VAL?: number;
  INF_BASED_VALUE?: number;
  REGDEFINITION?: string;
  DEPRTYPE4?: number;
  DEPRRATE4?: number;
  DEPRDUR4?: number;
  PARTDEP4?: number;
  DATEOFDEPR4?: string;
  RC_OPENREV4?: number;
  RC_OPENDEPR4?: number;
  RC_OPENREVDEPR4?: number;
  RC_OPENREV4X?: number;
  RC_OPENDEPR4X?: number;
  INFIDX2?: number;
  ANNUALDISTVAL2?: number;
  INFLBASEDVALUE2?: number;
  DATE_ACTIVE?: string;
  TAXEXPRATE2?: number;
  TAXACCFLAG?: number;
  ACCFICHEREF?: number;
  REGTYPCOD?: string;
  REGTYPDEF?: string;
  REGEXPENSCOD?: string;
  REGEXPENSDEF?: string;
  DEPRSTPREASN?: number;
  DEPRSTPDATE?: string;
  PRODCAPACITY?: number;
  CAPACITY_UNIT?: string;
  TAXEXPTYP2?: number;
  CURRTYPE?: number;
  AUTH_CODE?: string;
  APPROVE?: number;
  APPROVEDATE?: string;
  DATEOFDEPR5?: number;
  DEPRRATE5?: number;
  DEPRDUR5?: number;
  DEPRTYPE5?: number;
  REVALFLAG5?: number;
  REVDEPRFLAG5?: number;
  PARTDEP5?: number;
  OPEN_REV5?: number;
  OPEN_DEPR5?: number;
  OPEN_REVDEPR5?: number;
  RC_OPENREV5?: number;
  RC_OPENDEPR5?: number;
  RC_OPENREVDEPR5?: number;
  DEPRDURTYPE2?: number;
  FA_USEFUL_LIFE_CODE1?: string;
  FA_USEFUL_LIFE_CODE2?: string;
  FA_USEFUL_LIFE_CODE3?: string;
  FA_USEFUL_LIFE_CODE4?: string;
  FA_USEFUL_LIFE_CODE5?: string;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  CENTERREF?: number;
  OHP_CODE?: string;
  TOTAL_REV_AMOUNT?: number;
  TOTAL_REV_AMOUNTX?: number;
  FIGS_COST_OP?: number;
  FIGS_COST_OPX?: number;
  WSREF?: number;
  WS_CODE?: string;
  MAINT_LIFETRACKTYPE?: number;
  MAINT_USAGELIFE?: number;
  MAINT_FACTOR?: number;
  MAINT_NUMBER?: number;
  MAINT_LIFETYPE?: number;
  MAINT_LIFE?: number;
  MAINT_LIFEASRATIO?: number;
  MAINT_TYPE?: number;
  MAINT_BEGDATE?: string;
  MAINT_PERIOD?: number;
  MAINT_PERIODUNIT?: number;
  OTV_AMOUNT?: number;
  DEFNDLDSLIST?: Rscollectionextendedfielddefinitions;
  PRDNUMLST?: RscollectionrsFaprodnumxml;
  PRDNUMDELLST?: string;
  MAINTANENCELIST?: RscollectionrsFamaintainxml;
  MAINTANENCEDELLIST?: string;
  GUARANTEELIST?: RscollectionrsFaguaranteexml;
  GUARANTEEDELLIST?: string;
  GUID?: string;
  VALUE_INFOS?: RscollectionrsFaregnewvalxml;
  FIGS_TOT_COST?: number;
  FIGS_TOT_COSTX?: number;
  SPECODE?: string;
  BEGSKIPCNT?: number;
}

/**
 * Union type of all Faregistries field names for type-safe field selection and sorting
 */
export type FaregistriesField =
  | 'INTERNAL_REFERENCE'
  | 'CODE'
  | 'DIVISION'
  | 'DEPARTMENT'
  | 'SOURCE_WH'
  | 'TRANSFER'
  | 'ITEM_CODE'
  | 'CRDREF'
  | 'FICHEREF'
  | 'DATE_ACQUIRED'
  | 'DATE_DEPRSTART'
  | 'QUANTITY'
  | 'QUANTITY_OUT'
  | 'ACQ_VALUE'
  | 'VAT_AMOUNT'
  | 'VAT_POST_DUR'
  | 'DEPR_RATE'
  | 'DEPR_DUR'
  | 'DEPR_TYPE'
  | 'REVALUATE'
  | 'REV_DEPR'
  | 'PARTIAL_DEPR'
  | 'CANCELLED'
  | 'RC_XRATE'
  | 'RC_ACQ_VALUE'
  | 'TOTAL_EXPENSES'
  | 'ACCUM_DEPR'
  | 'ACCUM_REVAL'
  | 'RC_TOTAL_EXPN'
  | 'RC_ACCUM_DEPR'
  | 'RC_ACCUM_REVAL'
  | 'DEPR_TYPE2'
  | 'DEPR_RATE2'
  | 'DEPR_DUR2'
  | 'REVALUATE2'
  | 'REV_DEPR2'
  | 'OPEN_REVAL'
  | 'OPEN_DEPR'
  | 'OPEN_REVDEPR'
  | 'RC_OPENREV'
  | 'RC_OPENDEPR'
  | 'RC_OPENREVDEPR'
  | 'OPEN_REVAL2'
  | 'OPEN_DEPR2'
  | 'OPEN_REVDEPR2'
  | 'RC_OPENREV2'
  | 'RC_OPENDEPR2'
  | 'RC_OPENREVDEPR2'
  | 'XBUFS'
  | 'YEARLY_LOCAL'
  | 'YEARLY_FC'
  | 'YEARLY_LOCAL_INFL'
  | 'YEARLY_FC_INFL'
  | 'DATE_DEPRSTART2ORG'
  | 'DATE_DEPRSTART2'
  | 'PART_DEP2'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'DEPR_TYPE3'
  | 'DEPR_RATE3'
  | 'DEPR_DUR3'
  | 'PART_DEP3'
  | 'DATE_DEPRSTART3'
  | 'OPEN_REVAL3'
  | 'OPEN_DEPR3'
  | 'OPEN_REVDEPR3'
  | 'RC_OPENREV3'
  | 'RC_OPENDEPR3'
  | 'RC_OPENREVDEPR3'
  | 'DIFF_PRICE'
  | 'DIFFREP_PRICE'
  | 'PACKET'
  | 'SELLVAT'
  | 'RETURNVAT'
  | 'CRD_LOGOID'
  | 'INFLDX'
  | 'LID_CONFIRMED'
  | 'DISC_INCL'
  | 'DISC_RATE'
  | 'ANNUAL_DIST_VAL'
  | 'INF_BASED_VALUE'
  | 'REGDEFINITION'
  | 'DEPRTYPE4'
  | 'DEPRRATE4'
  | 'DEPRDUR4'
  | 'PARTDEP4'
  | 'DATEOFDEPR4'
  | 'RC_OPENREV4'
  | 'RC_OPENDEPR4'
  | 'RC_OPENREVDEPR4'
  | 'RC_OPENREV4X'
  | 'RC_OPENDEPR4X'
  | 'INFIDX2'
  | 'ANNUALDISTVAL2'
  | 'INFLBASEDVALUE2'
  | 'DATE_ACTIVE'
  | 'TAXEXPRATE2'
  | 'TAXACCFLAG'
  | 'ACCFICHEREF'
  | 'REGTYPCOD'
  | 'REGTYPDEF'
  | 'REGEXPENSCOD'
  | 'REGEXPENSDEF'
  | 'DEPRSTPREASN'
  | 'DEPRSTPDATE'
  | 'PRODCAPACITY'
  | 'CAPACITY_UNIT'
  | 'TAXEXPTYP2'
  | 'CURRTYPE'
  | 'AUTH_CODE'
  | 'APPROVE'
  | 'APPROVEDATE'
  | 'DATEOFDEPR5'
  | 'DEPRRATE5'
  | 'DEPRDUR5'
  | 'DEPRTYPE5'
  | 'REVALFLAG5'
  | 'REVDEPRFLAG5'
  | 'PARTDEP5'
  | 'OPEN_REV5'
  | 'OPEN_DEPR5'
  | 'OPEN_REVDEPR5'
  | 'RC_OPENREV5'
  | 'RC_OPENDEPR5'
  | 'RC_OPENREVDEPR5'
  | 'DEPRDURTYPE2'
  | 'FA_USEFUL_LIFE_CODE1'
  | 'FA_USEFUL_LIFE_CODE2'
  | 'FA_USEFUL_LIFE_CODE3'
  | 'FA_USEFUL_LIFE_CODE4'
  | 'FA_USEFUL_LIFE_CODE5'
  | 'PROJECTREF'
  | 'PROJECT_CODE'
  | 'CENTERREF'
  | 'OHP_CODE'
  | 'TOTAL_REV_AMOUNT'
  | 'TOTAL_REV_AMOUNTX'
  | 'FIGS_COST_OP'
  | 'FIGS_COST_OPX'
  | 'WSREF'
  | 'WS_CODE'
  | 'MAINT_LIFETRACKTYPE'
  | 'MAINT_USAGELIFE'
  | 'MAINT_FACTOR'
  | 'MAINT_NUMBER'
  | 'MAINT_LIFETYPE'
  | 'MAINT_LIFE'
  | 'MAINT_LIFEASRATIO'
  | 'MAINT_TYPE'
  | 'MAINT_BEGDATE'
  | 'MAINT_PERIOD'
  | 'MAINT_PERIODUNIT'
  | 'OTV_AMOUNT'
  | 'DEFNDLDSLIST'
  | 'PRDNUMLST'
  | 'PRDNUMDELLST'
  | 'MAINTANENCELIST'
  | 'MAINTANENCEDELLIST'
  | 'GUARANTEELIST'
  | 'GUARANTEEDELLIST'
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
  | 'GUID'
  | 'VALUE_INFOS'
  | 'FIGS_TOT_COST'
  | 'FIGS_TOT_COSTX'
  | 'SPECODE'
  | 'BEGSKIPCNT';

/**
 * Type-safe sort specification for Faregistries queries
 */
export type FaregistriesSortSpec =
  | [FaregistriesField]
  | [FaregistriesField, 'asc' | 'desc']
  | [FaregistriesField[], 'asc' | 'desc']
  | [FaregistriesField[]];

/**
 * Type-safe query options for Faregistries entities
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
export interface FaregistriesQueryOptions
  extends Omit<QueryOptions<FaregistriesField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: FaregistriesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: FaregistriesSortSpec;
}

/**
 * Search criteria for Faregistries entities
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
export interface FaregistriesSearchCriteria {
  internalReference?: NumberFieldValue;
  code?: StringFieldValue;
  division?: NumberFieldValue;
  department?: NumberFieldValue;
  sourceWh?: NumberFieldValue;
  transfer?: NumberFieldValue;
  itemCode?: StringFieldValue;
  crdref?: NumberFieldValue;
  ficheref?: NumberFieldValue;
  dateAcquired?: StringFieldValue;
  dateDeprstart?: StringFieldValue;
  quantity?: NumberFieldValue;
  quantityOut?: NumberFieldValue;
  acqValue?: NumberFieldValue;
  vatAmount?: NumberFieldValue;
  vatPostDur?: NumberFieldValue;
  deprRate?: NumberFieldValue;
  deprDur?: NumberFieldValue;
  deprType?: NumberFieldValue;
  revaluate?: NumberFieldValue;
  revDepr?: NumberFieldValue;
  partialDepr?: NumberFieldValue;
  cancelled?: NumberFieldValue;
  rcXrate?: NumberFieldValue;
  rcAcqValue?: NumberFieldValue;
  totalExpenses?: NumberFieldValue;
  accumDepr?: NumberFieldValue;
  accumReval?: NumberFieldValue;
  rcTotalExpn?: NumberFieldValue;
  rcAccumDepr?: NumberFieldValue;
  rcAccumReval?: NumberFieldValue;
  deprType2?: NumberFieldValue;
  deprRate2?: NumberFieldValue;
  deprDur2?: NumberFieldValue;
  revaluate2?: NumberFieldValue;
  revDepr2?: NumberFieldValue;
  openReval?: NumberFieldValue;
  openDepr?: NumberFieldValue;
  openRevdepr?: NumberFieldValue;
  rcOpenrev?: NumberFieldValue;
  rcOpendepr?: NumberFieldValue;
  rcOpenrevdepr?: NumberFieldValue;
  openReval2?: NumberFieldValue;
  openDepr2?: NumberFieldValue;
  openRevdepr2?: NumberFieldValue;
  rcOpenrev2?: NumberFieldValue;
  rcOpendepr2?: NumberFieldValue;
  rcOpenrevdepr2?: NumberFieldValue;
  xbufs?: StringFieldValue;
  yearlyLocal?: DateFieldValue;
  yearlyFc?: DateFieldValue;
  yearlyLocalInfl?: DateFieldValue;
  yearlyFcInfl?: DateFieldValue;
  dateDeprstart2org?: NumberFieldValue;
  dateDeprstart2?: StringFieldValue;
  partDep2?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  deprType3?: NumberFieldValue;
  deprRate3?: NumberFieldValue;
  deprDur3?: NumberFieldValue;
  partDep3?: NumberFieldValue;
  dateDeprstart3?: StringFieldValue;
  openReval3?: NumberFieldValue;
  openDepr3?: NumberFieldValue;
  openRevdepr3?: NumberFieldValue;
  rcOpenrev3?: NumberFieldValue;
  rcOpendepr3?: NumberFieldValue;
  rcOpenrevdepr3?: NumberFieldValue;
  diffPrice?: NumberFieldValue;
  diffrepPrice?: NumberFieldValue;
  packet?: NumberFieldValue;
  sellvat?: NumberFieldValue;
  returnvat?: NumberFieldValue;
  crdLogoid?: StringFieldValue;
  infldx?: NumberFieldValue;
  lidConfirmed?: NumberFieldValue;
  discIncl?: NumberFieldValue;
  discRate?: NumberFieldValue;
  annualDistVal?: NumberFieldValue;
  infBasedValue?: NumberFieldValue;
  regdefinition?: StringFieldValue;
  deprtype4?: NumberFieldValue;
  deprrate4?: NumberFieldValue;
  deprdur4?: NumberFieldValue;
  partdep4?: NumberFieldValue;
  dateofdepr4?: StringFieldValue;
  rcOpenrev4?: NumberFieldValue;
  rcOpendepr4?: NumberFieldValue;
  rcOpenrevdepr4?: NumberFieldValue;
  rcOpenrev4x?: NumberFieldValue;
  rcOpendepr4x?: NumberFieldValue;
  infidx2?: NumberFieldValue;
  annualdistval2?: NumberFieldValue;
  inflbasedvalue2?: NumberFieldValue;
  dateActive?: StringFieldValue;
  taxexprate2?: NumberFieldValue;
  taxaccflag?: NumberFieldValue;
  accficheref?: NumberFieldValue;
  regtypcod?: StringFieldValue;
  regtypdef?: StringFieldValue;
  regexpenscod?: StringFieldValue;
  regexpensdef?: StringFieldValue;
  deprstpreasn?: NumberFieldValue;
  deprstpdate?: StringFieldValue;
  prodcapacity?: NumberFieldValue;
  capacityUnit?: StringFieldValue;
  taxexptyp2?: NumberFieldValue;
  currtype?: NumberFieldValue;
  authCode?: StringFieldValue;
  approve?: NumberFieldValue;
  approvedate?: StringFieldValue;
  dateofdepr5?: NumberFieldValue;
  deprrate5?: NumberFieldValue;
  deprdur5?: NumberFieldValue;
  deprtype5?: NumberFieldValue;
  revalflag5?: NumberFieldValue;
  revdeprflag5?: NumberFieldValue;
  partdep5?: NumberFieldValue;
  openRev5?: NumberFieldValue;
  openDepr5?: NumberFieldValue;
  openRevdepr5?: NumberFieldValue;
  rcOpenrev5?: NumberFieldValue;
  rcOpendepr5?: NumberFieldValue;
  rcOpenrevdepr5?: NumberFieldValue;
  deprdurtype2?: NumberFieldValue;
  faUsefulLifeCode1?: StringFieldValue;
  faUsefulLifeCode2?: StringFieldValue;
  faUsefulLifeCode3?: StringFieldValue;
  faUsefulLifeCode4?: StringFieldValue;
  faUsefulLifeCode5?: StringFieldValue;
  projectref?: NumberFieldValue;
  projectCode?: StringFieldValue;
  centerref?: NumberFieldValue;
  ohpCode?: StringFieldValue;
  totalRevAmount?: NumberFieldValue;
  totalRevAmountx?: NumberFieldValue;
  figsCostOp?: NumberFieldValue;
  figsCostOpx?: NumberFieldValue;
  wsref?: NumberFieldValue;
  wsCode?: StringFieldValue;
  maintLifetracktype?: NumberFieldValue;
  maintUsagelife?: NumberFieldValue;
  maintFactor?: NumberFieldValue;
  maintNumber?: NumberFieldValue;
  maintLifetype?: NumberFieldValue;
  maintLife?: NumberFieldValue;
  maintLifeasratio?: NumberFieldValue;
  maintType?: NumberFieldValue;
  maintBegdate?: StringFieldValue;
  maintPeriod?: NumberFieldValue;
  maintPeriodunit?: NumberFieldValue;
  otvAmount?: NumberFieldValue;
  defndldslist?: DateFieldValue;
  prdnumlst?: DateFieldValue;
  prdnumdellst?: StringFieldValue;
  maintanencelist?: DateFieldValue;
  maintanencedellist?: StringFieldValue;
  guaranteelist?: DateFieldValue;
  guaranteedellist?: StringFieldValue;
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
  guid?: StringFieldValue;
  valueInfos?: DateFieldValue;
  figsTotCost?: NumberFieldValue;
  figsTotCostx?: NumberFieldValue;
  specode?: StringFieldValue;
  begskipcnt?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Faregistries entities
 */
export interface FaregistriesAnalytics {
  total: number;
  // Add Faregistries-specific analytics fields
}
