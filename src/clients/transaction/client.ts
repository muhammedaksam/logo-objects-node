/**
 * @module Transaction
 */

import { BaseApiClient } from '../base';
import { ApiClientConfig } from '../../types';

/**
 * @class TransactionClient
 * @extends BaseApiClient
 * @description
 * The `TransactionClient` provides an interface for interacting with the `Transaction` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *

 */
export class TransactionClient extends BaseApiClient {
  private readonly endpoint = '/transaction';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method transaction_V1_Begin
   * @description Corresponds to `GET /transaction/begin`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async transaction_V1_Begin(): Promise<string> {
    return this.request('get', `/transaction/begin`);
  }

  /**
   * @method transaction_V1_Commit
   * @description Corresponds to `POST /transaction/{id}/commit`
   * @param {string} id - id
   * @returns {Promise<unknown>} A promise resolving to the response.
   */
  async transaction_V1_Commit(id: string): Promise<unknown> {
    return this.request('post', `/transaction/${id}/commit`);
  }

  /**
   * @method transaction_V1_RollBack
   * @description Corresponds to `POST /transaction/{id}/rollback`
   * @param {string} id - id
   * @returns {Promise<unknown>} A promise resolving to the response.
   */
  async transaction_V1_RollBack(id: string): Promise<unknown> {
    return this.request('post', `/transaction/${id}/rollback`);
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Transaction` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Transaction
   * const columns = await client.transaction.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Transaction` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Transaction
   * await client.transaction.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Transaction` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Transaction
   * await client.transaction.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Transaction` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Transaction
   * const isTracking = await client.transaction.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }
}
