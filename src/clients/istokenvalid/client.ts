/**
 * @module Istokenvalid
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  Istokenvalid,
  IstokenvalidSearchCriteria,
  IstokenvalidAnalytics,
  IstokenvalidQueryOptions,
} from './types';

/**
 * @class IstokenvalidClient
 * @extends BaseApiClient
 * @description
 * The `IstokenvalidClient` provides an interface for interacting with the `Istokenvalid` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Oturum İşlemleri
 * @category Token Kontrol
 */
export class IstokenvalidClient extends BaseApiClient {
  private readonly endpoint = '/istokenvalid';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `Istokenvalid` entities.
   * @param {IstokenvalidQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<Istokenvalid>>} A promise that resolves to a paginated API response of `Istokenvalid` entities.
   *
   * @example
   * // Retrieves the first 10 Istokenvalid entities with specific fields
   * const istokenvalid = await client.istokenvalid.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: IstokenvalidQueryOptions): Promise<ApiResponse<Istokenvalid>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method search
   * @description Searches for `Istokenvalid` entities based on a set of criteria.
   * @param {IstokenvalidSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<Istokenvalid>>} A promise that resolves to a paginated API response of matching `Istokenvalid` entities.
   *
   * @example
   * // Searches for Istokenvalid entities with a specific code
   * const results = await client.istokenvalid.search({ code: '123' });
   */
  async search(criteria: IstokenvalidSearchCriteria): Promise<ApiResponse<Istokenvalid>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<Istokenvalid>>} A promise that resolves to a paginated API response of matching `Istokenvalid` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.istokenvalid.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<Istokenvalid>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `Istokenvalid` entities.
   * @returns {Promise<IstokenvalidAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for Istokenvalid
   * const analytics = await client.istokenvalid.getAnalytics();
   */
  async getAnalytics(): Promise<IstokenvalidAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `Istokenvalid` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of Istokenvalid
   * const count = await client.istokenvalid.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Istokenvalid` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Istokenvalid
   * const columns = await client.istokenvalid.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Istokenvalid` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Istokenvalid
   * await client.istokenvalid.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Istokenvalid` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Istokenvalid
   * await client.istokenvalid.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Istokenvalid` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Istokenvalid
   * const isTracking = await client.istokenvalid.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {IstokenvalidSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: IstokenvalidSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
