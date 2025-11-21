import { DefinitionsClient } from './client';
import { DefinitionsField, DefinitionsSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('DefinitionsClient', () => {
  let client: DefinitionsClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new DefinitionsClient(config);
  });

  describe('Utility Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get database column properties', async () => {
      const mockColumns = [{ ColumnName: 'INTERNAL_REFERENCE', DataType: 'int' }];
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockColumns);

      const result = await client.getDbColumns();

      expect(client['request']).toHaveBeenCalledWith('get', '/definitions/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/definitions/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/definitions/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/definitions/checktrack');
      expect(result).toBe(true);
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call describeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/additionalTaxes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/ArpGroupAssignments`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get2', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get2();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/ArpMLDescriptons`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get2 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get2(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get3', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get3();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/Arps`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get3 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get3(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get4', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get4();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/ArpShipmentLocations`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get4 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get4(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get5', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get5();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/ArpSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get5 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get5(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get6', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get6();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/authorizationCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get6 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get6(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get7', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get7();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/bankAccounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get7 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get7(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get8', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get8();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/bankCredits`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get8 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get8(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get9', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get9();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/bankMLDescriptions`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get9 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get9(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get10', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get10();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/banks`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get10 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get10(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get11', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get11();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/bankSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get11 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get11(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get12', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get12();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/Boms`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get12 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get12(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get13', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get13();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/BomStandardCosts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get13 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get13(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get14', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get14();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/characteristics`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get14 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get14(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get15', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get15();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/characteristicSets`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get15 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get15(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get16', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get16();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/chequeAndPnoteRolls`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get16 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get16(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get17', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get17();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/chequeAndPnotes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get17 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get17(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get18', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get18();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/cities`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get18 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get18(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get19', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get19();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/collateralRolls`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get19 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get19(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get20', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get20();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/contacts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get20 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get20(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get21', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get21();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/costDistributionSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get21 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get21(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get22', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get22();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/countries`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get22 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get22(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get23', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get23();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/customerMLDescriptions`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get23 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get23(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get24', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get24();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/customers`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get24 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get24(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get25', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get25();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/customersOfSalesmen`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get25 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get25(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get26', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get26();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/customsOffices`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get26 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get26(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get27', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get27();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/deliveryCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get27 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get27(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get28', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get28();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/demandPeggings`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get28 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get28(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get29', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get29();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/demandSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get29 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get29(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get30', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get30();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/distributionOrders`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get30 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get30(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get31', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get31();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/distributionRoutes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get31 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get31(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get32', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get32();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/distributionTemplates`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get32 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get32(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get33', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get33();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/districts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get33 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get33(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get34', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get34();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/employeeCosts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get34 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get34(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get35', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get35();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/employeeGroups`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get35 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get35(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get36', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get36();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/employees`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get36 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get36(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get37', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get37();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/employeeStandardCosts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get37 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get37(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get38', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get38();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/engineeringChanges`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get38 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get38(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get39', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get39();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/exportCreditLetters`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get39 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get39(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get40', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get40();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/exportCredits`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get40 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get40(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get41', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get41();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/exportMovementSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get41 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get41(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get42', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get42();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/exportNationalizationSlips`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get42 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get42(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get43', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get43();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/exportOperationSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get43 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get43(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get44', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get44();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/exportTypedPurchaseInvoices`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get44 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get44(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get45', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get45();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/exportTypedSalesInvoices`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get45 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get45(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get46', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get46();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/extendedFieldCategories`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get46 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get46(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get47', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get47();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/extendedFieldDefinitions`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get47 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get47(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get48', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get48();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/extendedFields`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get48 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get48(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get49', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get49();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/FAAssignmentSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get49 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get49(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get50', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get50();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/FARegistries`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get50 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get50(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get51', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get51();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/freeZones`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get51 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get51(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get52', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get52();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/GLAccountMLDescriptions`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get52 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get52(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get53', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get53();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/GLAccounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get53 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get53(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get54', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get54();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/GLSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get54 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get54(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get55', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get55();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/groupCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get55 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get55(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get56', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get56();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/importCreditLetters`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get56 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get56(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get57', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get57();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/importDistributionSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get57 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get57(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get58', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get58();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/importOperationSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get58 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get58(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get59', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get59();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/inwardProcessingPermits`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get59 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get59(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get60', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get60();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/itemAlternatives`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get60 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get60(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get61', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get61();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/itemBoms`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get61 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get61(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get62', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get62();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/itemBrands`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get62 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get62(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get63', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get63();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/itemCharacteristics`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get63 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get63(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get64', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get64();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/itemClassAssignments`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get64 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get64(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get65', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get65();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/itemMLDescriptions`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get65 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get65(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get66', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get66();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/items`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get66 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get66(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get67', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get67();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/itemSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get67 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get67(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get68', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get68();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/itemStandardCosts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get68 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get68(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get69', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get69();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/locationCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get69 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get69(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtDatasDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDatasDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Datas`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtDatasDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDatasDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtCapiDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtCapiDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_CAPI`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtCapiDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtCapiDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtFirmsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFirmsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Firms`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtFirmsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFirmsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtUsersDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtUsersDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Users`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtUsersDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtUsersDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtTerminalsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtTerminalsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Terminals`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtTerminalsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtTerminalsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtCurrenciesDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtCurrenciesDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Currencies`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtCurrenciesDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtCurrenciesDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtRolesDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtRolesDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Roles`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtRolesDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtRolesDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtFirmparametersDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFirmparametersDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_FirmParameters`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtFirmparametersDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFirmparametersDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtTradegroupsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtTradegroupsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_TradeGroups`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtTradegroupsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtTradegroupsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtErpapplicationDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtErpapplicationDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_ERPApplication`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtErpapplicationDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtErpapplicationDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtDataDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDataDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Data`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtDataDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDataDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtFirmDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFirmDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Firm`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtFirmDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFirmDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtUserDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtUserDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_User`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtUserDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtUserDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtTerminalDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtTerminalDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Terminal`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtTerminalDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtTerminalDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtCurrencyDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtCurrencyDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Currency`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtCurrencyDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtCurrencyDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtRoleDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtRoleDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Role`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtRoleDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtRoleDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtTradegroupDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtTradegroupDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_TradeGroup`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtTradegroupDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtTradegroupDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtDatafieldsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDatafieldsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_DataFields`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtDatafieldsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDatafieldsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtDataobjecttypeDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDataobjecttypeDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_DataObjectType`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtDataobjecttypeDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDataobjecttypeDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtValidateerrorsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtValidateerrorsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_ValidateErrors`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtValidateerrorsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtValidateerrorsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtDataextensionsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDataextensionsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_DataExtensions`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtDataextensionsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDataextensionsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtDepartmentsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDepartmentsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Departments`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtDepartmentsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDepartmentsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtDivisionsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDivisionsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Divisions`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtDivisionsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDivisionsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtWarehousesDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtWarehousesDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_WareHouses`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtWarehousesDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtWarehousesDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtFactoriesDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFactoriesDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Factories`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtFactoriesDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFactoriesDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtPeriodsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtPeriodsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Periods`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtPeriodsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtPeriodsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtObjectsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtObjectsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Objects`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtObjectsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtObjectsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtDatafieldDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDatafieldDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_DataField`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtDatafieldDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDatafieldDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtValidateerrorDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtValidateerrorDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_ValidateError`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtValidateerrorDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtValidateerrorDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtDataextensionDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDataextensionDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_DataExtension`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtDataextensionDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDataextensionDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtDepartmentDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDepartmentDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Department`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtDepartmentDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDepartmentDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtDivisionDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDivisionDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Division`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtDivisionDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtDivisionDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtWarehouseDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtWarehouseDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_WareHouse`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtWarehouseDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtWarehouseDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtFactoryDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFactoryDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Factory`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtFactoryDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFactoryDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtPeriodDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtPeriodDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Period`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtPeriodDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtPeriodDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtObjitemDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtObjitemDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_ObjItem`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtObjitemDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtObjitemDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtFieldtypeDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFieldtypeDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_FieldType`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtFieldtypeDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFieldtypeDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtLinesDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtLinesDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_Lines`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtLinesDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtLinesDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtExtensionfieldsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtExtensionfieldsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_ExtensionFields`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtExtensionfieldsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtExtensionfieldsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtFactorydivisionsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFactorydivisionsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_FactoryDivisions`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtFactorydivisionsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFactorydivisionsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtExtensionfieldDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtExtensionfieldDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_ExtensionField`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtExtensionfieldDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtExtensionfieldDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call mtFactorydivisionDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFactorydivisionDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/MT_FactoryDivision`);
      expect(result).toEqual({ success: true });
    });

    it('should call mtFactorydivisionDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.mtFactorydivisionDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call resultData_DescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.resultData_DescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/ResultData`);
      expect(result).toEqual({ success: true });
    });

    it('should call resultData_DescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.resultData_DescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call resourceApiRepository_DescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.resourceApiRepository_DescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/ResourceApiRepository`);
      expect(result).toEqual({ success: true });
    });

    it('should call resourceApiRepository_DescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.resourceApiRepository_DescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get70', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get70();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/operations`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get70 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get70(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get71', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get71();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/opportunities`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get71 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get71(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get72', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get72();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/overheadAccounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get72 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get72(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get73', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get73();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/paymentDifferenceInvoices`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get73 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get73(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get74', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get74();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/paymentPlanGroupCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get74 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get74(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get75', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get75();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/paymentPlans`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get75 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get75(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get76', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get76();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/postCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get76 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get76(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get77', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get77();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/productionExceptions`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get77 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get77(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get78', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get78();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/productionLines`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get78 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get78(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get79', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get79();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/productionParameters`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get79 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get79(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get80', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get80();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/productionResourceUtilization`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get80 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get80(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get81', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get81();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/productionRoutes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get81 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get81(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call ptQuickprodslipreflistsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptQuickprodslipreflistsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/PT_QuickProdSlipRefLists`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call ptQuickprodslipreflistsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptQuickprodslipreflistsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call ptRealizedslipsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptRealizedslipsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/PT_RealizedSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call ptRealizedslipsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptRealizedslipsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call ptProdparamsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptProdparamsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/PT_ProdParams`);
      expect(result).toEqual({ success: true });
    });

    it('should call ptProdparamsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptProdparamsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call ptMeettypelistDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptMeettypelistDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/PT_MeetTypeList`);
      expect(result).toEqual({ success: true });
    });

    it('should call ptMeettypelistDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptMeettypelistDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call ptPrditmclslinesDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptPrditmclslinesDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/PT_PrdItmClsLines`);
      expect(result).toEqual({ success: true });
    });

    it('should call ptPrditmclslinesDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptPrditmclslinesDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call ptPrddisplinesDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptPrddisplinesDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/PT_PrdDispLines`);
      expect(result).toEqual({ success: true });
    });

    it('should call ptPrddisplinesDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptPrddisplinesDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call ptFastrealizeslipreflistsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptFastrealizeslipreflistsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/PT_FastRealizeSlipRefLists`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call ptFastrealizeslipreflistsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptFastrealizeslipreflistsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call ptWorkordlistsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptWorkordlistsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/PT_WorkOrdLists`);
      expect(result).toEqual({ success: true });
    });

    it('should call ptWorkordlistsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptWorkordlistsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call ptProdplnrltnlistsDescribeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptProdplnrltnlistsDescribeV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/PT_ProdPlnRltnLists`);
      expect(result).toEqual({ success: true });
    });

    it('should call ptProdplnrltnlistsDescribeV1 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.ptProdplnrltnlistsDescribeV1(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get82', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get82();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/projects`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get82 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get82(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get83', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get83();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchaseCampaigns`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get83 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get83(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get84', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get84();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/purchaseConditionsForSlipLines`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get84 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get84(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get85', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get85();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/purchaseConditionsForSlips`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get85 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get85(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get86', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get86();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchasedItemPrices`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get86 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get86(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get87', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get87();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchaseDiscounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get87 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get87(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get88', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get88();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchaseDispatches`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get88 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get88(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get89', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get89();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchasedServicePrices`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get89 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get89(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get90', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get90();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchasedServices`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get90 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get90(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get91', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get91();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchaseExpenses`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get91 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get91(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get92', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get92();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchaseInvoices`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get92 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get92(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get93', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get93();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchaseOrders`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get93 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get93(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get94', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get94();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchasePromotions`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get94 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get94(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get95', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get95();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/purchaseProposalContracts`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get95 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get95(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get96', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get96();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchaseProposalOffers`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get96 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get96(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get97', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get97();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/purchaseProposalOrders`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get97 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get97(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get98', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get98();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/QCCriteriaAssignments`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get98 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get98(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get99', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get99();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/QCCriteriaSets`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get99 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get99(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get100', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get100();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/quickProductionSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get100 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get100(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get101', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get101();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/repaymentPlans`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get101 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get101(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get102', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get102();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/safeDeposits`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get102 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get102(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get103', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get103();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/safeDepositSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get103 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get103(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get104', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get104();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesActivities`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get104 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get104(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get105', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get105();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesCampaigns`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get105 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get105(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get106', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get106();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesCategories`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get106 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get106(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get107', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get107();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/salesConditionsForSlipLines`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get107 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get107(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get108', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get108();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesConditionsForSlips`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get108 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get108(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get109', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get109();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesContracts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get109 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get109(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get110', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get110();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesDiscounts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get110 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get110(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get111', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get111();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesDispatches`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get111 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get111(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get112', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get112();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesExpenses`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get112 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get112(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get113', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get113();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesInvoices`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get113 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get113(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get114', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get114();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesItemPrices`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get114 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get114(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get115', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get115();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesmanDestinations`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get115 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get115(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get116', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get116();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesmanPositionCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get116 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get116(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get117', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get117();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesmanRoutes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get117 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get117(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get118', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get118();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesmen`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get118 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get118(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get119', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get119();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesOffers`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get119 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get119(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get120', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get120();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesOrders`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get120 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get120(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get121', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get121();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesPromotions`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get121 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get121(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get122', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get122();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/salesProvisionDistributionSlips`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get122 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get122(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get123', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get123();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/salesServicePrices`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get123 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get123(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get124', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get124();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/serialAndLotNumbers`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get124 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get124(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get125', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get125();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/shiftAssignments`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get125 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get125(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get126', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get126();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/shifts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get126 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get126(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get127', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get127();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/soldServices`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get127 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get127(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get128', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get128();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/specialCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get128 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get128(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get129', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get129();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/standardCostPeriods`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get129 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get129(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get130', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get130();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/stopCauses`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get130 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get130(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get131', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get131();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/towns`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get131 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get131(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get132', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get132();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/unitSets`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get132 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get132(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get133', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get133();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/variants`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get133 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get133(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get134', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get134();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/vehicles`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get134 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get134(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get135', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get135();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/workflowDefinitions`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get135 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get135(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get136', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get136();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/workflowRoles`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get136 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get136(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get137', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get137();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/workstationCosts`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get137 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get137(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get138', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get138();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/workstationGroups`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get138 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get138(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get139', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get139();

      expect(client['request']).toHaveBeenCalledWith('get', `/definitions/workstations`);
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get139 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get139(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get140', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get140();

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/definitions/workstationStandardCosts`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call describeV1Get140 with query options', async () => {
      const options = { limit: 10, fields: ['INTERNAL_REFERENCE'] as DefinitionsField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.describeV1Get140(options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });
  });
});
