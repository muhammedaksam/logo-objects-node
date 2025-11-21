/**
 * @module DistributionOrders
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  DistributionOrders,
  DistributionOrdersSearchCriteria,
  DistributionOrdersAnalytics,
  KeyValueParameter,
  RsDistordlinexml,
  ResultData,
  RsQccvalentryxml,
  RsSlloctrnxml,
  RsQccvallistxml,
  RsCampcodeslistxml,
  DistributionOrdersQueryOptions,
} from './types';

/**
 * @class DistributionOrdersClient
 * @extends BaseApiClient
 * @description
 * The `DistributionOrdersClient` provides an interface for interacting with the `DistributionOrders` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Satış ve Dağıtım
 * @category Hareketler
 * @category Dağıtım Emirleri
 * @category Alan Özellikleri
 */
export class DistributionOrdersClient extends BaseApiClient {
  private readonly endpoint = '/distributionOrders';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `DistributionOrders` entities.
   * @param {DistributionOrdersQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<DistributionOrders>>} A promise that resolves to a paginated API response of `DistributionOrders` entities.
   *
   * @example
   * // Retrieves the first 10 DistributionOrders entities with specific fields
   * const distributionOrders = await client.distributionOrders.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: DistributionOrdersQueryOptions): Promise<ApiResponse<DistributionOrders>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `DistributionOrders` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `DistributionOrders` entity.
   * @param {DistributionOrdersQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<DistributionOrders>} A promise that resolves to the requested `DistributionOrders` entity.
   *
   * @example
   * // Retrieves a DistributionOrders with ID 123 with specific fields
   * const distributionOrders = await client.distributionOrders.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(id: number, options?: DistributionOrdersQueryOptions): Promise<DistributionOrders> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `DistributionOrders` entity.
   * @param {Partial<DistributionOrders>} data - The data for the new `DistributionOrders` entity.
   * @returns {Promise<DistributionOrders>} A promise that resolves to the newly created `DistributionOrders` entity.
   *
   * @example
   * // Creates a new DistributionOrders
   * const newDistributionOrders = await client.distributionOrders.create({
   *   name: 'New DistributionOrders',
   *   // ... other properties
   * });
   */
  async create(data: Partial<DistributionOrders>): Promise<DistributionOrders> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `DistributionOrders` entity.
   * @param {number} id - The internal reference ID of the `DistributionOrders` entity to update.
   * @param {Partial<DistributionOrders>} data - The updated data for the `DistributionOrders` entity.
   * @returns {Promise<DistributionOrders>} A promise that resolves to the updated `DistributionOrders` entity.
   *
   * @example
   * // Updates the name of a DistributionOrders with ID 123
   * const updatedDistributionOrders = await client.distributionOrders.update(123, {
   *   name: 'Updated DistributionOrders Name',
   * });
   */
  async update(id: number, data: Partial<DistributionOrders>): Promise<DistributionOrders> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `DistributionOrders` entity.
   * @param {number} id - The internal reference ID of the `DistributionOrders` entity to update.
   * @param {Partial<DistributionOrders>} data - The partial data to update.
   * @returns {Promise<DistributionOrders>} A promise that resolves to the updated `DistributionOrders` entity.
   *
   * @example
   * // Partially updates a DistributionOrders with ID 123
   * const patchedDistributionOrders = await client.distributionOrders.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(id: number, data: Partial<DistributionOrders>): Promise<DistributionOrders> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `DistributionOrders` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `DistributionOrders` entity to delete.
   * @returns {Promise<DistributionOrders>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes a DistributionOrders with ID 123
   * await client.distributionOrders.delete(123);
   */
  async delete(id: number): Promise<DistributionOrders> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `DistributionOrders` entities based on a set of criteria.
   * @param {DistributionOrdersSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<DistributionOrders>>} A promise that resolves to a paginated API response of matching `DistributionOrders` entities.
   *
   * @example
   * // Searches for DistributionOrders entities with a specific code
   * const results = await client.distributionOrders.search({ code: '123' });
   */
  async search(
    criteria: DistributionOrdersSearchCriteria
  ): Promise<ApiResponse<DistributionOrders>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<DistributionOrders>>} A promise that resolves to a paginated API response of matching `DistributionOrders` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.distributionOrders.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<DistributionOrders>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `POST /distributionOrders/EqualizePayAmnt`
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(data: Partial<DistributionOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/EqualizePayAmnt`, data);
  }

  /**
   * @method equalizePayAmntV1Get
   * @description Corresponds to `GET /distributionOrders/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Get(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /distributionOrders/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /distributionOrders/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/distributionOrders/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`,
      data
    );
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /distributionOrders/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /distributionOrders/FillSMMACCCodes`
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(data: Partial<DistributionOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /distributionOrders/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /distributionOrders/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /distributionOrders/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /distributionOrders/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/distributionOrders/AttachADespatchByFicheNo/${dispFicheNo}`,
      data
    );
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /distributionOrders/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /distributionOrders/DeleteCampaign`
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<DistributionOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /distributionOrders/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /distributionOrders/SetClientInfo`
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<DistributionOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /distributionOrders/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /distributionOrders/GetRelevantCampaigns`
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /distributionOrders/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /distributionOrders/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /distributionOrders/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /distributionOrders/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /distributionOrders/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /distributionOrders/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /distributionOrders/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /distributionOrders/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/distributionOrders/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method distOrderLinescampaignInfosGetstocklinepriceV1
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosGetstocklinepriceV1(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinescampaignInfosGetstocklinepriceV1Get
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosGetstocklinepriceV1Get(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinescampaignInfosAddline2V1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinescampaignInfosAddline2V1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosAddline2V1Post(
    id1: number,
    index: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinescampaignInfosAppendserilotsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async distOrderLinescampaignInfosAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinescampaignInfosAppendserilotsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinescampaignInfosEqualizebalanceV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinescampaignInfosEqualizebalanceV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinescampaignInfosApplyaccdisttemplateV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinescampaignInfosApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinescampaignInfosSetlinetotalsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinescampaignInfosSetlinetotalsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /distributionOrders/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /distributionOrders/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ExportToXML/${RootKey}/${FileName}`, data);
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /distributionOrders/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /distributionOrders/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/distributionOrders/ImportFromXMLFile/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /distributionOrders/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /distributionOrders/CreateCompositeLines`
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/CreateCompositeLines`, data);
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /distributionOrders/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /distributionOrders/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /distributionOrders/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /distributionOrders/ApplyCampaign`
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<DistributionOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /distributionOrders/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /distributionOrders/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ApplyRePayPln/${lineNr}/${rePayPCode}`, data);
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /distributionOrders/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /distributionOrders/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /distributionOrders/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /distributionOrders/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ImportFromXmlStr/${RootKey}/${XmlStr}`, data);
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /distributionOrders/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /distributionOrders/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /distributionOrders/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /distributionOrders/ApplyCondition`
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<DistributionOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /distributionOrders/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /distributionOrders/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `GET /distributionOrders/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method reCalculateV1Post
   * @description Corresponds to `POST /distributionOrders/ReCalculate`
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Post(data: Partial<DistributionOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ReCalculate`, data);
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /distributionOrders/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /distributionOrders/FillAccCodes`
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<DistributionOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /distributionOrders/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /distributionOrders/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/distributionOrders/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /distributionOrders/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /distributionOrders/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<DistributionOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<DistributionOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/distributionOrders/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsApplyaccdisttemplateV1
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsSetlinetotalsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsSetlinetotalsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDIST_ORDER_LINESSL_DETAILSQCLISTV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDIST_ORDER_LINESSL_DETAILSQCLISTV1(
    id: number,
    id1: number,
    id2: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDIST_ORDER_LINESSL_DETAILSQCLISTByIdV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsQccvalentryxml>} A promise resolving to the response.
   */
  async getDIST_ORDER_LINESSL_DETAILSQCLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    idt: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<RsQccvalentryxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistAppendline2V1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistAppendline2V1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistAppendline2V1Post(
    id1: number,
    id2: number,
    data: RsSlloctrnxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistAddserilotsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistAddserilotsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistAddserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsSlloctrnxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistGetstocklinepriceV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistGetstocklinepriceV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    data: RsSlloctrnxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistAddline2V1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistAddline2V1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistAddline2V1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsSlloctrnxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistAppendserilotsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistAppendserilotsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistAppendserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsSlloctrnxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistEqualizebalanceV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistEqualizebalanceV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsSlloctrnxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistApplyaccdisttemplateV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsSlloctrnxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistSetlinetotalsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    Indx: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistSetlinetotalsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    Indx: number,
    data: RsSlloctrnxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTByIdV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsQccvallistxml>} A promise resolving to the response.
   */
  async getDIST_ORDER_LINESSL_DETAILSQCLISTVALLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    idt: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<RsQccvallistxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistAppendline2V1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistAppendline2V1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistAppendline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    data: RsQccvalentryxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistAddserilotsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistAddserilotsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistAddserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsQccvalentryxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistGetstocklinepriceV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    prcTyp: number,
    Indx: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistGetstocklinepriceV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    id3: number,
    prcTyp: number,
    Indx: number,
    data: RsQccvalentryxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistAddline2V1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    index: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistAddline2V1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistAddline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    index: number,
    data: RsQccvalentryxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistAppendserilotsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistAppendserilotsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistAppendserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsQccvalentryxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistEqualizebalanceV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    index: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistEqualizebalanceV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    id3: number,
    index: number,
    data: RsQccvalentryxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    id3: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsQccvalentryxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistSetlinetotalsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    Indx: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsqclistvallistSetlinetotalsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} Indx - _Indx
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsqclistvallistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    id3: number,
    Indx: number,
    data: RsQccvalentryxml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDIST_ORDER_LINESCAMPAIGN_INFOSV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDIST_ORDER_LINESCAMPAIGN_INFOSV1(
    id: number,
    id1: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDIST_ORDER_LINESCAMPAIGN_INFOSByIdV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsCampcodeslistxml>} A promise resolving to the response.
   */
  async getDIST_ORDER_LINESCAMPAIGN_INFOSByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<RsCampcodeslistxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinescampaignInfosAppendline2V1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosAppendline2V1(
    id: number,
    id1: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinescampaignInfosAppendline2V1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosAppendline2V1Post(
    id1: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinescampaignInfosAddserilotsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async distOrderLinescampaignInfosAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinescampaignInfosAddserilotsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/CAMPAIGN_INFOS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinescampaignInfosAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/CAMPAIGN_INFOS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /distributionOrders/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<DistributionOrders>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: DistributionOrdersQueryOptions
  ): Promise<DistributionOrders> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /distributionOrders/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<DistributionOrders>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: DistributionOrdersQueryOptions
  ): Promise<DistributionOrders> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDIST_ORDER_LINESV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDIST_ORDER_LINESV1(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDIST_ORDER_LINESByIdV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsDistordlinexml>} A promise resolving to the response.
   */
  async getDIST_ORDER_LINESByIdV1(
    id: number,
    idt: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<RsDistordlinexml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesAppendline2V1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesAppendline2V1(
    id: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesAppendline2V1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/AppendLine2`
   * @param {Partial<DistributionOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesAppendline2V1Post(
    data: Partial<DistributionOrders>,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesAddserilotsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesAddserilotsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<DistributionOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<DistributionOrders>,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesGetstocklinepriceV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesGetstocklinepriceV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<DistributionOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<DistributionOrders>,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesAddline2V1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesAddline2V1(
    id: number,
    index: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesAddline2V1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<DistributionOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesAddline2V1Post(
    index: number,
    data: Partial<DistributionOrders>,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesAppendserilotsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesAppendserilotsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<DistributionOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<DistributionOrders>,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesEqualizebalanceV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesEqualizebalanceV1(
    id: number,
    index: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesEqualizebalanceV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<DistributionOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesEqualizebalanceV1Post(
    index: number,
    data: Partial<DistributionOrders>,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesApplyaccdisttemplateV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<DistributionOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<DistributionOrders>,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesSetlinetotalsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesSetlinetotalsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<DistributionOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesSetlinetotalsV1Post(
    Indx: number,
    data: Partial<DistributionOrders>,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDIST_ORDER_LINESSL_DETAILSV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDIST_ORDER_LINESSL_DETAILSV1(
    id: number,
    id1: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDIST_ORDER_LINESSL_DETAILSByIdV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsSlloctrnxml>} A promise resolving to the response.
   */
  async getDIST_ORDER_LINESSL_DETAILSByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<RsSlloctrnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsAppendline2V1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsAppendline2V1(
    id: number,
    id1: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsAppendline2V1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsAppendline2V1Post(
    id1: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsAddserilotsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async distOrderLinesslDetailsAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsAddserilotsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsGetstocklinepriceV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsGetstocklinepriceV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsAddline2V1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsAddline2V1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsAddline2V1Post(
    id1: number,
    index: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsAppendserilotsV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async distOrderLinesslDetailsAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsAppendserilotsV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method distOrderLinesslDetailsEqualizebalanceV1
   * @description Corresponds to `GET /distributionOrders/{id}/DIST_ORDER_LINES/{id1}/SL_DETAILS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/distributionOrders/${id}/DIST_ORDER_LINES/${id1}/SL_DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method distOrderLinesslDetailsEqualizebalanceV1Post
   * @description Corresponds to `POST /distributionOrders/DIST_ORDER_LINES/{id1}/SL_DETAILS/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDistordlinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async distOrderLinesslDetailsEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsDistordlinexml,
    options?: DistributionOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/distributionOrders/DIST_ORDER_LINES/${id1}/SL_DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * Search distributionOrders by AUXIL_CODE
   * @param auxilCode - The AUXIL_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByAuxilCode(
    auxilCode: string | number | boolean
  ): Promise<ApiResponse<DistributionOrders>> {
    return this.getAll({ q: `AUXIL_CODE like '${auxilCode}*'` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `DistributionOrders` entities.
   * @returns {Promise<DistributionOrdersAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for DistributionOrders
   * const analytics = await client.distributionOrders.getAnalytics();
   */
  async getAnalytics(): Promise<DistributionOrdersAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `DistributionOrders` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of DistributionOrders
   * const count = await client.distributionOrders.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `DistributionOrders` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for DistributionOrders
   * const columns = await client.distributionOrders.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `DistributionOrders` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for DistributionOrders
   * await client.distributionOrders.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `DistributionOrders` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for DistributionOrders
   * await client.distributionOrders.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `DistributionOrders` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for DistributionOrders
   * const isTracking = await client.distributionOrders.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {DistributionOrdersSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: DistributionOrdersSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
