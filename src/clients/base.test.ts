import axios from 'axios';
import { BaseApiClient } from './base';

jest.mock('axios');

describe('BaseApiClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (axios.create as jest.Mock).mockReturnValue({
      interceptors: {
        request: { use: jest.fn() },
        response: { use: jest.fn() },
      },
      request: jest.fn(),
    });
  });

  it('throws an error with cause when getting access token fails', async () => {
    const client = new BaseApiClient({
      baseURL: 'http://test.local',
      grantTypeUsername: 'user',
      grantTypePassword: 'password',
      grantTypeFirmno: '123',
      grantTypeBasicAuth: 'basicauth123',
    });

    const mockAxios = axios as unknown as jest.Mock;
    mockAxios.mockRejectedValue(new Error('Network error'));

    // We can call getAccessToken by accessing it as any
    await expect((client as any).getAccessToken()).rejects.toThrow(
      'Failed to retrieve access token: Network error'
    );

    try {
      await (client as any).getAccessToken();
    } catch (e: any) {
      expect(e.cause).toBeDefined();
      expect(e.cause.message).toBe('Network error');
    }
  });
});
