/**
 * @module Capi
 */

import { BaseApiClient } from '../base';
import { ApiClientConfig } from '../../types';

/**
 * @class CapiClient
 * @extends BaseApiClient
 * @description
 * The `CapiClient` provides an interface for interacting with the `Capi` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Unity
 * @category Unity Method
 */
export class CapiClient extends BaseApiClient {
  private readonly endpoint = '/CAPI';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method capiFirmstrackV1
   * @description Corresponds to `GET /CAPI/Firms/track`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async capiFirmstrackV1(): Promise<string> {
    return this.request('get', `/CAPI/Firms/track`);
  }

  /**
   * @method capiFirmsuntrackV1
   * @description Corresponds to `GET /CAPI/Firms/untrack`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async capiFirmsuntrackV1(): Promise<string> {
    return this.request('get', `/CAPI/Firms/untrack`);
  }

  /**
   * @method capiFirmschecktrackV1
   * @description Corresponds to `GET /CAPI/Firms/checktrack`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async capiFirmschecktrackV1(): Promise<boolean> {
    return this.request('get', `/CAPI/Firms/checktrack`);
  }

  /**
   * @method capiUserstrackV1
   * @description Corresponds to `GET /CAPI/Users/track`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async capiUserstrackV1(): Promise<string> {
    return this.request('get', `/CAPI/Users/track`);
  }

  /**
   * @method capiUsersuntrackV1
   * @description Corresponds to `GET /CAPI/Users/untrack`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async capiUsersuntrackV1(): Promise<string> {
    return this.request('get', `/CAPI/Users/untrack`);
  }

  /**
   * @method capiUserschecktrackV1
   * @description Corresponds to `GET /CAPI/Users/checktrack`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async capiUserschecktrackV1(): Promise<boolean> {
    return this.request('get', `/CAPI/Users/checktrack`);
  }

  /**
   * @method capiTerminalstrackV1
   * @description Corresponds to `GET /CAPI/Terminals/track`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async capiTerminalstrackV1(): Promise<string> {
    return this.request('get', `/CAPI/Terminals/track`);
  }

  /**
   * @method capiTerminalsuntrackV1
   * @description Corresponds to `GET /CAPI/Terminals/untrack`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async capiTerminalsuntrackV1(): Promise<string> {
    return this.request('get', `/CAPI/Terminals/untrack`);
  }

  /**
   * @method capiTerminalschecktrackV1
   * @description Corresponds to `GET /CAPI/Terminals/checktrack`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async capiTerminalschecktrackV1(): Promise<boolean> {
    return this.request('get', `/CAPI/Terminals/checktrack`);
  }

  /**
   * @method capiRolestrackV1
   * @description Corresponds to `GET /CAPI/Roles/track`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async capiRolestrackV1(): Promise<string> {
    return this.request('get', `/CAPI/Roles/track`);
  }

  /**
   * @method capiRolesuntrackV1
   * @description Corresponds to `GET /CAPI/Roles/untrack`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async capiRolesuntrackV1(): Promise<string> {
    return this.request('get', `/CAPI/Roles/untrack`);
  }

  /**
   * @method capiRoleschecktrackV1
   * @description Corresponds to `GET /CAPI/Roles/checktrack`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async capiRoleschecktrackV1(): Promise<boolean> {
    return this.request('get', `/CAPI/Roles/checktrack`);
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Capi` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Capi
   * const columns = await client.capi.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Capi` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Capi
   * await client.capi.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Capi` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Capi
   * await client.capi.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Capi` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Capi
   * const isTracking = await client.capi.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }
}
