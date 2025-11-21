import { ProductionResourceUtilizationClient } from './client';
import {
  ProductionResourceUtilization,
  ProductionResourceUtilizationField,
  ProductionResourceUtilizationSortSpec,
} from './types';
import { ApiClientConfig } from '../../types';

describe('ProductionResourceUtilizationClient', () => {
  let client: ProductionResourceUtilizationClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new ProductionResourceUtilizationClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all productionResourceUtilization', async () => {
      const mockResponse = {
        items: [
          {
            INTERNAL_REFERENCE: 1,
            DINFO_PRODORDREF: 1,
          },
        ],
        totalCount: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockResponse);

      const result = await client.getAll();

      expect(client['request']).toHaveBeenCalledWith('get', '/productionResourceUtilization');
      expect(result).toEqual(mockResponse);
    });

    it('should get all productionResourceUtilization with options', async () => {
      const options = {
        limit: 10,
        offset: 0,
        sort: ['DINFO_PRODORDREF'] as ProductionResourceUtilizationSortSpec,
      };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/productionResourceUtilization?limit=10&offset=0&sort=DINFO_PRODORDREF'
      );
    });

    it('should get productionResourceUtilization by ID', async () => {
      const mockProductionResourceUtilization: ProductionResourceUtilization = {
        INTERNAL_REFERENCE: 1,
        DINFO_PRODORDREF: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockProductionResourceUtilization);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/productionResourceUtilization/1');
      expect(result).toEqual(mockProductionResourceUtilization);
    });

    it('should get productionResourceUtilization by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/productionResourceUtilization/1?expandLevel=full'
      );
    });

    it('should create a new productionResourceUtilization', async () => {
      const newProductionResourceUtilization = {};
      const createdProductionResourceUtilization: ProductionResourceUtilization = {
        ...newProductionResourceUtilization,
        INTERNAL_REFERENCE: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdProductionResourceUtilization);

      const result = await client.create(newProductionResourceUtilization);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        '/productionResourceUtilization',
        newProductionResourceUtilization
      );
      expect(result).toEqual(createdProductionResourceUtilization);
    });

    it('should update a productionResourceUtilization', async () => {
      const updateProductionResourceUtilization = {
        INTERNAL_REFERENCE: 1,
        DINFO_PRODORDREF: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updateProductionResourceUtilization);

      const result = await client.update(1, updateProductionResourceUtilization);

      expect(client['request']).toHaveBeenCalledWith(
        'put',
        '/productionResourceUtilization/1',
        updateProductionResourceUtilization
      );
      expect(result).toEqual(updateProductionResourceUtilization);
    });

    it('should patch a productionResourceUtilization', async () => {
      const patchData = { DINFO_PRODORDREF: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith(
        'patch',
        '/productionResourceUtilization/1',
        patchData
      );
      expect(result).toEqual({ success: true });
    });

    it('should delete a productionResourceUtilization', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/productionResourceUtilization/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search productionResourceUtilization', async () => {
      const criteria = { dinfoProdordref: 1 };
      await client.search(criteria);

      expect(client.getAll).toHaveBeenCalled();
    });

    it('should search by RESOURCE_CODE', async () => {
      await client.searchByResourceCode('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "RESOURCE_CODE like 'test*'" });
    });

    it('should search by RESOURCE_NAME', async () => {
      await client.searchByResourceName('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "RESOURCE_NAME like 'test*'" });
    });

    it('should search by RESOURCE_TYPE', async () => {
      await client.searchByResourceType('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: expect.any(String) });
    });
  });

  describe('Analytics Methods', () => {
    it('should get productionResourceUtilization analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get productionResourceUtilization count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/productionResourceUtilization/dbcolumns'
      );
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/productionResourceUtilization/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/productionResourceUtilization/untrack'
      );
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/productionResourceUtilization/checktrack'
      );
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
      const apiError = new Error('API Error: ProductionResourceUtilization not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow(
        'API Error: ProductionResourceUtilization not found'
      );
    });

    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network Error: Connection timeout');
      jest.spyOn(client, 'request' as any).mockRejectedValue(networkError);

      await expect(client.getAll()).rejects.toThrow('Network Error: Connection timeout');
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call importImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ImportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1Post('test', 'test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ImportBase64EncodedImage/test/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/FormSeriLotLines/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ApplyCampaign`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ApplyCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ApplyRePayPln/1/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1Post(1, 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ApplyRePayPlnForInv/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ExportToXmlStr/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ApplyCondition`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ApplyCondition`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ExportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ExportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ReCalculate`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ReCalculate`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/FillAccCodes`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/FillAccCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ApplyADiscount/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1Post('test', 1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/EqualizePayAmnt`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/EqualizePayAmnt`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/FillSMMACCCodes`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/FillSMMACCCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/AttachADespatchByLRef/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/DeleteCampaign`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/DeleteCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/SetClientInfo`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/SetClientInfo`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/GetRelevantCampaigns`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistApplyaccdisttemplateV1 with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistApplyaccdisttemplateV1('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZACTLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistApplyaccdisttemplateV1('test', 1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistApplyaccdisttemplateV1Get(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZACTLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistApplyaccdisttemplateV1Get with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistApplyaccdisttemplateV1Get(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZACTLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistSetlinetotalsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistSetlinetotalsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZACTLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getACTLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getACTLISTV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ACTLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getACTLISTV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getACTLISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getACTLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getACTLISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ACTLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getACTLISTByIdV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getACTLISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ACTLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAppendline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAppendline2V1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ACTLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ACTLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAddserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAddserilotsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ACTLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAddserilotsV1Post(
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

    it('should call actlistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ACTLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistGetstocklinepriceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call actlistGetstocklinepriceV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ACTLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ACTLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAddline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAddline2V1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ACTLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ACTLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAppendserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAppendserilotsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAppendserilotsV1Post('test', 1, 1, 'test', 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ACTLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistAppendserilotsV1Post(
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

    it('should call actlistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ACTLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistEqualizebalanceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call actlistEqualizebalanceV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ACTLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ACTLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistApplyaccdisttemplateV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call actlistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ACTLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistApplyaccdisttemplateV1Post(
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

    it('should call actlistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ACTLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistSetlinetotalsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call actlistSetlinetotalsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ACTLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call actlistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.actlistSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getWIZPLNLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getWIZPLNLISTV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZPLNLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getWIZPLNLISTV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getWIZPLNLISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getWIZPLNLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getWIZPLNLISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZPLNLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getWIZPLNLISTByIdV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getWIZPLNLISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZPLNLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAppendline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAppendline2V1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZPLNLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZPLNLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAddserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAddserilotsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZPLNLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAddserilotsV1Post(
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

    it('should call wizplnlistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZPLNLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistGetstocklinepriceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistGetstocklinepriceV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZPLNLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZPLNLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAddline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAddline2V1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZPLNLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZPLNLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAppendserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAppendserilotsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAppendserilotsV1Post('test', 1, 1, 'test', 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZPLNLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistAppendserilotsV1Post(
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

    it('should call wizplnlistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZPLNLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistEqualizebalanceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistEqualizebalanceV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZPLNLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZPLNLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistApplyaccdisttemplateV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZPLNLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistApplyaccdisttemplateV1Post(
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

    it('should call wizplnlistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZPLNLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistSetlinetotalsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistSetlinetotalsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZPLNLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizplnlistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizplnlistSetlinetotalsV1Post(1, mockData, options);

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
        `/productionResourceUtilization/1/ExportToXML/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/CreateCompositeLines`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/CreateCompositeLines`,
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
        `/productionResourceUtilization/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
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
        `/productionResourceUtilization/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadByIdWithBodyParametersV1(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getPLNLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPLNLISTV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/PLNLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getPLNLISTV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPLNLISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getPLNLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPLNLISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/PLNLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getPLNLISTByIdV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPLNLISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/PLNLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAppendline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAppendline2V1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/PLNLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/PLNLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAddserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAddserilotsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/PLNLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAddserilotsV1Post(
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

    it('should call plnlistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/PLNLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistGetstocklinepriceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistGetstocklinepriceV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/PLNLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/PLNLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAddline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAddline2V1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/PLNLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/PLNLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAppendserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAppendserilotsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAppendserilotsV1Post('test', 1, 1, 'test', 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/PLNLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistAppendserilotsV1Post(
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

    it('should call plnlistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/PLNLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistEqualizebalanceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistEqualizebalanceV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/PLNLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/PLNLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistApplyaccdisttemplateV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/PLNLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistApplyaccdisttemplateV1Post(
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

    it('should call plnlistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/PLNLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistSetlinetotalsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistSetlinetotalsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/PLNLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call plnlistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.plnlistSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getWIZACTLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getWIZACTLISTV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZACTLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getWIZACTLISTV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getWIZACTLISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getWIZACTLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getWIZACTLISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZACTLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getWIZACTLISTByIdV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getWIZACTLISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZACTLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAppendline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAppendline2V1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZACTLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZACTLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAddserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAddserilotsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZACTLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAddserilotsV1Post(
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

    it('should call wizactlistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZACTLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistGetstocklinepriceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistGetstocklinepriceV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZACTLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZACTLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAddline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAddline2V1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZACTLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZACTLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAppendserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAppendserilotsV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAppendserilotsV1Post('test', 1, 1, 'test', 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZACTLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistAppendserilotsV1Post(
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

    it('should call wizactlistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productionResourceUtilization/1/WIZACTLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistEqualizebalanceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistEqualizebalanceV1Post with data', async () => {
      const mockData = { DINFO_PRODORDREF: 1, DINFO_BOMLEVEL: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productionResourceUtilization/WIZACTLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call wizactlistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['DINFO_PRODORDREF', 'DINFO_BOMLEVEL'] as ProductionResourceUtilizationField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.wizactlistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });
  });
});
