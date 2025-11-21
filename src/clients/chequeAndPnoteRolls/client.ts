/**
 * @module ChequeAndPnoteRolls
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  ChequeAndPnoteRolls,
  ChequeAndPnoteRollsSearchCriteria,
  ChequeAndPnoteRollsAnalytics,
  KeyValueParameter,
  RsPaylstxml,
  ResultData,
  ExtendedFieldDefinitions,
  RsBanktransxml,
  RsPreaccdistlnxml,
  RsDiscpaytrxml,
  RsArptransxml,
  RsChqpntransxml,
  RsChqpnstatxml,
  ChequeAndPnoteRollsQueryOptions,
} from './types';

/**
 * @class ChequeAndPnoteRollsClient
 * @extends BaseApiClient
 * @description
 * The `ChequeAndPnoteRollsClient` provides an interface for interacting with the `ChequeAndPnoteRolls` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Finans
 * @category Hareketler
 * @category Çek-Senet Bordroları
 * @category Alan Özellikleri
 */
export class ChequeAndPnoteRollsClient extends BaseApiClient {
  private readonly endpoint = '/chequeAndPnoteRolls';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `ChequeAndPnoteRolls` entities.
   * @param {ChequeAndPnoteRollsQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<ChequeAndPnoteRolls>>} A promise that resolves to a paginated API response of `ChequeAndPnoteRolls` entities.
   *
   * @example
   * // Retrieves the first 10 ChequeAndPnoteRolls entities with specific fields
   * const chequeAndPnoteRolls = await client.chequeAndPnoteRolls.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ApiResponse<ChequeAndPnoteRolls>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `ChequeAndPnoteRolls` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ChequeAndPnoteRolls` entity.
   * @param {ChequeAndPnoteRollsQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<ChequeAndPnoteRolls>} A promise that resolves to the requested `ChequeAndPnoteRolls` entity.
   *
   * @example
   * // Retrieves a ChequeAndPnoteRolls with ID 123 with specific fields
   * const chequeAndPnoteRolls = await client.chequeAndPnoteRolls.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ChequeAndPnoteRolls> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `ChequeAndPnoteRolls` entity.
   * @param {Partial<ChequeAndPnoteRolls>} data - The data for the new `ChequeAndPnoteRolls` entity.
   * @returns {Promise<ChequeAndPnoteRolls>} A promise that resolves to the newly created `ChequeAndPnoteRolls` entity.
   *
   * @example
   * // Creates a new ChequeAndPnoteRolls
   * const newChequeAndPnoteRolls = await client.chequeAndPnoteRolls.create({
   *   name: 'New ChequeAndPnoteRolls',
   *   // ... other properties
   * });
   */
  async create(data: Partial<ChequeAndPnoteRolls>): Promise<ChequeAndPnoteRolls> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `ChequeAndPnoteRolls` entity.
   * @param {number} id - The internal reference ID of the `ChequeAndPnoteRolls` entity to update.
   * @param {Partial<ChequeAndPnoteRolls>} data - The updated data for the `ChequeAndPnoteRolls` entity.
   * @returns {Promise<ChequeAndPnoteRolls>} A promise that resolves to the updated `ChequeAndPnoteRolls` entity.
   *
   * @example
   * // Updates the name of a ChequeAndPnoteRolls with ID 123
   * const updatedChequeAndPnoteRolls = await client.chequeAndPnoteRolls.update(123, {
   *   name: 'Updated ChequeAndPnoteRolls Name',
   * });
   */
  async update(id: number, data: Partial<ChequeAndPnoteRolls>): Promise<ChequeAndPnoteRolls> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `ChequeAndPnoteRolls` entity.
   * @param {number} id - The internal reference ID of the `ChequeAndPnoteRolls` entity to update.
   * @param {Partial<ChequeAndPnoteRolls>} data - The partial data to update.
   * @returns {Promise<ChequeAndPnoteRolls>} A promise that resolves to the updated `ChequeAndPnoteRolls` entity.
   *
   * @example
   * // Partially updates a ChequeAndPnoteRolls with ID 123
   * const patchedChequeAndPnoteRolls = await client.chequeAndPnoteRolls.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(id: number, data: Partial<ChequeAndPnoteRolls>): Promise<ChequeAndPnoteRolls> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `ChequeAndPnoteRolls` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ChequeAndPnoteRolls` entity to delete.
   * @returns {Promise<ChequeAndPnoteRolls>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes a ChequeAndPnoteRolls with ID 123
   * await client.chequeAndPnoteRolls.delete(123);
   */
  async delete(id: number): Promise<ChequeAndPnoteRolls> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `ChequeAndPnoteRolls` entities based on a set of criteria.
   * @param {ChequeAndPnoteRollsSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<ChequeAndPnoteRolls>>} A promise that resolves to a paginated API response of matching `ChequeAndPnoteRolls` entities.
   *
   * @example
   * // Searches for ChequeAndPnoteRolls entities with a specific code
   * const results = await client.chequeAndPnoteRolls.search({ code: '123' });
   */
  async search(
    criteria: ChequeAndPnoteRollsSearchCriteria
  ): Promise<ApiResponse<ChequeAndPnoteRolls>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<ChequeAndPnoteRolls>>} A promise that resolves to a paginated API response of matching `ChequeAndPnoteRolls` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.chequeAndPnoteRolls.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<ChequeAndPnoteRolls>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ImportFromXmlStr/${RootKey}/${XmlStr}`, data);
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ApplyCondition`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<ChequeAndPnoteRolls>): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method reCalculateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ReCalculate`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Post(data: Partial<ChequeAndPnoteRolls>): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ReCalculate`, data);
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/FillAccCodes`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<ChequeAndPnoteRolls>): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/chequeAndPnoteRolls/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method equalizePayAmntV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/EqualizePayAmnt`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Post(data: Partial<ChequeAndPnoteRolls>): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/EqualizePayAmnt`, data);
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/chequeAndPnoteRolls/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`,
      data
    );
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/FillSMMACCCodes`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(data: Partial<ChequeAndPnoteRolls>): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/chequeAndPnoteRolls/AttachADespatchByFicheNo/${dispFicheNo}`,
      data
    );
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/DeleteCampaign`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<ChequeAndPnoteRolls>): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/SetClientInfo`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<ChequeAndPnoteRolls>): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/GetRelevantCampaigns`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistGetstocklinepriceV1
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/{id1}/DISCTRLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistGetstocklinepriceV1(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/${id1}/DISCTRLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistGetstocklinepriceV1Get
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistGetstocklinepriceV1Get(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/AddLine2/{_index}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/{id1}/DISCTRLIST/AddLine2/{_index}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/${id1}/DISCTRLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/{id1}/DISCTRLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/${id1}/DISCTRLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/EqualizeBalance/{_index}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/{id1}/DISCTRLIST/EqualizeBalance/{_index}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/${id1}/DISCTRLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/{id1}/DISCTRLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/${id1}/DISCTRLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/SetLineTotals/{_Indx}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/{id1}/DISCTRLIST/SetLineTotals/{_Indx}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/${id1}/DISCTRLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDEFNFLDSLISTV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/DEFNFLDSLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDEFNFLDSLISTV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/DEFNFLDSLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDEFNFLDSLISTByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/DEFNFLDSLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExtendedFieldDefinitions>} A promise resolving to the response.
   */
  async getDEFNFLDSLISTByIdV1(
    id: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ExtendedFieldDefinitions> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/DEFNFLDSLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendline2V1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/DEFNFLDSLIST/AppendLine2`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendline2V1Post(
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddline2V1(
    id: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddline2V1Post(
    index: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistEqualizebalanceV1(
    id: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistEqualizebalanceV1Post(
    index: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ExportToXML/${RootKey}/${FileName}`, data);
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ImportFromXMLFile/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/CreateCompositeLines`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/CreateCompositeLines`, data);
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ApplyCampaign`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<ChequeAndPnoteRolls>): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ApplyRePayPln/${lineNr}/${rePayPCode}`, data);
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<ChequeAndPnoteRolls>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/chequeAndPnoteRolls/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * @method bankTransactionsdefnfldslistApplyaccdisttemplateV1
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsdefnfldslistApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsdefnfldslistSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsdefnfldslistSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getBANK_TRANSACTIONSPREACCLINESV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PREACCLINES`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getBANK_TRANSACTIONSPREACCLINESV1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PREACCLINES${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getBANK_TRANSACTIONSPREACCLINESByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PREACCLINES/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsPreaccdistlnxml>} A promise resolving to the response.
   */
  async getBANK_TRANSACTIONSPREACCLINESByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsPreaccdistlnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PREACCLINES/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspreacclinesAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PREACCLINES/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesAppendline2V1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PREACCLINES/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspreacclinesAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PREACCLINES/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesAppendline2V1Post(
    id1: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PREACCLINES/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspreacclinesAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PREACCLINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async bankTransactionspreacclinesAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PREACCLINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspreacclinesAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PREACCLINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PREACCLINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspreacclinesGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PREACCLINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PREACCLINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspreacclinesGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PREACCLINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PREACCLINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspreacclinesAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PREACCLINES/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PREACCLINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspreacclinesAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PREACCLINES/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesAddline2V1Post(
    id1: number,
    index: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PREACCLINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspreacclinesAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PREACCLINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async bankTransactionspreacclinesAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PREACCLINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspreacclinesAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PREACCLINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PREACCLINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspreacclinesEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PREACCLINES/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PREACCLINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspreacclinesEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PREACCLINES/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PREACCLINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspreacclinesApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PREACCLINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PREACCLINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspreacclinesApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PREACCLINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PREACCLINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspreacclinesSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PREACCLINES/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PREACCLINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspreacclinesSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PREACCLINES/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspreacclinesSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PREACCLINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getPAYMENT_LISTV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getPAYMENT_LISTV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getPAYMENT_LISTByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsPaylstxml>} A promise resolving to the response.
   */
  async getPAYMENT_LISTByIdV1(
    id: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsPaylstxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAppendline2V1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/AppendLine2`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAppendline2V1Post(
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAddline2V1(
    id: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAddline2V1Post(
    index: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListEqualizebalanceV1(
    id: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListEqualizebalanceV1Post(
    index: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getPAYMENT_LISTDISCTRLISTV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/{id1}/DISCTRLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getPAYMENT_LISTDISCTRLISTV1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/${id1}/DISCTRLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getPAYMENT_LISTDISCTRLISTByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/{idt}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsDiscpaytrxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistAppendline2V1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/{id1}/DISCTRLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async paymentListdisctrlistAppendline2V1Post(
    id1: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/${id1}/DISCTRLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method paymentListdisctrlistAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/PAYMENT_LIST/{id1}/DISCTRLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/PAYMENT_LIST/${id1}/DISCTRLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method paymentListdisctrlistAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/PAYMENT_LIST/{id1}/DISCTRLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/PAYMENT_LIST/${id1}/DISCTRLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListGetstocklinepriceV1
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListGetstocklinepriceV1(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListGetstocklinepriceV1Get
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListGetstocklinepriceV1Get(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListAddline2V1Post(
    id1: number,
    index: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async bankTransactionspaymentListAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getBANK_TRANSACTIONSPAYMENT_LISTDISCTRLISTV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getBANK_TRANSACTIONSPAYMENT_LISTDISCTRLISTV1(
    id: number,
    id1: number,
    id2: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getBANK_TRANSACTIONSPAYMENT_LISTDISCTRLISTByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsDiscpaytrxml>} A promise resolving to the response.
   */
  async getBANK_TRANSACTIONSPAYMENT_LISTDISCTRLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsDiscpaytrxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistAppendline2V1Post(
    id1: number,
    id2: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async bankTransactionspaymentListdisctrlistAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistAddserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistAddline2V1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async bankTransactionspaymentListdisctrlistAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistAppendserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListdisctrlistSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListdisctrlistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    Indx: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getBANK_TRANSACTIONSDEFNFLDSLISTV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getBANK_TRANSACTIONSDEFNFLDSLISTV1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getBANK_TRANSACTIONSDEFNFLDSLISTByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExtendedFieldDefinitions>} A promise resolving to the response.
   */
  async getBANK_TRANSACTIONSDEFNFLDSLISTByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ExtendedFieldDefinitions> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsdefnfldslistAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistAppendline2V1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsdefnfldslistAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistAppendline2V1Post(
    id1: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsdefnfldslistAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async bankTransactionsdefnfldslistAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsdefnfldslistAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsdefnfldslistGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsdefnfldslistGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsdefnfldslistAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsdefnfldslistAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistAddline2V1Post(
    id1: number,
    index: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsdefnfldslistAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async bankTransactionsdefnfldslistAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsdefnfldslistAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsdefnfldslistEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsdefnfldslistEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsdefnfldslistEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsdefnfldslistApplyaccdisttemplateV1
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsdefnfldslistApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsdefnfldslistSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsdefnfldslistSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getARP_TRANSACTIONSPREACCLINESV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PREACCLINES`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getARP_TRANSACTIONSPREACCLINESV1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PREACCLINES${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getARP_TRANSACTIONSPREACCLINESByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PREACCLINES/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsPreaccdistlnxml>} A promise resolving to the response.
   */
  async getARP_TRANSACTIONSPREACCLINESByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsPreaccdistlnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PREACCLINES/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspreacclinesAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PREACCLINES/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesAppendline2V1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PREACCLINES/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspreacclinesAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PREACCLINES/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesAppendline2V1Post(
    id1: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PREACCLINES/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspreacclinesAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PREACCLINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async arpTransactionspreacclinesAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PREACCLINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspreacclinesAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PREACCLINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PREACCLINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspreacclinesGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PREACCLINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PREACCLINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspreacclinesGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PREACCLINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PREACCLINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspreacclinesAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PREACCLINES/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PREACCLINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspreacclinesAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PREACCLINES/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesAddline2V1Post(
    id1: number,
    index: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PREACCLINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspreacclinesAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PREACCLINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async arpTransactionspreacclinesAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PREACCLINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspreacclinesAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PREACCLINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PREACCLINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspreacclinesEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PREACCLINES/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PREACCLINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspreacclinesEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PREACCLINES/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PREACCLINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspreacclinesApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PREACCLINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PREACCLINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspreacclinesApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PREACCLINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PREACCLINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspreacclinesSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PREACCLINES/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PREACCLINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspreacclinesSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PREACCLINES/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspreacclinesSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PREACCLINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getBANK_TRANSACTIONSV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getBANK_TRANSACTIONSV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getBANK_TRANSACTIONSByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsBanktransxml>} A promise resolving to the response.
   */
  async getBANK_TRANSACTIONSByIdV1(
    id: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsBanktransxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsAppendline2V1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/AppendLine2`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsAppendline2V1Post(
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsAddline2V1(
    id: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsAddline2V1Post(
    index: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsEqualizebalanceV1(
    id: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsEqualizebalanceV1Post(
    index: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionsSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionsSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionsSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getBANK_TRANSACTIONSPAYMENT_LISTV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getBANK_TRANSACTIONSPAYMENT_LISTV1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getBANK_TRANSACTIONSPAYMENT_LISTByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsPaylstxml>} A promise resolving to the response.
   */
  async getBANK_TRANSACTIONSPAYMENT_LISTByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsPaylstxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListAppendline2V1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListAppendline2V1Post(
    id1: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method bankTransactionspaymentListAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async bankTransactionspaymentListAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method bankTransactionspaymentListAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/BANK_TRANSACTIONS/{id1}/PAYMENT_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsBanktransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async bankTransactionspaymentListAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsBanktransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/BANK_TRANSACTIONS/${id1}/PAYMENT_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListGetstocklinepriceV1
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListGetstocklinepriceV1(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListGetstocklinepriceV1Get
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListGetstocklinepriceV1Get(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListAddline2V1Post(
    id1: number,
    index: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async arpTransactionspaymentListAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getARP_TRANSACTIONSPAYMENT_LISTDISCTRLISTV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getARP_TRANSACTIONSPAYMENT_LISTDISCTRLISTV1(
    id: number,
    id1: number,
    id2: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getARP_TRANSACTIONSPAYMENT_LISTDISCTRLISTByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsDiscpaytrxml>} A promise resolving to the response.
   */
  async getARP_TRANSACTIONSPAYMENT_LISTDISCTRLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsDiscpaytrxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistAppendline2V1Post(
    id1: number,
    id2: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async arpTransactionspaymentListdisctrlistAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistAddserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistAddline2V1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async arpTransactionspaymentListdisctrlistAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistAppendserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListdisctrlistSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{id2}/DISCTRLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {RsPaylstxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListdisctrlistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    Indx: number,
    data: RsPaylstxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${id2}/DISCTRLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getARP_TRANSACTIONSDEFNFLDSLISTV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getARP_TRANSACTIONSDEFNFLDSLISTV1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getARP_TRANSACTIONSDEFNFLDSLISTByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExtendedFieldDefinitions>} A promise resolving to the response.
   */
  async getARP_TRANSACTIONSDEFNFLDSLISTByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ExtendedFieldDefinitions> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsdefnfldslistAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistAppendline2V1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsdefnfldslistAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistAppendline2V1Post(
    id1: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsdefnfldslistAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async arpTransactionsdefnfldslistAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsdefnfldslistAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsdefnfldslistGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsdefnfldslistGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsdefnfldslistAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsdefnfldslistAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistAddline2V1Post(
    id1: number,
    index: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsdefnfldslistAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async arpTransactionsdefnfldslistAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsdefnfldslistAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsdefnfldslistEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsdefnfldslistEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsdefnfldslistEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsstatusListApplyaccdisttemplateV1
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/STATUS_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/STATUS_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsstatusListApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/STATUS_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/STATUS_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsstatusListSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/STATUS_LIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/STATUS_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsstatusListSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/STATUS_LIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/STATUS_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDEFNFLDSLISTV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDEFNFLDSLISTV1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDEFNFLDSLISTByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/{idt}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ExtendedFieldDefinitions> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAppendline2V1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAppendline2V1Post(
    id1: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsChqpntransxml} data - The request body.
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
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddLine2/{_index}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAddline2V1Post(
    id1: number,
    index: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsChqpntransxml} data - The request body.
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
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/EqualizeBalance/{_index}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getARP_TRANSACTIONSV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getARP_TRANSACTIONSV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getARP_TRANSACTIONSByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsArptransxml>} A promise resolving to the response.
   */
  async getARP_TRANSACTIONSByIdV1(
    id: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsArptransxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsAppendline2V1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/AppendLine2`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsAppendline2V1Post(
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsAddline2V1(
    id: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsAddline2V1Post(
    index: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsEqualizebalanceV1(
    id: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsEqualizebalanceV1Post(
    index: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionsSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionsSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionsSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getARP_TRANSACTIONSPAYMENT_LISTV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getARP_TRANSACTIONSPAYMENT_LISTV1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getARP_TRANSACTIONSPAYMENT_LISTByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsPaylstxml>} A promise resolving to the response.
   */
  async getARP_TRANSACTIONSPAYMENT_LISTByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsPaylstxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListAppendline2V1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListAppendline2V1Post(
    id1: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method arpTransactionspaymentListAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async arpTransactionspaymentListAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method arpTransactionspaymentListAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/ARP_TRANSACTIONS/{id1}/PAYMENT_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsArptransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async arpTransactionspaymentListAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsArptransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/ARP_TRANSACTIONS/${id1}/PAYMENT_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /chequeAndPnoteRolls/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ChequeAndPnoteRolls>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ChequeAndPnoteRolls> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /chequeAndPnoteRolls/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ChequeAndPnoteRolls>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ChequeAndPnoteRolls> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSV1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsChqpntransxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSByIdV1(
    id: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsChqpntransxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1(
    id: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/AppendLine2`
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1Post(
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1(
    id: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1Post(
    index: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1(
    id: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1Post(
    index: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsSetlinetotalsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsSetlinetotalsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ChequeAndPnoteRolls>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ChequeAndPnoteRolls>,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSSTATUS_LISTV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/STATUS_LIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSSTATUS_LISTV1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/STATUS_LIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSSTATUS_LISTByIdV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/STATUS_LIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsChqpnstatxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSSTATUS_LISTByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<RsChqpnstatxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/STATUS_LIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsstatusListAppendline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/STATUS_LIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListAppendline2V1(
    id: number,
    id1: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/STATUS_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsstatusListAppendline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/STATUS_LIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListAppendline2V1Post(
    id1: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/STATUS_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsstatusListAddserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/STATUS_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsstatusListAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/STATUS_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsstatusListAddserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/STATUS_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/STATUS_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsstatusListGetstocklinepriceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/STATUS_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/STATUS_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsstatusListGetstocklinepriceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/STATUS_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/STATUS_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsstatusListAddline2V1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/STATUS_LIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/STATUS_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsstatusListAddline2V1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/STATUS_LIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListAddline2V1Post(
    id1: number,
    index: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/STATUS_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsstatusListAppendserilotsV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/STATUS_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsstatusListAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/STATUS_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsstatusListAppendserilotsV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/STATUS_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/STATUS_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsstatusListEqualizebalanceV1
   * @description Corresponds to `GET /chequeAndPnoteRolls/{id}/TRANSACTIONS/{id1}/STATUS_LIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/chequeAndPnoteRolls/${id}/TRANSACTIONS/${id1}/STATUS_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsstatusListEqualizebalanceV1Post
   * @description Corresponds to `POST /chequeAndPnoteRolls/TRANSACTIONS/{id1}/STATUS_LIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsChqpntransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsstatusListEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsChqpntransxml,
    options?: ChequeAndPnoteRollsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/chequeAndPnoteRolls/TRANSACTIONS/${id1}/STATUS_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * Search chequeAndPnoteRolls by MASTER_CODE
   * @param masterCode - The MASTER_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByMasterCode(
    masterCode: string | number | boolean
  ): Promise<ApiResponse<ChequeAndPnoteRolls>> {
    return this.getAll({ q: `MASTER_CODE like '${masterCode}*'` });
  }

  /**
   * Search chequeAndPnoteRolls by NUMBER
   * @param number - The NUMBER to search for
   * @returns Promise resolving to matching entities
   */
  async searchBynumber(
    number: string | number | boolean
  ): Promise<ApiResponse<ChequeAndPnoteRolls>> {
    return this.getAll({ q: `NUMBER eq ${number}` });
  }

  /**
   * Search chequeAndPnoteRolls by TYPE
   * @param type - The TYPE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByType(type: string | number | boolean): Promise<ApiResponse<ChequeAndPnoteRolls>> {
    return this.getAll({ q: `TYPE eq ${type}` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `ChequeAndPnoteRolls` entities.
   * @returns {Promise<ChequeAndPnoteRollsAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for ChequeAndPnoteRolls
   * const analytics = await client.chequeAndPnoteRolls.getAnalytics();
   */
  async getAnalytics(): Promise<ChequeAndPnoteRollsAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `ChequeAndPnoteRolls` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of ChequeAndPnoteRolls
   * const count = await client.chequeAndPnoteRolls.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `ChequeAndPnoteRolls` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for ChequeAndPnoteRolls
   * const columns = await client.chequeAndPnoteRolls.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `ChequeAndPnoteRolls` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for ChequeAndPnoteRolls
   * await client.chequeAndPnoteRolls.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `ChequeAndPnoteRolls` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for ChequeAndPnoteRolls
   * await client.chequeAndPnoteRolls.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `ChequeAndPnoteRolls` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for ChequeAndPnoteRolls
   * const isTracking = await client.chequeAndPnoteRolls.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {ChequeAndPnoteRollsSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: ChequeAndPnoteRollsSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
