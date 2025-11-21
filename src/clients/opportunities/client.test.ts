import { OpportunitiesClient } from './client';
import { Opportunities, OpportunitiesField, OpportunitiesSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('OpportunitiesClient', () => {
  let client: OpportunitiesClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new OpportunitiesClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all opportunities', async () => {
      const mockResponse = {
        items: [
          {
            INTERNAL_REFERENCE: 1,
            DESCRIPTION: 'Test DESCRIPTION',
          },
        ],
        totalCount: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockResponse);

      const result = await client.getAll();

      expect(client['request']).toHaveBeenCalledWith('get', '/opportunities');
      expect(result).toEqual(mockResponse);
    });

    it('should get all opportunities with options', async () => {
      const options = { limit: 10, offset: 0, sort: ['OPPNO'] as OpportunitiesSortSpec };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/opportunities?limit=10&offset=0&sort=OPPNO'
      );
    });

    it('should get opportunities by ID', async () => {
      const mockOpportunities: Opportunities = {
        INTERNAL_REFERENCE: 1,
        DESCRIPTION: 'Test DESCRIPTION',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockOpportunities);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/opportunities/1');
      expect(result).toEqual(mockOpportunities);
    });

    it('should get opportunities by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', '/opportunities/1?expandLevel=full');
    });

    it('should create an new opportunities', async () => {
      const newOpportunities = {
        DESCRIPTION: 'Test DESCRIPTION',
      };
      const createdOpportunities: Opportunities = { ...newOpportunities, INTERNAL_REFERENCE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdOpportunities);

      const result = await client.create(newOpportunities);

      expect(client['request']).toHaveBeenCalledWith('post', '/opportunities', newOpportunities);
      expect(result).toEqual(createdOpportunities);
    });

    it('should update an opportunities', async () => {
      const updateOpportunities = {
        INTERNAL_REFERENCE: 1,
        DESCRIPTION: 'Test DESCRIPTION',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updateOpportunities);

      const result = await client.update(1, updateOpportunities);

      expect(client['request']).toHaveBeenCalledWith(
        'put',
        '/opportunities/1',
        updateOpportunities
      );
      expect(result).toEqual(updateOpportunities);
    });

    it('should patch an opportunities', async () => {
      const patchData = { DESCRIPTION: 'Updated' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith('patch', '/opportunities/1', patchData);
      expect(result).toEqual({ success: true });
    });

    it('should delete an opportunities', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/opportunities/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search opportunities', async () => {
      const criteria = { description: 'test' };
      await client.search(criteria);

      expect(client.getAll).toHaveBeenCalled();
    });

    it('should search by DESCRIPTION', async () => {
      await client.searchByDescription('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "DESCRIPTION like 'test*'" });
    });
  });

  describe('Analytics Methods', () => {
    it('should get opportunities analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get opportunities count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/opportunities/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/opportunities/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/opportunities/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/opportunities/checktrack');
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
      const apiError = new Error('API Error: Opportunities not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow('API Error: Opportunities not found');
    });

    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network Error: Connection timeout');
      jest.spyOn(client, 'request' as any).mockRejectedValue(networkError);

      await expect(client.getAll()).rejects.toThrow('Network Error: Connection timeout');
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call importFromXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/ExportToXmlStr/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/ApplyCondition`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ApplyCondition`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/ExportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ExportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/ReCalculate`);
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ReCalculate`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/FillAccCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/FillAccCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/ApplyADiscount/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1Post('test', 1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/EqualizePayAmnt`);
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/EqualizePayAmnt`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/FillSMMACCCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/FillSMMACCCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/AttachADespatchByLRef/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/DeleteCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/DeleteCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/SetClientInfo`);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/SetClientInfo`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/GetRelevantCampaigns`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/ImportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1Post('test', 'test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ImportBase64EncodedImage/test/test/test`,
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
        `/opportunities/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
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
        `/opportunities/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadByIdWithBodyParametersV1(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getHISTORYLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getHISTORYLISTV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/HISTORYLIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getHISTORYLISTV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getHISTORYLISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getHISTORYLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getHISTORYLISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/HISTORYLIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getHISTORYLISTByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getHISTORYLISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/HISTORYLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAppendline2V1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/HISTORYLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/HISTORYLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAddserilotsV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/HISTORYLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAddserilotsV1Post(
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

    it('should call historylistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/HISTORYLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call historylistGetstocklinepriceV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/HISTORYLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/HISTORYLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAddline2V1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/HISTORYLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/HISTORYLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAppendserilotsV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/HISTORYLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistAppendserilotsV1Post(
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

    it('should call historylistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/HISTORYLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call historylistEqualizebalanceV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/HISTORYLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/HISTORYLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call historylistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/HISTORYLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistApplyaccdisttemplateV1Post(
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

    it('should call historylistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/HISTORYLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call historylistSetlinetotalsV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/HISTORYLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call historylistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.historylistSetlinetotalsV1Post(1, mockData, options);

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
        `/opportunities/1/ExportToXML/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/CreateCompositeLines`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/CreateCompositeLines`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/FormSeriLotLines/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/opportunities/1/ApplyCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ApplyCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/ApplyRePayPln/1/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1Post(1, 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/opportunities/1/ApplyRePayPlnForInv/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = { limit: 10, fields: ['OPPNO', 'DESCRIPTION'] as OpportunitiesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1Post with data', async () => {
      const mockData = { DESCRIPTION: 'Test DESCRIPTION' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/opportunities/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });
  });
});
