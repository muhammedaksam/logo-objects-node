import { ServicesClient } from './client';
import { Services, ServicesField, ServicesSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('ServicesClient', () => {
  let client: ServicesClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new ServicesClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all services', async () => {
      const mockResponse = {
        items: [
          {
            INTERNAL_REFERENCE: 1,
          },
        ],
        totalCount: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockResponse);

      const result = await client.getAll();

      expect(client['request']).toHaveBeenCalledWith('get', '/services');
      expect(result).toEqual(mockResponse);
    });

    it('should get all services with options', async () => {
      const options = { limit: 10, offset: 0, sort: ['INTERNAL_REFERENCE'] as ServicesSortSpec };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/services?limit=10&offset=0&sort=INTERNAL_REFERENCE'
      );
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search services', async () => {
      const criteria = {};
      await client.search(criteria);

      expect(client.getAll).toHaveBeenCalled();
    });
  });

  describe('Analytics Methods', () => {
    it('should get services analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get services count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/services/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/services/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/services/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/services/checktrack');
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
    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network Error: Connection timeout');
      jest.spyOn(client, 'request' as any).mockRejectedValue(networkError);

      await expect(client.getAll()).rejects.toThrow('Network Error: Connection timeout');
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call getServiceSwaggerV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/additionalTaxes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/ArpGroupAssignments`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get2', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get2();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/ArpMLDescriptons`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get2 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get2(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get3', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get3();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/Arps`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get3 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get3(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get4', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get4();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/ArpShipmentLocations`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get4 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get4(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get5', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get5();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/ArpSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get5 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get5(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get6', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get6();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/authorizationCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get6 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get6(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get7', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get7();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/bankAccounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get7 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get7(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get8', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get8();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/bankCredits`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get8 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get8(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get9', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get9();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/bankMLDescriptions`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get9 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get9(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get10', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get10();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/banks`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get10 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get10(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get11', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get11();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/bankSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get11 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get11(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get12', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get12();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/Boms`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get12 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get12(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get13', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get13();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/BomStandardCosts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get13 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get13(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get14', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get14();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/characteristics`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get14 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get14(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get15', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get15();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/characteristicSets`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get15 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get15(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get16', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get16();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/chequeAndPnoteRolls`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get16 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get16(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get17', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get17();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/chequeAndPnotes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get17 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get17(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get18', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get18();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/cities`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get18 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get18(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get19', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get19();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/collateralRolls`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get19 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get19(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get20', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get20();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/contacts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get20 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get20(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get21', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get21();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/costDistributionSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get21 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get21(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get22', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get22();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/countries`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get22 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get22(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get23', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get23();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/customerMLDescriptions`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get23 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get23(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get24', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get24();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/customers`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get24 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get24(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get25', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get25();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/customersOfSalesmen`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get25 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get25(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get26', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get26();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/customsOffices`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get26 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get26(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get27', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get27();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/deliveryCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get27 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get27(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get28', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get28();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/demandPeggings`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get28 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get28(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get29', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get29();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/demandSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get29 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get29(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get30', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get30();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/distributionOrders`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get30 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get30(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get31', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get31();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/distributionRoutes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get31 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get31(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get32', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get32();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/distributionTemplates`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get32 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get32(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get33', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get33();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/districts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get33 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get33(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get34', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get34();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/employeeCosts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get34 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get34(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get35', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get35();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/employeeGroups`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get35 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get35(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get36', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get36();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/employees`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get36 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get36(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get37', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get37();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/employeeStandardCosts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get37 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get37(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get38', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get38();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/engineeringChanges`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get38 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get38(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get39', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get39();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/exportCreditLetters`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get39 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get39(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get40', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get40();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/exportCredits`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get40 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get40(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get41', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get41();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/exportMovementSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get41 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get41(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get42', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get42();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/exportNationalizationSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get42 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get42(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get43', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get43();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/exportOperationSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get43 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get43(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get44', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get44();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/services/exportTypedPurchaseInvoices`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get44 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get44(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get45', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get45();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/exportTypedSalesInvoices`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get45 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get45(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get46', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get46();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/extendedFieldCategories`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get46 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get46(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get47', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get47();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/extendedFieldDefinitions`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get47 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get47(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get48', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get48();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/extendedFields`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get48 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get48(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get49', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get49();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/FAAssignmentSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get49 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get49(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get50', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get50();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/FARegistries`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get50 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get50(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call firmDocs_V1_GetServiceSwagger', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmDocs_V1_GetServiceSwagger();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/Firmdocs`);
      expect(result).toEqual({ success: true });
    });

    it('should call firmDocs_V1_GetServiceSwagger with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmDocs_V1_GetServiceSwagger(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get51', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get51();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/freeZones`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get51 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get51(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get52', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get52();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/GLAccountMLDescriptions`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get52 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get52(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get53', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get53();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/GLAccounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get53 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get53(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get54', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get54();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/GLSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get54 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get54(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get55', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get55();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/groupCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get55 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get55(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get56', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get56();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/importCreditLetters`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get56 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get56(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get57', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get57();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/importDistributionSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get57 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get57(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get58', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get58();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/importOperationSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get58 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get58(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get59', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get59();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/inwardProcessingPermits`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get59 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get59(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get60', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get60();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/itemAlternatives`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get60 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get60(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get61', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get61();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/itemBoms`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get61 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get61(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get62', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get62();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/itemBrands`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get62 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get62(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get63', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get63();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/itemCharacteristics`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get63 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get63(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get64', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get64();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/itemClassAssignments`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get64 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get64(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get65', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get65();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/itemMLDescriptions`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get65 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get65(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get66', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get66();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/items`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get66 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get66(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get67', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get67();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/itemSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get67 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get67(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get68', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get68();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/itemStandardCosts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get68 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get68(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get69', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get69();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/locationCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get69 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get69(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get70', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get70();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/methods`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get70 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get70(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get71', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get71();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/operations`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get71 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get71(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get72', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get72();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/opportunities`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get72 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get72(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get73', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get73();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/overheadAccounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get73 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get73(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get74', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get74();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/paymentDifferenceInvoices`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get74 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get74(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get75', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get75();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/paymentPlanGroupCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get75 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get75(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get76', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get76();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/paymentPlans`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get76 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get76(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get77', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get77();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/postCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get77 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get77(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get78', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get78();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/productionExceptions`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get78 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get78(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get79', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get79();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/productionLines`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get79 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get79(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get80', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get80();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/productionParameters`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get80 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get80(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get81', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get81();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/services/productionResourceUtilization`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get81 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get81(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get82', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get82();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/productionRoutes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get82 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get82(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get83', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get83();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/productions`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get83 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get83(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get84', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get84();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/projects`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get84 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get84(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get85', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get85();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchaseCampaigns`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get85 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get85(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get86', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get86();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/services/purchaseConditionsForSlipLines`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get86 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get86(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get87', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get87();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchaseConditionsForSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get87 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get87(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get88', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get88();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchasedItemPrices`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get88 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get88(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get89', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get89();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchaseDiscounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get89 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get89(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get90', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get90();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchaseDispatches`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get90 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get90(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get91', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get91();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchasedServicePrices`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get91 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get91(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get92', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get92();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchasedServices`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get92 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get92(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get93', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get93();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchaseExpenses`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get93 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get93(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get94', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get94();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchaseInvoices`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get94 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get94(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get95', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get95();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchaseOrders`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get95 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get95(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get96', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get96();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchasePromotions`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get96 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get96(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get97', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get97();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchaseProposalContracts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get97 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get97(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get98', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get98();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchaseProposalOffers`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get98 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get98(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get99', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get99();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/purchaseProposalOrders`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get99 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get99(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get100', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get100();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/QCCriteriaAssignments`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get100 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get100(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get101', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get101();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/QCCriteriaSets`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get101 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get101(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get102', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get102();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/queries`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get102 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get102(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get103', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get103();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/quickProductionSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get103 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get103(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get104', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get104();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/repaymentPlans`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get104 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get104(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get105', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get105();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/safeDeposits`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get105 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get105(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get106', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get106();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/safeDepositSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get106 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get106(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get107', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get107();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesActivities`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get107 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get107(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get108', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get108();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesCampaigns`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get108 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get108(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get109', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get109();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesCategories`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get109 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get109(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get110', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get110();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/services/salesConditionsForSlipLines`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get110 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get110(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get111', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get111();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesConditionsForSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get111 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get111(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get112', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get112();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesContracts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get112 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get112(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get113', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get113();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesDiscounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get113 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get113(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get114', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get114();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesDispatches`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get114 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get114(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get115', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get115();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesExpenses`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get115 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get115(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get116', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get116();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesInvoices`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get116 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get116(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get117', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get117();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesItemPrices`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get117 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get117(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get118', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get118();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesmanDestinations`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get118 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get118(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get119', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get119();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesmanPositionCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get119 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get119(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get120', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get120();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesmanRoutes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get120 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get120(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get121', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get121();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesmen`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get121 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get121(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get122', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get122();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesOffers`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get122 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get122(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get123', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get123();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesOrders`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get123 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get123(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get124', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get124();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesPromotions`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get124 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get124(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get125', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get125();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/services/salesProvisionDistributionSlips`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get125 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get125(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get126', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get126();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/salesServicePrices`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get126 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get126(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get127', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get127();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/serialAndLotNumbers`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get127 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get127(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/describe`);
      expect(result).toEqual({ success: true });
    });

    it('should call getV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get128', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get128();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/help`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get128 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get128(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get129', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get129();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/shiftAssignments`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get129 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get129(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get130', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get130();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/shifts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get130 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get130(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get131', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get131();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/soldServices`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get131 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get131(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get132', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get132();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/specialCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get132 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get132(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get133', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get133();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/standardCostPeriods`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get133 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get133(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get134', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get134();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/stopCauses`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get134 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get134(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call sys_GetServiceSwagger', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sys_GetServiceSwagger();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/sys`);
      expect(result).toEqual({ success: true });
    });

    it('should call sys_GetServiceSwagger with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sys_GetServiceSwagger(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get135', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get135();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/towns`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get135 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get135(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call transaction_V1_GetServiceSwagger', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transaction_V1_GetServiceSwagger();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/transaction`);
      expect(result).toEqual({ success: true });
    });

    it('should call transaction_V1_GetServiceSwagger with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transaction_V1_GetServiceSwagger(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get136', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get136();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/unitSets`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get136 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get136(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get137', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get137();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/variants`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get137 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get137(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get138', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get138();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/vehicles`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get138 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get138(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get139', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get139();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/workflowDefinitions`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get139 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get139(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get140', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get140();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/workflowRoles`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get140 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get140(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get141', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get141();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/workstationCosts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get141 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get141(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get142', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get142();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/workstationGroups`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get142 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get142(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get143', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get143();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/workstations`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get143 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get143(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get144', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get144();

      expect(client['request']).toHaveBeenCalledWith('get', `/services/workstationStandardCosts`);
      expect(result).toEqual({ success: true });
    });

    it('should call getServiceSwaggerV1Get144 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as ServicesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getServiceSwaggerV1Get144(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });
  });
});
