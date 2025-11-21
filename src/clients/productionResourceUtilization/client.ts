/**
 * @module ProductionResourceUtilization
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  ProductionResourceUtilization,
  ProductionResourceUtilizationSearchCriteria,
  ProductionResourceUtilizationAnalytics,
  KeyValueParameter,
  ResultData,
  RsOccupationxml,
  ProductionResourceUtilizationQueryOptions,
} from './types';

/**
 * @class ProductionResourceUtilizationClient
 * @extends BaseApiClient
 * @description
 * The `ProductionResourceUtilizationClient` provides an interface for interacting with the `ProductionResourceUtilization` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Üretim Kontrol
 * @category Hareketler
 * @category İş Emirleri
 * @category Planlanan-Gerçekleşen Kaynak Kullanımı Girişi
 * @category Alan Özellikleri
 */
export class ProductionResourceUtilizationClient extends BaseApiClient {
  private readonly endpoint = '/productionResourceUtilization';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `ProductionResourceUtilization` entities.
   * @param {ProductionResourceUtilizationQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<ProductionResourceUtilization>>} A promise that resolves to a paginated API response of `ProductionResourceUtilization` entities.
   *
   * @example
   * // Retrieves the first 10 ProductionResourceUtilization entities with specific fields
   * const productionResourceUtilization = await client.productionResourceUtilization.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<ApiResponse<ProductionResourceUtilization>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `ProductionResourceUtilization` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ProductionResourceUtilization` entity.
   * @param {ProductionResourceUtilizationQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<ProductionResourceUtilization>} A promise that resolves to the requested `ProductionResourceUtilization` entity.
   *
   * @example
   * // Retrieves a ProductionResourceUtilization with ID 123 with specific fields
   * const productionResourceUtilization = await client.productionResourceUtilization.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<ProductionResourceUtilization> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `ProductionResourceUtilization` entity.
   * @param {Partial<ProductionResourceUtilization>} data - The data for the new `ProductionResourceUtilization` entity.
   * @returns {Promise<ProductionResourceUtilization>} A promise that resolves to the newly created `ProductionResourceUtilization` entity.
   *
   * @example
   * // Creates a new ProductionResourceUtilization
   * const newProductionResourceUtilization = await client.productionResourceUtilization.create({
   *   name: 'New ProductionResourceUtilization',
   *   // ... other properties
   * });
   */
  async create(
    data: Partial<ProductionResourceUtilization>
  ): Promise<ProductionResourceUtilization> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `ProductionResourceUtilization` entity.
   * @param {number} id - The internal reference ID of the `ProductionResourceUtilization` entity to update.
   * @param {Partial<ProductionResourceUtilization>} data - The updated data for the `ProductionResourceUtilization` entity.
   * @returns {Promise<ProductionResourceUtilization>} A promise that resolves to the updated `ProductionResourceUtilization` entity.
   *
   * @example
   * // Updates the name of a ProductionResourceUtilization with ID 123
   * const updatedProductionResourceUtilization = await client.productionResourceUtilization.update(123, {
   *   name: 'Updated ProductionResourceUtilization Name',
   * });
   */
  async update(
    id: number,
    data: Partial<ProductionResourceUtilization>
  ): Promise<ProductionResourceUtilization> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `ProductionResourceUtilization` entity.
   * @param {number} id - The internal reference ID of the `ProductionResourceUtilization` entity to update.
   * @param {Partial<ProductionResourceUtilization>} data - The partial data to update.
   * @returns {Promise<ProductionResourceUtilization>} A promise that resolves to the updated `ProductionResourceUtilization` entity.
   *
   * @example
   * // Partially updates a ProductionResourceUtilization with ID 123
   * const patchedProductionResourceUtilization = await client.productionResourceUtilization.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(
    id: number,
    data: Partial<ProductionResourceUtilization>
  ): Promise<ProductionResourceUtilization> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `ProductionResourceUtilization` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ProductionResourceUtilization` entity to delete.
   * @returns {Promise<ProductionResourceUtilization>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes a ProductionResourceUtilization with ID 123
   * await client.productionResourceUtilization.delete(123);
   */
  async delete(id: number): Promise<ProductionResourceUtilization> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `ProductionResourceUtilization` entities based on a set of criteria.
   * @param {ProductionResourceUtilizationSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<ProductionResourceUtilization>>} A promise that resolves to a paginated API response of matching `ProductionResourceUtilization` entities.
   *
   * @example
   * // Searches for ProductionResourceUtilization entities with a specific code
   * const results = await client.productionResourceUtilization.search({ code: '123' });
   */
  async search(
    criteria: ProductionResourceUtilizationSearchCriteria
  ): Promise<ApiResponse<ProductionResourceUtilization>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<ProductionResourceUtilization>>} A promise that resolves to a paginated API response of matching `ProductionResourceUtilization` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.productionResourceUtilization.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<ProductionResourceUtilization>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/ImportImage/${ImgPath}/${Indx}`,
      data
    );
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/ExportBase64EncodedImage/${Indx}`,
      data
    );
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /productionResourceUtilization/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ApplyCampaign`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/ApplyRePayPln/${lineNr}/${rePayPCode}`,
      data
    );
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/ApplyRePayPlnForInv/${rePayCode}`,
      data
    );
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/ImportFromXmlStr/${RootKey}/${XmlStr}`,
      data
    );
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ApplyCondition`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/ExportImage/${Indx}/${ImgPath}`,
      data
    );
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method reCalculateV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ReCalculate`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Post(
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/ReCalculate`, data);
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /productionResourceUtilization/FillAccCodes`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /productionResourceUtilization/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method equalizePayAmntV1Post
   * @description Corresponds to `POST /productionResourceUtilization/EqualizePayAmnt`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Post(
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/EqualizePayAmnt`, data);
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`,
      data
    );
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /productionResourceUtilization/FillSMMACCCodes`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /productionResourceUtilization/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/AttachADespatchByLRef/${dispref}`,
      data
    );
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /productionResourceUtilization/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/AttachADespatchByFicheNo/${dispFicheNo}`,
      data
    );
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /productionResourceUtilization/DeleteCampaign`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /productionResourceUtilization/SetClientInfo`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/GetRelevantCampaigns`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/ApplyCampaignSpecific/${refList}`,
      data
    );
  }

  /**
   * @method wizactlistApplyaccdisttemplateV1
   * @description Corresponds to `POST /productionResourceUtilization/WIZACTLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistApplyaccdisttemplateV1(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZACTLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizactlistApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZACTLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistApplyaccdisttemplateV1Get(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZACTLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizactlistSetlinetotalsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZACTLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZACTLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizactlistSetlinetotalsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZACTLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZACTLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getACTLISTV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ACTLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getACTLISTV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ACTLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getACTLISTByIdV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ACTLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsOccupationxml>} A promise resolving to the response.
   */
  async getACTLISTByIdV1(
    id: number,
    idt: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<RsOccupationxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ACTLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method actlistAppendline2V1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ACTLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistAppendline2V1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ACTLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method actlistAppendline2V1Post
   * @description Corresponds to `POST /productionResourceUtilization/ACTLIST/AppendLine2`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistAppendline2V1Post(
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/ACTLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method actlistAddserilotsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ACTLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ACTLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method actlistAddserilotsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ACTLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/ACTLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method actlistGetstocklinepriceV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ACTLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ACTLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method actlistGetstocklinepriceV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ACTLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/ACTLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method actlistAddline2V1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ACTLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistAddline2V1(
    id: number,
    index: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ACTLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method actlistAddline2V1Post
   * @description Corresponds to `POST /productionResourceUtilization/ACTLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistAddline2V1Post(
    index: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/ACTLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method actlistAppendserilotsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ACTLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ACTLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method actlistAppendserilotsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ACTLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/ACTLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method actlistEqualizebalanceV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ACTLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistEqualizebalanceV1(
    id: number,
    index: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ACTLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method actlistEqualizebalanceV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ACTLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistEqualizebalanceV1Post(
    index: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/ACTLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method actlistApplyaccdisttemplateV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ACTLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ACTLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method actlistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ACTLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/ACTLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method actlistSetlinetotalsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ACTLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ACTLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method actlistSetlinetotalsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ACTLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async actlistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/ACTLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getWIZPLNLISTV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZPLNLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getWIZPLNLISTV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZPLNLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getWIZPLNLISTByIdV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZPLNLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsOccupationxml>} A promise resolving to the response.
   */
  async getWIZPLNLISTByIdV1(
    id: number,
    idt: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<RsOccupationxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZPLNLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizplnlistAppendline2V1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZPLNLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistAppendline2V1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZPLNLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizplnlistAppendline2V1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZPLNLIST/AppendLine2`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistAppendline2V1Post(
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZPLNLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizplnlistAddserilotsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZPLNLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZPLNLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizplnlistAddserilotsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZPLNLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZPLNLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizplnlistGetstocklinepriceV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZPLNLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZPLNLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizplnlistGetstocklinepriceV1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZPLNLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZPLNLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizplnlistAddline2V1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZPLNLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistAddline2V1(
    id: number,
    index: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZPLNLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizplnlistAddline2V1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZPLNLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistAddline2V1Post(
    index: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZPLNLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizplnlistAppendserilotsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZPLNLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZPLNLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizplnlistAppendserilotsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZPLNLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZPLNLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizplnlistEqualizebalanceV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZPLNLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistEqualizebalanceV1(
    id: number,
    index: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZPLNLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizplnlistEqualizebalanceV1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZPLNLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistEqualizebalanceV1Post(
    index: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZPLNLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizplnlistApplyaccdisttemplateV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZPLNLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZPLNLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizplnlistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZPLNLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZPLNLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizplnlistSetlinetotalsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZPLNLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZPLNLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizplnlistSetlinetotalsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZPLNLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizplnlistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZPLNLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/ExportToXML/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /productionResourceUtilization/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productionResourceUtilization/ImportFromXMLFile/${RootKey}/${FileName}`,
      data
    );
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /productionResourceUtilization/CreateCompositeLines`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(
    data: Partial<ProductionResourceUtilization>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productionResourceUtilization/CreateCompositeLines`, data);
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /productionResourceUtilization/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ProductionResourceUtilization>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<ProductionResourceUtilization> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /productionResourceUtilization/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ProductionResourceUtilization>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<ProductionResourceUtilization> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getPLNLISTV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/PLNLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getPLNLISTV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/PLNLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getPLNLISTByIdV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/PLNLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsOccupationxml>} A promise resolving to the response.
   */
  async getPLNLISTByIdV1(
    id: number,
    idt: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<RsOccupationxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/PLNLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method plnlistAppendline2V1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/PLNLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistAppendline2V1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/PLNLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method plnlistAppendline2V1Post
   * @description Corresponds to `POST /productionResourceUtilization/PLNLIST/AppendLine2`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistAppendline2V1Post(
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/PLNLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method plnlistAddserilotsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/PLNLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/PLNLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method plnlistAddserilotsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/PLNLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/PLNLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method plnlistGetstocklinepriceV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/PLNLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/PLNLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method plnlistGetstocklinepriceV1Post
   * @description Corresponds to `POST /productionResourceUtilization/PLNLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/PLNLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method plnlistAddline2V1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/PLNLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistAddline2V1(
    id: number,
    index: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/PLNLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method plnlistAddline2V1Post
   * @description Corresponds to `POST /productionResourceUtilization/PLNLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistAddline2V1Post(
    index: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/PLNLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method plnlistAppendserilotsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/PLNLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/PLNLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method plnlistAppendserilotsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/PLNLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/PLNLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method plnlistEqualizebalanceV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/PLNLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistEqualizebalanceV1(
    id: number,
    index: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/PLNLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method plnlistEqualizebalanceV1Post
   * @description Corresponds to `POST /productionResourceUtilization/PLNLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistEqualizebalanceV1Post(
    index: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/PLNLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method plnlistApplyaccdisttemplateV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/PLNLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/PLNLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method plnlistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /productionResourceUtilization/PLNLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/PLNLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method plnlistSetlinetotalsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/PLNLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/PLNLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method plnlistSetlinetotalsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/PLNLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async plnlistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/PLNLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getWIZACTLISTV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZACTLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getWIZACTLISTV1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZACTLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getWIZACTLISTByIdV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZACTLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsOccupationxml>} A promise resolving to the response.
   */
  async getWIZACTLISTByIdV1(
    id: number,
    idt: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<RsOccupationxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZACTLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizactlistAppendline2V1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZACTLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistAppendline2V1(
    id: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZACTLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizactlistAppendline2V1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZACTLIST/AppendLine2`
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistAppendline2V1Post(
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZACTLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizactlistAddserilotsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZACTLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZACTLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizactlistAddserilotsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZACTLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZACTLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizactlistGetstocklinepriceV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZACTLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZACTLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizactlistGetstocklinepriceV1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZACTLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZACTLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizactlistAddline2V1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZACTLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistAddline2V1(
    id: number,
    index: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZACTLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizactlistAddline2V1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZACTLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistAddline2V1Post(
    index: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZACTLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizactlistAppendserilotsV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZACTLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZACTLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizactlistAppendserilotsV1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZACTLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZACTLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method wizactlistEqualizebalanceV1
   * @description Corresponds to `GET /productionResourceUtilization/{id}/WIZACTLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistEqualizebalanceV1(
    id: number,
    index: number,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/productionResourceUtilization/${id}/WIZACTLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method wizactlistEqualizebalanceV1Post
   * @description Corresponds to `POST /productionResourceUtilization/WIZACTLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ProductionResourceUtilization>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async wizactlistEqualizebalanceV1Post(
    index: number,
    data: Partial<ProductionResourceUtilization>,
    options?: ProductionResourceUtilizationQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/productionResourceUtilization/WIZACTLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * Search productionResourceUtilization by RESOURCE_CODE
   * @param resourceCode - The RESOURCE_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByResourceCode(
    resourceCode: string | number | boolean
  ): Promise<ApiResponse<ProductionResourceUtilization>> {
    return this.getAll({ q: `RESOURCE_CODE like '${resourceCode}*'` });
  }

  /**
   * Search productionResourceUtilization by RESOURCE_NAME
   * @param resourceName - The RESOURCE_NAME to search for
   * @returns Promise resolving to matching entities
   */
  async searchByResourceName(
    resourceName: string | number | boolean
  ): Promise<ApiResponse<ProductionResourceUtilization>> {
    return this.getAll({ q: `RESOURCE_NAME like '${resourceName}*'` });
  }

  /**
   * Search productionResourceUtilization by RESOURCE_TYPE
   * @param resourceType - The RESOURCE_TYPE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByResourceType(
    resourceType: string | number | boolean
  ): Promise<ApiResponse<ProductionResourceUtilization>> {
    return this.getAll({ q: `RESOURCE_TYPE eq ${resourceType}` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `ProductionResourceUtilization` entities.
   * @returns {Promise<ProductionResourceUtilizationAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for ProductionResourceUtilization
   * const analytics = await client.productionResourceUtilization.getAnalytics();
   */
  async getAnalytics(): Promise<ProductionResourceUtilizationAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `ProductionResourceUtilization` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of ProductionResourceUtilization
   * const count = await client.productionResourceUtilization.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `ProductionResourceUtilization` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for ProductionResourceUtilization
   * const columns = await client.productionResourceUtilization.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `ProductionResourceUtilization` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for ProductionResourceUtilization
   * await client.productionResourceUtilization.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `ProductionResourceUtilization` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for ProductionResourceUtilization
   * await client.productionResourceUtilization.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `ProductionResourceUtilization` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for ProductionResourceUtilization
   * const isTracking = await client.productionResourceUtilization.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {ProductionResourceUtilizationSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(
    criteria: ProductionResourceUtilizationSearchCriteria
  ): string | undefined {
    return buildSearchQuery(criteria);
  }
}
