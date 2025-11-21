import { MethodsClient } from './client';
import { ApiClientConfig } from '../../types';

describe('MethodsClient', () => {
  let client: MethodsClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new MethodsClient(config);
  });

  describe('Utility Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get database column properties', async () => {
      const mockColumns = [{ ColumnName: 'INTERNAL_REFERENCE', DataType: 'int' }];
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockColumns);

      const result = await client.getDbColumns();

      expect(client['request']).toHaveBeenCalledWith('get', '/methods/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/methods/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/methods/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/methods/checktrack');
      expect(result).toBe(true);
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call authorization_V1_methods_retrievetoken with data', async () => {
      const mockData = { grant_type: 'test', username: 'test' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.authorization_V1_methods_retrievetoken(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/methods/retrievetoken`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call authorization_V1_methods_revoke', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.authorization_V1_methods_revoke();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/revoke`);
      expect(result).toEqual({ success: true });
    });

    it('should call authorization_V1_methods_istokenvalid', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.authorization_V1_methods_istokenvalid();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/istokenvalid`);
      expect(result).toEqual({ success: true });
    });

    it('should call authorization_V1_methods_versions', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.authorization_V1_methods_versions();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/versions`);
      expect(result).toEqual({ success: true });
    });

    it('should call authorization_V1_methods_ping', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.authorization_V1_methods_ping();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ping`);
      expect(result).toEqual({ success: true });
    });

    it('should call period_CreateTablesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.period_CreateTablesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/Firm/1/Period/CreateTables/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call period_CreateTriggersV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.period_CreateTriggersV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/Firm/1/Period/CreateTriggers/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call period_CreateCustomTablesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.period_CreateCustomTablesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/Firm/1/Period/CreateCustomTables/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call period_UpdateCustomTablesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.period_UpdateCustomTablesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/Firm/1/Period/UpdateCustomTables/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call tradeGroupsDeleteV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.tradeGroupsDeleteV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/TradeGroups/Delete/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call tradeGroupsDelete_V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.tradeGroupsDelete_V1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/TradeGroups/Delete_/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call tradeGroupsClear_V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.tradeGroupsClear_V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/TradeGroups/Clear_`);
      expect(result).toEqual({ success: true });
    });

    it('should call tradeGroupsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.tradeGroupsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/TradeGroups`);
      expect(result).toEqual({ success: true });
    });

    it('should call tradeGroups_CountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.tradeGroups_CountV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/TradeGroups/Count`);
      expect(result).toEqual({ success: true });
    });

    it('should call tradeGroups_ParentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.tradeGroups_ParentV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/TradeGroups/Parent`);
      expect(result).toEqual({ success: true });
    });

    it('should call serialNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.serialNoV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/SerialNo`);
      expect(result).toEqual({ success: true });
    });

    it('should call userCountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.userCountV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/UserCount`);
      expect(result).toEqual({ success: true });
    });

    it('should call logPathV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.logPathV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/LogPath`);
      expect(result).toEqual({ success: true });
    });

    it('should call createCAPIV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCAPIV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CreateCAPI`);
      expect(result).toEqual({ success: true });
    });

    it('should call forcedCfgServerNameV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.forcedCfgServerNameV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ForcedCfgServerName`);
      expect(result).toEqual({ success: true });
    });

    it('should call forcedCfgDBNameV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.forcedCfgDBNameV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ForcedCfgDBName`);
      expect(result).toEqual({ success: true });
    });

    it('should call forcedCfgUserNameV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.forcedCfgUserNameV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ForcedCfgUserName`);
      expect(result).toEqual({ success: true });
    });

    it('should call forcedCfgPasswordV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.forcedCfgPasswordV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ForcedCfgPassword`);
      expect(result).toEqual({ success: true });
    });

    it('should call forcedCfgDBOwnerV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.forcedCfgDBOwnerV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ForcedCfgDBOwner`);
      expect(result).toEqual({ success: true });
    });

    it('should call forcedCfgDBTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.forcedCfgDBTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ForcedCfgDBType`);
      expect(result).toEqual({ success: true });
    });

    it('should call checkTableExistsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.checkTableExistsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CheckTableExists`);
      expect(result).toEqual({ success: true });
    });

    it('should call createServicesCardsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createServicesCardsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CreateServicesCards`);
      expect(result).toEqual({ success: true });
    });

    it('should call cancelChangeLogV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.cancelChangeLogV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CancelChangeLog`);
      expect(result).toEqual({ success: true });
    });

    it('should call cancelHistoryV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.cancelHistoryV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CancelHistory`);
      expect(result).toEqual({ success: true });
    });

    it('should call createDynReportsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createDynReportsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CreateDynReports`);
      expect(result).toEqual({ success: true });
    });

    it('should call restInPeaceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.restInPeaceV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/RestInPeace`);
      expect(result).toEqual({ success: true });
    });

    it('should call erpapplicationrunreportV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.erpapplicationrunreportV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/ERPApplication/RunReport/1/1/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call erpapplicationaddtoreportqueueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.erpapplicationaddtoreportqueueV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/ERPApplication/AddToReportQueue/1/1/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call erpapplicationgetfirstreportfromqueueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.erpapplicationgetfirstreportfromqueueV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/ERPApplication/GetFirstReportFromQueue`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call erpapplicationrunreportfromqueueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.erpapplicationrunreportfromqueueV1('test', true);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/ERPApplication/RunReportFromQueue/test/true`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call erpapplicationgetqueuelistV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.erpapplicationgetqueuelistV1('test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/ERPApplication/GetQueueList/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call erpapplicationV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.erpapplicationV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ERPApplication`);
      expect(result).toEqual({ success: true });
    });

    it('should call erpapplicationSilentmodeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.erpapplicationSilentmodeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ERPApplication/SilentMode`);
      expect(result).toEqual({ success: true });
    });

    it('should call currentPeriodV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.currentPeriodV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CurrentPeriod`);
      expect(result).toEqual({ success: true });
    });

    it('should call firm_PostV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        index: 1,
        FirmNr: 1,
        name: 'Test Firm',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firm_PostV1(1, mockData);

      expect(client['request']).toHaveBeenCalledWith('put', `/methods/Firm/1/put`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call firm_PostV1Post with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        index: 1,
        FirmNr: 1,
        name: 'Test Firm',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firm_PostV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/methods/Firm/Post`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call firm_DeleteV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firm_DeleteV1(1);

      expect(client['request']).toHaveBeenCalledWith('delete', `/methods/Firm/Delete/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firm_CreateTablesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firm_CreateTablesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/Firm/CreateTables/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firm_CreateCustomTablesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firm_CreateCustomTablesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/Firm/CreateCustomTables/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firm_UpdateCustomTablesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firm_UpdateCustomTablesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/Firm/UpdateCustomTables/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call user_PostV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        index: 1,
        UserNr: 1,
        name: 'Test User',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.user_PostV1('test', mockData);

      expect(client['request']).toHaveBeenCalledWith('put', `/methods/User/test/put`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call user_PostV1Post with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        index: 1,
        UserNr: 1,
        name: 'Test User',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.user_PostV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/methods/User/Post`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call user_DeleteV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.user_DeleteV1(1);

      expect(client['request']).toHaveBeenCalledWith('delete', `/methods/User/Delete/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call user_SetWindowsUserModeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.user_SetWindowsUserModeV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/User/SetWindowsUserMode/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call period_PostV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        index: 1,
        number: 1,
        BeginDate: '2023-01-01',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.period_PostV1(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith('put', `/methods/Period/1/put/1`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call period_PostV1Post with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        index: 1,
        number: 1,
        BeginDate: '2023-01-01',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.period_PostV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/methods/Period/Post/1`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call period_DeleteV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.period_DeleteV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('delete', `/methods/Firm/1/Period/Delete/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_buffer2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_buffer2V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/buffer2`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_buffer3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_buffer3V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/buffer3`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pGlobLotNumV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pGlobLotNumV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pGlobLotNum`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_reserved8V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_reserved8V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/reserved8`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_diffWHouseUseV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_diffWHouseUseV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/diffWHouseUse`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pcBufferV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pcBufferV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pcBuffer`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_allocTargetTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_allocTargetTypeV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/allocTargetType`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_distOverHeadsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_distOverHeadsV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/distOverHeads`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_stdRepCurrContV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_stdRepCurrContV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/stdRepCurrCont`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_caBufferV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_caBufferV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/caBuffer`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_gpInComeTaxRatTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_gpInComeTaxRatTV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/gpInComeTaxRatT`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_gpInComeTaxRatSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_gpInComeTaxRatSV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/gpInComeTaxRatS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_gpFundShareRatV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_gpFundShareRatV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/gpFundShareRat`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_gpBufferV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_gpBufferV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/gpBuffer`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_accToBeOutOfTrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_accToBeOutOfTrackV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/accToBeOutOfTrack`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_transferFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_transferFicheV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/transferFiche`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_expenWasFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_expenWasFicheV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/expenWasFiche`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_productionFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_productionFicheV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/productionFiche`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_warehouseFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_warehouseFicheV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/warehouseFiche`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defItemInFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defItemInFicheV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defItemInFiche`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defItemOutFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defItemOutFicheV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defItemOutFiche`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_dispPurcFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_dispPurcFicheV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/dispPurcFiche`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_dispSaleFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_dispSaleFicheV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/dispSaleFiche`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_invPurcFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_invPurcFicheV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/invPurcFiche`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_invSaleFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_invSaleFicheV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/invSaleFiche`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_roundDefaultV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_roundDefaultV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/roundDefault`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_countForMPSRunV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_countForMPSRunV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/countForMPSRun`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mpsNoOfDaysV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mpsNoOfDaysV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/mpsNoOfDays`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mpsNoOfWeeksV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mpsNoOfWeeksV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/mpsNoOfWeeks`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mpsNoOfMonthsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mpsNoOfMonthsV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/mpsNoOfMonths`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mpsNoOfFrozDaysV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mpsNoOfFrozDaysV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/mpsNoOfFrozDays`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mpsFrozDaysFlagV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mpsFrozDaysFlagV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/mpsFrozDaysFlag`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mpsDistrWkDaysV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mpsDistrWkDaysV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/mpsDistrWkDays`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mpsDistrMntDaysV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mpsDistrMntDaysV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/mpsDistrMntDays`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_Reserved7V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_Reserved7V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/Reserved7`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_contToolPlnOccWithWSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_contToolPlnOccWithWSV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/contToolPlnOccWithWS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_contEmpPlnOccWithWSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_contEmpPlnOccWithWSV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/contEmpPlnOccWithWS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_contToolActOccWithWSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_contToolActOccWithWSV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/contToolActOccWithWS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_contEmpActOccWithWSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_contEmpActOccWithWSV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/contEmpActOccWithWS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_InvPrintCntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_InvPrintCntV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/InvPrintCnt`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_useGenLotNumV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_useGenLotNumV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/useGenLotNum`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_outCtrlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_outCtrlV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/outCtrl`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mergeFicheLines2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mergeFicheLines2V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/mergeFicheLines2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mergeFicheLines3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mergeFicheLines3V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/mergeFicheLines3`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mergeFicheLines4V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mergeFicheLines4V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/mergeFicheLines4`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defStFNames0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defStFNames0V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/defStFNames0`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defStFNames1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defStFNames1V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/defStFNames1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defStFNames2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defStFNames2V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/defStFNames2`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defStFNames3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defStFNames3V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/defStFNames3`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defStFNames4V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defStFNames4V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/defStFNames4`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defStFNames5V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defStFNames5V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/defStFNames5`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defStFNames6V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defStFNames6V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/defStFNames6`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defStFNames7V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defStFNames7V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/defStFNames7`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defStFNames8V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defStFNames8V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/defStFNames8`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defStFNames9V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defStFNames9V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/defStFNames9`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defPurchFNames0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defPurchFNames0V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defPurchFNames0`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defPurchFNames1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defPurchFNames1V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defPurchFNames1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defPurchFNames2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defPurchFNames2V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defPurchFNames2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defPurchFNames3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defPurchFNames3V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defPurchFNames3`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defPurchFNames4V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defPurchFNames4V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defPurchFNames4`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defSaleFNames0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defSaleFNames0V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defSaleFNames0`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defSaleFNames1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defSaleFNames1V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defSaleFNames1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defSaleFNames2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defSaleFNames2V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defSaleFNames2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defSaleFNames3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defSaleFNames3V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defSaleFNames3`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_defSaleFNames4V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_defSaleFNames4V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/defSaleFNames4`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_stopajPer0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_stopajPer0V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/stopajPer0`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_stopajPer1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_stopajPer1V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/stopajPer1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_stopajPer2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_stopajPer2V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/stopajPer2`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_ek1PerV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_ek1PerV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/ek1Per`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_ek2PerV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_ek2PerV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/ek2Per`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_SSDFPerV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_SSDFPerV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/SSDFPer`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_borsaPerV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_borsaPerV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/borsaPer`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_komisyonPerV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_komisyonPerV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/komisyonPer`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_komKDVPerV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_komKDVPerV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/komKDVPer`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_bagKurPerV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_bagKurPerV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/bagKurPer`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_perDataPathV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_perDataPathV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/perDataPath`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_begMonV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_begMonV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/begMon`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_begDayV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_begDayV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/begDay`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_reserved0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_reserved0V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/reserved0`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_reserved1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_reserved1V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/reserved1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_reserved2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_reserved2V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/reserved2`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_reserved3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_reserved3V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/reserved3`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_reserved4V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_reserved4V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/reserved4`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_buffer0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_buffer0V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/buffer0`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_buffer1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_buffer1V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/buffer1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_printAccFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_printAccFicheV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/printAccFiche`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_printUpperAccV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_printUpperAccV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/printUpperAcc`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sortTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sortTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sortType`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_currUpdateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_currUpdateV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/currUpdate`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_repCurrContV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_repCurrContV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/repCurrCont`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_centerControlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_centerControlV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/centerControl`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_amntControlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_amntControlV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/amntControl`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToCenCtrl0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToCenCtrl0V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToCenCtrl0`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToCenCtrl1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToCenCtrl1V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToCenCtrl1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToCenCtrl2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToCenCtrl2V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToCenCtrl2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToCenCtrl3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToCenCtrl3V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToCenCtrl3`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToCenCtrl4V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToCenCtrl4V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToCenCtrl4`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToCenCtrl5V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToCenCtrl5V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToCenCtrl5`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToCenCtrl6V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToCenCtrl6V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToCenCtrl6`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToCenCtrl7V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToCenCtrl7V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToCenCtrl7`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToCenCtrl8V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToCenCtrl8V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToCenCtrl8`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToCenCtrl9V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToCenCtrl9V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToCenCtrl9`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToCenCtrl10V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToCenCtrl10V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToCenCtrl10`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_accControlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_accControlV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/accControl`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToAccCtrl0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToAccCtrl0V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToAccCtrl0`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToAccCtrl1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToAccCtrl1V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToAccCtrl1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToAccCtrl2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToAccCtrl2V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToAccCtrl2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToAccCtrl3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToAccCtrl3V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToAccCtrl3`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToAccCtrl4V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToAccCtrl4V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToAccCtrl4`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToAccCtrl5V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToAccCtrl5V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToAccCtrl5`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToAccCtrl6V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToAccCtrl6V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToAccCtrl6`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToAccCtrl7V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToAccCtrl7V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToAccCtrl7`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToAccCtrl8V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToAccCtrl8V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToAccCtrl8`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToAccCtrl9V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToAccCtrl9V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToAccCtrl9`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_fichesToAccCtrl10V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_fichesToAccCtrl10V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/fichesToAccCtrl10`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_accRepCurrCtrlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_accRepCurrCtrlV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/accRepCurrCtrl`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_upperAccPrintingV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_upperAccPrintingV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/upperAccPrinting`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_doubleWayControlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_doubleWayControlV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/doubleWayControl`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_debitCreditCtrlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_debitCreditCtrlV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/debitCreditCtrl`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_crossCodeCtrlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_crossCodeCtrlV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/crossCodeCtrl`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_crossAmntMatchV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_crossAmntMatchV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/crossAmntMatch`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_gLBufferV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_gLBufferV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/gLBuffer`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_hideCredTransV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_hideCredTransV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/hideCredTrans`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_persEntegV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_persEntegV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/persEnteg`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_deCodeNotFndV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_deCodeNotFndV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/deCodeNotFnd`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mergeFicheLines0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mergeFicheLines0V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/mergeFicheLines0`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mergeFicheLines1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mergeFicheLines1V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/mergeFicheLines1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_printRollV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_printRollV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/printRoll`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_printBnFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_printBnFicheV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/printBnFiche`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_printCashLnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_printCashLnV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/printCashLn`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasOnDiscV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasOnDiscV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasOnDisc`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_distExpensesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_distExpensesV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/distExpenses`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskControl0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskControl0V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskControl0`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskControl1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskControl1V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskControl1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskControl2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskControl2V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskControl2`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskControl3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskControl3V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskControl3`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskControl4V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskControl4V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskControl4`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskControl5V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskControl5V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskControl5`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskControl6V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskControl6V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskControl6`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskControl7V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskControl7V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskControl7`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskControl8V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskControl8V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskControl8`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskControl9V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskControl9V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskControl9`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskControl10V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskControl10V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/riskControl10`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskType`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_riskOverV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_riskOverV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/riskOver`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_protestedNotesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_protestedNotesV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/protestedNotes`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_noteStampPerV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_noteStampPerV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/noteStampPer`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_reeskontIntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_reeskontIntV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/reeskontInt`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_endorsTracV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_endorsTracV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/endorsTrac`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mergeCashLnsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mergeCashLnsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/mergeCashLns`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_cashWrkDaysCtrlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_cashWrkDaysCtrlV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/cashWrkDaysCtrl`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_VATRealKurusV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_VATRealKurusV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/VATRealKurus`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_VATDefaultV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_VATDefaultV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/VATDefault`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_VATExpenseV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_VATExpenseV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/VATExpense`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_rollOnePayLineV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_rollOnePayLineV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/rollOnePayLine`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_finUpdRepCurrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_finUpdRepCurrV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/finUpdRepCurr`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_debtClose0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_debtClose0V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/debtClose0`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_debtClose1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_debtClose1V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/debtClose1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_debtClose2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_debtClose2V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/debtClose2`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_debtClose3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_debtClose3V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/debtClose3`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_debtClose4V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_debtClose4V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/debtClose4`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_ordRiskOverV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_ordRiskOverV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/ordRiskOver`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_despRiskOverV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_despRiskOverV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/despRiskOver`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_clLanguageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_clLanguageV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/clLanguage`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_chPPConfirmV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_chPPConfirmV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/chPPConfirm`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_finBuffer0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_finBuffer0V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/finBuffer0`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_finBuffer1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_finBuffer1V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/finBuffer1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_finBuffer2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_finBuffer2V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/finBuffer2`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_clBaseFormV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_clBaseFormV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/clBaseForm`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_cashCodeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_cashCodeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/cashCode`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sSortOrderV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sSortOrderV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sSortOrder`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sSortDespV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sSortDespV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sSortDesp`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sSortInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sSortInvV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sSortInv`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sInvPrintTypV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sInvPrintTypV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sInvPrintTyp`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sAttachTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sAttachTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sAttachType`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sCheckOrdInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sCheckOrdInvV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sCheckOrdInv`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sUpdateCurrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sUpdateCurrV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sUpdateCurr`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sDiscountsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sDiscountsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sDiscounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sExpensesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sExpensesV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sExpenses`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sPromDiscsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sPromDiscsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sPromDiscs`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sUpdRepCurrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sUpdRepCurrV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sUpdRepCurr`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sOnePayLineV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sOnePayLineV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sOnePayLine`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sRetCostTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sRetCostTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sRetCostType`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sPrintCmpLineV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sPrintCmpLineV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/sPrintCmpLine`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sPrintClsLineV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sPrintClsLineV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/sPrintClsLine`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sDefStatusV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sDefStatusV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sDefStatus`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_salManControl0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_salManControl0V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/salManControl0`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_salManControl1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_salManControl1V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/salManControl1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_salManControl2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_salManControl2V1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/salManControl2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sPrcTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sPrcTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sPrcType`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sPrcVATV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sPrcVATV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sPrcVAT`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sSrvPrcVATV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sSrvPrcVATV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sSrvPrcVAT`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sClConfirmV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sClConfirmV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sClConfirm`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sOrdDateConV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sOrdDateConV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sOrdDateCon`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sLeadTimeChkV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sLeadTimeChkV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sLeadTimeChk`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters0V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters0`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters1V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters1`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters2V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters2`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters3V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters3`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters4V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters4V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters4`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters5V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters5V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters5`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters6V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters6V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters6`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters7V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters7V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters7`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters8V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters8V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters8`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters9V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters9V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters9`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters10V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters10V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters10`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters11V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters11V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters11`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters12V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters12V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters12`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters13V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters13V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters13`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_piasters14V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_piasters14V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/piasters14`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_printClSlipV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_printClSlipV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/printClSlip`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_printClNotesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_printClNotesV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/printClNotes`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_qcBuffer2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_qcBuffer2V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/qcBuffer2`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_qcBuffer3V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_qcBuffer3V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/qcBuffer3`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_qcBuffer4V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_qcBuffer4V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/qcBuffer4`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_autoLotOutMtdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_autoLotOutMtdV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/autoLotOutMtd`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_lotPartyV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_lotPartyV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/lotParty`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pPrintDespV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pPrintDespV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pPrintDesp`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pPrintOrdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pPrintOrdV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pPrintOrd`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pPrintInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pPrintInvV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pPrintInv`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pMergeOrderV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pMergeOrderV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pMergeOrder`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pMergeDespV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pMergeDespV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pMergeDesp`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pMergeInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pMergeInvV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pMergeInv`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pSortOrderV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pSortOrderV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pSortOrder`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pSortDespV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pSortDespV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pSortDesp`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pSortInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pSortInvV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pSortInv`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pInvPrintTypV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pInvPrintTypV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pInvPrintTyp`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pAttachTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pAttachTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pAttachType`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pCheckOrdInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pCheckOrdInvV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pCheckOrdInv`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pUpdateCurrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pUpdateCurrV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pUpdateCurr`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pDiscountsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pDiscountsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pDiscounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pExpensesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pExpensesV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pExpenses`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pPromDiscsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pPromDiscsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pPromDiscs`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pUpdRepCurrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pUpdRepCurrV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pUpdRepCurr`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pOnePayLineV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pOnePayLineV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pOnePayLine`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pRetCostTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pRetCostTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pRetCostType`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pPrintCmpLineV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pPrintCmpLineV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/pPrintCmpLine`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pPrintClsLineV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pPrintClsLineV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/pPrintClsLine`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pDefStatusV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pDefStatusV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pDefStatus`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pPrcTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pPrcTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pPrcType`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pPrcVATV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pPrcVATV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pPrcVAT`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pSrvPrcVATV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pSrvPrcVATV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pSrvPrcVAT`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pClConfirmV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pClConfirmV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pClConfirm`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pOrdDateConV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pOrdDateConV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pOrdDateCon`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_pLeadTimeChkV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_pLeadTimeChkV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/pLeadTimeChk`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sOrdPromDlvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sOrdPromDlvV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sOrdPromDlv`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sCheckOrdLinkV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sCheckOrdLinkV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/sCheckOrdLink`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sDefReserveV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sDefReserveV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sDefReserve`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_checkSalManV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_checkSalManV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/checkSalMan`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sPrintDespV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sPrintDespV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sPrintDesp`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sPrintOrdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sPrintOrdV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sPrintOrd`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sPrintInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sPrintInvV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sPrintInv`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sMergeOrderV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sMergeOrderV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sMergeOrder`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sMergeDespV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sMergeDespV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sMergeDesp`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sMergeInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sMergeInvV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sMergeInv`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_maxLevelCtrlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_maxLevelCtrlV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/maxLevelCtrl`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_stUpdRepCurrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_stUpdRepCurrV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/stUpdRepCurr`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_brInvCheckV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_brInvCheckV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/brInvCheck`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_safeLevelCtrlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_safeLevelCtrlV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/safeLevelCtrl`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_ABCCodeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_ABCCodeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/ABCCode`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_purchItemV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_purchItemV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/purchItem`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_salesItemV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_salesItemV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/salesItem`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mtrlItemV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mtrlItemV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/mtrlItem`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_toolV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_toolV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/tool`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_autoIncSLV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_autoIncSLV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/autoIncSL`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_divLotSizeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_divLotSizeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/divLotSize`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_shelfLifeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_shelfLifeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/shelfLife`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_lotEntryV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_lotEntryV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/lotEntry`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_locTrackingV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_locTrackingV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/locTracking`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_clientQcV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_clientQcV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/clientQc`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_autoMtrIssueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_autoMtrIssueV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/autoMtrIssue`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_chkSLLocExpDateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_chkSLLocExpDateV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/chkSLLocExpDate`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_purchUnitV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_purchUnitV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/purchUnit`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_salesUnitV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_salesUnitV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/salesUnit`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mtrlUnitV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mtrlUnitV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/mtrlUnit`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_divUnitV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_divUnitV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/divUnit`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_useTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_useTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/useType`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_deprTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_deprTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/deprType`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_revalFlagV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_revalFlagV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/revalFlag`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_revDeprFlagV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_revDeprFlagV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/revDeprFlag`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_partDepV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_partDepV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/partDep`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_condReadActV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_condReadActV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/condReadAct`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_iPrintClsLineV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_iPrintClsLineV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/iPrintClsLine`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_ordCampApplyV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_ordCampApplyV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/ordCampApply`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_despCampApplyV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_despCampApplyV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/FirmParameters/despCampApply`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_invCampApplyV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_invCampApplyV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/invCampApply`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_IOCtrlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_IOCtrlV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/IOCtrl`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_qcPriorityV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_qcPriorityV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/qcPriority`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_frequencyV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_frequencyV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/frequency`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sampleSizeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sampleSizeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sampleSize`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_purchQCharV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_purchQCharV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/purchQChar`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_salesQCharV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_salesQCharV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/salesQChar`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mtrlQCharV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mtrlQCharV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/mtrlQChar`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_nonConformV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_nonConformV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/nonConform`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_itemConformV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_itemConformV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/itemConform`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_qcBuffer0V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_qcBuffer0V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/qcBuffer0`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_qcBuffer1V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_qcBuffer1V1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/qcBuffer1`);
      expect(result).toEqual({ success: true });
    });

    it('should call activePeriodV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.activePeriodV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ActivePeriod`);
      expect(result).toEqual({ success: true });
    });

    it('should call connectedV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.connectedV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/Connected`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiFirmsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiFirmsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Firms`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiFirmsCountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiFirmsCountV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Firms/Count`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiFirmsParentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiFirmsParentV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Firms/Parent`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiUsersV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiUsersV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Users`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiUsersCountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiUsersCountV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Users/Count`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiUsersParentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiUsersParentV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Users/Parent`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiParentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiParentV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Parent`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiTerminalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiTerminalsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Terminals`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiTerminalsCountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiTerminalsCountV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Terminals/Count`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiTerminalsParentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiTerminalsParentV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Terminals/Parent`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiCurrenciesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiCurrenciesV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Currencies`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiCurrenciesCountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiCurrenciesCountV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Currencies/Count`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiCurrenciesParentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiCurrenciesParentV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Currencies/Parent`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiRolesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiRolesV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Roles`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiRolesCountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiRolesCountV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Roles/Count`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiRolesParentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiRolesParentV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CAPI/Roles/Parent`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParametersV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParametersV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_localCurrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_localCurrV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/localCurr`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_localFracV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_localFracV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/localFrac`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_reportCurrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_reportCurrV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/reportCurr`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_reportFracV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_reportFracV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/reportFrac`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_costTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_costTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/costType`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_minLevelCtrlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_minLevelCtrlV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/minLevelCtrl`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_printStFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_printStFicheV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/printStFiche`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_mergeStFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_mergeStFicheV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/mergeStFiche`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_sortStFicheV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_sortStFicheV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/sortStFiche`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_negLevelCtrlV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_negLevelCtrlV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/negLevelCtrl`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmParameters_trackTypeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmParameters_trackTypeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/FirmParameters/trackType`);
      expect(result).toEqual({ success: true });
    });

    it('should call itemVirementV1 with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.itemVirementV1(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/methods/ItemVirement`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/ExportBase64EncodedImage/1/1/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 1, 1, 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/methods/ImportBase64EncodedImage/1/1/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call companyLoginV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.companyLoginV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CompanyLogin/1/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call companyLogoutV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.companyLogoutV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CompanyLogout`);
      expect(result).toEqual({ success: true });
    });

    it('should call versionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.versionV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/Version`);
      expect(result).toEqual({ success: true });
    });

    it('should call getLastErrorV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLastErrorV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetLastError`);
      expect(result).toEqual({ success: true });
    });

    it('should call newDataObjectListV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.newDataObjectListV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/NewDataObjectList`);
      expect(result).toEqual({ success: true });
    });

    it('should call getLastErrorStringV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLastErrorStringV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetLastErrorString`);
      expect(result).toEqual({ success: true });
    });

    it('should call getApprovalDateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getApprovalDateV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetApprovalDate/1/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call setApprovalDateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setApprovalDateV1(1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/SetApprovalDate/1/test/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDBConnInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDBConnInfoV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetDBConnInfo`);
      expect(result).toEqual({ success: true });
    });

    it('should call getCurrIDV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCurrIDV1('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetCurrID/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyAvaragePaymentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyAvaragePaymentV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ApplyAvaragePayment/1/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getCurrNameV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCurrNameV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetCurrName/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getAuthCodeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getAuthCodeV1(1, 1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetAuthCode/1/1/1/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call setDistOrderStatusV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDistOrderStatusV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/SetDistOrderStatus/1/1/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call dispatchBillingV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.dispatchBillingV1(
        1,
        'test',
        1,
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        true,
        1,
        true,
        'test',
        true,
        'test',
        'test'
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/DispatchBilling/1/test/1/test/test/test/test/test/test/test/true/1/true/test/true/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call debtCloseV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.debtCloseV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/DebtClose/1/1/1/1/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call lgsetupV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.lgsetupV1('test', 1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/LGSetup/test/1/1/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call getStockPriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getStockPriceV1(1, 1, 1, 1, 1, 1, 1, 1, 1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/GetStockPrice/1/1/1/1/1/1/1/1/1/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call doIntegrationV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.doIntegrationV1(1, 1, true, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/DoIntegration/1/1/true/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call debtCloseFIFOV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.debtCloseFIFOV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/DebtCloseFIFO/1/test/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call logoDBV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.logoDBV1('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/LogoDB/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call rollBackDebtCloseV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.rollBackDebtCloseV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/RollBackDebtClose/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getFirmDBConnInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getFirmDBConnInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetFirmDBConnInfo/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getAppPathV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getAppPathV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetAppPath`);
      expect(result).toEqual({ success: true });
    });

    it('should call autoBOMRevisionUpdateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.autoBOMRevisionUpdateV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/AutoBOMRevisionUpdate/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call forceReLoginV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.forceReLoginV1(1, 1, true, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ForceReLogin/1/1/true/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call getTableNameV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTableNameV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetTableName/1/1/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getCustTableNameV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCustTableNameV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetCustTableName/1/1/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getValueV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetValue/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call sendMailV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sendMailV1('test', 'test', 'test', 'test', 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/SendMail/test/test/test/test/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call sendSMSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sendSMSV1('test', 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/SendSMS/test/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call orderBillingV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.orderBillingV1(
        1,
        'test',
        1,
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        true,
        1,
        true,
        1,
        true,
        'test'
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/OrderBilling/1/test/1/test/test/test/test/test/test/test/true/1/true/1/true/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call loggedInV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.loggedInV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/LoggedIn`);
      expect(result).toEqual({ success: true });
    });

    it('should call companyLoggedInV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.companyLoggedInV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CompanyLoggedIn`);
      expect(result).toEqual({ success: true });
    });

    it('should call currentFirmV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.currentFirmV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CurrentFirm`);
      expect(result).toEqual({ success: true });
    });

    it('should call changeFicheApproveInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.changeFicheApproveInfoV1(1, 1, true);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/ChangeFicheApproveInfo/1/1/true`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setAppLanguageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setAppLanguageV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/SetAppLanguage/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call checkLogoDBV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.checkLogoDBV1('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CheckLogoDB/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call approveEDocumentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.approveEDocumentV1('test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/ApproveEDocument/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call rejectEDocumentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.rejectEDocumentV1('test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/RejectEDocument/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addDocumentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addDocumentV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/AddDocument/1/test/1/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call addInstalmentTransactionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addInstalmentTransactionV1(
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        'test',
        'test'
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/AddInstalmentTransaction/1/1/1/1/1/1/1/1/1/1/1/1/1/1/1/1/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getViewNameV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getViewNameV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetViewName/1/1/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDBConnInfoExV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDBConnInfoExV1('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetDBConnInfoEx/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call printDocV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.printDocV1(1, 1, 'test', 'test', 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/PrintDoc/1/1/test/test/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getOrderFicheApproveControlInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getOrderFicheApproveControlInfoV1(
        1,
        true,
        'test',
        'test',
        'test',
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        true
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/GetOrderFicheApproveControlInfo/1/true/test/test/test/1/1/1/1/1/1/1/1/1/1/1/true`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call orderShippingV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.orderShippingV1(
        1,
        'test',
        1,
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        'test',
        true,
        1,
        true,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/OrderShipping/1/test/1/test/test/test/test/test/test/test/true/1/true/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call materialTransactionTransferV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.materialTransactionTransferV1('test', 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/MaterialTransactionTransfer/test/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call cancelInvoiceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.cancelInvoiceV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CancelInvoice/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call readStringsCrdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.readStringsCrdV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ReadStringsCrd/1/1/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call writeStringsCrdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.writeStringsCrdV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/WriteStringsCrd/1/1/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call deleteStringsCrdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteStringsCrdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/DeleteStringsCrd/1/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call downloadDailyExchangesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.downloadDailyExchangesV1('test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/DownloadDailyExchanges/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call undoInvoiceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.undoInvoiceV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/UndoInvoice/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call loadDefaultAddressesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.loadDefaultAddressesV1('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/LoadDefaultAddresses/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call loadDefaultBanksV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.loadDefaultBanksV1('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/LoadDefaultBanks/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call loadDefaultTaxOfficesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.loadDefaultTaxOfficesV1('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/LoadDefaultTaxOffices/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call loadDefaultCustomsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.loadDefaultCustomsV1('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/LoadDefaultCustoms/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call loadDefaultFreeZonesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.loadDefaultFreeZonesV1('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/LoadDefaultFreeZones/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call runCostingMaintenanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.runCostingMaintenanceV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/RunCostingMaintenance/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call runPriceAssignmentsByCostsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.runPriceAssignmentsByCostsV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/RunPriceAssignmentsByCosts/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getStockPriceListV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getStockPriceListV1('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetStockPriceList/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call getCfgTextV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCfgTextV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetCfgText/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call cancelARPVoucherV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.cancelARPVoucherV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CancelARPVoucher/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call undoARPVoucherV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.undoARPVoucherV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/UndoARPVoucher/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call arpeinvoicecheckV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.arpeinvoicecheckV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/ARPEInvoiceCheck/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call cancelSafeDepositeTransV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.cancelSafeDepositeTransV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/CancelSafeDepositeTrans/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call undoSafeDepositeTransV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.undoSafeDepositeTransV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/UndoSafeDepositeTrans/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getLastWarningV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLastWarningV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetLastWarning`);
      expect(result).toEqual({ success: true });
    });

    it('should call getLastWarningStringV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLastWarningStringV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/GetLastWarningString`);
      expect(result).toEqual({ success: true });
    });

    it('should call sendRecvEInvoiceDocumentsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sendRecvEInvoiceDocumentsV1(true, true, 'test', 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/SendRecvEInvoiceDocuments/true/true/test/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call sendEArchiveDocumentsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sendEArchiveDocumentsV1('test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/SendEArchiveDocuments/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call sendRecvEDispatchDocumentsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sendRecvEDispatchDocumentsV1(true, true, 'test', 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/SendRecvEDispatchDocuments/true/true/test/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call sendESEVoucherDocumentsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sendESEVoucherDocumentsV1('test', 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/SendESEVoucherDocuments/test/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call sendESEPreceiptDocumentsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sendESEPreceiptDocumentsV1('test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/SendESEPreceiptDocuments/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getEDocumentContentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getEDocumentContentV1('test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/GetEDocumentContent/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call updateEDocumentStatusV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.updateEDocumentStatusV1('test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/methods/UpdateEDocumentStatus/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call saveEDocumentV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.saveEDocumentV1('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/methods/SaveEDocument/test`);
      expect(result).toEqual({ success: true });
    });
  });
});
