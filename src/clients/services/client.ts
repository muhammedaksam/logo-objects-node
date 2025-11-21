/**
 * @module Services
 */

import { BaseApiClient } from '../base';
import { ApiResponse, ApiClientConfig } from '../../types';
import { buildSearchQuery } from '../../utils/queryBuilder';
import {
  Services,
  ServicesSearchCriteria,
  ServicesAnalytics,
  ResourceApiRepository,
  ServicesQueryOptions,
} from './types';

/**
 * @class ServicesClient
 * @extends BaseApiClient
 * @description
 * The `ServicesClient` provides an interface for interacting with the `Services` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Malzeme Yönetimi
 * @category Ana Kayıtlar
 * @category Ek Vergiler
 * @category Finans
 * @category Cari Hesap Kartları
 * @category Grup Şirketi
 * @category Cari Hesap Açıklamaları
 * @category Cari Hesaplar
 * @category Sevkiyat Adresleri
 * @category Hareketler
 * @category Cari Hesap Fişleri
 * @category Genel
 * @category Yetki Kodları
 * @category Bankalar
 * @category Hesaplar
 * @category Banka Kredileri
 * @category Banka Açıklamaları
 * @category Banka Fişleri
 * @category Üretim Tanımları
 * @category Ürün Reçeteleri
 * @category Maliyet Muhasebesi
 * @category Maliyet Yerleri
 * @category Standart Reçete Maliyeti
 * @category Kaynak Yönetimi
 * @category İş İstasyonu Özellikleri
 * @category Malzeme Özellik Setleri
 * @category Çek-Senet Bordroları
 * @category Çekler-Senetler
 * @category Sistem İşletmeni
 * @category Kuruluş Bilgileri
 * @category Şehir Bilgileri
 * @category Teminat Bordroları
 * @category Satış ve Dağıtım
 * @category Satış Teklif Yönetimi
 * @category İlgili Kişiler
 * @category Maliyet Dağıtım Fişleri
 * @category Ülke Bilgileri
 * @category Müşteriler
 * @category Müşteri Açıklamaları
 * @category Satış Elemanları
 * @category Satıcı-Cari Bağlantısı
 * @category Gümrükler
 * @category Teslimat Kodları
 * @category Talep Yönetimi
 * @category İşlemler
 * @category Talep Karşılama
 * @category Talep Fişleri
 * @category Dağıtım Emirleri
 * @category Dağıtım Rotaları
 * @category Genel Muhasebe
 * @category Hesap Dağıtım Şablonları
 * @category Semt Bilgileri
 * @category Çalışan Maliyetleri
 * @category Çalışan Grupları
 * @category Çalışanlar
 * @category Çalışan Standart Maliyeti
 * @category Kayıt ve Atama Listeleri
 * @category Mühendislik Değişiklikleri
 * @category İhracat
 * @category Akreditifler
 * @category İhracat Kredileri
 * @category İthalat
 * @category İthalat-Malzeme Dolaşım Fişi
 * @category İthalat-Millileştirme Fişleri
 * @category İhracat Operasyon Fişi
 * @category İhracat-İhraç Kayıtlı Alım Faturaları
 * @category İhracat-İhraç Kayıtlı Satış Faturaları
 * @category Tanımlı Alan Kategori Bilgileri
 * @category Tanımlı Alan Tanımları
 * @category Tanımlı Alanlar
 * @category Duran Varlık Yönetimi
 * @category Sabit Kıymet Kayıtları
 * @category Zimmet Formu
 * @category Sabit Kıymetler
 * @category Diğer
 * @category Tüm Ekler
 * @category Serbest Bölge Tanımları
 * @category Muhasebe Hesap Kartları-Muhasebe Hesap Kartı Açıklamaları
 * @category Muhasebe Hesapları
 * @category Muhasebe Fişleri
 * @category Grup Kodları
 * @category İthalat-Dağıtım Fişleri
 * @category İthalat Operasyon Fişi
 * @category İhracat-Dahilde İşleme İzin Belgesi
 * @category Malzemeler
 * @category Malzeme Alternatifleri
 * @category Marka Tanımları
 * @category Malzeme Özellikleri
 * @category Malzeme Sınıfı Atamaları
 * @category Malzeme Açıklamaları
 * @category Malzeme Fişleri
 * @category Malzeme Standart Maliyetleri
 * @category Stok Yeri Kodları
 * @category Operasyonlar
 * @category Satış Fırsatları
 * @category Masraf Merkezleri
 * @category Fiyat Farkı Faturaları
 * @category Ödeme Planı Grup Kodları
 * @category Ödeme-Tahsilat Planları
 * @category Posta Kodu Bilgileri
 * @category İş İstasyonları
 * @category İş İstasyonu İstisnaları
 * @category Ürün Hatları
 * @category Üretim Sabitleri
 * @category Üretim Kontrol
 * @category İş Emirleri
 * @category Planlanan-Gerçekleşen Kaynak Kullanımı Girişi
 * @category Rotalar
 * @category Projeler
 * @category Satınalma
 * @category Satınalma Kampanyaları
 * @category Alış Koşulları (Fiş Satırları)
 * @category Alış Koşulları (Fiş Geneli)
 * @category Malzeme (Sınıfı) Satınalma Fiyatları
 * @category Satınalma İndirimleri
 * @category Satınalma İrsaliyeleri
 * @category Hizmet Satınalma Fiyatları
 * @category Alınan Hizmetler
 * @category Satınalma Masrafları
 * @category Satınalma Faturaları
 * @category Satınalma Siparişleri
 * @category Satınalma Promosyonları
 * @category Satınalma Teklif Yönetimi
 * @category Sözleşmeler
 * @category Teklifler
 * @category Emirler
 * @category Kalite Kontrol
 * @category Malzeme KKK Atamaları
 * @category Kalite Kontrol Kriter Setleri
 * @category Generic SQL Sorgusu
 * @category Hızlı Üretim Fişi
 * @category Geri Ödeme Planları
 * @category Kasalar
 * @category Kasa İşlemleri
 * @category Satış Faaliyetleri
 * @category Satış Kampanyaları
 * @category Kategoriler
 * @category Satış Koşulları (Fiş Satırları)
 * @category Satış Koşulları (Fiş Geneli)
 * @category Sözleşme
 * @category Satış İndirimleri
 * @category Satış İrsaliyeleri
 * @category Satış Masrafları
 * @category Satış Faturaları
 * @category Malzeme (Sınıfı) Satış Fiyatları
 * @category Satıcı Hedef Bağlantıları
 * @category Satıcı Pozisyon Kodları
 * @category Satıcı Rota bağlantısı
 * @category Teklif
 * @category Satış Siparişleri
 * @category Satış Promosyonları
 * @category Satış Provizyon Dağıtım Fişleri
 * @category Hizmet Satış Fiyatları
 * @category Seri-Lot tanımları
 * @category Swagger Dokümantasyon Servisi
 * @category Vardiya Atamaları
 * @category Vardiyalar
 * @category Verilen Hizmet Kartları
 * @category Özel Kodları
 * @category Standart Maliyet Periyodları
 * @category Durma Nedenleri
 * @category CAPI işlemleri
 * @category İlçe Bilgileri
 * @category [bankCreditsMenu]
 * @category [bankCredits]
 * @category Birim Setleri
 * @category Variantlar
 * @category Dağıtım Araçları
 * @category İş Akış Yönetimi
 * @category İş Akış Kartları
 * @category İş Akış Rol Tanımları
 * @category İş İstasyonu Maliyetleri
 * @category İş İstasyonu Grupları
 * @category İş İstasyonu Standart Maliyeti
 */
export class ServicesClient extends BaseApiClient {
  private readonly endpoint = '/services';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method getAll
   * @description Retrieves a paginated list of `Services` entities.
   * @param {ServicesQueryOptions} [options] - Optional parameters for filtering, sorting, and pagination with type-safe field names.
   * @returns {Promise<ApiResponse<Services>>} A promise that resolves to a paginated API response of `Services` entities.
   *
   * @example
   * // Retrieves the first 10 Services entities with specific fields
   * const services = await client.services.getAll({
   *   limit: 10,
   *   fields: ['CODE', 'TITLE', 'STATUS'],  // ✨ Full IntelliSense for field names
   *   sort: [['CODE', 'DATE_CREATED'], 'desc']  // ✨ Type-safe sort with direction
   * });
   */
  async getAll(options?: ServicesQueryOptions): Promise<ApiResponse<Services>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `${this.endpoint}${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method search
   * @description Searches for `Services` entities based on a set of criteria.
   * @param {ServicesSearchCriteria} criteria - The search criteria.
   * @returns {Promise<ApiResponse<Services>>} A promise that resolves to a paginated API response of matching `Services` entities.
   *
   * @example
   * // Searches for Services entities with a specific code
   * const results = await client.services.search({ code: '123' });
   */
  async search(criteria: ServicesSearchCriteria): Promise<ApiResponse<Services>> {
    const query = this.buildSearchQuery(criteria);
    return this.getAll({ q: query });
  }

  /**
   * @method buildQuery
   * @description Builds a custom query string for advanced filtering.
   * @param {string[]} conditions - An array of OData query conditions.
   * @returns {Promise<ApiResponse<Services>>} A promise that resolves to a paginated API response of matching `Services` entities.
   *
   * @example
   * // Builds a complex query
   * const results = await client.services.buildQuery([
   *   "name like '%test%'",
   *   "status eq 'active'"
   * ]);
   */
  async buildQuery(conditions: string[]): Promise<ApiResponse<Services>> {
    const query = conditions.join(' and ');
    return this.getAll({ q: query });
  }

  /**
   * @method getServiceSwaggerV1
   * @description Corresponds to `GET /services/additionalTaxes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/additionalTaxes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get
   * @description Corresponds to `GET /services/ArpGroupAssignments`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/ArpGroupAssignments${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get2
   * @description Corresponds to `GET /services/ArpMLDescriptons`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get2(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/ArpMLDescriptons${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get3
   * @description Corresponds to `GET /services/Arps`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get3(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/Arps${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get4
   * @description Corresponds to `GET /services/ArpShipmentLocations`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get4(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/ArpShipmentLocations${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get5
   * @description Corresponds to `GET /services/ArpSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get5(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/ArpSlips${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get6
   * @description Corresponds to `GET /services/authorizationCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get6(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/authorizationCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get7
   * @description Corresponds to `GET /services/bankAccounts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get7(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/bankAccounts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get8
   * @description Corresponds to `GET /services/bankCredits`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get8(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/bankCredits${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get9
   * @description Corresponds to `GET /services/bankMLDescriptions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get9(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/bankMLDescriptions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get10
   * @description Corresponds to `GET /services/banks`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get10(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/banks${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get11
   * @description Corresponds to `GET /services/bankSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get11(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/bankSlips${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get12
   * @description Corresponds to `GET /services/Boms`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get12(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/Boms${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get13
   * @description Corresponds to `GET /services/BomStandardCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get13(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/BomStandardCosts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get14
   * @description Corresponds to `GET /services/characteristics`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get14(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/characteristics${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get15
   * @description Corresponds to `GET /services/characteristicSets`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get15(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/characteristicSets${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get16
   * @description Corresponds to `GET /services/chequeAndPnoteRolls`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get16(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/chequeAndPnoteRolls${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get17
   * @description Corresponds to `GET /services/chequeAndPnotes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get17(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/chequeAndPnotes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get18
   * @description Corresponds to `GET /services/cities`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get18(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/cities${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get19
   * @description Corresponds to `GET /services/collateralRolls`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get19(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/collateralRolls${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get20
   * @description Corresponds to `GET /services/contacts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get20(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/contacts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get21
   * @description Corresponds to `GET /services/costDistributionSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get21(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/costDistributionSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get22
   * @description Corresponds to `GET /services/countries`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get22(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/countries${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get23
   * @description Corresponds to `GET /services/customerMLDescriptions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get23(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/customerMLDescriptions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get24
   * @description Corresponds to `GET /services/customers`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get24(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/customers${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get25
   * @description Corresponds to `GET /services/customersOfSalesmen`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get25(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/customersOfSalesmen${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get26
   * @description Corresponds to `GET /services/customsOffices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get26(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/customsOffices${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get27
   * @description Corresponds to `GET /services/deliveryCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get27(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/deliveryCodes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get28
   * @description Corresponds to `GET /services/demandPeggings`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get28(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/demandPeggings${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get29
   * @description Corresponds to `GET /services/demandSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get29(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/demandSlips${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get30
   * @description Corresponds to `GET /services/distributionOrders`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get30(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/distributionOrders${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get31
   * @description Corresponds to `GET /services/distributionRoutes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get31(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/distributionRoutes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get32
   * @description Corresponds to `GET /services/distributionTemplates`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get32(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/distributionTemplates${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get33
   * @description Corresponds to `GET /services/districts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get33(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/districts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get34
   * @description Corresponds to `GET /services/employeeCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get34(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/employeeCosts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get35
   * @description Corresponds to `GET /services/employeeGroups`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get35(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/employeeGroups${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get36
   * @description Corresponds to `GET /services/employees`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get36(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/employees${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get37
   * @description Corresponds to `GET /services/employeeStandardCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get37(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/employeeStandardCosts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get38
   * @description Corresponds to `GET /services/engineeringChanges`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get38(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/engineeringChanges${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get39
   * @description Corresponds to `GET /services/exportCreditLetters`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get39(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/exportCreditLetters${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get40
   * @description Corresponds to `GET /services/exportCredits`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get40(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/exportCredits${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get41
   * @description Corresponds to `GET /services/exportMovementSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get41(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/exportMovementSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get42
   * @description Corresponds to `GET /services/exportNationalizationSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get42(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/exportNationalizationSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get43
   * @description Corresponds to `GET /services/exportOperationSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get43(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/exportOperationSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get44
   * @description Corresponds to `GET /services/exportTypedPurchaseInvoices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get44(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/exportTypedPurchaseInvoices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get45
   * @description Corresponds to `GET /services/exportTypedSalesInvoices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get45(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/exportTypedSalesInvoices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get46
   * @description Corresponds to `GET /services/extendedFieldCategories`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get46(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/extendedFieldCategories${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get47
   * @description Corresponds to `GET /services/extendedFieldDefinitions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get47(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/extendedFieldDefinitions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get48
   * @description Corresponds to `GET /services/extendedFields`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get48(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/extendedFields${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get49
   * @description Corresponds to `GET /services/FAAssignmentSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get49(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/FAAssignmentSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get50
   * @description Corresponds to `GET /services/FARegistries`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get50(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/FARegistries${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method firmDocs_V1_GetServiceSwagger
   * @description Corresponds to `GET /services/Firmdocs`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async firmDocs_V1_GetServiceSwagger(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/Firmdocs${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get51
   * @description Corresponds to `GET /services/freeZones`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get51(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/freeZones${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get52
   * @description Corresponds to `GET /services/GLAccountMLDescriptions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get52(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/GLAccountMLDescriptions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get53
   * @description Corresponds to `GET /services/GLAccounts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get53(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/GLAccounts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get54
   * @description Corresponds to `GET /services/GLSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get54(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/GLSlips${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get55
   * @description Corresponds to `GET /services/groupCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get55(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/groupCodes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get56
   * @description Corresponds to `GET /services/importCreditLetters`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get56(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/importCreditLetters${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get57
   * @description Corresponds to `GET /services/importDistributionSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get57(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/importDistributionSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get58
   * @description Corresponds to `GET /services/importOperationSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get58(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/importOperationSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get59
   * @description Corresponds to `GET /services/inwardProcessingPermits`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get59(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/inwardProcessingPermits${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get60
   * @description Corresponds to `GET /services/itemAlternatives`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get60(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/itemAlternatives${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get61
   * @description Corresponds to `GET /services/itemBoms`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get61(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/itemBoms${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get62
   * @description Corresponds to `GET /services/itemBrands`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get62(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/itemBrands${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get63
   * @description Corresponds to `GET /services/itemCharacteristics`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get63(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/itemCharacteristics${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get64
   * @description Corresponds to `GET /services/itemClassAssignments`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get64(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/itemClassAssignments${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get65
   * @description Corresponds to `GET /services/itemMLDescriptions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get65(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/itemMLDescriptions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get66
   * @description Corresponds to `GET /services/items`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get66(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/items${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get67
   * @description Corresponds to `GET /services/itemSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get67(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/itemSlips${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get68
   * @description Corresponds to `GET /services/itemStandardCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get68(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/itemStandardCosts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get69
   * @description Corresponds to `GET /services/locationCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get69(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/locationCodes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get70
   * @description Corresponds to `GET /services/methods`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get70(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/methods${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get71
   * @description Corresponds to `GET /services/operations`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get71(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/operations${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get72
   * @description Corresponds to `GET /services/opportunities`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get72(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/opportunities${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get73
   * @description Corresponds to `GET /services/overheadAccounts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get73(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/overheadAccounts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get74
   * @description Corresponds to `GET /services/paymentDifferenceInvoices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get74(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/paymentDifferenceInvoices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get75
   * @description Corresponds to `GET /services/paymentPlanGroupCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get75(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/paymentPlanGroupCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get76
   * @description Corresponds to `GET /services/paymentPlans`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get76(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/paymentPlans${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get77
   * @description Corresponds to `GET /services/postCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get77(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/postCodes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get78
   * @description Corresponds to `GET /services/productionExceptions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get78(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/productionExceptions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get79
   * @description Corresponds to `GET /services/productionLines`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get79(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/productionLines${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get80
   * @description Corresponds to `GET /services/productionParameters`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get80(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/productionParameters${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get81
   * @description Corresponds to `GET /services/productionResourceUtilization`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get81(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/productionResourceUtilization${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get82
   * @description Corresponds to `GET /services/productionRoutes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get82(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/productionRoutes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get83
   * @description Corresponds to `GET /services/productions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get83(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/productions${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get84
   * @description Corresponds to `GET /services/projects`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get84(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/projects${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get85
   * @description Corresponds to `GET /services/purchaseCampaigns`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get85(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchaseCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get86
   * @description Corresponds to `GET /services/purchaseConditionsForSlipLines`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get86(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchaseConditionsForSlipLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get87
   * @description Corresponds to `GET /services/purchaseConditionsForSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get87(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchaseConditionsForSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get88
   * @description Corresponds to `GET /services/purchasedItemPrices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get88(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchasedItemPrices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get89
   * @description Corresponds to `GET /services/purchaseDiscounts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get89(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchaseDiscounts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get90
   * @description Corresponds to `GET /services/purchaseDispatches`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get90(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchaseDispatches${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get91
   * @description Corresponds to `GET /services/purchasedServicePrices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get91(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchasedServicePrices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get92
   * @description Corresponds to `GET /services/purchasedServices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get92(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchasedServices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get93
   * @description Corresponds to `GET /services/purchaseExpenses`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get93(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/purchaseExpenses${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get94
   * @description Corresponds to `GET /services/purchaseInvoices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get94(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/purchaseInvoices${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get95
   * @description Corresponds to `GET /services/purchaseOrders`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get95(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/purchaseOrders${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get96
   * @description Corresponds to `GET /services/purchasePromotions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get96(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchasePromotions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get97
   * @description Corresponds to `GET /services/purchaseProposalContracts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get97(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchaseProposalContracts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get98
   * @description Corresponds to `GET /services/purchaseProposalOffers`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get98(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchaseProposalOffers${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get99
   * @description Corresponds to `GET /services/purchaseProposalOrders`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get99(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/purchaseProposalOrders${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get100
   * @description Corresponds to `GET /services/QCCriteriaAssignments`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get100(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/QCCriteriaAssignments${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get101
   * @description Corresponds to `GET /services/QCCriteriaSets`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get101(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/QCCriteriaSets${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get102
   * @description Corresponds to `GET /services/queries`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get102(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/queries${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get103
   * @description Corresponds to `GET /services/quickProductionSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get103(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/quickProductionSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get104
   * @description Corresponds to `GET /services/repaymentPlans`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get104(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/repaymentPlans${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get105
   * @description Corresponds to `GET /services/safeDeposits`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get105(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/safeDeposits${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get106
   * @description Corresponds to `GET /services/safeDepositSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get106(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/safeDepositSlips${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get107
   * @description Corresponds to `GET /services/salesActivities`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get107(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesActivities${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get108
   * @description Corresponds to `GET /services/salesCampaigns`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get108(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesCampaigns${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get109
   * @description Corresponds to `GET /services/salesCategories`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get109(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesCategories${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get110
   * @description Corresponds to `GET /services/salesConditionsForSlipLines`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get110(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/salesConditionsForSlipLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get111
   * @description Corresponds to `GET /services/salesConditionsForSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get111(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/salesConditionsForSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get112
   * @description Corresponds to `GET /services/salesContracts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get112(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesContracts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get113
   * @description Corresponds to `GET /services/salesDiscounts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get113(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesDiscounts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get114
   * @description Corresponds to `GET /services/salesDispatches`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get114(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesDispatches${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get115
   * @description Corresponds to `GET /services/salesExpenses`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get115(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesExpenses${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get116
   * @description Corresponds to `GET /services/salesInvoices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get116(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesInvoices${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get117
   * @description Corresponds to `GET /services/salesItemPrices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get117(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesItemPrices${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get118
   * @description Corresponds to `GET /services/salesmanDestinations`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get118(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/salesmanDestinations${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get119
   * @description Corresponds to `GET /services/salesmanPositionCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get119(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/salesmanPositionCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get120
   * @description Corresponds to `GET /services/salesmanRoutes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get120(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesmanRoutes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get121
   * @description Corresponds to `GET /services/salesmen`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get121(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesmen${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get122
   * @description Corresponds to `GET /services/salesOffers`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get122(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesOffers${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get123
   * @description Corresponds to `GET /services/salesOrders`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get123(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesOrders${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get124
   * @description Corresponds to `GET /services/salesPromotions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get124(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/salesPromotions${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get125
   * @description Corresponds to `GET /services/salesProvisionDistributionSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get125(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/salesProvisionDistributionSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get126
   * @description Corresponds to `GET /services/salesServicePrices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get126(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/salesServicePrices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get127
   * @description Corresponds to `GET /services/serialAndLotNumbers`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get127(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/serialAndLotNumbers${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getV1
   * @description Corresponds to `GET /services/describe`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<ResourceApiRepository>} A promise resolving to the response.
   */
  async getV1(options?: ServicesQueryOptions): Promise<ResourceApiRepository> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/describe${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get128
   * @description Corresponds to `GET /services/help`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get128(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/help${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get129
   * @description Corresponds to `GET /services/shiftAssignments`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get129(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/shiftAssignments${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get130
   * @description Corresponds to `GET /services/shifts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get130(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/shifts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get131
   * @description Corresponds to `GET /services/soldServices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get131(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/soldServices${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get132
   * @description Corresponds to `GET /services/specialCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get132(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/specialCodes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get133
   * @description Corresponds to `GET /services/standardCostPeriods`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get133(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/standardCostPeriods${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get134
   * @description Corresponds to `GET /services/stopCauses`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get134(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/stopCauses${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method sys_GetServiceSwagger
   * @description Corresponds to `GET /services/sys`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async sys_GetServiceSwagger(options?: ServicesQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/sys${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get135
   * @description Corresponds to `GET /services/towns`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get135(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/towns${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method transaction_V1_GetServiceSwagger
   * @description Corresponds to `GET /services/transaction`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async transaction_V1_GetServiceSwagger(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/transaction${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get136
   * @description Corresponds to `GET /services/unitSets`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get136(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/unitSets${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get137
   * @description Corresponds to `GET /services/variants`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get137(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/variants${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get138
   * @description Corresponds to `GET /services/vehicles`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get138(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/vehicles${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get139
   * @description Corresponds to `GET /services/workflowDefinitions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get139(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/workflowDefinitions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get140
   * @description Corresponds to `GET /services/workflowRoles`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get140(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/workflowRoles${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get141
   * @description Corresponds to `GET /services/workstationCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get141(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/workstationCosts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get142
   * @description Corresponds to `GET /services/workstationGroups`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get142(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/workstationGroups${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getServiceSwaggerV1Get143
   * @description Corresponds to `GET /services/workstations`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get143(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/services/workstations${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method getServiceSwaggerV1Get144
   * @description Corresponds to `GET /services/workstationStandardCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async getServiceSwaggerV1Get144(
    options?: ServicesQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/services/workstationStandardCosts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getAnalytics
   * @description Retrieves analytics data for `Services` entities.
   * @returns {Promise<ServicesAnalytics>} A promise that resolves to the analytics data.
   *
   * @example
   * // Retrieves analytics for Services
   * const analytics = await client.services.getAnalytics();
   */
  async getAnalytics(): Promise<ServicesAnalytics> {
    const count = await this.getCount();
    return {
      total: count,
      // Add more analytics as needed
    };
  }

  /**
   * @method getCount
   * @description Retrieves the total count of `Services` entities.
   * @returns {Promise<number>} A promise that resolves to the total count.
   *
   * @example
   * // Retrieves the total count of Services
   * const count = await client.services.getCount();
   */
  async getCount(): Promise<number> {
    const response = await this.getAll({ count: true });
    return response.totalCount || 0;
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Services` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Services
   * const columns = await client.services.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Services` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Services
   * await client.services.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Services` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Services
   * await client.services.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Services` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Services
   * const isTracking = await client.services.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }

  /**
   * @method buildSearchQuery
   * @private
   * @description Builds a search query string from a criteria object.
   * @param {ServicesSearchCriteria} criteria - The search criteria.
   * @returns {string | undefined} The OData query string, or `undefined` if no criteria are provided.
   */
  private buildSearchQuery(criteria: ServicesSearchCriteria): string | undefined {
    return buildSearchQuery(criteria);
  }
}
