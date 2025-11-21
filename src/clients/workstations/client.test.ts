import { WorkstationsClient } from './client';
import { Workstations, WorkstationsField, WorkstationsSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('WorkstationsClient', () => {
  let client: WorkstationsClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new WorkstationsClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all workstations', async () => {
      const mockResponse = {
        items: [
          {
            INTERNAL_REFERENCE: 1,
            CODE: 'Test CODE',
            NAME: 'Test NAME',
            TYPE: 0,
          },
        ],
        totalCount: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockResponse);

      const result = await client.getAll();

      expect(client['request']).toHaveBeenCalledWith('get', '/workstations');
      expect(result).toEqual(mockResponse);
    });

    it('should get all workstations with options', async () => {
      const options = { limit: 10, offset: 0, sort: ['CODE'] as WorkstationsSortSpec };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/workstations?limit=10&offset=0&sort=CODE'
      );
    });

    it('should get workstations by ID', async () => {
      const mockWorkstations: Workstations = {
        INTERNAL_REFERENCE: 1,
        CODE: 'Test CODE',
        NAME: 'Test NAME',
        TYPE: 0,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockWorkstations);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/workstations/1');
      expect(result).toEqual(mockWorkstations);
    });

    it('should get workstations by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', '/workstations/1?expandLevel=full');
    });

    it('should create a new workstations', async () => {
      const newWorkstations = {
        CODE: 'Test CODE',
        NAME: 'Test NAME',
        TYPE: 0,
      };
      const createdWorkstations: Workstations = { ...newWorkstations, INTERNAL_REFERENCE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdWorkstations);

      const result = await client.create(newWorkstations);

      expect(client['request']).toHaveBeenCalledWith('post', '/workstations', newWorkstations);
      expect(result).toEqual(createdWorkstations);
    });

    it('should update a workstations', async () => {
      const updateWorkstations = {
        INTERNAL_REFERENCE: 1,
        CODE: 'Test CODE',
        NAME: 'Test NAME',
        TYPE: 0,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updateWorkstations);

      const result = await client.update(1, updateWorkstations);

      expect(client['request']).toHaveBeenCalledWith('put', '/workstations/1', updateWorkstations);
      expect(result).toEqual(updateWorkstations);
    });

    it('should patch a workstations', async () => {
      const patchData = { CODE: 'Updated' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith('patch', '/workstations/1', patchData);
      expect(result).toEqual({ success: true });
    });

    it('should delete a workstations', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/workstations/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search workstations', async () => {
      const criteria = { code: 'test' };
      await client.search(criteria);

      expect(client.getAll).toHaveBeenCalled();
    });

    it('should search by CODE', async () => {
      await client.searchByCode('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "CODE like 'test*'" });
    });

    it('should search by NAME', async () => {
      await client.searchByName('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "NAME like 'test*'" });
    });

    it('should search by TYPE', async () => {
      await client.searchByType('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: expect.any(String) });
    });
  });

  describe('Analytics Methods', () => {
    it('should get workstations analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get workstations count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/workstations/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/workstations/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/workstations/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/workstations/checktrack');
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
      const apiError = new Error('API Error: Workstations not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow('API Error: Workstations not found');
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
        `/workstations/1/ImportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1Post('test', 'test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ImportBase64EncodedImage/test/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/FormSeriLotLines/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/ApplyCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ApplyCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/ApplyRePayPln/1/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1Post(1, 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/ApplyRePayPlnForInv/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/ExportToXmlStr/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/ApplyCondition`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ApplyCondition`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/ExportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ExportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/ReCalculate`);
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/workstations/ReCalculate`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/FillAccCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/FillAccCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/ApplyADiscount/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1Post('test', 1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/EqualizePayAmnt`);
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/EqualizePayAmnt`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/FillSMMACCCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/FillSMMACCCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/AttachADespatchByLRef/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/DeleteCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/DeleteCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/SetClientInfo`);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/SetClientInfo`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/GetRelevantCampaigns`);
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesApplyaccdisttemplateV1 with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesApplyaccdisttemplateV1(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/1/VALUES/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesApplyaccdisttemplateV1(
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

    it('should call characteristicsvaluesApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesApplyaccdisttemplateV1Get(
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/1/VALUES/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesApplyaccdisttemplateV1Get with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesApplyaccdisttemplateV1Get(
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

    it('should call characteristicsvaluesSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/1/VALUES/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/1/VALUES/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesSetlinetotalsV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getSTOP_CAUSESV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getSTOP_CAUSESV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/STOP_CAUSES`);
      expect(result).toEqual({ success: true });
    });

    it('should call getSTOP_CAUSESV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getSTOP_CAUSESV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getSTOP_CAUSESByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getSTOP_CAUSESByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/STOP_CAUSES/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getSTOP_CAUSESByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getSTOP_CAUSESByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/STOP_CAUSES/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/STOP_CAUSES/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/STOP_CAUSES/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/STOP_CAUSES/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAddserilotsV1Post(
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

    it('should call stopCausesGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/STOP_CAUSES/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/STOP_CAUSES/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/STOP_CAUSES/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/STOP_CAUSES/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/STOP_CAUSES/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAppendserilotsV1Post('test', 1, 1, 'test', 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/STOP_CAUSES/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesAppendserilotsV1Post(
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

    it('should call stopCausesEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/STOP_CAUSES/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/STOP_CAUSES/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/STOP_CAUSES/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/STOP_CAUSES/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesApplyaccdisttemplateV1Post(
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

    it('should call stopCausesSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/STOP_CAUSES/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/STOP_CAUSES/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call stopCausesSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.stopCausesSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getMOLDREQLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getMOLDREQLISTV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/MOLDREQLIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getMOLDREQLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getMOLDREQLISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getMOLDREQLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getMOLDREQLISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/MOLDREQLIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getMOLDREQLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getMOLDREQLISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/MOLDREQLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/MOLDREQLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/MOLDREQLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/MOLDREQLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAddserilotsV1Post(
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

    it('should call moldreqlistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/MOLDREQLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/MOLDREQLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/MOLDREQLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/MOLDREQLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/MOLDREQLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/MOLDREQLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistAppendserilotsV1Post(
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

    it('should call moldreqlistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/MOLDREQLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/MOLDREQLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/MOLDREQLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/MOLDREQLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistApplyaccdisttemplateV1Post(
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

    it('should call moldreqlistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/MOLDREQLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/MOLDREQLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call moldreqlistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.moldreqlistSetlinetotalsV1Post(1, mockData, options);

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
        `/workstations/1/ExportToXML/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/CreateCompositeLines`);
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CreateCompositeLines`,
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
        `/workstations/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
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
        `/workstations/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadByIdWithBodyParametersV1(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getCHARACTERISTICSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCHARACTERISTICSV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/CHARACTERISTICS`);
      expect(result).toEqual({ success: true });
    });

    it('should call getCHARACTERISTICSV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCHARACTERISTICSV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getCHARACTERISTICSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCHARACTERISTICSByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/workstations/1/CHARACTERISTICS/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getCHARACTERISTICSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCHARACTERISTICSByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAddserilotsV1Post(
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

    it('should call characteristicsGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAppendserilotsV1(
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

    it('should call characteristicsAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsAppendserilotsV1Post(
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

    it('should call characteristicsEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsApplyaccdisttemplateV1Post(
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

    it('should call characteristicsSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getCHARACTERISTICSVALUESV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCHARACTERISTICSVALUESV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/1/VALUES`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getCHARACTERISTICSVALUESV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCHARACTERISTICSVALUESV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getCHARACTERISTICSVALUESByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCHARACTERISTICSVALUESByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/1/VALUES/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getCHARACTERISTICSVALUESByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCHARACTERISTICSVALUESByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/1/VALUES/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/1/VALUES/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAddserilotsV1(1, 1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/1/VALUES/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAddserilotsV1(
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

    it('should call characteristicsvaluesAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAddserilotsV1Post(
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
        `/workstations/CHARACTERISTICS/1/VALUES/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAddserilotsV1Post(
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

    it('should call characteristicsvaluesGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/1/VALUES/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesGetstocklinepriceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/1/VALUES/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesGetstocklinepriceV1Post(
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

    it('should call characteristicsvaluesAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/1/VALUES/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/1/VALUES/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAppendserilotsV1(
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
        `/workstations/1/CHARACTERISTICS/1/VALUES/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAppendserilotsV1(
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

    it('should call characteristicsvaluesAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAppendserilotsV1Post(
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
        `/workstations/CHARACTERISTICS/1/VALUES/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesAppendserilotsV1Post(
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

    it('should call characteristicsvaluesEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/workstations/1/CHARACTERISTICS/1/VALUES/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/workstations/CHARACTERISTICS/1/VALUES/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call characteristicsvaluesEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as WorkstationsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.characteristicsvaluesEqualizebalanceV1Post(
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
