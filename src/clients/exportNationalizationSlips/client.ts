/**
 * @module ExportNationalizationSlips
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  ExportNationalizationSlips,
  ExportNationalizationSlipsSearchCriteria,
  ExportNationalizationSlipsAnalytics,
  KeyValueParameter,
  RsSlloctrnxml,
  ResultData,
  RsQccvallistxml,
  RsQccvalentryxml,
  RsEximwhfclinexml,
  RsEximwhfcdetxml,
  ExportNationalizationSlipsQueryOptions,
} from './types';

/**
 * @class ExportNationalizationSlipsClient
 * @extends BaseApiClient
 * @description
 * The `ExportNationalizationSlipsClient` provides an interface for interacting with the `ExportNationalizationSlips` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category İthalat
 * @category Hareketler
 * @category İthalat-Millileştirme Fişleri
 * @category Alan Özellikleri
 */
export class ExportNationalizationSlipsClient extends BaseApiClient {
  private readonly endpoint = '/exportNationalizationSlips';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `ExportNationalizationSlips` entities.
   * @param {ExportNationalizationSlipsQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<ExportNationalizationSlips>>} A promise that resolves to a paginated API response of `ExportNationalizationSlips` entities.
   *
   * @example
   * // Retrieves the first 10 ExportNationalizationSlips entities with specific fields
   * const exportNationalizationSlips = await client.exportNationalizationSlips.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ApiResponse<ExportNationalizationSlips>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `ExportNationalizationSlips` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ExportNationalizationSlips` entity.
   * @param {ExportNationalizationSlipsQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<ExportNationalizationSlips>} A promise that resolves to the requested `ExportNationalizationSlips` entity.
   *
   * @example
   * // Retrieves an ExportNationalizationSlips with ID 123 with specific fields
   * const exportNationalizationSlips = await client.exportNationalizationSlips.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ExportNationalizationSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `ExportNationalizationSlips` entity.
   * @param {Partial<ExportNationalizationSlips>} data - The data for the new `ExportNationalizationSlips` entity.
   * @returns {Promise<ExportNationalizationSlips>} A promise that resolves to the newly created `ExportNationalizationSlips` entity.
   *
   * @example
   * // Creates a new ExportNationalizationSlips
   * const newExportNationalizationSlips = await client.exportNationalizationSlips.create({
   *   name: 'New ExportNationalizationSlips',
   *   // ... other properties
   * });
   */
  async create(data: Partial<ExportNationalizationSlips>): Promise<ExportNationalizationSlips> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `ExportNationalizationSlips` entity.
   * @param {number} id - The internal reference ID of the `ExportNationalizationSlips` entity to update.
   * @param {Partial<ExportNationalizationSlips>} data - The updated data for the `ExportNationalizationSlips` entity.
   * @returns {Promise<ExportNationalizationSlips>} A promise that resolves to the updated `ExportNationalizationSlips` entity.
   *
   * @example
   * // Updates the name of an ExportNationalizationSlips with ID 123
   * const updatedExportNationalizationSlips = await client.exportNationalizationSlips.update(123, {
   *   name: 'Updated ExportNationalizationSlips Name',
   * });
   */
  async update(
    id: number,
    data: Partial<ExportNationalizationSlips>
  ): Promise<ExportNationalizationSlips> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `ExportNationalizationSlips` entity.
   * @param {number} id - The internal reference ID of the `ExportNationalizationSlips` entity to update.
   * @param {Partial<ExportNationalizationSlips>} data - The partial data to update.
   * @returns {Promise<ExportNationalizationSlips>} A promise that resolves to the updated `ExportNationalizationSlips` entity.
   *
   * @example
   * // Partially updates an ExportNationalizationSlips with ID 123
   * const patchedExportNationalizationSlips = await client.exportNationalizationSlips.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(
    id: number,
    data: Partial<ExportNationalizationSlips>
  ): Promise<ExportNationalizationSlips> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `ExportNationalizationSlips` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ExportNationalizationSlips` entity to delete.
   * @returns {Promise<ExportNationalizationSlips>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes an ExportNationalizationSlips with ID 123
   * await client.exportNationalizationSlips.delete(123);
   */
  async delete(id: number): Promise<ExportNationalizationSlips> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `ExportNationalizationSlips` entities based on a set of criteria.
   * @param {ExportNationalizationSlipsSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<ExportNationalizationSlips>>} A promise that resolves to a paginated API response of matching `ExportNationalizationSlips` entities.
   *
   * @example
   * // Searches for ExportNationalizationSlips entities with a specific code
   * const results = await client.exportNationalizationSlips.search({ code: '123' });
   */
  async search(
    criteria: ExportNationalizationSlipsSearchCriteria
  ): Promise<ApiResponse<ExportNationalizationSlips>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<ExportNationalizationSlips>>} A promise that resolves to a paginated API response of matching `ExportNationalizationSlips` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.exportNationalizationSlips.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<ExportNationalizationSlips>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `POST /exportNationalizationSlips/ReCalculate`
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(data: Partial<ExportNationalizationSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/ReCalculate`, data);
  }

  /**
   * @method reCalculateV1Get
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Get(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/FillAccCodes`
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method equalizePayAmntV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/EqualizePayAmnt`
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Post(
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/EqualizePayAmnt`, data);
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`,
      data
    );
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/FillSMMACCCodes`
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/AttachADespatchByLRef/${dispref}`,
      data
    );
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/AttachADespatchByFicheNo/${dispFicheNo}`,
      data
    );
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/DeleteCampaign`
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/SetClientInfo`
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/GetRelevantCampaigns`
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/ApplyCampaignSpecific/${refList}`,
      data
    );
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/ExportBase64EncodedImage/${Indx}`,
      data
    );
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistApplyaccdisttemplateV1
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistSetlinetotalsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistSetlinetotalsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESQCLISTVALLISTV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESQCLISTVALLISTByIdV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/{idt}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<RsQccvallistxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAppendline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AppendLine2`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAppendline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AppendLine2`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAddserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAddserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistGetstocklinepriceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAddline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAddline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAppendserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistAppendserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistEqualizebalanceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistEqualizebalanceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistSetlinetotalsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistvallistSetlinetotalsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{id4}/VALLIST/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${id4}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/ExportToXML/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/ImportFromXMLFile/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/CreateCompositeLines`
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/CreateCompositeLines`, data);
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ApplyCampaign`
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/ApplyRePayPln/${lineNr}/${rePayPCode}`,
      data
    );
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/ApplyRePayPlnForInv/${rePayCode}`,
      data
    );
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/exportNationalizationSlips/ImportFromXmlStr/${RootKey}/${XmlStr}`,
      data
    );
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ApplyCondition`
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<ExportNationalizationSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/exportNationalizationSlips/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method transactionsdetailsGetstocklinepriceV1
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsGetstocklinepriceV1Get
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAppendserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsEqualizebalanceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsEqualizebalanceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsSetlinetotalsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsSetlinetotalsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESByIdV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{idt}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<RsSlloctrnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesAppendline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AppendLine2`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesAppendline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AppendLine2`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesAddserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesAddserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesGetstocklinepriceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesAddline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesAddline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesAppendserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesAppendserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesEqualizebalanceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesEqualizebalanceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesSetlinetotalsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesSetlinetotalsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESQCLISTV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_LINESQCLISTByIdV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/{idt}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<RsQccvalentryxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAppendline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AppendLine2`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAppendline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AppendLine2`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAddserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAddserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistGetstocklinepriceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAddline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAddline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAppendserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistAppendserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistEqualizebalanceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslLinesqclistEqualizebalanceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_LINES/{id3}/QCLIST/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_LINES/${id3}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesApplyaccdisttemplateV1
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesSetlinetotalsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesSetlinetotalsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESQCLISTV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESQCLISTByIdV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{idt}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<RsQccvalentryxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistAppendline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AppendLine2`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistAppendline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AppendLine2`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistAddserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistAddserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistGetstocklinepriceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistAddline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistAddline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistAppendserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistAppendserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistEqualizebalanceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistEqualizebalanceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistSetlinetotalsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistSetlinetotalsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESQCLISTVALLISTV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESQCLISTVALLISTByIdV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/{idt}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<RsQccvallistxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAppendline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AppendLine2`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAppendline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AppendLine2`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAddserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAddserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistGetstocklinepriceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAddline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAddline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAppendserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistAppendserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistEqualizebalanceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistEqualizebalanceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesqclistvallistSetlinetotalsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesqclistvallistSetlinetotalsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/{id2}/QCLIST/{id3}/VALLIST/SetLineTotals/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/${id2}/QCLIST/${id3}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSV1(
    id: number,
    id1: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSByIdV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{idt}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<RsEximwhfcdetxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAppendline2V1(
    id: number,
    id1: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAppendline2V1Post(
    id1: number,
    data: RsEximwhfclinexml,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAddserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /exportNationalizationSlips/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExportNationalizationSlips>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ExportNationalizationSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /exportNationalizationSlips/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExportNationalizationSlips>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ExportNationalizationSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSV1(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSByIdV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsEximwhfclinexml>} A promise resolving to the response.
   */
  async getTRANSACTIONSByIdV1(
    id: number,
    idt: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<RsEximwhfclinexml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1(
    id: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/AppendLine2`
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1Post(
    data: Partial<ExportNationalizationSlips>,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ExportNationalizationSlips>,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ExportNationalizationSlips>,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1(
    id: number,
    index: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1Post(
    index: number,
    data: Partial<ExportNationalizationSlips>,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAppendserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ExportNationalizationSlips>,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsEqualizebalanceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1(
    id: number,
    index: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsEqualizebalanceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1Post(
    index: number,
    data: Partial<ExportNationalizationSlips>,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ExportNationalizationSlips>,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsSetlinetotalsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsSetlinetotalsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ExportNationalizationSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ExportNationalizationSlips>,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_LINESV1(
    id: number,
    id1: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSSL_LINESByIdV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/{idt}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<RsSlloctrnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesAppendline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesAppendline2V1(
    id: number,
    id1: number,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesAppendline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsEximwhfclinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslLinesAppendline2V1Post(
    id1: number,
    data: RsEximwhfclinexml,
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesAddserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesAddserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesGetstocklinepriceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesGetstocklinepriceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesAddline2V1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesAddline2V1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/AddLine2/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesAppendserilotsV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesAppendserilotsV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslLinesEqualizebalanceV1
   * @description Corresponds to `GET /exportNationalizationSlips/{id}/TRANSACTIONS/{id1}/SL_LINES/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/exportNationalizationSlips/${id}/TRANSACTIONS/${id1}/SL_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslLinesEqualizebalanceV1Post
   * @description Corresponds to `POST /exportNationalizationSlips/TRANSACTIONS/{id1}/SL_LINES/EqualizeBalance/{_index}`
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
    options?: ExportNationalizationSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/exportNationalizationSlips/TRANSACTIONS/${id1}/SL_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * Search exportNationalizationSlips by AUXIL_CODE
   * @param auxilCode - The AUXIL_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByAuxilCode(
    auxilCode: string | number | boolean
  ): Promise<ApiResponse<ExportNationalizationSlips>> {
    return this.getAll({ q: `AUXIL_CODE like '${auxilCode}*'` });
  }

  /**
   * Search exportNationalizationSlips by DISTRIBUTION_TYPE
   * @param distributionType - The DISTRIBUTION_TYPE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByDistributionType(
    distributionType: string | number | boolean
  ): Promise<ApiResponse<ExportNationalizationSlips>> {
    return this.getAll({ q: `DISTRIBUTION_TYPE eq ${distributionType}` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `ExportNationalizationSlips` entities.
   * @returns {Promise<ExportNationalizationSlipsAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for ExportNationalizationSlips
   * const analytics = await client.exportNationalizationSlips.getAnalytics();
   */
  async getAnalytics(): Promise<ExportNationalizationSlipsAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `ExportNationalizationSlips` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of ExportNationalizationSlips
   * const count = await client.exportNationalizationSlips.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `ExportNationalizationSlips` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for ExportNationalizationSlips
   * const columns = await client.exportNationalizationSlips.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `ExportNationalizationSlips` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for ExportNationalizationSlips
   * await client.exportNationalizationSlips.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `ExportNationalizationSlips` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for ExportNationalizationSlips
   * await client.exportNationalizationSlips.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `ExportNationalizationSlips` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for ExportNationalizationSlips
   * const isTracking = await client.exportNationalizationSlips.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {ExportNationalizationSlipsSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: ExportNationalizationSlipsSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
