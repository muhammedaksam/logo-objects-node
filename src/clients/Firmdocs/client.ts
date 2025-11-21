/**
 * @module Firmdocs
 */

import { BaseApiClient } from '../base';
import { ApiClientConfig } from '../../types';
import { Firmdocs, FirmdocsQueryOptions } from './types';

/**
 * @class FirmdocsClient
 * @extends BaseApiClient
 * @description
 * The `FirmdocsClient` provides an interface for interacting with the `Firmdocs` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Diğer
 * @category Tüm Ekler
 */
export class FirmdocsClient extends BaseApiClient {
  private readonly endpoint = '/Firmdocs';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getById
   * @description Retrieves a single `Firmdocs` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `Firmdocs` entity.
   * @param {FirmdocsQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<Firmdocs>} A promise that resolves to the requested `Firmdocs` entity.
   *
   * @example
   * // Retrieves a Firmdocs with ID 123 with specific fields
   * const firmdocs = await client.firmdocs.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(id: number, options?: FirmdocsQueryOptions): Promise<Firmdocs> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method delete
   * @description Deletes a `Firmdocs` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `Firmdocs` entity to delete.
   * @returns {Promise<Firmdocs>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes a Firmdocs with ID 123
   * await client.firmdocs.delete(123);
   */
  async delete(id: number): Promise<Firmdocs> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method firmDocs_V1_
   * @description Corresponds to `POST /Firmdocs/saveorupdate`
   * @param {Partial<Firmdocs>} data - The request body.
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async firmDocs_V1_(data: Partial<Firmdocs>): Promise<number> {
    return this.request('post', `/Firmdocs/saveorupdate`, data);
  }

  /**
   * @method firmDocs_V1_PostForSearch
   * @description Corresponds to `POST /Firmdocs/detailsearch`
   * @param {Partial<Firmdocs>} data - The request body.
   * @returns {Promise<Firmdocs[]>} A promise resolving to the response.
   */
  async firmDocs_V1_PostForSearch(data: Partial<Firmdocs>): Promise<Firmdocs[]> {
    return this.request('post', `/Firmdocs/detailsearch`, data);
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Firmdocs` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Firmdocs
   * const columns = await client.firmdocs.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Firmdocs` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Firmdocs
   * await client.firmdocs.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Firmdocs` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Firmdocs
   * await client.firmdocs.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Firmdocs` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Firmdocs
   * const isTracking = await client.firmdocs.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }
}
