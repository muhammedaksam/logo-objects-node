/**
 * @module CostDistributionSlips
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  CostDistributionSlips,
  CostDistributionSlipsSearchCriteria,
  CostDistributionSlipsAnalytics,
  KeyValueParameter,
  RsCostdisttrans,
  ResultData,
  RsCostdistpeg,
  CostDistributionSlipsQueryOptions,
} from './types';

/**
 * @class CostDistributionSlipsClient
 * @extends BaseApiClient
 * @description
 * The `CostDistributionSlipsClient` provides an interface for interacting with the `CostDistributionSlips` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Malzeme Yönetimi
 * @category Hareketler
 * @category Maliyet Dağıtım Fişleri
 * @category Alan Özellikleri
 */
export class CostDistributionSlipsClient extends BaseApiClient {
  private readonly endpoint = '/costDistributionSlips';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `CostDistributionSlips` entities.
   * @param {CostDistributionSlipsQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<CostDistributionSlips>>} A promise that resolves to a paginated API response of `CostDistributionSlips` entities.
   *
   * @example
   * // Retrieves the first 10 CostDistributionSlips entities with specific fields
   * const costDistributionSlips = await client.costDistributionSlips.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(
    options?: CostDistributionSlipsQueryOptions
  ): Promise<ApiResponse<CostDistributionSlips>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `CostDistributionSlips` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `CostDistributionSlips` entity.
   * @param {CostDistributionSlipsQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<CostDistributionSlips>} A promise that resolves to the requested `CostDistributionSlips` entity.
   *
   * @example
   * // Retrieves a CostDistributionSlips with ID 123 with specific fields
   * const costDistributionSlips = await client.costDistributionSlips.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<CostDistributionSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `CostDistributionSlips` entity.
   * @param {Partial<CostDistributionSlips>} data - The data for the new `CostDistributionSlips` entity.
   * @returns {Promise<CostDistributionSlips>} A promise that resolves to the newly created `CostDistributionSlips` entity.
   *
   * @example
   * // Creates a new CostDistributionSlips
   * const newCostDistributionSlips = await client.costDistributionSlips.create({
   *   name: 'New CostDistributionSlips',
   *   // ... other properties
   * });
   */
  async create(data: Partial<CostDistributionSlips>): Promise<CostDistributionSlips> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `CostDistributionSlips` entity.
   * @param {number} id - The internal reference ID of the `CostDistributionSlips` entity to update.
   * @param {Partial<CostDistributionSlips>} data - The updated data for the `CostDistributionSlips` entity.
   * @returns {Promise<CostDistributionSlips>} A promise that resolves to the updated `CostDistributionSlips` entity.
   *
   * @example
   * // Updates the name of a CostDistributionSlips with ID 123
   * const updatedCostDistributionSlips = await client.costDistributionSlips.update(123, {
   *   name: 'Updated CostDistributionSlips Name',
   * });
   */
  async update(id: number, data: Partial<CostDistributionSlips>): Promise<CostDistributionSlips> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `CostDistributionSlips` entity.
   * @param {number} id - The internal reference ID of the `CostDistributionSlips` entity to update.
   * @param {Partial<CostDistributionSlips>} data - The partial data to update.
   * @returns {Promise<CostDistributionSlips>} A promise that resolves to the updated `CostDistributionSlips` entity.
   *
   * @example
   * // Partially updates a CostDistributionSlips with ID 123
   * const patchedCostDistributionSlips = await client.costDistributionSlips.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(id: number, data: Partial<CostDistributionSlips>): Promise<CostDistributionSlips> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `CostDistributionSlips` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `CostDistributionSlips` entity to delete.
   * @returns {Promise<CostDistributionSlips>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes a CostDistributionSlips with ID 123
   * await client.costDistributionSlips.delete(123);
   */
  async delete(id: number): Promise<CostDistributionSlips> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `CostDistributionSlips` entities based on a set of criteria.
   * @param {CostDistributionSlipsSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<CostDistributionSlips>>} A promise that resolves to a paginated API response of matching `CostDistributionSlips` entities.
   *
   * @example
   * // Searches for CostDistributionSlips entities with a specific code
   * const results = await client.costDistributionSlips.search({ code: '123' });
   */
  async search(
    criteria: CostDistributionSlipsSearchCriteria
  ): Promise<ApiResponse<CostDistributionSlips>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<CostDistributionSlips>>} A promise that resolves to a paginated API response of matching `CostDistributionSlips` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.costDistributionSlips.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<CostDistributionSlips>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `POST /costDistributionSlips/ReCalculate`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(data: Partial<CostDistributionSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/ReCalculate`, data);
  }

  /**
   * @method reCalculateV1Get
   * @description Corresponds to `GET /costDistributionSlips/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Get(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /costDistributionSlips/FillAccCodes`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<CostDistributionSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /costDistributionSlips/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {number} id - id
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1(
    id: number,
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /costDistributionSlips/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/costDistributionSlips/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method equalizePayAmntV1Post
   * @description Corresponds to `POST /costDistributionSlips/EqualizePayAmnt`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Post(data: Partial<CostDistributionSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/EqualizePayAmnt`, data);
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1(
    id: number,
    slCode: string,
    amount: number,
    IOMtd: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /costDistributionSlips/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/costDistributionSlips/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`,
      data
    );
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /costDistributionSlips/FillSMMACCCodes`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(data: Partial<CostDistributionSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /costDistributionSlips/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /costDistributionSlips/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/costDistributionSlips/AttachADespatchByFicheNo/${dispFicheNo}`,
      data
    );
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /costDistributionSlips/DeleteCampaign`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<CostDistributionSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /costDistributionSlips/SetClientInfo`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<CostDistributionSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /costDistributionSlips/GetRelevantCampaigns`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /costDistributionSlips/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ImportImage/{_ImgPath}/{_Indx}`
   * @param {number} id - id
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1(
    id: number,
    ImgPath: string,
    Indx: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /costDistributionSlips/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /costDistributionSlips/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {number} id - id
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1(
    id: number,
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /costDistributionSlips/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/costDistributionSlips/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method transactionspeglinelistApplyaccdisttemplateV1
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/{id1}/PEGLINELIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsCostdisttrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsCostdisttrans,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/${id1}/PEGLINELIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionspeglinelistApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/{id1}/PEGLINELIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/${id1}/PEGLINELIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionspeglinelistSetlinetotalsV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/{id1}/PEGLINELIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/${id1}/PEGLINELIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionspeglinelistSetlinetotalsV1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/{id1}/PEGLINELIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsCostdisttrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsCostdisttrans,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/${id1}/PEGLINELIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getCURREDLNPEGLISTV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/CURREDLNPEGLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getCURREDLNPEGLISTV1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/CURREDLNPEGLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getCURREDLNPEGLISTByIdV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/CURREDLNPEGLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsCostdistpeg>} A promise resolving to the response.
   */
  async getCURREDLNPEGLISTByIdV1(
    id: number,
    idt: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<RsCostdistpeg> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/CURREDLNPEGLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method curredlnpeglistAppendline2V1
   * @description Corresponds to `GET /costDistributionSlips/{id}/CURREDLNPEGLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistAppendline2V1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/CURREDLNPEGLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method curredlnpeglistAppendline2V1Post
   * @description Corresponds to `POST /costDistributionSlips/CURREDLNPEGLIST/AppendLine2`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistAppendline2V1Post(
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/CURREDLNPEGLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method curredlnpeglistAddserilotsV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/CURREDLNPEGLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/CURREDLNPEGLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method curredlnpeglistAddserilotsV1Post
   * @description Corresponds to `POST /costDistributionSlips/CURREDLNPEGLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/CURREDLNPEGLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method curredlnpeglistGetstocklinepriceV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/CURREDLNPEGLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/CURREDLNPEGLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method curredlnpeglistGetstocklinepriceV1Post
   * @description Corresponds to `POST /costDistributionSlips/CURREDLNPEGLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/CURREDLNPEGLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method curredlnpeglistAddline2V1
   * @description Corresponds to `GET /costDistributionSlips/{id}/CURREDLNPEGLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistAddline2V1(
    id: number,
    index: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/CURREDLNPEGLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method curredlnpeglistAddline2V1Post
   * @description Corresponds to `POST /costDistributionSlips/CURREDLNPEGLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistAddline2V1Post(
    index: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/CURREDLNPEGLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method curredlnpeglistAppendserilotsV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/CURREDLNPEGLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/CURREDLNPEGLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method curredlnpeglistAppendserilotsV1Post
   * @description Corresponds to `POST /costDistributionSlips/CURREDLNPEGLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/CURREDLNPEGLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method curredlnpeglistEqualizebalanceV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/CURREDLNPEGLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistEqualizebalanceV1(
    id: number,
    index: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/CURREDLNPEGLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method curredlnpeglistEqualizebalanceV1Post
   * @description Corresponds to `POST /costDistributionSlips/CURREDLNPEGLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistEqualizebalanceV1Post(
    index: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/CURREDLNPEGLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method curredlnpeglistApplyaccdisttemplateV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/CURREDLNPEGLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/CURREDLNPEGLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method curredlnpeglistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /costDistributionSlips/CURREDLNPEGLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/CURREDLNPEGLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method curredlnpeglistSetlinetotalsV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/CURREDLNPEGLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/CURREDLNPEGLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method curredlnpeglistSetlinetotalsV1Post
   * @description Corresponds to `POST /costDistributionSlips/CURREDLNPEGLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async curredlnpeglistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/CURREDLNPEGLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ExportToXML/{_RootKey}/{_FileName}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1(
    id: number,
    RootKey: string,
    FileName: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /costDistributionSlips/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/ExportToXML/${RootKey}/${FileName}`, data);
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1(
    id: number,
    RootKey: string,
    FileName: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /costDistributionSlips/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/costDistributionSlips/ImportFromXMLFile/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /costDistributionSlips/CreateCompositeLines`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/CreateCompositeLines`, data);
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /costDistributionSlips/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /costDistributionSlips/ApplyCampaign`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<CostDistributionSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} id - id
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1(
    id: number,
    lineNr: number,
    rePayPCode: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /costDistributionSlips/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/costDistributionSlips/ApplyRePayPln/${lineNr}/${rePayPCode}`,
      data
    );
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /costDistributionSlips/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1(
    id: number,
    RootKey: string,
    XmlStr: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /costDistributionSlips/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/costDistributionSlips/ImportFromXmlStr/${RootKey}/${XmlStr}`,
      data
    );
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /costDistributionSlips/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /costDistributionSlips/ApplyCondition`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<CostDistributionSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/ExportImage/{_Indx}/{_ImgPath}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1(
    id: number,
    Indx: string,
    ImgPath: string,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /costDistributionSlips/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<CostDistributionSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/costDistributionSlips/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /costDistributionSlips/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<CostDistributionSlips>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<CostDistributionSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /costDistributionSlips/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<CostDistributionSlips>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<CostDistributionSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSV1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSByIdV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsCostdisttrans>} A promise resolving to the response.
   */
  async getTRANSACTIONSByIdV1(
    id: number,
    idt: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<RsCostdisttrans> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1(
    id: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/AppendLine2`
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1Post(
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddserilotsV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddserilotsV1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddline2V1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1(
    id: number,
    index: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddline2V1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1Post(
    index: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAppendserilotsV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendserilotsV1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsEqualizebalanceV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1(
    id: number,
    index: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsEqualizebalanceV1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1Post(
    index: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsSetlinetotalsV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsSetlinetotalsV1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<CostDistributionSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1Post(
    Indx: number,
    data: Partial<CostDistributionSlips>,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSPEGLINELISTV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/{id1}/PEGLINELIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSPEGLINELISTV1(
    id: number,
    id1: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/${id1}/PEGLINELIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSPEGLINELISTByIdV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/{id1}/PEGLINELIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsCostdistpeg>} A promise resolving to the response.
   */
  async getTRANSACTIONSPEGLINELISTByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<RsCostdistpeg> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/${id1}/PEGLINELIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionspeglinelistAppendline2V1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/{id1}/PEGLINELIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistAppendline2V1(
    id: number,
    id1: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/${id1}/PEGLINELIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionspeglinelistAppendline2V1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/{id1}/PEGLINELIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsCostdisttrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistAppendline2V1Post(
    id1: number,
    data: RsCostdisttrans,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/${id1}/PEGLINELIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionspeglinelistAddserilotsV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/{id1}/PEGLINELIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/${id1}/PEGLINELIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionspeglinelistAddserilotsV1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/{id1}/PEGLINELIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsCostdisttrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsCostdisttrans,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/${id1}/PEGLINELIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionspeglinelistGetstocklinepriceV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/{id1}/PEGLINELIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/${id1}/PEGLINELIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionspeglinelistGetstocklinepriceV1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/{id1}/PEGLINELIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsCostdisttrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsCostdisttrans,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/${id1}/PEGLINELIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionspeglinelistAddline2V1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/{id1}/PEGLINELIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/${id1}/PEGLINELIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionspeglinelistAddline2V1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/{id1}/PEGLINELIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsCostdisttrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistAddline2V1Post(
    id1: number,
    index: number,
    data: RsCostdisttrans,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/${id1}/PEGLINELIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionspeglinelistAppendserilotsV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/{id1}/PEGLINELIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/${id1}/PEGLINELIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionspeglinelistAppendserilotsV1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/{id1}/PEGLINELIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsCostdisttrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsCostdisttrans,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/${id1}/PEGLINELIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionspeglinelistEqualizebalanceV1
   * @description Corresponds to `GET /costDistributionSlips/{id}/TRANSACTIONS/{id1}/PEGLINELIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/costDistributionSlips/${id}/TRANSACTIONS/${id1}/PEGLINELIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionspeglinelistEqualizebalanceV1Post
   * @description Corresponds to `POST /costDistributionSlips/TRANSACTIONS/{id1}/PEGLINELIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsCostdisttrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionspeglinelistEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsCostdisttrans,
    options?: CostDistributionSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/costDistributionSlips/TRANSACTIONS/${id1}/PEGLINELIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * Search costDistributionSlips by PROJECT_CODE
   * @param projectCode - The PROJECT_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByProjectCode(
    projectCode: string | number | boolean
  ): Promise<ApiResponse<CostDistributionSlips>> {
    return this.getAll({ q: `PROJECT_CODE like '${projectCode}*'` });
  }

  /**
   * Search costDistributionSlips by TYPE
   * @param type - The TYPE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByType(type: string | number | boolean): Promise<ApiResponse<CostDistributionSlips>> {
    return this.getAll({ q: `TYPE eq ${type}` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `CostDistributionSlips` entities.
   * @returns {Promise<CostDistributionSlipsAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for CostDistributionSlips
   * const analytics = await client.costDistributionSlips.getAnalytics();
   */
  async getAnalytics(): Promise<CostDistributionSlipsAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `CostDistributionSlips` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of CostDistributionSlips
   * const count = await client.costDistributionSlips.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `CostDistributionSlips` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for CostDistributionSlips
   * const columns = await client.costDistributionSlips.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `CostDistributionSlips` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for CostDistributionSlips
   * await client.costDistributionSlips.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `CostDistributionSlips` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for CostDistributionSlips
   * await client.costDistributionSlips.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `CostDistributionSlips` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for CostDistributionSlips
   * const isTracking = await client.costDistributionSlips.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {CostDistributionSlipsSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: CostDistributionSlipsSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
