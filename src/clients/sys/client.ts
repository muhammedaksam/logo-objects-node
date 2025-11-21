/**
 * @module Sys
 */

import { BaseApiClient } from '../base';
import { ApiClientConfig } from '../../types';
import { CapiModel, ActiveSession, HealthCheck } from './types';

/**
 * @class SysClient
 * @extends BaseApiClient
 * @description
 * The `SysClient` provides an interface for interacting with the `Sys` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category IDM Kullanım Durumu
 * @category Firmalar
 * @category Firma Tanımlama Sihirbazı
 * @category Kullanıcılar
 * @category Kullanıcı Tanımlama
 * @category Sistem
 * @category Aktif Hesaplar
 */
export class SysClient extends BaseApiClient {
  private readonly endpoint = '/sys';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method sys_IdmEnabled
   * @description Corresponds to `GET /sys/IdmEnabled/{cfgName}`
   * @param {string} cfgName - cfgName
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async sys_IdmEnabled(cfgName: string): Promise<boolean> {
    return this.request('get', `/sys/IdmEnabled/${cfgName}`);
  }

  /**
   * @method sys_UpdateTenant
   * @description Corresponds to `POST /sys/UpdateTenant/{version}/{dbVersion}`
   * @param {string} version - version
   * @param {string} dbVersion - dbVersion
   * @param {CapiModel} data - The request body.
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async sys_UpdateTenant(version: string, dbVersion: string, data: CapiModel): Promise<boolean> {
    return this.request('post', `/sys/UpdateTenant/${version}/${dbVersion}`, data);
  }

  /**
   * @method sys_CreateTenant
   * @description Corresponds to `POST /sys/CreateTenant`
   * @param {CapiModel} data - The request body.
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async sys_CreateTenant(data: CapiModel): Promise<boolean> {
    return this.request('post', `/sys/CreateTenant`, data);
  }

  /**
   * @method sys_CreateUser
   * @description Corresponds to `POST /sys/CreateUser`
   * @param {CapiModel} data - The request body.
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async sys_CreateUser(data: CapiModel): Promise<boolean> {
    return this.request('post', `/sys/CreateUser`, data);
  }

  /**
   * @method sys_GetActiveState
   * @description Corresponds to `GET /sys/activestate`
   * @returns {Promise<ActiveSession[]>} A promise resolving to the response.
   */
  async sys_GetActiveState(): Promise<ActiveSession[]> {
    return this.request('get', `/sys/activestate`);
  }

  /**
   * @method sys_healthcheck
   * @description Corresponds to `GET /sys/healthcheck`
   * @returns {Promise<unknown>} A promise resolving to the response.
   */
  async sys_healthcheck(): Promise<unknown> {
    return this.request('get', `/sys/healthcheck`);
  }

  /**
   * @method sys_healthcheckGet
   * @description Corresponds to `GET /sys/servicehealthcheck`
   * @returns {Promise<HealthCheck>} A promise resolving to the response.
   */
  async sys_healthcheckGet(): Promise<HealthCheck> {
    return this.request('get', `/sys/servicehealthcheck`);
  }

  /**
   * @method sys_healthcheckerror
   * @description Corresponds to `GET /sys/healthcheckerror`
   * @returns {Promise<Record<string, unknown>>} A promise resolving to the response.
   */
  async sys_healthcheckerror(): Promise<Record<string, unknown>> {
    return this.request('get', `/sys/healthcheckerror`);
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Sys` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Sys
   * const columns = await client.sys.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Sys` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Sys
   * await client.sys.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Sys` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Sys
   * await client.sys.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Sys` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Sys
   * const isTracking = await client.sys.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }
}
