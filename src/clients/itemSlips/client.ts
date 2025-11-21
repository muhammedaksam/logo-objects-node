/**
 * @module ItemSlips
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  ItemSlips,
  ItemSlipsSearchCriteria,
  ItemSlipsAnalytics,
  KeyValueParameter,
  ResultData,
  DemandPeggings,
  RsLabelxml,
  RsQccvalentryxml,
  ExtendedFieldDefinitions,
  RsMattransxml,
  RsDetmattrxml,
  RsSlloctrnxml,
  RsQccvallistxml,
  RsFaregtrnxml,
  ItemSlipsQueryOptions,
} from './types';

/**
 * @class ItemSlipsClient
 * @extends BaseApiClient
 * @description
 * The `ItemSlipsClient` provides an interface for interacting with the `ItemSlips` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Malzeme Yönetimi
 * @category Hareketler
 * @category Malzeme Fişleri
 * @category Alan Özellikleri
 */
export class ItemSlipsClient extends BaseApiClient {
  private readonly endpoint = '/itemSlips';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `ItemSlips` entities.
   * @param {ItemSlipsQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<ItemSlips>>} A promise that resolves to a paginated API response of `ItemSlips` entities.
   *
   * @example
   * // Retrieves the first 10 ItemSlips entities with specific fields
   * const itemSlips = await client.itemSlips.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: ItemSlipsQueryOptions): Promise<ApiResponse<ItemSlips>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `ItemSlips` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ItemSlips` entity.
   * @param {ItemSlipsQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<ItemSlips>} A promise that resolves to the requested `ItemSlips` entity.
   *
   * @example
   * // Retrieves an ItemSlips with ID 123 with specific fields
   * const itemSlips = await client.itemSlips.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(id: number, options?: ItemSlipsQueryOptions): Promise<ItemSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `ItemSlips` entity.
   * @param {Partial<ItemSlips>} data - The data for the new `ItemSlips` entity.
   * @returns {Promise<ItemSlips>} A promise that resolves to the newly created `ItemSlips` entity.
   *
   * @example
   * // Creates a new ItemSlips
   * const newItemSlips = await client.itemSlips.create({
   *   name: 'New ItemSlips',
   *   // ... other properties
   * });
   */
  async create(data: Partial<ItemSlips>): Promise<ItemSlips> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `ItemSlips` entity.
   * @param {number} id - The internal reference ID of the `ItemSlips` entity to update.
   * @param {Partial<ItemSlips>} data - The updated data for the `ItemSlips` entity.
   * @returns {Promise<ItemSlips>} A promise that resolves to the updated `ItemSlips` entity.
   *
   * @example
   * // Updates the name of an ItemSlips with ID 123
   * const updatedItemSlips = await client.itemSlips.update(123, {
   *   name: 'Updated ItemSlips Name',
   * });
   */
  async update(id: number, data: Partial<ItemSlips>): Promise<ItemSlips> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `ItemSlips` entity.
   * @param {number} id - The internal reference ID of the `ItemSlips` entity to update.
   * @param {Partial<ItemSlips>} data - The partial data to update.
   * @returns {Promise<ItemSlips>} A promise that resolves to the updated `ItemSlips` entity.
   *
   * @example
   * // Partially updates an ItemSlips with ID 123
   * const patchedItemSlips = await client.itemSlips.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(id: number, data: Partial<ItemSlips>): Promise<ItemSlips> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `ItemSlips` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `ItemSlips` entity to delete.
   * @returns {Promise<ItemSlips>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes an ItemSlips with ID 123
   * await client.itemSlips.delete(123);
   */
  async delete(id: number): Promise<ItemSlips> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `ItemSlips` entities based on a set of criteria.
   * @param {ItemSlipsSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<ItemSlips>>} A promise that resolves to a paginated API response of matching `ItemSlips` entities.
   *
   * @example
   * // Searches for ItemSlips entities with a specific code
   * const results = await client.itemSlips.search({ code: '123' });
   */
  async search(criteria: ItemSlipsSearchCriteria): Promise<ApiResponse<ItemSlips>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<ItemSlips>>} A promise that resolves to a paginated API response of matching `ItemSlips` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.itemSlips.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<ItemSlips>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /itemSlips/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /itemSlips/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /itemSlips/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /itemSlips/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /itemSlips/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /itemSlips/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/itemSlips/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /itemSlips/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /itemSlips/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /itemSlips/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(id: number, options?: ItemSlipsQueryOptions): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /itemSlips/ApplyCampaign`
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<ItemSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /itemSlips/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /itemSlips/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ApplyRePayPln/${lineNr}/${rePayPCode}`, data);
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /itemSlips/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /itemSlips/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /itemSlips/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /itemSlips/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ImportFromXmlStr/${RootKey}/${XmlStr}`, data);
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /itemSlips/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /itemSlips/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /itemSlips/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(
    id: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /itemSlips/ApplyCondition`
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<ItemSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /itemSlips/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /itemSlips/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `GET /itemSlips/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(id: number, options?: ItemSlipsQueryOptions): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method reCalculateV1Post
   * @description Corresponds to `POST /itemSlips/ReCalculate`
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Post(data: Partial<ItemSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ReCalculate`, data);
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /itemSlips/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(id: number, options?: ItemSlipsQueryOptions): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /itemSlips/FillAccCodes`
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<ItemSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /itemSlips/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /itemSlips/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /itemSlips/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /itemSlips/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/itemSlips/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `GET /itemSlips/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(
    id: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method equalizePayAmntV1Post
   * @description Corresponds to `POST /itemSlips/EqualizePayAmnt`
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Post(data: Partial<ItemSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/EqualizePayAmnt`, data);
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /itemSlips/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /itemSlips/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`, data);
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /itemSlips/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /itemSlips/FillSMMACCCodes`
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(data: Partial<ItemSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /itemSlips/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /itemSlips/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /itemSlips/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /itemSlips/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/AttachADespatchByFicheNo/${dispFicheNo}`, data);
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /itemSlips/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(
    id: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /itemSlips/DeleteCampaign`
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<ItemSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /itemSlips/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(id: number, options?: ItemSlipsQueryOptions): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /itemSlips/SetClientInfo`
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<ItemSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /itemSlips/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /itemSlips/GetRelevantCampaigns`
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(data: Partial<ItemSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /itemSlips/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /itemSlips/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method defnfldslistApplyaccdisttemplateV1
   * @description Corresponds to `POST /itemSlips/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistApplyaccdisttemplateV1(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /itemSlips/{id}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistApplyaccdisttemplateV1Get(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDEMANDPEGGINGSV1
   * @description Corresponds to `GET /itemSlips/{id}/DEMANDPEGGINGS`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDEMANDPEGGINGSV1(id: number, options?: ItemSlipsQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEMANDPEGGINGS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDEMANDPEGGINGSByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/DEMANDPEGGINGS/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<DemandPeggings>} A promise resolving to the response.
   */
  async getDEMANDPEGGINGSByIdV1(
    id: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<DemandPeggings> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEMANDPEGGINGS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/DEMANDPEGGINGS/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAppendline2V1(
    id: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEMANDPEGGINGS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/DEMANDPEGGINGS/AppendLine2`
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAppendline2V1Post(
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEMANDPEGGINGS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/DEMANDPEGGINGS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEMANDPEGGINGS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/DEMANDPEGGINGS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEMANDPEGGINGS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/DEMANDPEGGINGS/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEMANDPEGGINGS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/DEMANDPEGGINGS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEMANDPEGGINGS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/DEMANDPEGGINGS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAddline2V1(
    id: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEMANDPEGGINGS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsAddline2V1Post
   * @description Corresponds to `POST /itemSlips/DEMANDPEGGINGS/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAddline2V1Post(
    index: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEMANDPEGGINGS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/DEMANDPEGGINGS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEMANDPEGGINGS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/DEMANDPEGGINGS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEMANDPEGGINGS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/DEMANDPEGGINGS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsEqualizebalanceV1(
    id: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEMANDPEGGINGS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/DEMANDPEGGINGS/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsEqualizebalanceV1Post(
    index: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEMANDPEGGINGS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsApplyaccdisttemplateV1
   * @description Corresponds to `GET /itemSlips/{id}/DEMANDPEGGINGS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEMANDPEGGINGS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /itemSlips/DEMANDPEGGINGS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEMANDPEGGINGS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method demandpeggingsSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/DEMANDPEGGINGS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEMANDPEGGINGS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method demandpeggingsSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/DEMANDPEGGINGS/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async demandpeggingsSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEMANDPEGGINGS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getLABEL_LISTV1
   * @description Corresponds to `GET /itemSlips/{id}/LABEL_LIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getLABEL_LISTV1(id: number, options?: ItemSlipsQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/LABEL_LIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getLABEL_LISTByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/LABEL_LIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsLabelxml>} A promise resolving to the response.
   */
  async getLABEL_LISTByIdV1(
    id: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<RsLabelxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/LABEL_LIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/LABEL_LIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAppendline2V1(
    id: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/LABEL_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/LABEL_LIST/AppendLine2`
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAppendline2V1Post(
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/LABEL_LIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/LABEL_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/LABEL_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/LABEL_LIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/LABEL_LIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/LABEL_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/LABEL_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/LABEL_LIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/LABEL_LIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/LABEL_LIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAddline2V1(
    id: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/LABEL_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAddline2V1Post
   * @description Corresponds to `POST /itemSlips/LABEL_LIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAddline2V1Post(
    index: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/LABEL_LIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/LABEL_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/LABEL_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/LABEL_LIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/LABEL_LIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/LABEL_LIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListEqualizebalanceV1(
    id: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/LABEL_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/LABEL_LIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListEqualizebalanceV1Post(
    index: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/LABEL_LIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListApplyaccdisttemplateV1
   * @description Corresponds to `GET /itemSlips/{id}/LABEL_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/LABEL_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /itemSlips/LABEL_LIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/LABEL_LIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method labelListSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/LABEL_LIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/LABEL_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method labelListSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/LABEL_LIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async labelListSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/LABEL_LIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /itemSlips/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /itemSlips/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ExportToXML/${RootKey}/${FileName}`, data);
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /itemSlips/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /itemSlips/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<ItemSlips>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/ImportFromXMLFile/${RootKey}/${FileName}`, data);
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /itemSlips/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /itemSlips/CreateCompositeLines`
   * @param {Partial<ItemSlips>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(data: Partial<ItemSlips>): Promise<KeyValueParameter[]> {
    return this.request('post', `/itemSlips/CreateCompositeLines`, data);
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
  async transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    prcTyp: number,
    Indx: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1Get
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
  async transactionsdetailsslDetailsqclistvallistGetstocklinepriceV1Get(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    prcTyp: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistvallistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistAddline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} index - _index
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistvallistAddline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    index: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsdetailsslDetailsqclistvallistAppendserilotsV1(
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsdetailsslDetailsqclistvallistAppendserilotsV1Post(
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistvallistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} index - _index
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistvallistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    index: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
  async transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
  async transactionsdetailsslDetailsqclistvallistApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistvallistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} Indx - _Indx
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistvallistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    Indx: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDEFNFLDSLISTV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDEFNFLDSLISTV1(
    id: number,
    id1: number,
    options?: ItemSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDEFNFLDSLISTByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/{idt}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<ExtendedFieldDefinitions> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAppendline2V1(
    id: number,
    id1: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAppendline2V1Post(
    id1: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsMattransxml} data - The request body.
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
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddLine2/{_index}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAddline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistAddline2V1Post(
    id1: number,
    index: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsMattransxml} data - The request body.
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
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/EqualizeBalance/{_index}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistApplyaccdisttemplateV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdefnfldslistSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdefnfldslistSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DEFNFLDSLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdefnfldslistSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DEFNFLDSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getDEFNFLDSLISTV1
   * @description Corresponds to `GET /itemSlips/{id}/DEFNFLDSLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getDEFNFLDSLISTV1(id: number, options?: ItemSlipsQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEFNFLDSLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDEFNFLDSLISTByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/DEFNFLDSLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ExtendedFieldDefinitions>} A promise resolving to the response.
   */
  async getDEFNFLDSLISTByIdV1(
    id: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<ExtendedFieldDefinitions> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEFNFLDSLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/DEFNFLDSLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendline2V1(
    id: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/DEFNFLDSLIST/AppendLine2`
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendline2V1Post(
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEFNFLDSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/DEFNFLDSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEFNFLDSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/DEFNFLDSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEFNFLDSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddline2V1(
    id: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAddline2V1Post
   * @description Corresponds to `POST /itemSlips/DEFNFLDSLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAddline2V1Post(
    index: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEFNFLDSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/DEFNFLDSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEFNFLDSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method defnfldslistEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistEqualizebalanceV1(
    id: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method defnfldslistEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/DEFNFLDSLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async defnfldslistEqualizebalanceV1Post(
    index: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/DEFNFLDSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsfaInfoApplyaccdisttemplateV1
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoApplyaccdisttemplateV1(
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsfaInfoApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsfaInfoSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsfaInfoSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoSetlinetotalsV1Post(
    id1: number,
    id2: number,
    Indx: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_DETAILSV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_DETAILSV1(
    id: number,
    id1: number,
    id2: number,
    options?: ItemSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_DETAILSByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsSlloctrnxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_DETAILSByIdV1(
    id: number,
    id1: number,
    id2: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<RsSlloctrnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsAppendline2V1Post(
    id1: number,
    id2: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsdetailsslDetailsAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsAddserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsAddline2V1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsAddline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsAddline2V1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsdetailsslDetailsAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsAppendserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsEqualizebalanceV1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsApplyaccdisttemplateV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsSetlinetotalsV1Post(
    id1: number,
    id2: number,
    Indx: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_DETAILSQCLISTV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_DETAILSQCLISTV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    options?: ItemSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_DETAILSQCLISTByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsQccvalentryxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_DETAILSQCLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<RsQccvalentryxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistAppendline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsdetailsslDetailsqclistAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsdetailsslDetailsqclistAddserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    prcTyp: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    id3: number,
    prcTyp: number,
    Indx: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistAddline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistAddline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    index: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsdetailsslDetailsqclistAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsdetailsslDetailsqclistAppendserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    id3: number,
    index: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistApplyaccdisttemplateV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
  async transactionsdetailsslDetailsqclistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
  async transactionsdetailsslDetailsqclistApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    id3: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} Indx - _Indx
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    id3: number,
    Indx: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    options?: ItemSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsQccvallistxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSSL_DETAILSQCLISTVALLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<RsQccvallistxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistvallistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} id4 - id4
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsslDetailsqclistvallistAppendline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    id4: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsdetailsslDetailsqclistvallistAddserilotsV1(
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsslDetailsqclistvallistAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/SL_DETAILS/{id3}/QCLIST/{id4}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsdetailsslDetailsqclistvallistAddserilotsV1Post(
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/SL_DETAILS/${id3}/QCLIST/${id4}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistGetstocklinepriceV1
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistvallistGetstocklinepriceV1(
    id1: number,
    id2: number,
    id3: number,
    prcTyp: number,
    Indx: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistGetstocklinepriceV1Get
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistvallistGetstocklinepriceV1Get(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    prcTyp: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistvallistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistAddline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistvallistAddline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    index: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsslDetailsqclistvallistAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsslDetailsqclistvallistAppendserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistvallistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} index - _index
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistvallistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    id3: number,
    index: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistApplyaccdisttemplateV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
  async transactionsslDetailsqclistvallistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
  async transactionsslDetailsqclistvallistApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    id3: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistvallistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} Indx - _Indx
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistvallistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    id3: number,
    Indx: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSV1(
    id: number,
    id1: number,
    options?: ItemSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsDetmattrxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<RsDetmattrxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAppendline2V1(
    id: number,
    id1: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAppendline2V1Post(
    id1: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsMattransxml} data - The request body.
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
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AddLine2/{_index}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAddline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsAddline2V1Post(
    id1: number,
    index: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsMattransxml} data - The request body.
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
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/EqualizeBalance/{_index}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsApplyaccdisttemplateV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/SetLineTotals/{_Indx}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSFA_INFOV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSFA_INFOV1(
    id: number,
    id1: number,
    id2: number,
    options?: ItemSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSDETAILSFA_INFOByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsFaregtrnxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSDETAILSFA_INFOByIdV1(
    id: number,
    id1: number,
    id2: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<RsFaregtrnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsfaInfoAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsfaInfoAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoAppendline2V1Post(
    id1: number,
    id2: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsfaInfoAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsdetailsfaInfoAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsfaInfoAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoAddserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsfaInfoGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsfaInfoGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsfaInfoAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoAddline2V1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsfaInfoAddline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoAddline2V1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsfaInfoAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsdetailsfaInfoAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsfaInfoAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoAppendserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsdetailsfaInfoEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsdetailsfaInfoEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/DETAILS/{id2}/FA_INFO/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsDetmattrxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsdetailsfaInfoEqualizebalanceV1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsDetmattrxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/DETAILS/${id2}/FA_INFO/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsfaInfoApplyaccdisttemplateV1
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/FA_INFO/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoApplyaccdisttemplateV1(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/FA_INFO/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsfaInfoApplyaccdisttemplateV1Get
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/FA_INFO/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoApplyaccdisttemplateV1Get(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/FA_INFO/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsfaInfoSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/FA_INFO/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/FA_INFO/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsfaInfoSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/FA_INFO/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/FA_INFO/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSSL_DETAILSV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_DETAILSV1(
    id: number,
    id1: number,
    options?: ItemSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSSL_DETAILSByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsSlloctrnxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_DETAILSByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<RsSlloctrnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsAppendline2V1(
    id: number,
    id1: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsAppendline2V1Post(
    id1: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsslDetailsAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsAddline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsAddline2V1Post(
    id1: number,
    index: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsslDetailsAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsApplyaccdisttemplateV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsApplyaccdisttemplateV1(
    id: number,
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsApplyaccdisttemplateV1Post(
    id1: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsSetlinetotalsV1(
    id: number,
    id1: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} Indx - _Indx
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsSetlinetotalsV1Post(
    id1: number,
    Indx: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSSL_DETAILSQCLISTV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_DETAILSQCLISTV1(
    id: number,
    id1: number,
    id2: number,
    options?: ItemSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSSL_DETAILSQCLISTByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsQccvalentryxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_DETAILSQCLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<RsQccvalentryxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistAppendline2V1Post(
    id1: number,
    id2: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsslDetailsqclistAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsslDetailsqclistAddserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistGetstocklinepriceV1(
    id: number,
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistGetstocklinepriceV1Post(
    id1: number,
    id2: number,
    prcTyp: number,
    Indx: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistAddline2V1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistAddline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistAddline2V1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsslDetailsqclistAppendserilotsV1(
    id: number,
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsslDetailsqclistAppendserilotsV1Post(
    id1: number,
    id2: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistEqualizebalanceV1(
    id: number,
    id1: number,
    id2: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} index - _index
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistEqualizebalanceV1Post(
    id1: number,
    id2: number,
    index: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistApplyaccdisttemplateV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistApplyaccdisttemplateV1(
    id: number,
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistApplyaccdisttemplateV1Post(
    id1: number,
    id2: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistSetlinetotalsV1(
    id: number,
    id1: number,
    id2: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/SetLineTotals/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} Indx - _Indx
   * @param {RsSlloctrnxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistSetlinetotalsV1Post(
    id1: number,
    id2: number,
    Indx: number,
    data: RsSlloctrnxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSSL_DETAILSQCLISTVALLISTV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_DETAILSQCLISTVALLISTV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    options?: ItemSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSSL_DETAILSQCLISTVALLISTByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsQccvallistxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSSL_DETAILSQCLISTVALLISTByIdV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<RsQccvallistxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistvallistAppendline2V1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AppendLine2`
   * @param {number} id1 - id1
   * @param {number} id2 - id2
   * @param {number} id3 - id3
   * @param {RsQccvalentryxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsslDetailsqclistvallistAppendline2V1Post(
    id1: number,
    id2: number,
    id3: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsslDetailsqclistvallistAddserilotsV1(
    id: number,
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsslDetailsqclistvallistAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/SL_DETAILS/{id2}/QCLIST/{id3}/VALLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsslDetailsqclistvallistAddserilotsV1Post(
    id1: number,
    id2: number,
    id3: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsQccvalentryxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/SL_DETAILS/${id2}/QCLIST/${id3}/VALLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /itemSlips/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ItemSlips>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: ItemSlipsQueryOptions
  ): Promise<ItemSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /itemSlips/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ItemSlips>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: ItemSlipsQueryOptions
  ): Promise<ItemSlips> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSV1(id: number, options?: ItemSlipsQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsMattransxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSByIdV1(
    id: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<RsMattransxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1(
    id: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/AppendLine2`
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendline2V1Post(
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1(
    id: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAddline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAddline2V1Post(
    index: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1(
    id: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsEqualizebalanceV1Post(
    index: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
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
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsSetlinetotalsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsSetlinetotalsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<ItemSlips>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsSetlinetotalsV1Post(
    Indx: number,
    data: Partial<ItemSlips>,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getTRANSACTIONSFA_INFOV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/FA_INFO`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getTRANSACTIONSFA_INFOV1(
    id: number,
    id1: number,
    options?: ItemSlipsQueryOptions
  ): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/FA_INFO${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getTRANSACTIONSFA_INFOByIdV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/FA_INFO/{idt}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsFaregtrnxml>} A promise resolving to the response.
   */
  async getTRANSACTIONSFA_INFOByIdV1(
    id: number,
    id1: number,
    idt: number,
    options?: ItemSlipsQueryOptions
  ): Promise<RsFaregtrnxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/FA_INFO/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsfaInfoAppendline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/FA_INFO/AppendLine2`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoAppendline2V1(
    id: number,
    id1: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/FA_INFO/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsfaInfoAppendline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/FA_INFO/AppendLine2`
   * @param {number} id1 - id1
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoAppendline2V1Post(
    id1: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/FA_INFO/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsfaInfoAddserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/FA_INFO/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
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
  async transactionsfaInfoAddserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/FA_INFO/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsfaInfoAddserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/FA_INFO/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoAddserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/FA_INFO/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsfaInfoGetstocklinepriceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/FA_INFO/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoGetstocklinepriceV1(
    id: number,
    id1: number,
    prcTyp: number,
    Indx: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/FA_INFO/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsfaInfoGetstocklinepriceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/FA_INFO/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id1 - id1
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoGetstocklinepriceV1Post(
    id1: number,
    prcTyp: number,
    Indx: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/FA_INFO/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsfaInfoAddline2V1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/FA_INFO/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoAddline2V1(
    id: number,
    id1: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/FA_INFO/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsfaInfoAddline2V1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/FA_INFO/AddLine2/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoAddline2V1Post(
    id1: number,
    index: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/FA_INFO/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsfaInfoAppendserilotsV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/FA_INFO/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
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
  async transactionsfaInfoAppendserilotsV1(
    id: number,
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/FA_INFO/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsfaInfoAppendserilotsV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/FA_INFO/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id1 - id1
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoAppendserilotsV1Post(
    id1: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/FA_INFO/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method transactionsfaInfoEqualizebalanceV1
   * @description Corresponds to `GET /itemSlips/{id}/TRANSACTIONS/{id1}/FA_INFO/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoEqualizebalanceV1(
    id: number,
    id1: number,
    index: number,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/itemSlips/${id}/TRANSACTIONS/${id1}/FA_INFO/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method transactionsfaInfoEqualizebalanceV1Post
   * @description Corresponds to `POST /itemSlips/TRANSACTIONS/{id1}/FA_INFO/EqualizeBalance/{_index}`
   * @param {number} id1 - id1
   * @param {number} index - _index
   * @param {RsMattransxml} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async transactionsfaInfoEqualizebalanceV1Post(
    id1: number,
    index: number,
    data: RsMattransxml,
    options?: ItemSlipsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/itemSlips/TRANSACTIONS/${id1}/FA_INFO/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * Search itemSlips by AUXIL_CODE
   * @param auxilCode - The AUXIL_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByAuxilCode(auxilCode: string | number | boolean): Promise<ApiResponse<ItemSlips>> {
    return this.getAll({ q: `AUXIL_CODE like '${auxilCode}*'` });
  }

  /**
   * Search itemSlips by EARCHIVEDETR_NAME
   * @param earchivedetrName - The EARCHIVEDETR_NAME to search for
   * @returns Promise resolving to matching entities
   */
  async searchByEarchivedetrName(
    earchivedetrName: string | number | boolean
  ): Promise<ApiResponse<ItemSlips>> {
    return this.getAll({ q: `EARCHIVEDETR_NAME like '${earchivedetrName}*'` });
  }

  /**
   * Search itemSlips by EINVOICE_DESCRIPTION
   * @param einvoiceDescription - The EINVOICE_DESCRIPTION to search for
   * @returns Promise resolving to matching entities
   */
  async searchByEinvoiceDescription(
    einvoiceDescription: string | number | boolean
  ): Promise<ApiResponse<ItemSlips>> {
    return this.getAll({ q: `EINVOICE_DESCRIPTION like '${einvoiceDescription}*'` });
  }

  /**
   * Search itemSlips by NUMBER
   * @param number - The NUMBER to search for
   * @returns Promise resolving to matching entities
   */
  async searchBynumber(number: string | number | boolean): Promise<ApiResponse<ItemSlips>> {
    return this.getAll({ q: `NUMBER eq ${number}` });
  }

  /**
   * Search itemSlips by TYPE
   * @param type - The TYPE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByType(type: string | number | boolean): Promise<ApiResponse<ItemSlips>> {
    return this.getAll({ q: `TYPE eq ${type}` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `ItemSlips` entities.
   * @returns {Promise<ItemSlipsAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for ItemSlips
   * const analytics = await client.itemSlips.getAnalytics();
   */
  async getAnalytics(): Promise<ItemSlipsAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `ItemSlips` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of ItemSlips
   * const count = await client.itemSlips.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `ItemSlips` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for ItemSlips
   * const columns = await client.itemSlips.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `ItemSlips` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for ItemSlips
   * await client.itemSlips.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `ItemSlips` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for ItemSlips
   * await client.itemSlips.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `ItemSlips` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for ItemSlips
   * const isTracking = await client.itemSlips.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {ItemSlipsSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: ItemSlipsSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
