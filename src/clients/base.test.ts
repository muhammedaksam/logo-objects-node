import axios from 'axios';
import { BaseApiClient } from './base';

jest.mock('axios', () => {
  const mockAxiosFn = jest.fn();
  (mockAxiosFn as any).create = jest.fn();
  return {
    __esModule: true,
    default: mockAxiosFn,
  };
});

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

    const mockedAxios = axios as unknown as jest.Mock;
    mockedAxios.mockRejectedValueOnce(new Error('Network error'));

    await expect((client as any).getAccessToken()).rejects.toThrow(
      'Failed to retrieve access token: Network error'
    );

    mockedAxios.mockRejectedValueOnce(new Error('Network error'));
    try {
      await (client as any).getAccessToken();
    } catch (e: any) {
      expect(e.cause).toBeDefined();
      expect(e.cause.message).toBe('Network error');
    }
  });
});
