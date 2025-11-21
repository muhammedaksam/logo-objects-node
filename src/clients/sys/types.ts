import { BaseEntity, QueryOptions } from '../../types';
import { AllFieldValues } from '../../utils/queryBuilder';
import { DataObjectParameter, Meta } from '../../types/collections';

// Static definition for a generic Items type if it's causing issues
export interface Items {
  [key: string]: unknown;
}

/**
 * Interface for CapiModel
 */
export interface CapiModel {
  DataObjectParameter?: DataObjectParameter;
  Meta?: Meta;
  Firm?: MtFirm;
  Period?: MtPeriod;
  User?: MtUser;
  DBInfo?: Dbcreatemessage;
  ProcessInstanceId?: string;
}

/**
 * Interface for MT_Firm
 */
export interface MtFirm {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  FirmNr?: number;
  name?: string;
  Title?: string;
  Street?: string;
  Road?: string;
  DoorNr?: string;
  District?: string;
  AddressLine_1?: string;
  AddressLine_2?: string;
  City?: string;
  Country?: string;
  ZipCode?: string;
  Phone_1?: string;
  Phone_2?: string;
  Fax?: string;
  TaxOffice?: string;
  TaxNr?: string;
  SecurityNr?: string;
  Directory?: string;
  CPAName?: string;
  CPAStreet?: string;
  CPARoad?: string;
  CPADoorNr?: string;
  CPADistrict?: string;
  CPAAddressLine_1?: string;
  CPAAddressLine_2?: string;
  CPACity?: string;
  CPAPhone?: string;
  CPATaxOffice?: string;
  CPATaxNr?: string;
  CPAChamberNr?: string;
  BeginMonth?: number;
  BeginDay?: number;
  DefaultPeriod?: number;
  CountOfLeg?: number;
  LocalCurrType?: number;
  FirmRepCurr?: number;
  SeperateExchangeTable?: boolean;
  VATRoundMethod?: number;
  FirmEUVATNr?: string;
  MajorDBVersion?: number;
  MinorDBVersion?: number;
  DBReleaseVersion?: number;
  SiteID?: number;
  OrgChart?: number;
  FirmLang?: number;
  Departments?: MtDepartments;
  Divisions?: MtDivisions;
  WareHouses?: MtWarehouses;
  Factories?: MtFactories;
  Periods?: MtPeriods;
  WorkDays?: Rscollectionboolean;
  EmployerTradeRegisNo?: string;
  EmployerAccOfficeCode?: string;
  EmployerMersisNo?: string;
  EmployerName?: string;
  EmployerSurName?: string;
  EmployerTCNo?: string;
  EmployerEMail?: string;
  EmployerBagKurNr?: string;
  FirmType?: number;
  NaceCode?: string;
  TaxOffCode?: string;
  WebAddress?: string;
  DocNumberLenght?: number;
  UseETradesmanInv?: boolean;
}

/**
 * Interface for MT_Departments
 */
export interface MtDepartments {
  Meta?: Meta;
  Item?: RscollectionmtDepartment;
}

/**
 * Interface for RSCollection[MT_Department]
 */
export interface RscollectionmtDepartment {
  Meta?: Meta;
  items?: MtDepartment[];
}

/**
 * Interface for MT_Department
 */
export interface MtDepartment {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  name?: string;
  number?: number;
}

/**
 * Interface for MT_Divisions
 */
export interface MtDivisions {
  Meta?: Meta;
  Item?: RscollectionmtDivision;
}

/**
 * Interface for RSCollection[MT_Division]
 */
export interface RscollectionmtDivision {
  Meta?: Meta;
  items?: MtDivision[];
}

/**
 * Interface for MT_Division
 */
export interface MtDivision {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  number?: number;
  name?: string;
  Street?: string;
  Road?: string;
  DoorNr?: string;
  District?: string;
  AddressLine_1?: string;
  AddressLine_2?: string;
  City?: string;
  Country?: string;
  ZipCode?: string;
  Phone?: string;
  Fax?: string;
  TaxOffice?: string;
  TaxNumber?: string;
  SecurityNumber?: string;
  SiteID?: number;
  UseETradesmanInv?: boolean;
}

/**
 * Interface for MT_WareHouses
 */
export interface MtWarehouses {
  Meta?: Meta;
  Item?: RscollectionmtWarehouse;
}

/**
 * Interface for RSCollection[MT_WareHouse]
 */
export interface RscollectionmtWarehouse {
  Meta?: Meta;
  items?: MtWarehouse[];
}

/**
 * Interface for MT_WareHouse
 */
export interface MtWarehouse {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  number?: number;
  DivisionNumber?: number;
  name?: string;
  FactoryNumber?: number;
  CostGroup?: number;
  SiteID?: number;
}

/**
 * Interface for MT_Factories
 */
export interface MtFactories {
  Meta?: Meta;
  Item?: RscollectionmtFactory;
}

/**
 * Interface for RSCollection[MT_Factory]
 */
export interface RscollectionmtFactory {
  Meta?: Meta;
  items?: MtFactory[];
}

/**
 * Interface for MT_Factory
 */
export interface MtFactory {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  number?: number;
  DivisionNumber?: number;
  name?: string;
  SiteID?: number;
  FactoryDivisions?: MtFactorydivisions;
}

/**
 * Interface for MT_FactoryDivisions
 */
export interface MtFactorydivisions {
  Meta?: Meta;
  Item?: RscollectionmtFactorydivision;
}

/**
 * Interface for RSCollection[MT_FactoryDivision]
 */
export interface RscollectionmtFactorydivision {
  Meta?: Meta;
  items?: MtFactorydivision[];
}

/**
 * Interface for MT_FactoryDivision
 */
export interface MtFactorydivision {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  RecorNumber?: number;
  name?: string;
  WorkDays?: number;
  number?: number;
}

/**
 * Interface for MT_Periods
 */
export interface MtPeriods {
  Meta?: Meta;
  Item?: RscollectionmtPeriod;
}

/**
 * Interface for RSCollection[MT_Period]
 */
export interface RscollectionmtPeriod {
  Meta?: Meta;
  items?: MtPeriod[];
}

/**
 * Interface for MT_Period
 */
export interface MtPeriod {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  number?: number;
  BeginDate?: string;
  endDate?: string;
  Active?: boolean;
  LocalCurrType?: number;
  RepCurrType?: number;
}

/**
 * Interface for RSCollection[Boolean]
 */
export interface Rscollectionboolean {
  Meta?: Meta;
  items?: unknown[];
}

/**
 * Interface for MT_User
 */
export interface MtUser {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  UserNr?: number;
  name?: string;
  key?: string;
  Groups?: Rscollectionint16;
  FirmNr?: number;
  Language?: number;
  Options?: number;
  blocked?: number;
  LogFlag?: number;
  EMail?: string;
  DefaultRole?: number;
  Roles?: Rscollectionint16;
  UserName?: string;
  UserSurName?: string;
}

/**
 * Interface for RSCollection[Int16]
 */
export interface Rscollectionint16 {
  Meta?: Meta;
  items?: unknown[];
}

/**
 * Interface for DBCreateMessage
 */
export interface Dbcreatemessage {
  host_name?: string;
  port?: number;
  db_name?: string;
  db_type?: number;
  dbversion?: string;
  schema_version?: string;
  schema_name?: string;
  admin_username?: string;
  admin_password?: string;
  tenant_id?: string;
  tenantapp_id?: string;
  appsegment_id?: string;
  serveraddress?: string;
  server_username?: string;
  server_password?: string;
}

/**
 * Interface for ActiveSession
 */
export interface ActiveSession {
  ApplicationItemCount?: number;
  ApplicationItems?: ActiveApplication[];
  LObjectCount?: number;
  LObjects?: ActiveLObject[];
  ThreadCount?: number;
  WorkItemGroupCount?: number;
  WorkItemResultCount?: number;
  Threads?: ClientThread[];
}

/**
 * Interface for ActiveApplication
 */
export interface ActiveApplication {
  ID?: string;
  PID?: number;
  LastExecutionDate?: string;
  IsInitial?: boolean;
  usedBy?: string;
  IsLoginEx?: boolean;
  DBKey?: string;
  CurrentUser?: string;
  FirmNr?: number;
  SessionId?: string;
  LogoDB?: string;
  TransactionId?: string;
}

/**
 * Interface for ActiveLObject
 */
export interface ActiveLObject {
  ID?: string;
  PID?: number;
  LastAccessTime?: string;
  ReleaseTryCount?: number;
}

/**
 * Interface for ClientThread
 */
export interface ClientThread {
  ID?: string;
  UserName?: string;
  TokenUserName?: string;
  Password?: string;
  FirmNr?: number;
  UseIdm?: boolean;
  DbInfo?: LogoDBInfo;
  PeriodNr?: number;
  currentThreadId?: number;
  threadState?: number;
  threadInPool?: Iworkitemresult;
  TransactionId?: string;
  LastUsageDate?: string;
  ClientId?: string;
  SessionId?: string;
  LoginExKey?: string;
  RemoteIpAddres?: string;
  IsLogoPlugin?: boolean;
  IsLoginEx?: boolean;
  isLogin?: boolean;
  TokenInfo?: TokenInfo;
  FirmLanguage?: string;
  LogoDB?: string;
  threadCreateDate?: string;
}

/**
 * Interface for LogoDBInfo
 */
export interface LogoDBInfo {
  ConnServerName?: string;
  ConnDBName?: string;
  ConnUserName?: string;
  ConnPassword?: string;
  ConnDBOwner?: string;
  ConnDBType?: number;
  FullConnection?: string;
}

/**
 * Interface for IWorkItemResult
 */
export interface Iworkitemresult {
  IsCompleted?: boolean;
  IsCanceled?: boolean;
  State?: Object;
  WorkItemPriority?: number;
  Result?: Object;
  Exception?: Object;
}

/**
 * Interface for TokenInfo
 */
export interface TokenInfo {
  AccessToken?: string;
  AccessTokenIssuedDate?: string;
  AccessTokenExpiredDate?: string;
  AccessTokenLastRequestDate?: string;
  RefreshToken?: RefreshToken;
}

/**
 * Interface for RefreshToken
 */
export interface RefreshToken {
  Id?: string;
  Subject?: string;
  ClientId?: string;
  IssuedUtc?: string;
  ExpiresUtc?: string;
  ProtectedTicket?: string;
}

/**
 * Interface for HealthCheck
 */
export interface HealthCheck {
  LobjectsWithLicenseSettingCount?: number;
  LobjectsWithoutLicenseSettingCount?: number;
  LobjectsWithoutLicensePoolCount?: number;
  LobjectsWithLicensePoolCount?: number;
  NotRespondingLobjectsWithoutLicenseCount?: number;
  NotRespondingLobjectsWithLicenseCount?: number;
}

/**
 * Sys entity interface based on swagger definition
 */
export interface Sys extends BaseEntity {}

/**
 * Union type of all Sys field names for type-safe field selection and sorting
 */
export type SysField =
  | 'INTERNAL_REFERENCE'
  | 'RECORD_STATUS'
  | 'DATA_SITEID'
  | 'DATA_REFERENCE'
  | 'XML_ATTRIBUTE'
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
  | 'IMAGEINC';

/**
 * Type-safe sort specification for Sys queries
 */
export type SysSortSpec =
  | [SysField]
  | [SysField, 'asc' | 'desc']
  | [SysField[], 'asc' | 'desc']
  | [SysField[]];

/**
 * Type-safe query options for Sys entities
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
export interface SysQueryOptions extends Omit<QueryOptions<SysField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: SysField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: SysSortSpec;
}

/**
 * Search criteria for Sys entities
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
export interface SysSearchCriteria {
  // No specific fields defined - use buildQuery() method for custom queries

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Sys entities
 */
export interface SysAnalytics {
  total: number;
  // Add Sys-specific analytics fields
}
