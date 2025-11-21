/**
 * @module PurchaseOrders
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  PurchaseOrders,
  PurchaseOrdersSearchCriteria,
  PurchaseOrdersAnalytics,
  KeyValueParameter,
  RsPaylstxml,
  ResultData,
  ExtendedFieldDefinitions,
  DemandPeggings,
  RsLabelxml,
  RsOrdtransxml,
  RsDiscpaytrxml,
  RsCampcodeslistxml,
  RsAddtaxmultilinex,
  RsOrddettrnxml,
  PurchaseOrdersQueryOptions,
} from './types';

/**
 * @class PurchaseOrdersClient
 * @extends BaseApiClient
 * @description
 * The `PurchaseOrdersClient` provides an interface for interacting with the `PurchaseOrders` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Satınalma
 * @category Hareketler
 * @category Satınalma Siparişleri
 * @category Alan Özellikleri
 */
export class PurchaseOrdersClient extends BaseApiClient {
  private readonly endpoint = '/purchaseOrders';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `PurchaseOrders` entities.
   * @param {PurchaseOrdersQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<PurchaseOrders>>} A promise that resolves to a paginated API response of `PurchaseOrders` entities.
   *
   * @example
   * // Retrieves the first 10 PurchaseOrders entities with specific fields
   * const purchaseOrders = await client.purchaseOrders.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: PurchaseOrdersQueryOptions): Promise<ApiResponse<PurchaseOrders>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `PurchaseOrders` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `PurchaseOrders` entity.
   * @param {PurchaseOrdersQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<PurchaseOrders>} A promise that resolves to the requested `PurchaseOrders` entity.
   *
   * @example
   * // Retrieves a PurchaseOrders with ID 123 with specific fields
   * const purchaseOrders = await client.purchaseOrders.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(id: number, options?: PurchaseOrdersQueryOptions): Promise<PurchaseOrders> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `PurchaseOrders` entity.
   * @param {Partial<PurchaseOrders>} data - The data for the new `PurchaseOrders` entity.
   * @returns {Promise<PurchaseOrders>} A promise that resolves to the newly created `PurchaseOrders` entity.
   *
   * @example
   * // Creates a new PurchaseOrders
   * const newPurchaseOrders = await client.purchaseOrders.create({
   *   name: 'New PurchaseOrders',
   *   // ... other properties
   * });
   */
  async create(data: Partial<PurchaseOrders>): Promise<PurchaseOrders> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `PurchaseOrders` entity.
   * @param {number} id - The internal reference ID of the `PurchaseOrders` entity to update.
   * @param {Partial<PurchaseOrders>} data - The updated data for the `PurchaseOrders` entity.
   * @returns {Promise<PurchaseOrders>} A promise that resolves to the updated `PurchaseOrders` entity.
   *
   * @example
   * // Updates the name of a PurchaseOrders with ID 123
   * const updatedPurchaseOrders = await client.purchaseOrders.update(123, {
   *   name: 'Updated PurchaseOrders Name',
   * });
   */
  async update(id: number, data: Partial<PurchaseOrders>): Promise<PurchaseOrders> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `PurchaseOrders` entity.
   * @param {number} id - The internal reference ID of the `PurchaseOrders` entity to update.
   * @param {Partial<PurchaseOrders>} data - The partial data to update.
   * @returns {Promise<PurchaseOrders>} A promise that resolves to the updated `PurchaseOrders` entity.
   *
   * @example
   * // Partially updates a PurchaseOrders with ID 123
   * const patchedPurchaseOrders = await client.purchaseOrders.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(id: number, data: Partial<PurchaseOrders>): Promise<PurchaseOrders> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `PurchaseOrders` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `PurchaseOrders` entity to delete.
   * @returns {Promise<PurchaseOrders>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes a PurchaseOrders with ID 123
   * await client.purchaseOrders.delete(123);
   */
  async delete(id: number): Promise<PurchaseOrders> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `PurchaseOrders` entities based on a set of criteria.
   * @param {PurchaseOrdersSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<PurchaseOrders>>} A promise that resolves to a paginated API response of matching `PurchaseOrders` entities.
   *
   * @example
   * // Searches for PurchaseOrders entities with a specific code
   * const results = await client.purchaseOrders.search({ code: '123' });
   */
  async search(criteria: PurchaseOrdersSearchCriteria): Promise<ApiResponse<PurchaseOrders>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<PurchaseOrders>>} A promise that resolves to a paginated API response of matching `PurchaseOrders` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.purchaseOrders.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<PurchaseOrders>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `POST /purchaseOrders/EqualizePayAmnt`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(data: Partial<PurchaseOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/EqualizePayAmnt`, data);
  }

  /**
   * @method equalizePayAmntV1Get
   * @description Corresponds to `GET /purchaseOrders/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Get(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /purchaseOrders/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/purchaseOrders/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`,
      data
    );
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /purchaseOrders/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /purchaseOrders/FillSMMACCCodes`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(data: Partial<PurchaseOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /purchaseOrders/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /purchaseOrders/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /purchaseOrders/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /purchaseOrders/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/AttachADespatchByFicheNo/${dispFicheNo}`, data);
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /purchaseOrders/DeleteCampaign`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<PurchaseOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /purchaseOrders/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /purchaseOrders/SetClientInfo`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<PurchaseOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /purchaseOrders/GetRelevantCampaigns`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(data: Partial<PurchaseOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /purchaseOrders/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /purchaseOrders/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /purchaseOrders/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /purchaseOrders/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/purchaseOrders/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method labelListGetstocklinepriceV1
   * @description Corresponds to `POST /purchaseOrders/LABEL_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListGetstocklinepriceV1(
    prcTyp: number,
    Indx: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/LABEL_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListGetstocklinepriceV1Get
   * @description Corresponds to `GET /purchaseOrders/{id}/LABEL_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/LABEL_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAddline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/LABEL_LIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAddline2V1(
    id: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/LABEL_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAddline2V1Post
   * @description Corresponds to `POST /purchaseOrders/LABEL_LIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAddline2V1Post(
    index: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/LABEL_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListAppendserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/LABEL_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/LABEL_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAppendserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/LABEL_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/LABEL_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListEqualizebalanceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/LABEL_LIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListEqualizebalanceV1(
    id: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/LABEL_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListEqualizebalanceV1Post
   * @description Corresponds to `POST /purchaseOrders/LABEL_LIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListEqualizebalanceV1Post(
    index: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/LABEL_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListApplyaccdisttemplateV1
   * @description Corresponds to `GET /purchaseOrders/{id}/LABEL_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/LABEL_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /purchaseOrders/LABEL_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/LABEL_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListSetlinetotalsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/LABEL_LIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/LABEL_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListSetlinetotalsV1Post
   * @description Corresponds to `POST /purchaseOrders/LABEL_LIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListSetlinetotalsV1Post(
    Indx: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/LABEL_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /purchaseOrders/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ExportToXML/${RootKey}/${FileName}`, data);
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /purchaseOrders/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ImportFromXMLFile/${RootKey}/${FileName}`, data);
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /purchaseOrders/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /purchaseOrders/CreateCompositeLines`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(data: Partial<PurchaseOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/CreateCompositeLines`, data);
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /purchaseOrders/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /purchaseOrders/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /purchaseOrders/ApplyCampaign`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<PurchaseOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /purchaseOrders/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ApplyRePayPln/${lineNr}/${rePayPCode}`, data);
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /purchaseOrders/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /purchaseOrders/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ImportFromXmlStr/${RootKey}/${XmlStr}`, data);
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /purchaseOrders/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /purchaseOrders/ApplyCondition`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<PurchaseOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /purchaseOrders/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method reCalculateV1Post
   * @description Corresponds to `POST /purchaseOrders/ReCalculate`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Post(data: Partial<PurchaseOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ReCalculate`, data);
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /purchaseOrders/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /purchaseOrders/FillAccCodes`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<PurchaseOrders>): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /purchaseOrders/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /purchaseOrders/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/purchaseOrders/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /purchaseOrders/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /purchaseOrders/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<PurchaseOrders>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/purchaseOrders/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistApplyaccdisttemplateV1
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/{id1}/DISCTRLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsPaylstxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/${id1}/DISCTRLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistSetlinetotalsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistSetlinetotalsV1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/{id1}/DISCTRLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsPaylstxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/${id1}/DISCTRLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDEFNFLDSLISTV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEFNFLDSLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDEFNFLDSLISTV1(id: number, options?: PurchaseOrdersQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEFNFLDSLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDEFNFLDSLISTByIdV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEFNFLDSLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExtendedFieldDefinitions>} A promise resolving to the response.
   */
  async getDEFNFLDSLISTByIdV1(
    id: number,
    idt: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<ExtendedFieldDefinitions> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEFNFLDSLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendline2V1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendline2V1Post
   * @description Corresponds to `POST /purchaseOrders/DEFNFLDSLIST/AppendLine2`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendline2V1Post(
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAddserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAddserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistGetstocklinepriceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistGetstocklinepriceV1Post
   * @description Corresponds to `POST /purchaseOrders/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAddline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddline2V1(
    id: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAddline2V1Post
   * @description Corresponds to `POST /purchaseOrders/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddline2V1Post(
    index: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAppendserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistEqualizebalanceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistEqualizebalanceV1(
    id: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistEqualizebalanceV1Post
   * @description Corresponds to `POST /purchaseOrders/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistEqualizebalanceV1Post(
    index: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistApplyaccdisttemplateV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /purchaseOrders/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistSetlinetotalsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistSetlinetotalsV1Post
   * @description Corresponds to `POST /purchaseOrders/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDEMANDPEGGINGSV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEMANDPEGGINGS`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDEMANDPEGGINGSV1(id: number, options?: PurchaseOrdersQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEMANDPEGGINGS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDEMANDPEGGINGSByIdV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEMANDPEGGINGS/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<DemandPeggings>} A promise resolving to the response.
   */
  async getDEMANDPEGGINGSByIdV1(
    id: number,
    idt: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<DemandPeggings> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEMANDPEGGINGS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsAppendline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEMANDPEGGINGS/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAppendline2V1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEMANDPEGGINGS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsAppendline2V1Post
   * @description Corresponds to `POST /purchaseOrders/DEMANDPEGGINGS/AppendLine2`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAppendline2V1Post(
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEMANDPEGGINGS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsAddserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEMANDPEGGINGS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEMANDPEGGINGS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsAddserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/DEMANDPEGGINGS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEMANDPEGGINGS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsGetstocklinepriceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEMANDPEGGINGS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEMANDPEGGINGS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsGetstocklinepriceV1Post
   * @description Corresponds to `POST /purchaseOrders/DEMANDPEGGINGS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEMANDPEGGINGS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsAddline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEMANDPEGGINGS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAddline2V1(
    id: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEMANDPEGGINGS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsAddline2V1Post
   * @description Corresponds to `POST /purchaseOrders/DEMANDPEGGINGS/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAddline2V1Post(
    index: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEMANDPEGGINGS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsAppendserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEMANDPEGGINGS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEMANDPEGGINGS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsAppendserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/DEMANDPEGGINGS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEMANDPEGGINGS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsEqualizebalanceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEMANDPEGGINGS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsEqualizebalanceV1(
    id: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEMANDPEGGINGS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsEqualizebalanceV1Post
   * @description Corresponds to `POST /purchaseOrders/DEMANDPEGGINGS/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsEqualizebalanceV1Post(
    index: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEMANDPEGGINGS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsApplyaccdisttemplateV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEMANDPEGGINGS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEMANDPEGGINGS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /purchaseOrders/DEMANDPEGGINGS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEMANDPEGGINGS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsSetlinetotalsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/DEMANDPEGGINGS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/DEMANDPEGGINGS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsSetlinetotalsV1Post
   * @description Corresponds to `POST /purchaseOrders/DEMANDPEGGINGS/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsSetlinetotalsV1Post(
    Indx: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/DEMANDPEGGINGS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getLABEL_LISTV1
   * @description Corresponds to `GET /purchaseOrders/{id}/LABEL_LIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getLABEL_LISTV1(id: number, options?: PurchaseOrdersQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/LABEL_LIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getLABEL_LISTByIdV1
   * @description Corresponds to `GET /purchaseOrders/{id}/LABEL_LIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsLabelxml>} A promise resolving to the response.
   */
  async getLABEL_LISTByIdV1(
    id: number,
    idt: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<RsLabelxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/LABEL_LIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAppendline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/LABEL_LIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAppendline2V1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/LABEL_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAppendline2V1Post
   * @description Corresponds to `POST /purchaseOrders/LABEL_LIST/AppendLine2`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAppendline2V1Post(
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/LABEL_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListAddserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/LABEL_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/LABEL_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAddserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/LABEL_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/LABEL_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsaddtaxlinelistGetstocklinepriceV1
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/ADDTAXLINELIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistGetstocklinepriceV1(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/ADDTAXLINELIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsaddtaxlinelistGetstocklinepriceV1Get
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/ADDTAXLINELIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistGetstocklinepriceV1Get(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/ADDTAXLINELIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsaddtaxlinelistAddline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/ADDTAXLINELIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/ADDTAXLINELIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsaddtaxlinelistAddline2V1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/ADDTAXLINELIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistAddline2V1Post(
    id1: number,
    index: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/ADDTAXLINELIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsaddtaxlinelistAppendserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/ADDTAXLINELIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsaddtaxlinelistAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/ADDTAXLINELIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsaddtaxlinelistAppendserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/ADDTAXLINELIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/ADDTAXLINELIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsaddtaxlinelistEqualizebalanceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/ADDTAXLINELIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/ADDTAXLINELIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsaddtaxlinelistEqualizebalanceV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/ADDTAXLINELIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/ADDTAXLINELIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsaddtaxlinelistApplyaccdisttemplateV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/ADDTAXLINELIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/ADDTAXLINELIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsaddtaxlinelistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/ADDTAXLINELIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/ADDTAXLINELIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsaddtaxlinelistSetlinetotalsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/ADDTAXLINELIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/ADDTAXLINELIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsaddtaxlinelistSetlinetotalsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/ADDTAXLINELIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/ADDTAXLINELIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getPAYMENT_LISTV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getPAYMENT_LISTV1(id: number, options?: PurchaseOrdersQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getPAYMENT_LISTByIdV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsPaylstxml>} A promise resolving to the response.
   */
  async getPAYMENT_LISTByIdV1(
    id: number,
    idt: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<RsPaylstxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListAppendline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAppendline2V1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListAppendline2V1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/AppendLine2`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAppendline2V1Post(
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListAddserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListAddserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListGetstocklinepriceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListGetstocklinepriceV1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListAddline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAddline2V1(
    id: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListAddline2V1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAddline2V1Post(
    index: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListAppendserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListAppendserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListEqualizebalanceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListEqualizebalanceV1(
    id: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListEqualizebalanceV1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListEqualizebalanceV1Post(
    index: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListApplyaccdisttemplateV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListSetlinetotalsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListSetlinetotalsV1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListSetlinetotalsV1Post(
    Indx: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getPAYMENT_LISTDISCTRLISTV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/{id1}/DISCTRLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getPAYMENT_LISTDISCTRLISTV1(
    id: number,
    id1: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/${id1}/DISCTRLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getPAYMENT_LISTDISCTRLISTByIdV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsDiscpaytrxml>} A promise resolving to the response.
   */
  async getPAYMENT_LISTDISCTRLISTByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<RsDiscpaytrxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistAppendline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistAppendline2V1(
    id: number,
    id1: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistAppendline2V1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/{id1}/DISCTRLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistAppendline2V1Post(
    id1: number,
    data: RsPaylstxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/${id1}/DISCTRLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistAddserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async paymentListdisctrlistAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistAddserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/{id1}/DISCTRLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsPaylstxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/${id1}/DISCTRLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistGetstocklinepriceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistGetstocklinepriceV1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/{id1}/DISCTRLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsPaylstxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/${id1}/DISCTRLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistAddline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistAddline2V1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/{id1}/DISCTRLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistAddline2V1Post(
    id1: number,
    index: number,
    data: RsPaylstxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/${id1}/DISCTRLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistAppendserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async paymentListdisctrlistAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistAppendserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/{id1}/DISCTRLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsPaylstxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/${id1}/DISCTRLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistEqualizebalanceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistEqualizebalanceV1Post
   * @description Corresponds to `POST /purchaseOrders/PAYMENT_LIST/{id1}/DISCTRLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsPaylstxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/PAYMENT_LIST/${id1}/DISCTRLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsApplyaccdisttemplateV1
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsSetlinetotalsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DETAILS/SetLineTotals/{_Indx}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsSetlinetotalsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DETAILS/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSCAMPAIGN_INFOSV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/CAMPAIGN_INFOS`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSCAMPAIGN_INFOSV1(
    id: number,
    id1: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/CAMPAIGN_INFOS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSCAMPAIGN_INFOSByIdV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsCampcodeslistxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSCAMPAIGN_INFOSByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<RsCampcodeslistxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionscampaignInfosAppendline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosAppendline2V1(
    id: number,
    id1: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionscampaignInfosAppendline2V1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosAppendline2V1Post(
    id1: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionscampaignInfosAddserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionscampaignInfosAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionscampaignInfosAddserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionscampaignInfosGetstocklinepriceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionscampaignInfosGetstocklinepriceV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionscampaignInfosAddline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionscampaignInfosAddline2V1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosAddline2V1Post(
    id1: number,
    index: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionscampaignInfosAppendserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionscampaignInfosAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionscampaignInfosAppendserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionscampaignInfosEqualizebalanceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionscampaignInfosEqualizebalanceV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionscampaignInfosApplyaccdisttemplateV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionscampaignInfosApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionscampaignInfosSetlinetotalsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionscampaignInfosSetlinetotalsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/CAMPAIGN_INFOS/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionscampaignInfosSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/CAMPAIGN_INFOS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDEFNFLDSV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DEFNFLDS`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDEFNFLDSV1(
    id: number,
    id1: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DEFNFLDS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDEFNFLDSByIdV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DEFNFLDS/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExtendedFieldDefinitions>} A promise resolving to the response.
   */
  async getTRANSACTIONSDEFNFLDSByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<ExtendedFieldDefinitions> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DEFNFLDS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldsAppendline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DEFNFLDS/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsAppendline2V1(
    id: number,
    id1: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DEFNFLDS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldsAppendline2V1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DEFNFLDS/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsAppendline2V1Post(
    id1: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DEFNFLDS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldsAddserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DEFNFLDS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsdefnfldsAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DEFNFLDS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldsAddserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DEFNFLDS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DEFNFLDS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldsGetstocklinepriceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DEFNFLDS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DEFNFLDS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldsGetstocklinepriceV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DEFNFLDS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DEFNFLDS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldsAddline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DEFNFLDS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DEFNFLDS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldsAddline2V1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DEFNFLDS/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsAddline2V1Post(
    id1: number,
    index: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DEFNFLDS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldsAppendserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DEFNFLDS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsdefnfldsAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DEFNFLDS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldsAppendserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DEFNFLDS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DEFNFLDS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldsEqualizebalanceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DEFNFLDS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DEFNFLDS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldsEqualizebalanceV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DEFNFLDS/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DEFNFLDS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldsApplyaccdisttemplateV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DEFNFLDS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DEFNFLDS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DEFNFLDS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DEFNFLDS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldsSetlinetotalsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DEFNFLDS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DEFNFLDS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldsSetlinetotalsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DEFNFLDS/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldsSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DEFNFLDS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSADDTAXLINELISTV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/ADDTAXLINELIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSADDTAXLINELISTV1(
    id: number,
    id1: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/ADDTAXLINELIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSADDTAXLINELISTByIdV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/ADDTAXLINELIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsAddtaxmultilinex>} A promise resolving to the response.
   */
  async getTRANSACTIONSADDTAXLINELISTByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<RsAddtaxmultilinex> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/ADDTAXLINELIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsaddtaxlinelistAppendline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/ADDTAXLINELIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistAppendline2V1(
    id: number,
    id1: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/ADDTAXLINELIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsaddtaxlinelistAppendline2V1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/ADDTAXLINELIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistAppendline2V1Post(
    id1: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/ADDTAXLINELIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsaddtaxlinelistAddserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/ADDTAXLINELIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsaddtaxlinelistAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/ADDTAXLINELIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsaddtaxlinelistAddserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/ADDTAXLINELIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsaddtaxlinelistAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/ADDTAXLINELIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /purchaseOrders/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<PurchaseOrders>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: PurchaseOrdersQueryOptions
  ): Promise<PurchaseOrders> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /purchaseOrders/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<PurchaseOrders>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: PurchaseOrdersQueryOptions
  ): Promise<PurchaseOrders> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSV1(id: number, options?: PurchaseOrdersQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSByIdV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsOrdtransxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSByIdV1(
    id: number,
    idt: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<RsOrdtransxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1(
    id: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/AppendLine2`
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1Post(
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1(
    id: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddline2V1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1Post(
    index: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAppendserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsEqualizebalanceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1(
    id: number,
    index: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsEqualizebalanceV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1Post(
    index: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsSetlinetotalsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsSetlinetotalsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<PurchaseOrders>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1Post(
    Indx: number,
    data: Partial<PurchaseOrders>,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DETAILS`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSV1(
    id: number,
    id1: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DETAILS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSByIdV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DETAILS/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsOrddettrnxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<RsOrddettrnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DETAILS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DETAILS/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAppendline2V1(
    id: number,
    id1: number,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendline2V1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DETAILS/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAppendline2V1Post(
    id1: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAddserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsOrdtransxml} data - The request body.
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
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsGetstocklinepriceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsGetstocklinepriceV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAddline2V1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DETAILS/AddLine2/{_index}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddline2V1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DETAILS/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAddline2V1Post(
    id1: number,
    index: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAppendserilotsV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendserilotsV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsOrdtransxml} data - The request body.
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
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsEqualizebalanceV1
   * @description Corresponds to `GET /purchaseOrders/{id}/TRANSACTIONS/{id1}/DETAILS/EqualizeBalance/{_index}`
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
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/purchaseOrders/${id}/TRANSACTIONS/${id1}/DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsEqualizebalanceV1Post
   * @description Corresponds to `POST /purchaseOrders/TRANSACTIONS/{id1}/DETAILS/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsOrdtransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsOrdtransxml,
    options?: PurchaseOrdersQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/purchaseOrders/TRANSACTIONS/${id1}/DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * Search purchaseOrders by AUXIL_CODE
   * @param auxilCode - The AUXIL_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByAuxilCode(
    auxilCode: string | number | boolean
  ): Promise<ApiResponse<PurchaseOrders>> {
    return this.getAll({ q: `AUXIL_CODE like '${auxilCode}*'` });
  }

  /**
   * Search purchaseOrders by FC_STATUS_NAME
   * @param fcStatusName - The FC_STATUS_NAME to search for
   * @returns Promise resolving to matching entities
   */
  async searchByFcStatusName(
    fcStatusName: string | number | boolean
  ): Promise<ApiResponse<PurchaseOrders>> {
    return this.getAll({ q: `FC_STATUS_NAME like '${fcStatusName}*'` });
  }

  /**
   * Search purchaseOrders by EINVOICE_DESCRIPTION
   * @param einvoiceDescription - The EINVOICE_DESCRIPTION to search for
   * @returns Promise resolving to matching entities
   */
  async searchByEinvoiceDescription(
    einvoiceDescription: string | number | boolean
  ): Promise<ApiResponse<PurchaseOrders>> {
    return this.getAll({ q: `EINVOICE_DESCRIPTION like '${einvoiceDescription}*'` });
  }

  /**
   * Search purchaseOrders by NUMBER
   * @param number - The NUMBER to search for
   * @returns Promise resolving to matching entities
   */
  async searchBynumber(number: string | number | boolean): Promise<ApiResponse<PurchaseOrders>> {
    return this.getAll({ q: `NUMBER eq ${number}` });
  }

  /**
   * Search purchaseOrders by TYPE
   * @param type - The TYPE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByType(type: string | number | boolean): Promise<ApiResponse<PurchaseOrders>> {
    return this.getAll({ q: `TYPE eq ${type}` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `PurchaseOrders` entities.
   * @returns {Promise<PurchaseOrdersAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for PurchaseOrders
   * const analytics = await client.purchaseOrders.getAnalytics();
   */
  async getAnalytics(): Promise<PurchaseOrdersAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `PurchaseOrders` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of PurchaseOrders
   * const count = await client.purchaseOrders.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `PurchaseOrders` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for PurchaseOrders
   * const columns = await client.purchaseOrders.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `PurchaseOrders` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for PurchaseOrders
   * await client.purchaseOrders.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `PurchaseOrders` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for PurchaseOrders
   * await client.purchaseOrders.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `PurchaseOrders` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for PurchaseOrders
   * const isTracking = await client.purchaseOrders.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {PurchaseOrdersSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: PurchaseOrdersSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
