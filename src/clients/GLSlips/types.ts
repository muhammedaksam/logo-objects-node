import { BaseEntity, QueryOptions } from '../../types';
import {
  DateFieldValue,
  NumberFieldValue,
  StringFieldValue,
  AllFieldValues,
} from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RSCollection[RS_GLTransXML]
 */
export interface RscollectionrsGltransxml {
  Meta?: Meta;
  items?: RsGltransxml[];
}

/**
 * Interface for RSCollection[RS_AccDistDetLnXML]
 */
export interface RscollectionrsAccdistdetlnxml {
  Meta?: Meta;
  items?: RsAccdistdetlnxml[];
}

/**
 * Interface for RSCollection[extendedFieldDefinitions]
 */
export interface Rscollectionextendedfielddefinitions {
  Meta?: Meta;
  items?: ExtendedFieldDefinitions[];
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
 * RsGltransxml transaction line item
 *
 * Represents individual transaction records within a Glslips collection.
 */
export interface RsGltransxml extends BaseEntity {
  DATE?: string;
  SIGN?: number;
  GL_CODE?: string;
  ACCOUNTREF?: number;
  ACCFICHEREF?: number;
  OHP_CODE?: string;
  CENTERREF?: number;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  TRCODE?: number;
  BRANCH?: number;
  PARENT_GLCODE?: string;
  AUXIL_CODE?: string;
  AUXIL_CODE2?: string;
  DEBIT?: number;
  CREDIT?: number;
  LINENO?: number;
  DESCRIPTION?: string;
  CANCELLED?: number;
  CURR_TRANS?: number;
  SOURCE_XRATEDIFF?: number;
  RC_XRATE?: number;
  RC_AMOUNT?: number;
  TC_XRATE?: number;
  TC_AMOUNT?: number;
  QUANTITY?: number;
  EXTENREF?: number;
  EURO_DEBIT?: number;
  EURO_CREDIT?: number;
  CURRSEL_TRANS?: number;
  SAFEDEP_TRANS?: number;
  INFLATION_IDX?: number;
  INFLATION_FLAG?: number;
  CALC_FLAG?: number;
  DETLIST?: RscollectionrsAccdistdetlnxml;
  DETDELLIST?: RscollectionrsAccdistdetlnxml;
  CREDITGL_CODE?: string;
  FROM_WHERE?: number;
  DEFNFLDLIST?: Rscollectionextendedfielddefinitions;
  GENFLDLIST?: Rscollectionextendedfielddefinitions;
  DEPARTMENT?: number;
  BDGT_LINE_TYPE?: number;
  STATUS?: number;
  BDGT_FIC_TYPE?: number;
  BDGT_FIC_REF?: number;
  BDGT_FIC_LN_REF?: number;
  BDGT_FIC_PRD_REF?: number;
  FROM_DEM_TYPE?: number;
  EM_DEM_FIC_REF?: number;
  EM_DEM_LINE_REF?: number;
  PARENT_LINE_REF?: number;
  PAID_TOTAL?: number;
  CLOSED?: number;
  ACC_IS_AN_BDGT_LN?: number;
  ACC_BDGT_ACC_REF?: number;
  ACC_BDREF_LACC_REF?: number;
  ACC_BDGT_PAY_REF?: number;
  ACC_BDGT_PAY_LNREF?: number;
  ACC_CRD_BDGT_ACC_PAYLINE?: number;
  LINETAG?: number;
  CREATE_BDGT_LN?: number;
  MONTH?: number;
  YEAR?: number;
  GRPFIRMTRANS?: number;
  INVOICE_NO?: string;
  CL_NAME?: string;
  TAX_NR?: string;
  FOR_TAX_DECL?: number;
  DOC_DATE?: string;
  GLOBAL_LINE_NO?: number;
  LINE_TYPE?: number;
  CODE_REF?: number;
  CODE?: string;
  EBOOK_DOCDATE?: string;
  EBOOK_UNDOCUMENTED?: number;
  EBOOK_DOCNR?: string;
  EBOOK_DOCTYPE?: number;
  EBOOK_EXPLAIN?: string;
  EBOOK_PAYTYPE?: string;
  EBOOK_NOPAY?: number;
  TCKNO?: string;
  FUTURE_MONTH_LINE?: number;
  FUTURE_MONTH_SOURCEREF?: number;
  FUTURE_MONTH_COUNT?: number;
  ELECT_DOC?: number;
  EQUALIZE_BALANCE?: number;
  GUID?: string;
  PREVPERDATE?: string;
  INFDIFFACCTYP?: number;
  TRADINGGRP?: string;
}

/**
 * RsAccdistdetlnxml transaction line item
 *
 * Represents individual transaction records within a Glslips collection.
 */
export interface RsAccdistdetlnxml extends BaseEntity {
  ACCFICHEREF?: number;
  LINE_NO?: number;
  ACCOUNTREF?: number;
  PREVLINEREF?: number;
  CENTERREF?: number;
  PROJECTREF?: number;
  BRANCH?: number;
  DISTRATE?: number;
  CREDEBNET?: number;
  EMUCREDEBNET?: number;
  CURR_GL?: number;
  TC_XRATE?: number;
  TC_NET?: number;
  RC_XRATE?: number;
  RC_NET?: number;
  CURRSEL_TOTALS?: number;
  TYPE?: number;
  DATE?: string;
  TSIGN?: number;
  CANCELLED?: number;
  DATE_REFERENCE?: number;
  WFSTATUS?: number;
  CENTERCODE?: string;
  PROJECTCODE?: string;
  EDTCREDEBNET?: number;
  DEPARTMENT?: number;
  STATUS?: number;
  MONTH?: number;
  YEAR?: number;
}

/**
 * ExtendedFieldDefinitions transaction line item
 *
 * Represents individual transaction records within a Glslips collection.
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
 * RsLabelxml transaction line item
 *
 * Represents individual transaction records within a Glslips collection.
 */
export interface RsLabelxml extends BaseEntity {
  NAME?: string;
  DEFINITION?: string;
  USER_TYPE?: number;
}

/**
 * Glslips entity interface based on swagger definition
 */
export interface Glslips extends BaseEntity {
  TYPE?: number;
  NUMBER?: string;
  DATE?: string;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  DOC_NUMBER?: string;
  DIVISION?: number;
  DEPARTMENT?: number;
  MODULENO?: number;
  SOURCEFREF?: number;
  EXTENREF?: number;
  NOTES1?: string;
  NOTES2?: string;
  NOTES3?: string;
  NOTES4?: string;
  JOURNAL_NR?: number;
  TOTAL_DEBIT?: number;
  TOTAL_CREDIT?: number;
  CANCELLED?: number;
  PRINT_COUNTER?: number;
  PRINT_DATE?: string;
  SOURCE_MODULE?: number;
  CANCFREF?: number;
  EURO_TOTAL_DEBIT?: number;
  EURO_TOTAL_CREDIT?: number;
  CURRSEL_TOTALS?: number;
  CURRSEL_DETAILS?: number;
  RC_TOTAL_DEBIT?: number;
  RC_TOTAL_CREDIT?: number;
  TRANSACTIONS?: RscollectionrsGltransxml;
  XBUFS?: string;
  DOCALS?: string;
  ITEXT?: string;
  DOC_TYPE?: number;
  ORGLOGOID?: string;
  DEFNFLDSLIST?: Rscollectionextendedfielddefinitions;
  GENFLDLIST?: Rscollectionextendedfielddefinitions;
  STATUS?: number;
  BDGT_FICHE_TYPE?: number;
  BDGT_FICHE_REF?: number;
  FROM_DEM_TYPE?: number;
  EM_DEM_FICHE_REF?: number;
  WFLOWCRDREF?: number;
  VIA_AUTO_GL?: number;
  APPROVE?: number;
  APPROVE_DATE?: string;
  DOC_DATE?: string;
  IMPORT_DIST_SLIP?: number;
  EBOOK_DOCDATE?: string;
  EBOOK_NODOCUMENT?: number;
  EBOOK_DOCNR?: string;
  EBOOK_DOCTYPE?: number;
  EBOOK_EXPLAIN?: string;
  EBOOK_PAYTYPE?: string;
  EBOOK_NOPAY?: number;
  LINEBASEDDOCDET?: number;
  CROSS_FLAG?: number;
  CROSS_FICHEREF?: number;
  PROJECTREF?: number;
  PROJECT_CODE?: string;
  PERS_BEG_DATE?: string;
  PERS_END_DATE?: string;
  CONTROL_INFO?: number;
  LABEL_LIST?: RscollectionrsLabelxml;
  GUID?: string;
  INFLATIONDIFF?: number;
  INFDIFFFCREF?: number;
}

/**
 * Union type of all Glslips field names for type-safe field selection and sorting
 */
export type GlslipsField =
  | 'INTERNAL_REFERENCE'
  | 'TYPE'
  | 'NUMBER'
  | 'DATE'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'DOC_NUMBER'
  | 'DIVISION'
  | 'DEPARTMENT'
  | 'MODULENO'
  | 'SOURCEFREF'
  | 'EXTENREF'
  | 'NOTES1'
  | 'NOTES2'
  | 'NOTES3'
  | 'NOTES4'
  | 'JOURNAL_NR'
  | 'TOTAL_DEBIT'
  | 'TOTAL_CREDIT'
  | 'CANCELLED'
  | 'PRINT_COUNTER'
  | 'PRINT_DATE'
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
  | 'SOURCE_MODULE'
  | 'CANCFREF'
  | 'EURO_TOTAL_DEBIT'
  | 'EURO_TOTAL_CREDIT'
  | 'CURRSEL_TOTALS'
  | 'CURRSEL_DETAILS'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'RC_TOTAL_DEBIT'
  | 'RC_TOTAL_CREDIT'
  | 'TEXTINC'
  | 'TRANSACTIONS'
  | 'XBUFS'
  | 'DOCALS'
  | 'ITEXT'
  | 'XML_ATTRIBUTE'
  | 'DOC_TYPE'
  | 'ORGLOGOID'
  | 'DEFNFLDSLIST'
  | 'GENFLDLIST'
  | 'STATUS'
  | 'BDGT_FICHE_TYPE'
  | 'BDGT_FICHE_REF'
  | 'FROM_DEM_TYPE'
  | 'EM_DEM_FICHE_REF'
  | 'WFLOWCRDREF'
  | 'VIA_AUTO_GL'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'DOC_DATE'
  | 'IMPORT_DIST_SLIP'
  | 'EBOOK_DOCDATE'
  | 'EBOOK_NODOCUMENT'
  | 'EBOOK_DOCNR'
  | 'EBOOK_DOCTYPE'
  | 'EBOOK_EXPLAIN'
  | 'EBOOK_PAYTYPE'
  | 'EBOOK_NOPAY'
  | 'LINEBASEDDOCDET'
  | 'CROSS_FLAG'
  | 'CROSS_FICHEREF'
  | 'PROJECTREF'
  | 'PROJECT_CODE'
  | 'PERS_BEG_DATE'
  | 'PERS_END_DATE'
  | 'CONTROL_INFO'
  | 'LABEL_LIST'
  | 'GUID'
  | 'INFLATIONDIFF'
  | 'INFDIFFFCREF';

/**
 * Type-safe sort specification for Glslips queries
 */
export type GlslipsSortSpec =
  | [GlslipsField]
  | [GlslipsField, 'asc' | 'desc']
  | [GlslipsField[], 'asc' | 'desc']
  | [GlslipsField[]];

/**
 * Type-safe query options for Glslips entities
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
export interface GlslipsQueryOptions extends Omit<QueryOptions<GlslipsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: GlslipsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: GlslipsSortSpec;
}

/**
 * Search criteria for Glslips entities
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
export interface GlslipsSearchCriteria {
  internalReference?: NumberFieldValue;
  type?: NumberFieldValue;
  number?: StringFieldValue;
  date?: StringFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  docNumber?: StringFieldValue;
  division?: NumberFieldValue;
  department?: NumberFieldValue;
  moduleno?: NumberFieldValue;
  sourcefref?: NumberFieldValue;
  extenref?: NumberFieldValue;
  notes1?: StringFieldValue;
  notes2?: StringFieldValue;
  notes3?: StringFieldValue;
  notes4?: StringFieldValue;
  journalNr?: NumberFieldValue;
  totalDebit?: NumberFieldValue;
  totalCredit?: NumberFieldValue;
  cancelled?: NumberFieldValue;
  printCounter?: NumberFieldValue;
  printDate?: StringFieldValue;
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
  sourceModule?: NumberFieldValue;
  cancfref?: NumberFieldValue;
  euroTotalDebit?: NumberFieldValue;
  euroTotalCredit?: NumberFieldValue;
  currselTotals?: NumberFieldValue;
  currselDetails?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  rcTotalDebit?: NumberFieldValue;
  rcTotalCredit?: NumberFieldValue;
  textinc?: NumberFieldValue;
  transactions?: DateFieldValue;
  xbufs?: StringFieldValue;
  docals?: StringFieldValue;
  itext?: StringFieldValue;
  xmlAttribute?: NumberFieldValue;
  docType?: NumberFieldValue;
  orglogoid?: StringFieldValue;
  defnfldslist?: DateFieldValue;
  genfldlist?: DateFieldValue;
  status?: NumberFieldValue;
  bdgtFicheType?: NumberFieldValue;
  bdgtFicheRef?: NumberFieldValue;
  fromDemType?: NumberFieldValue;
  emDemFicheRef?: NumberFieldValue;
  wflowcrdref?: NumberFieldValue;
  viaAutoGl?: NumberFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  docDate?: StringFieldValue;
  importDistSlip?: NumberFieldValue;
  ebookDocdate?: StringFieldValue;
  ebookNodocument?: NumberFieldValue;
  ebookDocnr?: StringFieldValue;
  ebookDoctype?: NumberFieldValue;
  ebookExplain?: StringFieldValue;
  ebookPaytype?: StringFieldValue;
  ebookNopay?: NumberFieldValue;
  linebaseddocdet?: NumberFieldValue;
  crossFlag?: NumberFieldValue;
  crossFicheref?: NumberFieldValue;
  projectref?: NumberFieldValue;
  projectCode?: StringFieldValue;
  persBegDate?: StringFieldValue;
  persEndDate?: StringFieldValue;
  controlInfo?: NumberFieldValue;
  labelList?: DateFieldValue;
  guid?: StringFieldValue;
  inflationdiff?: NumberFieldValue;
  infdifffcref?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Glslips entities
 */
export interface GlslipsAnalytics {
  total: number;
  // Add Glslips-specific analytics fields
}
