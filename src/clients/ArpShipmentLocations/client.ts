/**
 * @module ArpShipmentLocations
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  ArpShipmentLocations,
  ArpShipmentLocationsSearchCriteria,
  ArpShipmentLocationsAnalytics,
  KeyValueParameter,
  ArpShipmentLocationsQueryOptions,
} from './types';

/**
 * @class ArpShipmentLocationsClient
 * @extends BaseApiClient
 * @description
 * The `ArpShipmentLocationsClient` provides an interface for interacting with the `ArpShipmentLocations` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Finans
 * @category Ana Kayıtlar
 * @category Cari Hesaplar
 * @category Sevkiyat Adresleri
 * @category Alan Özellikleri
 */
export class ArpShipmentLocationsClient extends BaseApiClient {
  private readonly endpoint = '/ArpShipmentLocations';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `ArpShipmentLocations` entities.
   * @param {ArpShipmentLocationsQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<ArpShipmentLocations>>} A promise that resolves to a paginated API response of `ArpShipmentLocations` entities.
   *
   * @example
   * // Retrieves the first 10 ArpShipmentLocations entities with specific fields
   * const arpShipmentLocations = await client.arpShipmentLocations.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<ApiResponse<ArpShipmentLocations>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `ArpShipmentLocations` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ArpShipmentLocations` entity.
   * @param {ArpShipmentLocationsQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<ArpShipmentLocations>} A promise that resolves to the requested `ArpShipmentLocations` entity.
   *
   * @example
   * // Retrieves an ArpShipmentLocations with ID 123 with specific fields
   * const arpShipmentLocations = await client.arpShipmentLocations.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(
    id: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<ArpShipmentLocations> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `ArpShipmentLocations` entity.
   * @param {Partial<ArpShipmentLocations>} data - The data for the new `ArpShipmentLocations` entity.
   * @returns {Promise<ArpShipmentLocations>} A promise that resolves to the newly created `ArpShipmentLocations` entity.
   *
   * @example
   * // Creates a new ArpShipmentLocations
   * const newArpShipmentLocations = await client.arpShipmentLocations.create({
   *   name: 'New ArpShipmentLocations',
   *   // ... other properties
   * });
   */
  async create(data: Partial<ArpShipmentLocations>): Promise<ArpShipmentLocations> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `ArpShipmentLocations` entity.
   * @param {number} id - The internal reference ID of the `ArpShipmentLocations` entity to update.
   * @param {Partial<ArpShipmentLocations>} data - The updated data for the `ArpShipmentLocations` entity.
   * @returns {Promise<ArpShipmentLocations>} A promise that resolves to the updated `ArpShipmentLocations` entity.
   *
   * @example
   * // Updates the name of an ArpShipmentLocations with ID 123
   * const updatedArpShipmentLocations = await client.arpShipmentLocations.update(123, {
   *   name: 'Updated ArpShipmentLocations Name',
   * });
   */
  async update(id: number, data: Partial<ArpShipmentLocations>): Promise<ArpShipmentLocations> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `ArpShipmentLocations` entity.
   * @param {number} id - The internal reference ID of the `ArpShipmentLocations` entity to update.
   * @param {Partial<ArpShipmentLocations>} data - The partial data to update.
   * @returns {Promise<ArpShipmentLocations>} A promise that resolves to the updated `ArpShipmentLocations` entity.
   *
   * @example
   * // Partially updates an ArpShipmentLocations with ID 123
   * const patchedArpShipmentLocations = await client.arpShipmentLocations.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(id: number, data: Partial<ArpShipmentLocations>): Promise<ArpShipmentLocations> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `ArpShipmentLocations` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ArpShipmentLocations` entity to delete.
   * @returns {Promise<ArpShipmentLocations>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes an ArpShipmentLocations with ID 123
   * await client.arpShipmentLocations.delete(123);
   */
  async delete(id: number): Promise<ArpShipmentLocations> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `ArpShipmentLocations` entities based on a set of criteria.
   * @param {ArpShipmentLocationsSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<ArpShipmentLocations>>} A promise that resolves to a paginated API response of matching `ArpShipmentLocations` entities.
   *
   * @example
   * // Searches for ArpShipmentLocations entities with a specific code
   * const results = await client.arpShipmentLocations.search({ code: '123' });
   */
  async search(
    criteria: ArpShipmentLocationsSearchCriteria
  ): Promise<ApiResponse<ArpShipmentLocations>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<ArpShipmentLocations>>} A promise that resolves to a paginated API response of matching `ArpShipmentLocations` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.arpShipmentLocations.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<ArpShipmentLocations>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `POST /ArpShipmentLocations/EqualizePayAmnt`
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(data: Partial<ArpShipmentLocations>): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/EqualizePayAmnt`, data);
  }

  /**
   * @method equalizePayAmntV1Get
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Get(
    id: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/ArpShipmentLocations/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`,
      data
    );
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/FillSMMACCCodes`
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(data: Partial<ArpShipmentLocations>): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/ArpShipmentLocations/AttachADespatchByFicheNo/${dispFicheNo}`,
      data
    );
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/DeleteCampaign`
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<ArpShipmentLocations>): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/SetClientInfo`
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<ArpShipmentLocations>): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/GetRelevantCampaigns`
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/ArpShipmentLocations/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /ArpShipmentLocations/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ArpShipmentLocations>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<ArpShipmentLocations> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/ArpShipmentLocations/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /ArpShipmentLocations/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ArpShipmentLocations>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<ArpShipmentLocations> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/ArpShipmentLocations/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/ExportToXML/${RootKey}/${FileName}`, data);
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/ArpShipmentLocations/ImportFromXMLFile/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/CreateCompositeLines`
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/CreateCompositeLines`, data);
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ApplyCampaign`
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<ArpShipmentLocations>): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/ArpShipmentLocations/ApplyRePayPln/${lineNr}/${rePayPCode}`,
      data
    );
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/ArpShipmentLocations/ImportFromXmlStr/${RootKey}/${XmlStr}`,
      data
    );
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ApplyCondition`
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<ArpShipmentLocations>): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(
    id: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method reCalculateV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ReCalculate`
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Post(data: Partial<ArpShipmentLocations>): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/ReCalculate`, data);
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/FillAccCodes`
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<ArpShipmentLocations>): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/ArpShipmentLocations/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /ArpShipmentLocations/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: ArpShipmentLocationsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/ArpShipmentLocations/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /ArpShipmentLocations/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<ArpShipmentLocations>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<ArpShipmentLocations>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/ArpShipmentLocations/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * Search arpShipmentLocations by ARP_CODE
   * @param arpCode - The ARP_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByArpCode(
    arpCode: string | number | boolean
  ): Promise<ApiResponse<ArpShipmentLocations>> {
    return this.getAll({ q: `ARP_CODE like '${arpCode}*'` });
  }

  /**
   * Search arpShipmentLocations by NAME
   * @param name - The NAME to search for
   * @returns Promise resolving to matching entities
   */
  async searchByName(name: string | number | boolean): Promise<ApiResponse<ArpShipmentLocations>> {
    return this.getAll({ q: `NAME like '${name}*'` });
  }

  /**
   * Search arpShipmentLocations by TITLE
   * @param title - The TITLE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByTitle(
    title: string | number | boolean
  ): Promise<ApiResponse<ArpShipmentLocations>> {
    return this.getAll({ q: `TITLE like '${title}*'` });
  }

  /**
   * Search arpShipmentLocations by DESCRIPTION
   * @param description - The DESCRIPTION to search for
   * @returns Promise resolving to matching entities
   */
  async searchByDescription(
    description: string | number | boolean
  ): Promise<ApiResponse<ArpShipmentLocations>> {
    return this.getAll({ q: `DESCRIPTION like '${description}*'` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `ArpShipmentLocations` entities.
   * @returns {Promise<ArpShipmentLocationsAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for ArpShipmentLocations
   * const analytics = await client.arpShipmentLocations.getAnalytics();
   */
  async getAnalytics(): Promise<ArpShipmentLocationsAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `ArpShipmentLocations` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of ArpShipmentLocations
   * const count = await client.arpShipmentLocations.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `ArpShipmentLocations` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for ArpShipmentLocations
   * const columns = await client.arpShipmentLocations.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `ArpShipmentLocations` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for ArpShipmentLocations
   * await client.arpShipmentLocations.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `ArpShipmentLocations` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for ArpShipmentLocations
   * await client.arpShipmentLocations.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `ArpShipmentLocations` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for ArpShipmentLocations
   * const isTracking = await client.arpShipmentLocations.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {ArpShipmentLocationsSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: ArpShipmentLocationsSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
