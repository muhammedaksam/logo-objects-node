/**
 * @module Contacts
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig, RequestQueryBodyParameter } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  Contacts,
  ContactsSearchCriteria,
  ContactsAnalytics,
  KeyValueParameter,
  ResultData,
  RsContspedaysxml,
  ContactsQueryOptions,
} from './types';

/**
 * @class ContactsClient
 * @extends BaseApiClient
 * @description
 * The `ContactsClient` provides an interface for interacting with the `Contacts` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Satış ve Dağıtım
 * @category Satış Teklif Yönetimi
 * @category İlgili Kişiler
 * @category Alan Özellikleri
 */
export class ContactsClient extends BaseApiClient {
  private readonly endpoint = '/contacts';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `Contacts` entities.
   * @param {ContactsQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<Contacts>>} A promise that resolves to a paginated API response of `Contacts` entities.
   *
   * @example
   * // Retrieves the first 10 Contacts entities with specific fields
   * const contacts = await client.contacts.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: ContactsQueryOptions): Promise<ApiResponse<Contacts>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getById
   * @description Retrieves a single `Contacts` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `Contacts` entity.
   * @param {ContactsQueryOptions} [options] - Optional parameters for expanding related entities or selecting specific fields.
   * @returns {Promise<Contacts>} A promise that resolves to the requested `Contacts` entity.
   *
   * @example
   * // Retrieves a Contacts with ID 123 with specific fields
   * const contacts = await client.contacts.getById(123, {
   *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense for field names
   * });
   */
  async getById(id: number, options?: ContactsQueryOptions): Promise<Contacts> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}/${id}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method create
   * @description Creates a new `Contacts` entity.
   * @param {Partial<Contacts>} data - The data for the new `Contacts` entity.
   * @returns {Promise<Contacts>} A promise that resolves to the newly created `Contacts` entity.
   *
   * @example
   * // Creates a new Contacts
   * const newContacts = await client.contacts.create({
   *   name: 'New Contacts',
   *   // ... other properties
   * });
   */
  async create(data: Partial<Contacts>): Promise<Contacts> {
    return this.request('post', this.endpoint, data);
  }

  /**
   * @method update
   * @description Updates an existing `Contacts` entity.
   * @param {number} id - The internal reference ID of the `Contacts` entity to update.
   * @param {Partial<Contacts>} data - The updated data for the `Contacts` entity.
   * @returns {Promise<Contacts>} A promise that resolves to the updated `Contacts` entity.
   *
   * @example
   * // Updates the name of a Contacts with ID 123
   * const updatedContacts = await client.contacts.update(123, {
   *   name: 'Updated Contacts Name',
   * });
   */
  async update(id: number, data: Partial<Contacts>): Promise<Contacts> {
    return this.request('put', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method patch
   * @description Partially updates a `Contacts` entity.
   * @param {number} id - The internal reference ID of the `Contacts` entity to update.
   * @param {Partial<Contacts>} data - The partial data to update.
   * @returns {Promise<Contacts>} A promise that resolves to the updated `Contacts` entity.
   *
   * @example
   * // Partially updates a Contacts with ID 123
   * const patchedContacts = await client.contacts.patch(123, {
   *   status: 'inactive',
   * });
   */
  async patch(id: number, data: Partial<Contacts>): Promise<Contacts> {
    return this.request('patch', `${this.endpoint}/${id}`, data);
  }

  /**
   * @method delete
   * @description Deletes a `Contacts` entity by its internal reference ID.
   * @param {number} id - The internal reference ID of the `Contacts` entity to delete.
   * @returns {Promise<Contacts>} A promise that resolves when the entity is successfully deleted.
   *
   * @example
   * // Deletes a Contacts with ID 123
   * await client.contacts.delete(123);
   */
  async delete(id: number): Promise<Contacts> {
    return this.request('delete', `${this.endpoint}/${id}`);
  }

  /**
   * @method search
   * @description Searches for `Contacts` entities based on a set of criteria.
   * @param {ContactsSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<Contacts>>} A promise that resolves to a paginated API response of matching `Contacts` entities.
   *
   * @example
   * // Searches for Contacts entities with a specific code
   * const results = await client.contacts.search({ code: '123' });
   */
  async search(criteria: ContactsSearchCriteria): Promise<ApiResponse<Contacts>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<Contacts>>} A promise that resolves to a paginated API response of matching `Contacts` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.contacts.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<Contacts>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method importFromXmlStrV1
   * @description Corresponds to `GET /contacts/{id}/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
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
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ImportFromXmlStr/${RootKey}/${XmlStr}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXmlStrV1Post
   * @description Corresponds to `POST /contacts/ImportFromXmlStr/{_RootKey}/{_XmlStr}`
   * @param {string} RootKey - _RootKey
   * @param {string} XmlStr - _XmlStr
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXmlStrV1Post(
    RootKey: string,
    XmlStr: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ImportFromXmlStr/${RootKey}/${XmlStr}`, data);
  }

  /**
   * @method exportToXmlStrV1
   * @description Corresponds to `GET /contacts/{id}/ExportToXmlStr/{_RootKey}`
   * @param {number} id - id
   * @param {string} RootKey - _RootKey
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1(
    id: number,
    RootKey: string,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ExportToXmlStr/${RootKey}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXmlStrV1Post
   * @description Corresponds to `POST /contacts/ExportToXmlStr/{_RootKey}`
   * @param {string} RootKey - _RootKey
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXmlStrV1Post(
    RootKey: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ExportToXmlStr/${RootKey}`, data);
  }

  /**
   * @method applyConditionV1
   * @description Corresponds to `GET /contacts/{id}/ApplyCondition`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1(id: number, options?: ContactsQueryOptions): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ApplyCondition${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyConditionV1Post
   * @description Corresponds to `POST /contacts/ApplyCondition`
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyConditionV1Post(data: Partial<Contacts>): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ApplyCondition`, data);
  }

  /**
   * @method exportImageV1
   * @description Corresponds to `GET /contacts/{id}/ExportImage/{_Indx}/{_ImgPath}`
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
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ExportImage/${Indx}/${ImgPath}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportImageV1Post
   * @description Corresponds to `POST /contacts/ExportImage/{_Indx}/{_ImgPath}`
   * @param {string} Indx - _Indx
   * @param {string} ImgPath - _ImgPath
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportImageV1Post(
    Indx: string,
    ImgPath: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ExportImage/${Indx}/${ImgPath}`, data);
  }

  /**
   * @method reCalculateV1
   * @description Corresponds to `GET /contacts/{id}/ReCalculate`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1(id: number, options?: ContactsQueryOptions): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ReCalculate${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method reCalculateV1Post
   * @description Corresponds to `POST /contacts/ReCalculate`
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async reCalculateV1Post(data: Partial<Contacts>): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ReCalculate`, data);
  }

  /**
   * @method fillAccCodesV1
   * @description Corresponds to `GET /contacts/{id}/FillAccCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1(id: number, options?: ContactsQueryOptions): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/FillAccCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillAccCodesV1Post
   * @description Corresponds to `POST /contacts/FillAccCodes`
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillAccCodesV1Post(data: Partial<Contacts>): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/FillAccCodes`, data);
  }

  /**
   * @method applyADiscountV1
   * @description Corresponds to `GET /contacts/{id}/ApplyADiscount/{_discCode}`
   * @param {number} id - id
   * @param {string} discCode - _discCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1(
    id: number,
    discCode: string,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ApplyADiscount/${discCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyADiscountV1Post
   * @description Corresponds to `POST /contacts/ApplyADiscount/{_discCode}`
   * @param {string} discCode - _discCode
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyADiscountV1Post(
    discCode: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ApplyADiscount/${discCode}`, data);
  }

  /**
   * @method setDefIntValueV1
   * @description Corresponds to `GET /contacts/{id}/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
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
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setDefIntValueV1Post
   * @description Corresponds to `POST /contacts/SetDefIntValue/{_fldName}/{_fType}/{_fSz}/{_Value}`
   * @param {string} fldName - _fldName
   * @param {number} fType - _fType
   * @param {number} fSz - _fSz
   * @param {number} Value - _Value
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setDefIntValueV1Post(
    fldName: string,
    fType: number,
    fSz: number,
    Value: number,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/contacts/SetDefIntValue/${fldName}/${fType}/${fSz}/${Value}`,
      data
    );
  }

  /**
   * @method equalizePayAmntV1
   * @description Corresponds to `GET /contacts/{id}/EqualizePayAmnt`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1(
    id: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/EqualizePayAmnt${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method equalizePayAmntV1Post
   * @description Corresponds to `POST /contacts/EqualizePayAmnt`
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async equalizePayAmntV1Post(data: Partial<Contacts>): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/EqualizePayAmnt`, data);
  }

  /**
   * @method addSeriLotsForKsV1
   * @description Corresponds to `GET /contacts/{id}/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
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
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method addSeriLotsForKsV1Post
   * @description Corresponds to `POST /contacts/AddSeriLotsForKs/{_slCode}/{_amount}/{_IOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} IOMtd - _IOMtd
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addSeriLotsForKsV1Post(
    slCode: string,
    amount: number,
    IOMtd: number,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/AddSeriLotsForKs/${slCode}/${amount}/${IOMtd}`, data);
  }

  /**
   * @method fillSMMACCCodesV1
   * @description Corresponds to `GET /contacts/{id}/FillSMMACCCodes`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1(
    id: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/FillSMMACCCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method fillSMMACCCodesV1Post
   * @description Corresponds to `POST /contacts/FillSMMACCCodes`
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fillSMMACCCodesV1Post(data: Partial<Contacts>): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/FillSMMACCCodes`, data);
  }

  /**
   * @method attachADespatchByLRefV1
   * @description Corresponds to `GET /contacts/{id}/AttachADespatchByLRef/{_dispref}`
   * @param {number} id - id
   * @param {number} dispref - _dispref
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1(
    id: number,
    dispref: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/AttachADespatchByLRef/${dispref}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByLRefV1Post
   * @description Corresponds to `POST /contacts/AttachADespatchByLRef/{_dispref}`
   * @param {number} dispref - _dispref
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByLRefV1Post(
    dispref: number,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/AttachADespatchByLRef/${dispref}`, data);
  }

  /**
   * @method attachADespatchByFicheNoV1
   * @description Corresponds to `GET /contacts/{id}/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {number} id - id
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1(
    id: number,
    dispFicheNo: string,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/AttachADespatchByFicheNo/${dispFicheNo}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method attachADespatchByFicheNoV1Post
   * @description Corresponds to `POST /contacts/AttachADespatchByFicheNo/{_dispFicheNo}`
   * @param {string} dispFicheNo - _dispFicheNo
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async attachADespatchByFicheNoV1Post(
    dispFicheNo: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/AttachADespatchByFicheNo/${dispFicheNo}`, data);
  }

  /**
   * @method deleteCampaignV1
   * @description Corresponds to `GET /contacts/{id}/DeleteCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1(id: number, options?: ContactsQueryOptions): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/DeleteCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method deleteCampaignV1Post
   * @description Corresponds to `POST /contacts/DeleteCampaign`
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async deleteCampaignV1Post(data: Partial<Contacts>): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/DeleteCampaign`, data);
  }

  /**
   * @method setClientInfoV1
   * @description Corresponds to `GET /contacts/{id}/SetClientInfo`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1(id: number, options?: ContactsQueryOptions): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SetClientInfo${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method setClientInfoV1Post
   * @description Corresponds to `POST /contacts/SetClientInfo`
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async setClientInfoV1Post(data: Partial<Contacts>): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/SetClientInfo`, data);
  }

  /**
   * @method getRelevantCampaignsV1
   * @description Corresponds to `GET /contacts/{id}/GetRelevantCampaigns`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1(
    id: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/GetRelevantCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getRelevantCampaignsV1Post
   * @description Corresponds to `POST /contacts/GetRelevantCampaigns`
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getRelevantCampaignsV1Post(data: Partial<Contacts>): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/GetRelevantCampaigns`, data);
  }

  /**
   * @method applyCampaignSpecificV1
   * @description Corresponds to `GET /contacts/{id}/ApplyCampaignSpecific/{_refList}`
   * @param {number} id - id
   * @param {string} refList - _refList
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1(
    id: number,
    refList: string,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ApplyCampaignSpecific/${refList}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignSpecificV1Post
   * @description Corresponds to `POST /contacts/ApplyCampaignSpecific/{_refList}`
   * @param {string} refList - _refList
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignSpecificV1Post(
    refList: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ApplyCampaignSpecific/${refList}`, data);
  }

  /**
   * @method importImageV1
   * @description Corresponds to `GET /contacts/{id}/ImportImage/{_ImgPath}/{_Indx}`
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
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ImportImage/${ImgPath}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importImageV1Post
   * @description Corresponds to `POST /contacts/ImportImage/{_ImgPath}/{_Indx}`
   * @param {string} ImgPath - _ImgPath
   * @param {string} Indx - _Indx
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importImageV1Post(
    ImgPath: string,
    Indx: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ImportImage/${ImgPath}/${Indx}`, data);
  }

  /**
   * @method exportBase64EncodedImageV1
   * @description Corresponds to `GET /contacts/{id}/ExportBase64EncodedImage/{_Indx}`
   * @param {number} id - id
   * @param {string} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1(
    id: number,
    Indx: string,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ExportBase64EncodedImage/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportBase64EncodedImageV1Post
   * @description Corresponds to `POST /contacts/ExportBase64EncodedImage/{_Indx}`
   * @param {string} Indx - _Indx
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportBase64EncodedImageV1Post(
    Indx: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ExportBase64EncodedImage/${Indx}`, data);
  }

  /**
   * @method importBase64EncodedImageV1
   * @description Corresponds to `GET /contacts/{id}/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
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
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importBase64EncodedImageV1Post
   * @description Corresponds to `POST /contacts/ImportBase64EncodedImage/{_base64EncodedImage}/{_imageType}/{_Indx}`
   * @param {string} base64EncodedImage - _base64EncodedImage
   * @param {string} imageType - _imageType
   * @param {string} Indx - _Indx
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importBase64EncodedImageV1Post(
    base64EncodedImage: string,
    imageType: string,
    Indx: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/contacts/ImportBase64EncodedImage/${base64EncodedImage}/${imageType}/${Indx}`,
      data
    );
  }

  /**
   * @method postReadWithBodyParametersV1
   * @description Corresponds to `POST /contacts/readwithbodyparamters`
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Contacts>} A promise resolving to the response.
   */
  async postReadWithBodyParametersV1(
    data: RequestQueryBodyParameter,
    options?: ContactsQueryOptions
  ): Promise<Contacts> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/contacts/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method postReadByIdWithBodyParametersV1
   * @description Corresponds to `POST /contacts/{id}/readwithbodyparamters`
   * @param {number} id - id
   * @param {RequestQueryBodyParameter} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Contacts>} A promise resolving to the response.
   */
  async postReadByIdWithBodyParametersV1(
    id: number,
    data: RequestQueryBodyParameter,
    options?: ContactsQueryOptions
  ): Promise<Contacts> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/contacts/${id}/readwithbodyparamters${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method getSPEDAYSLISTV1
   * @description Corresponds to `GET /contacts/{id}/SPEDAYSLIST`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResultData>} A promise resolving to the response.
   */
  async getSPEDAYSLISTV1(id: number, options?: ContactsQueryOptions): Promise<ResultData> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SPEDAYSLIST${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getSPEDAYSLISTByIdV1
   * @description Corresponds to `GET /contacts/{id}/SPEDAYSLIST/{idt}`
   * @param {number} id - id
   * @param {number} idt - idt
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<RsContspedaysxml>} A promise resolving to the response.
   */
  async getSPEDAYSLISTByIdV1(
    id: number,
    idt: number,
    options?: ContactsQueryOptions
  ): Promise<RsContspedaysxml> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SPEDAYSLIST/${idt}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method spedayslistAppendline2V1
   * @description Corresponds to `GET /contacts/{id}/SPEDAYSLIST/AppendLine2`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistAppendline2V1(
    id: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SPEDAYSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method spedayslistAppendline2V1Post
   * @description Corresponds to `POST /contacts/SPEDAYSLIST/AppendLine2`
   * @param {Partial<Contacts>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistAppendline2V1Post(
    data: Partial<Contacts>,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/contacts/SPEDAYSLIST/AppendLine2${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method spedayslistAddserilotsV1
   * @description Corresponds to `GET /contacts/{id}/SPEDAYSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistAddserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SPEDAYSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method spedayslistAddserilotsV1Post
   * @description Corresponds to `POST /contacts/SPEDAYSLIST/AddSeriLots/{_slCode}/{_amount}/{_locCode}/{_lOMtd}/{_ExpDate}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {number} ExpDate - _ExpDate
   * @param {Partial<Contacts>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistAddserilotsV1Post(
    slCode: string,
    amount: number,
    locCode: string,
    lOMtd: number,
    ExpDate: number,
    data: Partial<Contacts>,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/contacts/SPEDAYSLIST/AddSeriLots/${slCode}/${amount}/${locCode}/${lOMtd}/${ExpDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method spedayslistGetstocklinepriceV1
   * @description Corresponds to `GET /contacts/{id}/SPEDAYSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} id - id
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistGetstocklinepriceV1(
    id: number,
    prcTyp: number,
    Indx: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SPEDAYSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method spedayslistGetstocklinepriceV1Post
   * @description Corresponds to `POST /contacts/SPEDAYSLIST/GetStockLinePrice/{_prcTyp}/{_Indx}`
   * @param {number} prcTyp - _prcTyp
   * @param {number} Indx - _Indx
   * @param {Partial<Contacts>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistGetstocklinepriceV1Post(
    prcTyp: number,
    Indx: number,
    data: Partial<Contacts>,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/contacts/SPEDAYSLIST/GetStockLinePrice/${prcTyp}/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method spedayslistAddline2V1
   * @description Corresponds to `GET /contacts/{id}/SPEDAYSLIST/AddLine2/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistAddline2V1(
    id: number,
    index: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SPEDAYSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method spedayslistAddline2V1Post
   * @description Corresponds to `POST /contacts/SPEDAYSLIST/AddLine2/{_index}`
   * @param {number} index - _index
   * @param {Partial<Contacts>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistAddline2V1Post(
    index: number,
    data: Partial<Contacts>,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/contacts/SPEDAYSLIST/AddLine2/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method spedayslistAppendserilotsV1
   * @description Corresponds to `GET /contacts/{id}/SPEDAYSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {number} id - id
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistAppendserilotsV1(
    id: number,
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SPEDAYSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method spedayslistAppendserilotsV1Post
   * @description Corresponds to `POST /contacts/SPEDAYSLIST/AppendSeriLots/{_slCode}/{_amount}/{_Indx}/{_locCode}/{_lOMtd}`
   * @param {string} slCode - _slCode
   * @param {number} amount - _amount
   * @param {number} Indx - _Indx
   * @param {string} locCode - _locCode
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<Contacts>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistAppendserilotsV1Post(
    slCode: string,
    amount: number,
    Indx: number,
    locCode: string,
    lOMtd: number,
    data: Partial<Contacts>,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/contacts/SPEDAYSLIST/AppendSeriLots/${slCode}/${amount}/${Indx}/${locCode}/${lOMtd}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method spedayslistEqualizebalanceV1
   * @description Corresponds to `GET /contacts/{id}/SPEDAYSLIST/EqualizeBalance/{_index}`
   * @param {number} id - id
   * @param {number} index - _index
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistEqualizebalanceV1(
    id: number,
    index: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SPEDAYSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method spedayslistEqualizebalanceV1Post
   * @description Corresponds to `POST /contacts/SPEDAYSLIST/EqualizeBalance/{_index}`
   * @param {number} index - _index
   * @param {Partial<Contacts>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistEqualizebalanceV1Post(
    index: number,
    data: Partial<Contacts>,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/contacts/SPEDAYSLIST/EqualizeBalance/${index}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method spedayslistApplyaccdisttemplateV1
   * @description Corresponds to `GET /contacts/{id}/SPEDAYSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {number} id - id
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistApplyaccdisttemplateV1(
    id: number,
    accDistCode: string,
    lineType: number,
    iDate: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SPEDAYSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method spedayslistApplyaccdisttemplateV1Post
   * @description Corresponds to `POST /contacts/SPEDAYSLIST/ApplyAccDistTemplate/{_accDistCode}/{_lineType}/{_iDate}`
   * @param {string} accDistCode - _accDistCode
   * @param {number} lineType - _lineType
   * @param {number} iDate - _iDate
   * @param {Partial<Contacts>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistApplyaccdisttemplateV1Post(
    accDistCode: string,
    lineType: number,
    iDate: number,
    data: Partial<Contacts>,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/contacts/SPEDAYSLIST/ApplyAccDistTemplate/${accDistCode}/${lineType}/${iDate}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method spedayslistSetlinetotalsV1
   * @description Corresponds to `GET /contacts/{id}/SPEDAYSLIST/SetLineTotals/{_Indx}`
   * @param {number} id - id
   * @param {number} Indx - _Indx
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistSetlinetotalsV1(
    id: number,
    Indx: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/SPEDAYSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method spedayslistSetlinetotalsV1Post
   * @description Corresponds to `POST /contacts/SPEDAYSLIST/SetLineTotals/{_Indx}`
   * @param {number} Indx - _Indx
   * @param {Partial<Contacts>} data - The request body.
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async spedayslistSetlinetotalsV1Post(
    Indx: number,
    data: Partial<Contacts>,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'post',
      `/contacts/SPEDAYSLIST/SetLineTotals/${Indx}${queryString ? `?${queryString}` : ''}`,
      data
    );
  }

  /**
   * @method exportToXMLV1
   * @description Corresponds to `GET /contacts/{id}/ExportToXML/{_RootKey}/{_FileName}`
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
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ExportToXML/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method exportToXMLV1Post
   * @description Corresponds to `POST /contacts/ExportToXML/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async exportToXMLV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ExportToXML/${RootKey}/${FileName}`, data);
  }

  /**
   * @method importFromXMLFileV1
   * @description Corresponds to `GET /contacts/{id}/ImportFromXMLFile/{_RootKey}/{_FileName}`
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
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ImportFromXMLFile/${RootKey}/${FileName}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method importFromXMLFileV1Post
   * @description Corresponds to `POST /contacts/ImportFromXMLFile/{_RootKey}/{_FileName}`
   * @param {string} RootKey - _RootKey
   * @param {string} FileName - _FileName
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async importFromXMLFileV1Post(
    RootKey: string,
    FileName: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ImportFromXMLFile/${RootKey}/${FileName}`, data);
  }

  /**
   * @method createCompositeLinesV1
   * @description Corresponds to `GET /contacts/{id}/CreateCompositeLines`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1(
    id: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/CreateCompositeLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method createCompositeLinesV1Post
   * @description Corresponds to `POST /contacts/CreateCompositeLines`
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async createCompositeLinesV1Post(data: Partial<Contacts>): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/CreateCompositeLines`, data);
  }

  /**
   * @method formSeriLotLinesV1
   * @description Corresponds to `GET /contacts/{id}/FormSeriLotLines/{_lOMtd}`
   * @param {number} id - id
   * @param {number} lOMtd - _lOMtd
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1(
    id: number,
    lOMtd: number,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/FormSeriLotLines/${lOMtd}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method formSeriLotLinesV1Post
   * @description Corresponds to `POST /contacts/FormSeriLotLines/{_lOMtd}`
   * @param {number} lOMtd - _lOMtd
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async formSeriLotLinesV1Post(
    lOMtd: number,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/FormSeriLotLines/${lOMtd}`, data);
  }

  /**
   * @method applyCampaignV1
   * @description Corresponds to `GET /contacts/{id}/ApplyCampaign`
   * @param {number} id - id
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1(id: number, options?: ContactsQueryOptions): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ApplyCampaign${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyCampaignV1Post
   * @description Corresponds to `POST /contacts/ApplyCampaign`
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyCampaignV1Post(data: Partial<Contacts>): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ApplyCampaign`, data);
  }

  /**
   * @method applyRePayPlnV1
   * @description Corresponds to `GET /contacts/{id}/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
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
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ApplyRePayPln/${lineNr}/${rePayPCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnV1Post
   * @description Corresponds to `POST /contacts/ApplyRePayPln/{_lineNr}/{_rePayPCode}`
   * @param {number} lineNr - _lineNr
   * @param {string} rePayPCode - _rePayPCode
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnV1Post(
    lineNr: number,
    rePayPCode: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ApplyRePayPln/${lineNr}/${rePayPCode}`, data);
  }

  /**
   * @method applyRePayPlnForInvV1
   * @description Corresponds to `GET /contacts/{id}/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {number} id - id
   * @param {string} rePayCode - _rePayCode
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1(
    id: number,
    rePayCode: string,
    options?: ContactsQueryOptions
  ): Promise<KeyValueParameter[]> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/contacts/${id}/ApplyRePayPlnForInv/${rePayCode}${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method applyRePayPlnForInvV1Post
   * @description Corresponds to `POST /contacts/ApplyRePayPlnForInv/{_rePayCode}`
   * @param {string} rePayCode - _rePayCode
   * @param {Partial<Contacts>} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async applyRePayPlnForInvV1Post(
    rePayCode: string,
    data: Partial<Contacts>
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/contacts/ApplyRePayPlnForInv/${rePayCode}`, data);
  }

  /**
   * Search contacts by CUSTOMER_CODE
   * @param customerCode - The CUSTOMER_CODE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByCustomerCode(
    customerCode: string | number | boolean
  ): Promise<ApiResponse<Contacts>> {
    return this.getAll({ q: `CUSTOMER_CODE like '${customerCode}*'` });
  }

  /**
   * Search contacts by NAME
   * @param name - The NAME to search for
   * @returns Promise resolving to matching entities
   */
  async searchByName(name: string | number | boolean): Promise<ApiResponse<Contacts>> {
    return this.getAll({ q: `NAME like '${name}*'` });
  }

  /**
   * Search contacts by TITLE
   * @param title - The TITLE to search for
   * @returns Promise resolving to matching entities
   */
  async searchByTitle(title: string | number | boolean): Promise<ApiResponse<Contacts>> {
    return this.getAll({ q: `TITLE like '${title}*'` });
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `Contacts` entities.
   * @returns {Promise<ContactsAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for Contacts
   * const analytics = await client.contacts.getAnalytics();
   */
  async getAnalytics(): Promise<ContactsAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `Contacts` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of Contacts
   * const count = await client.contacts.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Contacts` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Contacts
   * const columns = await client.contacts.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Contacts` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Contacts
   * await client.contacts.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Contacts` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Contacts
   * await client.contacts.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Contacts` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Contacts
   * const isTracking = await client.contacts.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {ContactsSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: ContactsSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
