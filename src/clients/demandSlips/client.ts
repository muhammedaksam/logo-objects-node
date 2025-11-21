/**
 * @module DemandSlips
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  DemandSlips,
  DemandSlipsSearchCriteria,
  DemandSlipsAnalytics,
  KeyValueParameter,
  RsDemandtrans,
  ResultData,
  ExtendedFieldDefinitions,
  RsLabelxml,
  RsDetdemandtrans,
  DemandSlipsQueryOptions,
} from './types';

/**
 * @class DemandSlipsClient
 * @extends BaseApiClient
 * @description
 * The `DemandSlipsClient` provides an interface for interacting with the `DemandSlips` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Talep Yönetimi
 * @category Hareketler
 * @category Talep Fişleri
 * @category Alan Özellikleri
 */
export class DemandSlipsClient extends BaseApiClient {
  private readonly endpoint = '/demandSlips';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `DemandSlips` entities.
   * @param {DemandSlipsQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<DemandSlips>>} A promise that resolves to a paginated API response of `DemandSlips` entities.
   *
   * @example
   * // Retrieves the first 10 DemandSlips entities with specific fields
   * const demandSlips = await client.demandSlips.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: DemandSlipsQueryOptions): Promise<ApiResponse<DemandSlips>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `DemandSlips` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `DemandSlips` entity.
   * @param {DemandSlipsQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<DemandSlips>} A promise that resolves to the requested `DemandSlips` entity.
   *
   * @example
   * // Retrieves a DemandSlips with ID 123 with specific fields
   * const demandSlips = await client.demandSlips.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(id: number, options?: DemandSlipsQueryOptions): Promise<DemandSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `DemandSlips` entity.
   * @param {Partial<DemandSlips>} data - The data for the new `DemandSlips` entity.
   * @returns {Promise<DemandSlips>} A promise that resolves to the newly created `DemandSlips` entity.
   *
   * @example
   * // Creates a new DemandSlips
   * const newDemandSlips = await client.demandSlips.create({
   *   name: 'New DemandSlips',
   *   // ... other properties
   * });
   */
  async create(data: Partial<DemandSlips>): Promise<DemandSlips> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `DemandSlips` entity.
   * @param {number} id - The internal reference ID of the `DemandSlips` entity to update.
   * @param {Partial<DemandSlips>} data - The updated data for the `DemandSlips` entity.
   * @returns {Promise<DemandSlips>} A promise that resolves to the updated `DemandSlips` entity.
   *
   * @example
   * // Updates the name of a DemandSlips with ID 123
   * const updatedDemandSlips = await client.demandSlips.update(123, {
   *   name: 'Updated DemandSlips Name',
   * });
   */
  async update(id: number, data: Partial<DemandSlips>): Promise<DemandSlips> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `DemandSlips` entity.
   * @param {number} id - The internal reference ID of the `DemandSlips` entity to update.
   * @param {Partial<DemandSlips>} data - The partial data to update.
   * @returns {Promise<DemandSlips>} A promise that resolves to the updated `DemandSlips` entity.
   *
   * @example
   * // Partially updates a DemandSlips with ID 123
   * const patchedDemandSlips = await client.demandSlips.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(id: number, data: Partial<DemandSlips>): Promise<DemandSlips> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `DemandSlips` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `DemandSlips` entity to delete.
   * @returns {Promise<DemandSlips>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes a DemandSlips with ID 123
   * await client.demandSlips.delete(123);
   */
  async delete(id: number): Promise<DemandSlips> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `DemandSlips` entities based on a set of criteria.
   * @param {DemandSlipsSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<DemandSlips>>} A promise that resolves to a paginated API response of matching `DemandSlips` entities.
   *
   * @example
   * // Searches for DemandSlips entities with a specific code
   * const results = await client.demandSlips.search({ code: '123' });
   */
  async search(criteria: DemandSlipsSearchCriteria): Promise<ApiResponse<DemandSlips>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<DemandSlips>>} A promise that resolves to a paginated API response of matching `DemandSlips` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.demandSlips.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<DemandSlips>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `POST /demandSlips/EqualizePayAmnt`
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(data: Partial<DemandSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/EqualizePayAmnt`, data);
  }

  /**
   * @method equalizePayAmntV1Get
   * @description Corresponds to `GET /demandSlips/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Get(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /demandSlips/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /demandSlips/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`, data);
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /demandSlips/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /demandSlips/FillSMMACCCodes`
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(data: Partial<DemandSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /demandSlips/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /demandSlips/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /demandSlips/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /demandSlips/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/AttachADespatchByFicheNo/${dispFicheNo}`, data);
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /demandSlips/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /demandSlips/DeleteCampaign`
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<DemandSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /demandSlips/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /demandSlips/SetClientInfo`
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<DemandSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /demandSlips/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /demandSlips/GetRelevantCampaigns`
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(data: Partial<DemandSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /demandSlips/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /demandSlips/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /demandSlips/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /demandSlips/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /demandSlips/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /demandSlips/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /demandSlips/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /demandSlips/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/demandSlips/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method labelListGetstocklinepriceV1
   * @description Corresponds to `POST /demandSlips/LABEL_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListGetstocklinepriceV1(
    prcTyp: number,
    Indx: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/LABEL_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListGetstocklinepriceV1Get
   * @description Corresponds to `GET /demandSlips/{id}/LABEL_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListGetstocklinepriceV1Get(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/LABEL_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAddline2V1
   * @description Corresponds to `GET /demandSlips/{id}/LABEL_LIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAddline2V1(
    id: number,
    index: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/LABEL_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAddline2V1Post
   * @description Corresponds to `POST /demandSlips/LABEL_LIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAddline2V1Post(
    index: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/LABEL_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListAppendserilotsV1
   * @description Corresponds to `GET /demandSlips/{id}/LABEL_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/LABEL_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAppendserilotsV1Post
   * @description Corresponds to `POST /demandSlips/LABEL_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/LABEL_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListEqualizebalanceV1
   * @description Corresponds to `GET /demandSlips/{id}/LABEL_LIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListEqualizebalanceV1(
    id: number,
    index: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/LABEL_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListEqualizebalanceV1Post
   * @description Corresponds to `POST /demandSlips/LABEL_LIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListEqualizebalanceV1Post(
    index: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/LABEL_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListApplyaccdisttemplateV1
   * @description Corresponds to `GET /demandSlips/{id}/LABEL_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/LABEL_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /demandSlips/LABEL_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/LABEL_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListSetlinetotalsV1
   * @description Corresponds to `GET /demandSlips/{id}/LABEL_LIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/LABEL_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListSetlinetotalsV1Post
   * @description Corresponds to `POST /demandSlips/LABEL_LIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListSetlinetotalsV1Post(
    Indx: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/LABEL_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /demandSlips/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /demandSlips/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ExportToXML/${RootKey}/${FileName}`, data);
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /demandSlips/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /demandSlips/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ImportFromXMLFile/${RootKey}/${FileName}`, data);
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /demandSlips/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /demandSlips/CreateCompositeLines`
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(data: Partial<DemandSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/CreateCompositeLines`, data);
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /demandSlips/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /demandSlips/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /demandSlips/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /demandSlips/ApplyCampaign`
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<DemandSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /demandSlips/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /demandSlips/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ApplyRePayPln/${lineNr}/${rePayPCode}`, data);
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /demandSlips/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /demandSlips/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /demandSlips/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /demandSlips/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ImportFromXmlStr/${RootKey}/${XmlStr}`, data);
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /demandSlips/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /demandSlips/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /demandSlips/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /demandSlips/ApplyCondition`
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<DemandSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /demandSlips/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /demandSlips/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `GET /demandSlips/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(id: number, options?: DemandSlipsQueryOptions): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method reCalculateV1Post
   * @description Corresponds to `POST /demandSlips/ReCalculate`
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Post(data: Partial<DemandSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ReCalculate`, data);
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /demandSlips/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /demandSlips/FillAccCodes`
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<DemandSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /demandSlips/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /demandSlips/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/demandSlips/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /demandSlips/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /demandSlips/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<DemandSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<DemandSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/demandSlips/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method transactionsdetailsApplyaccdisttemplateV1
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsSetlinetotalsV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DETAILS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsSetlinetotalsV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DETAILS/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDEFNFLDSLISTV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDEFNFLDSLISTV1(
    id: number,
    id1: number,
    options?: DemandSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDEFNFLDSLISTByIdV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExtendedFieldDefinitions>} A promise resolving to the response.
   */
  async getTRANSACTIONSDEFNFLDSLISTByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: DemandSlipsQueryOptions
  ): Promise<ExtendedFieldDefinitions> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAppendline2V1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAppendline2V1(
    id: number,
    id1: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAppendline2V1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAppendline2V1Post(
    id1: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistAddserilotsV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsdefnfldslistAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAddserilotsV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistGetstocklinepriceV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistGetstocklinepriceV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistAddline2V1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAddline2V1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAddline2V1Post(
    id1: number,
    index: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistAppendserilotsV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsdefnfldslistAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAppendserilotsV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistEqualizebalanceV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistEqualizebalanceV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistApplyaccdisttemplateV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistSetlinetotalsV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistSetlinetotalsV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDEFNFLDSLISTV1
   * @description Corresponds to `GET /demandSlips/{id}/DEFNFLDSLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDEFNFLDSLISTV1(id: number, options?: DemandSlipsQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/DEFNFLDSLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDEFNFLDSLISTByIdV1
   * @description Corresponds to `GET /demandSlips/{id}/DEFNFLDSLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExtendedFieldDefinitions>} A promise resolving to the response.
   */
  async getDEFNFLDSLISTByIdV1(
    id: number,
    idt: number,
    options?: DemandSlipsQueryOptions
  ): Promise<ExtendedFieldDefinitions> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/DEFNFLDSLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendline2V1
   * @description Corresponds to `GET /demandSlips/{id}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendline2V1(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendline2V1Post
   * @description Corresponds to `POST /demandSlips/DEFNFLDSLIST/AppendLine2`
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendline2V1Post(
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAddserilotsV1
   * @description Corresponds to `GET /demandSlips/{id}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAddserilotsV1Post
   * @description Corresponds to `POST /demandSlips/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistGetstocklinepriceV1
   * @description Corresponds to `GET /demandSlips/{id}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistGetstocklinepriceV1Post
   * @description Corresponds to `POST /demandSlips/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAddline2V1
   * @description Corresponds to `GET /demandSlips/{id}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddline2V1(
    id: number,
    index: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAddline2V1Post
   * @description Corresponds to `POST /demandSlips/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddline2V1Post(
    index: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAppendserilotsV1
   * @description Corresponds to `GET /demandSlips/{id}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendserilotsV1Post
   * @description Corresponds to `POST /demandSlips/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistEqualizebalanceV1
   * @description Corresponds to `GET /demandSlips/{id}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistEqualizebalanceV1(
    id: number,
    index: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistEqualizebalanceV1Post
   * @description Corresponds to `POST /demandSlips/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistEqualizebalanceV1Post(
    index: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistApplyaccdisttemplateV1
   * @description Corresponds to `GET /demandSlips/{id}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /demandSlips/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistSetlinetotalsV1
   * @description Corresponds to `GET /demandSlips/{id}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistSetlinetotalsV1Post
   * @description Corresponds to `POST /demandSlips/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getLABEL_LISTV1
   * @description Corresponds to `GET /demandSlips/{id}/LABEL_LIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getLABEL_LISTV1(id: number, options?: DemandSlipsQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/LABEL_LIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getLABEL_LISTByIdV1
   * @description Corresponds to `GET /demandSlips/{id}/LABEL_LIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsLabelxml>} A promise resolving to the response.
   */
  async getLABEL_LISTByIdV1(
    id: number,
    idt: number,
    options?: DemandSlipsQueryOptions
  ): Promise<RsLabelxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/LABEL_LIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAppendline2V1
   * @description Corresponds to `GET /demandSlips/{id}/LABEL_LIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAppendline2V1(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/LABEL_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAppendline2V1Post
   * @description Corresponds to `POST /demandSlips/LABEL_LIST/AppendLine2`
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAppendline2V1Post(
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/LABEL_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListAddserilotsV1
   * @description Corresponds to `GET /demandSlips/{id}/LABEL_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/LABEL_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAddserilotsV1Post
   * @description Corresponds to `POST /demandSlips/LABEL_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/LABEL_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /demandSlips/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<DemandSlips>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: DemandSlipsQueryOptions
  ): Promise<DemandSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /demandSlips/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<DemandSlips>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: DemandSlipsQueryOptions
  ): Promise<DemandSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSV1(id: number, options?: DemandSlipsQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSByIdV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsDemandtrans>} A promise resolving to the response.
   */
  async getTRANSACTIONSByIdV1(
    id: number,
    idt: number,
    options?: DemandSlipsQueryOptions
  ): Promise<RsDemandtrans> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1(
    id: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/AppendLine2`
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1Post(
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddserilotsV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddserilotsV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddline2V1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1(
    id: number,
    index: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddline2V1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1Post(
    index: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAppendserilotsV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendserilotsV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsEqualizebalanceV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1(
    id: number,
    index: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsEqualizebalanceV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1Post(
    index: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsSetlinetotalsV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsSetlinetotalsV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<DemandSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1Post(
    Indx: number,
    data: Partial<DemandSlips>,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DETAILS`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSV1(
    id: number,
    id1: number,
    options?: DemandSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DETAILS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSByIdV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsDetdemandtrans>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: DemandSlipsQueryOptions
  ): Promise<RsDetdemandtrans> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendline2V1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAppendline2V1(
    id: number,
    id1: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendline2V1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DETAILS/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAppendline2V1Post(
    id1: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAddserilotsV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsdetailsAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddserilotsV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsGetstocklinepriceV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsGetstocklinepriceV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAddline2V1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddline2V1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DETAILS/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAddline2V1Post(
    id1: number,
    index: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAppendserilotsV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsdetailsAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendserilotsV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsEqualizebalanceV1
   * @description Corresponds to `GET /demandSlips/{id}/TRANSACTIONS/{id1}/DETAILS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/demandSlips/${id}/TRANSACTIONS/${id1}/DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsEqualizebalanceV1Post
   * @description Corresponds to `POST /demandSlips/TRANSACTIONS/{id1}/DETAILS/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDemandtrans} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsDemandtrans,
    options?: DemandSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/demandSlips/TRANSACTIONS/${id1}/DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * Search demandSlips by DO_CODE
   * @param doCode - The DO_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByDoCode(doCode: string | number | boolean): Promise<ApiResponse<DemandSlips>> {
    return this.getAll({ q: `DO_CODE like '${doCode}*'` });
  }

  /**
   * Search demandSlips by NUMBER
   * @param number - The NUMBER to search for
   * @returns Promise resolving to matching entities
   */
  async searchBynumber(number: string | number | boolean): Promise<ApiResponse<DemandSlips>> {
    return this.getAll({ q: `NUMBER eq ${number}` });
  }

  /**
   * Search demandSlips by DEMAND_TYPE
   * @param demandType - The DEMAND_TYPE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByDemandType(
    demandType: string | number | boolean
  ): Promise<ApiResponse<DemandSlips>> {
    return this.getAll({ q: `DEMAND_TYPE eq ${demandType}` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `DemandSlips` entities.
   * @returns {Promise<DemandSlipsAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for DemandSlips
   * const analytics = await client.demandSlips.getAnalytics();
   */
  async getAnalytics(): Promise<DemandSlipsAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `DemandSlips` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of DemandSlips
   * const count = await client.demandSlips.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `DemandSlips` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for DemandSlips
   * const columns = await client.demandSlips.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `DemandSlips` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for DemandSlips
   * await client.demandSlips.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `DemandSlips` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for DemandSlips
   * await client.demandSlips.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `DemandSlips` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for DemandSlips
   * const isTracking = await client.demandSlips.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {DemandSlipsSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: DemandSlipsSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
