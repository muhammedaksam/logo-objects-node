import { TransactionClient } from './client';
import { ApiClientConfig } from '../../types';

describe('TransactionClient', () => {
  let client: TransactionClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new TransactionClient(config);
  });

  describe('Utility Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get database column properties', async () => {
      const mockColumns = [{ ColumnName: 'INTERNAL_REFERENCE', DataType: 'int' }];
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockColumns);

      const result = await client.getDbColumns();

      expect(client['request']).toHaveBeenCalledWith('get', '/transaction/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/transaction/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/transaction/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/transaction/checktrack');
      expect(result).toBe(true);
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call transaction_V1_Begin', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transaction_V1_Begin();

      expect(client['request']).toHaveBeenCalledWith('get', `/transaction/begin`);
      expect(result).toEqual({ success: true });
    });

    it('should call transaction_V1_Commit', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transaction_V1_Commit('test');

      expect(client['request']).toHaveBeenCalledWith('post', `/transaction/test/commit`);
      expect(result).toEqual({ success: true });
    });

    it('should call transaction_V1_RollBack', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.transaction_V1_RollBack('test');

      expect(client['request']).toHaveBeenCalledWith('post', `/transaction/test/rollback`);
      expect(result).toEqual({ success: true });
    });
  });
});
