/**
 * @module Definitions
 */

import { BaseApiClient } from '../base';
import { ApiClientConfig } from '../../types';
import { DefinitionsQueryOptions } from './types';

/**
 * @class DefinitionsClient
 * @extends BaseApiClient
 * @description
 * The `DefinitionsClient` provides an interface for interacting with the `Definitions` entities of the Logo Objects API.
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
 * @category Swagger Dokümantasyonu
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
 * @category Vardiya Atamaları
 * @category Vardiyalar
 * @category Verilen Hizmet Kartları
 * @category Özel Kodları
 * @category Standart Maliyet Periyodları
 * @category Durma Nedenleri
 * @category İlçe Bilgileri
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
export class DefinitionsClient extends BaseApiClient {
  private readonly endpoint = '/definitions';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method describeV1
   * @description Corresponds to `GET /definitions/additionalTaxes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/additionalTaxes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get
   * @description Corresponds to `GET /definitions/ArpGroupAssignments`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/ArpGroupAssignments${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get2
   * @description Corresponds to `GET /definitions/ArpMLDescriptons`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get2(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/ArpMLDescriptons${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get3
   * @description Corresponds to `GET /definitions/Arps`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get3(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/Arps${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get4
   * @description Corresponds to `GET /definitions/ArpShipmentLocations`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get4(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/ArpShipmentLocations${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get5
   * @description Corresponds to `GET /definitions/ArpSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get5(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/ArpSlips${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get6
   * @description Corresponds to `GET /definitions/authorizationCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get6(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/authorizationCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get7
   * @description Corresponds to `GET /definitions/bankAccounts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get7(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/bankAccounts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get8
   * @description Corresponds to `GET /definitions/bankCredits`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get8(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/bankCredits${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get9
   * @description Corresponds to `GET /definitions/bankMLDescriptions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get9(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/bankMLDescriptions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get10
   * @description Corresponds to `GET /definitions/banks`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get10(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/banks${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get11
   * @description Corresponds to `GET /definitions/bankSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get11(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/bankSlips${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get12
   * @description Corresponds to `GET /definitions/Boms`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get12(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/Boms${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get13
   * @description Corresponds to `GET /definitions/BomStandardCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get13(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/BomStandardCosts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get14
   * @description Corresponds to `GET /definitions/characteristics`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get14(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/characteristics${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get15
   * @description Corresponds to `GET /definitions/characteristicSets`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get15(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/characteristicSets${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get16
   * @description Corresponds to `GET /definitions/chequeAndPnoteRolls`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get16(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/chequeAndPnoteRolls${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get17
   * @description Corresponds to `GET /definitions/chequeAndPnotes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get17(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/chequeAndPnotes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get18
   * @description Corresponds to `GET /definitions/cities`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get18(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/cities${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get19
   * @description Corresponds to `GET /definitions/collateralRolls`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get19(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/collateralRolls${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get20
   * @description Corresponds to `GET /definitions/contacts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get20(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/contacts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get21
   * @description Corresponds to `GET /definitions/costDistributionSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get21(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/costDistributionSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get22
   * @description Corresponds to `GET /definitions/countries`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get22(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/countries${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get23
   * @description Corresponds to `GET /definitions/customerMLDescriptions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get23(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/customerMLDescriptions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get24
   * @description Corresponds to `GET /definitions/customers`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get24(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/customers${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get25
   * @description Corresponds to `GET /definitions/customersOfSalesmen`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get25(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/customersOfSalesmen${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get26
   * @description Corresponds to `GET /definitions/customsOffices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get26(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/customsOffices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get27
   * @description Corresponds to `GET /definitions/deliveryCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get27(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/deliveryCodes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get28
   * @description Corresponds to `GET /definitions/demandPeggings`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get28(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/demandPeggings${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get29
   * @description Corresponds to `GET /definitions/demandSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get29(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/demandSlips${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get30
   * @description Corresponds to `GET /definitions/distributionOrders`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get30(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/distributionOrders${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get31
   * @description Corresponds to `GET /definitions/distributionRoutes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get31(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/distributionRoutes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get32
   * @description Corresponds to `GET /definitions/distributionTemplates`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get32(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/distributionTemplates${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get33
   * @description Corresponds to `GET /definitions/districts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get33(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/districts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get34
   * @description Corresponds to `GET /definitions/employeeCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get34(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/employeeCosts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get35
   * @description Corresponds to `GET /definitions/employeeGroups`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get35(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/employeeGroups${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get36
   * @description Corresponds to `GET /definitions/employees`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get36(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/employees${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get37
   * @description Corresponds to `GET /definitions/employeeStandardCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get37(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/employeeStandardCosts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get38
   * @description Corresponds to `GET /definitions/engineeringChanges`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get38(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/engineeringChanges${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get39
   * @description Corresponds to `GET /definitions/exportCreditLetters`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get39(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/exportCreditLetters${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get40
   * @description Corresponds to `GET /definitions/exportCredits`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get40(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/exportCredits${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get41
   * @description Corresponds to `GET /definitions/exportMovementSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get41(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/exportMovementSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get42
   * @description Corresponds to `GET /definitions/exportNationalizationSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get42(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/exportNationalizationSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get43
   * @description Corresponds to `GET /definitions/exportOperationSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get43(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/exportOperationSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get44
   * @description Corresponds to `GET /definitions/exportTypedPurchaseInvoices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get44(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/exportTypedPurchaseInvoices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get45
   * @description Corresponds to `GET /definitions/exportTypedSalesInvoices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get45(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/exportTypedSalesInvoices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get46
   * @description Corresponds to `GET /definitions/extendedFieldCategories`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get46(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/extendedFieldCategories${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get47
   * @description Corresponds to `GET /definitions/extendedFieldDefinitions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get47(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/extendedFieldDefinitions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get48
   * @description Corresponds to `GET /definitions/extendedFields`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get48(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/extendedFields${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get49
   * @description Corresponds to `GET /definitions/FAAssignmentSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get49(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/FAAssignmentSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get50
   * @description Corresponds to `GET /definitions/FARegistries`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get50(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/FARegistries${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get51
   * @description Corresponds to `GET /definitions/freeZones`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get51(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/freeZones${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get52
   * @description Corresponds to `GET /definitions/GLAccountMLDescriptions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get52(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/GLAccountMLDescriptions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get53
   * @description Corresponds to `GET /definitions/GLAccounts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get53(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/GLAccounts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get54
   * @description Corresponds to `GET /definitions/GLSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get54(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/GLSlips${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get55
   * @description Corresponds to `GET /definitions/groupCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get55(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/groupCodes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get56
   * @description Corresponds to `GET /definitions/importCreditLetters`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get56(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/importCreditLetters${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get57
   * @description Corresponds to `GET /definitions/importDistributionSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get57(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/importDistributionSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get58
   * @description Corresponds to `GET /definitions/importOperationSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get58(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/importOperationSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get59
   * @description Corresponds to `GET /definitions/inwardProcessingPermits`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get59(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/inwardProcessingPermits${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get60
   * @description Corresponds to `GET /definitions/itemAlternatives`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get60(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/itemAlternatives${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get61
   * @description Corresponds to `GET /definitions/itemBoms`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get61(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/itemBoms${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get62
   * @description Corresponds to `GET /definitions/itemBrands`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get62(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/itemBrands${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get63
   * @description Corresponds to `GET /definitions/itemCharacteristics`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get63(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/itemCharacteristics${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get64
   * @description Corresponds to `GET /definitions/itemClassAssignments`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get64(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/itemClassAssignments${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get65
   * @description Corresponds to `GET /definitions/itemMLDescriptions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get65(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/itemMLDescriptions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get66
   * @description Corresponds to `GET /definitions/items`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get66(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/items${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get67
   * @description Corresponds to `GET /definitions/itemSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get67(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/itemSlips${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get68
   * @description Corresponds to `GET /definitions/itemStandardCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get68(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/itemStandardCosts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get69
   * @description Corresponds to `GET /definitions/locationCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get69(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/locationCodes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtDatasDescribeV1
   * @description Corresponds to `GET /definitions/MT_Datas`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtDatasDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Datas${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtCapiDescribeV1
   * @description Corresponds to `GET /definitions/MT_CAPI`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtCapiDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_CAPI${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtFirmsDescribeV1
   * @description Corresponds to `GET /definitions/MT_Firms`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtFirmsDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Firms${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtUsersDescribeV1
   * @description Corresponds to `GET /definitions/MT_Users`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtUsersDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Users${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtTerminalsDescribeV1
   * @description Corresponds to `GET /definitions/MT_Terminals`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtTerminalsDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Terminals${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtCurrenciesDescribeV1
   * @description Corresponds to `GET /definitions/MT_Currencies`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtCurrenciesDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Currencies${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtRolesDescribeV1
   * @description Corresponds to `GET /definitions/MT_Roles`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtRolesDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Roles${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtFirmparametersDescribeV1
   * @description Corresponds to `GET /definitions/MT_FirmParameters`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtFirmparametersDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_FirmParameters${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtTradegroupsDescribeV1
   * @description Corresponds to `GET /definitions/MT_TradeGroups`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtTradegroupsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_TradeGroups${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtErpapplicationDescribeV1
   * @description Corresponds to `GET /definitions/MT_ERPApplication`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtErpapplicationDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_ERPApplication${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtDataDescribeV1
   * @description Corresponds to `GET /definitions/MT_Data`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtDataDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Data${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtFirmDescribeV1
   * @description Corresponds to `GET /definitions/MT_Firm`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtFirmDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Firm${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtUserDescribeV1
   * @description Corresponds to `GET /definitions/MT_User`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtUserDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_User${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtTerminalDescribeV1
   * @description Corresponds to `GET /definitions/MT_Terminal`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtTerminalDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Terminal${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtCurrencyDescribeV1
   * @description Corresponds to `GET /definitions/MT_Currency`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtCurrencyDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Currency${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtRoleDescribeV1
   * @description Corresponds to `GET /definitions/MT_Role`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtRoleDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Role${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtTradegroupDescribeV1
   * @description Corresponds to `GET /definitions/MT_TradeGroup`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtTradegroupDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_TradeGroup${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtDatafieldsDescribeV1
   * @description Corresponds to `GET /definitions/MT_DataFields`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtDatafieldsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_DataFields${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtDataobjecttypeDescribeV1
   * @description Corresponds to `GET /definitions/MT_DataObjectType`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtDataobjecttypeDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_DataObjectType${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtValidateerrorsDescribeV1
   * @description Corresponds to `GET /definitions/MT_ValidateErrors`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtValidateerrorsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_ValidateErrors${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtDataextensionsDescribeV1
   * @description Corresponds to `GET /definitions/MT_DataExtensions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtDataextensionsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_DataExtensions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtDepartmentsDescribeV1
   * @description Corresponds to `GET /definitions/MT_Departments`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtDepartmentsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_Departments${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtDivisionsDescribeV1
   * @description Corresponds to `GET /definitions/MT_Divisions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtDivisionsDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Divisions${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtWarehousesDescribeV1
   * @description Corresponds to `GET /definitions/MT_WareHouses`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtWarehousesDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_WareHouses${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtFactoriesDescribeV1
   * @description Corresponds to `GET /definitions/MT_Factories`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtFactoriesDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Factories${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtPeriodsDescribeV1
   * @description Corresponds to `GET /definitions/MT_Periods`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtPeriodsDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Periods${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtObjectsDescribeV1
   * @description Corresponds to `GET /definitions/MT_Objects`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtObjectsDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Objects${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtDatafieldDescribeV1
   * @description Corresponds to `GET /definitions/MT_DataField`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtDatafieldDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_DataField${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtValidateerrorDescribeV1
   * @description Corresponds to `GET /definitions/MT_ValidateError`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtValidateerrorDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_ValidateError${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtDataextensionDescribeV1
   * @description Corresponds to `GET /definitions/MT_DataExtension`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtDataextensionDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_DataExtension${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtDepartmentDescribeV1
   * @description Corresponds to `GET /definitions/MT_Department`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtDepartmentDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Department${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtDivisionDescribeV1
   * @description Corresponds to `GET /definitions/MT_Division`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtDivisionDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Division${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtWarehouseDescribeV1
   * @description Corresponds to `GET /definitions/MT_WareHouse`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtWarehouseDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_WareHouse${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtFactoryDescribeV1
   * @description Corresponds to `GET /definitions/MT_Factory`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtFactoryDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Factory${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtPeriodDescribeV1
   * @description Corresponds to `GET /definitions/MT_Period`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtPeriodDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Period${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtObjitemDescribeV1
   * @description Corresponds to `GET /definitions/MT_ObjItem`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtObjitemDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_ObjItem${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtFieldtypeDescribeV1
   * @description Corresponds to `GET /definitions/MT_FieldType`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtFieldtypeDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_FieldType${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtLinesDescribeV1
   * @description Corresponds to `GET /definitions/MT_Lines`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtLinesDescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/MT_Lines${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method mtExtensionfieldsDescribeV1
   * @description Corresponds to `GET /definitions/MT_ExtensionFields`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtExtensionfieldsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_ExtensionFields${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtFactorydivisionsDescribeV1
   * @description Corresponds to `GET /definitions/MT_FactoryDivisions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtFactorydivisionsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_FactoryDivisions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtExtensionfieldDescribeV1
   * @description Corresponds to `GET /definitions/MT_ExtensionField`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtExtensionfieldDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_ExtensionField${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method mtFactorydivisionDescribeV1
   * @description Corresponds to `GET /definitions/MT_FactoryDivision`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async mtFactorydivisionDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/MT_FactoryDivision${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method resultData_DescribeV1
   * @description Corresponds to `GET /definitions/ResultData`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async resultData_DescribeV1(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/ResultData${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method resourceApiRepository_DescribeV1
   * @description Corresponds to `GET /definitions/ResourceApiRepository`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async resourceApiRepository_DescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/ResourceApiRepository${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get70
   * @description Corresponds to `GET /definitions/operations`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get70(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/operations${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get71
   * @description Corresponds to `GET /definitions/opportunities`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get71(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/opportunities${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get72
   * @description Corresponds to `GET /definitions/overheadAccounts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get72(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/overheadAccounts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get73
   * @description Corresponds to `GET /definitions/paymentDifferenceInvoices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get73(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/paymentDifferenceInvoices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get74
   * @description Corresponds to `GET /definitions/paymentPlanGroupCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get74(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/paymentPlanGroupCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get75
   * @description Corresponds to `GET /definitions/paymentPlans`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get75(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/paymentPlans${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get76
   * @description Corresponds to `GET /definitions/postCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get76(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/postCodes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get77
   * @description Corresponds to `GET /definitions/productionExceptions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get77(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/productionExceptions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get78
   * @description Corresponds to `GET /definitions/productionLines`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get78(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/productionLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get79
   * @description Corresponds to `GET /definitions/productionParameters`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get79(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/productionParameters${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get80
   * @description Corresponds to `GET /definitions/productionResourceUtilization`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get80(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/productionResourceUtilization${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get81
   * @description Corresponds to `GET /definitions/productionRoutes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get81(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/productionRoutes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method ptQuickprodslipreflistsDescribeV1
   * @description Corresponds to `GET /definitions/PT_QuickProdSlipRefLists`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async ptQuickprodslipreflistsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/PT_QuickProdSlipRefLists${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method ptRealizedslipsDescribeV1
   * @description Corresponds to `GET /definitions/PT_RealizedSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async ptRealizedslipsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/PT_RealizedSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method ptProdparamsDescribeV1
   * @description Corresponds to `GET /definitions/PT_ProdParams`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async ptProdparamsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/PT_ProdParams${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method ptMeettypelistDescribeV1
   * @description Corresponds to `GET /definitions/PT_MeetTypeList`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async ptMeettypelistDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/PT_MeetTypeList${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method ptPrditmclslinesDescribeV1
   * @description Corresponds to `GET /definitions/PT_PrdItmClsLines`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async ptPrditmclslinesDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/PT_PrdItmClsLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method ptPrddisplinesDescribeV1
   * @description Corresponds to `GET /definitions/PT_PrdDispLines`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async ptPrddisplinesDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/PT_PrdDispLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method ptFastrealizeslipreflistsDescribeV1
   * @description Corresponds to `GET /definitions/PT_FastRealizeSlipRefLists`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async ptFastrealizeslipreflistsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/PT_FastRealizeSlipRefLists${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method ptWorkordlistsDescribeV1
   * @description Corresponds to `GET /definitions/PT_WorkOrdLists`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async ptWorkordlistsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/PT_WorkOrdLists${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method ptProdplnrltnlistsDescribeV1
   * @description Corresponds to `GET /definitions/PT_ProdPlnRltnLists`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async ptProdplnrltnlistsDescribeV1(
    options?: DefinitionsQueryOptions
  ): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/PT_ProdPlnRltnLists${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get82
   * @description Corresponds to `GET /definitions/projects`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get82(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/projects${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get83
   * @description Corresponds to `GET /definitions/purchaseCampaigns`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get83(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchaseCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get84
   * @description Corresponds to `GET /definitions/purchaseConditionsForSlipLines`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get84(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchaseConditionsForSlipLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get85
   * @description Corresponds to `GET /definitions/purchaseConditionsForSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get85(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchaseConditionsForSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get86
   * @description Corresponds to `GET /definitions/purchasedItemPrices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get86(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchasedItemPrices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get87
   * @description Corresponds to `GET /definitions/purchaseDiscounts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get87(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchaseDiscounts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get88
   * @description Corresponds to `GET /definitions/purchaseDispatches`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get88(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchaseDispatches${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get89
   * @description Corresponds to `GET /definitions/purchasedServicePrices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get89(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchasedServicePrices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get90
   * @description Corresponds to `GET /definitions/purchasedServices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get90(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchasedServices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get91
   * @description Corresponds to `GET /definitions/purchaseExpenses`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get91(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchaseExpenses${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get92
   * @description Corresponds to `GET /definitions/purchaseInvoices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get92(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchaseInvoices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get93
   * @description Corresponds to `GET /definitions/purchaseOrders`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get93(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchaseOrders${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get94
   * @description Corresponds to `GET /definitions/purchasePromotions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get94(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchasePromotions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get95
   * @description Corresponds to `GET /definitions/purchaseProposalContracts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get95(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchaseProposalContracts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get96
   * @description Corresponds to `GET /definitions/purchaseProposalOffers`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get96(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchaseProposalOffers${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get97
   * @description Corresponds to `GET /definitions/purchaseProposalOrders`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get97(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/purchaseProposalOrders${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get98
   * @description Corresponds to `GET /definitions/QCCriteriaAssignments`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get98(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/QCCriteriaAssignments${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get99
   * @description Corresponds to `GET /definitions/QCCriteriaSets`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get99(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/QCCriteriaSets${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get100
   * @description Corresponds to `GET /definitions/quickProductionSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get100(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/quickProductionSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get101
   * @description Corresponds to `GET /definitions/repaymentPlans`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get101(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/repaymentPlans${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get102
   * @description Corresponds to `GET /definitions/safeDeposits`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get102(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/safeDeposits${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get103
   * @description Corresponds to `GET /definitions/safeDepositSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get103(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/safeDepositSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get104
   * @description Corresponds to `GET /definitions/salesActivities`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get104(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesActivities${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get105
   * @description Corresponds to `GET /definitions/salesCampaigns`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get105(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesCampaigns${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get106
   * @description Corresponds to `GET /definitions/salesCategories`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get106(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesCategories${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get107
   * @description Corresponds to `GET /definitions/salesConditionsForSlipLines`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get107(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesConditionsForSlipLines${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get108
   * @description Corresponds to `GET /definitions/salesConditionsForSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get108(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesConditionsForSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get109
   * @description Corresponds to `GET /definitions/salesContracts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get109(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesContracts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get110
   * @description Corresponds to `GET /definitions/salesDiscounts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get110(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesDiscounts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get111
   * @description Corresponds to `GET /definitions/salesDispatches`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get111(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesDispatches${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get112
   * @description Corresponds to `GET /definitions/salesExpenses`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get112(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/salesExpenses${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get113
   * @description Corresponds to `GET /definitions/salesInvoices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get113(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/salesInvoices${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get114
   * @description Corresponds to `GET /definitions/salesItemPrices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get114(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesItemPrices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get115
   * @description Corresponds to `GET /definitions/salesmanDestinations`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get115(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesmanDestinations${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get116
   * @description Corresponds to `GET /definitions/salesmanPositionCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get116(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesmanPositionCodes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get117
   * @description Corresponds to `GET /definitions/salesmanRoutes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get117(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesmanRoutes${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get118
   * @description Corresponds to `GET /definitions/salesmen`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get118(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/salesmen${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get119
   * @description Corresponds to `GET /definitions/salesOffers`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get119(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/salesOffers${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get120
   * @description Corresponds to `GET /definitions/salesOrders`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get120(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/salesOrders${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get121
   * @description Corresponds to `GET /definitions/salesPromotions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get121(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesPromotions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get122
   * @description Corresponds to `GET /definitions/salesProvisionDistributionSlips`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get122(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesProvisionDistributionSlips${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get123
   * @description Corresponds to `GET /definitions/salesServicePrices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get123(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/salesServicePrices${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get124
   * @description Corresponds to `GET /definitions/serialAndLotNumbers`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get124(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/serialAndLotNumbers${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get125
   * @description Corresponds to `GET /definitions/shiftAssignments`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get125(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/shiftAssignments${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get126
   * @description Corresponds to `GET /definitions/shifts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get126(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/shifts${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get127
   * @description Corresponds to `GET /definitions/soldServices`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get127(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/soldServices${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get128
   * @description Corresponds to `GET /definitions/specialCodes`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get128(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/specialCodes${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get129
   * @description Corresponds to `GET /definitions/standardCostPeriods`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get129(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/standardCostPeriods${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get130
   * @description Corresponds to `GET /definitions/stopCauses`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get130(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/stopCauses${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get131
   * @description Corresponds to `GET /definitions/towns`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get131(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/towns${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get132
   * @description Corresponds to `GET /definitions/unitSets`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get132(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/unitSets${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get133
   * @description Corresponds to `GET /definitions/variants`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get133(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/variants${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get134
   * @description Corresponds to `GET /definitions/vehicles`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get134(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/vehicles${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get135
   * @description Corresponds to `GET /definitions/workflowDefinitions`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get135(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/workflowDefinitions${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get136
   * @description Corresponds to `GET /definitions/workflowRoles`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get136(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/workflowRoles${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get137
   * @description Corresponds to `GET /definitions/workstationCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get137(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/workstationCosts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get138
   * @description Corresponds to `GET /definitions/workstationGroups`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get138(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/workstationGroups${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method describeV1Get139
   * @description Corresponds to `GET /definitions/workstations`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get139(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request('get', `/definitions/workstations${queryString ? `?${queryString}` : ''}`);
  }

  /**
   * @method describeV1Get140
   * @description Corresponds to `GET /definitions/workstationStandardCosts`
   * @param {QueryOptions} [options] - Optional query parameters.
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async describeV1Get140(options?: DefinitionsQueryOptions): Promise<Record<string, unknown>> {
    const queryString = options ? this.buildQueryString(options) : '';
    return this.request(
      'get',
      `/definitions/workstationStandardCosts${queryString ? `?${queryString}` : ''}`
    );
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Definitions` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Definitions
   * const columns = await client.definitions.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Definitions` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Definitions
   * await client.definitions.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Definitions` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Definitions
   * await client.definitions.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Definitions` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Definitions
   * const isTracking = await client.definitions.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }
}
