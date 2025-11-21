import { InwardProcessingPermitsClient } from './client';
import {
  InwardProcessingPermits,
  InwardProcessingPermitsField,
  InwardProcessingPermitsSortSpec,
} from './types';
import { ApiClientConfig } from '../../types';

describe('InwardProcessingPermitsClient', () => {
  let client: InwardProcessingPermitsClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new InwardProcessingPermitsClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all inwardProcessingPermits', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/inwardProcessingPermits');
      expect(result).toEqual(mockResponse);
    });

    it('should get all inwardProcessingPermits with options', async () => {
      const options = {
        limit: 10,
        offset: 0,
        sort: ['FICHENO'] as InwardProcessingPermitsSortSpec,
      };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/inwardProcessingPermits?limit=10&offset=0&sort=FICHENO'
      );
    });

    it('should get inwardProcessingPermits by ID', async () => {
      const mockInwardProcessingPermits: InwardProcessingPermits = {
        INTERNAL_REFERENCE: 1,
        STATUS: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockInwardProcessingPermits);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/inwardProcessingPermits/1');
      expect(result).toEqual(mockInwardProcessingPermits);
    });

    it('should get inwardProcessingPermits by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/inwardProcessingPermits/1?expandLevel=full'
      );
    });

    it('should create an new inwardProcessingPermits', async () => {
      const newInwardProcessingPermits = {
        STATUS: 1,
      };
      const createdInwardProcessingPermits: InwardProcessingPermits = {
        ...newInwardProcessingPermits,
        INTERNAL_REFERENCE: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdInwardProcessingPermits);

      const result = await client.create(newInwardProcessingPermits);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        '/inwardProcessingPermits',
        newInwardProcessingPermits
      );
      expect(result).toEqual(createdInwardProcessingPermits);
    });

    it('should update an inwardProcessingPermits', async () => {
      const updateInwardProcessingPermits = {
        INTERNAL_REFERENCE: 1,
        STATUS: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updateInwardProcessingPermits);

      const result = await client.update(1, updateInwardProcessingPermits);

      expect(client['request']).toHaveBeenCalledWith(
        'put',
        '/inwardProcessingPermits/1',
        updateInwardProcessingPermits
      );
      expect(result).toEqual(updateInwardProcessingPermits);
    });

    it('should patch an inwardProcessingPermits', async () => {
      const patchData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith(
        'patch',
        '/inwardProcessingPermits/1',
        patchData
      );
      expect(result).toEqual({ success: true });
    });

    it('should delete an inwardProcessingPermits', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/inwardProcessingPermits/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search inwardProcessingPermits', async () => {
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
    it('should get inwardProcessingPermits analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get inwardProcessingPermits count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/inwardProcessingPermits/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/inwardProcessingPermits/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/inwardProcessingPermits/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/inwardProcessingPermits/checktrack');
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
      const apiError = new Error('API Error: InwardProcessingPermits not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow(
        'API Error: InwardProcessingPermits not found'
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
        `/inwardProcessingPermits/1/ImportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ImportBase64EncodedImage/test/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/FormSeriLotLines/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ApplyCampaign`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ApplyCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ApplyRePayPln/1/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ApplyRePayPlnForInv/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ExportToXmlStr/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ApplyCondition`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ApplyCondition`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ExportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ExportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ReCalculate`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ReCalculate`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/FillAccCodes`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/FillAccCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ApplyADiscount/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EqualizePayAmnt`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EqualizePayAmnt`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/FillSMMACCCodes`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/FillSMMACCCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/AttachADespatchByLRef/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/DeleteCampaign`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/DeleteCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/SetClientInfo`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/SetClientInfo`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/GetRelevantCampaigns`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesApplyaccdisttemplateV1 with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesApplyaccdisttemplateV1(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/1/BOM_LINES/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesApplyaccdisttemplateV1(
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

    it('should call importLinesbomLinesApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesApplyaccdisttemplateV1Get(1, 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/1/BOM_LINES/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesApplyaccdisttemplateV1Get with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesApplyaccdisttemplateV1Get(
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

    it('should call importLinesbomLinesSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/1/BOM_LINES/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesSetlinetotalsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/1/BOM_LINES/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesSetlinetotalsV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getEXPORT_LINESV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getEXPORT_LINESV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getEXPORT_LINESV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getEXPORT_LINESV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getEXPORT_LINESByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getEXPORT_LINESByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getEXPORT_LINESByIdV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getEXPORT_LINESByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAppendline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAppendline2V1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAddserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAddserilotsV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAddserilotsV1Post(
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

    it('should call exportLinesGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesGetstocklinepriceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesGetstocklinepriceV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAddline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAddline2V1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAppendserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAppendserilotsV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesAppendserilotsV1Post(
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

    it('should call exportLinesEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesEqualizebalanceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesEqualizebalanceV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesApplyaccdisttemplateV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesApplyaccdisttemplateV1Post(
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

    it('should call exportLinesSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesSetlinetotalsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesSetlinetotalsV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getEXPORT_LINESBOM_LINESV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getEXPORT_LINESBOM_LINESV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/1/BOM_LINES`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getEXPORT_LINESBOM_LINESV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getEXPORT_LINESBOM_LINESV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getEXPORT_LINESBOM_LINESByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getEXPORT_LINESBOM_LINESByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/1/BOM_LINES/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getEXPORT_LINESBOM_LINESByIdV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getEXPORT_LINESBOM_LINESByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/1/BOM_LINES/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAppendline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/1/BOM_LINES/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAddserilotsV1(1, 1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/1/BOM_LINES/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAddserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAddserilotsV1(
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

    it('should call exportLinesbomLinesAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAddserilotsV1Post(
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
        `/inwardProcessingPermits/EXPORT_LINES/1/BOM_LINES/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAddserilotsV1Post(
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

    it('should call exportLinesbomLinesGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/1/BOM_LINES/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesGetstocklinepriceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesGetstocklinepriceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/1/BOM_LINES/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesGetstocklinepriceV1Post(
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

    it('should call exportLinesbomLinesAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/1/BOM_LINES/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAddline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/1/BOM_LINES/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAppendserilotsV1(
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
        `/inwardProcessingPermits/1/EXPORT_LINES/1/BOM_LINES/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAppendserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAppendserilotsV1(
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

    it('should call exportLinesbomLinesAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAppendserilotsV1Post(
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
        `/inwardProcessingPermits/EXPORT_LINES/1/BOM_LINES/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesAppendserilotsV1Post(
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

    it('should call exportLinesbomLinesEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/1/BOM_LINES/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesEqualizebalanceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/1/BOM_LINES/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesEqualizebalanceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesApplyaccdisttemplateV1(1, 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/1/BOM_LINES/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesApplyaccdisttemplateV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesApplyaccdisttemplateV1(
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

    it('should call exportLinesbomLinesApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesApplyaccdisttemplateV1Post(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/1/BOM_LINES/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesApplyaccdisttemplateV1Post(
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

    it('should call exportLinesbomLinesSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/EXPORT_LINES/1/BOM_LINES/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesSetlinetotalsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/EXPORT_LINES/1/BOM_LINES/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportLinesbomLinesSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportLinesbomLinesSetlinetotalsV1Post(1, 1, mockData, options);

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
        `/inwardProcessingPermits/1/ExportToXML/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/CreateCompositeLines`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
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
        `/inwardProcessingPermits/CreateCompositeLines`,
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
        `/inwardProcessingPermits/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
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
        `/inwardProcessingPermits/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
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

    it('should call getIMPORT_LINESV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getIMPORT_LINESV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getIMPORT_LINESV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getIMPORT_LINESV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getIMPORT_LINESByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getIMPORT_LINESByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getIMPORT_LINESByIdV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getIMPORT_LINESByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAppendline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAppendline2V1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAddserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAddserilotsV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAddserilotsV1Post(
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

    it('should call importLinesGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesGetstocklinepriceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesGetstocklinepriceV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAddline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAddline2V1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAppendserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAppendserilotsV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesAppendserilotsV1Post(
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

    it('should call importLinesEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesEqualizebalanceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesEqualizebalanceV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesApplyaccdisttemplateV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesApplyaccdisttemplateV1Post(
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

    it('should call importLinesSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesSetlinetotalsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesSetlinetotalsV1Post with data', async () => {
      const mockData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getIMPORT_LINESBOM_LINESV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getIMPORT_LINESBOM_LINESV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/1/BOM_LINES`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getIMPORT_LINESBOM_LINESV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getIMPORT_LINESBOM_LINESV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getIMPORT_LINESBOM_LINESByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getIMPORT_LINESBOM_LINESByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/1/BOM_LINES/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getIMPORT_LINESBOM_LINESByIdV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getIMPORT_LINESBOM_LINESByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/1/BOM_LINES/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAppendline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/1/BOM_LINES/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAddserilotsV1(1, 1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/1/BOM_LINES/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAddserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAddserilotsV1(
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

    it('should call importLinesbomLinesAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAddserilotsV1Post(
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
        `/inwardProcessingPermits/IMPORT_LINES/1/BOM_LINES/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAddserilotsV1Post(
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

    it('should call importLinesbomLinesGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/1/BOM_LINES/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesGetstocklinepriceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesGetstocklinepriceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/1/BOM_LINES/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesGetstocklinepriceV1Post(
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

    it('should call importLinesbomLinesAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/1/BOM_LINES/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAddline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/1/BOM_LINES/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAppendserilotsV1(
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
        `/inwardProcessingPermits/1/IMPORT_LINES/1/BOM_LINES/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAppendserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAppendserilotsV1(
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

    it('should call importLinesbomLinesAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAppendserilotsV1Post(
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
        `/inwardProcessingPermits/IMPORT_LINES/1/BOM_LINES/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesAppendserilotsV1Post(
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

    it('should call importLinesbomLinesEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/inwardProcessingPermits/1/IMPORT_LINES/1/BOM_LINES/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesEqualizebalanceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/inwardProcessingPermits/IMPORT_LINES/1/BOM_LINES/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importLinesbomLinesEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['FICHENO', 'BEGDATE'] as InwardProcessingPermitsField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importLinesbomLinesEqualizebalanceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });
  });
});
