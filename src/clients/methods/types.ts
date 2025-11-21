import { BaseEntity, QueryOptions } from '../../types';
import { AllFieldValues } from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for RetrieveTokenParameter
 */
export interface RetrieveTokenParameter {
  grant_type?: string;
  username?: string;
  password?: string;
  firmno?: string;
  sessionId?: string;
  logodb?: string;
  useidm?: boolean;
}

/**
 * Interface for RetrieveTokenResult
 */
export interface RetrieveTokenResult {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  refresh_token?: string;
  'as:client_id'?: string;
  userName?: string;
  firmNo?: string;
  useidm?: boolean;
  sessionId?: string;
  dbName?: string;
  logoDB?: string;
  isLoginEx?: string;
  isLogoPlugin?: string;
  '.issued'?: string;
  '.expires'?: string;
}

/**
 * Interface for Void
 */
export interface Void {}

/**
 * Interface for VersionResponse
 */
export interface VersionResponse {
  ApiVersion?: string;
  ReleaseVersion?: string;
}

/**
 * Interface for PingResult
 */
export interface PingResult {
  CallStatus?: number;
  CallStatusText?: string;
  CallStatusDetailText?: string;
  CallStatusStr?: string;
}

/**
 * Interface for MT_TradeGroups
 */
export interface MtTradegroups {
  Meta?: Meta;
  Item?: RscollectionmtTradegroup;
}

/**
 * Interface for RSCollection[MT_TradeGroup]
 */
export interface RscollectionmtTradegroup {
  Meta?: Meta;
  items?: MtTradegroup[];
}

/**
 * Interface for MT_TradeGroup
 */
export interface MtTradegroup {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  Reference?: number;
  code?: string;
  Definition?: string;
  Attributes?: number;
}

/**
 * Interface for MT_ERPApplication
 */
export interface MtErpapplication {
  Meta?: Meta;
  SilentMode?: boolean;
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
 * Interface for MT_CAPI
 */
export interface MtCapi {
  Meta?: Meta;
  Firms?: MtFirms;
  Users?: MtUsers;
  Parent?: Object;
  Terminals?: MtTerminals;
  Currencies?: MtCurrencies;
  Roles?: MtRoles;
}

/**
 * Interface for MT_Firms
 */
export interface MtFirms {
  Meta?: Meta;
  Item?: RscollectionmtFirm;
}

/**
 * Interface for RSCollection[MT_Firm]
 */
export interface RscollectionmtFirm {
  Meta?: Meta;
  items?: MtFirm[];
}

/**
 * Interface for MT_Users
 */
export interface MtUsers {
  Meta?: Meta;
  Item?: RscollectionmtUser;
}

/**
 * Interface for RSCollection[MT_User]
 */
export interface RscollectionmtUser {
  Meta?: Meta;
  items?: MtUser[];
}

/**
 * Interface for MT_Terminals
 */
export interface MtTerminals {
  Meta?: Meta;
  Item?: RscollectionmtTerminal;
}

/**
 * Interface for RSCollection[MT_Terminal]
 */
export interface RscollectionmtTerminal {
  Meta?: Meta;
  items?: MtTerminal[];
}

/**
 * Interface for MT_Terminal
 */
export interface MtTerminal {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  number?: number;
  code?: string;
  userNumber?: number;
  name?: string;
  TaskNumber?: number;
}

/**
 * Interface for MT_Currencies
 */
export interface MtCurrencies {
  Meta?: Meta;
  Item?: RscollectionmtCurrency;
}

/**
 * Interface for RSCollection[MT_Currency]
 */
export interface RscollectionmtCurrency {
  Meta?: Meta;
  items?: MtCurrency[];
}

/**
 * Interface for MT_Currency
 */
export interface MtCurrency {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  ID?: number;
  name?: string;
  symbol?: string;
  globalID?: string;
}

/**
 * Interface for MT_Roles
 */
export interface MtRoles {
  Meta?: Meta;
  Item?: RscollectionmtRole;
}

/**
 * Interface for RSCollection[MT_Role]
 */
export interface RscollectionmtRole {
  Meta?: Meta;
  items?: MtRole[];
}

/**
 * Interface for MT_Role
 */
export interface MtRole {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  nr?: number;
  name?: string;
  Objects?: MtObjects;
}

/**
 * Interface for MT_Objects
 */
export interface MtObjects {
  Meta?: Meta;
  Item?: RscollectionmtObjitem;
}

/**
 * Interface for RSCollection[MT_ObjItem]
 */
export interface RscollectionmtObjitem {
  Meta?: Meta;
  items?: MtObjitem[];
}

/**
 * Interface for MT_ObjItem
 */
export interface MtObjitem {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  typ?: number;
  name?: string;
}

/**
 * Interface for MT_FirmParameters
 */
export interface MtFirmparameters {
  Meta?: Meta;
  localCurr?: string;
  localFrac?: string;
  reportCurr?: string;
  reportFrac?: string;
  costType?: string;
  minLevelCtrl?: string;
  printStFiche?: string;
  mergeStFiche?: boolean;
  sortStFiche?: string;
  negLevelCtrl?: string;
  trackType?: string;
  maxLevelCtrl?: string;
  stUpdRepCurr?: boolean;
  brInvCheck?: boolean;
  safeLevelCtrl?: string;
  ABCCode?: number;
  purchItem?: boolean;
  salesItem?: boolean;
  mtrlItem?: boolean;
  tool?: boolean;
  autoIncSL?: boolean;
  divLotSize?: boolean;
  shelfLife?: number;
  lotEntry?: string;
  locTracking?: boolean;
  clientQc?: string;
  autoMtrIssue?: string;
  chkSLLocExpDate?: boolean;
  purchUnit?: boolean;
  salesUnit?: boolean;
  mtrlUnit?: boolean;
  divUnit?: boolean;
  useType?: number;
  deprType?: number;
  revalFlag?: boolean;
  revDeprFlag?: boolean;
  partDep?: boolean;
  condReadAct?: string;
  iPrintClsLine?: boolean;
  ordCampApply?: boolean;
  despCampApply?: boolean;
  invCampApply?: boolean;
  IOCtrl?: string;
  qcPriority?: string;
  frequency?: number;
  sampleSize?: number;
  purchQChar?: boolean;
  salesQChar?: boolean;
  mtrlQChar?: boolean;
  nonConform?: string;
  itemConform?: string;
  qcBuffer0?: string;
  qcBuffer1?: string;
  qcBuffer2?: string;
  qcBuffer3?: string;
  qcBuffer4?: string;
  autoLotOutMtd?: number;
  lotParty?: number;
  pPrintDesp?: boolean;
  pPrintOrd?: boolean;
  pPrintInv?: boolean;
  pMergeOrder?: boolean;
  pMergeDesp?: boolean;
  pMergeInv?: boolean;
  pSortOrder?: string;
  pSortDesp?: string;
  pSortInv?: string;
  pInvPrintTyp?: string;
  pAttachType?: string;
  pCheckOrdInv?: boolean;
  pUpdateCurr?: boolean;
  pDiscounts?: boolean;
  pExpenses?: boolean;
  pPromDiscs?: boolean;
  pUpdRepCurr?: boolean;
  pOnePayLine?: boolean;
  pRetCostType?: string;
  pPrintCmpLine?: boolean;
  pPrintClsLine?: boolean;
  pDefStatus?: string;
  pPrcType?: number;
  pPrcVAT?: boolean;
  pSrvPrcVAT?: boolean;
  pClConfirm?: string;
  pOrdDateCon?: string;
  pLeadTimeChk?: boolean;
  sOrdPromDlv?: string;
  sCheckOrdLink?: boolean;
  sDefReserve?: boolean;
  checkSalMan?: boolean;
  sPrintDesp?: boolean;
  sPrintOrd?: boolean;
  sPrintInv?: boolean;
  sMergeOrder?: boolean;
  sMergeDesp?: boolean;
  sMergeInv?: boolean;
  sSortOrder?: string;
  sSortDesp?: string;
  sSortInv?: string;
  sInvPrintTyp?: string;
  sAttachType?: string;
  sCheckOrdInv?: boolean;
  sUpdateCurr?: boolean;
  sDiscounts?: boolean;
  sExpenses?: boolean;
  sPromDiscs?: boolean;
  sUpdRepCurr?: boolean;
  sOnePayLine?: boolean;
  sRetCostType?: string;
  sPrintCmpLine?: boolean;
  sPrintClsLine?: boolean;
  sDefStatus?: string;
  salManControl0?: boolean;
  salManControl1?: boolean;
  salManControl2?: boolean;
  sPrcType?: number;
  sPrcVAT?: boolean;
  sSrvPrcVAT?: boolean;
  sClConfirm?: string;
  sOrdDateCon?: string;
  sLeadTimeChk?: boolean;
  piasters0?: number;
  piasters1?: number;
  piasters2?: number;
  piasters3?: number;
  piasters4?: number;
  piasters5?: number;
  piasters6?: number;
  piasters7?: number;
  piasters8?: number;
  piasters9?: number;
  piasters10?: number;
  piasters11?: number;
  piasters12?: number;
  piasters13?: number;
  piasters14?: number;
  printClSlip?: boolean;
  printClNotes?: boolean;
  printRoll?: boolean;
  printBnFiche?: boolean;
  printCashLn?: boolean;
  piasOnDisc?: boolean;
  distExpenses?: boolean;
  riskControl0?: boolean;
  riskControl1?: boolean;
  riskControl2?: boolean;
  riskControl3?: boolean;
  riskControl4?: boolean;
  riskControl5?: boolean;
  riskControl6?: boolean;
  riskControl7?: boolean;
  riskControl8?: boolean;
  riskControl9?: boolean;
  riskControl10?: boolean;
  riskType?: string;
  riskOver?: string;
  protestedNotes?: string;
  noteStampPer?: number;
  reeskontInt?: number;
  endorsTrac?: number;
  mergeCashLns?: string;
  cashWrkDaysCtrl?: string;
  VATRealKurus?: boolean;
  VATDefault?: number;
  VATExpense?: number;
  rollOnePayLine?: boolean;
  finUpdRepCurr?: boolean;
  debtClose0?: boolean;
  debtClose1?: boolean;
  debtClose2?: boolean;
  debtClose3?: boolean;
  debtClose4?: boolean;
  ordRiskOver?: string;
  despRiskOver?: string;
  clLanguage?: boolean;
  chPPConfirm?: string;
  finBuffer0?: string;
  finBuffer1?: string;
  finBuffer2?: string;
  clBaseForm?: boolean;
  cashCode?: string;
  printAccFiche?: boolean;
  printUpperAcc?: boolean;
  sortType?: string;
  currUpdate?: boolean;
  repCurrCont?: boolean;
  centerControl?: string;
  amntControl?: string;
  fichesToCenCtrl0?: boolean;
  fichesToCenCtrl1?: boolean;
  fichesToCenCtrl2?: boolean;
  fichesToCenCtrl3?: boolean;
  fichesToCenCtrl4?: boolean;
  fichesToCenCtrl5?: boolean;
  fichesToCenCtrl6?: boolean;
  fichesToCenCtrl7?: boolean;
  fichesToCenCtrl8?: boolean;
  fichesToCenCtrl9?: boolean;
  fichesToCenCtrl10?: boolean;
  accControl?: string;
  fichesToAccCtrl0?: boolean;
  fichesToAccCtrl1?: boolean;
  fichesToAccCtrl2?: boolean;
  fichesToAccCtrl3?: boolean;
  fichesToAccCtrl4?: boolean;
  fichesToAccCtrl5?: boolean;
  fichesToAccCtrl6?: boolean;
  fichesToAccCtrl7?: boolean;
  fichesToAccCtrl8?: boolean;
  fichesToAccCtrl9?: boolean;
  fichesToAccCtrl10?: boolean;
  accRepCurrCtrl?: string;
  upperAccPrinting?: string;
  doubleWayControl?: boolean;
  debitCreditCtrl?: boolean;
  crossCodeCtrl?: boolean;
  crossAmntMatch?: boolean;
  gLBuffer?: string;
  hideCredTrans?: boolean;
  persEnteg?: string;
  deCodeNotFnd?: string;
  mergeFicheLines0?: boolean;
  mergeFicheLines1?: boolean;
  mergeFicheLines2?: boolean;
  mergeFicheLines3?: boolean;
  mergeFicheLines4?: boolean;
  defStFNames0?: string;
  defStFNames1?: string;
  defStFNames2?: string;
  defStFNames3?: string;
  defStFNames4?: string;
  defStFNames5?: string;
  defStFNames6?: string;
  defStFNames7?: string;
  defStFNames8?: string;
  defStFNames9?: string;
  defPurchFNames0?: string;
  defPurchFNames1?: string;
  defPurchFNames2?: string;
  defPurchFNames3?: string;
  defPurchFNames4?: string;
  defSaleFNames0?: string;
  defSaleFNames1?: string;
  defSaleFNames2?: string;
  defSaleFNames3?: string;
  defSaleFNames4?: string;
  stopajPer0?: number;
  stopajPer1?: number;
  stopajPer2?: number;
  ek1Per?: number;
  ek2Per?: number;
  SSDFPer?: number;
  borsaPer?: number;
  komisyonPer?: number;
  komKDVPer?: number;
  bagKurPer?: number;
  perDataPath?: string;
  begMon?: number;
  begDay?: number;
  reserved0?: boolean;
  reserved1?: boolean;
  reserved2?: boolean;
  reserved3?: boolean;
  reserved4?: boolean;
  buffer0?: string;
  buffer1?: string;
  buffer2?: string;
  buffer3?: string;
  pGlobLotNum?: boolean;
  reserved8?: number;
  diffWHouseUse?: boolean;
  pcBuffer?: string;
  allocTargetType?: number;
  distOverHeads?: string;
  stdRepCurrCont?: string;
  caBuffer?: string;
  gpInComeTaxRatT?: number;
  gpInComeTaxRatS?: number;
  gpFundShareRat?: number;
  gpBuffer?: string;
  accToBeOutOfTrack?: string;
  transferFiche?: boolean;
  expenWasFiche?: boolean;
  productionFiche?: boolean;
  warehouseFiche?: boolean;
  defItemInFiche?: boolean;
  defItemOutFiche?: boolean;
  dispPurcFiche?: boolean;
  dispSaleFiche?: boolean;
  invPurcFiche?: boolean;
  invSaleFiche?: boolean;
  roundDefault?: number;
  countForMPSRun?: number;
  mpsNoOfDays?: number;
  mpsNoOfWeeks?: number;
  mpsNoOfMonths?: number;
  mpsNoOfFrozDays?: number;
  mpsFrozDaysFlag?: number;
  mpsDistrWkDays?: number;
  mpsDistrMntDays?: number;
  Reserved7?: number;
  contToolPlnOccWithWS?: boolean;
  contEmpPlnOccWithWS?: boolean;
  contToolActOccWithWS?: boolean;
  contEmpActOccWithWS?: boolean;
  InvPrintCnt?: string;
  useGenLotNum?: boolean;
  outCtrl?: string;
}

/**
 * Interface for MT_Datas
 */
export interface MtDatas {
  Meta?: Meta;
  Item?: RscollectionmtData;
}

/**
 * Interface for RSCollection[MT_Data]
 */
export interface RscollectionmtData {
  Meta?: Meta;
  items?: MtData[];
}

/**
 * Interface for MT_Data
 */
export interface MtData {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  DataFields?: MtDatafields;
  TableName?: string;
  tableNr?: number;
  DataObject?: MtDataobjecttype;
  DataReady?: boolean;
  ErrorCode?: number;
  ValidateErrors?: MtValidateerrors;
  DataExtensions?: MtDataextensions;
  HasDataExtensions?: boolean;
  ReplicMode?: boolean;
  OpenTrans?: boolean;
  CheckRight?: boolean;
  ErrorDesc?: string;
  BlockMerge?: boolean;
  AddSysLog?: boolean;
  DBErrorDesc?: string;
  CheckParams?: boolean;
  ExportAllData?: boolean;
  Validation?: boolean;
  CheckApproveDate?: boolean;
  ExcludedResolveRefIDList?: string;
  ErrorDescDetail?: string;
  AutoReCalculate?: boolean;
  ValidateWarns?: MtValidateerrors;
}

/**
 * Interface for MT_DataFields
 */
export interface MtDatafields {
  Meta?: Meta;
  Item?: RscollectionmtDatafield;
}

/**
 * Interface for RSCollection[MT_DataField]
 */
export interface RscollectionmtDatafield {
  Meta?: Meta;
  items?: MtDatafield[];
}

/**
 * Interface for MT_DataField
 */
export interface MtDatafield {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  Value?: Object;
  fieldName?: string;
  FieldType?: MtFieldtype;
  FieldSize?: number;
  FieldOffset?: number;
  Lines?: MtLines;
  DBFieldName?: string;
}

/**
 * Interface for MT_FieldType
 */
export interface MtFieldtype {
  Meta?: Meta;
}

/**
 * Interface for MT_Lines
 */
export interface MtLines {
  Meta?: Meta;
  Item?: RscollectionmtDatafields;
}

/**
 * Interface for RSCollection[MT_DataFields]
 */
export interface RscollectionmtDatafields {
  Meta?: Meta;
  items?: MtDatafields[];
}

/**
 * Interface for MT_DataObjectType
 */
export interface MtDataobjecttype {
  Meta?: Meta;
}

/**
 * Interface for MT_ValidateErrors
 */
export interface MtValidateerrors {
  Meta?: Meta;
  Item?: RscollectionmtValidateerror;
  Count?: number;
}

/**
 * Interface for RSCollection[MT_ValidateError]
 */
export interface RscollectionmtValidateerror {
  Meta?: Meta;
  items?: MtValidateerror[];
}

/**
 * Interface for MT_ValidateError
 */
export interface MtValidateerror {
  Meta?: Meta;
  Error?: string;
  ID?: number;
  ErrorDetail?: string;
}

/**
 * Interface for MT_DataExtensions
 */
export interface MtDataextensions {
  Meta?: Meta;
  Item?: RscollectionmtDataextension;
}

/**
 * Interface for RSCollection[MT_DataExtension]
 */
export interface RscollectionmtDataextension {
  Meta?: Meta;
  items?: MtDataextension[];
}

/**
 * Interface for MT_DataExtension
 */
export interface MtDataextension {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  TableName?: string;
  number?: number;
  Fields?: MtExtensionfields;
}

/**
 * Interface for MT_ExtensionFields
 */
export interface MtExtensionfields {
  Meta?: Meta;
  Item?: RscollectionmtExtensionfield;
}

/**
 * Interface for RSCollection[MT_ExtensionField]
 */
export interface RscollectionmtExtensionfield {
  Meta?: Meta;
  items?: MtExtensionfield[];
}

/**
 * Interface for MT_ExtensionField
 */
export interface MtExtensionfield {
  Meta?: Meta;
  index?: number;
  Parent?: Object;
  fieldName?: string;
  FieldType?: MtFieldtype;
  Value?: Object;
}

/**
 * Interface for KeyValueParameter
 */
export interface KeyValueParameter {
  Name?: string;
  Value?: Object;
}

/**
 * Methods entity interface based on swagger definition
 */
export interface Methods extends BaseEntity {}

/**
 * Union type of all Methods field names for type-safe field selection and sorting
 */
export type MethodsField =
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
 * Type-safe sort specification for Methods queries
 */
export type MethodsSortSpec =
  | [MethodsField]
  | [MethodsField, 'asc' | 'desc']
  | [MethodsField[], 'asc' | 'desc']
  | [MethodsField[]];

/**
 * Type-safe query options for Methods entities
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
export interface MethodsQueryOptions extends Omit<QueryOptions<MethodsField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: MethodsField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: MethodsSortSpec;
}

/**
 * Search criteria for Methods entities
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
export interface MethodsSearchCriteria {
  // No specific fields defined - use buildQuery() method for custom queries

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for Methods entities
 */
export interface MethodsAnalytics {
  total: number;
  // Add Methods-specific analytics fields
}
