import { SysClient } from './client';
import { ApiClientConfig } from '../../types';

describe('SysClient', () => {
  let client: SysClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new SysClient(config);
  });

  describe('Utility Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get database column properties', async () => {
      const mockColumns = [{ ColumnName: 'INTERNAL_REFERENCE', DataType: 'int' }];
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockColumns);

      const result = await client.getDbColumns();

      expect(client['request']).toHaveBeenCalledWith('get', '/sys/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/sys/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/sys/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/sys/checktrack');
      expect(result).toBe(true);
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call sys_IdmEnabled', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sys_IdmEnabled('test');

      expect(client['request']).toHaveBeenCalledWith('get', `/sys/IdmEnabled/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call sys_UpdateTenant with data', async () => {
      const mockData = {
        DataObjectParameter: {
          ReplicMode: false,
          CheckParams: true,
          CheckRight: true,
          Validation: true,
          CheckApproveDate: false,
          ApplyCampaignOnPreSave: false,
          ApplyConditionOnPreSave: false,
          FormSeriLotLinesOnPreSave: false,
          FillAccCodesOnPreSave: false,
          CreateCompositeLinesOnPreSave: false,
          ExtraQueryParameters: {
            fields: 'CODE,NAME',
            expand: 'full',
            expandLevel: 'full',
            sort: 'CODE',
            q: 'ACTIVE eq 1',
          },
        },
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Firm: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          index: 1,
          FirmNr: 1,
          name: 'Test Firm',
        },
        Period: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          index: 1,
          number: 1,
          BeginDate: '2023-01-01',
        },
        User: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          nr: 1,
          name: 'Test User',
        },
        DBInfo: {
          host_name: 'localhost',
          port: 5432,
          db_name: 'test_db',
          db_type: 1,
          dbversion: '1.0.0',
          schema_version: '1.0',
          schema_name: 'public',
          admin_username: 'admin',
          admin_password: 'password',
          tenant_id: 'test-tenant',
          tenantapp_id: 'test-app',
          appsegment_id: 'test-segment',
          serveraddress: 'localhost',
          server_username: 'server',
          server_password: 'serverpass',
        },
        ProcessInstanceId: 'test-process-id',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sys_UpdateTenant('test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/sys/UpdateTenant/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call sys_CreateTenant with data', async () => {
      const mockData = {
        DataObjectParameter: {
          ReplicMode: false,
          CheckParams: true,
          CheckRight: true,
          Validation: true,
          CheckApproveDate: false,
          ApplyCampaignOnPreSave: false,
          ApplyConditionOnPreSave: false,
          FormSeriLotLinesOnPreSave: false,
          FillAccCodesOnPreSave: false,
          CreateCompositeLinesOnPreSave: false,
          ExtraQueryParameters: {
            fields: 'CODE,NAME',
            expand: 'full',
            expandLevel: 'full',
            sort: 'CODE',
            q: 'ACTIVE eq 1',
          },
        },
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Firm: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          index: 1,
          FirmNr: 1,
          name: 'Test Firm',
        },
        Period: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          index: 1,
          number: 1,
          BeginDate: '2023-01-01',
        },
        User: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          nr: 1,
          name: 'Test User',
        },
        DBInfo: {
          host_name: 'localhost',
          port: 5432,
          db_name: 'test_db',
          db_type: 1,
          dbversion: '1.0.0',
          schema_version: '1.0',
          schema_name: 'public',
          admin_username: 'admin',
          admin_password: 'password',
          tenant_id: 'test-tenant',
          tenantapp_id: 'test-app',
          appsegment_id: 'test-segment',
          serveraddress: 'localhost',
          server_username: 'server',
          server_password: 'serverpass',
        },
        ProcessInstanceId: 'test-process-id',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sys_CreateTenant(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/sys/CreateTenant`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call sys_CreateUser with data', async () => {
      const mockData = {
        DataObjectParameter: {
          ReplicMode: false,
          CheckParams: true,
          CheckRight: true,
          Validation: true,
          CheckApproveDate: false,
          ApplyCampaignOnPreSave: false,
          ApplyConditionOnPreSave: false,
          FormSeriLotLinesOnPreSave: false,
          FillAccCodesOnPreSave: false,
          CreateCompositeLinesOnPreSave: false,
          ExtraQueryParameters: {
            fields: 'CODE,NAME',
            expand: 'full',
            expandLevel: 'full',
            sort: 'CODE',
            q: 'ACTIVE eq 1',
          },
        },
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Firm: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          index: 1,
          FirmNr: 1,
          name: 'Test Firm',
        },
        Period: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          index: 1,
          number: 1,
          BeginDate: '2023-01-01',
        },
        User: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          nr: 1,
          name: 'Test User',
        },
        DBInfo: {
          host_name: 'localhost',
          port: 5432,
          db_name: 'test_db',
          db_type: 1,
          dbversion: '1.0.0',
          schema_version: '1.0',
          schema_name: 'public',
          admin_username: 'admin',
          admin_password: 'password',
          tenant_id: 'test-tenant',
          tenantapp_id: 'test-app',
          appsegment_id: 'test-segment',
          serveraddress: 'localhost',
          server_username: 'server',
          server_password: 'serverpass',
        },
        ProcessInstanceId: 'test-process-id',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sys_CreateUser(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/sys/CreateUser`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call sys_GetActiveState', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sys_GetActiveState();

      expect(client['request']).toHaveBeenCalledWith('get', `/sys/activestate`);
      expect(result).toEqual({ success: true });
    });

    it('should call sys_healthcheck', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sys_healthcheck();

      expect(client['request']).toHaveBeenCalledWith('get', `/sys/healthcheck`);
      expect(result).toEqual({ success: true });
    });

    it('should call sys_healthcheckGet', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sys_healthcheckGet();

      expect(client['request']).toHaveBeenCalledWith('get', `/sys/servicehealthcheck`);
      expect(result).toEqual({ success: true });
    });

    it('should call sys_healthcheckerror', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.sys_healthcheckerror();

      expect(client['request']).toHaveBeenCalledWith('get', `/sys/healthcheckerror`);
      expect(result).toEqual({ success: true });
    });
  });
});
