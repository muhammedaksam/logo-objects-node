/**
 * @module ExportMovementSlips
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  ExportMovementSlips,
  ExportMovementSlipsSearchCriteria,
  ExportMovementSlipsAnalytics,
  KeyValueParameter,
  RsSlloctrnxml,
  ResultData,
  RsQccvallistxml,
  RsQccvalentryxml,
  RsEximwhfclinexml,
  RsEximwhfcdetxml,
  ExportMovementSlipsQueryOptions,
} from './types';

/**
 * @class ExportMovementSlipsClient
 * @extends BaseApiClient
 * @description
 * The `ExportMovementSlipsClient` provides an interface for interacting with the `ExportMovementSlips` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category İthalat
 * @category Hareketler
 * @category İthalat-Malzeme Dolaşım Fişi
 * @category Alan Özellikleri
 */
export class ExportMovementSlipsClient extends BaseApiClient {
  private readonly endpoint = '/exportMovementSlips';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `ExportMovementSlips` entities.
   * @param {ExportMovementSlipsQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<ExportMovementSlips>>} A promise that resolves to a paginated API response of `ExportMovementSlips` entities.
   *
   * @example
   * // Retrieves the first 10 ExportMovementSlips entities with specific fields
   * const exportMovementSlips = await client.exportMovementSlips.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ApiResponse<ExportMovementSlips>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `ExportMovementSlips` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ExportMovementSlips` entity.
   * @param {ExportMovementSlipsQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<ExportMovementSlips>} A promise that resolves to the requested `ExportMovementSlips` entity.
   *
   * @example
   * // Retrieves an ExportMovementSlips with ID 123 with specific fields
   * const exportMovementSlips = await client.exportMovementSlips.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ExportMovementSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `ExportMovementSlips` entity.
   * @param {Partial<ExportMovementSlips>} data - The data for the new `ExportMovementSlips` entity.
   * @returns {Promise<ExportMovementSlips>} A promise that resolves to the newly created `ExportMovementSlips` entity.
   *
   * @example
   * // Creates a new ExportMovementSlips
   * const newExportMovementSlips = await client.exportMovementSlips.create({
   *   name: 'New ExportMovementSlips',
   *   // ... other properties
   * });
   */
  async create(data: Partial<ExportMovementSlips>): Promise<ExportMovementSlips> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `ExportMovementSlips` entity.
   * @param {number} id - The internal reference ID of the `ExportMovementSlips` entity to update.
   * @param {Partial<ExportMovementSlips>} data - The updated data for the `ExportMovementSlips` entity.
   * @returns {Promise<ExportMovementSlips>} A promise that resolves to the updated `ExportMovementSlips` entity.
   *
   * @example
   * // Updates the name of an ExportMovementSlips with ID 123
   * const updatedExportMovementSlips = await client.exportMovementSlips.update(123, {
   *   name: 'Updated ExportMovementSlips Name',
   * });
   */
  async update(id: number, data: Partial<ExportMovementSlips>): Promise<ExportMovementSlips> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `ExportMovementSlips` entity.
   * @param {number} id - The internal reference ID of the `ExportMovementSlips` entity to update.
   * @param {Partial<ExportMovementSlips>} data - The partial data to update.
   * @returns {Promise<ExportMovementSlips>} A promise that resolves to the updated `ExportMovementSlips` entity.
   *
   * @example
   * // Partially updates an ExportMovementSlips with ID 123
   * const patchedExportMovementSlips = await client.exportMovementSlips.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(id: number, data: Partial<ExportMovementSlips>): Promise<ExportMovementSlips> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `ExportMovementSlips` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ExportMovementSlips` entity to delete.
   * @returns {Promise<ExportMovementSlips>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes an ExportMovementSlips with ID 123
   * await client.exportMovementSlips.delete(123);
   */
  async delete(id: number): Promise<ExportMovementSlips> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `ExportMovementSlips` entities based on a set of criteria.
   * @param {ExportMovementSlipsSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<ExportMovementSlips>>} A promise that resolves to a paginated API response of matching `ExportMovementSlips` entities.
   *
   * @example
   * // Searches for ExportMovementSlips entities with a specific code
   * const results = await client.exportMovementSlips.search({ code: '123' });
   */
  async search(
    criteria: ExportMovementSlipsSearchCriteria
  ): Promise<ApiResponse<ExportMovementSlips>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<ExportMovementSlips>>} A promise that resolves to a paginated API response of matching `ExportMovementSlips` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.exportMovementSlips.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<ExportMovementSlips>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `POST /exportMovementSlips/ReCalculate`
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(data: Partial<ExportMovementSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ReCalculate`, data);
  }

  /**
   * @method reCalculateV1Get
   * @description Corresponds to `GET /exportMovementSlips/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Get(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /exportMovementSlips/FillAccCodes`
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<ExportMovementSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /exportMovementSlips/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /exportMovementSlips/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportMovementSlips/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method equalizePayAmntV1Post
   * @description Corresponds to `POST /exportMovementSlips/EqualizePayAmnt`
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Post(data: Partial<ExportMovementSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/EqualizePayAmnt`, data);
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /exportMovementSlips/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportMovementSlips/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`,
      data
    );
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /exportMovementSlips/FillSMMACCCodes`
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(data: Partial<ExportMovementSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /exportMovementSlips/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /exportMovementSlips/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportMovementSlips/AttachADespatchByFicheNo/${dispFicheNo}`,
      data
    );
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /exportMovementSlips/DeleteCampaign`
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<ExportMovementSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /exportMovementSlips/SetClientInfo`
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<ExportMovementSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /exportMovementSlips/GetRelevantCampaigns`
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /exportMovementSlips/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /exportMovementSlips/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /exportMovementSlips/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /exportMovementSlips/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportMovementSlips/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistApplyaccdisttemplateV1
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistApplyaccdisttemplateV1(
    id1: number,
    id2: number,
    id3: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
  async transactionsdetailsslLinesqclistApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistSetlinetotalsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistSetlinetotalsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} Indx - _Indx
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    id3: number,
    Indx: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESQCLISTVALLISTV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_LINESQCLISTVALLISTV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESQCLISTVALLISTByIdV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsQccvallistxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_LINESQCLISTVALLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    idt: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<RsQccvallistxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAppendline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAppendline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistAppendline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAddserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAddserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistAddserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistGetstocklinepriceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    prcTyp: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    prcTyp: number,
    Indx: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAddline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAddline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} index - _index
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistAddline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    index: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAppendserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAppendserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistAppendserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistEqualizebalanceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistEqualizebalanceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} index - _index
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    index: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistSetlinetotalsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistSetlinetotalsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} Indx - _Indx
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistvallistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    Indx: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /exportMovementSlips/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ExportToXML/${RootKey}/${FileName}`, data);
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /exportMovementSlips/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportMovementSlips/ImportFromXMLFile/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /exportMovementSlips/CreateCompositeLines`
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/CreateCompositeLines`, data);
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /exportMovementSlips/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /exportMovementSlips/ApplyCampaign`
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<ExportMovementSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /exportMovementSlips/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ApplyRePayPln/${lineNr}/${rePayPCode}`, data);
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /exportMovementSlips/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /exportMovementSlips/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ImportFromXmlStr/${RootKey}/${XmlStr}`, data);
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /exportMovementSlips/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /exportMovementSlips/ApplyCondition`
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<ExportMovementSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /exportMovementSlips/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<ExportMovementSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportMovementSlips/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method transactionsdetailsGetstocklinepriceV1
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsGetstocklinepriceV1(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsGetstocklinepriceV1Get
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsGetstocklinepriceV1Get(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AddLine2/{_index}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAddline2V1Post(
    id1: number,
    index: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAppendserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsEximwhfclinexml} data - The request body.
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
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsEqualizebalanceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/EqualizeBalance/{_index}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsEqualizebalanceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsSetlinetotalsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/SetLineTotals/{_Indx}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsSetlinetotalsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_LINESV1(
    id: number,
    id1: number,
    id2: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESByIdV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsSlloctrnxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_LINESByIdV1(
    id: number,
    id1: number,
    id2: number,
    idt: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<RsSlloctrnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesAppendline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesAppendline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {RsEximwhfcdetxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesAppendline2V1Post(
    id1: number,
    id2: number,
    data: RsEximwhfcdetxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesAddserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsdetailsslLinesAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesAddserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsEximwhfcdetxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesAddserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsEximwhfcdetxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesGetstocklinepriceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsEximwhfcdetxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    data: RsEximwhfcdetxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesAddline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesAddline2V1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesAddline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsEximwhfcdetxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesAddline2V1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsEximwhfcdetxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesAppendserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsdetailsslLinesAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesAppendserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsEximwhfcdetxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesAppendserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsEximwhfcdetxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesEqualizebalanceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesEqualizebalanceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsEximwhfcdetxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesEqualizebalanceV1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsEximwhfcdetxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsEximwhfcdetxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsEximwhfcdetxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesSetlinetotalsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesSetlinetotalsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {RsEximwhfcdetxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesSetlinetotalsV1Post(
    id1: number,
    id2: number,
    Indx: number,
    data: RsEximwhfcdetxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESQCLISTV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_LINESQCLISTV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESQCLISTByIdV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsQccvalentryxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_LINESQCLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    idt: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<RsQccvalentryxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAppendline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAppendline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistAppendline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAddserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsdetailsslLinesqclistAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAddserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistAddserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistGetstocklinepriceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    prcTyp: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    id3: number,
    prcTyp: number,
    Indx: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAddline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAddline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistAddline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    index: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAppendserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsdetailsslLinesqclistAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAppendserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistAppendserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistEqualizebalanceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistEqualizebalanceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslLinesqclistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    id3: number,
    index: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesApplyaccdisttemplateV1
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesSetlinetotalsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesSetlinetotalsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESQCLISTV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_LINESQCLISTV1(
    id: number,
    id1: number,
    id2: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESQCLISTByIdV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsQccvalentryxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_LINESQCLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    idt: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<RsQccvalentryxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistAppendline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistAppendline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistAppendline2V1Post(
    id1: number,
    id2: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistAddserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsslLinesqclistAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistAddserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsslLinesqclistAddserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistGetstocklinepriceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistAddline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistAddline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistAddline2V1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistAppendserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsslLinesqclistAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistAppendserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsslLinesqclistAppendserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistEqualizebalanceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistEqualizebalanceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistSetlinetotalsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistSetlinetotalsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    Indx: number,
    data: RsSlloctrnxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESQCLISTVALLISTV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_LINESQCLISTVALLISTV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESQCLISTVALLISTByIdV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsQccvallistxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_LINESQCLISTVALLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    idt: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<RsQccvallistxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAppendline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistvallistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAppendline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistvallistAppendline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAddserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsslLinesqclistvallistAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAddserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsslLinesqclistvallistAddserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistGetstocklinepriceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistvallistGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    prcTyp: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistvallistGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    id3: number,
    prcTyp: number,
    Indx: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAddline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistvallistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAddline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistvallistAddline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    index: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAppendserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsslLinesqclistvallistAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAppendserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsslLinesqclistvallistAppendserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistEqualizebalanceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistvallistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistEqualizebalanceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistvallistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    id3: number,
    index: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
  async transactionsslLinesqclistvallistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
  async transactionsslLinesqclistvallistApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    id3: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistSetlinetotalsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistvallistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistSetlinetotalsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} Indx - _Indx
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesqclistvallistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    id3: number,
    Indx: number,
    data: RsQccvalentryxml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSV1(
    id: number,
    id1: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSByIdV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsEximwhfcdetxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<RsEximwhfcdetxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAppendline2V1(
    id: number,
    id1: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAppendline2V1Post(
    id1: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAddserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsEximwhfclinexml} data - The request body.
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
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /exportMovementSlips/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExportMovementSlips>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ExportMovementSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /exportMovementSlips/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExportMovementSlips>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ExportMovementSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSV1(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSByIdV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsEximwhfclinexml>} A promise resolving to the response.
   */
  async getTRANSACTIONSByIdV1(
    id: number,
    idt: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<RsEximwhfclinexml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1(
    id: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/AppendLine2`
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1Post(
    data: Partial<ExportMovementSlips>,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ExportMovementSlips>,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ExportMovementSlips>,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1(
    id: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1Post(
    index: number,
    data: Partial<ExportMovementSlips>,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAppendserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ExportMovementSlips>,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsEqualizebalanceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1(
    id: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsEqualizebalanceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1Post(
    index: number,
    data: Partial<ExportMovementSlips>,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ExportMovementSlips>,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsSetlinetotalsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsSetlinetotalsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ExportMovementSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ExportMovementSlips>,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_LINESV1(
    id: number,
    id1: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESByIdV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsSlloctrnxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_LINESByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<RsSlloctrnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesAppendline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesAppendline2V1(
    id: number,
    id1: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesAppendline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesAppendline2V1Post(
    id1: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesAddserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsslLinesAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesAddserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesGetstocklinepriceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesAddline2V1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesAddline2V1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesAddline2V1Post(
    id1: number,
    index: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesAppendserilotsV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsslLinesAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesAppendserilotsV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesEqualizebalanceV1
   * @description Corresponds to `GET /exportMovementSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportMovementSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesEqualizebalanceV1Post
   * @description Corresponds to `POST /exportMovementSlips/TRANSACTIONS/{id1}/SL_LINES/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsEximwhfclinexml,
    options?: ExportMovementSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportMovementSlips/TRANSACTIONS/${id1}/SL_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * Search exportMovementSlips by AUXIL_CODE
   * @param auxilCode - The AUXIL_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByAuxilCode(
    auxilCode: string | number | boolean
  ): Promise<ApiResponse<ExportMovementSlips>> {
    return this.getAll({ q: `AUXIL_CODE like '${auxilCode}*'` });
  }

  /**
   * Search exportMovementSlips by DISTRIBUTION_TYPE
   * @param distributionType - The DISTRIBUTION_TYPE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByDistributionType(
    distributionType: string | number | boolean
  ): Promise<ApiResponse<ExportMovementSlips>> {
    return this.getAll({ q: `DISTRIBUTION_TYPE eq ${distributionType}` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `ExportMovementSlips` entities.
   * @returns {Promise<ExportMovementSlipsAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for ExportMovementSlips
   * const analytics = await client.exportMovementSlips.getAnalytics();
   */
  async getAnalytics(): Promise<ExportMovementSlipsAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `ExportMovementSlips` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of ExportMovementSlips
   * const count = await client.exportMovementSlips.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `ExportMovementSlips` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for ExportMovementSlips
   * const columns = await client.exportMovementSlips.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `ExportMovementSlips` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for ExportMovementSlips
   * await client.exportMovementSlips.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `ExportMovementSlips` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for ExportMovementSlips
   * await client.exportMovementSlips.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `ExportMovementSlips` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for ExportMovementSlips
   * const isTracking = await client.exportMovementSlips.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {ExportMovementSlipsSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: ExportMovementSlipsSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
