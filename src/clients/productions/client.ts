/**
 * @module Productions
 */

import { BaseApiClient } from '../base';
import { ApiClientConfig } from '../../types';
import {
  PtPrditmclslines,
  KeyValueParameter,
  PtFastrealizeslipreflists,
  PtPrddisplines,
  PtWorkordlists,
  PtProdplnrltnlists,
  PtQuickprodslipreflists,
  PtRealizedslips,
  PtProdparams,
  PtMeettypelist,
} from './types';

/**
 * @class ProductionsClient
 * @extends BaseApiClient
 * @description
 * The `ProductionsClient` provides an interface for interacting with the `Productions` entities of the Logo Objects API.
 * This client includes methods for all common CRUD operations, as well as specialized methods for searching and analytics.
 *
 * @see {@link https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253Dc870583a-5e52-44e0-a311-a575a18a6088%2526link%253Df3c988fb-cd15-4596-ba1d-0b78376a530e%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue|Logo Objects REST Service} for more details.
 *
 * @category Unity Method
 */
export class ProductionsClient extends BaseApiClient {
  private readonly endpoint = '/productions';

  /**
   * @constructor
   * @param {ApiClientConfig} config - The configuration for the API client.
   */
  constructor(config: ApiClientConfig) {
    super(config);
  }

  /**
   * @method prodOrderAutomaticRealizeV1
   * @description Corresponds to `GET /productions/ProdOrderAutomaticRealize/{_ProdOrderRef}/{_RealizedPerc}`
   * @param {number} ProdOrderRef - _ProdOrderRef
   * @param {number} RealizedPerc - _RealizedPerc
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async prodOrderAutomaticRealizeV1(ProdOrderRef: number, RealizedPerc: number): Promise<number> {
    return this.request(
      'get',
      `/productions/ProdOrderAutomaticRealize/${ProdOrderRef}/${RealizedPerc}`
    );
  }

  /**
   * @method prodOrderAutomaticGenerateV1
   * @description Corresponds to `POST /productions/ProdOrderAutomaticGenerate/{_ItemRef}/{_BOMRef}/{_RevRef}/{_targetDate}/{_FactoryNr}/{_PlnAmount}/{_ficheDate}/{_ficheNo}/{_uomR}/{_doPlnReserve}/{_doSLPlnReserve}`
   * @param {number} ItemRef - _ItemRef
   * @param {number} BOMRef - _BOMRef
   * @param {number} RevRef - _RevRef
   * @param {string} targetDate - _targetDate
   * @param {number} FactoryNr - _FactoryNr
   * @param {number} PlnAmount - _PlnAmount
   * @param {string} ficheDate - _ficheDate
   * @param {string} ficheNo - _ficheNo
   * @param {number} uomR - _uomR
   * @param {boolean} doPlnReserve - _doPlnReserve
   * @param {boolean} doSLPlnReserve - _doSLPlnReserve
   * @param {PtPrditmclslines} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async prodOrderAutomaticGenerateV1(
    ItemRef: number,
    BOMRef: number,
    RevRef: number,
    targetDate: string,
    FactoryNr: number,
    PlnAmount: number,
    ficheDate: string,
    ficheNo: string,
    uomR: number,
    doPlnReserve: boolean,
    doSLPlnReserve: boolean,
    data: PtPrditmclslines
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productions/ProdOrderAutomaticGenerate/${ItemRef}/${BOMRef}/${RevRef}/${targetDate}/${FactoryNr}/${PlnAmount}/${ficheDate}/${ficheNo}/${uomR}/${doPlnReserve}/${doSLPlnReserve}`,
      data
    );
  }

  /**
   * @method newPrdItmClsLinesV1
   * @description Corresponds to `GET /productions/NewPrdItmClsLines`
   * @returns {Promise<PtPrditmclslines>} A promise resolving to the response.
   */
  async newPrdItmClsLinesV1(): Promise<PtPrditmclslines> {
    return this.request('get', `/productions/NewPrdItmClsLines`);
  }

  /**
   * @method getLastErrorV1
   * @description Corresponds to `GET /productions/GetLastError`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async getLastErrorV1(): Promise<number> {
    return this.request('get', `/productions/GetLastError`);
  }

  /**
   * @method getLastErrorStringV1
   * @description Corresponds to `GET /productions/GetLastErrorString`
   * @returns {Promise<string>} A promise resolving to the response.
   */
  async getLastErrorStringV1(): Promise<string> {
    return this.request('get', `/productions/GetLastErrorString`);
  }

  /**
   * @method fastRealizeFicheGenerateV1
   * @description Corresponds to `GET /productions/FastRealizeFicheGenerate/{_prodOrdRef}/{_ItemRef}/{_prodAmnt}/{_uomRef}/{_method}/{_removeSidePrdct}/{_fcDate}/{_vrntRef}`
   * @param {number} prodOrdRef - _prodOrdRef
   * @param {number} ItemRef - _ItemRef
   * @param {number} prodAmnt - _prodAmnt
   * @param {number} uomRef - _uomRef
   * @param {number} method - _method
   * @param {boolean} removeSidePrdct - _removeSidePrdct
   * @param {string} fcDate - _fcDate
   * @param {number} vrntRef - _vrntRef
   * @param {PtFastrealizeslipreflists} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fastRealizeFicheGenerateV1(
    prodOrdRef: number,
    ItemRef: number,
    prodAmnt: number,
    uomRef: number,
    method: number,
    removeSidePrdct: boolean,
    fcDate: string,
    vrntRef: number,
    data: PtFastrealizeslipreflists
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'get',
      `/productions/FastRealizeFicheGenerate/${prodOrdRef}/${ItemRef}/${prodAmnt}/${uomRef}/${method}/${removeSidePrdct}/${fcDate}/${vrntRef}`,
      data
    );
  }

  /**
   * @method quickProdFicheGenerateV1
   * @description Corresponds to `GET /productions/QuickProdFicheGenerate/{_ItemRef}/{_prodAmnt}`
   * @param {number} ItemRef - _ItemRef
   * @param {number} prodAmnt - _prodAmnt
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async quickProdFicheGenerateV1(ItemRef: number, prodAmnt: number): Promise<boolean> {
    return this.request('get', `/productions/QuickProdFicheGenerate/${ItemRef}/${prodAmnt}`);
  }

  /**
   * @method changePOAndWOStatusV1
   * @description Corresponds to `GET /productions/ChangePOAndWOStatus/{_ficheNo}/{_status}/{_typ}/{_opTrans}/{_delStFc}`
   * @param {string} ficheNo - _ficheNo
   * @param {number} status - _status
   * @param {number} typ - _typ
   * @param {boolean} opTrans - _opTrans
   * @param {number} delStFc - _delStFc
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async changePOAndWOStatusV1(
    ficheNo: string,
    status: number,
    typ: number,
    opTrans: boolean,
    delStFc: number
  ): Promise<boolean> {
    return this.request(
      'get',
      `/productions/ChangePOAndWOStatus/${ficheNo}/${status}/${typ}/${opTrans}/${delStFc}`
    );
  }

  /**
   * @method changeProdOrdBegAndEndPerV1
   * @description Corresponds to `GET /productions/ChangeProdOrdBegAndEndPer/{_ficheNo}/{_ficheType}/{_begDate}/{_begTime}/{_endDate}/{_endTime}/{_dueDate}/{_dueTime}`
   * @param {string} ficheNo - _ficheNo
   * @param {number} ficheType - _ficheType
   * @param {number} begDate - _begDate
   * @param {number} begTime - _begTime
   * @param {number} endDate - _endDate
   * @param {number} endTime - _endTime
   * @param {number} dueDate - _dueDate
   * @param {number} dueTime - _dueTime
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async changeProdOrdBegAndEndPerV1(
    ficheNo: string,
    ficheType: number,
    begDate: number,
    begTime: number,
    endDate: number,
    endTime: number,
    dueDate: number,
    dueTime: number
  ): Promise<boolean> {
    return this.request(
      'get',
      `/productions/ChangeProdOrdBegAndEndPer/${ficheNo}/${ficheType}/${begDate}/${begTime}/${endDate}/${endTime}/${dueDate}/${dueTime}`
    );
  }

  /**
   * @method changeProdOrdPlnAmountV1
   * @description Corresponds to `GET /productions/ChangeProdOrdPlnAmount/{_ficheNo}/{_ficheType}/{_PlnAmount}`
   * @param {string} ficheNo - _ficheNo
   * @param {number} ficheType - _ficheType
   * @param {number} PlnAmount - _PlnAmount
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async changeProdOrdPlnAmountV1(
    ficheNo: string,
    ficheType: number,
    PlnAmount: number
  ): Promise<boolean> {
    return this.request(
      'get',
      `/productions/ChangeProdOrdPlnAmount/${ficheNo}/${ficheType}/${PlnAmount}`
    );
  }

  /**
   * @method changeWSInWorkOrderV1
   * @description Corresponds to `GET /productions/ChangeWSInWorkOrder/{_ficheNo}/{_wStation}`
   * @param {string} ficheNo - _ficheNo
   * @param {string} wStation - _wStation
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async changeWSInWorkOrderV1(ficheNo: string, wStation: string): Promise<boolean> {
    return this.request('get', `/productions/ChangeWSInWorkOrder/${ficheNo}/${wStation}`);
  }

  /**
   * @method newPrdDispLinesV1
   * @description Corresponds to `GET /productions/NewPrdDispLines`
   * @returns {Promise<PtPrddisplines>} A promise resolving to the response.
   */
  async newPrdDispLinesV1(): Promise<PtPrddisplines> {
    return this.request('get', `/productions/NewPrdDispLines`);
  }

  /**
   * @method addDispLinesV1
   * @description Corresponds to `POST /productions/AddDispLines/{_ficheNo}/{_ficheType}`
   * @param {string} ficheNo - _ficheNo
   * @param {number} ficheType - _ficheType
   * @param {PtPrddisplines} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addDispLinesV1(
    ficheNo: string,
    ficheType: number,
    data: PtPrddisplines
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productions/AddDispLines/${ficheNo}/${ficheType}`, data);
  }

  /**
   * @method fastRealizeFicheGenerateForWOrderV1
   * @description Corresponds to `GET /productions/FastRealizeFicheGenerateForWOrder/{_wOrdRef}/{_ItemRef}/{_prodAmnt}/{_uomRef}/{_method}/{_removeSidePrdct}/{_vrntRef}`
   * @param {number} wOrdRef - _wOrdRef
   * @param {number} ItemRef - _ItemRef
   * @param {number} prodAmnt - _prodAmnt
   * @param {number} uomRef - _uomRef
   * @param {number} method - _method
   * @param {boolean} removeSidePrdct - _removeSidePrdct
   * @param {number} vrntRef - _vrntRef
   * @param {PtFastrealizeslipreflists} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fastRealizeFicheGenerateForWOrderV1(
    wOrdRef: number,
    ItemRef: number,
    prodAmnt: number,
    uomRef: number,
    method: number,
    removeSidePrdct: boolean,
    vrntRef: number,
    data: PtFastrealizeslipreflists
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'get',
      `/productions/FastRealizeFicheGenerateForWOrder/${wOrdRef}/${ItemRef}/${prodAmnt}/${uomRef}/${method}/${removeSidePrdct}/${vrntRef}`,
      data
    );
  }

  /**
   * @method newSlipRefListsV1
   * @description Corresponds to `GET /productions/NewSlipRefLists`
   * @returns {Promise<PtFastrealizeslipreflists>} A promise resolving to the response.
   */
  async newSlipRefListsV1(): Promise<PtFastrealizeslipreflists> {
    return this.request('get', `/productions/NewSlipRefLists`);
  }

  /**
   * @method prodOrderAutomaticGenerateWithFicheNoV1
   * @description Corresponds to `POST /productions/ProdOrderAutomaticGenerateWithFicheNo/{_ItemRef}/{_BOMRef}/{_RevRef}/{_targetDate}/{_FactoryNr}/{_PlnAmount}/{_ficheDate}/{_ficheNo}`
   * @param {number} ItemRef - _ItemRef
   * @param {number} BOMRef - _BOMRef
   * @param {number} RevRef - _RevRef
   * @param {string} targetDate - _targetDate
   * @param {number} FactoryNr - _FactoryNr
   * @param {number} PlnAmount - _PlnAmount
   * @param {string} ficheDate - _ficheDate
   * @param {string} ficheNo - _ficheNo
   * @param {PtPrditmclslines} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async prodOrderAutomaticGenerateWithFicheNoV1(
    ItemRef: number,
    BOMRef: number,
    RevRef: number,
    targetDate: string,
    FactoryNr: number,
    PlnAmount: number,
    ficheDate: string,
    ficheNo: string,
    data: PtPrditmclslines
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productions/ProdOrderAutomaticGenerateWithFicheNo/${ItemRef}/${BOMRef}/${RevRef}/${targetDate}/${FactoryNr}/${PlnAmount}/${ficheDate}/${ficheNo}`,
      data
    );
  }

  /**
   * @method newWOLRefListV1
   * @description Corresponds to `GET /productions/NewWOLRefList`
   * @returns {Promise<PtWorkordlists>} A promise resolving to the response.
   */
  async newWOLRefListV1(): Promise<PtWorkordlists> {
    return this.request('get', `/productions/NewWOLRefList`);
  }

  /**
   * @method addStopTransV1
   * @description Corresponds to `GET /productions/AddStopTrans/{_StpCRef}/{_StpDate}/{_ActBegDate}/{_ActEndDate}`
   * @param {number} StpCRef - _StpCRef
   * @param {string} StpDate - _StpDate
   * @param {string} ActBegDate - _ActBegDate
   * @param {string} ActEndDate - _ActEndDate
   * @param {PtWorkordlists} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async addStopTransV1(
    StpCRef: number,
    StpDate: string,
    ActBegDate: string,
    ActEndDate: string,
    data: PtWorkordlists
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'get',
      `/productions/AddStopTrans/${StpCRef}/${StpDate}/${ActBegDate}/${ActEndDate}`,
      data
    );
  }

  /**
   * @method fastRealizeFicheGeneratewithDateV1
   * @description Corresponds to `GET /productions/FastRealizeFicheGeneratewithDate/{_prodOrdRef}/{_ItemRef}/{_prodAmnt}/{_uomRef}/{_method}/{_removeSidePrdct}/{_fcDate}/{_vrntRef}`
   * @param {number} prodOrdRef - _prodOrdRef
   * @param {number} ItemRef - _ItemRef
   * @param {number} prodAmnt - _prodAmnt
   * @param {number} uomRef - _uomRef
   * @param {number} method - _method
   * @param {boolean} removeSidePrdct - _removeSidePrdct
   * @param {string} fcDate - _fcDate
   * @param {number} vrntRef - _vrntRef
   * @param {PtFastrealizeslipreflists} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fastRealizeFicheGeneratewithDateV1(
    prodOrdRef: number,
    ItemRef: number,
    prodAmnt: number,
    uomRef: number,
    method: number,
    removeSidePrdct: boolean,
    fcDate: string,
    vrntRef: number,
    data: PtFastrealizeslipreflists
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'get',
      `/productions/FastRealizeFicheGeneratewithDate/${prodOrdRef}/${ItemRef}/${prodAmnt}/${uomRef}/${method}/${removeSidePrdct}/${fcDate}/${vrntRef}`,
      data
    );
  }

  /**
   * @method newPlnRltnListV1
   * @description Corresponds to `GET /productions/NewPlnRltnList`
   * @returns {Promise<PtProdplnrltnlists>} A promise resolving to the response.
   */
  async newPlnRltnListV1(): Promise<PtProdplnrltnlists> {
    return this.request('get', `/productions/NewPlnRltnList`);
  }

  /**
   * @method prodOrdPlannedRelationsV1
   * @description Corresponds to `POST /productions/ProdOrdPlannedRelations/{_PORef}/{_PegRef}`
   * @param {number} PORef - _PORef
   * @param {number} PegRef - _PegRef
   * @param {PtProdplnrltnlists} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async prodOrdPlannedRelationsV1(
    PORef: number,
    PegRef: number,
    data: PtProdplnrltnlists
  ): Promise<KeyValueParameter[]> {
    return this.request('post', `/productions/ProdOrdPlannedRelations/${PORef}/${PegRef}`, data);
  }

  /**
   * @method newReleaseProcessV1
   * @description Corresponds to `GET /productions/NewReleaseProcess/{_prodOrdRef}`
   * @param {number} prodOrdRef - _prodOrdRef
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async newReleaseProcessV1(prodOrdRef: number): Promise<boolean> {
    return this.request('get', `/productions/NewReleaseProcess/${prodOrdRef}`);
  }

  /**
   * @method newQPSlipRefListsV1
   * @description Corresponds to `GET /productions/NewQPSlipRefLists`
   * @returns {Promise<PtQuickprodslipreflists>} A promise resolving to the response.
   */
  async newQPSlipRefListsV1(): Promise<PtQuickprodslipreflists> {
    return this.request('get', `/productions/NewQPSlipRefLists`);
  }

  /**
   * @method quickProdFicheProcV1
   * @description Corresponds to `GET /productions/QuickProdFicheProc/{_ItemRef}/{_prodAmnt}/{_ficheDate}/{_ficheTime}/{_deptNr}/{_whNr}/{_calcOpt}`
   * @param {number} ItemRef - _ItemRef
   * @param {number} prodAmnt - _prodAmnt
   * @param {number} ficheDate - _ficheDate
   * @param {number} ficheTime - _ficheTime
   * @param {number} deptNr - _deptNr
   * @param {number} whNr - _whNr
   * @param {number} calcOpt - _calcOpt
   * @param {PtQuickprodslipreflists} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async quickProdFicheProcV1(
    ItemRef: number,
    prodAmnt: number,
    ficheDate: number,
    ficheTime: number,
    deptNr: number,
    whNr: number,
    calcOpt: number,
    data: PtQuickprodslipreflists
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'get',
      `/productions/QuickProdFicheProc/${ItemRef}/${prodAmnt}/${ficheDate}/${ficheTime}/${deptNr}/${whNr}/${calcOpt}`,
      data
    );
  }

  /**
   * @method fastOperationCompleteForWOrderV1
   * @description Corresponds to `GET /productions/FastOperationCompleteForWOrder/{_wOrdRef}/{_ItemRef}/{_variantRef}/{_consumpAmount}/{_wasteAmount}/{_fcDate}`
   * @param {number} wOrdRef - _wOrdRef
   * @param {number} ItemRef - _ItemRef
   * @param {number} variantRef - _variantRef
   * @param {number} consumpAmount - _consumpAmount
   * @param {number} wasteAmount - _wasteAmount
   * @param {string} fcDate - _fcDate
   * @param {PtFastrealizeslipreflists} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fastOperationCompleteForWOrderV1(
    wOrdRef: number,
    ItemRef: number,
    variantRef: number,
    consumpAmount: number,
    wasteAmount: number,
    fcDate: string,
    data: PtFastrealizeslipreflists
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'get',
      `/productions/FastOperationCompleteForWOrder/${wOrdRef}/${ItemRef}/${variantRef}/${consumpAmount}/${wasteAmount}/${fcDate}`,
      data
    );
  }

  /**
   * @method fastOperationCompleteWithDateV1
   * @description Corresponds to `GET /productions/FastOperationCompleteWithDate/{_wOrdRef}/{_ItemRef}/{_variantRef}/{_consumpAmount}/{_wasteAmount}/{_fcDate}`
   * @param {number} wOrdRef - _wOrdRef
   * @param {number} ItemRef - _ItemRef
   * @param {number} variantRef - _variantRef
   * @param {number} consumpAmount - _consumpAmount
   * @param {number} wasteAmount - _wasteAmount
   * @param {string} fcDate - _fcDate
   * @param {PtFastrealizeslipreflists} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async fastOperationCompleteWithDateV1(
    wOrdRef: number,
    ItemRef: number,
    variantRef: number,
    consumpAmount: number,
    wasteAmount: number,
    fcDate: string,
    data: PtFastrealizeslipreflists
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'get',
      `/productions/FastOperationCompleteWithDate/${wOrdRef}/${ItemRef}/${variantRef}/${consumpAmount}/${wasteAmount}/${fcDate}`,
      data
    );
  }

  /**
   * @method addStopTransForAWOrdV1
   * @description Corresponds to `GET /productions/AddStopTransForAWOrd/{_wOrdRef}/{_StpCRef}/{_StpDate}/{_StpTime}/{_StartDate}/{_StartTime}/{_TransExp}`
   * @param {number} wOrdRef - _wOrdRef
   * @param {number} StpCRef - _StpCRef
   * @param {number} StpDate - _StpDate
   * @param {number} StpTime - _StpTime
   * @param {number} StartDate - _StartDate
   * @param {number} StartTime - _StartTime
   * @param {string} TransExp - _TransExp
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async addStopTransForAWOrdV1(
    wOrdRef: number,
    StpCRef: number,
    StpDate: number,
    StpTime: number,
    StartDate: number,
    StartTime: number,
    TransExp: string
  ): Promise<boolean> {
    return this.request(
      'get',
      `/productions/AddStopTransForAWOrd/${wOrdRef}/${StpCRef}/${StpDate}/${StpTime}/${StartDate}/${StartTime}/${TransExp}`
    );
  }

  /**
   * @method realizeFicheAnalyseV1
   * @description Corresponds to `POST /productions/RealizeFicheAnalyse/{_prodOrdRef}/{_amount}/{_isPerc}/{_vrntRef}/{_forPOrder}`
   * @param {number} prodOrdRef - _prodOrdRef
   * @param {number} amount - _amount
   * @param {boolean} isPerc - _isPerc
   * @param {number} vrntRef - _vrntRef
   * @param {boolean} forPOrder - _forPOrder
   * @param {PtRealizedslips} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async realizeFicheAnalyseV1(
    prodOrdRef: number,
    amount: number,
    isPerc: boolean,
    vrntRef: number,
    forPOrder: boolean,
    data: PtRealizedslips
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productions/RealizeFicheAnalyse/${prodOrdRef}/${amount}/${isPerc}/${vrntRef}/${forPOrder}`,
      data
    );
  }

  /**
   * @method newRSlipListV1
   * @description Corresponds to `GET /productions/NewRSlipList`
   * @returns {Promise<PtRealizedslips>} A promise resolving to the response.
   */
  async newRSlipListV1(): Promise<PtRealizedslips> {
    return this.request('get', `/productions/NewRSlipList`);
  }

  /**
   * @method prodOrderCancelV1
   * @description Corresponds to `GET /productions/ProdOrderCancel/{_prodOrdRef}/{_Delete}`
   * @param {number} prodOrdRef - _prodOrdRef
   * @param {boolean} Delete - _Delete
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async prodOrderCancelV1(prodOrdRef: number, Delete: boolean): Promise<boolean> {
    return this.request('get', `/productions/ProdOrderCancel/${prodOrdRef}/${Delete}`);
  }

  /**
   * @method prodOrderGenerateWithOrdLineV1
   * @description Corresponds to `POST /productions/ProdOrderGenerateWithOrdLine/{_ItemRef}/{_BOMRef}/{_RevRef}/{_targetDate}/{_FactoryNr}/{_PlnAmount}/{_ficheDate}/{_ficheNo}/{_uomR}/{_ordLineRef}/{_ctrlWHs}/{_chkPOAmnt}/{_whNr}`
   * @param {number} ItemRef - _ItemRef
   * @param {number} BOMRef - _BOMRef
   * @param {number} RevRef - _RevRef
   * @param {string} targetDate - _targetDate
   * @param {number} FactoryNr - _FactoryNr
   * @param {number} PlnAmount - _PlnAmount
   * @param {string} ficheDate - _ficheDate
   * @param {string} ficheNo - _ficheNo
   * @param {number} uomR - _uomR
   * @param {number} ordLineRef - _ordLineRef
   * @param {boolean} ctrlWHs - _ctrlWHs
   * @param {boolean} chkPOAmnt - _chkPOAmnt
   * @param {number} whNr - _whNr
   * @param {PtPrditmclslines} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async prodOrderGenerateWithOrdLineV1(
    ItemRef: number,
    BOMRef: number,
    RevRef: number,
    targetDate: string,
    FactoryNr: number,
    PlnAmount: number,
    ficheDate: string,
    ficheNo: string,
    uomR: number,
    ordLineRef: number,
    ctrlWHs: boolean,
    chkPOAmnt: boolean,
    whNr: number,
    data: PtPrditmclslines
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productions/ProdOrderGenerateWithOrdLine/${ItemRef}/${BOMRef}/${RevRef}/${targetDate}/${FactoryNr}/${PlnAmount}/${ficheDate}/${ficheNo}/${uomR}/${ordLineRef}/${ctrlWHs}/${chkPOAmnt}/${whNr}`,
      data
    );
  }

  /**
   * @method updateProdOrdRevisionV1
   * @description Corresponds to `GET /productions/UpdateProdOrdRevision/{_PORef}/{_BOMRef}/{_RevRef}`
   * @param {number} PORef - _PORef
   * @param {number} BOMRef - _BOMRef
   * @param {number} RevRef - _RevRef
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async updateProdOrdRevisionV1(PORef: number, BOMRef: number, RevRef: number): Promise<boolean> {
    return this.request('get', `/productions/UpdateProdOrdRevision/${PORef}/${BOMRef}/${RevRef}`);
  }

  /**
   * @method getProdParamsV1
   * @description Corresponds to `GET /productions/GetProdParams/{_BOMRef}`
   * @param {number} BOMRef - _BOMRef
   * @param {PtProdparams} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async getProdParamsV1(BOMRef: number, data: PtProdparams): Promise<KeyValueParameter[]> {
    return this.request('get', `/productions/GetProdParams/${BOMRef}`, data);
  }

  /**
   * @method newProdParamsV1
   * @description Corresponds to `GET /productions/NewProdParams`
   * @returns {Promise<PtProdparams>} A promise resolving to the response.
   */
  async newProdParamsV1(): Promise<PtProdparams> {
    return this.request('get', `/productions/NewProdParams`);
  }

  /**
   * @method prodOrderAutomaticGenerateWithParamsV1
   * @description Corresponds to `POST /productions/ProdOrderAutomaticGenerateWithParams/{_ItemRef}/{_BOMRef}/{_RevRef}/{_targetDate}/{_FactoryNr}/{_PlnAmount}/{_ficheDate}/{_ficheNo}/{_uomR}`
   * @param {number} ItemRef - _ItemRef
   * @param {number} BOMRef - _BOMRef
   * @param {number} RevRef - _RevRef
   * @param {string} targetDate - _targetDate
   * @param {number} FactoryNr - _FactoryNr
   * @param {number} PlnAmount - _PlnAmount
   * @param {string} ficheDate - _ficheDate
   * @param {string} ficheNo - _ficheNo
   * @param {number} uomR - _uomR
   * @param {PtPrditmclslines} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async prodOrderAutomaticGenerateWithParamsV1(
    ItemRef: number,
    BOMRef: number,
    RevRef: number,
    targetDate: string,
    FactoryNr: number,
    PlnAmount: number,
    ficheDate: string,
    ficheNo: string,
    uomR: number,
    data: PtPrditmclslines
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productions/ProdOrderAutomaticGenerateWithParams/${ItemRef}/${BOMRef}/${RevRef}/${targetDate}/${FactoryNr}/${PlnAmount}/${ficheDate}/${ficheNo}/${uomR}`,
      data
    );
  }

  /**
   * @method consecutiveProcurementOfProdOrdV1
   * @description Corresponds to `POST /productions/ConsecutiveProcurementOfProdOrd/{_prodOrdRef}/{_negLevelCtrl}/{_consLevel}`
   * @param {number} prodOrdRef - _prodOrdRef
   * @param {boolean} negLevelCtrl - _negLevelCtrl
   * @param {number} consLevel - _consLevel
   * @param {PtMeettypelist} data - The request body.
   * @returns {Promise<KeyValueParameter[]>} A promise resolving to the response.
   */
  async consecutiveProcurementOfProdOrdV1(
    prodOrdRef: number,
    negLevelCtrl: boolean,
    consLevel: number,
    data: PtMeettypelist
  ): Promise<KeyValueParameter[]> {
    return this.request(
      'post',
      `/productions/ConsecutiveProcurementOfProdOrd/${prodOrdRef}/${negLevelCtrl}/${consLevel}`,
      data
    );
  }

  /**
   * @method newMeetTypesV1
   * @description Corresponds to `GET /productions/NewMeetTypes`
   * @returns {Promise<PtMeettypelist>} A promise resolving to the response.
   */
  async newMeetTypesV1(): Promise<PtMeettypelist> {
    return this.request('get', `/productions/NewMeetTypes`);
  }

  /**
   * @method getLastProdErrorV1
   * @description Corresponds to `GET /productions/GetLastProdError`
   * @returns {Promise<number>} A promise resolving to the response.
   */
  async getLastProdErrorV1(): Promise<number> {
    return this.request('get', `/productions/GetLastProdError`);
  }

  /**
   * @method opTransV1
   * @description Corresponds to `GET /productions/opTrans`
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async opTransV1(): Promise<boolean> {
    return this.request('get', `/productions/opTrans`);
  }

  /**
   * @method opTransSetV1
   * @description Corresponds to `POST /productions/opTrans/{_value}`
   * @param {boolean} value - _value
   * @returns {Promise<boolean>} A promise resolving to the response.
   */
  async opTransSetV1(value: boolean): Promise<boolean> {
    return this.request('post', `/productions/opTrans/${value}`);
  }

  /**
   * @method getDbColumns
   * @description Retrieves database column information for the `Productions` entity.
   * @returns {Promise<unknown[]>} A promise that resolves to an array of column definitions.
   *
   * @example
   * // Retrieves column info for Productions
   * const columns = await client.productions.getDbColumns();
   */
  async getDbColumns(): Promise<unknown[]> {
    return this.request('get', `${this.endpoint}/dbcolumns`);
  }

  /**
   * @method track
   * @description Enables change tracking for the `Productions` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Enables change tracking for Productions
   * await client.productions.track();
   */
  async track(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/track`);
  }

  /**
   * @method untrack
   * @description Disables change tracking for the `Productions` entity.
   * @returns {Promise<unknown>} A promise that resolves with the tracking status.
   *
   * @example
   * // Disables change tracking for Productions
   * await client.productions.untrack();
   */
  async untrack(): Promise<unknown> {
    return this.request('get', `${this.endpoint}/untrack`);
  }

  /**
   * @method checkTrackStatus
   * @description Checks the change tracking status for the `Productions` entity.
   * @returns {Promise<boolean>} A promise that resolves to `true` if tracking is enabled, otherwise `false`.
   *
   * @example
   * // Checks the tracking status for Productions
   * const isTracking = await client.productions.checkTrackStatus();
   */
  async checkTrackStatus(): Promise<boolean> {
    return this.request('get', `${this.endpoint}/checktrack`);
  }
}
