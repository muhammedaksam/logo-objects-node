import { FaregistriesClient } from './client';
import { Faregistries, FaregistriesField, FaregistriesSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('FaregistriesClient', () => {
  let client: FaregistriesClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new FaregistriesClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all faregistries', async () => {
      const mockResponse = {
        items: [
          {
            INTERNAL_REFERENCE: 1,
            CODE: 'Test CODE',
          },
        ],
        totalCount: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockResponse);

      const result = await client.getAll();

      expect(client['request']).toHaveBeenCalledWith('get', '/FARegistries');
      expect(result).toEqual(mockResponse);
    });

    it('should get all faregistries with options', async () => {
      const options = { limit: 10, offset: 0, sort: ['CODE'] as FaregistriesSortSpec };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/FARegistries?limit=10&offset=0&sort=CODE'
      );
    });

    it('should get faregistries by ID', async () => {
      const mockFaregistries: Faregistries = {
        INTERNAL_REFERENCE: 1,
        CODE: 'Test CODE',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockFaregistries);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/FARegistries/1');
      expect(result).toEqual(mockFaregistries);
    });

    it('should get faregistries by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', '/FARegistries/1?expandLevel=full');
    });

    it('should create a new faregistries', async () => {
      const newFaregistries = {
        CODE: 'Test CODE',
      };
      const createdFaregistries: Faregistries = { ...newFaregistries, INTERNAL_REFERENCE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdFaregistries);

      const result = await client.create(newFaregistries);

      expect(client['request']).toHaveBeenCalledWith('post', '/FARegistries', newFaregistries);
      expect(result).toEqual(createdFaregistries);
    });

    it('should update a faregistries', async () => {
      const updateFaregistries = {
        INTERNAL_REFERENCE: 1,
        CODE: 'Test CODE',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updateFaregistries);

      const result = await client.update(1, updateFaregistries);

      expect(client['request']).toHaveBeenCalledWith('put', '/FARegistries/1', updateFaregistries);
      expect(result).toEqual(updateFaregistries);
    });

    it('should patch a faregistries', async () => {
      const patchData = { CODE: 'Updated' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith('patch', '/FARegistries/1', patchData);
      expect(result).toEqual({ success: true });
    });

    it('should delete a faregistries', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/FARegistries/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search faregistries', async () => {
      const criteria = { code: 'test' };
      await client.search(criteria);

      expect(client.getAll).toHaveBeenCalled();
    });

    it('should search by CODE', async () => {
      await client.searchByCode('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "CODE like 'test*'" });
    });

    it('should search by MAINT_NUMBER', async () => {
      await client.searchByMaintNumber('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: expect.any(String) });
    });

    it('should search by DEPR_TYPE', async () => {
      await client.searchByDeprType('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: expect.any(String) });
    });
  });

  describe('Analytics Methods', () => {
    it('should get faregistries analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get faregistries count', async () => {
      const mockResponse = { items: [], totalCount: 42 };
      jest.spyOn(client, 'getAll').mockResolvedValue(mockResponse);

      const result = await client.getCount();

      expect(result).toBe(42);
    });

    it('should return 0 when totalCount is undefined', async () => {
      const mockResponse = { items: [] };
      jest.spyOn(client, 'getAll').mockResolvedValue(mockResponse);

      const result = await client.getCount();

      expect(result).toBe(0);
    });
  });

  describe('Utility Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get database column properties', async () => {
      const mockColumns = [{ ColumnName: 'INTERNAL_REFERENCE', DataType: 'int' }];
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockColumns);

      const result = await client.getDbColumns();

      expect(client['request']).toHaveBeenCalledWith('get', '/FARegistries/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/FARegistries/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/FARegistries/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/FARegistries/checktrack');
      expect(result).toBe(true);
    });

    it('should build custom query with multiple conditions', async () => {
      const mockResponse = { items: [], totalCount: 0 };
      jest.spyOn(client, 'getAll').mockResolvedValue(mockResponse);

      const conditions = ["CODE eq 'ABC'", 'STATUS eq 1'];
      const result = await client.buildQuery(conditions);

      expect(client.getAll).toHaveBeenCalledWith({ q: "CODE eq 'ABC' and STATUS eq 1" });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('Error Handling', () => {
    it('should handle API errors gracefully', async () => {
      const apiError = new Error('API Error: Faregistries not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow('API Error: Faregistries not found');
    });

    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network Error: Connection timeout');
      jest.spyOn(client, 'request' as any).mockRejectedValue(networkError);

      await expect(client.getAll()).rejects.toThrow('Network Error: Connection timeout');
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call addSeriLotsForKsV1 with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1Get(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1Get with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1Get(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/FillSMMACCCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/FillSMMACCCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/AttachADespatchByLRef/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/DeleteCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/DeleteCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/SetClientInfo`);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/SetClientInfo`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/GetRelevantCampaigns`);
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/ImportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1Post('test', 'test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ImportBase64EncodedImage/test/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/FormSeriLotLines/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/ApplyCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ApplyCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/ApplyRePayPln/1/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1Post(1, 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/ApplyRePayPlnForInv/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/ExportToXmlStr/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/ApplyCondition`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ApplyCondition`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/ExportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ExportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/ReCalculate`);
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/FARegistries/ReCalculate`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/FillAccCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/FillAccCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/ApplyADiscount/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1Post('test', 1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/EqualizePayAmnt`);
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/EqualizePayAmnt`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistApplyaccdisttemplateV1 with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistApplyaccdisttemplateV1('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/MAINTANENCELIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistApplyaccdisttemplateV1(
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistApplyaccdisttemplateV1Get(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/MAINTANENCELIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistApplyaccdisttemplateV1Get with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistApplyaccdisttemplateV1Get(
        1,
        'test',
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/MAINTANENCELIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/MAINTANENCELIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getGUARANTEELISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getGUARANTEELISTV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/GUARANTEELIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getGUARANTEELISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getGUARANTEELISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getGUARANTEELISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getGUARANTEELISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/GUARANTEELIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getGUARANTEELISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getGUARANTEELISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/GUARANTEELIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/GUARANTEELIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/GUARANTEELIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/GUARANTEELIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/GUARANTEELIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/GUARANTEELIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/GUARANTEELIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/GUARANTEELIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/GUARANTEELIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAppendserilotsV1(
        1,
        'test',
        1,
        1,
        'test',
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/GUARANTEELIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/GUARANTEELIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/GUARANTEELIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/GUARANTEELIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/GUARANTEELIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistApplyaccdisttemplateV1Post(
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/GUARANTEELIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/GUARANTEELIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call guaranteelistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.guaranteelistSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getVALUE_INFOSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVALUE_INFOSV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/VALUE_INFOS`);
      expect(result).toEqual({ success: true });
    });

    it('should call getVALUE_INFOSV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVALUE_INFOSV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getVALUE_INFOSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVALUE_INFOSByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/VALUE_INFOS/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getVALUE_INFOSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVALUE_INFOSByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/VALUE_INFOS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/VALUE_INFOS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/VALUE_INFOS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/VALUE_INFOS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/VALUE_INFOS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/VALUE_INFOS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/VALUE_INFOS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/VALUE_INFOS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/VALUE_INFOS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAppendserilotsV1Post('test', 1, 1, 'test', 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/VALUE_INFOS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/VALUE_INFOS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/VALUE_INFOS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/VALUE_INFOS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/VALUE_INFOS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosApplyaccdisttemplateV1Post(
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/VALUE_INFOS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/VALUE_INFOS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call valueInfosSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.valueInfosSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/ExportToXML/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/CreateCompositeLines`);
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/CreateCompositeLines`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistGetstocklinepriceV1 with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistGetstocklinepriceV1(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/DEFNDLDSLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistGetstocklinepriceV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistGetstocklinepriceV1(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistGetstocklinepriceV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistGetstocklinepriceV1Get(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/DEFNDLDSLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistGetstocklinepriceV1Get with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistGetstocklinepriceV1Get(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/DEFNDLDSLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/DEFNDLDSLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/DEFNDLDSLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/DEFNDLDSLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/DEFNDLDSLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/DEFNDLDSLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/DEFNDLDSLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/DEFNDLDSLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistApplyaccdisttemplateV1Post(
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/DEFNDLDSLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/DEFNDLDSLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getPRDNUMLSTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPRDNUMLSTV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/PRDNUMLST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getPRDNUMLSTV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPRDNUMLSTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getPRDNUMLSTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPRDNUMLSTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/PRDNUMLST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getPRDNUMLSTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPRDNUMLSTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/PRDNUMLST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/PRDNUMLST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/PRDNUMLST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/PRDNUMLST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/PRDNUMLST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/PRDNUMLST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/PRDNUMLST/AddLine2/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/PRDNUMLST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/PRDNUMLST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAppendserilotsV1Post('test', 1, 1, 'test', 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/PRDNUMLST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/PRDNUMLST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/PRDNUMLST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/PRDNUMLST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/PRDNUMLST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstApplyaccdisttemplateV1Post(
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/PRDNUMLST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/PRDNUMLST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prdnumlstSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prdnumlstSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getMAINTANENCELISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getMAINTANENCELISTV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/MAINTANENCELIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getMAINTANENCELISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getMAINTANENCELISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getMAINTANENCELISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getMAINTANENCELISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/MAINTANENCELIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getMAINTANENCELISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getMAINTANENCELISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/MAINTANENCELIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/MAINTANENCELIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/MAINTANENCELIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/MAINTANENCELIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/MAINTANENCELIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/MAINTANENCELIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/MAINTANENCELIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/MAINTANENCELIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/MAINTANENCELIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAppendserilotsV1(
        1,
        'test',
        1,
        1,
        'test',
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/MAINTANENCELIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/MAINTANENCELIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/MAINTANENCELIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call maintanencelistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.maintanencelistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcApplyaccdisttemplateV1 with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcApplyaccdisttemplateV1('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcApplyaccdisttemplateV1('test', 1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcApplyaccdisttemplateV1Get(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcApplyaccdisttemplateV1Get with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcApplyaccdisttemplateV1Get(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_LOCAL_INFLV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_LOCAL_INFLV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/YEARLY_LOCAL_INFL`);
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_LOCAL_INFLV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_LOCAL_INFLV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_LOCAL_INFLByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_LOCAL_INFLByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/YEARLY_LOCAL_INFL/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_LOCAL_INFLByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_LOCAL_INFLByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL_INFL/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL_INFL/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL_INFL/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL_INFL/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL_INFL/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL_INFL/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL_INFL/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL_INFL/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL_INFL/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAppendserilotsV1(
        1,
        'test',
        1,
        1,
        'test',
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL_INFL/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL_INFL/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL_INFL/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL_INFL/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL_INFL/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflApplyaccdisttemplateV1Post(
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL_INFL/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL_INFL/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalInflSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalInflSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_FC_INFLV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_FC_INFLV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/YEARLY_FC_INFL`);
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_FC_INFLV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_FC_INFLV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_FC_INFLByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_FC_INFLByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/YEARLY_FC_INFL/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_FC_INFLByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_FC_INFLByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC_INFL/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC_INFL/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC_INFL/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC_INFL/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC_INFL/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC_INFL/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC_INFL/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC_INFL/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC_INFL/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC_INFL/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC_INFL/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC_INFL/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC_INFL/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC_INFL/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflApplyaccdisttemplateV1Post(
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC_INFL/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC_INFL/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcInflSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcInflSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNDLDSLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNDLDSLISTV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/DEFNDLDSLIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNDLDSLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNDLDSLISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNDLDSLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNDLDSLISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/DEFNDLDSLIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNDLDSLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNDLDSLISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/DEFNDLDSLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/DEFNDLDSLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/DEFNDLDSLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/DEFNDLDSLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defndldslistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defndldslistAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with data', async () => {
      const mockData = { fields: 'CODE,TITLE', expand: 'full' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadWithBodyParametersV1(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadWithBodyParametersV1(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with data', async () => {
      const mockData = { fields: 'CODE,TITLE', expand: 'full' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadByIdWithBodyParametersV1(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadByIdWithBodyParametersV1(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_LOCALV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_LOCALV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/YEARLY_LOCAL`);
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_LOCALV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_LOCALV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_LOCALByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_LOCALByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/YEARLY_LOCAL/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_LOCALByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_LOCALByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalApplyaccdisttemplateV1Post(
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_LOCAL/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_LOCAL/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyLocalSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyLocalSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_FCV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_FCV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/YEARLY_FC`);
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_FCV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_FCV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_FCByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_FCByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/YEARLY_FC/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getYEARLY_FCByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getYEARLY_FCByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/FARegistries/1/YEARLY_FC/AddLine2/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAppendserilotsV1Post('test', 1, 1, 'test', 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData,
        options
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/FARegistries/1/YEARLY_FC/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/FARegistries/YEARLY_FC/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call yearlyFcEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'DIVISION'] as FaregistriesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.yearlyFcEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });
  });
});
