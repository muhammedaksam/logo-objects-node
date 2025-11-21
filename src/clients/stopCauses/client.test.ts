import { StopCausesClient } from './client';
import { StopCauses, StopCausesField, StopCausesSortSpec } from './types';
import { ApiClientConfig } from '../../types';

describe('StopCausesClient', () => {
  let client: StopCausesClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new StopCausesClient(config);
  });

  describe('Basic CRUD Operations', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get all stopCauses', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/stopCauses');
      expect(result).toEqual(mockResponse);
    });

    it('should get all stopCauses with options', async () => {
      const options = { limit: 10, offset: 0, sort: ['CODE'] as StopCausesSortSpec };
      await client.getAll(options);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        '/stopCauses?limit=10&offset=0&sort=CODE'
      );
    });

    it('should get stopCauses by ID', async () => {
      const mockStopCauses: StopCauses = {
        INTERNAL_REFERENCE: 1,
        CODE: 'Test CODE',
        NAME: 'Test NAME',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockStopCauses);

      const result = await client.getById(1);

      expect(client['request']).toHaveBeenCalledWith('get', '/stopCauses/1');
      expect(result).toEqual(mockStopCauses);
    });

    it('should get stopCauses by ID with options', async () => {
      const options = { expandLevel: 'full' };
      await client.getById(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', '/stopCauses/1?expandLevel=full');
    });

    it('should create a new stopCauses', async () => {
      const newStopCauses = {
        CODE: 'Test CODE',
        NAME: 'Test NAME',
      };
      const createdStopCauses: StopCauses = { ...newStopCauses, INTERNAL_REFERENCE: 1 };
      jest.spyOn(client, 'request' as any).mockResolvedValue(createdStopCauses);

      const result = await client.create(newStopCauses);

      expect(client['request']).toHaveBeenCalledWith('post', '/stopCauses', newStopCauses);
      expect(result).toEqual(createdStopCauses);
    });

    it('should update a stopCauses', async () => {
      const updateStopCauses = {
        INTERNAL_REFERENCE: 1,
        CODE: 'Test CODE',
        NAME: 'Test NAME',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(updateStopCauses);

      const result = await client.update(1, updateStopCauses);

      expect(client['request']).toHaveBeenCalledWith('put', '/stopCauses/1', updateStopCauses);
      expect(result).toEqual(updateStopCauses);
    });

    it('should patch a stopCauses', async () => {
      const patchData = { CODE: 'Updated' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.patch(1, patchData);

      expect(client['request']).toHaveBeenCalledWith('patch', '/stopCauses/1', patchData);
      expect(result).toEqual({ success: true });
    });

    it('should delete a stopCauses', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.delete(1);

      expect(client['request']).toHaveBeenCalledWith('delete', '/stopCauses/1');
      expect(result).toEqual({ success: true });
    });
  });

  describe('Search Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'getAll').mockResolvedValue({ items: [], totalCount: 0 });
    });

    it('should search stopCauses', async () => {
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
  });

  describe('Analytics Methods', () => {
    it('should get stopCauses analytics', async () => {
      jest.spyOn(client, 'getCount').mockResolvedValue(100);

      const result = await client.getAnalytics();

      expect(result).toHaveProperty('total', 100);
    });

    it('should get stopCauses count', async () => {
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

      expect(client['request']).toHaveBeenCalledWith('get', '/stopCauses/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/stopCauses/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/stopCauses/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/stopCauses/checktrack');
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
      const apiError = new Error('API Error: StopCauses not found');
      jest.spyOn(client, 'request' as any).mockRejectedValue(apiError);

      await expect(client.getById(999)).rejects.toThrow('API Error: StopCauses not found');
    });

    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network Error: Connection timeout');
      jest.spyOn(client, 'request' as any).mockRejectedValue(networkError);

      await expect(client.getAll()).rejects.toThrow('Network Error: Connection timeout');
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call equalizePayAmntV1 with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1(mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/stopCauses/EqualizePayAmnt`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Get', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Get(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/EqualizePayAmnt`);
      expect(result).toEqual({ success: true });
    });

    it('should call equalizePayAmntV1Get with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.equalizePayAmntV1Get(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addSeriLotsForKsV1(1, 'test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/stopCauses/1/AddSeriLotsForKs/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addSeriLotsForKsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/AddSeriLotsForKs/test/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillSMMACCCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/FillSMMACCCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillSMMACCCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/FillSMMACCCodes`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByLRefV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/stopCauses/1/AttachADespatchByLRef/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByLRefV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/AttachADespatchByLRef/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.attachADespatchByFicheNoV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/stopCauses/1/AttachADespatchByFicheNo/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call attachADespatchByFicheNoV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/AttachADespatchByFicheNo/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.deleteCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/DeleteCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call deleteCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/DeleteCampaign`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/SetClientInfo`);
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call setClientInfoV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setClientInfoV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/stopCauses/SetClientInfo`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getRelevantCampaignsV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/GetRelevantCampaigns`);
      expect(result).toEqual({ success: true });
    });

    it('should call getRelevantCampaignsV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/GetRelevantCampaigns`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignSpecificV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/stopCauses/1/ApplyCampaignSpecific/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignSpecificV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ApplyCampaignSpecific/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/ImportImage/test/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call importImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ImportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportBase64EncodedImageV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/stopCauses/1/ExportBase64EncodedImage/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ExportBase64EncodedImage/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importBase64EncodedImageV1(1, 'test', 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/stopCauses/1/ImportBase64EncodedImage/test/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importBase64EncodedImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ImportBase64EncodedImage/test/test/test`,
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
        `/stopCauses/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/1/readwithbodyparamters`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call postReadByIdWithBodyParametersV1 with query options', async () => {
      const mockData = {};
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.postReadByIdWithBodyParametersV1(1, mockData, options);

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

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/ExportToXML/test/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXMLV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ExportToXML/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXMLFileV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/stopCauses/1/ImportFromXMLFile/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXMLFileV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ImportFromXMLFile/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.createCompositeLinesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/CreateCompositeLines`);
      expect(result).toEqual({ success: true });
    });

    it('should call createCompositeLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/CreateCompositeLines`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.formSeriLotLinesV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/FormSeriLotLines/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call formSeriLotLinesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/FormSeriLotLines/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/ApplyCampaign`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call applyCampaignV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyCampaignV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/stopCauses/ApplyCampaign`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnV1(1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/ApplyRePayPln/1/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ApplyRePayPln/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyRePayPlnForInvV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/stopCauses/1/ApplyRePayPlnForInv/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyRePayPlnForInvV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ApplyRePayPlnForInv/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.importFromXmlStrV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/stopCauses/1/ImportFromXmlStr/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call importFromXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ImportFromXmlStr/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportToXmlStrV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/ExportToXmlStr/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportToXmlStrV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ExportToXmlStr/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyConditionV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/ApplyCondition`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyConditionV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ApplyCondition`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.exportImageV1(1, 'test', 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/ExportImage/test/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call exportImageV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ExportImage/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/ReCalculate`);
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call reCalculateV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.reCalculateV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/stopCauses/ReCalculate`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/FillAccCodes`);
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1(1, options);

      expect(client['request']).toHaveBeenCalledWith('get', expect.stringContaining('?'));
      expect(result).toEqual({ success: true });
    });

    it('should call fillAccCodesV1Post with data', async () => {
      const mockData = { CODE: 'Test CODE', NAME: 'Test NAME' };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fillAccCodesV1Post(mockData);

      expect(client['request']).toHaveBeenCalledWith('post', `/stopCauses/FillAccCodes`, mockData);
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.applyADiscountV1(1, 'test');

      expect(client['request']).toHaveBeenCalledWith('get', `/stopCauses/1/ApplyADiscount/test`);
      expect(result).toEqual({ success: true });
    });

    it('should call applyADiscountV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/ApplyADiscount/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.setDefIntValueV1(1, 'test', 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/stopCauses/1/SetDefIntValue/test/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call setDefIntValueV1 with query options', async () => {
      const options = { limit: 10, fields: ['CODE', 'NAME'] as StopCausesField[] };
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
        `/stopCauses/SetDefIntValue/test/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });
  });
});
