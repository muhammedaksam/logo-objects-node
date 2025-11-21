import { SalesContractsClient } from './client';
import { SalesContracts, SalesContractsField, SalesContractsSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('SalesContractsClient', () => {
  let client: SalesContractsClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new SalesContractsClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all salesContracts', async () => {
      const mockResponse = {
        items: [
          {
            INTERNAL_REFERENCE: 1,
            TITLE: 'Test TITLE',
            STATUS: 1,
          },
        ],
        totalCount: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockResponse);

      const result = await client.getAll();

      expect(client['request']).toHaveBeenCalledWith('get', '/salesContracts');
      expect(result).toEqual(mockResponse);
    });

    it('should get all salesContracts with options', async () => {
      const options = { limit: 10, offset: 0, sort: ['TRCODE'] as SalesContractsSortSpec };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/salesContracts?limit=10&offset=0&sort=TRCODE'
      );
    });

    it('should get salesContracts by ID', async () => {
      const mockSalesContracts: SalesContracts = {
        INTERNAL_REFERENCE: 1,
        TITLE: 'Test TITLE',
        STATUS: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockSalesContracts);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/salesContracts/1');
      expect(result).toEqual(mockSalesContracts);
    });

    it('should get salesContracts by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', '/salesContracts/1?expandLevel=full');
    });

    it('should create a new salesContracts', async () => {
      const newSalesContracts = {
        TITLE: 'Test TITLE',
        STATUS: 1,
      };
      const createdSalesContracts: SalesContracts = { ...newSalesContracts, INTERNAL_REFERENCE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdSalesContracts);

      const result = await client.create(newSalesContracts);

      expect(client['request']).toHaveBeenCalledWith('post', '/salesContracts', newSalesContracts);
      expect(result).toEqual(createdSalesContracts);
    });

    it('should update a salesContracts', async () => {
      const updateSalesContracts = {
        INTERNAL_REFERENCE: 1,
        TITLE: 'Test TITLE',
        STATUS: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updateSalesContracts);

      const result = await client.update(1, updateSalesContracts);

      expect(client['request']).toHaveBeenCalledWith(
        'put',
        '/salesContracts/1',
        updateSalesContracts
      );
      expect(result).toEqual(updateSalesContracts);
    });

    it('should patch a salesContracts', async () => {
      const patchData = { TITLE: 'Updated' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith('patch', '/salesContracts/1', patchData);
      expect(result).toEqual({ success: true });
    });

    it('should delete a salesContracts', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/salesContracts/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search salesContracts', async () => {
      const criteria = { title: 'test' };
      await client.search(criteria);

      expect(client.getAll).toHaveBeenCalled();
    });

    it('should search by ARP_CODE', async () => {
      await client.searchByArpCode('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "ARP_CODE like 'test*'" });
    });

    it('should search by TITLE', async () => {
      await client.searchByTitle('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "TITLE like 'test*'" });
    });
  });

  describe('Analytics Methods', () => {
    it('should get salesContracts analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get salesContracts count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/salesContracts/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/salesContracts/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/salesContracts/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/salesContracts/checktrack');
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
      const apiError = new Error('API Error: SalesContracts not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow('API Error: SalesContracts not found');
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

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/DeleteCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/DeleteCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/SetClientInfo`);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/SetClientInfo`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/GetRelevantCampaigns`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/ImportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1Post('test', 'test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ImportBase64EncodedImage/test/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistApplyaccdisttemplateV1 with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistApplyaccdisttemplateV1('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/DEFNFLDSLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/DEFNFLDSLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistApplyaccdisttemplateV1Get with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/DEFNFLDSLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistSetlinetotalsV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/DEFNFLDSLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistSetlinetotalsV1Post(1, mockData, options);

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
        `/salesContracts/1/ExportToXML/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/CreateCompositeLines`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/CreateCompositeLines`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/FormSeriLotLines/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/ApplyCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ApplyCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/ApplyRePayPln/1/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1Post(1, 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/ApplyRePayPlnForInv/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/ExportToXmlStr/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/ApplyCondition`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ApplyCondition`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/ExportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ExportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/ReCalculate`);
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ReCalculate`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/FillAccCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/FillAccCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/ApplyADiscount/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1Post('test', 1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/EqualizePayAmnt`);
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/EqualizePayAmnt`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/FillSMMACCCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/FillSMMACCCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/AttachADespatchByLRef/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsGetstocklinepriceV1 with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsGetstocklinepriceV1(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/DETAILS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsGetstocklinepriceV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsGetstocklinepriceV1(
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

    it('should call transactionsdetailsGetstocklinepriceV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsGetstocklinepriceV1Get(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DETAILS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsGetstocklinepriceV1Get with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsGetstocklinepriceV1Get(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DETAILS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/TRANSACTIONS/1/DETAILS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/1/DETAILS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/TRANSACTIONS/1/DETAILS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/1/DETAILS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/TRANSACTIONS/1/DETAILS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/1/DETAILS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/TRANSACTIONS/1/DETAILS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/1/DETAILS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/TRANSACTIONS/1/DETAILS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdetailsSetlinetotalsV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDEFNFLDSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDEFNFLDSV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DEFNFLDS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDEFNFLDSV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDEFNFLDSV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDEFNFLDSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDEFNFLDSByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DEFNFLDS/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDEFNFLDSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSDEFNFLDSByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DEFNFLDS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/DEFNFLDS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAddserilotsV1(1, 1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DEFNFLDS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAddserilotsV1(
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

    it('should call transactionsdefnfldsAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAddserilotsV1Post(
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
        `/salesContracts/TRANSACTIONS/1/DEFNFLDS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAddserilotsV1Post(
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

    it('should call transactionsdefnfldsGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DEFNFLDS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsGetstocklinepriceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/DEFNFLDS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsGetstocklinepriceV1Post(
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

    it('should call transactionsdefnfldsAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DEFNFLDS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/DEFNFLDS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAppendserilotsV1(
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
        `/salesContracts/1/TRANSACTIONS/1/DEFNFLDS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAppendserilotsV1(
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

    it('should call transactionsdefnfldsAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAppendserilotsV1Post(
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
        `/salesContracts/TRANSACTIONS/1/DEFNFLDS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsAppendserilotsV1Post(
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

    it('should call transactionsdefnfldsEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DEFNFLDS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/DEFNFLDS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsEqualizebalanceV1Post(
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

    it('should call transactionsdefnfldsApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsApplyaccdisttemplateV1(1, 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DEFNFLDS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsApplyaccdisttemplateV1(
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

    it('should call transactionsdefnfldsApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsApplyaccdisttemplateV1Post(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/DEFNFLDS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsApplyaccdisttemplateV1Post(
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

    it('should call transactionsdefnfldsSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DEFNFLDS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/DEFNFLDS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdefnfldsSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsdefnfldsSetlinetotalsV1Post(1, 1, mockData, options);

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

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/DEFNFLDSLIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNFLDSLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNFLDSLISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNFLDSLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDEFNFLDSLISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/DEFNFLDSLIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDEFNFLDSLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/DEFNFLDSLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendline2V1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/DEFNFLDSLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/DEFNFLDSLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddserilotsV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/DEFNFLDSLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/DEFNFLDSLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistGetstocklinepriceV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/DEFNFLDSLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/DEFNFLDSLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddline2V1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/DEFNFLDSLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/DEFNFLDSLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendserilotsV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
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
        `/salesContracts/DEFNFLDSLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/DEFNFLDSLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistEqualizebalanceV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/DEFNFLDSLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call defnfldslistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.defnfldslistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistApplyaccdisttemplateV1 with data', async () => {
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

      const result = await client.paymentListdisctrlistApplyaccdisttemplateV1(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/1/DISCTRLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistApplyaccdisttemplateV1(
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

    it('should call paymentListdisctrlistApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistApplyaccdisttemplateV1Get(
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/1/DISCTRLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistApplyaccdisttemplateV1Get with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistApplyaccdisttemplateV1Get(
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

    it('should call paymentListdisctrlistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/1/DISCTRLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistSetlinetotalsV1Post with data', async () => {
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

      const result = await client.paymentListdisctrlistSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/1/DISCTRLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistSetlinetotalsV1Post(1, 1, mockData, options);

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

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/TRANSACTIONS`);
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/TRANSACTIONS/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendline2V1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddserilotsV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsGetstocklinepriceV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddline2V1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendserilotsV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
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
        `/salesContracts/TRANSACTIONS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsEqualizebalanceV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsSetlinetotalsV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionsSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSCAMPAIGN_INFOSV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSCAMPAIGN_INFOSV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/CAMPAIGN_INFOS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSCAMPAIGN_INFOSV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSCAMPAIGN_INFOSV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSCAMPAIGN_INFOSByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSCAMPAIGN_INFOSByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/CAMPAIGN_INFOS/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSCAMPAIGN_INFOSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getTRANSACTIONSCAMPAIGN_INFOSByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/CAMPAIGN_INFOS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAppendline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/CAMPAIGN_INFOS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAddserilotsV1(
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
        `/salesContracts/1/TRANSACTIONS/1/CAMPAIGN_INFOS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAddserilotsV1(
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

    it('should call transactionscampaignInfosAddserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAddserilotsV1Post(
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
        `/salesContracts/TRANSACTIONS/1/CAMPAIGN_INFOS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAddserilotsV1Post(
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

    it('should call transactionscampaignInfosGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/CAMPAIGN_INFOS/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosGetstocklinepriceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosGetstocklinepriceV1Post(
        1,
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/CAMPAIGN_INFOS/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosGetstocklinepriceV1Post(
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

    it('should call transactionscampaignInfosAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/CAMPAIGN_INFOS/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAddline2V1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/CAMPAIGN_INFOS/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAppendserilotsV1(
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
        `/salesContracts/1/TRANSACTIONS/1/CAMPAIGN_INFOS/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAppendserilotsV1(
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

    it('should call transactionscampaignInfosAppendserilotsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAppendserilotsV1Post(
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
        `/salesContracts/TRANSACTIONS/1/CAMPAIGN_INFOS/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosAppendserilotsV1Post(
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

    it('should call transactionscampaignInfosEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/CAMPAIGN_INFOS/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosEqualizebalanceV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/CAMPAIGN_INFOS/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosEqualizebalanceV1Post(
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

    it('should call transactionscampaignInfosApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosApplyaccdisttemplateV1(
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/CAMPAIGN_INFOS/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosApplyaccdisttemplateV1(
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

    it('should call transactionscampaignInfosApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosApplyaccdisttemplateV1Post(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/CAMPAIGN_INFOS/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosApplyaccdisttemplateV1Post(
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

    it('should call transactionscampaignInfosSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/CAMPAIGN_INFOS/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosSetlinetotalsV1Post with data', async () => {
      const mockData = { INTERNAL_REFERENCE: 1, CODE: 'TEST_CODE', NAME: 'Test Name' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/TRANSACTIONS/1/CAMPAIGN_INFOS/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionscampaignInfosSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transactionscampaignInfosSetlinetotalsV1Post(
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

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/TRANSACTIONS/1/DETAILS`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/1/DETAILS/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getTRANSACTIONSDETAILSByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/1/DETAILS/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/TRANSACTIONS/1/DETAILS/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/TRANSACTIONS/1/DETAILS/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/TRANSACTIONS/1/DETAILS/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call transactionsdetailsAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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

    it('should call postReadWithBodyParametersV1 with data', async () => {
      const mockData = { fields: 'CODE,TITLE', expand: 'full' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadWithBodyParametersV1(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
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
        `/salesContracts/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadByIdWithBodyParametersV1(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getPAYMENT_LISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPAYMENT_LISTV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/PAYMENT_LIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getPAYMENT_LISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPAYMENT_LISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getPAYMENT_LISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPAYMENT_LISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/salesContracts/1/PAYMENT_LIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getPAYMENT_LISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPAYMENT_LISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAppendline2V1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAddserilotsV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAddserilotsV1Post(
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

    it('should call paymentListGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListGetstocklinepriceV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAddline2V1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAppendserilotsV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListAppendserilotsV1Post(
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

    it('should call paymentListEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListEqualizebalanceV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListApplyaccdisttemplateV1Post(
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

    it('should call paymentListSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListSetlinetotalsV1Post with data', async () => {
      const mockData = { TITLE: 'Test TITLE', STATUS: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getPAYMENT_LISTDISCTRLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPAYMENT_LISTDISCTRLISTV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/1/DISCTRLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getPAYMENT_LISTDISCTRLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPAYMENT_LISTDISCTRLISTV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getPAYMENT_LISTDISCTRLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPAYMENT_LISTDISCTRLISTByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/1/DISCTRLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getPAYMENT_LISTDISCTRLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getPAYMENT_LISTDISCTRLISTByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/1/DISCTRLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAppendline2V1Post with data', async () => {
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

      const result = await client.paymentListdisctrlistAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/1/DISCTRLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAddserilotsV1(1, 1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/1/DISCTRLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAddserilotsV1(
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

    it('should call paymentListdisctrlistAddserilotsV1Post with data', async () => {
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

      const result = await client.paymentListdisctrlistAddserilotsV1Post(
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
        `/salesContracts/PAYMENT_LIST/1/DISCTRLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAddserilotsV1Post(
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

    it('should call paymentListdisctrlistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/1/DISCTRLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistGetstocklinepriceV1Post with data', async () => {
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

      const result = await client.paymentListdisctrlistGetstocklinepriceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/1/DISCTRLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistGetstocklinepriceV1Post(
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

    it('should call paymentListdisctrlistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/1/DISCTRLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAddline2V1Post with data', async () => {
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

      const result = await client.paymentListdisctrlistAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/1/DISCTRLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAppendserilotsV1(
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
        `/salesContracts/1/PAYMENT_LIST/1/DISCTRLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAppendserilotsV1(
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

    it('should call paymentListdisctrlistAppendserilotsV1Post with data', async () => {
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

      const result = await client.paymentListdisctrlistAppendserilotsV1Post(
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
        `/salesContracts/PAYMENT_LIST/1/DISCTRLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistAppendserilotsV1Post(
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

    it('should call paymentListdisctrlistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/salesContracts/1/PAYMENT_LIST/1/DISCTRLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistEqualizebalanceV1Post with data', async () => {
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

      const result = await client.paymentListdisctrlistEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/salesContracts/PAYMENT_LIST/1/DISCTRLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call paymentListdisctrlistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['TRCODE', 'FICHENO'] as SalesContractsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.paymentListdisctrlistEqualizebalanceV1Post(
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
