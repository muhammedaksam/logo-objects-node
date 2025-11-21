import { DistributionOrdersClient } from './client';
import { DistributionOrders, DistributionOrdersField, DistributionOrdersSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('DistributionOrdersClient', () => {
  let client: DistributionOrdersClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new DistributionOrdersClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all distributionOrders', async () => {
      const mockResponse = {
        items: [
          {
            INTERNAL_REFERENCE: 1,
            STATUS: 1,
          },
        ],
        totalCount: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockResponse);

      const result = await client.getAll();

      expect(client['request']).toHaveBeenCalledWith('get', '/distributionOrders');
      expect(result).toEqual(mockResponse);
    });

    it('should get all distributionOrders with options', async () => {
      const options = { limit: 10, offset: 0, sort: ['FICHE_NO'] as DistributionOrdersSortSpec };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/distributionOrders?limit=10&offset=0&sort=FICHE_NO'
      );
    });

    it('should get distributionOrders by ID', async () => {
      const mockDistributionOrders: DistributionOrders = {
        INTERNAL_REFERENCE: 1,
        STATUS: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockDistributionOrders);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/distributionOrders/1');
      expect(result).toEqual(mockDistributionOrders);
    });

    it('should get distributionOrders by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/distributionOrders/1?expandLevel=full'
      );
    });

    it('should create a new distributionOrders', async () => {
      const newDistributionOrders = {
        STATUS: 1,
      };
      const createdDistributionOrders: DistributionOrders = {
        ...newDistributionOrders,
        INTERNAL_REFERENCE: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdDistributionOrders);

      const result = await client.create(newDistributionOrders);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        '/distributionOrders',
        newDistributionOrders
      );
      expect(result).toEqual(createdDistributionOrders);
    });

    it('should update a distributionOrders', async () => {
      const updateDistributionOrders = {
        INTERNAL_REFERENCE: 1,
        STATUS: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updateDistributionOrders);

      const result = await client.update(1, updateDistributionOrders);

      expect(client['request']).toHaveBeenCalledWith(
        'put',
        '/distributionOrders/1',
        updateDistributionOrders
      );
      expect(result).toEqual(updateDistributionOrders);
    });

    it('should patch a distributionOrders', async () => {
      const patchData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith('patch', '/distributionOrders/1', patchData);
      expect(result).toEqual({ success: true });
    });

    it('should delete a distributionOrders', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/distributionOrders/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search distributionOrders', async () => {
      const criteria = { status: 1 };
      await client.search(criteria);

      expect(client.getAll).toHaveBeenCalled();
    });

    it('should search by AUXIL_CODE', async () => {
      await client.searchByAuxilCode('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "AUXIL_CODE like 'test*'" });
    });
  });

  describe('Analytics Methods', () => {
    it('should get distributionOrders analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get distributionOrders count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/distributionOrders/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/distributionOrders/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/distributionOrders/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/distributionOrders/checktrack');
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
      const apiError = new Error('API Error: DistributionOrders not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow('API Error: DistributionOrders not found');
    });

    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network Error: Connection timeout');
      jest.spyOn(client, 'request' as any).mockRejectedValue(networkError);

      await expect(client.getAll()).rejects.toThrow('Network Error: Connection timeout');
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call equalizePayAmntV1 with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/EqualizePayAmnt`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Get(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/EqualizePayAmnt`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Get with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Get(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/FillSMMACCCodes`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/FillSMMACCCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/AttachADespatchByLRef/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/distributionOrders/1/DeleteCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DeleteCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/distributionOrders/1/SetClientInfo`);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/SetClientInfo`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/GetRelevantCampaigns`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ImportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1Post('test', 'test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ImportBase64EncodedImage/test/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosGetstocklinepriceV1 with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosGetstocklinepriceV1(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosGetstocklinepriceV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosGetstocklinepriceV1(
        1,
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

    it('should call distOrderLinescampaignInfosGetstocklinepriceV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosGetstocklinepriceV1Get(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosGetstocklinepriceV1Get with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosGetstocklinepriceV1Get(
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAddline2V1Post(
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

    it('should call distOrderLinescampaignInfosAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAppendserilotsV1(
        1,
        1,
        'test',
        1,
        1,
        'test',
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAppendserilotsV1(
        1,
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

    it('should call distOrderLinescampaignInfosAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAppendserilotsV1Post(
        1,
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAppendserilotsV1Post(
        1,
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

    it('should call distOrderLinescampaignInfosEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosEqualizebalanceV1Post(
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

    it('should call distOrderLinescampaignInfosApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosApplyaccdisttemplateV1(
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosApplyaccdisttemplateV1(
        1,
        1,
        'test',
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosApplyaccdisttemplateV1Post(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosApplyaccdisttemplateV1Post(
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

    it('should call distOrderLinescampaignInfosSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosSetlinetotalsV1Post(
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

    it('should call exportToXMLV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ExportToXML/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/CreateCompositeLines`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/CreateCompositeLines`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/FormSeriLotLines/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/distributionOrders/1/ApplyCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ApplyCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ApplyRePayPln/1/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1Post(1, 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ApplyRePayPlnForInv/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ExportToXmlStr/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/distributionOrders/1/ApplyCondition`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ApplyCondition`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ExportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ExportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/distributionOrders/1/ReCalculate`);
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ReCalculate`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/distributionOrders/1/FillAccCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/FillAccCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/ApplyADiscount/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1Post('test', 1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsApplyaccdisttemplateV1 with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsApplyaccdisttemplateV1(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsApplyaccdisttemplateV1(
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

    it('should call distOrderLinesslDetailsApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsApplyaccdisttemplateV1Get(
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsApplyaccdisttemplateV1Get with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsApplyaccdisttemplateV1Get(
        1,
        1,
        'test',
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsSetlinetotalsV1Post(
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

    it('should call getDIST_ORDER_LINESSL_DETAILSQCLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSQCLISTV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESSL_DETAILSQCLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSQCLISTV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESSL_DETAILSQCLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSQCLISTByIdV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESSL_DETAILSQCLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSQCLISTByIdV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAppendline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAppendline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAppendline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAppendline2V1Post(
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

    it('should call distOrderLinesslDetailsqclistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAddserilotsV1(
        1,
        1,
        1,
        'test',
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAddserilotsV1(
        1,
        1,
        1,
        'test',
        1,
        'test',
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAddserilotsV1Post(
        1,
        1,
        'test',
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAddserilotsV1Post(
        1,
        1,
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

    it('should call distOrderLinesslDetailsqclistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistGetstocklinepriceV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistGetstocklinepriceV1(
        1,
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistGetstocklinepriceV1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistGetstocklinepriceV1Post(
        1,
        1,
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

    it('should call distOrderLinesslDetailsqclistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAddline2V1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAddline2V1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAddline2V1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAddline2V1Post(
        1,
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

    it('should call distOrderLinesslDetailsqclistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAppendserilotsV1(
        1,
        1,
        1,
        'test',
        1,
        1,
        'test',
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAppendserilotsV1(
        1,
        1,
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

    it('should call distOrderLinesslDetailsqclistAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAppendserilotsV1Post(
        1,
        1,
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistAppendserilotsV1Post(
        1,
        1,
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

    it('should call distOrderLinesslDetailsqclistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistEqualizebalanceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistEqualizebalanceV1(
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistEqualizebalanceV1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistEqualizebalanceV1Post(
        1,
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

    it('should call distOrderLinesslDetailsqclistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistApplyaccdisttemplateV1(
        1,
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistApplyaccdisttemplateV1(
        1,
        1,
        1,
        'test',
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistApplyaccdisttemplateV1Post(
        1,
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistApplyaccdisttemplateV1Post(
        1,
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

    it('should call distOrderLinesslDetailsqclistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistSetlinetotalsV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistSetlinetotalsV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistSetlinetotalsV1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistSetlinetotalsV1Post(
        1,
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

    it('should call getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTByIdV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTByIdV1(
        1,
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAppendline2V1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAppendline2V1(
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAppendline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAppendline2V1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAppendline2V1Post(
        1,
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

    it('should call distOrderLinesslDetailsqclistvallistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAddserilotsV1(
        1,
        1,
        1,
        1,
        'test',
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAddserilotsV1(
        1,
        1,
        1,
        1,
        'test',
        1,
        'test',
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAddserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAddserilotsV1Post(
        1,
        1,
        1,
        'test',
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAddserilotsV1Post(
        1,
        1,
        1,
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

    it('should call distOrderLinesslDetailsqclistvallistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistGetstocklinepriceV1(
        1,
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistGetstocklinepriceV1(
        1,
        1,
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistGetstocklinepriceV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistGetstocklinepriceV1Post(
        1,
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistGetstocklinepriceV1Post(
        1,
        1,
        1,
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

    it('should call distOrderLinesslDetailsqclistvallistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAddline2V1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAddline2V1(
        1,
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAddline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAddline2V1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAddline2V1Post(
        1,
        1,
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

    it('should call distOrderLinesslDetailsqclistvallistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAppendserilotsV1(
        1,
        1,
        1,
        1,
        'test',
        1,
        1,
        'test',
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAppendserilotsV1(
        1,
        1,
        1,
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

    it('should call distOrderLinesslDetailsqclistvallistAppendserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAppendserilotsV1Post(
        1,
        1,
        1,
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistAppendserilotsV1Post(
        1,
        1,
        1,
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

    it('should call distOrderLinesslDetailsqclistvallistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistEqualizebalanceV1(
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistEqualizebalanceV1(
        1,
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistEqualizebalanceV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistEqualizebalanceV1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistEqualizebalanceV1Post(
        1,
        1,
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

    it('should call distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1(
        1,
        1,
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1(
        1,
        1,
        1,
        1,
        'test',
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1Post(
        1,
        1,
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1Post(
        1,
        1,
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

    it('should call distOrderLinesslDetailsqclistvallistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistSetlinetotalsV1(
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistSetlinetotalsV1(
        1,
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistSetlinetotalsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistSetlinetotalsV1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/1/QCLIST/1/VALLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsqclistvallistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsqclistvallistSetlinetotalsV1Post(
        1,
        1,
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

    it('should call getDIST_ORDER_LINESCAMPAIGN_INFOSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESCAMPAIGN_INFOSV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/CAMPAIGN_INFOS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESCAMPAIGN_INFOSV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESCAMPAIGN_INFOSV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESCAMPAIGN_INFOSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESCAMPAIGN_INFOSByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESCAMPAIGN_INFOSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESCAMPAIGN_INFOSByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAppendline2V1Post(
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

    it('should call distOrderLinescampaignInfosAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAddserilotsV1(
        1,
        1,
        'test',
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAddserilotsV1(
        1,
        1,
        'test',
        1,
        'test',
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAddserilotsV1Post(
        1,
        'test',
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/CAMPAIGN_INFOS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinescampaignInfosAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinescampaignInfosAddserilotsV1Post(
        1,
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
        `/distributionOrders/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
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
        `/distributionOrders/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadByIdWithBodyParametersV1(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAppendline2V1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAddserilotsV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAddserilotsV1Post(
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

    it('should call distOrderLinesGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesGetstocklinepriceV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAddline2V1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAppendserilotsV1(
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

    it('should call distOrderLinesAppendserilotsV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesAppendserilotsV1Post(
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

    it('should call distOrderLinesEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesEqualizebalanceV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesApplyaccdisttemplateV1Post(
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

    it('should call distOrderLinesSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesSetlinetotalsV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESSL_DETAILSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESSL_DETAILSV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESSL_DETAILSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIST_ORDER_LINESSL_DETAILSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIST_ORDER_LINESSL_DETAILSByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAddserilotsV1(
        1,
        1,
        'test',
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAddserilotsV1(
        1,
        1,
        'test',
        1,
        'test',
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAddserilotsV1Post(
        1,
        'test',
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAddserilotsV1Post(
        1,
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

    it('should call distOrderLinesslDetailsGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsGetstocklinepriceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsGetstocklinepriceV1Post(
        1,
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

    it('should call distOrderLinesslDetailsAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAppendserilotsV1(
        1,
        1,
        'test',
        1,
        1,
        'test',
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAppendserilotsV1(
        1,
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

    it('should call distOrderLinesslDetailsAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAppendserilotsV1Post(
        1,
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsAppendserilotsV1Post(
        1,
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

    it('should call distOrderLinesslDetailsEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/distributionOrders/1/DIST_ORDER_LINES/1/SL_DETAILS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/distributionOrders/DIST_ORDER_LINES/1/SL_DETAILS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call distOrderLinesslDetailsEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['FICHE_NO', 'DATE'] as DistributionOrdersField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.distOrderLinesslDetailsEqualizebalanceV1Post(
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
  });
});
