import { ItemSlipsClient } from './client';
import { ItemSlips, ItemSlipsField, ItemSlipsSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('ItemSlipsClient', () => {
  let client: ItemSlipsClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new ItemSlipsClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all itemSlips', async () => {
      const mockResponse = {
        items: [
          {
            INTERNAL_REFERENCE: 1,
            TYPE: 0,
            STATUS: 1,
          },
        ],
        totalCount: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockResponse);

      const result = await client.getAll();

      expect(client['request']).toHaveBeenCalledWith('get', '/itemSlips');
      expect(result).toEqual(mockResponse);
    });

    it('should get all itemSlips with options', async () => {
      const options = { limit: 10, offset: 0, sort: ['GROUP'] as ItemSlipsSortSpec };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/itemSlips?limit=10&offset=0&sort=GROUP'
      );
    });

    it('should get itemSlips by ID', async () => {
      const mockItemSlips: ItemSlips = {
        INTERNAL_REFERENCE: 1,
        TYPE: 0,
        STATUS: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockItemSlips);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/itemSlips/1');
      expect(result).toEqual(mockItemSlips);
    });

    it('should get itemSlips by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', '/itemSlips/1?expandLevel=full');
    });

    it('should create an new itemSlips', async () => {
      const newItemSlips = {
        TYPE: 0,
        STATUS: 1,
      };
      const createdItemSlips: ItemSlips = { ...newItemSlips, INTERNAL_REFERENCE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdItemSlips);

      const result = await client.create(newItemSlips);

      expect(client['request']).toHaveBeenCalledWith('post', '/itemSlips', newItemSlips);
      expect(result).toEqual(createdItemSlips);
    });

    it('should update an itemSlips', async () => {
      const updateItemSlips = {
        INTERNAL_REFERENCE: 1,
        TYPE: 0,
        STATUS: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updateItemSlips);

      const result = await client.update(1, updateItemSlips);

      expect(client['request']).toHaveBeenCalledWith('put', '/itemSlips/1', updateItemSlips);
      expect(result).toEqual(updateItemSlips);
    });

    it('should patch an itemSlips', async () => {
      const patchData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith('patch', '/itemSlips/1', patchData);
      expect(result).toEqual({ success: true });
    });

    it('should delete an itemSlips', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/itemSlips/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search itemSlips', async () => {
      const criteria = { type: 1 };
      await client.search(criteria);

      expect(client.getAll).toHaveBeenCalled();
    });

    it('should search by AUXIL_CODE', async () => {
      await client.searchByAuxilCode('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "AUXIL_CODE like 'test*'" });
    });

    it('should search by EARCHIVEDETR_NAME', async () => {
      await client.searchByEarchivedetrName('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "EARCHIVEDETR_NAME like 'test*'" });
    });

    it('should search by EINVOICE_DESCRIPTION', async () => {
      await client.searchByEinvoiceDescription('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "EINVOICE_DESCRIPTION like 'test*'" });
    });

    it('should search by NUMBER', async () => {
      await client.searchBynumber('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: expect.any(String) });
    });

    it('should search by TYPE', async () => {
      await client.searchByType('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: expect.any(String) });
    });
  });

  describe('Analytics Methods', () => {
    it('should get itemSlips analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get itemSlips count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/itemSlips/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/itemSlips/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/itemSlips/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/itemSlips/checktrack');
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
      const apiError = new Error('API Error: ItemSlips not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow('API Error: ItemSlips not found');
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

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/ImportImage/test/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1Post('test', 'test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ImportBase64EncodedImage/test/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/FormSeriLotLines/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/ApplyCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/itemSlips/ApplyCampaign`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/ApplyRePayPln/1/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1Post(1, 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/ApplyRePayPlnForInv/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/ExportToXmlStr/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/ApplyCondition`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/itemSlips/ApplyCondition`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/ExportImage/test/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ExportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/ReCalculate`);
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/itemSlips/ReCalculate`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/FillAccCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/itemSlips/FillAccCodes`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/ApplyADiscount/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1Post('test', 1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/EqualizePayAmnt`);
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/EqualizePayAmnt`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/FillSMMACCCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/FillSMMACCCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/AttachADespatchByLRef/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/DeleteCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/itemSlips/DeleteCampaign`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/SetClientInfo`);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/itemSlips/SetClientInfo`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/GetRelevantCampaigns`);
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistApplyaccdisttemplateV1 with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistApplyaccdisttemplateV1('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEFNFLDSLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistApplyaccdisttemplateV1(
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

    it('should call defnfldslistApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistApplyaccdisttemplateV1Get(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEFNFLDSLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistApplyaccdisttemplateV1Get with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistApplyaccdisttemplateV1Get(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEFNFLDSLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistSetlinetotalsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEFNFLDSLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDEMANDPEGGINGSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEMANDPEGGINGSV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/DEMANDPEGGINGS`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDEMANDPEGGINGSV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEMANDPEGGINGSV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getDEMANDPEGGINGSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEMANDPEGGINGSByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/DEMANDPEGGINGS/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDEMANDPEGGINGSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEMANDPEGGINGSByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEMANDPEGGINGS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAppendline2V1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEMANDPEGGINGS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEMANDPEGGINGS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAddserilotsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAddserilotsV1Post(
        'test',
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEMANDPEGGINGS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAddserilotsV1Post(
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

    it('should call demandpeggingsGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEMANDPEGGINGS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsGetstocklinepriceV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEMANDPEGGINGS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEMANDPEGGINGS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAddline2V1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEMANDPEGGINGS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEMANDPEGGINGS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAppendserilotsV1(
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

    it('should call demandpeggingsAppendserilotsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEMANDPEGGINGS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsAppendserilotsV1Post(
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

    it('should call demandpeggingsEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEMANDPEGGINGS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsEqualizebalanceV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEMANDPEGGINGS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEMANDPEGGINGS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEMANDPEGGINGS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsApplyaccdisttemplateV1Post(
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

    it('should call demandpeggingsSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEMANDPEGGINGS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsSetlinetotalsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEMANDPEGGINGS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call demandpeggingsSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.demandpeggingsSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getLABEL_LISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLABEL_LISTV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/LABEL_LIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getLABEL_LISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLABEL_LISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getLABEL_LISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLABEL_LISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/LABEL_LIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getLABEL_LISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLABEL_LISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/LABEL_LIST/AppendLine2`);
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendline2V1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/LABEL_LIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/LABEL_LIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddserilotsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/LABEL_LIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAddserilotsV1Post(
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

    it('should call labelListGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/LABEL_LIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call labelListGetstocklinepriceV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/LABEL_LIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/LABEL_LIST/AddLine2/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddline2V1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/LABEL_LIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/LABEL_LIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendserilotsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAppendserilotsV1Post('test', 1, 1, 'test', 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/LABEL_LIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAppendserilotsV1Post(
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

    it('should call labelListEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/LABEL_LIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call labelListEqualizebalanceV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/LABEL_LIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/LABEL_LIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call labelListApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/LABEL_LIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListApplyaccdisttemplateV1Post(
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

    it('should call labelListSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/LABEL_LIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call labelListSetlinetotalsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/LABEL_LIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListSetlinetotalsV1Post(1, mockData, options);

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

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/ExportToXML/test/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/CreateCompositeLines`);
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/CreateCompositeLines`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1 with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1(
        1,
        1,
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1(
        1,
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

    it('should call transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1Get(
        1,
        1,
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1Get with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1Get(
        1,
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

    it('should call transactionsdetailsslDetailsqclistvallistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAddline2V1(
        1,
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAddline2V1(
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

    it('should call transactionsdetailsslDetailsqclistvallistAddline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAddline2V1Post(
        1,
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAddline2V1Post(
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

    it('should call transactionsdetailsslDetailsqclistvallistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAppendserilotsV1(
        1,
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
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAppendserilotsV1(
        1,
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

    it('should call transactionsdetailsslDetailsqclistvallistAppendserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAppendserilotsV1Post(
        1,
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAppendserilotsV1Post(
        1,
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

    it('should call transactionsdetailsslDetailsqclistvallistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistEqualizebalanceV1(
        1,
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistEqualizebalanceV1(
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

    it('should call transactionsdetailsslDetailsqclistvallistEqualizebalanceV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistEqualizebalanceV1Post(
        1,
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistEqualizebalanceV1Post(
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

    it('should call transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1(
        1,
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
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1(
        1,
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

    it('should call transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result =
        await client.transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1Post(
          1,
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result =
        await client.transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1Post(
          1,
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

    it('should call transactionsdetailsslDetailsqclistvallistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistSetlinetotalsV1(
        1,
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistSetlinetotalsV1(
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

    it('should call transactionsdetailsslDetailsqclistvallistSetlinetotalsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistSetlinetotalsV1Post(
        1,
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistSetlinetotalsV1Post(
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

    it('should call getTRANSACTIONSDEFNFLDSLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDEFNFLDSLISTV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DEFNFLDSLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDEFNFLDSLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDEFNFLDSLISTV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDEFNFLDSLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDEFNFLDSLISTByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDEFNFLDSLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDEFNFLDSLISTByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DEFNFLDSLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAddserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAddserilotsV1(
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

    it('should call transactionsdefnfldslistAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAddserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/DEFNFLDSLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAddserilotsV1Post(
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

    it('should call transactionsdefnfldslistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistGetstocklinepriceV1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DEFNFLDSLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistGetstocklinepriceV1Post(
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

    it('should call transactionsdefnfldslistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DEFNFLDSLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAppendserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAppendserilotsV1(
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

    it('should call transactionsdefnfldslistAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAppendserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/DEFNFLDSLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAppendserilotsV1Post(
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

    it('should call transactionsdefnfldslistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DEFNFLDSLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistEqualizebalanceV1Post(
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

    it('should call transactionsdefnfldslistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistApplyaccdisttemplateV1(
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistApplyaccdisttemplateV1(
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

    it('should call transactionsdefnfldslistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistApplyaccdisttemplateV1Post(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DEFNFLDSLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistApplyaccdisttemplateV1Post(
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

    it('should call transactionsdefnfldslistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DEFNFLDSLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistSetlinetotalsV1Post(
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

    it('should call getDEFNFLDSLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNFLDSLISTV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/DEFNFLDSLIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNFLDSLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNFLDSLISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNFLDSLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNFLDSLISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/DEFNFLDSLIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNFLDSLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNFLDSLISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEFNFLDSLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendline2V1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEFNFLDSLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEFNFLDSLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddserilotsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEFNFLDSLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddserilotsV1Post(
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

    it('should call defnfldslistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEFNFLDSLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistGetstocklinepriceV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEFNFLDSLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/DEFNFLDSLIST/AddLine2/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddline2V1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEFNFLDSLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEFNFLDSLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendserilotsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEFNFLDSLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendserilotsV1Post(
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

    it('should call defnfldslistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/DEFNFLDSLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistEqualizebalanceV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/DEFNFLDSLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoApplyaccdisttemplateV1 with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoApplyaccdisttemplateV1(
        1,
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/FA_INFO/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoApplyaccdisttemplateV1(
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

    it('should call transactionsdetailsfaInfoApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoApplyaccdisttemplateV1Get(
        1,
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/FA_INFO/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoApplyaccdisttemplateV1Get with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoApplyaccdisttemplateV1Get(
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

    it('should call transactionsdetailsfaInfoSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoSetlinetotalsV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/FA_INFO/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoSetlinetotalsV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoSetlinetotalsV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/FA_INFO/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoSetlinetotalsV1Post(
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

    it('should call getTRANSACTIONSDETAILSSL_DETAILSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSSL_DETAILSV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSSL_DETAILSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSByIdV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSSL_DETAILSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSByIdV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAppendline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAppendline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAppendline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAppendline2V1Post(
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

    it('should call transactionsdetailsslDetailsAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAddserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAddserilotsV1(
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

    it('should call transactionsdetailsslDetailsAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAddserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAddserilotsV1Post(
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

    it('should call transactionsdetailsslDetailsGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsGetstocklinepriceV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsGetstocklinepriceV1(
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

    it('should call transactionsdetailsslDetailsGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsGetstocklinepriceV1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsGetstocklinepriceV1Post(
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

    it('should call transactionsdetailsslDetailsAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAddline2V1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAddline2V1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAddline2V1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAddline2V1Post(
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

    it('should call transactionsdetailsslDetailsAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAppendserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAppendserilotsV1(
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

    it('should call transactionsdetailsslDetailsAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAppendserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsAppendserilotsV1Post(
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

    it('should call transactionsdetailsslDetailsEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsEqualizebalanceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsEqualizebalanceV1(
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsEqualizebalanceV1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsEqualizebalanceV1Post(
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

    it('should call transactionsdetailsslDetailsApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsApplyaccdisttemplateV1(
        1,
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsApplyaccdisttemplateV1(
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

    it('should call transactionsdetailsslDetailsApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsApplyaccdisttemplateV1Post(
        1,
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsApplyaccdisttemplateV1Post(
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

    it('should call transactionsdetailsslDetailsSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsSetlinetotalsV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsSetlinetotalsV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsSetlinetotalsV1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsSetlinetotalsV1Post(
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

    it('should call getTRANSACTIONSDETAILSSL_DETAILSQCLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSQCLISTV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSSL_DETAILSQCLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSQCLISTV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSSL_DETAILSQCLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSQCLISTByIdV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSSL_DETAILSQCLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSQCLISTByIdV1(
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

    it('should call transactionsdetailsslDetailsqclistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAppendline2V1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAppendline2V1(
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAppendline2V1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAppendline2V1Post(
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

    it('should call transactionsdetailsslDetailsqclistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAddserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAddserilotsV1(
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

    it('should call transactionsdetailsslDetailsqclistAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAddserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAddserilotsV1Post(
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

    it('should call transactionsdetailsslDetailsqclistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistGetstocklinepriceV1(
        1,
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistGetstocklinepriceV1(
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

    it('should call transactionsdetailsslDetailsqclistGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistGetstocklinepriceV1Post(
        1,
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistGetstocklinepriceV1Post(
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

    it('should call transactionsdetailsslDetailsqclistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAddline2V1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAddline2V1(
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

    it('should call transactionsdetailsslDetailsqclistAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAddline2V1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAddline2V1Post(
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

    it('should call transactionsdetailsslDetailsqclistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAppendserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAppendserilotsV1(
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

    it('should call transactionsdetailsslDetailsqclistAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAppendserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistAppendserilotsV1Post(
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

    it('should call transactionsdetailsslDetailsqclistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistEqualizebalanceV1(
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistEqualizebalanceV1(
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

    it('should call transactionsdetailsslDetailsqclistEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistEqualizebalanceV1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistEqualizebalanceV1Post(
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

    it('should call transactionsdetailsslDetailsqclistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistApplyaccdisttemplateV1(
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
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistApplyaccdisttemplateV1(
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

    it('should call transactionsdetailsslDetailsqclistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistApplyaccdisttemplateV1Post(
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistApplyaccdisttemplateV1Post(
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

    it('should call transactionsdetailsslDetailsqclistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistSetlinetotalsV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistSetlinetotalsV1(
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

    it('should call transactionsdetailsslDetailsqclistSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistSetlinetotalsV1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistSetlinetotalsV1Post(
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

    it('should call getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTV1(
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

    it('should call getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTByIdV1(
        1,
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTByIdV1(
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

    it('should call transactionsdetailsslDetailsqclistvallistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAppendline2V1(
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAppendline2V1(
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

    it('should call transactionsdetailsslDetailsqclistvallistAppendline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAppendline2V1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAppendline2V1Post(
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

    it('should call transactionsdetailsslDetailsqclistvallistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAddserilotsV1(
        1,
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
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAddserilotsV1(
        1,
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

    it('should call transactionsdetailsslDetailsqclistvallistAddserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAddserilotsV1Post(
        1,
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsslDetailsqclistvallistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsslDetailsqclistvallistAddserilotsV1Post(
        1,
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

    it('should call transactionsslDetailsqclistvallistGetstocklinepriceV1 with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistGetstocklinepriceV1(
        1,
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistGetstocklinepriceV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistGetstocklinepriceV1(
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

    it('should call transactionsslDetailsqclistvallistGetstocklinepriceV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistGetstocklinepriceV1Get(
        1,
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistGetstocklinepriceV1Get with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistGetstocklinepriceV1Get(
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

    it('should call transactionsslDetailsqclistvallistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAddline2V1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAddline2V1(
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

    it('should call transactionsslDetailsqclistvallistAddline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAddline2V1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAddline2V1Post(
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

    it('should call transactionsslDetailsqclistvallistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAppendserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAppendserilotsV1(
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

    it('should call transactionsslDetailsqclistvallistAppendserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAppendserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAppendserilotsV1Post(
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

    it('should call transactionsslDetailsqclistvallistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistEqualizebalanceV1(
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistEqualizebalanceV1(
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

    it('should call transactionsslDetailsqclistvallistEqualizebalanceV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistEqualizebalanceV1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistEqualizebalanceV1Post(
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

    it('should call transactionsslDetailsqclistvallistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistApplyaccdisttemplateV1(
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
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistApplyaccdisttemplateV1(
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

    it('should call transactionsslDetailsqclistvallistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistApplyaccdisttemplateV1Post(
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
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistApplyaccdisttemplateV1Post(
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

    it('should call transactionsslDetailsqclistvallistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistSetlinetotalsV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistSetlinetotalsV1(
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

    it('should call transactionsslDetailsqclistvallistSetlinetotalsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistSetlinetotalsV1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistSetlinetotalsV1Post(
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

    it('should call getTRANSACTIONSDETAILSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/TRANSACTIONS/1/DETAILS`);
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAddserilotsV1(1, 1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAddserilotsV1(
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

    it('should call transactionsdetailsAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAddserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAddserilotsV1Post(
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

    it('should call transactionsdetailsGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsGetstocklinepriceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsGetstocklinepriceV1Post(
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

    it('should call transactionsdetailsAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAppendserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAppendserilotsV1(
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

    it('should call transactionsdetailsAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAppendserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAppendserilotsV1Post(
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

    it('should call transactionsdetailsEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsEqualizebalanceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsApplyaccdisttemplateV1(1, 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsApplyaccdisttemplateV1(
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

    it('should call transactionsdetailsApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsApplyaccdisttemplateV1Post(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsApplyaccdisttemplateV1Post(
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

    it('should call transactionsdetailsSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsSetlinetotalsV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSFA_INFOV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSFA_INFOV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/FA_INFO`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSFA_INFOV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSFA_INFOV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSFA_INFOByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSFA_INFOByIdV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/FA_INFO/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSFA_INFOByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDETAILSFA_INFOByIdV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAppendline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/FA_INFO/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAppendline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAppendline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/FA_INFO/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAppendline2V1Post(
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

    it('should call transactionsdetailsfaInfoAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAddserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/FA_INFO/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAddserilotsV1(
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

    it('should call transactionsdetailsfaInfoAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAddserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/FA_INFO/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAddserilotsV1Post(
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

    it('should call transactionsdetailsfaInfoGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoGetstocklinepriceV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/FA_INFO/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoGetstocklinepriceV1(
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

    it('should call transactionsdetailsfaInfoGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoGetstocklinepriceV1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/FA_INFO/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoGetstocklinepriceV1Post(
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

    it('should call transactionsdetailsfaInfoAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAddline2V1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/FA_INFO/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAddline2V1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAddline2V1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/FA_INFO/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAddline2V1Post(
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

    it('should call transactionsdetailsfaInfoAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAppendserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/FA_INFO/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAppendserilotsV1(
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

    it('should call transactionsdetailsfaInfoAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAppendserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/FA_INFO/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoAppendserilotsV1Post(
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

    it('should call transactionsdetailsfaInfoEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoEqualizebalanceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/DETAILS/1/FA_INFO/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoEqualizebalanceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoEqualizebalanceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/DETAILS/1/FA_INFO/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsfaInfoEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsfaInfoEqualizebalanceV1Post(
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

    it('should call transactionsfaInfoApplyaccdisttemplateV1 with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoApplyaccdisttemplateV1(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/FA_INFO/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoApplyaccdisttemplateV1(
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

    it('should call transactionsfaInfoApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoApplyaccdisttemplateV1Get(1, 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/FA_INFO/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoApplyaccdisttemplateV1Get with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoApplyaccdisttemplateV1Get(
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

    it('should call transactionsfaInfoSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/FA_INFO/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/FA_INFO/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoSetlinetotalsV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSSL_DETAILSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSSL_DETAILSV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSSL_DETAILSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSSL_DETAILSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAddserilotsV1(1, 1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAddserilotsV1(
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

    it('should call transactionsslDetailsAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAddserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAddserilotsV1Post(
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

    it('should call transactionsslDetailsGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsGetstocklinepriceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsGetstocklinepriceV1Post(
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

    it('should call transactionsslDetailsAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAppendserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAppendserilotsV1(
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

    it('should call transactionsslDetailsAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAppendserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsAppendserilotsV1Post(
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

    it('should call transactionsslDetailsEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsEqualizebalanceV1Post(
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

    it('should call transactionsslDetailsApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsApplyaccdisttemplateV1(1, 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsApplyaccdisttemplateV1(
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

    it('should call transactionsslDetailsApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsApplyaccdisttemplateV1Post(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsApplyaccdisttemplateV1Post(
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

    it('should call transactionsslDetailsSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsSetlinetotalsV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSSL_DETAILSQCLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSQCLISTV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSSL_DETAILSQCLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSQCLISTV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSSL_DETAILSQCLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSQCLISTByIdV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSSL_DETAILSQCLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSQCLISTByIdV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAppendline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAppendline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAppendline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAppendline2V1Post(
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

    it('should call transactionsslDetailsqclistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAddserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAddserilotsV1(
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

    it('should call transactionsslDetailsqclistAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAddserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAddserilotsV1Post(
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

    it('should call transactionsslDetailsqclistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistGetstocklinepriceV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistGetstocklinepriceV1(
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

    it('should call transactionsslDetailsqclistGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistGetstocklinepriceV1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistGetstocklinepriceV1Post(
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

    it('should call transactionsslDetailsqclistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAddline2V1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAddline2V1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAddline2V1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAddline2V1Post(
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

    it('should call transactionsslDetailsqclistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAppendserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAppendserilotsV1(
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

    it('should call transactionsslDetailsqclistAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAppendserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistAppendserilotsV1Post(
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

    it('should call transactionsslDetailsqclistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistEqualizebalanceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistEqualizebalanceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistEqualizebalanceV1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistEqualizebalanceV1Post(
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

    it('should call transactionsslDetailsqclistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistApplyaccdisttemplateV1(
        1,
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistApplyaccdisttemplateV1(
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

    it('should call transactionsslDetailsqclistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistApplyaccdisttemplateV1Post(
        1,
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistApplyaccdisttemplateV1Post(
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

    it('should call transactionsslDetailsqclistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistSetlinetotalsV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistSetlinetotalsV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistSetlinetotalsV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistSetlinetotalsV1Post(
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

    it('should call getTRANSACTIONSSL_DETAILSQCLISTVALLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSQCLISTVALLISTV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSSL_DETAILSQCLISTVALLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSQCLISTVALLISTV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSSL_DETAILSQCLISTVALLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSQCLISTVALLISTByIdV1(1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSSL_DETAILSQCLISTVALLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSSL_DETAILSQCLISTVALLISTByIdV1(
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

    it('should call transactionsslDetailsqclistvallistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAppendline2V1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAppendline2V1(
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistAppendline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAppendline2V1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAppendline2V1Post(
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

    it('should call transactionsslDetailsqclistvallistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAddserilotsV1(
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
        `/itemSlips/1/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAddserilotsV1(
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

    it('should call transactionsslDetailsqclistvallistAddserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        QCREF: 1,
        VALREF: 1,
        VALCODE: 'TEST_VAL',
        VALNAME: 'Test Value',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAddserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/SL_DETAILS/1/QCLIST/1/VALLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsslDetailsqclistvallistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsslDetailsqclistvallistAddserilotsV1Post(
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

    it('should call postReadWithBodyParametersV1 with data', async () => {
      const mockData = { fields: 'CODE,TITLE', expand: 'full' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadWithBodyParametersV1(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
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
        `/itemSlips/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadByIdWithBodyParametersV1(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/TRANSACTIONS`);
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/TRANSACTIONS/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendline2V1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddserilotsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddserilotsV1Post(
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

    it('should call transactionsGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsGetstocklinepriceV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/TRANSACTIONS/AddLine2/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddline2V1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendserilotsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendserilotsV1Post(
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

    it('should call transactionsEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsEqualizebalanceV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsApplyaccdisttemplateV1Post(
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

    it('should call transactionsSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsSetlinetotalsV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSFA_INFOV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSFA_INFOV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/itemSlips/1/TRANSACTIONS/1/FA_INFO`);
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSFA_INFOV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSFA_INFOV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSFA_INFOByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSFA_INFOByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/FA_INFO/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSFA_INFOByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSFA_INFOByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/FA_INFO/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/FA_INFO/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAddserilotsV1(1, 1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/FA_INFO/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAddserilotsV1(
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

    it('should call transactionsfaInfoAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAddserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/FA_INFO/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAddserilotsV1Post(
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

    it('should call transactionsfaInfoGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/FA_INFO/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoGetstocklinepriceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/FA_INFO/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoGetstocklinepriceV1Post(
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

    it('should call transactionsfaInfoAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/FA_INFO/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/FA_INFO/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAppendserilotsV1(1, 1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/FA_INFO/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAppendserilotsV1(
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

    it('should call transactionsfaInfoAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAppendserilotsV1Post(
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
        `/itemSlips/TRANSACTIONS/1/FA_INFO/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoAppendserilotsV1Post(
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

    it('should call transactionsfaInfoEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/itemSlips/1/TRANSACTIONS/1/FA_INFO/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/itemSlips/TRANSACTIONS/1/FA_INFO/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsfaInfoEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['GROUP', 'TYPE'] as ItemSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsfaInfoEqualizebalanceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });
  });
});
