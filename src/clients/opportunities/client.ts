/**
 * @module Opportunities
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  Opportunities,
  OpportunitiesSearchCriteria,
  OpportunitiesAnalytics,
  KeyValueParameter,
  ResultData,
  RsOpphistoryxml,
  OpportunitiesQueryOptions,
} from './types';

/**
 * @class OpportunitiesClient
 * @extends BaseApiClient
 * @description
 * The `OpportunitiesClient` provides an interface for interacting with the `Opportunities` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Satış ve Dağıtım
 * @category Satış Teklif Yönetimi
 * @category Satış Fırsatları
 * @category Alan Özellikleri
 */
export class OpportunitiesClient extends BaseApiClient {
  private readonly endpoint = '/opportunities';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `Opportunities` entities.
   * @param {OpportunitiesQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<Opportunities>>} A promise that resolves to a paginated API response of `Opportunities` entities.
   *
   * @example
   * // Retrieves the first 10 Opportunities entities with specific fields
   * const opportunities = await client.opportunities.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: OpportunitiesQueryOptions): Promise<ApiResponse<Opportunities>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `Opportunities` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `Opportunities` entity.
   * @param {OpportunitiesQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<Opportunities>} A promise that resolves to the requested `Opportunities` entity.
   *
   * @example
   * // Retrieves an Opportunities with ID 123 with specific fields
   * const opportunities = await client.opportunities.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(id: number, options?: OpportunitiesQueryOptions): Promise<Opportunities> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `Opportunities` entity.
   * @param {Partial<Opportunities>} data - The data for the new `Opportunities` entity.
   * @returns {Promise<Opportunities>} A promise that resolves to the newly created `Opportunities` entity.
   *
   * @example
   * // Creates a new Opportunities
   * const newOpportunities = await client.opportunities.create({
   *   name: 'New Opportunities',
   *   // ... other properties
   * });
   */
  async create(data: Partial<Opportunities>): Promise<Opportunities> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `Opportunities` entity.
   * @param {number} id - The internal reference ID of the `Opportunities` entity to update.
   * @param {Partial<Opportunities>} data - The updated data for the `Opportunities` entity.
   * @returns {Promise<Opportunities>} A promise that resolves to the updated `Opportunities` entity.
   *
   * @example
   * // Updates the name of an Opportunities with ID 123
   * const updatedOpportunities = await client.opportunities.update(123, {
   *   name: 'Updated Opportunities Name',
   * });
   */
  async update(id: number, data: Partial<Opportunities>): Promise<Opportunities> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `Opportunities` entity.
   * @param {number} id - The internal reference ID of the `Opportunities` entity to update.
   * @param {Partial<Opportunities>} data - The partial data to update.
   * @returns {Promise<Opportunities>} A promise that resolves to the updated `Opportunities` entity.
   *
   * @example
   * // Partially updates an Opportunities with ID 123
   * const patchedOpportunities = await client.opportunities.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(id: number, data: Partial<Opportunities>): Promise<Opportunities> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `Opportunities` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `Opportunities` entity to delete.
   * @returns {Promise<Opportunities>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes an Opportunities with ID 123
   * await client.opportunities.delete(123);
   */
  async delete(id: number): Promise<Opportunities> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `Opportunities` entities based on a set of criteria.
   * @param {OpportunitiesSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<Opportunities>>} A promise that resolves to a paginated API response of matching `Opportunities` entities.
   *
   * @example
   * // Searches for Opportunities entities with a specific code
   * const results = await client.opportunities.search({ code: '123' });
   */
  async search(criteria: OpportunitiesSearchCriteria): Promise<ApiResponse<Opportunities>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<Opportunities>>} A promise that resolves to a paginated API response of matching `Opportunities` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.opportunities.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<Opportunities>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /opportunities/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /opportunities/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ImportFromXmlStr/${RootKey}/${XmlStr}`, data);
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /opportunities/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /opportunities/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /opportunities/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /opportunities/ApplyCondition`
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<Opportunities>): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /opportunities/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /opportunities/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `GET /opportunities/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(
    id: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method reCalculateV1Post
   * @description Corresponds to `POST /opportunities/ReCalculate`
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Post(data: Partial<Opportunities>): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ReCalculate`, data);
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /opportunities/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /opportunities/FillAccCodes`
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<Opportunities>): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /opportunities/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /opportunities/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /opportunities/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /opportunities/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/opportunities/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `GET /opportunities/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(
    id: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method equalizePayAmntV1Post
   * @description Corresponds to `POST /opportunities/EqualizePayAmnt`
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Post(data: Partial<Opportunities>): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/EqualizePayAmnt`, data);
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /opportunities/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /opportunities/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/opportunities/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`,
      data
    );
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /opportunities/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /opportunities/FillSMMACCCodes`
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(data: Partial<Opportunities>): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /opportunities/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /opportunities/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /opportunities/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /opportunities/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/AttachADespatchByFicheNo/${dispFicheNo}`, data);
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /opportunities/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /opportunities/DeleteCampaign`
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<Opportunities>): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /opportunities/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /opportunities/SetClientInfo`
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<Opportunities>): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /opportunities/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /opportunities/GetRelevantCampaigns`
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(data: Partial<Opportunities>): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /opportunities/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /opportunities/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /opportunities/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /opportunities/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /opportunities/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /opportunities/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /opportunities/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /opportunities/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/opportunities/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /opportunities/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Opportunities>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: OpportunitiesQueryOptions
  ): Promise<Opportunities> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/opportunities/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /opportunities/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Opportunities>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: OpportunitiesQueryOptions
  ): Promise<Opportunities> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/opportunities/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getHISTORYLISTV1
   * @description Corresponds to `GET /opportunities/{id}/HISTORYLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getHISTORYLISTV1(id: number, options?: OpportunitiesQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/HISTORYLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getHISTORYLISTByIdV1
   * @description Corresponds to `GET /opportunities/{id}/HISTORYLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsOpphistoryxml>} A promise resolving to the response.
   */
  async getHISTORYLISTByIdV1(
    id: number,
    idt: number,
    options?: OpportunitiesQueryOptions
  ): Promise<RsOpphistoryxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/HISTORYLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method historylistAppendline2V1
   * @description Corresponds to `GET /opportunities/{id}/HISTORYLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistAppendline2V1(
    id: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/HISTORYLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method historylistAppendline2V1Post
   * @description Corresponds to `POST /opportunities/HISTORYLIST/AppendLine2`
   * @param {Partial<Opportunities>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistAppendline2V1Post(
    data: Partial<Opportunities>,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/opportunities/HISTORYLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method historylistAddserilotsV1
   * @description Corresponds to `GET /opportunities/{id}/HISTORYLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/HISTORYLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method historylistAddserilotsV1Post
   * @description Corresponds to `POST /opportunities/HISTORYLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<Opportunities>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<Opportunities>,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/opportunities/HISTORYLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method historylistGetstocklinepriceV1
   * @description Corresponds to `GET /opportunities/{id}/HISTORYLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/HISTORYLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method historylistGetstocklinepriceV1Post
   * @description Corresponds to `POST /opportunities/HISTORYLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<Opportunities>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<Opportunities>,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/opportunities/HISTORYLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method historylistAddline2V1
   * @description Corresponds to `GET /opportunities/{id}/HISTORYLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistAddline2V1(
    id: number,
    index: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/HISTORYLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method historylistAddline2V1Post
   * @description Corresponds to `POST /opportunities/HISTORYLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<Opportunities>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistAddline2V1Post(
    index: number,
    data: Partial<Opportunities>,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/opportunities/HISTORYLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method historylistAppendserilotsV1
   * @description Corresponds to `GET /opportunities/{id}/HISTORYLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/HISTORYLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method historylistAppendserilotsV1Post
   * @description Corresponds to `POST /opportunities/HISTORYLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<Opportunities>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<Opportunities>,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/opportunities/HISTORYLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method historylistEqualizebalanceV1
   * @description Corresponds to `GET /opportunities/{id}/HISTORYLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistEqualizebalanceV1(
    id: number,
    index: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/HISTORYLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method historylistEqualizebalanceV1Post
   * @description Corresponds to `POST /opportunities/HISTORYLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<Opportunities>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistEqualizebalanceV1Post(
    index: number,
    data: Partial<Opportunities>,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/opportunities/HISTORYLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method historylistApplyaccdisttemplateV1
   * @description Corresponds to `GET /opportunities/{id}/HISTORYLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/HISTORYLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method historylistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /opportunities/HISTORYLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<Opportunities>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<Opportunities>,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/opportunities/HISTORYLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method historylistSetlinetotalsV1
   * @description Corresponds to `GET /opportunities/{id}/HISTORYLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/HISTORYLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method historylistSetlinetotalsV1Post
   * @description Corresponds to `POST /opportunities/HISTORYLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<Opportunities>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async historylistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<Opportunities>,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/opportunities/HISTORYLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /opportunities/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /opportunities/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ExportToXML/${RootKey}/${FileName}`, data);
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /opportunities/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /opportunities/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ImportFromXMLFile/${RootKey}/${FileName}`, data);
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /opportunities/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /opportunities/CreateCompositeLines`
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(data: Partial<Opportunities>): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/CreateCompositeLines`, data);
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /opportunities/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /opportunities/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /opportunities/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /opportunities/ApplyCampaign`
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<Opportunities>): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /opportunities/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /opportunities/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ApplyRePayPln/${lineNr}/${rePayPCode}`, data);
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /opportunities/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: OpportunitiesQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/opportunities/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /opportunities/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<Opportunities>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<Opportunities>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/opportunities/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * Search opportunities by DESCRIPTION
   * @param description - The DESCRIPTION to search for
   * @returns Promise resolving to matching entities
   */
  async searchByDescription(
    description: string | number | boolean
  ): Promise<ApiResponse<Opportunities>> {
    return this.getAll({ q: `DESCRIPTION like '${description}*'` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `Opportunities` entities.
   * @returns {Promise<OpportunitiesAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for Opportunities
   * const analytics = await client.opportunities.getAnalytics();
   */
  async getAnalytics(): Promise<OpportunitiesAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `Opportunities` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of Opportunities
   * const count = await client.opportunities.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Opportunities` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Opportunities
   * const columns = await client.opportunities.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Opportunities` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Opportunities
   * await client.opportunities.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Opportunities` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Opportunities
   * await client.opportunities.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Opportunities` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Opportunities
   * const isTracking = await client.opportunities.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {OpportunitiesSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: OpportunitiesSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
