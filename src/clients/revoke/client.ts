/**
 * @module Revoke
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import { Revoke, RevokeSearchCriteria, RevokeAnalytics, RevokeQueryOptions } from './types';

/**
 * @class RevokeClient
 * @extends BaseApiClient
 * @description
 * The `RevokeClient` provides an interface for interacting with the `Revoke` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Oturum İşlemleri
 * @category Oturum Çıkış
 */
export class RevokeClient extends BaseApiClient {
  private readonly endpoint = '/revoke';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `Revoke` entities.
   * @param {RevokeQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<Revoke>>} A promise that resolves to a paginated API response of `Revoke` entities.
   *
   * @example
   * // Retrieves the first 10 Revoke entities with specific fields
   * const revoke = await client.revoke.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: RevokeQueryOptions): Promise<ApiResponse<Revoke>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method search
   * @description Searches for `Revoke` entities based on a set of criteria.
   * @param {RevokeSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<Revoke>>} A promise that resolves to a paginated API response of matching `Revoke` entities.
   *
   * @example
   * // Searches for Revoke entities with a specific code
   * const results = await client.revoke.search({ code: '123' });
   */
  async search(criteria: RevokeSearchCriteria): Promise<ApiResponse<Revoke>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<Revoke>>} A promise that resolves to a paginated API response of matching `Revoke` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.revoke.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<Revoke>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `Revoke` entities.
   * @returns {Promise<RevokeAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for Revoke
   * const analytics = await client.revoke.getAnalytics();
   */
  async getAnalytics(): Promise<RevokeAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `Revoke` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of Revoke
   * const count = await client.revoke.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Revoke` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Revoke
   * const columns = await client.revoke.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Revoke` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Revoke
   * await client.revoke.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Revoke` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Revoke
   * await client.revoke.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Revoke` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Revoke
   * const isTracking = await client.revoke.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {RevokeSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: RevokeSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
