/**
 * @module Queries
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  Queries,
  QueriesSearchCriteria,
  QueriesAnalytics,
  ResultData,
  QueriesQueryOptions,
} from './types';

/**
 * @class QueriesClient
 * @extends BaseApiClient
 * @description
 * The `QueriesClient` provides an interface for interacting with the `Queries` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Generic SQL Sorgusu
 * @category Generic Unsafe Select SQL Sorgusu
 */
export class QueriesClient extends BaseApiClient {
  private readonly endpoint = '/Queries';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `Queries` entities.
   * @param {QueriesQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<Queries>>} A promise that resolves to a paginated API response of `Queries` entities.
   *
   * @example
   * // Retrieves the first 10 Queries entities with specific fields
   * const queries = await client.queries.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: QueriesQueryOptions): Promise<ApiResponse<Queries>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `Queries` entity.
   * @param {Partial<Queries>} data - The data for the new `Queries` entity.
   * @returns {Promise<Queries>} A promise that resolves to the newly created `Queries` entity.
   *
   * @example
   * // Creates a new Queries
   * const newQueries = await client.queries.create({
   *   name: 'New Queries',
   *   // ... other properties
   * });
   */
  async create(data: Partial<Queries>): Promise<Queries> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method search
   * @description Searches for `Queries` entities based on a set of criteria.
   * @param {QueriesSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<Queries>>} A promise that resolves to a paginated API response of matching `Queries` entities.
   *
   * @example
   * // Searches for Queries entities with a specific code
   * const results = await client.queries.search({ code: '123' });
   */
  async search(criteria: QueriesSearchCriteria): Promise<ApiResponse<Queries>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<Queries>>} A promise that resolves to a paginated API response of matching `Queries` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.queries.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<Queries>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method getUnsafeV1
   * @description Corresponds to `GET /Queries/unsafe`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getUnsafeV1(options?: QueriesQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/Queries/unsafe${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method postUnsafeV1
   * @description Corresponds to `POST /Queries/unsafe`
   * @param {unknown} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async postUnsafeV1(data: unknown, options?: QueriesQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('post', `/Queries/unsafe${queryString ? `?${queryString}` : ''}`, data);
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `Queries` entities.
   * @returns {Promise<QueriesAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for Queries
   * const analytics = await client.queries.getAnalytics();
   */
  async getAnalytics(): Promise<QueriesAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `Queries` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of Queries
   * const count = await client.queries.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Queries` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Queries
   * const columns = await client.queries.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Queries` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Queries
   * await client.queries.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Queries` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Queries
   * await client.queries.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Queries` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Queries
   * const isTracking = await client.queries.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {QueriesSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: QueriesSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
