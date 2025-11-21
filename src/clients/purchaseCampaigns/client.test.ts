import { PurchaseCampaignsClient } from './client';
import { PurchaseCampaigns, PurchaseCampaignsField, PurchaseCampaignsSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('PurchaseCampaignsClient', () => {
  let client: PurchaseCampaignsClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new PurchaseCampaignsClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all purchaseCampaigns', async () => {
      const mockResponse = {
        items: [
          {
            INTERNAL_REFERENCE: 1,
            CODE: 'Test CODE',
            NAME: 'Test NAME',
          },
        ],
        totalCount: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockResponse);

      const result = await client.getAll();

      expect(client['request']).toHaveBeenCalledWith('get', '/purchaseCampaigns');
      expect(result).toEqual(mockResponse);
    });

    it('should get all purchaseCampaigns with options', async () => {
      const options = { limit: 10, offset: 0, sort: ['CARD_TYPE'] as PurchaseCampaignsSortSpec };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/purchaseCampaigns?limit=10&offset=0&sort=CARD_TYPE'
      );
    });

    it('should get purchaseCampaigns by ID', async () => {
      const mockPurchaseCampaigns: PurchaseCampaigns = {
        INTERNAL_REFERENCE: 1,
        CODE: 'Test CODE',
        NAME: 'Test NAME',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockPurchaseCampaigns);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/purchaseCampaigns/1');
      expect(result).toEqual(mockPurchaseCampaigns);
    });

    it('should get purchaseCampaigns by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/purchaseCampaigns/1?expandLevel=full'
      );
    });

    it('should create a new purchaseCampaigns', async () => {
      const newPurchaseCampaigns = {
        CODE: 'Test CODE',
        NAME: 'Test NAME',
      };
      const createdPurchaseCampaigns: PurchaseCampaigns = {
        ...newPurchaseCampaigns,
        INTERNAL_REFERENCE: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdPurchaseCampaigns);

      const result = await client.create(newPurchaseCampaigns);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        '/purchaseCampaigns',
        newPurchaseCampaigns
      );
      expect(result).toEqual(createdPurchaseCampaigns);
    });

    it('should update a purchaseCampaigns', async () => {
      const updatePurchaseCampaigns = {
        INTERNAL_REFERENCE: 1,
        CODE: 'Test CODE',
        NAME: 'Test NAME',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updatePurchaseCampaigns);

      const result = await client.update(1, updatePurchaseCampaigns);

      expect(client['request']).toHaveBeenCalledWith(
        'put',
        '/purchaseCampaigns/1',
        updatePurchaseCampaigns
      );
      expect(result).toEqual(updatePurchaseCampaigns);
    });

    it('should patch a purchaseCampaigns', async () => {
      const patchData = { CODE: 'Updated' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith('patch', '/purchaseCampaigns/1', patchData);
      expect(result).toEqual({ success: true });
    });

    it('should delete a purchaseCampaigns', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/purchaseCampaigns/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search purchaseCampaigns', async () => {
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

    it('should search by FICHE_DOC_NUMBER', async () => {
      await client.searchByFicheDocNumber('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: expect.any(String) });
    });

    it('should search by CARD_TYPE', async () => {
      await client.searchByCardType('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: expect.any(String) });
    });
  });

  describe('Analytics Methods', () => {
    it('should get purchaseCampaigns analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get purchaseCampaigns count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/purchaseCampaigns/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/purchaseCampaigns/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/purchaseCampaigns/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/purchaseCampaigns/checktrack');
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
      const apiError = new Error('API Error: PurchaseCampaigns not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow('API Error: PurchaseCampaigns not found');
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
        `/purchaseCampaigns/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/ExportToXmlStr/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchaseCampaigns/1/ApplyCondition`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ApplyCondition`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/ExportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ExportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchaseCampaigns/1/ReCalculate`);
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchaseCampaigns/ReCalculate`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchaseCampaigns/1/FillAccCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/FillAccCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/ApplyADiscount/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchaseCampaigns/1/EqualizePayAmnt`);
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/EqualizePayAmnt`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchaseCampaigns/1/FillSMMACCCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/FillSMMACCCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/AttachADespatchByLRef/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchaseCampaigns/1/DeleteCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/DeleteCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchaseCampaigns/1/SetClientInfo`);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/SetClientInfo`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/GetRelevantCampaigns`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/ImportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ImportBase64EncodedImage/test/test/test`,
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
        `/purchaseCampaigns/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadByIdWithBodyParametersV1(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getCAMPAIGN_LINESV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCAMPAIGN_LINESV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchaseCampaigns/1/CAMPAIGN_LINES`);
      expect(result).toEqual({ success: true });
    });

    it('should call getCAMPAIGN_LINESV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCAMPAIGN_LINESV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getCAMPAIGN_LINESByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCAMPAIGN_LINESByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/CAMPAIGN_LINES/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getCAMPAIGN_LINESByIdV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getCAMPAIGN_LINESByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/CAMPAIGN_LINES/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAppendline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAppendline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchaseCampaigns/CAMPAIGN_LINES/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/CAMPAIGN_LINES/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAddserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAddserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchaseCampaigns/CAMPAIGN_LINES/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAddserilotsV1Post(
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

    it('should call campaignLinesGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/CAMPAIGN_LINES/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesGetstocklinepriceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesGetstocklinepriceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchaseCampaigns/CAMPAIGN_LINES/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/CAMPAIGN_LINES/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAddline2V1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAddline2V1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchaseCampaigns/CAMPAIGN_LINES/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/CAMPAIGN_LINES/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAppendserilotsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAppendserilotsV1(
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

    it('should call campaignLinesAppendserilotsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchaseCampaigns/CAMPAIGN_LINES/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesAppendserilotsV1Post(
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

    it('should call campaignLinesEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/CAMPAIGN_LINES/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesEqualizebalanceV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesEqualizebalanceV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchaseCampaigns/CAMPAIGN_LINES/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/CAMPAIGN_LINES/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesApplyaccdisttemplateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchaseCampaigns/CAMPAIGN_LINES/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesApplyaccdisttemplateV1Post(
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

    it('should call campaignLinesSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/CAMPAIGN_LINES/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesSetlinetotalsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesSetlinetotalsV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchaseCampaigns/CAMPAIGN_LINES/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call campaignLinesSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.campaignLinesSetlinetotalsV1Post(1, mockData, options);

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
        `/purchaseCampaigns/1/ExportToXML/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/CreateCompositeLines`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/CreateCompositeLines`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/FormSeriLotLines/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchaseCampaigns/1/ApplyCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ApplyCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/ApplyRePayPln/1/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchaseCampaigns/1/ApplyRePayPlnForInv/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = { limit: 10, fields: ['CARD_TYPE', 'CODE'] as PurchaseCampaignsField[] };
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
        `/purchaseCampaigns/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });
  });
});
