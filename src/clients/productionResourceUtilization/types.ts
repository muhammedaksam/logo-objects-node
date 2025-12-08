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
 * Interface for RSCollection[RS_OccupationXML]
 */
export interface RscollectionrsOccupationxml {
  Meta?: Meta;
  items?: RsOccupationxml[];
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
 * RsOccupationxml transaction line item
 *
 * Represents individual transaction records within a ProductionResourceUtilization collection.
 */
export interface RsOccupationxml extends BaseEntity {
  PRODORDREF?: number;
  DISPATCH_NUMBER?: string;
  DISPLINEREF?: number;
  OCCUPATION_STATUS?: number;
  OCCUPATION_TYPE?: number;
  LABORREQREF?: number;
  EMPLOYE_REFERENCE?: number;
  TOOLREQREF?: number;
  TOOL_REFERENCE?: number;
  RESCODE?: string;
  RESNAME?: string;
  AMOUNT?: number;
  BEGDATE?: string;
  BEGTIME?: number;
  ENDDATE?: string;
  ENDTIME?: number;
  DURATION?: number;
  WIZENTRY?: number;
  COSTFACTOR?: number;
  OPERATION_DURATION?: number;
  OPERATION_AMOUNT?: number;
  SETUPTIME?: number;
  RUNBATCH?: number;
  RUNTIME?: number;
  MOVEBATCH?: number;
  MOVETIME?: number;
  CALCULATE_TYPE?: number;
}

/**
 * ProductionResourceUtilization entity interface based on swagger definition
 */
export interface ProductionResourceUtilization extends BaseEntity {
  DINFO_PRODORDREF?: number;
  DINFO_BOMLEVEL?: number;
  DINFO_REVREF?: number;
  DINFO_LINENO?: string;
  DINFO_ROUTLINEREF?: number;
  DINFO_OPERATIONREF?: number;
  DINFO_QCOPOK?: number;
  DINFO_OPREQREF?: number;
  DINFO_WSREF?: number;
  DINFO_WSDAILYOPTIME?: number;
  DINFO_WSWORKINGDAYS?: number;
  DINFO_SCHEDULED?: number;
  DINFO_RELEASED?: number;
  DINFO_SETUPTIME?: number;
  DINFO_QUEUETIME?: number;
  DINFO_RUNBATCH?: number;
  DINFO_RUNTIME?: number;
  DINFO_MOVEBATCH?: number;
  DINFO_MOVETIME?: number;
  DINFO_INSPTIME?: number;
  DINFO_HEADTIME?: number;
  DINFO_TAILTIME?: number;
  DINFO_OPBEGDATE?: string;
  DINFO_OPBEGTIME?: number;
  DINFO_OPDUEDATE?: string;
  DINFO_OPDUETIME?: number;
  DINFO_PLNDURATION?: number;
  DINFO_ACTBEGDATE?: string;
  DINFO_ACTBEGTIME?: number;
  DINFO_ACTDUEDATE?: string;
  DINFO_ACTDUETIME?: number;
  DINFO_ACTDURATION?: number;
  DINFO_LINESTATUS?: number;
  DINFO_STDMATERIALCOST?: number;
  DINFO_STDEQUIPTCOST?: number;
  DINFO_STDWSCOST?: number;
  DINFO_STDLABORCOST?: number;
  DINFO_STDOVERHCOST?: number;
  DINFO_STDTOTALCOST?: number;
  DINFO_STDMATERIALRPCOST?: number;
  DINFO_STDEQUIPTRPCOST?: number;
  DINFO_STDWSRPCOST?: number;
  DINFO_STDLABORRPCOST?: number;
  DINFO_STDOVERHRPCOST?: number;
  DINFO_STDTOTALRPCOST?: number;
  DINFO_ACTMATERIALCOST?: number;
  DINFO_ACTEQUIPTCOST?: number;
  DINFO_ACTWSCOST?: number;
  DINFO_ACTLABORCOST?: number;
  DINFO_ACTOVERHCOST?: number;
  DINFO_ACTTOTALCOST?: number;
  DINFO_ACTMATERIALRPCOST?: number;
  DINFO_ACTEQUIPTRPCOST?: number;
  DINFO_ACTWSRPCOST?: number;
  DINFO_ACTLABORRPCOST?: number;
  DINFO_ACTOVERHRPCOST?: number;
  DINFO_ACTTOTALRPCOST?: number;
  DINFO_STDOVHDFORMULA?: string;
  DINFO_STDOVHDRPFORMULA?: string;
  DINFO_ACTOVHDFORMULA?: string;
  DINFO_ACTOVHDRPFORMULA?: string;
  DINFO_ITEMREF?: number;
  DINFO_OPWSBEGDATE?: string;
  DINFO_BOMMASTERREF?: number;
  DINFO_STPDURATION?: number;
  DINFO_STPCOSTDURATION?: number;
  DINFO_DOCODE?: string;
  DINFO_SPECODE?: string;
  DINFO_CYPHCODE?: string;
  DINFO_SITEID?: number;
  DINFO_RECSTATUS?: number;
  DINFO_ORGLOGICREF?: number;
  DINFO_WFSTATUS?: number;
  DINFO_PRINTCNT?: number;
  DINFO_PRINT_DATE?: string;
  DINFO_PROJECTREF?: number;
  DINFO_PRODORDTYPE?: number;
  DINFO_CLIENTREF?: number;
  DINFO_MANUAL_EDIT?: number;
  DINFO_REWORK?: number;
  DINFO_PARTING?: number;
  DINFO_ARPCODE?: string;
  RESOURCE_TYPE?: number;
  RESOURCE_REFERENCE?: number;
  RESOURCE_CODE?: string;
  RESOURCE_NAME?: string;
  RESOURCE_AMOUNT?: number;
  TREQREF?: number;
  PLNLIST?: RscollectionrsOccupationxml;
  WIZACTLIST?: RscollectionrsOccupationxml;
  ACTLIST?: RscollectionrsOccupationxml;
  WIZPLNLIST?: RscollectionrsOccupationxml;
  PROD_ORDER?: string;
  OPERATION_CODE?: string;
  OPERATION_NAME?: string;
  ENTRY_TYPE?: number;
}

/**
 * Union type of all ProductionResourceUtilization field names for type-safe field selection and sorting
 */
export type ProductionResourceUtilizationField =
  | 'INTERNAL_REFERENCE'
  | 'DINFO_PRODORDREF'
  | 'DINFO_BOMLEVEL'
  | 'DINFO_REVREF'
  | 'DINFO_LINENO'
  | 'DINFO_ROUTLINEREF'
  | 'DINFO_OPERATIONREF'
  | 'DINFO_QCOPOK'
  | 'DINFO_OPREQREF'
  | 'DINFO_WSREF'
  | 'DINFO_WSDAILYOPTIME'
  | 'DINFO_WSWORKINGDAYS'
  | 'DINFO_SCHEDULED'
  | 'DINFO_RELEASED'
  | 'DINFO_SETUPTIME'
  | 'DINFO_QUEUETIME'
  | 'DINFO_RUNBATCH'
  | 'DINFO_RUNTIME'
  | 'DINFO_MOVEBATCH'
  | 'DINFO_MOVETIME'
  | 'DINFO_INSPTIME'
  | 'DINFO_HEADTIME'
  | 'DINFO_TAILTIME'
  | 'DINFO_OPBEGDATE'
  | 'DINFO_OPBEGTIME'
  | 'DINFO_OPDUEDATE'
  | 'DINFO_OPDUETIME'
  | 'DINFO_PLNDURATION'
  | 'DINFO_ACTBEGDATE'
  | 'DINFO_ACTBEGTIME'
  | 'DINFO_ACTDUEDATE'
  | 'DINFO_ACTDUETIME'
  | 'DINFO_ACTDURATION'
  | 'DINFO_LINESTATUS'
  | 'DINFO_STDMATERIALCOST'
  | 'DINFO_STDEQUIPTCOST'
  | 'DINFO_STDWSCOST'
  | 'DINFO_STDLABORCOST'
  | 'DINFO_STDOVERHCOST'
  | 'DINFO_STDTOTALCOST'
  | 'DINFO_STDMATERIALRPCOST'
  | 'DINFO_STDEQUIPTRPCOST'
  | 'DINFO_STDWSRPCOST'
  | 'DINFO_STDLABORRPCOST'
  | 'DINFO_STDOVERHRPCOST'
  | 'DINFO_STDTOTALRPCOST'
  | 'DINFO_ACTMATERIALCOST'
  | 'DINFO_ACTEQUIPTCOST'
  | 'DINFO_ACTWSCOST'
  | 'DINFO_ACTLABORCOST'
  | 'DINFO_ACTOVERHCOST'
  | 'DINFO_ACTTOTALCOST'
  | 'DINFO_ACTMATERIALRPCOST'
  | 'DINFO_ACTEQUIPTRPCOST'
  | 'DINFO_ACTWSRPCOST'
  | 'DINFO_ACTLABORRPCOST'
  | 'DINFO_ACTOVERHRPCOST'
  | 'DINFO_ACTTOTALRPCOST'
  | 'DINFO_STDOVHDFORMULA'
  | 'DINFO_STDOVHDRPFORMULA'
  | 'DINFO_ACTOVHDFORMULA'
  | 'DINFO_ACTOVHDRPFORMULA'
  | 'DINFO_ITEMREF'
  | 'DINFO_OPWSBEGDATE'
  | 'DINFO_BOMMASTERREF'
  | 'DINFO_STPDURATION'
  | 'DINFO_STPCOSTDURATION'
  | 'DINFO_DOCODE'
  | 'DINFO_SPECODE'
  | 'DINFO_CYPHCODE'
  | 'DINFO_SITEID'
  | 'DINFO_RECSTATUS'
  | 'DINFO_ORGLOGICREF'
  | 'DINFO_WFSTATUS'
  | 'DINFO_PRINTCNT'
  | 'DINFO_PRINT_DATE'
  | 'DINFO_PROJECTREF'
  | 'DINFO_PRODORDTYPE'
  | 'DINFO_CLIENTREF'
  | 'DINFO_MANUAL_EDIT'
  | 'DINFO_REWORK'
  | 'DINFO_PARTING'
  | 'DINFO_ARPCODE'
  | 'RESOURCE_TYPE'
  | 'RESOURCE_REFERENCE'
  | 'RESOURCE_CODE'
  | 'RESOURCE_NAME'
  | 'RESOURCE_AMOUNT'
  | 'TREQREF'
  | 'PLNLIST'
  | 'WIZACTLIST'
  | 'ACTLIST'
  | 'WIZPLNLIST'
  | 'PROD_ORDER'
  | 'OPERATION_CODE'
  | 'OPERATION_NAME'
  | 'ENTRY_TYPE';

/**
 * Type-safe sort specification for ProductionResourceUtilization queries
 */
export type ProductionResourceUtilizationSortSpec =
  | [ProductionResourceUtilizationField]
  | [ProductionResourceUtilizationField, 'asc' | 'desc']
  | [ProductionResourceUtilizationField[], 'asc' | 'desc']
  | [ProductionResourceUtilizationField[]];

/**
 * Type-safe query options for ProductionResourceUtilization entities
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
export interface ProductionResourceUtilizationQueryOptions extends Omit<
  QueryOptions<ProductionResourceUtilizationField>,
  'fields' | 'sort'
> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: ProductionResourceUtilizationField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: ProductionResourceUtilizationSortSpec;
}

/**
 * Search criteria for ProductionResourceUtilization entities
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
export interface ProductionResourceUtilizationSearchCriteria {
  internalReference?: NumberFieldValue;
  dinfoProdordref?: NumberFieldValue;
  dinfoBomlevel?: NumberFieldValue;
  dinfoRevref?: NumberFieldValue;
  dinfoLineno?: StringFieldValue;
  dinfoRoutlineref?: NumberFieldValue;
  dinfoOperationref?: NumberFieldValue;
  dinfoQcopok?: NumberFieldValue;
  dinfoOpreqref?: NumberFieldValue;
  dinfoWsref?: NumberFieldValue;
  dinfoWsdailyoptime?: NumberFieldValue;
  dinfoWsworkingdays?: NumberFieldValue;
  dinfoScheduled?: NumberFieldValue;
  dinfoReleased?: NumberFieldValue;
  dinfoSetuptime?: NumberFieldValue;
  dinfoQueuetime?: NumberFieldValue;
  dinfoRunbatch?: NumberFieldValue;
  dinfoRuntime?: NumberFieldValue;
  dinfoMovebatch?: NumberFieldValue;
  dinfoMovetime?: NumberFieldValue;
  dinfoInsptime?: NumberFieldValue;
  dinfoHeadtime?: NumberFieldValue;
  dinfoTailtime?: NumberFieldValue;
  dinfoOpbegdate?: StringFieldValue;
  dinfoOpbegtime?: NumberFieldValue;
  dinfoOpduedate?: StringFieldValue;
  dinfoOpduetime?: NumberFieldValue;
  dinfoPlnduration?: NumberFieldValue;
  dinfoActbegdate?: StringFieldValue;
  dinfoActbegtime?: NumberFieldValue;
  dinfoActduedate?: StringFieldValue;
  dinfoActduetime?: NumberFieldValue;
  dinfoActduration?: NumberFieldValue;
  dinfoLinestatus?: NumberFieldValue;
  dinfoStdmaterialcost?: NumberFieldValue;
  dinfoStdequiptcost?: NumberFieldValue;
  dinfoStdwscost?: NumberFieldValue;
  dinfoStdlaborcost?: NumberFieldValue;
  dinfoStdoverhcost?: NumberFieldValue;
  dinfoStdtotalcost?: NumberFieldValue;
  dinfoStdmaterialrpcost?: NumberFieldValue;
  dinfoStdequiptrpcost?: NumberFieldValue;
  dinfoStdwsrpcost?: NumberFieldValue;
  dinfoStdlaborrpcost?: NumberFieldValue;
  dinfoStdoverhrpcost?: NumberFieldValue;
  dinfoStdtotalrpcost?: NumberFieldValue;
  dinfoActmaterialcost?: NumberFieldValue;
  dinfoActequiptcost?: NumberFieldValue;
  dinfoActwscost?: NumberFieldValue;
  dinfoActlaborcost?: NumberFieldValue;
  dinfoActoverhcost?: NumberFieldValue;
  dinfoActtotalcost?: NumberFieldValue;
  dinfoActmaterialrpcost?: NumberFieldValue;
  dinfoActequiptrpcost?: NumberFieldValue;
  dinfoActwsrpcost?: NumberFieldValue;
  dinfoActlaborrpcost?: NumberFieldValue;
  dinfoActoverhrpcost?: NumberFieldValue;
  dinfoActtotalrpcost?: NumberFieldValue;
  dinfoStdovhdformula?: StringFieldValue;
  dinfoStdovhdrpformula?: StringFieldValue;
  dinfoActovhdformula?: StringFieldValue;
  dinfoActovhdrpformula?: StringFieldValue;
  dinfoItemref?: NumberFieldValue;
  dinfoOpwsbegdate?: StringFieldValue;
  dinfoBommasterref?: NumberFieldValue;
  dinfoStpduration?: NumberFieldValue;
  dinfoStpcostduration?: NumberFieldValue;
  dinfoDocode?: StringFieldValue;
  dinfoSpecode?: StringFieldValue;
  dinfoCyphcode?: StringFieldValue;
  dinfoSiteid?: NumberFieldValue;
  dinfoRecstatus?: NumberFieldValue;
  dinfoOrglogicref?: NumberFieldValue;
  dinfoWfstatus?: NumberFieldValue;
  dinfoPrintcnt?: NumberFieldValue;
  dinfoPrintDate?: StringFieldValue;
  dinfoProjectref?: NumberFieldValue;
  dinfoProdordtype?: NumberFieldValue;
  dinfoClientref?: NumberFieldValue;
  dinfoManualEdit?: NumberFieldValue;
  dinfoRework?: NumberFieldValue;
  dinfoParting?: NumberFieldValue;
  dinfoArpcode?: StringFieldValue;
  resourceType?: NumberFieldValue;
  resourceReference?: NumberFieldValue;
  resourceCode?: StringFieldValue;
  resourceName?: StringFieldValue;
  resourceAmount?: NumberFieldValue;
  treqref?: NumberFieldValue;
  plnlist?: DateFieldValue;
  wizactlist?: DateFieldValue;
  actlist?: DateFieldValue;
  wizplnlist?: DateFieldValue;
  prodOrder?: StringFieldValue;
  operationCode?: StringFieldValue;
  operationName?: StringFieldValue;
  entryType?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for ProductionResourceUtilization entities
 */
export interface ProductionResourceUtilizationAnalytics {
  total: number;
  // Add ProductionResourceUtilization-specific analytics fields
}
