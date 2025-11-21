import { FirmdocsClient } from './client';
import { Firmdocs, FirmdocsField, FirmdocsSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('FirmdocsClient', () => {
  let client: FirmdocsClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new FirmdocsClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get firmdocs by ID', async () => {
      const mockFirmdocs: Firmdocs = {
        INTERNAL_REFERENCE: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockFirmdocs);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/Firmdocs/1');
      expect(result).toEqual(mockFirmdocs);
    });

    it('should get firmdocs by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', '/Firmdocs/1?expandLevel=full');
    });

    it('should delete a firmdocs', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/Firmdocs/1');
      expect(result).toEqual({ success: true });
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

      expect(client['request']).toHaveBeenCalledWith('get', '/Firmdocs/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/Firmdocs/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/Firmdocs/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/Firmdocs/checktrack');
      expect(result).toBe(true);
    });
  });

  describe('Error Handling', () => {
    it('should handle API errors gracefully', async () => {
      const apiError = new Error('API Error: Firmdocs not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow('API Error: Firmdocs not found');
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call firmDocs_V1_ with data', async () => {
      const mockData = {};
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmDocs_V1_(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/Firmdocs/saveorupdate`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call firmDocs_V1_PostForSearch with data', async () => {
      const mockData = {};
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.firmDocs_V1_PostForSearch(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/Firmdocs/detailsearch`, mockData);
      expect(result).toEqual({ success: true });
    });
  });
});
