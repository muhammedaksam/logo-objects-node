/**
 * @module InwardProcessingPermits
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  InwardProcessingPermits,
  InwardProcessingPermitsSearchCriteria,
  InwardProcessingPermitsAnalytics,
  KeyValueParameter,
  RsDiiblinexml,
  ResultData,
  RsDiibbomlinexml,
  InwardProcessingPermitsQueryOptions,
} from './types';

/**
 * @class InwardProcessingPermitsClient
 * @extends BaseApiClient
 * @description
 * The `InwardProcessingPermitsClient` provides an interface for interacting with the `InwardProcessingPermits` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category İhracat
 * @category Hareketler
 * @category İhracat-Dahilde İşleme İzin Belgesi
 * @category Alan Özellikleri
 */
export class InwardProcessingPermitsClient extends BaseApiClient {
  private readonly endpoint = '/inwardProcessingPermits';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `InwardProcessingPermits` entities.
   * @param {InwardProcessingPermitsQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<InwardProcessingPermits>>} A promise that resolves to a paginated API response of `InwardProcessingPermits` entities.
   *
   * @example
   * // Retrieves the first 10 InwardProcessingPermits entities with specific fields
   * const inwardProcessingPermits = await client.inwardProcessingPermits.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<ApiResponse<InwardProcessingPermits>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `InwardProcessingPermits` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `InwardProcessingPermits` entity.
   * @param {InwardProcessingPermitsQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<InwardProcessingPermits>} A promise that resolves to the requested `InwardProcessingPermits` entity.
   *
   * @example
   * // Retrieves an InwardProcessingPermits with ID 123 with specific fields
   * const inwardProcessingPermits = await client.inwardProcessingPermits.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<InwardProcessingPermits> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `InwardProcessingPermits` entity.
   * @param {Partial<InwardProcessingPermits>} data - The data for the new `InwardProcessingPermits` entity.
   * @returns {Promise<InwardProcessingPermits>} A promise that resolves to the newly created `InwardProcessingPermits` entity.
   *
   * @example
   * // Creates a new InwardProcessingPermits
   * const newInwardProcessingPermits = await client.inwardProcessingPermits.create({
   *   name: 'New InwardProcessingPermits',
   *   // ... other properties
   * });
   */
  async create(data: Partial<InwardProcessingPermits>): Promise<InwardProcessingPermits> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `InwardProcessingPermits` entity.
   * @param {number} id - The internal reference ID of the `InwardProcessingPermits` entity to update.
   * @param {Partial<InwardProcessingPermits>} data - The updated data for the `InwardProcessingPermits` entity.
   * @returns {Promise<InwardProcessingPermits>} A promise that resolves to the updated `InwardProcessingPermits` entity.
   *
   * @example
   * // Updates the name of an InwardProcessingPermits with ID 123
   * const updatedInwardProcessingPermits = await client.inwardProcessingPermits.update(123, {
   *   name: 'Updated InwardProcessingPermits Name',
   * });
   */
  async update(
    id: number,
    data: Partial<InwardProcessingPermits>
  ): Promise<InwardProcessingPermits> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `InwardProcessingPermits` entity.
   * @param {number} id - The internal reference ID of the `InwardProcessingPermits` entity to update.
   * @param {Partial<InwardProcessingPermits>} data - The partial data to update.
   * @returns {Promise<InwardProcessingPermits>} A promise that resolves to the updated `InwardProcessingPermits` entity.
   *
   * @example
   * // Partially updates an InwardProcessingPermits with ID 123
   * const patchedInwardProcessingPermits = await client.inwardProcessingPermits.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(
    id: number,
    data: Partial<InwardProcessingPermits>
  ): Promise<InwardProcessingPermits> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `InwardProcessingPermits` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `InwardProcessingPermits` entity to delete.
   * @returns {Promise<InwardProcessingPermits>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes an InwardProcessingPermits with ID 123
   * await client.inwardProcessingPermits.delete(123);
   */
  async delete(id: number): Promise<InwardProcessingPermits> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `InwardProcessingPermits` entities based on a set of criteria.
   * @param {InwardProcessingPermitsSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<InwardProcessingPermits>>} A promise that resolves to a paginated API response of matching `InwardProcessingPermits` entities.
   *
   * @example
   * // Searches for InwardProcessingPermits entities with a specific code
   * const results = await client.inwardProcessingPermits.search({ code: '123' });
   */
  async search(
    criteria: InwardProcessingPermitsSearchCriteria
  ): Promise<ApiResponse<InwardProcessingPermits>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<InwardProcessingPermits>>} A promise that resolves to a paginated API response of matching `InwardProcessingPermits` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.inwardProcessingPermits.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<InwardProcessingPermits>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/inwardProcessingPermits/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ApplyCampaign`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<InwardProcessingPermits>): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/inwardProcessingPermits/ApplyRePayPln/${lineNr}/${rePayPCode}`,
      data
    );
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/inwardProcessingPermits/ImportFromXmlStr/${RootKey}/${XmlStr}`,
      data
    );
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ApplyCondition`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<InwardProcessingPermits>): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method reCalculateV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ReCalculate`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Post(data: Partial<InwardProcessingPermits>): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/ReCalculate`, data);
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/FillAccCodes`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<InwardProcessingPermits>): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/inwardProcessingPermits/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method equalizePayAmntV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EqualizePayAmnt`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Post(
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/EqualizePayAmnt`, data);
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/inwardProcessingPermits/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`,
      data
    );
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/FillSMMACCCodes`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/inwardProcessingPermits/AttachADespatchByFicheNo/${dispFicheNo}`,
      data
    );
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/DeleteCampaign`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<InwardProcessingPermits>): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/SetClientInfo`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<InwardProcessingPermits>): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/GetRelevantCampaigns`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method importLinesbomLinesApplyaccdisttemplateV1
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/{id1}/BOM_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/${id1}/BOM_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesbomLinesApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/{id1}/BOM_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/${id1}/BOM_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesbomLinesSetlinetotalsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/{id1}/BOM_LINES/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/${id1}/BOM_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesbomLinesSetlinetotalsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/{id1}/BOM_LINES/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/${id1}/BOM_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getEXPORT_LINESV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getEXPORT_LINESV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getEXPORT_LINESByIdV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsDiiblinexml>} A promise resolving to the response.
   */
  async getEXPORT_LINESByIdV1(
    id: number,
    idt: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<RsDiiblinexml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesAppendline2V1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesAppendline2V1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesAppendline2V1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/AppendLine2`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesAppendline2V1Post(
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesAddserilotsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesAddserilotsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesGetstocklinepriceV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesGetstocklinepriceV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesAddline2V1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesAddline2V1(
    id: number,
    index: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesAddline2V1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesAddline2V1Post(
    index: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesAppendserilotsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesAppendserilotsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesEqualizebalanceV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesEqualizebalanceV1(
    id: number,
    index: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesEqualizebalanceV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesEqualizebalanceV1Post(
    index: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesApplyaccdisttemplateV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesSetlinetotalsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesSetlinetotalsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesSetlinetotalsV1Post(
    Indx: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getEXPORT_LINESBOM_LINESV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/{id1}/BOM_LINES`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getEXPORT_LINESBOM_LINESV1(
    id: number,
    id1: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/${id1}/BOM_LINES${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getEXPORT_LINESBOM_LINESByIdV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/{id1}/BOM_LINES/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsDiibbomlinexml>} A promise resolving to the response.
   */
  async getEXPORT_LINESBOM_LINESByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<RsDiibbomlinexml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/${id1}/BOM_LINES/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesbomLinesAppendline2V1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/{id1}/BOM_LINES/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesAppendline2V1(
    id: number,
    id1: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/${id1}/BOM_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesbomLinesAppendline2V1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/{id1}/BOM_LINES/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesAppendline2V1Post(
    id1: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/${id1}/BOM_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesbomLinesAddserilotsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/{id1}/BOM_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async exportLinesbomLinesAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/${id1}/BOM_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesbomLinesAddserilotsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/{id1}/BOM_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/${id1}/BOM_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesbomLinesGetstocklinepriceV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/{id1}/BOM_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/${id1}/BOM_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesbomLinesGetstocklinepriceV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/{id1}/BOM_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/${id1}/BOM_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesbomLinesAddline2V1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/{id1}/BOM_LINES/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/${id1}/BOM_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesbomLinesAddline2V1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/{id1}/BOM_LINES/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesAddline2V1Post(
    id1: number,
    index: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/${id1}/BOM_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesbomLinesAppendserilotsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/{id1}/BOM_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async exportLinesbomLinesAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/${id1}/BOM_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesbomLinesAppendserilotsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/{id1}/BOM_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/${id1}/BOM_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesbomLinesEqualizebalanceV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/{id1}/BOM_LINES/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/${id1}/BOM_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesbomLinesEqualizebalanceV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/{id1}/BOM_LINES/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/${id1}/BOM_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesbomLinesApplyaccdisttemplateV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/{id1}/BOM_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/${id1}/BOM_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesbomLinesApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/{id1}/BOM_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/${id1}/BOM_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportLinesbomLinesSetlinetotalsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/EXPORT_LINES/{id1}/BOM_LINES/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/EXPORT_LINES/${id1}/BOM_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportLinesbomLinesSetlinetotalsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/EXPORT_LINES/{id1}/BOM_LINES/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportLinesbomLinesSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/EXPORT_LINES/${id1}/BOM_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/inwardProcessingPermits/ExportToXML/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/inwardProcessingPermits/ImportFromXMLFile/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/CreateCompositeLines`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(
    data: Partial<InwardProcessingPermits>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/inwardProcessingPermits/CreateCompositeLines`, data);
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /inwardProcessingPermits/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<InwardProcessingPermits>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<InwardProcessingPermits> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /inwardProcessingPermits/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<InwardProcessingPermits>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<InwardProcessingPermits> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getIMPORT_LINESV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getIMPORT_LINESV1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getIMPORT_LINESByIdV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsDiiblinexml>} A promise resolving to the response.
   */
  async getIMPORT_LINESByIdV1(
    id: number,
    idt: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<RsDiiblinexml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesAppendline2V1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesAppendline2V1(
    id: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesAppendline2V1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/AppendLine2`
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesAppendline2V1Post(
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesAddserilotsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesAddserilotsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesGetstocklinepriceV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesGetstocklinepriceV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesAddline2V1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesAddline2V1(
    id: number,
    index: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesAddline2V1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesAddline2V1Post(
    index: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesAppendserilotsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesAppendserilotsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesEqualizebalanceV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesEqualizebalanceV1(
    id: number,
    index: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesEqualizebalanceV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesEqualizebalanceV1Post(
    index: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesApplyaccdisttemplateV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesSetlinetotalsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesSetlinetotalsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<InwardProcessingPermits>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesSetlinetotalsV1Post(
    Indx: number,
    data: Partial<InwardProcessingPermits>,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getIMPORT_LINESBOM_LINESV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/{id1}/BOM_LINES`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getIMPORT_LINESBOM_LINESV1(
    id: number,
    id1: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/${id1}/BOM_LINES${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getIMPORT_LINESBOM_LINESByIdV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/{id1}/BOM_LINES/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsDiibbomlinexml>} A promise resolving to the response.
   */
  async getIMPORT_LINESBOM_LINESByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<RsDiibbomlinexml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/${id1}/BOM_LINES/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesbomLinesAppendline2V1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/{id1}/BOM_LINES/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesAppendline2V1(
    id: number,
    id1: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/${id1}/BOM_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesbomLinesAppendline2V1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/{id1}/BOM_LINES/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesAppendline2V1Post(
    id1: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/${id1}/BOM_LINES/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesbomLinesAddserilotsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/{id1}/BOM_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async importLinesbomLinesAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/${id1}/BOM_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesbomLinesAddserilotsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/{id1}/BOM_LINES/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/${id1}/BOM_LINES/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesbomLinesGetstocklinepriceV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/{id1}/BOM_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/${id1}/BOM_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesbomLinesGetstocklinepriceV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/{id1}/BOM_LINES/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/${id1}/BOM_LINES/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesbomLinesAddline2V1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/{id1}/BOM_LINES/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/${id1}/BOM_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesbomLinesAddline2V1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/{id1}/BOM_LINES/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesAddline2V1Post(
    id1: number,
    index: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/${id1}/BOM_LINES/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesbomLinesAppendserilotsV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/{id1}/BOM_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async importLinesbomLinesAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/${id1}/BOM_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesbomLinesAppendserilotsV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/{id1}/BOM_LINES/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/${id1}/BOM_LINES/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method importLinesbomLinesEqualizebalanceV1
   * @description Corresponds to `GET /inwardProcessingPermits/{id}/IMPORT_LINES/{id1}/BOM_LINES/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/inwardProcessingPermits/${id}/IMPORT_LINES/${id1}/BOM_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importLinesbomLinesEqualizebalanceV1Post
   * @description Corresponds to `POST /inwardProcessingPermits/IMPORT_LINES/{id1}/BOM_LINES/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsDiiblinexml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importLinesbomLinesEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsDiiblinexml,
    options?: InwardProcessingPermitsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/inwardProcessingPermits/IMPORT_LINES/${id1}/BOM_LINES/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * Search inwardProcessingPermits by AUXIL_CODE
   * @param auxilCode - The AUXIL_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByAuxilCode(
    auxilCode: string | number | boolean
  ): Promise<ApiResponse<InwardProcessingPermits>> {
    return this.getAll({ q: `AUXIL_CODE like '${auxilCode}*'` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `InwardProcessingPermits` entities.
   * @returns {Promise<InwardProcessingPermitsAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for InwardProcessingPermits
   * const analytics = await client.inwardProcessingPermits.getAnalytics();
   */
  async getAnalytics(): Promise<InwardProcessingPermitsAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `InwardProcessingPermits` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of InwardProcessingPermits
   * const count = await client.inwardProcessingPermits.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `InwardProcessingPermits` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for InwardProcessingPermits
   * const columns = await client.inwardProcessingPermits.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `InwardProcessingPermits` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for InwardProcessingPermits
   * await client.inwardProcessingPermits.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `InwardProcessingPermits` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for InwardProcessingPermits
   * await client.inwardProcessingPermits.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `InwardProcessingPermits` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for InwardProcessingPermits
   * const isTracking = await client.inwardProcessingPermits.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {InwardProcessingPermitsSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: InwardProcessingPermitsSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
