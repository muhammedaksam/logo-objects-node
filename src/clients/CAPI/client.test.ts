import { CapiClient } from './client';
import { ApiClientConfig } from '../../types';

describe('CapiClient', () => {
  let client: CapiClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new CapiClient(config);
  });

  describe('Utility Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get database column properties', async () => {
      const mockColumns = [{ ColumnName: 'INTERNAL_REFERENCE', DataType: 'int' }];
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockColumns);

      const result = await client.getDbColumns();

      expect(client['request']).toHaveBeenCalledWith('get', '/CAPI/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/CAPI/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/CAPI/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/CAPI/checktrack');
      expect(result).toBe(true);
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call capiFirmstrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiFirmstrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Firms/track`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiFirmsuntrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiFirmsuntrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Firms/untrack`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiFirmschecktrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiFirmschecktrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Firms/checktrack`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiUserstrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiUserstrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Users/track`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiUsersuntrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiUsersuntrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Users/untrack`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiUserschecktrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiUserschecktrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Users/checktrack`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiTerminalstrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiTerminalstrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Terminals/track`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiTerminalsuntrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiTerminalsuntrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Terminals/untrack`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiTerminalschecktrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiTerminalschecktrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Terminals/checktrack`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiRolestrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiRolestrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Roles/track`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiRolesuntrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiRolesuntrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Roles/untrack`);
      expect(result).toEqual({ success: true });
    });

    it('should call capiRoleschecktrackV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.capiRoleschecktrackV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/CAPI/Roles/checktrack`);
      expect(result).toEqual({ success: true });
    });
  });
});
