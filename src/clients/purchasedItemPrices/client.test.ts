import { PurchasedItemPricesClient } from './client';
import {
  PurchasedItemPrices,
  PurchasedItemPricesField,
  PurchasedItemPricesSortSpec,
} from './types';
import { ApiClientConfig } from '../../types';

describe('PurchasedItemPricesClient', () => {
  let client: PurchasedItemPricesClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new PurchasedItemPricesClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all purchasedItemPrices', async () => {
      const mockResponse = {
        items: [
          {
            INTERNAL_REFERENCE: 1,
            ACTIVE: 1,
          },
        ],
        totalCount: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockResponse);

      const result = await client.getAll();

      expect(client['request']).toHaveBeenCalledWith('get', '/purchasedItemPrices');
      expect(result).toEqual(mockResponse);
    });

    it('should get all purchasedItemPrices with options', async () => {
      const options = { limit: 10, offset: 0, sort: ['CARD_CODE'] as PurchasedItemPricesSortSpec };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/purchasedItemPrices?limit=10&offset=0&sort=CARD_CODE'
      );
    });

    it('should get purchasedItemPrices by ID', async () => {
      const mockPurchasedItemPrices: PurchasedItemPrices = {
        INTERNAL_REFERENCE: 1,
        ACTIVE: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockPurchasedItemPrices);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/purchasedItemPrices/1');
      expect(result).toEqual(mockPurchasedItemPrices);
    });

    it('should get purchasedItemPrices by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/purchasedItemPrices/1?expandLevel=full'
      );
    });

    it('should create a new purchasedItemPrices', async () => {
      const newPurchasedItemPrices = {
        ACTIVE: 1,
      };
      const createdPurchasedItemPrices: PurchasedItemPrices = {
        ...newPurchasedItemPrices,
        INTERNAL_REFERENCE: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdPurchasedItemPrices);

      const result = await client.create(newPurchasedItemPrices);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        '/purchasedItemPrices',
        newPurchasedItemPrices
      );
      expect(result).toEqual(createdPurchasedItemPrices);
    });

    it('should update a purchasedItemPrices', async () => {
      const updatePurchasedItemPrices = {
        INTERNAL_REFERENCE: 1,
        ACTIVE: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updatePurchasedItemPrices);

      const result = await client.update(1, updatePurchasedItemPrices);

      expect(client['request']).toHaveBeenCalledWith(
        'put',
        '/purchasedItemPrices/1',
        updatePurchasedItemPrices
      );
      expect(result).toEqual(updatePurchasedItemPrices);
    });

    it('should patch a purchasedItemPrices', async () => {
      const patchData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith('patch', '/purchasedItemPrices/1', patchData);
      expect(result).toEqual({ success: true });
    });

    it('should delete a purchasedItemPrices', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/purchasedItemPrices/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search purchasedItemPrices', async () => {
      const criteria = { cardCode: 'test' };
      await client.search(criteria);

      expect(client.getAll).toHaveBeenCalled();
    });

    it('should search by CARD_CODE', async () => {
      await client.searchByCardCode('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: "CARD_CODE like 'test*'" });
    });

    it('should search by OWNER_TYPE', async () => {
      await client.searchByOwnerType('test');
      expect(client.getAll).toHaveBeenCalledWith({ q: expect.any(String) });
    });
  });

  describe('Analytics Methods', () => {
    it('should get purchasedItemPrices analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get purchasedItemPrices count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/purchasedItemPrices/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/purchasedItemPrices/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/purchasedItemPrices/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/purchasedItemPrices/checktrack');
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
      const apiError = new Error('API Error: PurchasedItemPrices not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow('API Error: PurchasedItemPrices not found');
    });

    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network Error: Connection timeout');
      jest.spyOn(client, 'request' as any).mockRejectedValue(networkError);

      await expect(client.getAll()).rejects.toThrow('Network Error: Connection timeout');
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call reCalculateV1 with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ReCalculate`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Get(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchasedItemPrices/1/ReCalculate`);
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Get with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Get(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchasedItemPrices/1/FillAccCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/FillAccCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ApplyADiscount/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1Post('test', 1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/EqualizePayAmnt`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/EqualizePayAmnt`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/FillSMMACCCodes`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/FillSMMACCCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/AttachADespatchByLRef/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/DeleteCampaign`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/DeleteCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchasedItemPrices/1/SetClientInfo`);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/SetClientInfo`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/GetRelevantCampaigns`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ImportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1Post('test', 'test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ImportBase64EncodedImage/test/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistApplyaccdisttemplateV1 with data', async () => {
      const mockData = {
        EINFOSZ: 1,
        EPOLICY: 0,
        NUMOFVAL: 1,
        CHAR_CODE: 'TEST_CODE',
        VALREFSLIST: { items: [{ VALREF: 1, VALCODE: 'TEST_VAL' }] },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistApplyaccdisttemplateV1(
        1,
        'test',
        1,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/1/VALREFSLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistApplyaccdisttemplateV1 with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistApplyaccdisttemplateV1(
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

    it('should call vgenxmllistvalrefslistApplyaccdisttemplateV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistApplyaccdisttemplateV1Get(
        1,
        1,
        'test',
        1,
        1
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/1/VALREFSLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistApplyaccdisttemplateV1Get with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistApplyaccdisttemplateV1Get(
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

    it('should call vgenxmllistvalrefslistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistSetlinetotalsV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/1/VALREFSLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistSetlinetotalsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistSetlinetotalsV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistSetlinetotalsV1Post with data', async () => {
      const mockData = {
        EINFOSZ: 1,
        EPOLICY: 0,
        NUMOFVAL: 1,
        CHAR_CODE: 'TEST_CODE',
        VALREFSLIST: { items: [{ VALREF: 1, VALCODE: 'TEST_VAL' }] },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistSetlinetotalsV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/1/VALREFSLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistSetlinetotalsV1Post(
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

    it('should call getDIVISION_LISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIVISION_LISTV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchasedItemPrices/1/DIVISION_LIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getDIVISION_LISTV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIVISION_LISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getDIVISION_LISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIVISION_LISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/DIVISION_LIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getDIVISION_LISTByIdV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getDIVISION_LISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/DIVISION_LIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAppendline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAppendline2V1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/DIVISION_LIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/DIVISION_LIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAddserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAddserilotsV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/DIVISION_LIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAddserilotsV1Post(
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

    it('should call divisionListGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/DIVISION_LIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListGetstocklinepriceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListGetstocklinepriceV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/DIVISION_LIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/DIVISION_LIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAddline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAddline2V1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/DIVISION_LIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/DIVISION_LIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAppendserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAppendserilotsV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/DIVISION_LIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListAppendserilotsV1Post(
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

    it('should call divisionListEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/DIVISION_LIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListEqualizebalanceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListEqualizebalanceV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/DIVISION_LIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/DIVISION_LIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListApplyaccdisttemplateV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/DIVISION_LIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListApplyaccdisttemplateV1Post(
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

    it('should call divisionListSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/DIVISION_LIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListSetlinetotalsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListSetlinetotalsV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/DIVISION_LIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call divisionListSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.divisionListSetlinetotalsV1Post(1, mockData, options);

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
        `/purchasedItemPrices/1/ExportToXML/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXMLV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/CreateCompositeLines`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/CreateCompositeLines`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/FormSeriLotLines/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchasedItemPrices/1/ApplyCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ApplyCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ApplyRePayPln/1/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1Post(1, 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ApplyRePayPlnForInv/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ExportToXmlStr/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1Post('test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ApplyCondition`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ApplyCondition`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/ExportImage/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test', options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1Post('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/ExportImage/test/test`,
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
        `/purchasedItemPrices/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
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
        `/purchasedItemPrices/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
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

    it('should call getVGENXMLLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVGENXMLLISTV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchasedItemPrices/1/VGENXMLLIST`);
      expect(result).toEqual({ success: true });
    });

    it('should call getVGENXMLLISTV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVGENXMLLISTV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getVGENXMLLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVGENXMLLISTByIdV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/purchasedItemPrices/1/VGENXMLLIST/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call getVGENXMLLISTByIdV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVGENXMLLISTByIdV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAppendline2V1(1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAppendline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAppendline2V1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAppendline2V1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAppendline2V1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAppendline2V1Post(mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAddserilotsV1(1, 'test', 1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAddserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAddserilotsV1(1, 'test', 1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAddserilotsV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAddserilotsV1Post('test', 1, 'test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAddserilotsV1Post(
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

    it('should call vgenxmllistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistGetstocklinepriceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistGetstocklinepriceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistGetstocklinepriceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistGetstocklinepriceV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistGetstocklinepriceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistGetstocklinepriceV1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAddline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAddline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAddline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAddline2V1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAddline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAddline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAppendserilotsV1(1, 'test', 1, 1, 'test', 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAppendserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAppendserilotsV1(1, 'test', 1, 1, 'test', 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAppendserilotsV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAppendserilotsV1Post(
        'test',
        1,
        1,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistAppendserilotsV1Post(
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

    it('should call vgenxmllistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistEqualizebalanceV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistEqualizebalanceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistEqualizebalanceV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistEqualizebalanceV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistEqualizebalanceV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistEqualizebalanceV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistApplyaccdisttemplateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistApplyaccdisttemplateV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/ApplyAccDistTemplate/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistApplyaccdisttemplateV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistApplyaccdisttemplateV1(1, 'test', 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistApplyaccdisttemplateV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistApplyaccdisttemplateV1Post('test', 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/ApplyAccDistTemplate/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistApplyaccdisttemplateV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistApplyaccdisttemplateV1Post(
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

    it('should call vgenxmllistSetlinetotalsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistSetlinetotalsV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/SetLineTotals/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistSetlinetotalsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistSetlinetotalsV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistSetlinetotalsV1Post with data', async () => {
      const mockData = { ACTIVE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistSetlinetotalsV1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/SetLineTotals/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistSetlinetotalsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistSetlinetotalsV1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getVGENXMLLISTVALREFSLISTV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVGENXMLLISTVALREFSLISTV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/1/VALREFSLIST`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getVGENXMLLISTVALREFSLISTV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVGENXMLLISTVALREFSLISTV1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getVGENXMLLISTVALREFSLISTByIdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVGENXMLLISTVALREFSLISTByIdV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/1/VALREFSLIST/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getVGENXMLLISTVALREFSLISTByIdV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getVGENXMLLISTVALREFSLISTByIdV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAppendline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAppendline2V1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/1/VALREFSLIST/AppendLine2`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAppendline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAppendline2V1(1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAppendline2V1Post with data', async () => {
      const mockData = {
        EINFOSZ: 1,
        EPOLICY: 0,
        NUMOFVAL: 1,
        CHAR_CODE: 'TEST_CODE',
        VALREFSLIST: { items: [{ VALREF: 1, VALCODE: 'TEST_VAL' }] },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAppendline2V1Post(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/1/VALREFSLIST/AppendLine2`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAppendline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAppendline2V1Post(1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAddserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAddserilotsV1(
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
        `/purchasedItemPrices/1/VGENXMLLIST/1/VALREFSLIST/AddSeriLots/test/1/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAddserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAddserilotsV1(
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

    it('should call vgenxmllistvalrefslistAddserilotsV1Post with data', async () => {
      const mockData = {
        EINFOSZ: 1,
        EPOLICY: 0,
        NUMOFVAL: 1,
        CHAR_CODE: 'TEST_CODE',
        VALREFSLIST: { items: [{ VALREF: 1, VALCODE: 'TEST_VAL' }] },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAddserilotsV1Post(
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
        `/purchasedItemPrices/VGENXMLLIST/1/VALREFSLIST/AddSeriLots/test/1/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAddserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAddserilotsV1Post(
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

    it('should call vgenxmllistvalrefslistGetstocklinepriceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistGetstocklinepriceV1(1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/1/VALREFSLIST/GetStockLinePrice/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistGetstocklinepriceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistGetstocklinepriceV1(1, 1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistGetstocklinepriceV1Post with data', async () => {
      const mockData = {
        EINFOSZ: 1,
        EPOLICY: 0,
        NUMOFVAL: 1,
        CHAR_CODE: 'TEST_CODE',
        VALREFSLIST: { items: [{ VALREF: 1, VALCODE: 'TEST_VAL' }] },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistGetstocklinepriceV1Post(1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/1/VALREFSLIST/GetStockLinePrice/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistGetstocklinepriceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistGetstocklinepriceV1Post(
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

    it('should call vgenxmllistvalrefslistAddline2V1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAddline2V1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/1/VALREFSLIST/AddLine2/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAddline2V1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAddline2V1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAddline2V1Post with data', async () => {
      const mockData = {
        EINFOSZ: 1,
        EPOLICY: 0,
        NUMOFVAL: 1,
        CHAR_CODE: 'TEST_CODE',
        VALREFSLIST: { items: [{ VALREF: 1, VALCODE: 'TEST_VAL' }] },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAddline2V1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/1/VALREFSLIST/AddLine2/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAddline2V1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAddline2V1Post(1, 1, mockData, options);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        expect.stringContaining('?'),
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAppendserilotsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAppendserilotsV1(
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
        `/purchasedItemPrices/1/VGENXMLLIST/1/VALREFSLIST/AppendSeriLots/test/1/1/test/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAppendserilotsV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAppendserilotsV1(
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

    it('should call vgenxmllistvalrefslistAppendserilotsV1Post with data', async () => {
      const mockData = {
        EINFOSZ: 1,
        EPOLICY: 0,
        NUMOFVAL: 1,
        CHAR_CODE: 'TEST_CODE',
        VALREFSLIST: { items: [{ VALREF: 1, VALCODE: 'TEST_VAL' }] },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAppendserilotsV1Post(
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
        `/purchasedItemPrices/VGENXMLLIST/1/VALREFSLIST/AppendSeriLots/test/1/1/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistAppendserilotsV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistAppendserilotsV1Post(
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

    it('should call vgenxmllistvalrefslistEqualizebalanceV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistEqualizebalanceV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/purchasedItemPrices/1/VGENXMLLIST/1/VALREFSLIST/EqualizeBalance/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistEqualizebalanceV1 with query options', async () => {
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistEqualizebalanceV1(1, 1, 1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistEqualizebalanceV1Post with data', async () => {
      const mockData = {
        EINFOSZ: 1,
        EPOLICY: 0,
        NUMOFVAL: 1,
        CHAR_CODE: 'TEST_CODE',
        VALREFSLIST: { items: [{ VALREF: 1, VALCODE: 'TEST_VAL' }] },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistEqualizebalanceV1Post(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/purchasedItemPrices/VGENXMLLIST/1/VALREFSLIST/EqualizeBalance/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call vgenxmllistvalrefslistEqualizebalanceV1Post with query options', async () => {
      const mockData = {};
      const options = {
        limit: 10,
        fields: ['CARD_CODE', 'OWNER_TYPE'] as PurchasedItemPricesField[],
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.vgenxmllistvalrefslistEqualizebalanceV1Post(
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
