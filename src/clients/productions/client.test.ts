import { ProductionsClient } from './client';
import { ApiClientConfig } from '../../types';

describe('ProductionsClient', () => {
  let client: ProductionsClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new ProductionsClient(config);
  });

  describe('Utility Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get database column properties', async () => {
      const mockColumns = [{ ColumnName: 'INTERNAL_REFERENCE', DataType: 'int' }];
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockColumns);

      const result = await client.getDbColumns();

      expect(client['request']).toHaveBeenCalledWith('get', '/productions/dbcolumns');
      expect(result).toEqual(mockColumns);
    });

    it('should track changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking enabled');

      const result = await client.track();

      expect(client['request']).toHaveBeenCalledWith('get', '/productions/track');
      expect(result).toBe('Tracking enabled');
    });

    it('should untrack changes', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue('Tracking disabled');

      const result = await client.untrack();

      expect(client['request']).toHaveBeenCalledWith('get', '/productions/untrack');
      expect(result).toBe('Tracking disabled');
    });

    it('should check track status', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue(true);

      const result = await client.checkTrackStatus();

      expect(client['request']).toHaveBeenCalledWith('get', '/productions/checktrack');
      expect(result).toBe(true);
    });
  });

  describe('Custom Endpoint Methods', () => {
    it('should call prodOrderAutomaticRealizeV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prodOrderAutomaticRealizeV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/ProdOrderAutomaticRealize/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call prodOrderAutomaticGenerateV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Item: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          items: [
            { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, OpRef: 1 },
          ],
        },
        Count: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prodOrderAutomaticGenerateV1(
        1,
        1,
        1,
        'test',
        1,
        1,
        'test',
        'test',
        1,
        true,
        true,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productions/ProdOrderAutomaticGenerate/1/1/1/test/1/1/test/test/1/true/true`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call newPrdItmClsLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.newPrdItmClsLinesV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/NewPrdItmClsLines`);
      expect(result).toEqual({ success: true });
    });

    it('should call getLastErrorV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLastErrorV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/GetLastError`);
      expect(result).toEqual({ success: true });
    });

    it('should call getLastErrorStringV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLastErrorStringV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/GetLastErrorString`);
      expect(result).toEqual({ success: true });
    });

    it('should call fastRealizeFicheGenerateV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        UsageSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        WHTransSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        InputfromProdSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        ScarpSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fastRealizeFicheGenerateV1(
        1,
        1,
        1,
        1,
        1,
        true,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/FastRealizeFicheGenerate/1/1/1/1/1/true/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call quickProdFicheGenerateV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.quickProdFicheGenerateV1(1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/QuickProdFicheGenerate/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call changePOAndWOStatusV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.changePOAndWOStatusV1('test', 1, 1, true, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/ChangePOAndWOStatus/test/1/1/true/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call changeProdOrdBegAndEndPerV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.changeProdOrdBegAndEndPerV1('test', 1, 1, 1, 1, 1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/ChangeProdOrdBegAndEndPer/test/1/1/1/1/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call changeProdOrdPlnAmountV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.changeProdOrdPlnAmountV1('test', 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/ChangeProdOrdPlnAmount/test/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call changeWSInWorkOrderV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.changeWSInWorkOrderV1('test', 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/ChangeWSInWorkOrder/test/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call newPrdDispLinesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.newPrdDispLinesV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/NewPrdDispLines`);
      expect(result).toEqual({ success: true });
    });

    it('should call addDispLinesV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Item: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          items: [
            { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, OpRef: 1 },
          ],
        },
        Count: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addDispLinesV1('test', 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productions/AddDispLines/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fastRealizeFicheGenerateForWOrderV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        UsageSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        WHTransSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        InputfromProdSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        ScarpSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fastRealizeFicheGenerateForWOrderV1(
        1,
        1,
        1,
        1,
        1,
        true,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/FastRealizeFicheGenerateForWOrder/1/1/1/1/1/true/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call newSlipRefListsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.newSlipRefListsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/NewSlipRefLists`);
      expect(result).toEqual({ success: true });
    });

    it('should call prodOrderAutomaticGenerateWithFicheNoV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Item: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          items: [
            { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, OpRef: 1 },
          ],
        },
        Count: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prodOrderAutomaticGenerateWithFicheNoV1(
        1,
        1,
        1,
        'test',
        1,
        1,
        'test',
        'test',
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productions/ProdOrderAutomaticGenerateWithFicheNo/1/1/1/test/1/1/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call newWOLRefListV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.newWOLRefListV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/NewWOLRefList`);
      expect(result).toEqual({ success: true });
    });

    it('should call addStopTransV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Item: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          items: [
            { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
          ],
        },
        Count: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addStopTransV1(1, 'test', 'test', 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/AddStopTrans/1/test/test/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fastRealizeFicheGeneratewithDateV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        UsageSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        WHTransSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        InputfromProdSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        ScarpSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fastRealizeFicheGeneratewithDateV1(
        1,
        1,
        1,
        1,
        1,
        true,
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/FastRealizeFicheGeneratewithDate/1/1/1/1/1/true/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call newPlnRltnListV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.newPlnRltnListV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/NewPlnRltnList`);
      expect(result).toEqual({ success: true });
    });

    it('should call prodOrdPlannedRelationsV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Item: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          items: [
            {
              Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
              prodOrdRef: 1,
            },
          ],
        },
        Count: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prodOrdPlannedRelationsV1(1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productions/ProdOrdPlannedRelations/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call newReleaseProcessV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.newReleaseProcessV1(1);

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/NewReleaseProcess/1`);
      expect(result).toEqual({ success: true });
    });

    it('should call newQPSlipRefListsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.newQPSlipRefListsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/NewQPSlipRefLists`);
      expect(result).toEqual({ success: true });
    });

    it('should call quickProdFicheProcV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        QProdSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        UsageSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        WHTransSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        InputfromProdSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.quickProdFicheProcV1(1, 1, 1, 1, 1, 1, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/QuickProdFicheProc/1/1/1/1/1/1/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fastOperationCompleteForWOrderV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        UsageSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        WHTransSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        InputfromProdSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        ScarpSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fastOperationCompleteForWOrderV1(1, 1, 1, 1, 1, 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/FastOperationCompleteForWOrder/1/1/1/1/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call fastOperationCompleteWithDateV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        UsageSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        WHTransSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        InputfromProdSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
        ScarpSlips: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          Item: {
            Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
            items: [
              { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, lref: 1 },
            ],
          },
          Count: 1,
        },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.fastOperationCompleteWithDateV1(1, 1, 1, 1, 1, 'test', mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/FastOperationCompleteWithDate/1/1/1/1/1/test`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call addStopTransForAWOrdV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.addStopTransForAWOrdV1(1, 1, 1, 1, 1, 1, 'test');

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/AddStopTransForAWOrd/1/1/1/1/1/1/test`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call realizeFicheAnalyseV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Item: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          items: [
            { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, fcType: 1 },
          ],
        },
        Count: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.realizeFicheAnalyseV1(1, 1, true, 1, true, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productions/RealizeFicheAnalyse/1/1/true/1/true`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call newRSlipListV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.newRSlipListV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/NewRSlipList`);
      expect(result).toEqual({ success: true });
    });

    it('should call prodOrderCancelV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prodOrderCancelV1(1, true);

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/ProdOrderCancel/1/true`);
      expect(result).toEqual({ success: true });
    });

    it('should call prodOrderGenerateWithOrdLineV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Item: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          items: [
            { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, OpRef: 1 },
          ],
        },
        Count: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prodOrderGenerateWithOrdLineV1(
        1,
        1,
        1,
        'test',
        1,
        1,
        'test',
        'test',
        1,
        1,
        true,
        true,
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productions/ProdOrderGenerateWithOrdLine/1/1/1/test/1/1/test/test/1/1/true/true/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call updateProdOrdRevisionV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.updateProdOrdRevisionV1(1, 1, 1);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/UpdateProdOrdRevision/1/1/1`
      );
      expect(result).toEqual({ success: true });
    });

    it('should call getProdParamsV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Item: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          items: [
            {
              Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
              paramCode: 'TEST',
            },
          ],
        },
        Count: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getProdParamsV1(1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'get',
        `/productions/GetProdParams/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call newProdParamsV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.newProdParamsV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/NewProdParams`);
      expect(result).toEqual({ success: true });
    });

    it('should call prodOrderAutomaticGenerateWithParamsV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        Item: {
          Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
          items: [
            { Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' }, OpRef: 1 },
          ],
        },
        Count: 1,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.prodOrderAutomaticGenerateWithParamsV1(
        1,
        1,
        1,
        'test',
        1,
        1,
        'test',
        'test',
        1,
        mockData
      );

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productions/ProdOrderAutomaticGenerateWithParams/1/1/1/test/1/1/test/test/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call consecutiveProcurementOfProdOrdV1 with data', async () => {
      const mockData = {
        Meta: { href: 'test', mediaType: 'application/json', apiVersion: 'v1' },
        purchase: true,
        production: false,
        invTrans: true,
        stockMeet: false,
        demandMeetProposal: true,
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.consecutiveProcurementOfProdOrdV1(1, true, 1, mockData);

      expect(client['request']).toHaveBeenCalledWith(
        'post',
        `/productions/ConsecutiveProcurementOfProdOrd/1/true/1`,
        mockData
      );
      expect(result).toEqual({ success: true });
    });

    it('should call newMeetTypesV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.newMeetTypesV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/NewMeetTypes`);
      expect(result).toEqual({ success: true });
    });

    it('should call getLastProdErrorV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.getLastProdErrorV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/GetLastProdError`);
      expect(result).toEqual({ success: true });
    });

    it('should call opTransV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.opTransV1();

      expect(client['request']).toHaveBeenCalledWith('get', `/productions/opTrans`);
      expect(result).toEqual({ success: true });
    });

    it('should call opTransSetV1', async () => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({ success: true });

      const result = await client.opTransSetV1(true);

      expect(client['request']).toHaveBeenCalledWith('post', `/productions/opTrans/true`);
      expect(result).toEqual({ success: true });
    });
  });
});
