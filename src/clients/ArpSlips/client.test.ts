import { ArpSlipsClient } from './client';
import { ArpSlips, ArpSlipsField, ArpSlipsSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('ArpSlipsClient', () => {
  let client: ArpSlipsClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new ArpSlipsClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all arpSlips', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/ArpSlips');
      expect(result).toEqual(mockResponse);
    });

    it('should get all arpSlips with options', async () => {
      const options = { limit: 10, offset: 0, sort: ['NUMBER'] as ArpSlipsSortSpec };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/ArpSlips?limit=10&offset=0&sort=NUMBER'
      );
    });

    it('should get arpSlips by ID', async () => {
      const mockArpSlips: ArpSlips = {
        INTERNAL_REFERENCE: 1,
        TYPE: 0,
        STATUS: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockArpSlips);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/ArpSlips/1');
      expect(result).toEqual(mockArpSlips);
    });

    it('should get arpSlips by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', '/ArpSlips/1?expandLevel=full');
    });

    it('should create an new arpSlips', async () => {
      const newArpSlips = {
        TYPE: 0,
        STATUS: 1,
      };
      const createdArpSlips: ArpSlips = { ...newArpSlips, INTERNAL_REFERENCE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdArpSlips);

      const result = await client.create(newArpSlips);

      expect(client['request']).toHaveBeenCalledWith('post', '/ArpSlips', newArpSlips);
      expect(result).toEqual(createdArpSlips);
    });

    it('should update an arpSlips', async () => {
      const updateArpSlips = {
        INTERNAL_REFERENCE: 1,
        TYPE: 0,
        STATUS: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updateArpSlips);

      const result = await client.update(1, updateArpSlips);

      expect(client['request']).toHaveBeenCalledWith('put', '/ArpSlips/1', updateArpSlips);
      expect(result).toEqual(updateArpSlips);
    });

    it('should patch an arpSlips', async () => {
      const patchData = { STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith('patch', '/ArpSlips/1', patchData);
      expect(result).toEqual({ success: true });
    });

    it('should delete an arpSlips', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/ArpSlips/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search arpSlips', async () => {
      const criteria = { type: 1 };
      await client.search(criteria);

      expect(client.getAll).toHaveBeenCalled();
    });

    it('should search by AUXIL_CODE', async () => {
      await client.searchByAuxilCode('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "AUXIL_CODE like 'test*'" });
    });

    it('should search by ETRADE_NAME', async () => {
      await client.searchByEtradeName('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "ETRADE_NAME like 'test*'" });
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
    it('should get arpSlips analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get arpSlips count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/ArpSlips/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/ArpSlips/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/ArpSlips/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/ArpSlips/checktrack');
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
      const apiError = new Error('API Error: ArpSlips not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow('API Error: ArpSlips not found');
    });

    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network Error: Connection timeout');
      jest.spyOn(client, 'request' as any).mockRejectedValue(networkError);

      await expect(client.getAll()).rejects.toThrow('Network Error: Connection timeout');
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call deleteCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/DeleteCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/ArpSlips/DeleteCampaign`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/SetClientInfo`);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/ArpSlips/SetClientInfo`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/GetRelevantCampaigns`);
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/ImportImage/test/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ImportBase64EncodedImage/test/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListApplyaccdisttemplateV1 with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListApplyaccdisttemplateV1('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/LABEL_LIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListApplyaccdisttemplateV1('test', 1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListApplyaccdisttemplateV1Get(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/LABEL_LIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListApplyaccdisttemplateV1Get with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListApplyaccdisttemplateV1Get(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call labelListSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/LABEL_LIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/LABEL_LIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/ExportToXML/test/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/CreateCompositeLines`);
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/CreateCompositeLines`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/FormSeriLotLines/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/ApplyCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/ArpSlips/ApplyCampaign`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/ApplyRePayPln/1/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/ApplyRePayPlnForInv/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/ExportToXmlStr/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/ApplyCondition`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/ArpSlips/ApplyCondition`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/ExportImage/test/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ExportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/ReCalculate`);
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/ArpSlips/ReCalculate`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/FillAccCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/ArpSlips/FillAccCodes`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/ApplyADiscount/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/EqualizePayAmnt`);
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/ArpSlips/EqualizePayAmnt`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/FillSMMACCCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/ArpSlips/FillSMMACCCodes`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/AttachADespatchByLRef/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesGetstocklinepriceV1 with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesGetstocklinepriceV1(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PREACCLINES/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesGetstocklinepriceV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesGetstocklinepriceV1(
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

    it('should call transactionspreacclinesGetstocklinepriceV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesGetstocklinepriceV1Get(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PREACCLINES/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesGetstocklinepriceV1Get with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesGetstocklinepriceV1Get(
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PREACCLINES/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAddline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PREACCLINES/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAppendserilotsV1(
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
        `/ArpSlips/1/TRANSACTIONS/1/PREACCLINES/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAppendserilotsV1(
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

    it('should call transactionspreacclinesAppendserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAppendserilotsV1Post(
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
        `/ArpSlips/TRANSACTIONS/1/PREACCLINES/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAppendserilotsV1Post(
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

    it('should call transactionspreacclinesEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PREACCLINES/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesEqualizebalanceV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PREACCLINES/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesEqualizebalanceV1Post(
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

    it('should call transactionspreacclinesApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesApplyaccdisttemplateV1(1, 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PREACCLINES/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesApplyaccdisttemplateV1(
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

    it('should call transactionspreacclinesApplyaccdisttemplateV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesApplyaccdisttemplateV1Post(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PREACCLINES/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesApplyaccdisttemplateV1Post(
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

    it('should call transactionspreacclinesSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PREACCLINES/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesSetlinetotalsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PREACCLINES/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesSetlinetotalsV1Post(
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

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/DEFNFLDSLIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNFLDSLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNFLDSLISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNFLDSLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNFLDSLISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/DEFNFLDSLIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNFLDSLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNFLDSLISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/DEFNFLDSLIST/AppendLine2`);
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/DEFNFLDSLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/DEFNFLDSLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/DEFNFLDSLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/DEFNFLDSLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/DEFNFLDSLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/DEFNFLDSLIST/AddLine2/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/DEFNFLDSLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/DEFNFLDSLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/DEFNFLDSLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/DEFNFLDSLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/DEFNFLDSLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/DEFNFLDSLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { TYPE: 0, STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/DEFNFLDSLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistApplyaccdisttemplateV1Post(
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

    it('should call defnfldslistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/DEFNFLDSLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/DEFNFLDSLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistSetlinetotalsV1Post(1, mockData, options);

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

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/LABEL_LIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getLABEL_LISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLABEL_LISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getLABEL_LISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLABEL_LISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/LABEL_LIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getLABEL_LISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLABEL_LISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/LABEL_LIST/AppendLine2`);
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/LABEL_LIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/LABEL_LIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/LABEL_LIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/LABEL_LIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/LABEL_LIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/LABEL_LIST/AddLine2/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/LABEL_LIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/LABEL_LIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/LABEL_LIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/LABEL_LIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/LABEL_LIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call labelListEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.labelListEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListApplyaccdisttemplateV1 with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListApplyaccdisttemplateV1(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListApplyaccdisttemplateV1(
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

    it('should call transactionspaymentListApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListApplyaccdisttemplateV1Get(
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListApplyaccdisttemplateV1Get with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListApplyaccdisttemplateV1Get(
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

    it('should call transactionspaymentListSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListSetlinetotalsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListSetlinetotalsV1Post(
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

    it('should call getTRANSACTIONSPAYMENT_LISTDISCTRLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPAYMENT_LISTDISCTRLISTV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSPAYMENT_LISTDISCTRLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPAYMENT_LISTDISCTRLISTV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSPAYMENT_LISTDISCTRLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPAYMENT_LISTDISCTRLISTByIdV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSPAYMENT_LISTDISCTRLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPAYMENT_LISTDISCTRLISTByIdV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAppendline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAppendline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistAppendline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        CARDREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        SIGN: 1,
        TRCODE: 1,
        TOTAL: 100,
        PAID: 50,
        DAYS: 30,
        CANCELLED: 0,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAppendline2V1Post(
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAppendline2V1Post(
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

    it('should call transactionspaymentListdisctrlistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAddserilotsV1(
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
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAddserilotsV1(
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

    it('should call transactionspaymentListdisctrlistAddserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        CARDREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        SIGN: 1,
        TRCODE: 1,
        TOTAL: 100,
        PAID: 50,
        DAYS: 30,
        CANCELLED: 0,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAddserilotsV1Post(
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
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAddserilotsV1Post(
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

    it('should call transactionspaymentListdisctrlistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistGetstocklinepriceV1(
        1,
        1,
        1,
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistGetstocklinepriceV1(
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

    it('should call transactionspaymentListdisctrlistGetstocklinepriceV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        CARDREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        SIGN: 1,
        TRCODE: 1,
        TOTAL: 100,
        PAID: 50,
        DAYS: 30,
        CANCELLED: 0,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistGetstocklinepriceV1Post(
        1,
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistGetstocklinepriceV1Post(
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

    it('should call transactionspaymentListdisctrlistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAddline2V1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAddline2V1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistAddline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        CARDREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        SIGN: 1,
        TRCODE: 1,
        TOTAL: 100,
        PAID: 50,
        DAYS: 30,
        CANCELLED: 0,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAddline2V1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAddline2V1Post(
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

    it('should call transactionspaymentListdisctrlistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAppendserilotsV1(
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
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAppendserilotsV1(
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

    it('should call transactionspaymentListdisctrlistAppendserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        CARDREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        SIGN: 1,
        TRCODE: 1,
        TOTAL: 100,
        PAID: 50,
        DAYS: 30,
        CANCELLED: 0,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAppendserilotsV1Post(
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
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistAppendserilotsV1Post(
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

    it('should call transactionspaymentListdisctrlistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistEqualizebalanceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistEqualizebalanceV1(
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistEqualizebalanceV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        CARDREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        SIGN: 1,
        TRCODE: 1,
        TOTAL: 100,
        PAID: 50,
        DAYS: 30,
        CANCELLED: 0,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistEqualizebalanceV1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistEqualizebalanceV1Post(
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

    it('should call transactionspaymentListdisctrlistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistApplyaccdisttemplateV1(
        1,
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistApplyaccdisttemplateV1(
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

    it('should call transactionspaymentListdisctrlistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        CARDREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        SIGN: 1,
        TRCODE: 1,
        TOTAL: 100,
        PAID: 50,
        DAYS: 30,
        CANCELLED: 0,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistApplyaccdisttemplateV1Post(
        1,
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistApplyaccdisttemplateV1Post(
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

    it('should call transactionspaymentListdisctrlistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistSetlinetotalsV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistSetlinetotalsV1(
        1,
        1,
        1,
        1,
        options
      );

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistSetlinetotalsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        CARDREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        SIGN: 1,
        TRCODE: 1,
        TOTAL: 100,
        PAID: 50,
        DAYS: 30,
        CANCELLED: 0,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistSetlinetotalsV1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/1/DISCTRLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListdisctrlistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListdisctrlistSetlinetotalsV1Post(
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
        `/ArpSlips/1/TRANSACTIONS/1/DEFNFLDSLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDEFNFLDSLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDEFNFLDSLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/DEFNFLDSLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
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
        `/ArpSlips/TRANSACTIONS/1/DEFNFLDSLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistGetstocklinepriceV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistGetstocklinepriceV1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/DEFNFLDSLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAddline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/DEFNFLDSLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
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
        `/ArpSlips/TRANSACTIONS/1/DEFNFLDSLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistEqualizebalanceV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/DEFNFLDSLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
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
        `/ArpSlips/TRANSACTIONS/1/DEFNFLDSLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/1/DEFNFLDSLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistSetlinetotalsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldslistSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/DEFNFLDSLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldslistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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

    it('should call getTRANSACTIONSPREACCLINESV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPREACCLINESV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PREACCLINES`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSPREACCLINESV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPREACCLINESV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSPREACCLINESByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPREACCLINESByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PREACCLINES/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSPREACCLINESByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPREACCLINESByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PREACCLINES/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAppendline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PREACCLINES/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAddserilotsV1(
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
        `/ArpSlips/1/TRANSACTIONS/1/PREACCLINES/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAddserilotsV1(
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

    it('should call transactionspreacclinesAddserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAddserilotsV1Post(
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
        `/ArpSlips/TRANSACTIONS/1/PREACCLINES/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspreacclinesAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspreacclinesAddserilotsV1Post(
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
        `/ArpSlips/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/TRANSACTIONS`);
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/TRANSACTIONS/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/TRANSACTIONS/AppendLine2`);
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/TRANSACTIONS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/TRANSACTIONS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/TRANSACTIONS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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

      expect(client['request']).toHaveBeenCalledWith('get', `/ArpSlips/1/TRANSACTIONS/AddLine2/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/TRANSACTIONS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/TRANSACTIONS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/TRANSACTIONS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/TRANSACTIONS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/1/TRANSACTIONS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
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
        `/ArpSlips/TRANSACTIONS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSPAYMENT_LISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPAYMENT_LISTV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSPAYMENT_LISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPAYMENT_LISTV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSPAYMENT_LISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPAYMENT_LISTByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSPAYMENT_LISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSPAYMENT_LISTByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAppendline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAddserilotsV1(
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
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAddserilotsV1(
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

    it('should call transactionspaymentListAddserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAddserilotsV1Post(
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
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAddserilotsV1Post(
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

    it('should call transactionspaymentListGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListGetstocklinepriceV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListGetstocklinepriceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListGetstocklinepriceV1Post(
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

    it('should call transactionspaymentListAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAddline2V1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAppendserilotsV1(
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
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAppendserilotsV1(
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

    it('should call transactionspaymentListAppendserilotsV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAppendserilotsV1Post(
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
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListAppendserilotsV1Post(
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

    it('should call transactionspaymentListEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/ArpSlips/1/TRANSACTIONS/1/PAYMENT_LIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListEqualizebalanceV1Post with data', async () => {
      const mockData = {
        INTERNAL_REFERENCE: 1,
        ARP_CODE: 'TEST',
        CLIENTREF: 1,
        GL_CODE1: 'GL001',
        CLACCREF: 1,
        DATE: '2023-01-01',
        MODULENR: 1,
        TRCODE: 1,
        AMOUNT: 100,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/ArpSlips/TRANSACTIONS/1/PAYMENT_LIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionspaymentListEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['NUMBER', 'DATE'] as ArpSlipsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionspaymentListEqualizebalanceV1Post(
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
