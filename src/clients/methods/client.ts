/**
 * @module Methods
 */

import { BaseApiClient } from '../base';
import { ApiClientConfig } from '../../types';
import {
  RetrieveTokenParameter,
  RetrieveTokenResult,
  VersionResponse,
  PingResult,
  MtTradegroups,
  MtErpapplication,
  MtFirm,
  MtUser,
  MtPeriod,
  MtCapi,
  MtFirms,
  MtUsers,
  MtTerminals,
  MtCurrencies,
  MtRoles,
  MtFirmparameters,
  MtDatas,
  KeyValueParameter,
} from './types';

/**
 * @class MethodsClient
 * @extends BaseApiClient
 * @description
 * The `MethodsClient` provides an interface for interacting with the `Methods` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Oturum İşlemleri
 * @category Oturum Açma
 * @category Oturum Çıkış
 * @category Token Kontrol
 * @category Servis Versiyon
 * @category Ping
 * @category Period Method
 * @category Unity Method
 * @category Firm Method
 * @category User Method
 */
export class MethodsClient extends BaseApiClient {
  private readonly endpoint = '/methods';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method authorization_V1_methods_retrievetoken
   * @description Corresponds to `POST /methods/retrievetoken`
   * @param {RetrieveTokenParameter} data - The request body.
   * @returns {Promise<RetrieveTokenResult>} A promise resolving to the response.
   */
  async authorization_V1_methods_retrievetoken(
    data: RetrieveTokenParameter
  ): Promise<RetrieveTokenResult> {
    return this.request('post', `/methods/retrievetoken`, data);
  }

  /**
   * @method authorization_V1_methods_revoke
   * @description Corresponds to `GET /methods/revoke`
   * @returns {Promise<void>} A promise resolving to the response.
   */
  async authorization_V1_methods_revoke(): Promise<void> {
    return this.request('get', `/methods/revoke`);
  }

  /**
   * @method authorization_V1_methods_istokenvalid
   * @description Corresponds to `GET /methods/istokenvalid`
   * @returns {Promise<void>} A promise resolving to the response.
   */
  async authorization_V1_methods_istokenvalid(): Promise<void> {
    return this.request('get', `/methods/istokenvalid`);
  }

  /**
   * @method authorization_V1_methods_versions
   * @description Corresponds to `GET /methods/versions`
   * @returns {Promise<VersionResponse>} A promise resolving to the response.
   */
  async authorization_V1_methods_versions(): Promise<VersionResponse> {
    return this.request('get', `/methods/versions`);
  }

  /**
   * @method authorization_V1_methods_ping
   * @description Corresponds to `GET /methods/ping`
   * @returns {Promise<PingResult>} A promise resolving to the response.
   */
  async authorization_V1_methods_ping(): Promise<PingResult> {
    return this.request('get', `/methods/ping`);
  }

  /**
   * @method period_CreateTablesV1
   * @description Corresponds to `GET /methods/Firm/{FirmNr}/Period/CreateTables/{number}`
   * @param {number} FirmNr - FirmNr
   * @param {number} number - number
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async period_CreateTablesV1(FirmNr: number, number: number): Promise<boolean> {
    return this.request('get', `/methods/Firm/${FirmNr}/Period/CreateTables/${number}`);
  }

  /**
   * @method period_CreateTriggersV1
   * @description Corresponds to `GET /methods/Firm/{FirmNr}/Period/CreateTriggers/{number}`
   * @param {number} FirmNr - FirmNr
   * @param {number} number - number
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async period_CreateTriggersV1(FirmNr: number, number: number): Promise<boolean> {
    return this.request('get', `/methods/Firm/${FirmNr}/Period/CreateTriggers/${number}`);
  }

  /**
   * @method period_CreateCustomTablesV1
   * @description Corresponds to `GET /methods/Firm/{FirmNr}/Period/CreateCustomTables/{number}`
   * @param {number} FirmNr - FirmNr
   * @param {number} number - number
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async period_CreateCustomTablesV1(FirmNr: number, number: number): Promise<boolean> {
    return this.request('get', `/methods/Firm/${FirmNr}/Period/CreateCustomTables/${number}`);
  }

  /**
   * @method period_UpdateCustomTablesV1
   * @description Corresponds to `GET /methods/Firm/{FirmNr}/Period/UpdateCustomTables/{number}`
   * @param {number} FirmNr - FirmNr
   * @param {number} number - number
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async period_UpdateCustomTablesV1(FirmNr: number, number: number): Promise<boolean> {
    return this.request('get', `/methods/Firm/${FirmNr}/Period/UpdateCustomTables/${number}`);
  }

  /**
   * @method tradeGroupsDeleteV1
   * @description Corresponds to `GET /methods/TradeGroups/Delete/{_index}`
   * @param {number} index - _index
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async tradeGroupsDeleteV1(index: number): Promise<boolean> {
    return this.request('get', `/methods/TradeGroups/Delete/${index}`);
  }

  /**
   * @method tradeGroupsDelete_V1
   * @description Corresponds to `GET /methods/TradeGroups/Delete_/{_index}`
   * @param {number} index - _index
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async tradeGroupsDelete_V1(index: number): Promise<boolean> {
    return this.request('get', `/methods/TradeGroups/Delete_/${index}`);
  }

  /**
   * @method tradeGroupsClear_V1
   * @description Corresponds to `GET /methods/TradeGroups/Clear_`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async tradeGroupsClear_V1(): Promise<boolean> {
    return this.request('get', `/methods/TradeGroups/Clear_`);
  }

  /**
   * @method tradeGroupsV1
   * @description Corresponds to `GET /methods/TradeGroups`
   * @returns {Promise<MtTradegroups>} A promise resolving to the response.
   */
  async tradeGroupsV1(): Promise<MtTradegroups> {
    return this.request('get', `/methods/TradeGroups`);
  }

  /**
   * @method tradeGroups_CountV1
   * @description Corresponds to `GET /methods/TradeGroups/Count`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async tradeGroups_CountV1(): Promise<number> {
    return this.request('get', `/methods/TradeGroups/Count`);
  }

  /**
   * @method tradeGroups_ParentV1
   * @description Corresponds to `GET /methods/TradeGroups/Parent`
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async tradeGroups_ParentV1(): Promise<Record<string, unknown>> {
    return this.request('get', `/methods/TradeGroups/Parent`);
  }

  /**
   * @method serialNoV1
   * @description Corresponds to `GET /methods/SerialNo`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async serialNoV1(): Promise<string> {
    return this.request('get', `/methods/SerialNo`);
  }

  /**
   * @method userCountV1
   * @description Corresponds to `GET /methods/UserCount`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async userCountV1(): Promise<number> {
    return this.request('get', `/methods/UserCount`);
  }

  /**
   * @method logPathV1
   * @description Corresponds to `GET /methods/LogPath`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async logPathV1(): Promise<string> {
    return this.request('get', `/methods/LogPath`);
  }

  /**
   * @method createCAPIV1
   * @description Corresponds to `GET /methods/CreateCAPI`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async createCAPIV1(): Promise<boolean> {
    return this.request('get', `/methods/CreateCAPI`);
  }

  /**
   * @method forcedCfgServerNameV1
   * @description Corresponds to `GET /methods/ForcedCfgServerName`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async forcedCfgServerNameV1(): Promise<string> {
    return this.request('get', `/methods/ForcedCfgServerName`);
  }

  /**
   * @method forcedCfgDBNameV1
   * @description Corresponds to `GET /methods/ForcedCfgDBName`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async forcedCfgDBNameV1(): Promise<string> {
    return this.request('get', `/methods/ForcedCfgDBName`);
  }

  /**
   * @method forcedCfgUserNameV1
   * @description Corresponds to `GET /methods/ForcedCfgUserName`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async forcedCfgUserNameV1(): Promise<string> {
    return this.request('get', `/methods/ForcedCfgUserName`);
  }

  /**
   * @method forcedCfgPasswordV1
   * @description Corresponds to `GET /methods/ForcedCfgPassword`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async forcedCfgPasswordV1(): Promise<string> {
    return this.request('get', `/methods/ForcedCfgPassword`);
  }

  /**
   * @method forcedCfgDBOwnerV1
   * @description Corresponds to `GET /methods/ForcedCfgDBOwner`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async forcedCfgDBOwnerV1(): Promise<string> {
    return this.request('get', `/methods/ForcedCfgDBOwner`);
  }

  /**
   * @method forcedCfgDBTypeV1
   * @description Corresponds to `GET /methods/ForcedCfgDBType`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async forcedCfgDBTypeV1(): Promise<number> {
    return this.request('get', `/methods/ForcedCfgDBType`);
  }

  /**
   * @method checkTableExistsV1
   * @description Corresponds to `GET /methods/CheckTableExists`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async checkTableExistsV1(): Promise<boolean> {
    return this.request('get', `/methods/CheckTableExists`);
  }

  /**
   * @method createServicesCardsV1
   * @description Corresponds to `GET /methods/CreateServicesCards`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async createServicesCardsV1(): Promise<boolean> {
    return this.request('get', `/methods/CreateServicesCards`);
  }

  /**
   * @method cancelChangeLogV1
   * @description Corresponds to `GET /methods/CancelChangeLog`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async cancelChangeLogV1(): Promise<boolean> {
    return this.request('get', `/methods/CancelChangeLog`);
  }

  /**
   * @method cancelHistoryV1
   * @description Corresponds to `GET /methods/CancelHistory`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async cancelHistoryV1(): Promise<boolean> {
    return this.request('get', `/methods/CancelHistory`);
  }

  /**
   * @method createDynReportsV1
   * @description Corresponds to `GET /methods/CreateDynReports`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async createDynReportsV1(): Promise<boolean> {
    return this.request('get', `/methods/CreateDynReports`);
  }

  /**
   * @method restInPeaceV1
   * @description Corresponds to `GET /methods/RestInPeace`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async restInPeaceV1(): Promise<boolean> {
    return this.request('get', `/methods/RestInPeace`);
  }

  /**
   * @method erpapplicationrunreportV1
   * @description Corresponds to `GET /methods/ERPApplication/RunReport/{_tskId}/{_devType}/{_jsonGridType}/{_custDsgRef}/{_filterRef}`
   * @param {number} tskId - _tskId
   * @param {number} devType - _devType
   * @param {number} jsonGridType - _jsonGridType
   * @param {number} custDsgRef - _custDsgRef
   * @param {number} filterRef - _filterRef
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async erpapplicationrunreportV1(
    tskId: number,
    devType: number,
    jsonGridType: number,
    custDsgRef: number,
    filterRef: number
  ): Promise<string> {
    return this.request(
      'get',
      `/methods/ERPApplication/RunReport/${tskId}/${devType}/${jsonGridType}/${custDsgRef}/${filterRef}`
    );
  }

  /**
   * @method erpapplicationaddtoreportqueueV1
   * @description Corresponds to `GET /methods/ERPApplication/AddToReportQueue/{_tskId}/{_devType}/{_jsonGridType}/{_custDsgRef}/{_filterRef}`
   * @param {number} tskId - _tskId
   * @param {number} devType - _devType
   * @param {number} jsonGridType - _jsonGridType
   * @param {number} custDsgRef - _custDsgRef
   * @param {number} filterRef - _filterRef
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async erpapplicationaddtoreportqueueV1(
    tskId: number,
    devType: number,
    jsonGridType: number,
    custDsgRef: number,
    filterRef: number
  ): Promise<string> {
    return this.request(
      'get',
      `/methods/ERPApplication/AddToReportQueue/${tskId}/${devType}/${jsonGridType}/${custDsgRef}/${filterRef}`
    );
  }

  /**
   * @method erpapplicationgetfirstreportfromqueueV1
   * @description Corresponds to `GET /methods/ERPApplication/GetFirstReportFromQueue`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async erpapplicationgetfirstreportfromqueueV1(): Promise<string> {
    return this.request('get', `/methods/ERPApplication/GetFirstReportFromQueue`);
  }

  /**
   * @method erpapplicationrunreportfromqueueV1
   * @description Corresponds to `GET /methods/ERPApplication/RunReportFromQueue/{_queueId}/{_forceReCreate}`
   * @param {string} queueId - _queueId
   * @param {boolean} forceReCreate - _forceReCreate
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async erpapplicationrunreportfromqueueV1(
    queueId: string,
    forceReCreate: boolean
  ): Promise<string> {
    return this.request(
      'get',
      `/methods/ERPApplication/RunReportFromQueue/${queueId}/${forceReCreate}`
    );
  }

  /**
   * @method erpapplicationgetqueuelistV1
   * @description Corresponds to `GET /methods/ERPApplication/GetQueueList/{_queueIdFilter}/{_statusFilter}/{_resultFilter}`
   * @param {string} queueIdFilter - _queueIdFilter
   * @param {string} statusFilter - _statusFilter
   * @param {string} resultFilter - _resultFilter
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async erpapplicationgetqueuelistV1(
    queueIdFilter: string,
    statusFilter: string,
    resultFilter: string
  ): Promise<string> {
    return this.request(
      'get',
      `/methods/ERPApplication/GetQueueList/${queueIdFilter}/${statusFilter}/${resultFilter}`
    );
  }

  /**
   * @method erpapplicationV1
   * @description Corresponds to `GET /methods/ERPApplication`
   * @returns {Promise<MtErpapplication>} A promise resolving to the response.
   */
  async erpapplicationV1(): Promise<MtErpapplication> {
    return this.request('get', `/methods/ERPApplication`);
  }

  /**
   * @method erpapplicationSilentmodeV1
   * @description Corresponds to `GET /methods/ERPApplication/SilentMode`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async erpapplicationSilentmodeV1(): Promise<boolean> {
    return this.request('get', `/methods/ERPApplication/SilentMode`);
  }

  /**
   * @method currentPeriodV1
   * @description Corresponds to `GET /methods/CurrentPeriod`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async currentPeriodV1(): Promise<number> {
    return this.request('get', `/methods/CurrentPeriod`);
  }

  /**
   * @method firm_PostV1
   * @description Corresponds to `PUT /methods/Firm/{FirmNr}/put`
   * @param {number} FirmNr - FirmNr
   * @param {MtFirm} data - The request body.
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firm_PostV1(FirmNr: number, data: MtFirm): Promise<boolean> {
    return this.request('put', `/methods/Firm/${FirmNr}/put`, data);
  }

  /**
   * @method firm_PostV1Post
   * @description Corresponds to `POST /methods/Firm/Post`
   * @param {MtFirm} data - The request body.
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firm_PostV1Post(data: MtFirm): Promise<boolean> {
    return this.request('post', `/methods/Firm/Post`, data);
  }

  /**
   * @method firm_DeleteV1
   * @description Corresponds to `DELETE /methods/Firm/Delete/{FirmNr}`
   * @param {number} FirmNr - FirmNr
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firm_DeleteV1(FirmNr: number): Promise<boolean> {
    return this.request('delete', `/methods/Firm/Delete/${FirmNr}`);
  }

  /**
   * @method firm_CreateTablesV1
   * @description Corresponds to `GET /methods/Firm/CreateTables/{FirmNr}`
   * @param {number} FirmNr - FirmNr
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firm_CreateTablesV1(FirmNr: number): Promise<boolean> {
    return this.request('get', `/methods/Firm/CreateTables/${FirmNr}`);
  }

  /**
   * @method firm_CreateCustomTablesV1
   * @description Corresponds to `GET /methods/Firm/CreateCustomTables/{FirmNr}`
   * @param {number} FirmNr - FirmNr
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firm_CreateCustomTablesV1(FirmNr: number): Promise<boolean> {
    return this.request('get', `/methods/Firm/CreateCustomTables/${FirmNr}`);
  }

  /**
   * @method firm_UpdateCustomTablesV1
   * @description Corresponds to `GET /methods/Firm/UpdateCustomTables/{FirmNr}`
   * @param {number} FirmNr - FirmNr
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firm_UpdateCustomTablesV1(FirmNr: number): Promise<boolean> {
    return this.request('get', `/methods/Firm/UpdateCustomTables/${FirmNr}`);
  }

  /**
   * @method user_PostV1
   * @description Corresponds to `PUT /methods/User/{UserName}/put`
   * @param {string} UserName - UserName
   * @param {MtUser} data - The request body.
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async user_PostV1(UserName: string, data: MtUser): Promise<boolean> {
    return this.request('put', `/methods/User/${UserName}/put`, data);
  }

  /**
   * @method user_PostV1Post
   * @description Corresponds to `POST /methods/User/Post`
   * @param {MtUser} data - The request body.
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async user_PostV1Post(data: MtUser): Promise<boolean> {
    return this.request('post', `/methods/User/Post`, data);
  }

  /**
   * @method user_DeleteV1
   * @description Corresponds to `DELETE /methods/User/Delete/{UserNr}`
   * @param {number} UserNr - UserNr
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async user_DeleteV1(UserNr: number): Promise<boolean> {
    return this.request('delete', `/methods/User/Delete/${UserNr}`);
  }

  /**
   * @method user_SetWindowsUserModeV1
   * @description Corresponds to `GET /methods/User/SetWindowsUserMode/{UserNr}`
   * @param {number} UserNr - UserNr
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async user_SetWindowsUserModeV1(UserNr: number): Promise<boolean> {
    return this.request('get', `/methods/User/SetWindowsUserMode/${UserNr}`);
  }

  /**
   * @method period_PostV1
   * @description Corresponds to `PUT /methods/Period/{PeriodNr}/put/{FirmNr}`
   * @param {number} PeriodNr - PeriodNr
   * @param {number} FirmNr - FirmNr
   * @param {MtPeriod} data - The request body.
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async period_PostV1(PeriodNr: number, FirmNr: number, data: MtPeriod): Promise<boolean> {
    return this.request('put', `/methods/Period/${PeriodNr}/put/${FirmNr}`, data);
  }

  /**
   * @method period_PostV1Post
   * @description Corresponds to `POST /methods/Period/Post/{FirmNr}`
   * @param {number} FirmNr - FirmNr
   * @param {MtPeriod} data - The request body.
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async period_PostV1Post(FirmNr: number, data: MtPeriod): Promise<boolean> {
    return this.request('post', `/methods/Period/Post/${FirmNr}`, data);
  }

  /**
   * @method period_DeleteV1
   * @description Corresponds to `DELETE /methods/Firm/{FirmNr}/Period/Delete/{number}`
   * @param {number} FirmNr - FirmNr
   * @param {number} number - number
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async period_DeleteV1(FirmNr: number, number: number): Promise<boolean> {
    return this.request('delete', `/methods/Firm/${FirmNr}/Period/Delete/${number}`);
  }

  /**
   * @method firmParameters_buffer2V1
   * @description Corresponds to `GET /methods/FirmParameters/buffer2`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_buffer2V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/buffer2`);
  }

  /**
   * @method firmParameters_buffer3V1
   * @description Corresponds to `GET /methods/FirmParameters/buffer3`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_buffer3V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/buffer3`);
  }

  /**
   * @method firmParameters_pGlobLotNumV1
   * @description Corresponds to `GET /methods/FirmParameters/pGlobLotNum`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pGlobLotNumV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pGlobLotNum`);
  }

  /**
   * @method firmParameters_reserved8V1
   * @description Corresponds to `GET /methods/FirmParameters/reserved8`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_reserved8V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/reserved8`);
  }

  /**
   * @method firmParameters_diffWHouseUseV1
   * @description Corresponds to `GET /methods/FirmParameters/diffWHouseUse`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_diffWHouseUseV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/diffWHouseUse`);
  }

  /**
   * @method firmParameters_pcBufferV1
   * @description Corresponds to `GET /methods/FirmParameters/pcBuffer`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_pcBufferV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/pcBuffer`);
  }

  /**
   * @method firmParameters_allocTargetTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/allocTargetType`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_allocTargetTypeV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/allocTargetType`);
  }

  /**
   * @method firmParameters_distOverHeadsV1
   * @description Corresponds to `GET /methods/FirmParameters/distOverHeads`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_distOverHeadsV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/distOverHeads`);
  }

  /**
   * @method firmParameters_stdRepCurrContV1
   * @description Corresponds to `GET /methods/FirmParameters/stdRepCurrCont`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_stdRepCurrContV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/stdRepCurrCont`);
  }

  /**
   * @method firmParameters_caBufferV1
   * @description Corresponds to `GET /methods/FirmParameters/caBuffer`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_caBufferV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/caBuffer`);
  }

  /**
   * @method firmParameters_gpInComeTaxRatTV1
   * @description Corresponds to `GET /methods/FirmParameters/gpInComeTaxRatT`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_gpInComeTaxRatTV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/gpInComeTaxRatT`);
  }

  /**
   * @method firmParameters_gpInComeTaxRatSV1
   * @description Corresponds to `GET /methods/FirmParameters/gpInComeTaxRatS`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_gpInComeTaxRatSV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/gpInComeTaxRatS`);
  }

  /**
   * @method firmParameters_gpFundShareRatV1
   * @description Corresponds to `GET /methods/FirmParameters/gpFundShareRat`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_gpFundShareRatV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/gpFundShareRat`);
  }

  /**
   * @method firmParameters_gpBufferV1
   * @description Corresponds to `GET /methods/FirmParameters/gpBuffer`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_gpBufferV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/gpBuffer`);
  }

  /**
   * @method firmParameters_accToBeOutOfTrackV1
   * @description Corresponds to `GET /methods/FirmParameters/accToBeOutOfTrack`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_accToBeOutOfTrackV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/accToBeOutOfTrack`);
  }

  /**
   * @method firmParameters_transferFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/transferFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_transferFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/transferFiche`);
  }

  /**
   * @method firmParameters_expenWasFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/expenWasFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_expenWasFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/expenWasFiche`);
  }

  /**
   * @method firmParameters_productionFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/productionFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_productionFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/productionFiche`);
  }

  /**
   * @method firmParameters_warehouseFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/warehouseFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_warehouseFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/warehouseFiche`);
  }

  /**
   * @method firmParameters_defItemInFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/defItemInFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_defItemInFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/defItemInFiche`);
  }

  /**
   * @method firmParameters_defItemOutFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/defItemOutFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_defItemOutFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/defItemOutFiche`);
  }

  /**
   * @method firmParameters_dispPurcFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/dispPurcFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_dispPurcFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/dispPurcFiche`);
  }

  /**
   * @method firmParameters_dispSaleFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/dispSaleFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_dispSaleFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/dispSaleFiche`);
  }

  /**
   * @method firmParameters_invPurcFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/invPurcFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_invPurcFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/invPurcFiche`);
  }

  /**
   * @method firmParameters_invSaleFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/invSaleFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_invSaleFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/invSaleFiche`);
  }

  /**
   * @method firmParameters_roundDefaultV1
   * @description Corresponds to `GET /methods/FirmParameters/roundDefault`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_roundDefaultV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/roundDefault`);
  }

  /**
   * @method firmParameters_countForMPSRunV1
   * @description Corresponds to `GET /methods/FirmParameters/countForMPSRun`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_countForMPSRunV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/countForMPSRun`);
  }

  /**
   * @method firmParameters_mpsNoOfDaysV1
   * @description Corresponds to `GET /methods/FirmParameters/mpsNoOfDays`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_mpsNoOfDaysV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/mpsNoOfDays`);
  }

  /**
   * @method firmParameters_mpsNoOfWeeksV1
   * @description Corresponds to `GET /methods/FirmParameters/mpsNoOfWeeks`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_mpsNoOfWeeksV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/mpsNoOfWeeks`);
  }

  /**
   * @method firmParameters_mpsNoOfMonthsV1
   * @description Corresponds to `GET /methods/FirmParameters/mpsNoOfMonths`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_mpsNoOfMonthsV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/mpsNoOfMonths`);
  }

  /**
   * @method firmParameters_mpsNoOfFrozDaysV1
   * @description Corresponds to `GET /methods/FirmParameters/mpsNoOfFrozDays`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_mpsNoOfFrozDaysV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/mpsNoOfFrozDays`);
  }

  /**
   * @method firmParameters_mpsFrozDaysFlagV1
   * @description Corresponds to `GET /methods/FirmParameters/mpsFrozDaysFlag`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_mpsFrozDaysFlagV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/mpsFrozDaysFlag`);
  }

  /**
   * @method firmParameters_mpsDistrWkDaysV1
   * @description Corresponds to `GET /methods/FirmParameters/mpsDistrWkDays`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_mpsDistrWkDaysV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/mpsDistrWkDays`);
  }

  /**
   * @method firmParameters_mpsDistrMntDaysV1
   * @description Corresponds to `GET /methods/FirmParameters/mpsDistrMntDays`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_mpsDistrMntDaysV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/mpsDistrMntDays`);
  }

  /**
   * @method firmParameters_Reserved7V1
   * @description Corresponds to `GET /methods/FirmParameters/Reserved7`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_Reserved7V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/Reserved7`);
  }

  /**
   * @method firmParameters_contToolPlnOccWithWSV1
   * @description Corresponds to `GET /methods/FirmParameters/contToolPlnOccWithWS`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_contToolPlnOccWithWSV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/contToolPlnOccWithWS`);
  }

  /**
   * @method firmParameters_contEmpPlnOccWithWSV1
   * @description Corresponds to `GET /methods/FirmParameters/contEmpPlnOccWithWS`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_contEmpPlnOccWithWSV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/contEmpPlnOccWithWS`);
  }

  /**
   * @method firmParameters_contToolActOccWithWSV1
   * @description Corresponds to `GET /methods/FirmParameters/contToolActOccWithWS`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_contToolActOccWithWSV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/contToolActOccWithWS`);
  }

  /**
   * @method firmParameters_contEmpActOccWithWSV1
   * @description Corresponds to `GET /methods/FirmParameters/contEmpActOccWithWS`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_contEmpActOccWithWSV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/contEmpActOccWithWS`);
  }

  /**
   * @method firmParameters_InvPrintCntV1
   * @description Corresponds to `GET /methods/FirmParameters/InvPrintCnt`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_InvPrintCntV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/InvPrintCnt`);
  }

  /**
   * @method firmParameters_useGenLotNumV1
   * @description Corresponds to `GET /methods/FirmParameters/useGenLotNum`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_useGenLotNumV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/useGenLotNum`);
  }

  /**
   * @method firmParameters_outCtrlV1
   * @description Corresponds to `GET /methods/FirmParameters/outCtrl`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_outCtrlV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/outCtrl`);
  }

  /**
   * @method firmParameters_mergeFicheLines2V1
   * @description Corresponds to `GET /methods/FirmParameters/mergeFicheLines2`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_mergeFicheLines2V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/mergeFicheLines2`);
  }

  /**
   * @method firmParameters_mergeFicheLines3V1
   * @description Corresponds to `GET /methods/FirmParameters/mergeFicheLines3`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_mergeFicheLines3V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/mergeFicheLines3`);
  }

  /**
   * @method firmParameters_mergeFicheLines4V1
   * @description Corresponds to `GET /methods/FirmParameters/mergeFicheLines4`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_mergeFicheLines4V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/mergeFicheLines4`);
  }

  /**
   * @method firmParameters_defStFNames0V1
   * @description Corresponds to `GET /methods/FirmParameters/defStFNames0`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defStFNames0V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defStFNames0`);
  }

  /**
   * @method firmParameters_defStFNames1V1
   * @description Corresponds to `GET /methods/FirmParameters/defStFNames1`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defStFNames1V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defStFNames1`);
  }

  /**
   * @method firmParameters_defStFNames2V1
   * @description Corresponds to `GET /methods/FirmParameters/defStFNames2`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defStFNames2V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defStFNames2`);
  }

  /**
   * @method firmParameters_defStFNames3V1
   * @description Corresponds to `GET /methods/FirmParameters/defStFNames3`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defStFNames3V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defStFNames3`);
  }

  /**
   * @method firmParameters_defStFNames4V1
   * @description Corresponds to `GET /methods/FirmParameters/defStFNames4`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defStFNames4V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defStFNames4`);
  }

  /**
   * @method firmParameters_defStFNames5V1
   * @description Corresponds to `GET /methods/FirmParameters/defStFNames5`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defStFNames5V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defStFNames5`);
  }

  /**
   * @method firmParameters_defStFNames6V1
   * @description Corresponds to `GET /methods/FirmParameters/defStFNames6`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defStFNames6V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defStFNames6`);
  }

  /**
   * @method firmParameters_defStFNames7V1
   * @description Corresponds to `GET /methods/FirmParameters/defStFNames7`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defStFNames7V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defStFNames7`);
  }

  /**
   * @method firmParameters_defStFNames8V1
   * @description Corresponds to `GET /methods/FirmParameters/defStFNames8`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defStFNames8V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defStFNames8`);
  }

  /**
   * @method firmParameters_defStFNames9V1
   * @description Corresponds to `GET /methods/FirmParameters/defStFNames9`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defStFNames9V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defStFNames9`);
  }

  /**
   * @method firmParameters_defPurchFNames0V1
   * @description Corresponds to `GET /methods/FirmParameters/defPurchFNames0`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defPurchFNames0V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defPurchFNames0`);
  }

  /**
   * @method firmParameters_defPurchFNames1V1
   * @description Corresponds to `GET /methods/FirmParameters/defPurchFNames1`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defPurchFNames1V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defPurchFNames1`);
  }

  /**
   * @method firmParameters_defPurchFNames2V1
   * @description Corresponds to `GET /methods/FirmParameters/defPurchFNames2`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defPurchFNames2V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defPurchFNames2`);
  }

  /**
   * @method firmParameters_defPurchFNames3V1
   * @description Corresponds to `GET /methods/FirmParameters/defPurchFNames3`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defPurchFNames3V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defPurchFNames3`);
  }

  /**
   * @method firmParameters_defPurchFNames4V1
   * @description Corresponds to `GET /methods/FirmParameters/defPurchFNames4`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defPurchFNames4V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defPurchFNames4`);
  }

  /**
   * @method firmParameters_defSaleFNames0V1
   * @description Corresponds to `GET /methods/FirmParameters/defSaleFNames0`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defSaleFNames0V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defSaleFNames0`);
  }

  /**
   * @method firmParameters_defSaleFNames1V1
   * @description Corresponds to `GET /methods/FirmParameters/defSaleFNames1`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defSaleFNames1V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defSaleFNames1`);
  }

  /**
   * @method firmParameters_defSaleFNames2V1
   * @description Corresponds to `GET /methods/FirmParameters/defSaleFNames2`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defSaleFNames2V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defSaleFNames2`);
  }

  /**
   * @method firmParameters_defSaleFNames3V1
   * @description Corresponds to `GET /methods/FirmParameters/defSaleFNames3`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defSaleFNames3V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defSaleFNames3`);
  }

  /**
   * @method firmParameters_defSaleFNames4V1
   * @description Corresponds to `GET /methods/FirmParameters/defSaleFNames4`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_defSaleFNames4V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/defSaleFNames4`);
  }

  /**
   * @method firmParameters_stopajPer0V1
   * @description Corresponds to `GET /methods/FirmParameters/stopajPer0`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_stopajPer0V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/stopajPer0`);
  }

  /**
   * @method firmParameters_stopajPer1V1
   * @description Corresponds to `GET /methods/FirmParameters/stopajPer1`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_stopajPer1V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/stopajPer1`);
  }

  /**
   * @method firmParameters_stopajPer2V1
   * @description Corresponds to `GET /methods/FirmParameters/stopajPer2`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_stopajPer2V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/stopajPer2`);
  }

  /**
   * @method firmParameters_ek1PerV1
   * @description Corresponds to `GET /methods/FirmParameters/ek1Per`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_ek1PerV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/ek1Per`);
  }

  /**
   * @method firmParameters_ek2PerV1
   * @description Corresponds to `GET /methods/FirmParameters/ek2Per`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_ek2PerV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/ek2Per`);
  }

  /**
   * @method firmParameters_SSDFPerV1
   * @description Corresponds to `GET /methods/FirmParameters/SSDFPer`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_SSDFPerV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/SSDFPer`);
  }

  /**
   * @method firmParameters_borsaPerV1
   * @description Corresponds to `GET /methods/FirmParameters/borsaPer`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_borsaPerV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/borsaPer`);
  }

  /**
   * @method firmParameters_komisyonPerV1
   * @description Corresponds to `GET /methods/FirmParameters/komisyonPer`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_komisyonPerV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/komisyonPer`);
  }

  /**
   * @method firmParameters_komKDVPerV1
   * @description Corresponds to `GET /methods/FirmParameters/komKDVPer`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_komKDVPerV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/komKDVPer`);
  }

  /**
   * @method firmParameters_bagKurPerV1
   * @description Corresponds to `GET /methods/FirmParameters/bagKurPer`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_bagKurPerV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/bagKurPer`);
  }

  /**
   * @method firmParameters_perDataPathV1
   * @description Corresponds to `GET /methods/FirmParameters/perDataPath`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_perDataPathV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/perDataPath`);
  }

  /**
   * @method firmParameters_begMonV1
   * @description Corresponds to `GET /methods/FirmParameters/begMon`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_begMonV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/begMon`);
  }

  /**
   * @method firmParameters_begDayV1
   * @description Corresponds to `GET /methods/FirmParameters/begDay`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_begDayV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/begDay`);
  }

  /**
   * @method firmParameters_reserved0V1
   * @description Corresponds to `GET /methods/FirmParameters/reserved0`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_reserved0V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/reserved0`);
  }

  /**
   * @method firmParameters_reserved1V1
   * @description Corresponds to `GET /methods/FirmParameters/reserved1`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_reserved1V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/reserved1`);
  }

  /**
   * @method firmParameters_reserved2V1
   * @description Corresponds to `GET /methods/FirmParameters/reserved2`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_reserved2V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/reserved2`);
  }

  /**
   * @method firmParameters_reserved3V1
   * @description Corresponds to `GET /methods/FirmParameters/reserved3`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_reserved3V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/reserved3`);
  }

  /**
   * @method firmParameters_reserved4V1
   * @description Corresponds to `GET /methods/FirmParameters/reserved4`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_reserved4V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/reserved4`);
  }

  /**
   * @method firmParameters_buffer0V1
   * @description Corresponds to `GET /methods/FirmParameters/buffer0`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_buffer0V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/buffer0`);
  }

  /**
   * @method firmParameters_buffer1V1
   * @description Corresponds to `GET /methods/FirmParameters/buffer1`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_buffer1V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/buffer1`);
  }

  /**
   * @method firmParameters_printAccFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/printAccFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_printAccFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/printAccFiche`);
  }

  /**
   * @method firmParameters_printUpperAccV1
   * @description Corresponds to `GET /methods/FirmParameters/printUpperAcc`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_printUpperAccV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/printUpperAcc`);
  }

  /**
   * @method firmParameters_sortTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/sortType`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sortTypeV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sortType`);
  }

  /**
   * @method firmParameters_currUpdateV1
   * @description Corresponds to `GET /methods/FirmParameters/currUpdate`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_currUpdateV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/currUpdate`);
  }

  /**
   * @method firmParameters_repCurrContV1
   * @description Corresponds to `GET /methods/FirmParameters/repCurrCont`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_repCurrContV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/repCurrCont`);
  }

  /**
   * @method firmParameters_centerControlV1
   * @description Corresponds to `GET /methods/FirmParameters/centerControl`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_centerControlV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/centerControl`);
  }

  /**
   * @method firmParameters_amntControlV1
   * @description Corresponds to `GET /methods/FirmParameters/amntControl`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_amntControlV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/amntControl`);
  }

  /**
   * @method firmParameters_fichesToCenCtrl0V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToCenCtrl0`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToCenCtrl0V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToCenCtrl0`);
  }

  /**
   * @method firmParameters_fichesToCenCtrl1V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToCenCtrl1`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToCenCtrl1V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToCenCtrl1`);
  }

  /**
   * @method firmParameters_fichesToCenCtrl2V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToCenCtrl2`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToCenCtrl2V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToCenCtrl2`);
  }

  /**
   * @method firmParameters_fichesToCenCtrl3V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToCenCtrl3`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToCenCtrl3V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToCenCtrl3`);
  }

  /**
   * @method firmParameters_fichesToCenCtrl4V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToCenCtrl4`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToCenCtrl4V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToCenCtrl4`);
  }

  /**
   * @method firmParameters_fichesToCenCtrl5V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToCenCtrl5`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToCenCtrl5V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToCenCtrl5`);
  }

  /**
   * @method firmParameters_fichesToCenCtrl6V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToCenCtrl6`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToCenCtrl6V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToCenCtrl6`);
  }

  /**
   * @method firmParameters_fichesToCenCtrl7V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToCenCtrl7`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToCenCtrl7V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToCenCtrl7`);
  }

  /**
   * @method firmParameters_fichesToCenCtrl8V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToCenCtrl8`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToCenCtrl8V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToCenCtrl8`);
  }

  /**
   * @method firmParameters_fichesToCenCtrl9V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToCenCtrl9`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToCenCtrl9V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToCenCtrl9`);
  }

  /**
   * @method firmParameters_fichesToCenCtrl10V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToCenCtrl10`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToCenCtrl10V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToCenCtrl10`);
  }

  /**
   * @method firmParameters_accControlV1
   * @description Corresponds to `GET /methods/FirmParameters/accControl`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_accControlV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/accControl`);
  }

  /**
   * @method firmParameters_fichesToAccCtrl0V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToAccCtrl0`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToAccCtrl0V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToAccCtrl0`);
  }

  /**
   * @method firmParameters_fichesToAccCtrl1V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToAccCtrl1`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToAccCtrl1V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToAccCtrl1`);
  }

  /**
   * @method firmParameters_fichesToAccCtrl2V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToAccCtrl2`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToAccCtrl2V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToAccCtrl2`);
  }

  /**
   * @method firmParameters_fichesToAccCtrl3V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToAccCtrl3`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToAccCtrl3V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToAccCtrl3`);
  }

  /**
   * @method firmParameters_fichesToAccCtrl4V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToAccCtrl4`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToAccCtrl4V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToAccCtrl4`);
  }

  /**
   * @method firmParameters_fichesToAccCtrl5V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToAccCtrl5`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToAccCtrl5V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToAccCtrl5`);
  }

  /**
   * @method firmParameters_fichesToAccCtrl6V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToAccCtrl6`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToAccCtrl6V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToAccCtrl6`);
  }

  /**
   * @method firmParameters_fichesToAccCtrl7V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToAccCtrl7`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToAccCtrl7V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToAccCtrl7`);
  }

  /**
   * @method firmParameters_fichesToAccCtrl8V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToAccCtrl8`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToAccCtrl8V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToAccCtrl8`);
  }

  /**
   * @method firmParameters_fichesToAccCtrl9V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToAccCtrl9`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToAccCtrl9V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToAccCtrl9`);
  }

  /**
   * @method firmParameters_fichesToAccCtrl10V1
   * @description Corresponds to `GET /methods/FirmParameters/fichesToAccCtrl10`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_fichesToAccCtrl10V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/fichesToAccCtrl10`);
  }

  /**
   * @method firmParameters_accRepCurrCtrlV1
   * @description Corresponds to `GET /methods/FirmParameters/accRepCurrCtrl`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_accRepCurrCtrlV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/accRepCurrCtrl`);
  }

  /**
   * @method firmParameters_upperAccPrintingV1
   * @description Corresponds to `GET /methods/FirmParameters/upperAccPrinting`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_upperAccPrintingV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/upperAccPrinting`);
  }

  /**
   * @method firmParameters_doubleWayControlV1
   * @description Corresponds to `GET /methods/FirmParameters/doubleWayControl`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_doubleWayControlV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/doubleWayControl`);
  }

  /**
   * @method firmParameters_debitCreditCtrlV1
   * @description Corresponds to `GET /methods/FirmParameters/debitCreditCtrl`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_debitCreditCtrlV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/debitCreditCtrl`);
  }

  /**
   * @method firmParameters_crossCodeCtrlV1
   * @description Corresponds to `GET /methods/FirmParameters/crossCodeCtrl`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_crossCodeCtrlV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/crossCodeCtrl`);
  }

  /**
   * @method firmParameters_crossAmntMatchV1
   * @description Corresponds to `GET /methods/FirmParameters/crossAmntMatch`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_crossAmntMatchV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/crossAmntMatch`);
  }

  /**
   * @method firmParameters_gLBufferV1
   * @description Corresponds to `GET /methods/FirmParameters/gLBuffer`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_gLBufferV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/gLBuffer`);
  }

  /**
   * @method firmParameters_hideCredTransV1
   * @description Corresponds to `GET /methods/FirmParameters/hideCredTrans`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_hideCredTransV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/hideCredTrans`);
  }

  /**
   * @method firmParameters_persEntegV1
   * @description Corresponds to `GET /methods/FirmParameters/persEnteg`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_persEntegV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/persEnteg`);
  }

  /**
   * @method firmParameters_deCodeNotFndV1
   * @description Corresponds to `GET /methods/FirmParameters/deCodeNotFnd`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_deCodeNotFndV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/deCodeNotFnd`);
  }

  /**
   * @method firmParameters_mergeFicheLines0V1
   * @description Corresponds to `GET /methods/FirmParameters/mergeFicheLines0`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_mergeFicheLines0V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/mergeFicheLines0`);
  }

  /**
   * @method firmParameters_mergeFicheLines1V1
   * @description Corresponds to `GET /methods/FirmParameters/mergeFicheLines1`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_mergeFicheLines1V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/mergeFicheLines1`);
  }

  /**
   * @method firmParameters_printRollV1
   * @description Corresponds to `GET /methods/FirmParameters/printRoll`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_printRollV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/printRoll`);
  }

  /**
   * @method firmParameters_printBnFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/printBnFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_printBnFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/printBnFiche`);
  }

  /**
   * @method firmParameters_printCashLnV1
   * @description Corresponds to `GET /methods/FirmParameters/printCashLn`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_printCashLnV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/printCashLn`);
  }

  /**
   * @method firmParameters_piasOnDiscV1
   * @description Corresponds to `GET /methods/FirmParameters/piasOnDisc`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_piasOnDiscV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/piasOnDisc`);
  }

  /**
   * @method firmParameters_distExpensesV1
   * @description Corresponds to `GET /methods/FirmParameters/distExpenses`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_distExpensesV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/distExpenses`);
  }

  /**
   * @method firmParameters_riskControl0V1
   * @description Corresponds to `GET /methods/FirmParameters/riskControl0`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_riskControl0V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/riskControl0`);
  }

  /**
   * @method firmParameters_riskControl1V1
   * @description Corresponds to `GET /methods/FirmParameters/riskControl1`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_riskControl1V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/riskControl1`);
  }

  /**
   * @method firmParameters_riskControl2V1
   * @description Corresponds to `GET /methods/FirmParameters/riskControl2`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_riskControl2V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/riskControl2`);
  }

  /**
   * @method firmParameters_riskControl3V1
   * @description Corresponds to `GET /methods/FirmParameters/riskControl3`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_riskControl3V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/riskControl3`);
  }

  /**
   * @method firmParameters_riskControl4V1
   * @description Corresponds to `GET /methods/FirmParameters/riskControl4`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_riskControl4V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/riskControl4`);
  }

  /**
   * @method firmParameters_riskControl5V1
   * @description Corresponds to `GET /methods/FirmParameters/riskControl5`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_riskControl5V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/riskControl5`);
  }

  /**
   * @method firmParameters_riskControl6V1
   * @description Corresponds to `GET /methods/FirmParameters/riskControl6`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_riskControl6V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/riskControl6`);
  }

  /**
   * @method firmParameters_riskControl7V1
   * @description Corresponds to `GET /methods/FirmParameters/riskControl7`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_riskControl7V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/riskControl7`);
  }

  /**
   * @method firmParameters_riskControl8V1
   * @description Corresponds to `GET /methods/FirmParameters/riskControl8`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_riskControl8V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/riskControl8`);
  }

  /**
   * @method firmParameters_riskControl9V1
   * @description Corresponds to `GET /methods/FirmParameters/riskControl9`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_riskControl9V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/riskControl9`);
  }

  /**
   * @method firmParameters_riskControl10V1
   * @description Corresponds to `GET /methods/FirmParameters/riskControl10`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_riskControl10V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/riskControl10`);
  }

  /**
   * @method firmParameters_riskTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/riskType`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_riskTypeV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/riskType`);
  }

  /**
   * @method firmParameters_riskOverV1
   * @description Corresponds to `GET /methods/FirmParameters/riskOver`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_riskOverV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/riskOver`);
  }

  /**
   * @method firmParameters_protestedNotesV1
   * @description Corresponds to `GET /methods/FirmParameters/protestedNotes`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_protestedNotesV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/protestedNotes`);
  }

  /**
   * @method firmParameters_noteStampPerV1
   * @description Corresponds to `GET /methods/FirmParameters/noteStampPer`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_noteStampPerV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/noteStampPer`);
  }

  /**
   * @method firmParameters_reeskontIntV1
   * @description Corresponds to `GET /methods/FirmParameters/reeskontInt`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_reeskontIntV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/reeskontInt`);
  }

  /**
   * @method firmParameters_endorsTracV1
   * @description Corresponds to `GET /methods/FirmParameters/endorsTrac`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_endorsTracV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/endorsTrac`);
  }

  /**
   * @method firmParameters_mergeCashLnsV1
   * @description Corresponds to `GET /methods/FirmParameters/mergeCashLns`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_mergeCashLnsV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/mergeCashLns`);
  }

  /**
   * @method firmParameters_cashWrkDaysCtrlV1
   * @description Corresponds to `GET /methods/FirmParameters/cashWrkDaysCtrl`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_cashWrkDaysCtrlV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/cashWrkDaysCtrl`);
  }

  /**
   * @method firmParameters_VATRealKurusV1
   * @description Corresponds to `GET /methods/FirmParameters/VATRealKurus`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_VATRealKurusV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/VATRealKurus`);
  }

  /**
   * @method firmParameters_VATDefaultV1
   * @description Corresponds to `GET /methods/FirmParameters/VATDefault`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_VATDefaultV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/VATDefault`);
  }

  /**
   * @method firmParameters_VATExpenseV1
   * @description Corresponds to `GET /methods/FirmParameters/VATExpense`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_VATExpenseV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/VATExpense`);
  }

  /**
   * @method firmParameters_rollOnePayLineV1
   * @description Corresponds to `GET /methods/FirmParameters/rollOnePayLine`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_rollOnePayLineV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/rollOnePayLine`);
  }

  /**
   * @method firmParameters_finUpdRepCurrV1
   * @description Corresponds to `GET /methods/FirmParameters/finUpdRepCurr`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_finUpdRepCurrV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/finUpdRepCurr`);
  }

  /**
   * @method firmParameters_debtClose0V1
   * @description Corresponds to `GET /methods/FirmParameters/debtClose0`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_debtClose0V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/debtClose0`);
  }

  /**
   * @method firmParameters_debtClose1V1
   * @description Corresponds to `GET /methods/FirmParameters/debtClose1`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_debtClose1V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/debtClose1`);
  }

  /**
   * @method firmParameters_debtClose2V1
   * @description Corresponds to `GET /methods/FirmParameters/debtClose2`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_debtClose2V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/debtClose2`);
  }

  /**
   * @method firmParameters_debtClose3V1
   * @description Corresponds to `GET /methods/FirmParameters/debtClose3`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_debtClose3V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/debtClose3`);
  }

  /**
   * @method firmParameters_debtClose4V1
   * @description Corresponds to `GET /methods/FirmParameters/debtClose4`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_debtClose4V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/debtClose4`);
  }

  /**
   * @method firmParameters_ordRiskOverV1
   * @description Corresponds to `GET /methods/FirmParameters/ordRiskOver`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_ordRiskOverV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/ordRiskOver`);
  }

  /**
   * @method firmParameters_despRiskOverV1
   * @description Corresponds to `GET /methods/FirmParameters/despRiskOver`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_despRiskOverV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/despRiskOver`);
  }

  /**
   * @method firmParameters_clLanguageV1
   * @description Corresponds to `GET /methods/FirmParameters/clLanguage`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_clLanguageV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/clLanguage`);
  }

  /**
   * @method firmParameters_chPPConfirmV1
   * @description Corresponds to `GET /methods/FirmParameters/chPPConfirm`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_chPPConfirmV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/chPPConfirm`);
  }

  /**
   * @method firmParameters_finBuffer0V1
   * @description Corresponds to `GET /methods/FirmParameters/finBuffer0`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_finBuffer0V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/finBuffer0`);
  }

  /**
   * @method firmParameters_finBuffer1V1
   * @description Corresponds to `GET /methods/FirmParameters/finBuffer1`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_finBuffer1V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/finBuffer1`);
  }

  /**
   * @method firmParameters_finBuffer2V1
   * @description Corresponds to `GET /methods/FirmParameters/finBuffer2`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_finBuffer2V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/finBuffer2`);
  }

  /**
   * @method firmParameters_clBaseFormV1
   * @description Corresponds to `GET /methods/FirmParameters/clBaseForm`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_clBaseFormV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/clBaseForm`);
  }

  /**
   * @method firmParameters_cashCodeV1
   * @description Corresponds to `GET /methods/FirmParameters/cashCode`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_cashCodeV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/cashCode`);
  }

  /**
   * @method firmParameters_sSortOrderV1
   * @description Corresponds to `GET /methods/FirmParameters/sSortOrder`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sSortOrderV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sSortOrder`);
  }

  /**
   * @method firmParameters_sSortDespV1
   * @description Corresponds to `GET /methods/FirmParameters/sSortDesp`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sSortDespV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sSortDesp`);
  }

  /**
   * @method firmParameters_sSortInvV1
   * @description Corresponds to `GET /methods/FirmParameters/sSortInv`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sSortInvV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sSortInv`);
  }

  /**
   * @method firmParameters_sInvPrintTypV1
   * @description Corresponds to `GET /methods/FirmParameters/sInvPrintTyp`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sInvPrintTypV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sInvPrintTyp`);
  }

  /**
   * @method firmParameters_sAttachTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/sAttachType`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sAttachTypeV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sAttachType`);
  }

  /**
   * @method firmParameters_sCheckOrdInvV1
   * @description Corresponds to `GET /methods/FirmParameters/sCheckOrdInv`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sCheckOrdInvV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sCheckOrdInv`);
  }

  /**
   * @method firmParameters_sUpdateCurrV1
   * @description Corresponds to `GET /methods/FirmParameters/sUpdateCurr`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sUpdateCurrV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sUpdateCurr`);
  }

  /**
   * @method firmParameters_sDiscountsV1
   * @description Corresponds to `GET /methods/FirmParameters/sDiscounts`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sDiscountsV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sDiscounts`);
  }

  /**
   * @method firmParameters_sExpensesV1
   * @description Corresponds to `GET /methods/FirmParameters/sExpenses`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sExpensesV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sExpenses`);
  }

  /**
   * @method firmParameters_sPromDiscsV1
   * @description Corresponds to `GET /methods/FirmParameters/sPromDiscs`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sPromDiscsV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sPromDiscs`);
  }

  /**
   * @method firmParameters_sUpdRepCurrV1
   * @description Corresponds to `GET /methods/FirmParameters/sUpdRepCurr`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sUpdRepCurrV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sUpdRepCurr`);
  }

  /**
   * @method firmParameters_sOnePayLineV1
   * @description Corresponds to `GET /methods/FirmParameters/sOnePayLine`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sOnePayLineV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sOnePayLine`);
  }

  /**
   * @method firmParameters_sRetCostTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/sRetCostType`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sRetCostTypeV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sRetCostType`);
  }

  /**
   * @method firmParameters_sPrintCmpLineV1
   * @description Corresponds to `GET /methods/FirmParameters/sPrintCmpLine`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sPrintCmpLineV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sPrintCmpLine`);
  }

  /**
   * @method firmParameters_sPrintClsLineV1
   * @description Corresponds to `GET /methods/FirmParameters/sPrintClsLine`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sPrintClsLineV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sPrintClsLine`);
  }

  /**
   * @method firmParameters_sDefStatusV1
   * @description Corresponds to `GET /methods/FirmParameters/sDefStatus`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sDefStatusV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sDefStatus`);
  }

  /**
   * @method firmParameters_salManControl0V1
   * @description Corresponds to `GET /methods/FirmParameters/salManControl0`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_salManControl0V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/salManControl0`);
  }

  /**
   * @method firmParameters_salManControl1V1
   * @description Corresponds to `GET /methods/FirmParameters/salManControl1`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_salManControl1V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/salManControl1`);
  }

  /**
   * @method firmParameters_salManControl2V1
   * @description Corresponds to `GET /methods/FirmParameters/salManControl2`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_salManControl2V1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/salManControl2`);
  }

  /**
   * @method firmParameters_sPrcTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/sPrcType`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_sPrcTypeV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/sPrcType`);
  }

  /**
   * @method firmParameters_sPrcVATV1
   * @description Corresponds to `GET /methods/FirmParameters/sPrcVAT`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sPrcVATV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sPrcVAT`);
  }

  /**
   * @method firmParameters_sSrvPrcVATV1
   * @description Corresponds to `GET /methods/FirmParameters/sSrvPrcVAT`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sSrvPrcVATV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sSrvPrcVAT`);
  }

  /**
   * @method firmParameters_sClConfirmV1
   * @description Corresponds to `GET /methods/FirmParameters/sClConfirm`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sClConfirmV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sClConfirm`);
  }

  /**
   * @method firmParameters_sOrdDateConV1
   * @description Corresponds to `GET /methods/FirmParameters/sOrdDateCon`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sOrdDateConV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sOrdDateCon`);
  }

  /**
   * @method firmParameters_sLeadTimeChkV1
   * @description Corresponds to `GET /methods/FirmParameters/sLeadTimeChk`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sLeadTimeChkV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sLeadTimeChk`);
  }

  /**
   * @method firmParameters_piasters0V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters0`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters0V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters0`);
  }

  /**
   * @method firmParameters_piasters1V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters1`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters1V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters1`);
  }

  /**
   * @method firmParameters_piasters2V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters2`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters2V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters2`);
  }

  /**
   * @method firmParameters_piasters3V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters3`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters3V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters3`);
  }

  /**
   * @method firmParameters_piasters4V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters4`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters4V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters4`);
  }

  /**
   * @method firmParameters_piasters5V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters5`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters5V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters5`);
  }

  /**
   * @method firmParameters_piasters6V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters6`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters6V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters6`);
  }

  /**
   * @method firmParameters_piasters7V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters7`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters7V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters7`);
  }

  /**
   * @method firmParameters_piasters8V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters8`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters8V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters8`);
  }

  /**
   * @method firmParameters_piasters9V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters9`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters9V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters9`);
  }

  /**
   * @method firmParameters_piasters10V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters10`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters10V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters10`);
  }

  /**
   * @method firmParameters_piasters11V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters11`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters11V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters11`);
  }

  /**
   * @method firmParameters_piasters12V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters12`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters12V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters12`);
  }

  /**
   * @method firmParameters_piasters13V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters13`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters13V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters13`);
  }

  /**
   * @method firmParameters_piasters14V1
   * @description Corresponds to `GET /methods/FirmParameters/piasters14`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_piasters14V1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/piasters14`);
  }

  /**
   * @method firmParameters_printClSlipV1
   * @description Corresponds to `GET /methods/FirmParameters/printClSlip`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_printClSlipV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/printClSlip`);
  }

  /**
   * @method firmParameters_printClNotesV1
   * @description Corresponds to `GET /methods/FirmParameters/printClNotes`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_printClNotesV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/printClNotes`);
  }

  /**
   * @method firmParameters_qcBuffer2V1
   * @description Corresponds to `GET /methods/FirmParameters/qcBuffer2`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_qcBuffer2V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/qcBuffer2`);
  }

  /**
   * @method firmParameters_qcBuffer3V1
   * @description Corresponds to `GET /methods/FirmParameters/qcBuffer3`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_qcBuffer3V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/qcBuffer3`);
  }

  /**
   * @method firmParameters_qcBuffer4V1
   * @description Corresponds to `GET /methods/FirmParameters/qcBuffer4`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_qcBuffer4V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/qcBuffer4`);
  }

  /**
   * @method firmParameters_autoLotOutMtdV1
   * @description Corresponds to `GET /methods/FirmParameters/autoLotOutMtd`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_autoLotOutMtdV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/autoLotOutMtd`);
  }

  /**
   * @method firmParameters_lotPartyV1
   * @description Corresponds to `GET /methods/FirmParameters/lotParty`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_lotPartyV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/lotParty`);
  }

  /**
   * @method firmParameters_pPrintDespV1
   * @description Corresponds to `GET /methods/FirmParameters/pPrintDesp`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pPrintDespV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pPrintDesp`);
  }

  /**
   * @method firmParameters_pPrintOrdV1
   * @description Corresponds to `GET /methods/FirmParameters/pPrintOrd`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pPrintOrdV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pPrintOrd`);
  }

  /**
   * @method firmParameters_pPrintInvV1
   * @description Corresponds to `GET /methods/FirmParameters/pPrintInv`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pPrintInvV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pPrintInv`);
  }

  /**
   * @method firmParameters_pMergeOrderV1
   * @description Corresponds to `GET /methods/FirmParameters/pMergeOrder`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pMergeOrderV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pMergeOrder`);
  }

  /**
   * @method firmParameters_pMergeDespV1
   * @description Corresponds to `GET /methods/FirmParameters/pMergeDesp`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pMergeDespV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pMergeDesp`);
  }

  /**
   * @method firmParameters_pMergeInvV1
   * @description Corresponds to `GET /methods/FirmParameters/pMergeInv`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pMergeInvV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pMergeInv`);
  }

  /**
   * @method firmParameters_pSortOrderV1
   * @description Corresponds to `GET /methods/FirmParameters/pSortOrder`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_pSortOrderV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/pSortOrder`);
  }

  /**
   * @method firmParameters_pSortDespV1
   * @description Corresponds to `GET /methods/FirmParameters/pSortDesp`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_pSortDespV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/pSortDesp`);
  }

  /**
   * @method firmParameters_pSortInvV1
   * @description Corresponds to `GET /methods/FirmParameters/pSortInv`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_pSortInvV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/pSortInv`);
  }

  /**
   * @method firmParameters_pInvPrintTypV1
   * @description Corresponds to `GET /methods/FirmParameters/pInvPrintTyp`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_pInvPrintTypV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/pInvPrintTyp`);
  }

  /**
   * @method firmParameters_pAttachTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/pAttachType`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_pAttachTypeV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/pAttachType`);
  }

  /**
   * @method firmParameters_pCheckOrdInvV1
   * @description Corresponds to `GET /methods/FirmParameters/pCheckOrdInv`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pCheckOrdInvV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pCheckOrdInv`);
  }

  /**
   * @method firmParameters_pUpdateCurrV1
   * @description Corresponds to `GET /methods/FirmParameters/pUpdateCurr`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pUpdateCurrV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pUpdateCurr`);
  }

  /**
   * @method firmParameters_pDiscountsV1
   * @description Corresponds to `GET /methods/FirmParameters/pDiscounts`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pDiscountsV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pDiscounts`);
  }

  /**
   * @method firmParameters_pExpensesV1
   * @description Corresponds to `GET /methods/FirmParameters/pExpenses`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pExpensesV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pExpenses`);
  }

  /**
   * @method firmParameters_pPromDiscsV1
   * @description Corresponds to `GET /methods/FirmParameters/pPromDiscs`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pPromDiscsV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pPromDiscs`);
  }

  /**
   * @method firmParameters_pUpdRepCurrV1
   * @description Corresponds to `GET /methods/FirmParameters/pUpdRepCurr`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pUpdRepCurrV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pUpdRepCurr`);
  }

  /**
   * @method firmParameters_pOnePayLineV1
   * @description Corresponds to `GET /methods/FirmParameters/pOnePayLine`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pOnePayLineV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pOnePayLine`);
  }

  /**
   * @method firmParameters_pRetCostTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/pRetCostType`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_pRetCostTypeV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/pRetCostType`);
  }

  /**
   * @method firmParameters_pPrintCmpLineV1
   * @description Corresponds to `GET /methods/FirmParameters/pPrintCmpLine`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pPrintCmpLineV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pPrintCmpLine`);
  }

  /**
   * @method firmParameters_pPrintClsLineV1
   * @description Corresponds to `GET /methods/FirmParameters/pPrintClsLine`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pPrintClsLineV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pPrintClsLine`);
  }

  /**
   * @method firmParameters_pDefStatusV1
   * @description Corresponds to `GET /methods/FirmParameters/pDefStatus`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_pDefStatusV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/pDefStatus`);
  }

  /**
   * @method firmParameters_pPrcTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/pPrcType`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_pPrcTypeV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/pPrcType`);
  }

  /**
   * @method firmParameters_pPrcVATV1
   * @description Corresponds to `GET /methods/FirmParameters/pPrcVAT`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pPrcVATV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pPrcVAT`);
  }

  /**
   * @method firmParameters_pSrvPrcVATV1
   * @description Corresponds to `GET /methods/FirmParameters/pSrvPrcVAT`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pSrvPrcVATV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pSrvPrcVAT`);
  }

  /**
   * @method firmParameters_pClConfirmV1
   * @description Corresponds to `GET /methods/FirmParameters/pClConfirm`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_pClConfirmV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/pClConfirm`);
  }

  /**
   * @method firmParameters_pOrdDateConV1
   * @description Corresponds to `GET /methods/FirmParameters/pOrdDateCon`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_pOrdDateConV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/pOrdDateCon`);
  }

  /**
   * @method firmParameters_pLeadTimeChkV1
   * @description Corresponds to `GET /methods/FirmParameters/pLeadTimeChk`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_pLeadTimeChkV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/pLeadTimeChk`);
  }

  /**
   * @method firmParameters_sOrdPromDlvV1
   * @description Corresponds to `GET /methods/FirmParameters/sOrdPromDlv`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sOrdPromDlvV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sOrdPromDlv`);
  }

  /**
   * @method firmParameters_sCheckOrdLinkV1
   * @description Corresponds to `GET /methods/FirmParameters/sCheckOrdLink`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sCheckOrdLinkV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sCheckOrdLink`);
  }

  /**
   * @method firmParameters_sDefReserveV1
   * @description Corresponds to `GET /methods/FirmParameters/sDefReserve`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sDefReserveV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sDefReserve`);
  }

  /**
   * @method firmParameters_checkSalManV1
   * @description Corresponds to `GET /methods/FirmParameters/checkSalMan`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_checkSalManV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/checkSalMan`);
  }

  /**
   * @method firmParameters_sPrintDespV1
   * @description Corresponds to `GET /methods/FirmParameters/sPrintDesp`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sPrintDespV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sPrintDesp`);
  }

  /**
   * @method firmParameters_sPrintOrdV1
   * @description Corresponds to `GET /methods/FirmParameters/sPrintOrd`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sPrintOrdV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sPrintOrd`);
  }

  /**
   * @method firmParameters_sPrintInvV1
   * @description Corresponds to `GET /methods/FirmParameters/sPrintInv`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sPrintInvV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sPrintInv`);
  }

  /**
   * @method firmParameters_sMergeOrderV1
   * @description Corresponds to `GET /methods/FirmParameters/sMergeOrder`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sMergeOrderV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sMergeOrder`);
  }

  /**
   * @method firmParameters_sMergeDespV1
   * @description Corresponds to `GET /methods/FirmParameters/sMergeDesp`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sMergeDespV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sMergeDesp`);
  }

  /**
   * @method firmParameters_sMergeInvV1
   * @description Corresponds to `GET /methods/FirmParameters/sMergeInv`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_sMergeInvV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/sMergeInv`);
  }

  /**
   * @method firmParameters_maxLevelCtrlV1
   * @description Corresponds to `GET /methods/FirmParameters/maxLevelCtrl`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_maxLevelCtrlV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/maxLevelCtrl`);
  }

  /**
   * @method firmParameters_stUpdRepCurrV1
   * @description Corresponds to `GET /methods/FirmParameters/stUpdRepCurr`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_stUpdRepCurrV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/stUpdRepCurr`);
  }

  /**
   * @method firmParameters_brInvCheckV1
   * @description Corresponds to `GET /methods/FirmParameters/brInvCheck`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_brInvCheckV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/brInvCheck`);
  }

  /**
   * @method firmParameters_safeLevelCtrlV1
   * @description Corresponds to `GET /methods/FirmParameters/safeLevelCtrl`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_safeLevelCtrlV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/safeLevelCtrl`);
  }

  /**
   * @method firmParameters_ABCCodeV1
   * @description Corresponds to `GET /methods/FirmParameters/ABCCode`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_ABCCodeV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/ABCCode`);
  }

  /**
   * @method firmParameters_purchItemV1
   * @description Corresponds to `GET /methods/FirmParameters/purchItem`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_purchItemV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/purchItem`);
  }

  /**
   * @method firmParameters_salesItemV1
   * @description Corresponds to `GET /methods/FirmParameters/salesItem`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_salesItemV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/salesItem`);
  }

  /**
   * @method firmParameters_mtrlItemV1
   * @description Corresponds to `GET /methods/FirmParameters/mtrlItem`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_mtrlItemV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/mtrlItem`);
  }

  /**
   * @method firmParameters_toolV1
   * @description Corresponds to `GET /methods/FirmParameters/tool`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_toolV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/tool`);
  }

  /**
   * @method firmParameters_autoIncSLV1
   * @description Corresponds to `GET /methods/FirmParameters/autoIncSL`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_autoIncSLV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/autoIncSL`);
  }

  /**
   * @method firmParameters_divLotSizeV1
   * @description Corresponds to `GET /methods/FirmParameters/divLotSize`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_divLotSizeV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/divLotSize`);
  }

  /**
   * @method firmParameters_shelfLifeV1
   * @description Corresponds to `GET /methods/FirmParameters/shelfLife`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_shelfLifeV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/shelfLife`);
  }

  /**
   * @method firmParameters_lotEntryV1
   * @description Corresponds to `GET /methods/FirmParameters/lotEntry`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_lotEntryV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/lotEntry`);
  }

  /**
   * @method firmParameters_locTrackingV1
   * @description Corresponds to `GET /methods/FirmParameters/locTracking`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_locTrackingV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/locTracking`);
  }

  /**
   * @method firmParameters_clientQcV1
   * @description Corresponds to `GET /methods/FirmParameters/clientQc`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_clientQcV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/clientQc`);
  }

  /**
   * @method firmParameters_autoMtrIssueV1
   * @description Corresponds to `GET /methods/FirmParameters/autoMtrIssue`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_autoMtrIssueV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/autoMtrIssue`);
  }

  /**
   * @method firmParameters_chkSLLocExpDateV1
   * @description Corresponds to `GET /methods/FirmParameters/chkSLLocExpDate`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_chkSLLocExpDateV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/chkSLLocExpDate`);
  }

  /**
   * @method firmParameters_purchUnitV1
   * @description Corresponds to `GET /methods/FirmParameters/purchUnit`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_purchUnitV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/purchUnit`);
  }

  /**
   * @method firmParameters_salesUnitV1
   * @description Corresponds to `GET /methods/FirmParameters/salesUnit`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_salesUnitV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/salesUnit`);
  }

  /**
   * @method firmParameters_mtrlUnitV1
   * @description Corresponds to `GET /methods/FirmParameters/mtrlUnit`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_mtrlUnitV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/mtrlUnit`);
  }

  /**
   * @method firmParameters_divUnitV1
   * @description Corresponds to `GET /methods/FirmParameters/divUnit`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_divUnitV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/divUnit`);
  }

  /**
   * @method firmParameters_useTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/useType`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_useTypeV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/useType`);
  }

  /**
   * @method firmParameters_deprTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/deprType`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_deprTypeV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/deprType`);
  }

  /**
   * @method firmParameters_revalFlagV1
   * @description Corresponds to `GET /methods/FirmParameters/revalFlag`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_revalFlagV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/revalFlag`);
  }

  /**
   * @method firmParameters_revDeprFlagV1
   * @description Corresponds to `GET /methods/FirmParameters/revDeprFlag`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_revDeprFlagV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/revDeprFlag`);
  }

  /**
   * @method firmParameters_partDepV1
   * @description Corresponds to `GET /methods/FirmParameters/partDep`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_partDepV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/partDep`);
  }

  /**
   * @method firmParameters_condReadActV1
   * @description Corresponds to `GET /methods/FirmParameters/condReadAct`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_condReadActV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/condReadAct`);
  }

  /**
   * @method firmParameters_iPrintClsLineV1
   * @description Corresponds to `GET /methods/FirmParameters/iPrintClsLine`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_iPrintClsLineV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/iPrintClsLine`);
  }

  /**
   * @method firmParameters_ordCampApplyV1
   * @description Corresponds to `GET /methods/FirmParameters/ordCampApply`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_ordCampApplyV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/ordCampApply`);
  }

  /**
   * @method firmParameters_despCampApplyV1
   * @description Corresponds to `GET /methods/FirmParameters/despCampApply`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_despCampApplyV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/despCampApply`);
  }

  /**
   * @method firmParameters_invCampApplyV1
   * @description Corresponds to `GET /methods/FirmParameters/invCampApply`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_invCampApplyV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/invCampApply`);
  }

  /**
   * @method firmParameters_IOCtrlV1
   * @description Corresponds to `GET /methods/FirmParameters/IOCtrl`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_IOCtrlV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/IOCtrl`);
  }

  /**
   * @method firmParameters_qcPriorityV1
   * @description Corresponds to `GET /methods/FirmParameters/qcPriority`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_qcPriorityV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/qcPriority`);
  }

  /**
   * @method firmParameters_frequencyV1
   * @description Corresponds to `GET /methods/FirmParameters/frequency`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_frequencyV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/frequency`);
  }

  /**
   * @method firmParameters_sampleSizeV1
   * @description Corresponds to `GET /methods/FirmParameters/sampleSize`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmParameters_sampleSizeV1(): Promise<number> {
    return this.request('get', `/methods/FirmParameters/sampleSize`);
  }

  /**
   * @method firmParameters_purchQCharV1
   * @description Corresponds to `GET /methods/FirmParameters/purchQChar`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_purchQCharV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/purchQChar`);
  }

  /**
   * @method firmParameters_salesQCharV1
   * @description Corresponds to `GET /methods/FirmParameters/salesQChar`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_salesQCharV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/salesQChar`);
  }

  /**
   * @method firmParameters_mtrlQCharV1
   * @description Corresponds to `GET /methods/FirmParameters/mtrlQChar`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_mtrlQCharV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/mtrlQChar`);
  }

  /**
   * @method firmParameters_nonConformV1
   * @description Corresponds to `GET /methods/FirmParameters/nonConform`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_nonConformV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/nonConform`);
  }

  /**
   * @method firmParameters_itemConformV1
   * @description Corresponds to `GET /methods/FirmParameters/itemConform`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_itemConformV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/itemConform`);
  }

  /**
   * @method firmParameters_qcBuffer0V1
   * @description Corresponds to `GET /methods/FirmParameters/qcBuffer0`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_qcBuffer0V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/qcBuffer0`);
  }

  /**
   * @method firmParameters_qcBuffer1V1
   * @description Corresponds to `GET /methods/FirmParameters/qcBuffer1`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_qcBuffer1V1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/qcBuffer1`);
  }

  /**
   * @method activePeriodV1
   * @description Corresponds to `GET /methods/ActivePeriod`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async activePeriodV1(): Promise<number> {
    return this.request('get', `/methods/ActivePeriod`);
  }

  /**
   * @method connectedV1
   * @description Corresponds to `GET /methods/Connected`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async connectedV1(): Promise<boolean> {
    return this.request('get', `/methods/Connected`);
  }

  /**
   * @method capiV1
   * @description Corresponds to `GET /methods/CAPI`
   * @returns {Promise<MtCapi>} A promise resolving to the response.
   */
  async capiV1(): Promise<MtCapi> {
    return this.request('get', `/methods/CAPI`);
  }

  /**
   * @method capiFirmsV1
   * @description Corresponds to `GET /methods/CAPI/Firms`
   * @returns {Promise<MtFirms>} A promise resolving to the response.
   */
  async capiFirmsV1(): Promise<MtFirms> {
    return this.request('get', `/methods/CAPI/Firms`);
  }

  /**
   * @method capiFirmsCountV1
   * @description Corresponds to `GET /methods/CAPI/Firms/Count`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async capiFirmsCountV1(): Promise<number> {
    return this.request('get', `/methods/CAPI/Firms/Count`);
  }

  /**
   * @method capiFirmsParentV1
   * @description Corresponds to `GET /methods/CAPI/Firms/Parent`
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async capiFirmsParentV1(): Promise<Record<string, unknown>> {
    return this.request('get', `/methods/CAPI/Firms/Parent`);
  }

  /**
   * @method capiUsersV1
   * @description Corresponds to `GET /methods/CAPI/Users`
   * @returns {Promise<MtUsers>} A promise resolving to the response.
   */
  async capiUsersV1(): Promise<MtUsers> {
    return this.request('get', `/methods/CAPI/Users`);
  }

  /**
   * @method capiUsersCountV1
   * @description Corresponds to `GET /methods/CAPI/Users/Count`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async capiUsersCountV1(): Promise<number> {
    return this.request('get', `/methods/CAPI/Users/Count`);
  }

  /**
   * @method capiUsersParentV1
   * @description Corresponds to `GET /methods/CAPI/Users/Parent`
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async capiUsersParentV1(): Promise<Record<string, unknown>> {
    return this.request('get', `/methods/CAPI/Users/Parent`);
  }

  /**
   * @method capiParentV1
   * @description Corresponds to `GET /methods/CAPI/Parent`
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async capiParentV1(): Promise<Record<string, unknown>> {
    return this.request('get', `/methods/CAPI/Parent`);
  }

  /**
   * @method capiTerminalsV1
   * @description Corresponds to `GET /methods/CAPI/Terminals`
   * @returns {Promise<MtTerminals>} A promise resolving to the response.
   */
  async capiTerminalsV1(): Promise<MtTerminals> {
    return this.request('get', `/methods/CAPI/Terminals`);
  }

  /**
   * @method capiTerminalsCountV1
   * @description Corresponds to `GET /methods/CAPI/Terminals/Count`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async capiTerminalsCountV1(): Promise<number> {
    return this.request('get', `/methods/CAPI/Terminals/Count`);
  }

  /**
   * @method capiTerminalsParentV1
   * @description Corresponds to `GET /methods/CAPI/Terminals/Parent`
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async capiTerminalsParentV1(): Promise<Record<string, unknown>> {
    return this.request('get', `/methods/CAPI/Terminals/Parent`);
  }

  /**
   * @method capiCurrenciesV1
   * @description Corresponds to `GET /methods/CAPI/Currencies`
   * @returns {Promise<MtCurrencies>} A promise resolving to the response.
   */
  async capiCurrenciesV1(): Promise<MtCurrencies> {
    return this.request('get', `/methods/CAPI/Currencies`);
  }

  /**
   * @method capiCurrenciesCountV1
   * @description Corresponds to `GET /methods/CAPI/Currencies/Count`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async capiCurrenciesCountV1(): Promise<number> {
    return this.request('get', `/methods/CAPI/Currencies/Count`);
  }

  /**
   * @method capiCurrenciesParentV1
   * @description Corresponds to `GET /methods/CAPI/Currencies/Parent`
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async capiCurrenciesParentV1(): Promise<Record<string, unknown>> {
    return this.request('get', `/methods/CAPI/Currencies/Parent`);
  }

  /**
   * @method capiRolesV1
   * @description Corresponds to `GET /methods/CAPI/Roles`
   * @returns {Promise<MtRoles>} A promise resolving to the response.
   */
  async capiRolesV1(): Promise<MtRoles> {
    return this.request('get', `/methods/CAPI/Roles`);
  }

  /**
   * @method capiRolesCountV1
   * @description Corresponds to `GET /methods/CAPI/Roles/Count`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async capiRolesCountV1(): Promise<number> {
    return this.request('get', `/methods/CAPI/Roles/Count`);
  }

  /**
   * @method capiRolesParentV1
   * @description Corresponds to `GET /methods/CAPI/Roles/Parent`
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async capiRolesParentV1(): Promise<Record<string, unknown>> {
    return this.request('get', `/methods/CAPI/Roles/Parent`);
  }

  /**
   * @method firmParametersV1
   * @description Corresponds to `GET /methods/FirmParameters`
   * @returns {Promise<MtFirmparameters>} A promise resolving to the response.
   */
  async firmParametersV1(): Promise<MtFirmparameters> {
    return this.request('get', `/methods/FirmParameters`);
  }

  /**
   * @method firmParameters_localCurrV1
   * @description Corresponds to `GET /methods/FirmParameters/localCurr`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_localCurrV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/localCurr`);
  }

  /**
   * @method firmParameters_localFracV1
   * @description Corresponds to `GET /methods/FirmParameters/localFrac`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_localFracV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/localFrac`);
  }

  /**
   * @method firmParameters_reportCurrV1
   * @description Corresponds to `GET /methods/FirmParameters/reportCurr`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_reportCurrV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/reportCurr`);
  }

  /**
   * @method firmParameters_reportFracV1
   * @description Corresponds to `GET /methods/FirmParameters/reportFrac`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_reportFracV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/reportFrac`);
  }

  /**
   * @method firmParameters_costTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/costType`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_costTypeV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/costType`);
  }

  /**
   * @method firmParameters_minLevelCtrlV1
   * @description Corresponds to `GET /methods/FirmParameters/minLevelCtrl`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_minLevelCtrlV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/minLevelCtrl`);
  }

  /**
   * @method firmParameters_printStFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/printStFiche`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_printStFicheV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/printStFiche`);
  }

  /**
   * @method firmParameters_mergeStFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/mergeStFiche`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async firmParameters_mergeStFicheV1(): Promise<boolean> {
    return this.request('get', `/methods/FirmParameters/mergeStFiche`);
  }

  /**
   * @method firmParameters_sortStFicheV1
   * @description Corresponds to `GET /methods/FirmParameters/sortStFiche`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_sortStFicheV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/sortStFiche`);
  }

  /**
   * @method firmParameters_negLevelCtrlV1
   * @description Corresponds to `GET /methods/FirmParameters/negLevelCtrl`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_negLevelCtrlV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/negLevelCtrl`);
  }

  /**
   * @method firmParameters_trackTypeV1
   * @description Corresponds to `GET /methods/FirmParameters/trackType`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async firmParameters_trackTypeV1(): Promise<string> {
    return this.request('get', `/methods/FirmParameters/trackType`);
  }

  /**
   * @method itemVirementV1
   * @description Corresponds to `POST /methods/ItemVirement`
   * @param {unknown} data - The request body.
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async itemVirementV1(data: unknown): Promise<boolean> {
    return this.request('post', `/methods/ItemVirement`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /methods/ExportBase64EncodedImage/{_doctype}/{_lref}/{_imageIndex}`
   * @param {number} doctype - _doctype
   * @param {number} lref - _lref
   * @param {string} imageIndex - _imageIndex
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    doctype: number,
    lref: number,
    imageIndex: string
  ): Promise<string> {
    return this.request(
      'get',
      `/methods/ExportBase64EncodedImage/${doctype}/${lref}/${imageIndex}`
    );
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `POST /methods/ImportBase64EncodedImage/{_doctype}/{_lref}/{_imageType}/{_imageIndex}`
   * @param {number} doctype - _doctype
   * @param {number} lref - _lref
   * @param {number} imageType - _imageType
   * @param {string} imageIndex - _imageIndex
   * @param {unknown} data - The request body.
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1(
    doctype: number,
    lref: number,
    imageType: number,
    imageIndex: string,
    data: unknown
  ): Promise<boolean> {
    return this.request(
      'post',
      `/methods/ImportBase64EncodedImage/${doctype}/${lref}/${imageType}/${imageIndex}`,
      data
    );
  }

  /**
   * @method companyLoginV1
   * @description Corresponds to `GET /methods/CompanyLogin/{_FirmNr}/{_PeriodNr}`
   * @param {number} FirmNr - _FirmNr
   * @param {number} PeriodNr - _PeriodNr
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async companyLoginV1(FirmNr: number, PeriodNr: number): Promise<boolean> {
    return this.request('get', `/methods/CompanyLogin/${FirmNr}/${PeriodNr}`);
  }

  /**
   * @method companyLogoutV1
   * @description Corresponds to `GET /methods/CompanyLogout`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async companyLogoutV1(): Promise<boolean> {
    return this.request('get', `/methods/CompanyLogout`);
  }

  /**
   * @method versionV1
   * @description Corresponds to `GET /methods/Version`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async versionV1(): Promise<string> {
    return this.request('get', `/methods/Version`);
  }

  /**
   * @method getLastErrorV1
   * @description Corresponds to `GET /methods/GetLastError`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async getLastErrorV1(): Promise<number> {
    return this.request('get', `/methods/GetLastError`);
  }

  /**
   * @method newDataObjectListV1
   * @description Corresponds to `GET /methods/NewDataObjectList`
   * @returns {Promise<MtDatas>} A promise resolving to the response.
   */
  async newDataObjectListV1(): Promise<MtDatas> {
    return this.request('get', `/methods/NewDataObjectList`);
  }

  /**
   * @method getLastErrorStringV1
   * @description Corresponds to `GET /methods/GetLastErrorString`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async getLastErrorStringV1(): Promise<string> {
    return this.request('get', `/methods/GetLastErrorString`);
  }

  /**
   * @method getApprovalDateV1
   * @description Corresponds to `GET /methods/GetApprovalDate/{_ModuleNr}/{_brNr}`
   * @param {number} ModuleNr - _ModuleNr
   * @param {number} brNr - _brNr
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async getApprovalDateV1(ModuleNr: number, brNr: number): Promise<string> {
    return this.request('get', `/methods/GetApprovalDate/${ModuleNr}/${brNr}`);
  }

  /**
   * @method setApprovalDateV1
   * @description Corresponds to `GET /methods/SetApprovalDate/{_ModuleNr}/{_NewDate}/{_brNr}`
   * @param {number} ModuleNr - _ModuleNr
   * @param {string} NewDate - _NewDate
   * @param {number} brNr - _brNr
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async setApprovalDateV1(ModuleNr: number, NewDate: string, brNr: number): Promise<boolean> {
    return this.request('get', `/methods/SetApprovalDate/${ModuleNr}/${NewDate}/${brNr}`);
  }

  /**
   * @method getDBConnInfoV1
   * @description Corresponds to `GET /methods/GetDBConnInfo`
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getDBConnInfoV1(): Promise<KeyValueParameter[]> {
    return this.request('get', `/methods/GetDBConnInfo`);
  }

  /**
   * @method getCurrIDV1
   * @description Corresponds to `GET /methods/GetCurrID/{_CurrName}`
   * @param {string} CurrName - _CurrName
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getCurrIDV1(CurrName: string): Promise<KeyValueParameter[]> {
    return this.request('get', `/methods/GetCurrID/${CurrName}`);
  }

  /**
   * @method applyAvaragePaymentV1
   * @description Corresponds to `GET /methods/ApplyAvaragePayment/{_modNr}/{_lref}`
   * @param {number} modNr - _modNr
   * @param {number} lref - _lref
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async applyAvaragePaymentV1(modNr: number, lref: number): Promise<boolean> {
    return this.request('get', `/methods/ApplyAvaragePayment/${modNr}/${lref}`);
  }

  /**
   * @method getCurrNameV1
   * @description Corresponds to `GET /methods/GetCurrName/{_CurrID}`
   * @param {number} CurrID - _CurrID
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getCurrNameV1(CurrID: number): Promise<KeyValueParameter[]> {
    return this.request('get', `/methods/GetCurrName/${CurrID}`);
  }

  /**
   * @method getAuthCodeV1
   * @description Corresponds to `GET /methods/GetAuthCode/{_UserNr}/{_FirmNr}/{_AuthType}/{_AuthCode}`
   * @param {number} UserNr - _UserNr
   * @param {number} FirmNr - _FirmNr
   * @param {number} AuthType - _AuthType
   * @param {string} AuthCode - _AuthCode
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async getAuthCodeV1(
    UserNr: number,
    FirmNr: number,
    AuthType: number,
    AuthCode: string
  ): Promise<boolean> {
    return this.request('get', `/methods/GetAuthCode/${UserNr}/${FirmNr}/${AuthType}/${AuthCode}`);
  }

  /**
   * @method setDistOrderStatusV1
   * @description Corresponds to `GET /methods/SetDistOrderStatus/{_lref}/{_stat}/{_procDate}`
   * @param {number} lref - _lref
   * @param {number} stat - _stat
   * @param {string} procDate - _procDate
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async setDistOrderStatusV1(lref: number, stat: number, procDate: string): Promise<boolean> {
    return this.request('get', `/methods/SetDistOrderStatus/${lref}/${stat}/${procDate}`);
  }

  /**
   * @method dispatchBillingV1
   * @description Corresponds to `GET /methods/DispatchBilling/{_dRef}/{_iFicheNo}/{_iDate}/{_iDoCode}/{_iSpeCode}/{_iCyphCode}/{_genExp1}/{_genExp2}/{_genExp3}/{_genExp4}/{_chkRight}/{_invRef}/{_opTrans}/{_refs}/{_eInv}/{_vatExceptReason}/{_vatExceptCode}`
   * @param {number} dRef - _dRef
   * @param {string} iFicheNo - _iFicheNo
   * @param {number} iDate - _iDate
   * @param {string} iDoCode - _iDoCode
   * @param {string} iSpeCode - _iSpeCode
   * @param {string} iCyphCode - _iCyphCode
   * @param {string} genExp1 - _genExp1
   * @param {string} genExp2 - _genExp2
   * @param {string} genExp3 - _genExp3
   * @param {string} genExp4 - _genExp4
   * @param {boolean} chkRight - _chkRight
   * @param {number} invRef - _invRef
   * @param {boolean} opTrans - _opTrans
   * @param {string} refs - _refs
   * @param {boolean} eInv - _eInv
   * @param {string} vatExceptReason - _vatExceptReason
   * @param {string} vatExceptCode - _vatExceptCode
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async dispatchBillingV1(
    dRef: number,
    iFicheNo: string,
    iDate: number,
    iDoCode: string,
    iSpeCode: string,
    iCyphCode: string,
    genExp1: string,
    genExp2: string,
    genExp3: string,
    genExp4: string,
    chkRight: boolean,
    invRef: number,
    opTrans: boolean,
    refs: string,
    eInv: boolean,
    vatExceptReason: string,
    vatExceptCode: string
  ): Promise<boolean> {
    return this.request(
      'get',
      `/methods/DispatchBilling/${dRef}/${iFicheNo}/${iDate}/${iDoCode}/${iSpeCode}/${iCyphCode}/${genExp1}/${genExp2}/${genExp3}/${genExp4}/${chkRight}/${invRef}/${opTrans}/${refs}/${eInv}/${vatExceptReason}/${vatExceptCode}`
    );
  }

  /**
   * @method debtCloseV1
   * @description Corresponds to `GET /methods/DebtClose/{_pTrFRecRef}/{_pTrSRecRef}/{_DebtAmount}/{_DebtRate}/{_PayRate}`
   * @param {number} pTrFRecRef - _pTrFRecRef
   * @param {number} pTrSRecRef - _pTrSRecRef
   * @param {number} DebtAmount - _DebtAmount
   * @param {number} DebtRate - _DebtRate
   * @param {number} PayRate - _PayRate
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async debtCloseV1(
    pTrFRecRef: number,
    pTrSRecRef: number,
    DebtAmount: number,
    DebtRate: number,
    PayRate: number
  ): Promise<boolean> {
    return this.request(
      'get',
      `/methods/DebtClose/${pTrFRecRef}/${pTrSRecRef}/${DebtAmount}/${DebtRate}/${PayRate}`
    );
  }

  /**
   * @method lgsetupV1
   * @description Corresponds to `GET /methods/LGSetup/{_dataPath}/{_TaskNumber}/{_Language}/{_goldPath}`
   * @param {string} dataPath - _dataPath
   * @param {number} TaskNumber - _TaskNumber
   * @param {number} Language - _Language
   * @param {string} goldPath - _goldPath
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async lgsetupV1(
    dataPath: string,
    TaskNumber: number,
    Language: number,
    goldPath: string
  ): Promise<boolean> {
    return this.request(
      'get',
      `/methods/LGSetup/${dataPath}/${TaskNumber}/${Language}/${goldPath}`
    );
  }

  /**
   * @method getStockPriceV1
   * @description Corresponds to `GET /methods/GetStockPrice/{_iItemRef}/{_iVrntRef}/{_iDate}/{_iTime}/{_iCostGrpNr}/{_iPrType}/{_dAmount}/{_uomRef}/{_branch}/{_clCode}/{_fTrdGrp}`
   * @param {number} iItemRef - _iItemRef
   * @param {number} iVrntRef - _iVrntRef
   * @param {number} iDate - _iDate
   * @param {number} iTime - _iTime
   * @param {number} iCostGrpNr - _iCostGrpNr
   * @param {number} iPrType - _iPrType
   * @param {number} dAmount - _dAmount
   * @param {number} uomRef - _uomRef
   * @param {number} branch - _branch
   * @param {string} clCode - _clCode
   * @param {string} fTrdGrp - _fTrdGrp
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getStockPriceV1(
    iItemRef: number,
    iVrntRef: number,
    iDate: number,
    iTime: number,
    iCostGrpNr: number,
    iPrType: number,
    dAmount: number,
    uomRef: number,
    branch: number,
    clCode: string,
    fTrdGrp: string
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'get',
      `/methods/GetStockPrice/${iItemRef}/${iVrntRef}/${iDate}/${iTime}/${iCostGrpNr}/${iPrType}/${dAmount}/${uomRef}/${branch}/${clCode}/${fTrdGrp}`
    );
  }

  /**
   * @method doIntegrationV1
   * @description Corresponds to `GET /methods/DoIntegration/{_modNr}/{_invRef}/{_MergeLine}/{_EmptyAccLine}`
   * @param {number} modNr - _modNr
   * @param {number} invRef - _invRef
   * @param {boolean} MergeLine - _MergeLine
   * @param {number} EmptyAccLine - _EmptyAccLine
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async doIntegrationV1(
    modNr: number,
    invRef: number,
    MergeLine: boolean,
    EmptyAccLine: number
  ): Promise<boolean> {
    return this.request(
      'get',
      `/methods/DoIntegration/${modNr}/${invRef}/${MergeLine}/${EmptyAccLine}`
    );
  }

  /**
   * @method debtCloseFIFOV1
   * @description Corresponds to `GET /methods/DebtCloseFIFO/{_payTrRef}/{_begDate}/{_endDate}`
   * @param {number} payTrRef - _payTrRef
   * @param {string} begDate - _begDate
   * @param {string} endDate - _endDate
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async debtCloseFIFOV1(payTrRef: number, begDate: string, endDate: string): Promise<boolean> {
    return this.request('get', `/methods/DebtCloseFIFO/${payTrRef}/${begDate}/${endDate}`);
  }

  /**
   * @method logoDBV1
   * @description Corresponds to `GET /methods/LogoDB/{_fName}`
   * @param {string} fName - _fName
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async logoDBV1(fName: string): Promise<boolean> {
    return this.request('get', `/methods/LogoDB/${fName}`);
  }

  /**
   * @method rollBackDebtCloseV1
   * @description Corresponds to `GET /methods/RollBackDebtClose/{_transRef}`
   * @param {number} transRef - _transRef
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async rollBackDebtCloseV1(transRef: number): Promise<boolean> {
    return this.request('get', `/methods/RollBackDebtClose/${transRef}`);
  }

  /**
   * @method getFirmDBConnInfoV1
   * @description Corresponds to `GET /methods/GetFirmDBConnInfo/{_FirmNr}`
   * @param {number} FirmNr - _FirmNr
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getFirmDBConnInfoV1(FirmNr: number): Promise<KeyValueParameter[]> {
    return this.request('get', `/methods/GetFirmDBConnInfo/${FirmNr}`);
  }

  /**
   * @method getAppPathV1
   * @description Corresponds to `GET /methods/GetAppPath`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async getAppPathV1(): Promise<string> {
    return this.request('get', `/methods/GetAppPath`);
  }

  /**
   * @method autoBOMRevisionUpdateV1
   * @description Corresponds to `GET /methods/AutoBOMRevisionUpdate/{_engChgRef}`
   * @param {number} engChgRef - _engChgRef
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async autoBOMRevisionUpdateV1(engChgRef: number): Promise<boolean> {
    return this.request('get', `/methods/AutoBOMRevisionUpdate/${engChgRef}`);
  }

  /**
   * @method forceReLoginV1
   * @description Corresponds to `GET /methods/ForceReLogin/{_grpUser}/{_nr}/{_blocked}/{_msg}`
   * @param {number} grpUser - _grpUser
   * @param {number} nr - _nr
   * @param {boolean} blocked - _blocked
   * @param {string} msg - _msg
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async forceReLoginV1(
    grpUser: number,
    nr: number,
    blocked: boolean,
    msg: string
  ): Promise<boolean> {
    return this.request('get', `/methods/ForceReLogin/${grpUser}/${nr}/${blocked}/${msg}`);
  }

  /**
   * @method getTableNameV1
   * @description Corresponds to `GET /methods/GetTableName/{_tNr}/{_fNr}/{_pNr}`
   * @param {number} tNr - _tNr
   * @param {number} fNr - _fNr
   * @param {number} pNr - _pNr
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async getTableNameV1(tNr: number, fNr: number, pNr: number): Promise<string> {
    return this.request('get', `/methods/GetTableName/${tNr}/${fNr}/${pNr}`);
  }

  /**
   * @method getCustTableNameV1
   * @description Corresponds to `GET /methods/GetCustTableName/{_tNr}/{_fNr}/{_pNr}`
   * @param {number} tNr - _tNr
   * @param {number} fNr - _fNr
   * @param {number} pNr - _pNr
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async getCustTableNameV1(tNr: number, fNr: number, pNr: number): Promise<string> {
    return this.request('get', `/methods/GetCustTableName/${tNr}/${fNr}/${pNr}`);
  }

  /**
   * @method getValueV1
   * @description Corresponds to `GET /methods/GetValue/{_nr}`
   * @param {number} nr - _nr
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async getValueV1(nr: number): Promise<number> {
    return this.request('get', `/methods/GetValue/${nr}`);
  }

  /**
   * @method sendMailV1
   * @description Corresponds to `GET /methods/SendMail/{_recps}/{_cc}/{_subject}/{_msg}/{_attch}/{_showDlg}`
   * @param {string} recps - _recps
   * @param {string} cc - _cc
   * @param {string} subject - _subject
   * @param {string} msg - _msg
   * @param {string} attch - _attch
   * @param {number} showDlg - _showDlg
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async sendMailV1(
    recps: string,
    cc: string,
    subject: string,
    msg: string,
    attch: string,
    showDlg: number
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'get',
      `/methods/SendMail/${recps}/${cc}/${subject}/${msg}/${attch}/${showDlg}`
    );
  }

  /**
   * @method sendSMSV1
   * @description Corresponds to `GET /methods/SendSMS/{_msg}/{_telNo}`
   * @param {string} msg - _msg
   * @param {string} telNo - _telNo
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async sendSMSV1(msg: string, telNo: string): Promise<KeyValueParameter[]> {
    return this.request('get', `/methods/SendSMS/${msg}/${telNo}`);
  }

  /**
   * @method orderBillingV1
   * @description Corresponds to `GET /methods/OrderBilling/{_ordRef}/{_ficheNo}/{_dateVal}/{_doCode}/{_speCode}/{_cyphCode}/{_genExp1}/{_genExp2}/{_genExp3}/{_genExp4}/{_chkRight}/{_fcType}/{_opTrans}/{_invRef}/{_eInv}/{_vatExceptReason}`
   * @param {number} ordRef - _ordRef
   * @param {string} ficheNo - _ficheNo
   * @param {number} dateVal - _dateVal
   * @param {string} doCode - _doCode
   * @param {string} speCode - _speCode
   * @param {string} cyphCode - _cyphCode
   * @param {string} genExp1 - _genExp1
   * @param {string} genExp2 - _genExp2
   * @param {string} genExp3 - _genExp3
   * @param {string} genExp4 - _genExp4
   * @param {boolean} chkRight - _chkRight
   * @param {number} fcType - _fcType
   * @param {boolean} opTrans - _opTrans
   * @param {number} invRef - _invRef
   * @param {boolean} eInv - _eInv
   * @param {string} vatExceptReason - _vatExceptReason
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async orderBillingV1(
    ordRef: number,
    ficheNo: string,
    dateVal: number,
    doCode: string,
    speCode: string,
    cyphCode: string,
    genExp1: string,
    genExp2: string,
    genExp3: string,
    genExp4: string,
    chkRight: boolean,
    fcType: number,
    opTrans: boolean,
    invRef: number,
    eInv: boolean,
    vatExceptReason: string
  ): Promise<boolean> {
    return this.request(
      'get',
      `/methods/OrderBilling/${ordRef}/${ficheNo}/${dateVal}/${doCode}/${speCode}/${cyphCode}/${genExp1}/${genExp2}/${genExp3}/${genExp4}/${chkRight}/${fcType}/${opTrans}/${invRef}/${eInv}/${vatExceptReason}`
    );
  }

  /**
   * @method loggedInV1
   * @description Corresponds to `GET /methods/LoggedIn`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async loggedInV1(): Promise<boolean> {
    return this.request('get', `/methods/LoggedIn`);
  }

  /**
   * @method companyLoggedInV1
   * @description Corresponds to `GET /methods/CompanyLoggedIn`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async companyLoggedInV1(): Promise<boolean> {
    return this.request('get', `/methods/CompanyLoggedIn`);
  }

  /**
   * @method currentFirmV1
   * @description Corresponds to `GET /methods/CurrentFirm`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async currentFirmV1(): Promise<number> {
    return this.request('get', `/methods/CurrentFirm`);
  }

  /**
   * @method changeFicheApproveInfoV1
   * @description Corresponds to `GET /methods/ChangeFicheApproveInfo/{_DataObject}/{_ficheRef}/{_ficheApprove}`
   * @param {number} DataObject - _DataObject
   * @param {number} ficheRef - _ficheRef
   * @param {boolean} ficheApprove - _ficheApprove
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async changeFicheApproveInfoV1(
    DataObject: number,
    ficheRef: number,
    ficheApprove: boolean
  ): Promise<boolean> {
    return this.request(
      'get',
      `/methods/ChangeFicheApproveInfo/${DataObject}/${ficheRef}/${ficheApprove}`
    );
  }

  /**
   * @method setAppLanguageV1
   * @description Corresponds to `GET /methods/SetAppLanguage/{_Value}`
   * @param {number} Value - _Value
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async setAppLanguageV1(Value: number): Promise<boolean> {
    return this.request('get', `/methods/SetAppLanguage/${Value}`);
  }

  /**
   * @method checkLogoDBV1
   * @description Corresponds to `GET /methods/CheckLogoDB/{_fName}`
   * @param {string} fName - _fName
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async checkLogoDBV1(fName: string): Promise<boolean> {
    return this.request('get', `/methods/CheckLogoDB/${fName}`);
  }

  /**
   * @method approveEDocumentV1
   * @description Corresponds to `GET /methods/ApproveEDocument/{_refs}/{_acceptMessage}/{_notes}`
   * @param {string} refs - _refs
   * @param {string} acceptMessage - _acceptMessage
   * @param {string} notes - _notes
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async approveEDocumentV1(refs: string, acceptMessage: string, notes: string): Promise<string> {
    return this.request('get', `/methods/ApproveEDocument/${refs}/${acceptMessage}/${notes}`);
  }

  /**
   * @method rejectEDocumentV1
   * @description Corresponds to `GET /methods/RejectEDocument/{_refs}/{_rejectMessage}/{_notes}`
   * @param {string} refs - _refs
   * @param {string} rejectMessage - _rejectMessage
   * @param {string} notes - _notes
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async rejectEDocumentV1(refs: string, rejectMessage: string, notes: string): Promise<string> {
    return this.request('get', `/methods/RejectEDocument/${refs}/${rejectMessage}/${notes}`);
  }

  /**
   * @method addDocumentV1
   * @description Corresponds to `GET /methods/AddDocument/{_folderRef}/{_document}/{_lref}/{_doctype}`
   * @param {number} folderRef - _folderRef
   * @param {string} document - _document
   * @param {number} lref - _lref
   * @param {number} doctype - _doctype
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async addDocumentV1(
    folderRef: number,
    document: string,
    lref: number,
    doctype: number
  ): Promise<boolean> {
    return this.request('get', `/methods/AddDocument/${folderRef}/${document}/${lref}/${doctype}`);
  }

  /**
   * @method addInstalmentTransactionV1
   * @description Corresponds to `GET /methods/AddInstalmentTransaction/{_fType}/{_sourceRef}/{_instRef}/{_lackType}/{_newInstDate}/{_payType}/{_payDate}/{_total}/{_trCurr}/{_trRate}/{_opStat}/{_bankPayDate}/{_calcType}/{_posComm}/{_pointComm}/{_dueDiffComm}/{_lnAccCode}/{_rePayPlanCode}`
   * @param {number} fType - _fType
   * @param {number} sourceRef - _sourceRef
   * @param {number} instRef - _instRef
   * @param {number} lackType - _lackType
   * @param {number} newInstDate - _newInstDate
   * @param {number} payType - _payType
   * @param {number} payDate - _payDate
   * @param {number} total - _total
   * @param {number} trCurr - _trCurr
   * @param {number} trRate - _trRate
   * @param {number} opStat - _opStat
   * @param {number} bankPayDate - _bankPayDate
   * @param {number} calcType - _calcType
   * @param {number} posComm - _posComm
   * @param {number} pointComm - _pointComm
   * @param {number} dueDiffComm - _dueDiffComm
   * @param {string} lnAccCode - _lnAccCode
   * @param {string} rePayPlanCode - _rePayPlanCode
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async addInstalmentTransactionV1(
    fType: number,
    sourceRef: number,
    instRef: number,
    lackType: number,
    newInstDate: number,
    payType: number,
    payDate: number,
    total: number,
    trCurr: number,
    trRate: number,
    opStat: number,
    bankPayDate: number,
    calcType: number,
    posComm: number,
    pointComm: number,
    dueDiffComm: number,
    lnAccCode: string,
    rePayPlanCode: string
  ): Promise<boolean> {
    return this.request(
      'get',
      `/methods/AddInstalmentTransaction/${fType}/${sourceRef}/${instRef}/${lackType}/${newInstDate}/${payType}/${payDate}/${total}/${trCurr}/${trRate}/${opStat}/${bankPayDate}/${calcType}/${posComm}/${pointComm}/${dueDiffComm}/${lnAccCode}/${rePayPlanCode}`
    );
  }

  /**
   * @method getViewNameV1
   * @description Corresponds to `GET /methods/GetViewName/{_ID}/{_fNr}/{_pNr}`
   * @param {number} ID - _ID
   * @param {number} fNr - _fNr
   * @param {number} pNr - _pNr
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async getViewNameV1(ID: number, fNr: number, pNr: number): Promise<string> {
    return this.request('get', `/methods/GetViewName/${ID}/${fNr}/${pNr}`);
  }

  /**
   * @method getDBConnInfoExV1
   * @description Corresponds to `GET /methods/GetDBConnInfoEx/{_key}`
   * @param {string} key - _key
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getDBConnInfoExV1(key: string): Promise<KeyValueParameter[]> {
    return this.request('get', `/methods/GetDBConnInfoEx/${key}`);
  }

  /**
   * @method printDocV1
   * @description Corresponds to `GET /methods/PrintDoc/{_doctype}/{_docRef}/{_termCode}/{_designTitle}/{_printerCode}/{_printCnt}`
   * @param {number} doctype - _doctype
   * @param {number} docRef - _docRef
   * @param {string} termCode - _termCode
   * @param {string} designTitle - _designTitle
   * @param {string} printerCode - _printerCode
   * @param {number} printCnt - _printCnt
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async printDocV1(
    doctype: number,
    docRef: number,
    termCode: string,
    designTitle: string,
    printerCode: string,
    printCnt: number
  ): Promise<boolean> {
    return this.request(
      'get',
      `/methods/PrintDoc/${doctype}/${docRef}/${termCode}/${designTitle}/${printerCode}/${printCnt}`
    );
  }

  /**
   * @method getOrderFicheApproveControlInfoV1
   * @description Corresponds to `GET /methods/GetOrderFicheApproveControlInfo/{_ordFicheRef}/{_readFromClCard}/{_cRisk}/{_cDueDate}/{_cAging}/{_ageDay}/{_payProc}/{_rTotal}/{_rLimit}/{_mxLateDay}/{_avLateDay}/{_mxLateTotal}/{_avLateTotal}/{_avAgingDay}/{_AgingTotal}/{_currType}/{_includeFiche}`
   * @param {number} ordFicheRef - _ordFicheRef
   * @param {boolean} readFromClCard - _readFromClCard
   * @param {string} cRisk - _cRisk
   * @param {string} cDueDate - _cDueDate
   * @param {string} cAging - _cAging
   * @param {number} ageDay - _ageDay
   * @param {number} payProc - _payProc
   * @param {number} rTotal - _rTotal
   * @param {number} rLimit - _rLimit
   * @param {number} mxLateDay - _mxLateDay
   * @param {number} avLateDay - _avLateDay
   * @param {number} mxLateTotal - _mxLateTotal
   * @param {number} avLateTotal - _avLateTotal
   * @param {number} avAgingDay - _avAgingDay
   * @param {number} AgingTotal - _AgingTotal
   * @param {number} currType - _currType
   * @param {boolean} includeFiche - _includeFiche
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async getOrderFicheApproveControlInfoV1(
    ordFicheRef: number,
    readFromClCard: boolean,
    cRisk: string,
    cDueDate: string,
    cAging: string,
    ageDay: number,
    payProc: number,
    rTotal: number,
    rLimit: number,
    mxLateDay: number,
    avLateDay: number,
    mxLateTotal: number,
    avLateTotal: number,
    avAgingDay: number,
    AgingTotal: number,
    currType: number,
    includeFiche: boolean
  ): Promise<boolean> {
    return this.request(
      'get',
      `/methods/GetOrderFicheApproveControlInfo/${ordFicheRef}/${readFromClCard}/${cRisk}/${cDueDate}/${cAging}/${ageDay}/${payProc}/${rTotal}/${rLimit}/${mxLateDay}/${avLateDay}/${mxLateTotal}/${avLateTotal}/${avAgingDay}/${AgingTotal}/${currType}/${includeFiche}`
    );
  }

  /**
   * @method orderShippingV1
   * @description Corresponds to `GET /methods/OrderShipping/{_ordRef}/{_ficheNo}/{_dateVal}/{_doCode}/{_speCode}/{_cyphCode}/{_genExp1}/{_genExp2}/{_genExp3}/{_genExp4}/{_chkRight}/{_fcType}/{_opTrans}/{_dispref}`
   * @param {number} ordRef - _ordRef
   * @param {string} ficheNo - _ficheNo
   * @param {number} dateVal - _dateVal
   * @param {string} doCode - _doCode
   * @param {string} speCode - _speCode
   * @param {string} cyphCode - _cyphCode
   * @param {string} genExp1 - _genExp1
   * @param {string} genExp2 - _genExp2
   * @param {string} genExp3 - _genExp3
   * @param {string} genExp4 - _genExp4
   * @param {boolean} chkRight - _chkRight
   * @param {number} fcType - _fcType
   * @param {boolean} opTrans - _opTrans
   * @param {number} dispref - _dispref
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async orderShippingV1(
    ordRef: number,
    ficheNo: string,
    dateVal: number,
    doCode: string,
    speCode: string,
    cyphCode: string,
    genExp1: string,
    genExp2: string,
    genExp3: string,
    genExp4: string,
    chkRight: boolean,
    fcType: number,
    opTrans: boolean,
    dispref: number
  ): Promise<boolean> {
    return this.request(
      'get',
      `/methods/OrderShipping/${ordRef}/${ficheNo}/${dateVal}/${doCode}/${speCode}/${cyphCode}/${genExp1}/${genExp2}/${genExp3}/${genExp4}/${chkRight}/${fcType}/${opTrans}/${dispref}`
    );
  }

  /**
   * @method materialTransactionTransferV1
   * @description Corresponds to `GET /methods/MaterialTransactionTransfer/{_oldCode}/{_newCode}/{_PeriodNr}`
   * @param {string} oldCode - _oldCode
   * @param {string} newCode - _newCode
   * @param {number} PeriodNr - _PeriodNr
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async materialTransactionTransferV1(
    oldCode: string,
    newCode: string,
    PeriodNr: number
  ): Promise<boolean> {
    return this.request(
      'get',
      `/methods/MaterialTransactionTransfer/${oldCode}/${newCode}/${PeriodNr}`
    );
  }

  /**
   * @method cancelInvoiceV1
   * @description Corresponds to `GET /methods/CancelInvoice/{_invRef}`
   * @param {number} invRef - _invRef
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async cancelInvoiceV1(invRef: number): Promise<boolean> {
    return this.request('get', `/methods/CancelInvoice/${invRef}`);
  }

  /**
   * @method readStringsCrdV1
   * @description Corresponds to `GET /methods/ReadStringsCrd/{_typ}/{_ref}/{_Str}`
   * @param {number} typ - _typ
   * @param {number} ref - _ref
   * @param {string} Str - _Str
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async readStringsCrdV1(typ: number, ref: number, Str: string): Promise<boolean> {
    return this.request('get', `/methods/ReadStringsCrd/${typ}/${ref}/${Str}`);
  }

  /**
   * @method writeStringsCrdV1
   * @description Corresponds to `GET /methods/WriteStringsCrd/{_typ}/{_ref}/{_Str}`
   * @param {number} typ - _typ
   * @param {number} ref - _ref
   * @param {string} Str - _Str
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async writeStringsCrdV1(typ: number, ref: number, Str: string): Promise<boolean> {
    return this.request('get', `/methods/WriteStringsCrd/${typ}/${ref}/${Str}`);
  }

  /**
   * @method deleteStringsCrdV1
   * @description Corresponds to `GET /methods/DeleteStringsCrd/{_typ}/{_ref}`
   * @param {number} typ - _typ
   * @param {number} ref - _ref
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async deleteStringsCrdV1(typ: number, ref: number): Promise<boolean> {
    return this.request('get', `/methods/DeleteStringsCrd/${typ}/${ref}`);
  }

  /**
   * @method downloadDailyExchangesV1
   * @description Corresponds to `GET /methods/DownloadDailyExchanges/{_begDate}/{_endDate}`
   * @param {string} begDate - _begDate
   * @param {string} endDate - _endDate
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async downloadDailyExchangesV1(begDate: string, endDate: string): Promise<boolean> {
    return this.request('get', `/methods/DownloadDailyExchanges/${begDate}/${endDate}`);
  }

  /**
   * @method undoInvoiceV1
   * @description Corresponds to `GET /methods/UndoInvoice/{_invRef}`
   * @param {number} invRef - _invRef
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async undoInvoiceV1(invRef: number): Promise<boolean> {
    return this.request('get', `/methods/UndoInvoice/${invRef}`);
  }

  /**
   * @method loadDefaultAddressesV1
   * @description Corresponds to `GET /methods/LoadDefaultAddresses/{_LanguageCode}`
   * @param {string} LanguageCode - _LanguageCode
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async loadDefaultAddressesV1(LanguageCode: string): Promise<boolean> {
    return this.request('get', `/methods/LoadDefaultAddresses/${LanguageCode}`);
  }

  /**
   * @method loadDefaultBanksV1
   * @description Corresponds to `GET /methods/LoadDefaultBanks/{_LanguageCode}`
   * @param {string} LanguageCode - _LanguageCode
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async loadDefaultBanksV1(LanguageCode: string): Promise<boolean> {
    return this.request('get', `/methods/LoadDefaultBanks/${LanguageCode}`);
  }

  /**
   * @method loadDefaultTaxOfficesV1
   * @description Corresponds to `GET /methods/LoadDefaultTaxOffices/{_LanguageCode}`
   * @param {string} LanguageCode - _LanguageCode
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async loadDefaultTaxOfficesV1(LanguageCode: string): Promise<boolean> {
    return this.request('get', `/methods/LoadDefaultTaxOffices/${LanguageCode}`);
  }

  /**
   * @method loadDefaultCustomsV1
   * @description Corresponds to `GET /methods/LoadDefaultCustoms/{_LanguageCode}`
   * @param {string} LanguageCode - _LanguageCode
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async loadDefaultCustomsV1(LanguageCode: string): Promise<boolean> {
    return this.request('get', `/methods/LoadDefaultCustoms/${LanguageCode}`);
  }

  /**
   * @method loadDefaultFreeZonesV1
   * @description Corresponds to `GET /methods/LoadDefaultFreeZones/{_LanguageCode}`
   * @param {string} LanguageCode - _LanguageCode
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async loadDefaultFreeZonesV1(LanguageCode: string): Promise<boolean> {
    return this.request('get', `/methods/LoadDefaultFreeZones/${LanguageCode}`);
  }

  /**
   * @method runCostingMaintenanceV1
   * @description Corresponds to `GET /methods/RunCostingMaintenance/{_maskId}`
   * @param {number} maskId - _maskId
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async runCostingMaintenanceV1(maskId: number): Promise<boolean> {
    return this.request('get', `/methods/RunCostingMaintenance/${maskId}`);
  }

  /**
   * @method runPriceAssignmentsByCostsV1
   * @description Corresponds to `GET /methods/RunPriceAssignmentsByCosts/{_maskId}`
   * @param {number} maskId - _maskId
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async runPriceAssignmentsByCostsV1(maskId: number): Promise<boolean> {
    return this.request('get', `/methods/RunPriceAssignmentsByCosts/${maskId}`);
  }

  /**
   * @method getStockPriceListV1
   * @description Corresponds to `GET /methods/GetStockPriceList/{_paramJSON}`
   * @param {string} paramJSON - _paramJSON
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async getStockPriceListV1(paramJSON: string): Promise<string> {
    return this.request('get', `/methods/GetStockPriceList/${paramJSON}`);
  }

  /**
   * @method getCfgTextV1
   * @description Corresponds to `GET /methods/GetCfgText/{_nr}`
   * @param {number} nr - _nr
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async getCfgTextV1(nr: number): Promise<string> {
    return this.request('get', `/methods/GetCfgText/${nr}`);
  }

  /**
   * @method cancelARPVoucherV1
   * @description Corresponds to `GET /methods/CancelARPVoucher/{_ficheRef}`
   * @param {number} ficheRef - _ficheRef
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async cancelARPVoucherV1(ficheRef: number): Promise<boolean> {
    return this.request('get', `/methods/CancelARPVoucher/${ficheRef}`);
  }

  /**
   * @method undoARPVoucherV1
   * @description Corresponds to `GET /methods/UndoARPVoucher/{_ficheRef}`
   * @param {number} ficheRef - _ficheRef
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async undoARPVoucherV1(ficheRef: number): Promise<boolean> {
    return this.request('get', `/methods/UndoARPVoucher/${ficheRef}`);
  }

  /**
   * @method arpeinvoicecheckV1
   * @description Corresponds to `GET /methods/ARPEInvoiceCheck/{_arpRef}`
   * @param {number} arpRef - _arpRef
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async arpeinvoicecheckV1(arpRef: number): Promise<boolean> {
    return this.request('get', `/methods/ARPEInvoiceCheck/${arpRef}`);
  }

  /**
   * @method cancelSafeDepositeTransV1
   * @description Corresponds to `GET /methods/CancelSafeDepositeTrans/{_ficheRef}`
   * @param {number} ficheRef - _ficheRef
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async cancelSafeDepositeTransV1(ficheRef: number): Promise<boolean> {
    return this.request('get', `/methods/CancelSafeDepositeTrans/${ficheRef}`);
  }

  /**
   * @method undoSafeDepositeTransV1
   * @description Corresponds to `GET /methods/UndoSafeDepositeTrans/{_ficheRef}`
   * @param {number} ficheRef - _ficheRef
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async undoSafeDepositeTransV1(ficheRef: number): Promise<boolean> {
    return this.request('get', `/methods/UndoSafeDepositeTrans/${ficheRef}`);
  }

  /**
   * @method getLastWarningV1
   * @description Corresponds to `GET /methods/GetLastWarning`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async getLastWarningV1(): Promise<number> {
    return this.request('get', `/methods/GetLastWarning`);
  }

  /**
   * @method getLastWarningStringV1
   * @description Corresponds to `GET /methods/GetLastWarningString`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async getLastWarningStringV1(): Promise<string> {
    return this.request('get', `/methods/GetLastWarningString`);
  }

  /**
   * @method sendRecvEInvoiceDocumentsV1
   * @description Corresponds to `GET /methods/SendRecvEInvoiceDocuments/{_send}/{_recv}/{_refs}/{_refsReceipt}/{_branchNr}`
   * @param {boolean} send - _send
   * @param {boolean} recv - _recv
   * @param {string} refs - _refs
   * @param {string} refsReceipt - _refsReceipt
   * @param {number} branchNr - _branchNr
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async sendRecvEInvoiceDocumentsV1(
    send: boolean,
    recv: boolean,
    refs: string,
    refsReceipt: string,
    branchNr: number
  ): Promise<string> {
    return this.request(
      'get',
      `/methods/SendRecvEInvoiceDocuments/${send}/${recv}/${refs}/${refsReceipt}/${branchNr}`
    );
  }

  /**
   * @method sendEArchiveDocumentsV1
   * @description Corresponds to `GET /methods/SendEArchiveDocuments/{_refs}/{_branchNr}`
   * @param {string} refs - _refs
   * @param {number} branchNr - _branchNr
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async sendEArchiveDocumentsV1(refs: string, branchNr: number): Promise<string> {
    return this.request('get', `/methods/SendEArchiveDocuments/${refs}/${branchNr}`);
  }

  /**
   * @method sendRecvEDispatchDocumentsV1
   * @description Corresponds to `GET /methods/SendRecvEDispatchDocuments/{_send}/{_recv}/{_refsDispatch}/{_refsReceipt}/{_branchNr}`
   * @param {boolean} send - _send
   * @param {boolean} recv - _recv
   * @param {string} refsDispatch - _refsDispatch
   * @param {string} refsReceipt - _refsReceipt
   * @param {number} branchNr - _branchNr
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async sendRecvEDispatchDocumentsV1(
    send: boolean,
    recv: boolean,
    refsDispatch: string,
    refsReceipt: string,
    branchNr: number
  ): Promise<string> {
    return this.request(
      'get',
      `/methods/SendRecvEDispatchDocuments/${send}/${recv}/${refsDispatch}/${refsReceipt}/${branchNr}`
    );
  }

  /**
   * @method sendESEVoucherDocumentsV1
   * @description Corresponds to `GET /methods/SendESEVoucherDocuments/{_refsClf}/{_refsCash}/{_branchNr}`
   * @param {string} refsClf - _refsClf
   * @param {string} refsCash - _refsCash
   * @param {number} branchNr - _branchNr
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async sendESEVoucherDocumentsV1(
    refsClf: string,
    refsCash: string,
    branchNr: number
  ): Promise<string> {
    return this.request(
      'get',
      `/methods/SendESEVoucherDocuments/${refsClf}/${refsCash}/${branchNr}`
    );
  }

  /**
   * @method sendESEPreceiptDocumentsV1
   * @description Corresponds to `GET /methods/SendESEPreceiptDocuments/{_refs}/{_branchNr}`
   * @param {string} refs - _refs
   * @param {number} branchNr - _branchNr
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async sendESEPreceiptDocumentsV1(refs: string, branchNr: number): Promise<string> {
    return this.request('get', `/methods/SendESEPreceiptDocuments/${refs}/${branchNr}`);
  }

  /**
   * @method getEDocumentContentV1
   * @description Corresponds to `GET /methods/GetEDocumentContent/{_doctype}/{_outFormat}/{_GUID}`
   * @param {string} doctype - _doctype
   * @param {string} outFormat - _outFormat
   * @param {string} GUID - _GUID
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async getEDocumentContentV1(doctype: string, outFormat: string, GUID: string): Promise<string> {
    return this.request('get', `/methods/GetEDocumentContent/${doctype}/${outFormat}/${GUID}`);
  }

  /**
   * @method updateEDocumentStatusV1
   * @description Corresponds to `GET /methods/UpdateEDocumentStatus/{_doctype}/{_refs}`
   * @param {string} doctype - _doctype
   * @param {string} refs - _refs
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async updateEDocumentStatusV1(doctype: string, refs: string): Promise<string> {
    return this.request('get', `/methods/UpdateEDocumentStatus/${doctype}/${refs}`);
  }

  /**
   * @method saveEDocumentV1
   * @description Corresponds to `GET /methods/SaveEDocument/{_refs}`
   * @param {string} refs - _refs
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async saveEDocumentV1(refs: string): Promise<string> {
    return this.request('get', `/methods/SaveEDocument/${refs}`);
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Methods` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Methods
   * const columns = await client.methods.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Methods` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Methods
   * await client.methods.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Methods` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Methods
   * await client.methods.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Methods` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Methods
   * const isTracking = await client.methods.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }
}
