/**
 * @module Licenses
 */

import { BaseApiClient } from '../base';
import { ApiClientConfig } from '../../types';

/**
 * @class LicensesClient
 * @extends BaseApiClient
 * @description
 * The `LicensesClient` provides an interface for interacting with the `Licenses` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *

 */
export class LicensesClient extends BaseApiClient {
  private readonly endpoint = '/licenses';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method authorization_V1_licenses
   * @description Corresponds to `GET /licenses/{id}/type/{type}`
   * @param {number} id - id
   * @param {string} type - type
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async authorization_V1_licenses(id: number, type: string): Promise<Record<string, unknown>> {
    return this.request('get', `/licenses/${id}/type/${type}`);
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Licenses` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Licenses
   * const columns = await client.licenses.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Licenses` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Licenses
   * await client.licenses.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Licenses` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Licenses
   * await client.licenses.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Licenses` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Licenses
   * const isTracking = await client.licenses.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }
}
