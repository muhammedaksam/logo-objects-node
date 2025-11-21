/**
 * @module SalesServicePrices
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  SalesServicePrices,
  SalesServicePricesSearchCriteria,
  SalesServicePricesAnalytics,
  KeyValueParameter,
  RsExclistnodexml,
  ResultData,
  RsPrcdivlstxml,
  RsExclistnodevalxm,
  SalesServicePricesQueryOptions,
} from './types';

/**
 * @class SalesServicePricesClient
 * @extends BaseApiClient
 * @description
 * The `SalesServicePricesClient` provides an interface for interacting with the `SalesServicePrices` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Satış ve Dağıtım
 * @category Ana Kayıtlar
 * @category Hizmet Satış Fiyatları
 * @category Alan Özellikleri
 */
export class SalesServicePricesClient extends BaseApiClient {
  private readonly endpoint = '/salesServicePrices';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `SalesServicePrices` entities.
   * @param {SalesServicePricesQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<SalesServicePrices>>} A promise that resolves to a paginated API response of `SalesServicePrices` entities.
   *
   * @example
   * // Retrieves the first 10 SalesServicePrices entities with specific fields
   * const salesServicePrices = await client.salesServicePrices.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: SalesServicePricesQueryOptions): Promise<ApiResponse<SalesServicePrices>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `SalesServicePrices` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `SalesServicePrices` entity.
   * @param {SalesServicePricesQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<SalesServicePrices>} A promise that resolves to the requested `SalesServicePrices` entity.
   *
   * @example
   * // Retrieves a SalesServicePrices with ID 123 with specific fields
   * const salesServicePrices = await client.salesServicePrices.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(id: number, options?: SalesServicePricesQueryOptions): Promise<SalesServicePrices> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `SalesServicePrices` entity.
   * @param {Partial<SalesServicePrices>} data - The data for the new `SalesServicePrices` entity.
   * @returns {Promise<SalesServicePrices>} A promise that resolves to the newly created `SalesServicePrices` entity.
   *
   * @example
   * // Creates a new SalesServicePrices
   * const newSalesServicePrices = await client.salesServicePrices.create({
   *   name: 'New SalesServicePrices',
   *   // ... other properties
   * });
   */
  async create(data: Partial<SalesServicePrices>): Promise<SalesServicePrices> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `SalesServicePrices` entity.
   * @param {number} id - The internal reference ID of the `SalesServicePrices` entity to update.
   * @param {Partial<SalesServicePrices>} data - The updated data for the `SalesServicePrices` entity.
   * @returns {Promise<SalesServicePrices>} A promise that resolves to the updated `SalesServicePrices` entity.
   *
   * @example
   * // Updates the name of a SalesServicePrices with ID 123
   * const updatedSalesServicePrices = await client.salesServicePrices.update(123, {
   *   name: 'Updated SalesServicePrices Name',
   * });
   */
  async update(id: number, data: Partial<SalesServicePrices>): Promise<SalesServicePrices> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `SalesServicePrices` entity.
   * @param {number} id - The internal reference ID of the `SalesServicePrices` entity to update.
   * @param {Partial<SalesServicePrices>} data - The partial data to update.
   * @returns {Promise<SalesServicePrices>} A promise that resolves to the updated `SalesServicePrices` entity.
   *
   * @example
   * // Partially updates a SalesServicePrices with ID 123
   * const patchedSalesServicePrices = await client.salesServicePrices.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(id: number, data: Partial<SalesServicePrices>): Promise<SalesServicePrices> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `SalesServicePrices` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `SalesServicePrices` entity to delete.
   * @returns {Promise<SalesServicePrices>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes a SalesServicePrices with ID 123
   * await client.salesServicePrices.delete(123);
   */
  async delete(id: number): Promise<SalesServicePrices> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `SalesServicePrices` entities based on a set of criteria.
   * @param {SalesServicePricesSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<SalesServicePrices>>} A promise that resolves to a paginated API response of matching `SalesServicePrices` entities.
   *
   * @example
   * // Searches for SalesServicePrices entities with a specific code
   * const results = await client.salesServicePrices.search({ code: '123' });
   */
  async search(
    criteria: SalesServicePricesSearchCriteria
  ): Promise<ApiResponse<SalesServicePrices>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<SalesServicePrices>>} A promise that resolves to a paginated API response of matching `SalesServicePrices` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.salesServicePrices.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<SalesServicePrices>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `POST /salesServicePrices/ReCalculate`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(data: Partial<SalesServicePrices>): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ReCalculate`, data);
  }

  /**
   * @method reCalculateV1Get
   * @description Corresponds to `GET /salesServicePrices/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Get(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /salesServicePrices/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /salesServicePrices/FillAccCodes`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<SalesServicePrices>): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /salesServicePrices/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /salesServicePrices/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /salesServicePrices/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/salesServicePrices/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `GET /salesServicePrices/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method equalizePayAmntV1Post
   * @description Corresponds to `POST /salesServicePrices/EqualizePayAmnt`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Post(data: Partial<SalesServicePrices>): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/EqualizePayAmnt`, data);
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /salesServicePrices/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /salesServicePrices/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/salesServicePrices/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`,
      data
    );
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /salesServicePrices/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /salesServicePrices/FillSMMACCCodes`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(data: Partial<SalesServicePrices>): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /salesServicePrices/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /salesServicePrices/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /salesServicePrices/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /salesServicePrices/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/salesServicePrices/AttachADespatchByFicheNo/${dispFicheNo}`,
      data
    );
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /salesServicePrices/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /salesServicePrices/DeleteCampaign`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<SalesServicePrices>): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /salesServicePrices/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /salesServicePrices/SetClientInfo`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<SalesServicePrices>): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /salesServicePrices/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /salesServicePrices/GetRelevantCampaigns`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /salesServicePrices/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /salesServicePrices/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /salesServicePrices/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /salesServicePrices/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/salesServicePrices/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method vgenxmllistvalrefslistApplyaccdisttemplateV1
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/{id1}/VALREFSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsExclistnodexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsExclistnodexml,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/${id1}/VALREFSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistvalrefslistApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/{id1}/VALREFSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/${id1}/VALREFSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistvalrefslistSetlinetotalsV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/{id1}/VALREFSLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/${id1}/VALREFSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistvalrefslistSetlinetotalsV1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/{id1}/VALREFSLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsExclistnodexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsExclistnodexml,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/${id1}/VALREFSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDIVISION_LISTV1
   * @description Corresponds to `GET /salesServicePrices/{id}/DIVISION_LIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDIVISION_LISTV1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/DIVISION_LIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDIVISION_LISTByIdV1
   * @description Corresponds to `GET /salesServicePrices/{id}/DIVISION_LIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsPrcdivlstxml>} A promise resolving to the response.
   */
  async getDIVISION_LISTByIdV1(
    id: number,
    idt: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<RsPrcdivlstxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/DIVISION_LIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method divisionListAppendline2V1
   * @description Corresponds to `GET /salesServicePrices/{id}/DIVISION_LIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListAppendline2V1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/DIVISION_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method divisionListAppendline2V1Post
   * @description Corresponds to `POST /salesServicePrices/DIVISION_LIST/AppendLine2`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListAppendline2V1Post(
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/DIVISION_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method divisionListAddserilotsV1
   * @description Corresponds to `GET /salesServicePrices/{id}/DIVISION_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/DIVISION_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method divisionListAddserilotsV1Post
   * @description Corresponds to `POST /salesServicePrices/DIVISION_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/DIVISION_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method divisionListGetstocklinepriceV1
   * @description Corresponds to `GET /salesServicePrices/{id}/DIVISION_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/DIVISION_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method divisionListGetstocklinepriceV1Post
   * @description Corresponds to `POST /salesServicePrices/DIVISION_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/DIVISION_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method divisionListAddline2V1
   * @description Corresponds to `GET /salesServicePrices/{id}/DIVISION_LIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListAddline2V1(
    id: number,
    index: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/DIVISION_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method divisionListAddline2V1Post
   * @description Corresponds to `POST /salesServicePrices/DIVISION_LIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListAddline2V1Post(
    index: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/DIVISION_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method divisionListAppendserilotsV1
   * @description Corresponds to `GET /salesServicePrices/{id}/DIVISION_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/DIVISION_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method divisionListAppendserilotsV1Post
   * @description Corresponds to `POST /salesServicePrices/DIVISION_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/DIVISION_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method divisionListEqualizebalanceV1
   * @description Corresponds to `GET /salesServicePrices/{id}/DIVISION_LIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListEqualizebalanceV1(
    id: number,
    index: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/DIVISION_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method divisionListEqualizebalanceV1Post
   * @description Corresponds to `POST /salesServicePrices/DIVISION_LIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListEqualizebalanceV1Post(
    index: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/DIVISION_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method divisionListApplyaccdisttemplateV1
   * @description Corresponds to `GET /salesServicePrices/{id}/DIVISION_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/DIVISION_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method divisionListApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /salesServicePrices/DIVISION_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/DIVISION_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method divisionListSetlinetotalsV1
   * @description Corresponds to `GET /salesServicePrices/{id}/DIVISION_LIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/DIVISION_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method divisionListSetlinetotalsV1Post
   * @description Corresponds to `POST /salesServicePrices/DIVISION_LIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async divisionListSetlinetotalsV1Post(
    Indx: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/DIVISION_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /salesServicePrices/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ExportToXML/${RootKey}/${FileName}`, data);
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /salesServicePrices/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/salesServicePrices/ImportFromXMLFile/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /salesServicePrices/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /salesServicePrices/CreateCompositeLines`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/CreateCompositeLines`, data);
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /salesServicePrices/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /salesServicePrices/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /salesServicePrices/ApplyCampaign`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<SalesServicePrices>): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /salesServicePrices/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ApplyRePayPln/${lineNr}/${rePayPCode}`, data);
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /salesServicePrices/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /salesServicePrices/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ImportFromXmlStr/${RootKey}/${XmlStr}`, data);
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /salesServicePrices/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /salesServicePrices/ApplyCondition`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<SalesServicePrices>): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /salesServicePrices/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /salesServicePrices/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<SalesServicePrices>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/salesServicePrices/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /salesServicePrices/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<SalesServicePrices>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: SalesServicePricesQueryOptions
  ): Promise<SalesServicePrices> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /salesServicePrices/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<SalesServicePrices>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: SalesServicePricesQueryOptions
  ): Promise<SalesServicePrices> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getVGENXMLLISTV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getVGENXMLLISTV1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getVGENXMLLISTByIdV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsExclistnodexml>} A promise resolving to the response.
   */
  async getVGENXMLLISTByIdV1(
    id: number,
    idt: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<RsExclistnodexml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistAppendline2V1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistAppendline2V1(
    id: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistAppendline2V1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/AppendLine2`
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistAppendline2V1Post(
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistAddserilotsV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistAddserilotsV1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistGetstocklinepriceV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistGetstocklinepriceV1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistAddline2V1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistAddline2V1(
    id: number,
    index: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistAddline2V1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistAddline2V1Post(
    index: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistAppendserilotsV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistAppendserilotsV1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistEqualizebalanceV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistEqualizebalanceV1(
    id: number,
    index: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistEqualizebalanceV1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistEqualizebalanceV1Post(
    index: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistApplyaccdisttemplateV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistSetlinetotalsV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistSetlinetotalsV1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<SalesServicePrices>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<SalesServicePrices>,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getVGENXMLLISTVALREFSLISTV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/{id1}/VALREFSLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getVGENXMLLISTVALREFSLISTV1(
    id: number,
    id1: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/${id1}/VALREFSLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getVGENXMLLISTVALREFSLISTByIdV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/{id1}/VALREFSLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsExclistnodevalxm>} A promise resolving to the response.
   */
  async getVGENXMLLISTVALREFSLISTByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<RsExclistnodevalxm> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/${id1}/VALREFSLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistvalrefslistAppendline2V1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/{id1}/VALREFSLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistAppendline2V1(
    id: number,
    id1: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/${id1}/VALREFSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistvalrefslistAppendline2V1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/{id1}/VALREFSLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsExclistnodexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistAppendline2V1Post(
    id1: number,
    data: RsExclistnodexml,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/${id1}/VALREFSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistvalrefslistAddserilotsV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/{id1}/VALREFSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async vgenxmllistvalrefslistAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/${id1}/VALREFSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistvalrefslistAddserilotsV1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/{id1}/VALREFSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsExclistnodexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsExclistnodexml,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/${id1}/VALREFSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistvalrefslistGetstocklinepriceV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/{id1}/VALREFSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/${id1}/VALREFSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistvalrefslistGetstocklinepriceV1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/{id1}/VALREFSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsExclistnodexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsExclistnodexml,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/${id1}/VALREFSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistvalrefslistAddline2V1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/{id1}/VALREFSLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/${id1}/VALREFSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistvalrefslistAddline2V1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/{id1}/VALREFSLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsExclistnodexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistAddline2V1Post(
    id1: number,
    index: number,
    data: RsExclistnodexml,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/${id1}/VALREFSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistvalrefslistAppendserilotsV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/{id1}/VALREFSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async vgenxmllistvalrefslistAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/${id1}/VALREFSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistvalrefslistAppendserilotsV1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/{id1}/VALREFSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsExclistnodexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsExclistnodexml,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/${id1}/VALREFSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method vgenxmllistvalrefslistEqualizebalanceV1
   * @description Corresponds to `GET /salesServicePrices/{id}/VGENXMLLIST/{id1}/VALREFSLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/salesServicePrices/${id}/VGENXMLLIST/${id1}/VALREFSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method vgenxmllistvalrefslistEqualizebalanceV1Post
   * @description Corresponds to `POST /salesServicePrices/VGENXMLLIST/{id1}/VALREFSLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsExclistnodexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async vgenxmllistvalrefslistEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsExclistnodexml,
    options?: SalesServicePricesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/salesServicePrices/VGENXMLLIST/${id1}/VALREFSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * Search salesServicePrices by CARD_CODE
   * @param cardCode - The CARD_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByCardCode(
    cardCode: string | number | boolean
  ): Promise<ApiResponse<SalesServicePrices>> {
    return this.getAll({ q: `CARD_CODE like '${cardCode}*'` });
  }

  /**
   * Search salesServicePrices by OWNER_TYPE
   * @param ownerType - The OWNER_TYPE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByOwnerType(
    ownerType: string | number | boolean
  ): Promise<ApiResponse<SalesServicePrices>> {
    return this.getAll({ q: `OWNER_TYPE eq ${ownerType}` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `SalesServicePrices` entities.
   * @returns {Promise<SalesServicePricesAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for SalesServicePrices
   * const analytics = await client.salesServicePrices.getAnalytics();
   */
  async getAnalytics(): Promise<SalesServicePricesAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `SalesServicePrices` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of SalesServicePrices
   * const count = await client.salesServicePrices.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `SalesServicePrices` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for SalesServicePrices
   * const columns = await client.salesServicePrices.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `SalesServicePrices` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for SalesServicePrices
   * await client.salesServicePrices.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `SalesServicePrices` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for SalesServicePrices
   * await client.salesServicePrices.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `SalesServicePrices` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for SalesServicePrices
   * const isTracking = await client.salesServicePrices.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {SalesServicePricesSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: SalesServicePricesSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
