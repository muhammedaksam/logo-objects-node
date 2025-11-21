/**
 * @module Trackables
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  Trackables,
  TrackablesSearchCriteria,
  TrackablesAnalytics,
  TrackablesQueryOptions,
} from './types';

/**
 * @class TrackablesClient
 * @extends BaseApiClient
 * @description
 * The `TrackablesClient` provides an interface for interacting with the `Trackables` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category İzlenebilir Nesne Listesi
 */
export class TrackablesClient extends BaseApiClient {
  private readonly endpoint = '/trackables';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `Trackables` entities.
   * @param {TrackablesQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<Trackables>>} A promise that resolves to a paginated API response of `Trackables` entities.
   *
   * @example
   * // Retrieves the first 10 Trackables entities with specific fields
   * const trackables = await client.trackables.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: TrackablesQueryOptions): Promise<ApiResponse<Trackables>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method search
   * @description Searches for `Trackables` entities based on a set of criteria.
   * @param {TrackablesSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<Trackables>>} A promise that resolves to a paginated API response of matching `Trackables` entities.
   *
   * @example
   * // Searches for Trackables entities with a specific code
   * const results = await client.trackables.search({ code: '123' });
   */
  async search(criteria: TrackablesSearchCriteria): Promise<ApiResponse<Trackables>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<Trackables>>} A promise that resolves to a paginated API response of matching `Trackables` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.trackables.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<Trackables>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `Trackables` entities.
   * @returns {Promise<TrackablesAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for Trackables
   * const analytics = await client.trackables.getAnalytics();
   */
  async getAnalytics(): Promise<TrackablesAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `Trackables` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of Trackables
   * const count = await client.trackables.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Trackables` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Trackables
   * const columns = await client.trackables.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Trackables` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Trackables
   * await client.trackables.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Trackables` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Trackables
   * await client.trackables.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Trackables` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Trackables
   * const isTracking = await client.trackables.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {TrackablesSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: TrackablesSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
