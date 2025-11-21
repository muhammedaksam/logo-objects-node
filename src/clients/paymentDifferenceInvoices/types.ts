import { BaseEntity, QueryOptions } from '../../types';
import { NumberFieldValue, StringFieldValue, AllFieldValues } from '../../utils/queryBuilder';
import { Meta } from '../../types/collections';

/**
 * Interface for KeyValueParameter
 */
export interface KeyValueParameter {
  Name?: string;
  Value?: Object;
}

/**
 * Interface for ResultData
 */
export interface ResultData {
  Meta?: Meta;
  offset?: number;
  count?: number;
  totalCount?: number;
  limit?: number;
  first?: Meta;
  next?: Meta;
  previous?: Meta;
  items?: Object[];
}

/**
 * Interface for DBColumnProperties
 */
export interface Dbcolumnproperties {
  Meta?: Meta;
  ColumnName?: string;
  DataType?: string;
  MaximumCharacterLength?: string;
  NumericPrecision?: string;
  NumericPrecisionRadix?: string;
  NumericScale?: string;
  DatetimePrecision?: string;
  IsNullable?: string;
}

/**
 * PaymentDifferenceInvoices entity interface based on swagger definition
 */
export interface PaymentDifferenceInvoices extends BaseEntity {
  CLIENTREF?: number;
  CLACCREF?: number;
  CLCENTERREF?: number;
  CASHCENTERREF?: number;
  CASHACCOUNTREF?: number;
  VIRMANREF?: number;
  SOURCEFREF?: number;
  DATE?: string;
  DEPARTMENT?: number;
  DIVISION?: number;
  MODULENR?: number;
  TYPE?: number;
  LINENR?: number;
  AUXIL_CODE?: string;
  AUTH_CODE?: string;
  TRANNO?: string;
  DOC_NUMBER?: string;
  DESCRIPTION?: string;
  GL_POSTED?: number;
  SIGN?: number;
  AMOUNT?: number;
  CURR_TRANS?: number;
  TC_XRATE?: number;
  TC_AMOUNT?: number;
  RC_XRATE?: number;
  RC_AMOUNT?: number;
  BNLN_TC_CURR?: number;
  BNLN_TC_XRATE?: number;
  BNLN_TC_AMOUNT?: number;
  EXTENREF?: number;
  PAYDEFREF?: number;
  ACCFICHEREF?: number;
  PRINT_CNT?: number;
  PRINT_DATE?: string;
  CANCELLED?: number;
  TRGFLAG?: number;
  TRADING_GRP?: string;
  CURRSEL_TRANS?: number;
  SINGLE_PAYMENT?: number;
  DISCOUNTED?: number;
  DISCOUNT_RATE?: number;
  VAT_RATE?: number;
  DISCOUNTED_AMOUNT?: number;
  DISCACCREF?: number;
  DISCCENREF?: number;
  VATRACCREF?: number;
  VATRCENREF?: number;
  PAYMENTREF?: number;
  VATAMOUNT?: number;
  INFLATION_IDX?: number;
  AFFECT_COST?: number;
  ARP_CODE?: string;
  GL_CODE4?: string;
  PAYMENT_CODE?: string;
  UPDATED?: number;
  PAYFND?: number;
  PAYCHGD?: number;
  DEBIT?: number;
  CREDIT?: number;
  VLNOLDCLREF?: number;
  VLIST?: string;
  INVOICE_INTERNAL_REFERENCE?: number;
  INVOICE_GRPCODE?: number;
  INVOICE_TRCODE?: number;
  INVOICE_FICHENO?: string;
  INVOICE_DATE?: string;
  INVOICE_TIME?: number;
  INVOICE_DOC_NUMBER?: string;
  INVOICE_AUXIL_CODE?: string;
  INVOICE_AUTH_CODE?: string;
  INVOICE_CLIENTREF?: number;
  INVOICE_RECVREF?: number;
  INVOICE_CENTERREF?: number;
  INVOICE_ACCOUNTREF?: number;
  INVOICE_SOURCEINDEX?: number;
  INVOICE_SOURCECOSTGRP?: number;
  INVOICE_CANCELLED?: number;
  INVOICE_ACCOUNTED?: number;
  INVOICE_PAIDINCASH?: number;
  INVOICE_FROMKASA?: number;
  INVOICE_ENTEGSET?: number;
  INVOICE_VAT?: number;
  INVOICE_ADDDISCOUNTS?: number;
  INVOICE_TOTALDISCOUNTS?: number;
  INVOICE_TOTALDISCOUNTED?: number;
  INVOICE_ADDEXPENSES?: number;
  INVOICE_TOTALEXPENSES?: number;
  INVOICE_DISTEXPENSE?: number;
  INVOICE_TOTALDEPOZITO?: number;
  INVOICE_TOTALPROMOTIONS?: number;
  INVOICE_VATINCGROSS?: number;
  INVOICE_TOTALVAT?: number;
  INVOICE_GROSSTOTAL?: number;
  INVOICE_NETTOTAL?: number;
  INVOICE_NOTES1?: string;
  INVOICE_NOTES2?: string;
  INVOICE_NOTES3?: string;
  INVOICE_NOTES4?: string;
  INVOICE_INTERESTAPP?: number;
  INVOICE_CURR_TRANS?: number;
  INVOICE_TC_XRATE?: number;
  INVOICE_TC_AMOUNT?: number;
  INVOICE_RC_XRATE?: number;
  INVOICE_RC_AMOUNT?: number;
  INVOICE_SINGLE_PAYMENT?: number;
  INVOICE_KASTRANSREF?: number;
  INVOICE_PAYDEFREF?: number;
  INVOICE_PRINT_CNT?: number;
  INVOICE_PRINT_DATE?: string;
  INVOICE_GVATINC?: number;
  INVOICE_BRANCH?: number;
  INVOICE_DEPARTMENT?: number;
  INVOICE_ACCFICHEREF?: number;
  INVOICE_ADDEXPACCREF?: number;
  INVOICE_ADDEXPCENTREF?: number;
  INVOICE_DECPRDIFF?: number;
  INVOICE_CREATED_BY?: number;
  INVOICE_DATE_CREATED?: string;
  INVOICE_HOUR_CREATED?: number;
  INVOICE_MIN_CREATED?: number;
  INVOICE_SEC_CREATED?: number;
  INVOICE_MODIFIED_BY?: number;
  INVOICE_DATE_MODIFIED?: string;
  INVOICE_HOUR_MODIFIED?: number;
  INVOICE_MIN_MODIFIED?: number;
  INVOICE_SEC_MODIFIED?: number;
  INVOICE_SALESMANREF?: number;
  INVOICE_CANCELLEDACC?: number;
  INVOICE_SHPTYPCOD?: string;
  INVOICE_SHPAGNCOD?: string;
  INVOICE_TRACKNR?: string;
  INVOICE_GENEXCTYP?: number;
  INVOICE_CURRSEL_TRANS?: number;
  INVOICE_TRADING_GRP?: string;
  INVOICE_TEXTINC?: number;
  INVOICE_DATA_SITEID?: number;
  INVOICE_XML_ATTRIBUTE?: number;
  INVOICE_DATA_REFERENCE?: number;
  INVOICE_FACTORYNR?: number;
  INVOICE_WFSTATUS?: number;
  INVOICE_SHIPINFOREF?: number;
  INVOICE_DISTORDERREF?: number;
  INVOICE_SENDCNT?: number;
  INVOICE_DLVCLIENT?: number;
  INVOICE_COSTOFSALEFCREF?: number;
  INVOICE_OPSTAT?: number;
  INVOICE_DOCTRACKINGNR?: string;
  INVOICE_TOTALADDTAX?: number;
  INVOICE_PAYMENTTYPE?: number;
  INVOICE_INFLATION_IDX?: number;
  BRANCHNAME?: string;
  DEPTNAME?: string;
  OHP_CODE4?: string;
  TOTBEFVAT?: number;
  ROLLEDAMOUNT?: number;
  ROLLEDLNNR?: number;
  CSDUEDATE?: string;
  GL_CODE1?: string;
  GL_CODE2?: string;
  GL_CODE3?: string;
  OHP_CODE1?: string;
  OHP_CODE2?: string;
  OHP_CODE3?: string;
  XCNT?: number;
  CUROP?: number;
  ROLLLNPTR?: string;
  CURRSTR?: string;
  CLCARDACTIVE?: number;
  PAYPLACTIVE?: number;
  EDTDEBIT?: number;
  EDTCREDIT?: number;
  EDTCURR?: number;
  EDTBEFVAT?: number;
  EDTTOTAL?: number;
  EDTTOTVAT?: number;
  EDTINTAPP?: number;
  DSCPAYTOT?: number;
  DSCCSHMAX?: number;
  FICHEP?: number;
  CASH_TRAN_GRP_NO?: string;
  CASH_TRAN_GRPLINE_NO?: number;
  CASH_INFLDX?: number;
  INVOICE_ORGLOGOID?: string;
  CASH_ORGLOGOID?: string;
  PROJECTREF?: number;
  PROJECTCODE?: string;
  GRPFIRMTRANS?: number;
  AFFECT_RISK?: number;
  INVOICE_AFFECT_COLLATRL?: number;
  ORGLOGOID?: string;
  GL_CODE5?: string;
  OHP_CODE5?: string;
  APPROVE?: number;
  APPROVE_DATE?: string;
  ACC_FICHE_SITEID?: number;
  CANCEL_AUTO_GL_PROC?: number;
  DOC_DATE?: string;
  STAFF_OTHER_EXPENSES?: number;
  DELIVERY_CODE?: string;
  ACCEPT_EINV_PUBLIC?: number;
  PUBLICBNACCREF?: number;
  PUBLIC_BNACC_CODE?: string;
  PUBLIC_BNACC_IBAN?: string;
  PUBLIC_BNACC_CURRENCY?: number;
  TYPE_CODE?: string;
  FUTURE_MONTH_YREXPINC?: number;
  DOC_DETAIL?: number;
  CALC_ADD_TAX_VAT_SEP?: number;
  ESEND_DATE?: string;
  ELECT_DOC?: number;
  OFFER_REFERENCE?: number;
  SERVICE_REASON?: string;
  EINVOICE?: number;
  PROFILE_ID?: number;
  ESTATUS?: number;
  ESTARTDATE?: string;
  EENDDATE?: string;
  EDESCRIPTION?: string;
  EDURATION?: number;
  EDURATION_TYPE?: number;
  EINSTEAD_OF_DISPATCH?: number;
  EINVOICE_TYPE?: number;
  EARCHIVEDETR_LOGICALREF?: number;
  EARCHIVEDETR_INVOICEREF?: number;
  EARCHIVEDETR_INSTALLMENTNUMBER?: string;
  EARCHIVEDETR_EARCHIVESTATUS?: number;
  EARCHIVEDETR_EARCHIVESTATUSOLD?: number;
  EARCHIVEDETR_SENDMOD?: number;
  EARCHIVEDETR_INTSALESADDR?: string;
  EARCHIVEDETR_INTPAYMENTDESC?: string;
  EARCHIVEDETR_INTPAYMENTTYPE?: number;
  EARCHIVEDETR_INTPAYMENTAGENT?: string;
  EARCHIVEDETR_INTPAYMENTDATEORG?: number;
  EARCHIVEDETR_INTPAYMENTDATE?: string;
  EARCHIVEDETR_OCKSERIALNUMBER?: string;
  EARCHIVEDETR_OCKZNUMBER?: string;
  EARCHIVEDETR_OCKFICHENUMBER?: string;
  EARCHIVEDETR_OCKFICHEDATEORG?: number;
  EARCHIVEDETR_OCKFICHEDATE?: string;
  EARCHIVEDETR_ISCOMP?: number;
  EARCHIVEDETR_TAXNR?: string;
  EARCHIVEDETR_TCKNO?: string;
  EARCHIVEDETR_NAME?: string;
  EARCHIVEDETR_SURNAME?: string;
  EARCHIVEDETR_DEFINITION?: string;
  EARCHIVEDETR_ADDR1?: string;
  EARCHIVEDETR_ADDR2?: string;
  EARCHIVEDETR_CITYCODE?: string;
  EARCHIVEDETR_CITY?: string;
  EARCHIVEDETR_COUNTRYCODE?: string;
  EARCHIVEDETR_COUNTRY?: string;
  EARCHIVEDETR_POSTCODE?: string;
  EARCHIVEDETR_DISTRICTCODE?: string;
  EARCHIVEDETR_DISTRICT?: string;
  EARCHIVEDETR_TOWNCODE?: string;
  EARCHIVEDETR_TOWN?: string;
  EARCHIVEDETR_EMAILADDR?: string;
  EARCHIVEDETR_ISPERCURR?: number;
  EARCHIVEDETR_INSTEADOFDESP?: number;
  EARCHIVEDETR_TAXOFFICE?: string;
  EARCHIVEDETR_TELCODES1?: string;
  EARCHIVEDETR_TELCODES2?: string;
  EARCHIVEDETR_TELNRS1?: string;
  EARCHIVEDETR_TELNRS2?: string;
  EARCHIVEDETR_OLDEARCHIVESTATUS?: number;
  EARCHIVEDETR_DRIVERNAME1?: string;
  EARCHIVEDETR_DRIVERSURNAME1?: string;
  EARCHIVEDETR_DRIVERTCKNO1?: string;
  EARCHIVEDETR_PLATENUM1?: string;
  EARCHIVEDETR_CHASSISNUM1?: string;
  EARCHIVEDETR_DRIVERNAME2?: string;
  EARCHIVEDETR_DRIVERSURNAME2?: string;
  EARCHIVEDETR_DRIVERTCKNO2?: string;
  EARCHIVEDETR_PLATENUM2?: string;
  EARCHIVEDETR_CHASSISNUM2?: string;
  EARCHIVEDETR_DRIVERNAME3?: string;
  EARCHIVEDETR_DRIVERSURNAME3?: string;
  EARCHIVEDETR_DRIVERTCKNO3?: string;
  EARCHIVEDETR_PLATENUM3?: string;
  EARCHIVEDETR_CHASSISNUM3?: string;
  EARCHIVEDETR_CHAINDELIVERY?: number;
  EARCHIVEDETR_SELLERCLIENTREF?: number;
  EARCHIVEDETR_SELLERCLIENTCODE?: string;
  EBOOK_DOCDATE?: string;
  EBOOK_NODOCUMENT?: number;
  EBOOK_DOCNR?: string;
  EBOOK_DOCTYPE?: number;
  EBOOK_EXPLAIN?: string;
  EBOOK_PAYTYPE?: string;
  EBOOK_NOPAY?: number;
  FROMINTEGTYPE?: number;
  EPRINTCNT?: number;
  RIGHTOFRETURNTYP?: string;
  ORDFICHECMREF?: number;
  COSFCREFINFL?: number;
  ESENDTIME?: number;
  RECEIPT?: number;
  INEFFECTIVECOST?: number;
}

/**
 * Union type of all PaymentDifferenceInvoices field names for type-safe field selection and sorting
 */
export type PaymentDifferenceInvoicesField =
  | 'INTERNAL_REFERENCE'
  | 'CLIENTREF'
  | 'CLACCREF'
  | 'CLCENTERREF'
  | 'CASHCENTERREF'
  | 'CASHACCOUNTREF'
  | 'VIRMANREF'
  | 'SOURCEFREF'
  | 'DATE'
  | 'DEPARTMENT'
  | 'DIVISION'
  | 'MODULENR'
  | 'TYPE'
  | 'LINENR'
  | 'AUXIL_CODE'
  | 'AUTH_CODE'
  | 'TRANNO'
  | 'DOC_NUMBER'
  | 'DESCRIPTION'
  | 'GL_POSTED'
  | 'SIGN'
  | 'AMOUNT'
  | 'CURR_TRANS'
  | 'TC_XRATE'
  | 'TC_AMOUNT'
  | 'RC_XRATE'
  | 'RC_AMOUNT'
  | 'BNLN_TC_CURR'
  | 'BNLN_TC_XRATE'
  | 'BNLN_TC_AMOUNT'
  | 'EXTENREF'
  | 'PAYDEFREF'
  | 'ACCFICHEREF'
  | 'PRINT_CNT'
  | 'PRINT_DATE'
  | 'CREATED_BY'
  | 'DATE_CREATED'
  | 'HOUR_CREATED'
  | 'MIN_CREATED'
  | 'SEC_CREATED'
  | 'MODIFIED_BY'
  | 'DATE_MODIFIED'
  | 'HOUR_MODIFIED'
  | 'MIN_MODIFIED'
  | 'SEC_MODIFIED'
  | 'CANCELLED'
  | 'TRGFLAG'
  | 'TRADING_GRP'
  | 'CURRSEL_TRANS'
  | 'SINGLE_PAYMENT'
  | 'DISCOUNTED'
  | 'DISCOUNT_RATE'
  | 'VAT_RATE'
  | 'DISCOUNTED_AMOUNT'
  | 'DISCACCREF'
  | 'DISCCENREF'
  | 'VATRACCREF'
  | 'VATRCENREF'
  | 'PAYMENTREF'
  | 'VATAMOUNT'
  | 'DATA_SITEID'
  | 'XML_ATTRIBUTE'
  | 'DATA_REFERENCE'
  | 'INFLATION_IDX'
  | 'AFFECT_COST'
  | 'ARP_CODE'
  | 'GL_CODE4'
  | 'PAYMENT_CODE'
  | 'UPDATED'
  | 'PAYFND'
  | 'PAYCHGD'
  | 'DEBIT'
  | 'CREDIT'
  | 'VLNOLDCLREF'
  | 'VLIST'
  | 'INVOICE_INTERNAL_REFERENCE'
  | 'INVOICE_GRPCODE'
  | 'INVOICE_TRCODE'
  | 'INVOICE_FICHENO'
  | 'INVOICE_DATE'
  | 'INVOICE_TIME'
  | 'INVOICE_DOC_NUMBER'
  | 'INVOICE_AUXIL_CODE'
  | 'INVOICE_AUTH_CODE'
  | 'INVOICE_CLIENTREF'
  | 'INVOICE_RECVREF'
  | 'INVOICE_CENTERREF'
  | 'INVOICE_ACCOUNTREF'
  | 'INVOICE_SOURCEINDEX'
  | 'INVOICE_SOURCECOSTGRP'
  | 'INVOICE_CANCELLED'
  | 'INVOICE_ACCOUNTED'
  | 'INVOICE_PAIDINCASH'
  | 'INVOICE_FROMKASA'
  | 'INVOICE_ENTEGSET'
  | 'INVOICE_VAT'
  | 'INVOICE_ADDDISCOUNTS'
  | 'INVOICE_TOTALDISCOUNTS'
  | 'INVOICE_TOTALDISCOUNTED'
  | 'INVOICE_ADDEXPENSES'
  | 'INVOICE_TOTALEXPENSES'
  | 'INVOICE_DISTEXPENSE'
  | 'INVOICE_TOTALDEPOZITO'
  | 'INVOICE_TOTALPROMOTIONS'
  | 'INVOICE_VATINCGROSS'
  | 'INVOICE_TOTALVAT'
  | 'INVOICE_GROSSTOTAL'
  | 'INVOICE_NETTOTAL'
  | 'INVOICE_NOTES1'
  | 'INVOICE_NOTES2'
  | 'INVOICE_NOTES3'
  | 'INVOICE_NOTES4'
  | 'INVOICE_INTERESTAPP'
  | 'INVOICE_CURR_TRANS'
  | 'INVOICE_TC_XRATE'
  | 'INVOICE_TC_AMOUNT'
  | 'INVOICE_RC_XRATE'
  | 'INVOICE_RC_AMOUNT'
  | 'INVOICE_SINGLE_PAYMENT'
  | 'INVOICE_KASTRANSREF'
  | 'INVOICE_PAYDEFREF'
  | 'INVOICE_PRINT_CNT'
  | 'INVOICE_PRINT_DATE'
  | 'INVOICE_GVATINC'
  | 'INVOICE_BRANCH'
  | 'INVOICE_DEPARTMENT'
  | 'INVOICE_ACCFICHEREF'
  | 'INVOICE_ADDEXPACCREF'
  | 'INVOICE_ADDEXPCENTREF'
  | 'INVOICE_DECPRDIFF'
  | 'INVOICE_CREATED_BY'
  | 'INVOICE_DATE_CREATED'
  | 'INVOICE_HOUR_CREATED'
  | 'INVOICE_MIN_CREATED'
  | 'INVOICE_SEC_CREATED'
  | 'INVOICE_MODIFIED_BY'
  | 'INVOICE_DATE_MODIFIED'
  | 'INVOICE_HOUR_MODIFIED'
  | 'INVOICE_MIN_MODIFIED'
  | 'INVOICE_SEC_MODIFIED'
  | 'INVOICE_SALESMANREF'
  | 'INVOICE_CANCELLEDACC'
  | 'INVOICE_SHPTYPCOD'
  | 'INVOICE_SHPAGNCOD'
  | 'INVOICE_TRACKNR'
  | 'INVOICE_GENEXCTYP'
  | 'INVOICE_CURRSEL_TRANS'
  | 'INVOICE_TRADING_GRP'
  | 'INVOICE_TEXTINC'
  | 'INVOICE_DATA_SITEID'
  | 'INVOICE_XML_ATTRIBUTE'
  | 'INVOICE_DATA_REFERENCE'
  | 'INVOICE_FACTORYNR'
  | 'INVOICE_WFSTATUS'
  | 'INVOICE_SHIPINFOREF'
  | 'INVOICE_DISTORDERREF'
  | 'INVOICE_SENDCNT'
  | 'INVOICE_DLVCLIENT'
  | 'INVOICE_COSTOFSALEFCREF'
  | 'INVOICE_OPSTAT'
  | 'INVOICE_DOCTRACKINGNR'
  | 'INVOICE_TOTALADDTAX'
  | 'INVOICE_PAYMENTTYPE'
  | 'INVOICE_INFLATION_IDX'
  | 'BRANCHNAME'
  | 'DEPTNAME'
  | 'OHP_CODE4'
  | 'TOTBEFVAT'
  | 'ROLLEDAMOUNT'
  | 'ROLLEDLNNR'
  | 'CSDUEDATE'
  | 'GL_CODE1'
  | 'GL_CODE2'
  | 'GL_CODE3'
  | 'OHP_CODE1'
  | 'OHP_CODE2'
  | 'OHP_CODE3'
  | 'XCNT'
  | 'CUROP'
  | 'ROLLLNPTR'
  | 'CURRSTR'
  | 'CLCARDACTIVE'
  | 'PAYPLACTIVE'
  | 'EDTDEBIT'
  | 'EDTCREDIT'
  | 'EDTCURR'
  | 'EDTBEFVAT'
  | 'EDTTOTAL'
  | 'EDTTOTVAT'
  | 'EDTINTAPP'
  | 'DSCPAYTOT'
  | 'DSCCSHMAX'
  | 'FICHEP'
  | 'CASH_TRAN_GRP_NO'
  | 'CASH_TRAN_GRPLINE_NO'
  | 'CASH_INFLDX'
  | 'INVOICE_ORGLOGOID'
  | 'CASH_ORGLOGOID'
  | 'PROJECTREF'
  | 'PROJECTCODE'
  | 'GRPFIRMTRANS'
  | 'AFFECT_RISK'
  | 'INVOICE_AFFECT_COLLATRL'
  | 'ORGLOGOID'
  | 'GL_CODE5'
  | 'OHP_CODE5'
  | 'APPROVE'
  | 'APPROVE_DATE'
  | 'ACC_FICHE_SITEID'
  | 'CANCEL_AUTO_GL_PROC'
  | 'DOC_DATE'
  | 'STAFF_OTHER_EXPENSES'
  | 'DELIVERY_CODE'
  | 'ACCEPT_EINV_PUBLIC'
  | 'PUBLICBNACCREF'
  | 'PUBLIC_BNACC_CODE'
  | 'PUBLIC_BNACC_IBAN'
  | 'PUBLIC_BNACC_CURRENCY'
  | 'TYPE_CODE'
  | 'FUTURE_MONTH_YREXPINC'
  | 'DOC_DETAIL'
  | 'CALC_ADD_TAX_VAT_SEP'
  | 'ESEND_DATE'
  | 'ELECT_DOC'
  | 'OFFER_REFERENCE'
  | 'SERVICE_REASON'
  | 'EINVOICE'
  | 'PROFILE_ID'
  | 'ESTATUS'
  | 'ESTARTDATE'
  | 'EENDDATE'
  | 'EDESCRIPTION'
  | 'EDURATION'
  | 'EDURATION_TYPE'
  | 'EINSTEAD_OF_DISPATCH'
  | 'EINVOICE_TYPE'
  | 'EARCHIVEDETR_LOGICALREF'
  | 'EARCHIVEDETR_INVOICEREF'
  | 'EARCHIVEDETR_INSTALLMENTNUMBER'
  | 'EARCHIVEDETR_EARCHIVESTATUS'
  | 'EARCHIVEDETR_EARCHIVESTATUSOLD'
  | 'EARCHIVEDETR_SENDMOD'
  | 'EARCHIVEDETR_INTSALESADDR'
  | 'EARCHIVEDETR_INTPAYMENTDESC'
  | 'EARCHIVEDETR_INTPAYMENTTYPE'
  | 'EARCHIVEDETR_INTPAYMENTAGENT'
  | 'EARCHIVEDETR_INTPAYMENTDATEORG'
  | 'EARCHIVEDETR_INTPAYMENTDATE'
  | 'EARCHIVEDETR_OCKSERIALNUMBER'
  | 'EARCHIVEDETR_OCKZNUMBER'
  | 'EARCHIVEDETR_OCKFICHENUMBER'
  | 'EARCHIVEDETR_OCKFICHEDATEORG'
  | 'EARCHIVEDETR_OCKFICHEDATE'
  | 'EARCHIVEDETR_ISCOMP'
  | 'EARCHIVEDETR_TAXNR'
  | 'EARCHIVEDETR_TCKNO'
  | 'EARCHIVEDETR_NAME'
  | 'EARCHIVEDETR_SURNAME'
  | 'EARCHIVEDETR_DEFINITION'
  | 'EARCHIVEDETR_ADDR1'
  | 'EARCHIVEDETR_ADDR2'
  | 'EARCHIVEDETR_CITYCODE'
  | 'EARCHIVEDETR_CITY'
  | 'EARCHIVEDETR_COUNTRYCODE'
  | 'EARCHIVEDETR_COUNTRY'
  | 'EARCHIVEDETR_POSTCODE'
  | 'EARCHIVEDETR_DISTRICTCODE'
  | 'EARCHIVEDETR_DISTRICT'
  | 'EARCHIVEDETR_TOWNCODE'
  | 'EARCHIVEDETR_TOWN'
  | 'EARCHIVEDETR_EMAILADDR'
  | 'EARCHIVEDETR_ISPERCURR'
  | 'EARCHIVEDETR_INSTEADOFDESP'
  | 'EARCHIVEDETR_TAXOFFICE'
  | 'EARCHIVEDETR_TELCODES1'
  | 'EARCHIVEDETR_TELCODES2'
  | 'EARCHIVEDETR_TELNRS1'
  | 'EARCHIVEDETR_TELNRS2'
  | 'EARCHIVEDETR_OLDEARCHIVESTATUS'
  | 'EARCHIVEDETR_DRIVERNAME1'
  | 'EARCHIVEDETR_DRIVERSURNAME1'
  | 'EARCHIVEDETR_DRIVERTCKNO1'
  | 'EARCHIVEDETR_PLATENUM1'
  | 'EARCHIVEDETR_CHASSISNUM1'
  | 'EARCHIVEDETR_DRIVERNAME2'
  | 'EARCHIVEDETR_DRIVERSURNAME2'
  | 'EARCHIVEDETR_DRIVERTCKNO2'
  | 'EARCHIVEDETR_PLATENUM2'
  | 'EARCHIVEDETR_CHASSISNUM2'
  | 'EARCHIVEDETR_DRIVERNAME3'
  | 'EARCHIVEDETR_DRIVERSURNAME3'
  | 'EARCHIVEDETR_DRIVERTCKNO3'
  | 'EARCHIVEDETR_PLATENUM3'
  | 'EARCHIVEDETR_CHASSISNUM3'
  | 'EARCHIVEDETR_CHAINDELIVERY'
  | 'EARCHIVEDETR_SELLERCLIENTREF'
  | 'EARCHIVEDETR_SELLERCLIENTCODE'
  | 'EBOOK_DOCDATE'
  | 'EBOOK_NODOCUMENT'
  | 'EBOOK_DOCNR'
  | 'EBOOK_DOCTYPE'
  | 'EBOOK_EXPLAIN'
  | 'EBOOK_PAYTYPE'
  | 'EBOOK_NOPAY'
  | 'FROMINTEGTYPE'
  | 'EPRINTCNT'
  | 'RIGHTOFRETURNTYP'
  | 'ORDFICHECMREF'
  | 'COSFCREFINFL'
  | 'ESENDTIME'
  | 'RECEIPT'
  | 'INEFFECTIVECOST';

/**
 * Type-safe sort specification for PaymentDifferenceInvoices queries
 */
export type PaymentDifferenceInvoicesSortSpec =
  | [PaymentDifferenceInvoicesField]
  | [PaymentDifferenceInvoicesField, 'asc' | 'desc']
  | [PaymentDifferenceInvoicesField[], 'asc' | 'desc']
  | [PaymentDifferenceInvoicesField[]];

/**
 * Type-safe query options for PaymentDifferenceInvoices entities
 *
 * Provides IntelliSense and type safety for:
 * - `fields`: Array of field names to return
 * - `sort`: Simplified sort syntax with field arrays and direction
 *
 * @example
 * ```typescript
 * // Select specific fields
 * const result = await client.getAll({
 *   fields: ['CODE', 'TITLE', 'STATUS']  // ✨ Full IntelliSense
 * });
 *
 * // Sort by single field (ascending by default)
 * const sorted1 = await client.getAll({
 *   sort: ['CODE']  // CODE ascending
 * });
 *
 * // Sort by single field with direction
 * const sorted2 = await client.getAll({
 *   sort: ['TITLE', 'desc']  // TITLE descending
 * });
 *
 * // Sort by multiple fields (same direction)
 * const sorted3 = await client.getAll({
 *   sort: [['TITLE', 'CODE'], 'desc']  // Both descending
 * });
 *
 * // Or just multiple fields ascending
 * const sorted4 = await client.getAll({
 *   sort: [['TITLE', 'CODE']]  // Both ascending
 * });
 * ```
 */
export interface PaymentDifferenceInvoicesQueryOptions
  extends Omit<QueryOptions<PaymentDifferenceInvoicesField>, 'fields' | 'sort'> {
  /**
   * Array of field names to include in the response
   * @example ['CODE', 'TITLE', 'STATUS']
   */
  fields?: PaymentDifferenceInvoicesField[];

  /**
   * Sort specification:
   * - `['FIELD']` - Single field ascending
   * - `['FIELD', 'desc']` - Single field with direction
   * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
   * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
   *
   * @example ['CODE'] | ['TITLE', 'desc'] | [['CODE', 'TITLE'], 'desc'] | [['CODE', 'TITLE']]
   */
  sort?: PaymentDifferenceInvoicesSortSpec;
}

/**
 * Search criteria for PaymentDifferenceInvoices entities
 *
 * Supports both simple values and operator objects:
 *
 * Simple usage (shorthand):
 * ```typescript
 * { code: 'ABC', status: 1 }  // CODE eq 'ABC' and STATUS eq 1
 * ```
 *
 * Operator objects:
 * ```typescript
 * {
 *   code: { like: 'AB*' },           // CODE like 'AB*'
 *   price: { gte: 100, lte: 500 },   // PRICE gte 100 and PRICE lte 500
 *   status: { in: [1, 2, 3] }        // (STATUS eq 1 or STATUS eq 2 or STATUS eq 3)
 * }
 * ```
 *
 * Array values (OR condition):
 * ```typescript
 * { tags: ['A', 'B'] }  // (TAGS eq 'A' or TAGS eq 'B')
 * ```
 */
export interface PaymentDifferenceInvoicesSearchCriteria {
  internalReference?: NumberFieldValue;
  clientref?: NumberFieldValue;
  claccref?: NumberFieldValue;
  clcenterref?: NumberFieldValue;
  cashcenterref?: NumberFieldValue;
  cashaccountref?: NumberFieldValue;
  virmanref?: NumberFieldValue;
  sourcefref?: NumberFieldValue;
  date?: StringFieldValue;
  department?: NumberFieldValue;
  division?: NumberFieldValue;
  modulenr?: NumberFieldValue;
  type?: NumberFieldValue;
  linenr?: NumberFieldValue;
  auxilCode?: StringFieldValue;
  authCode?: StringFieldValue;
  tranno?: StringFieldValue;
  docNumber?: StringFieldValue;
  description?: StringFieldValue;
  glPosted?: NumberFieldValue;
  sign?: NumberFieldValue;
  amount?: NumberFieldValue;
  currTrans?: NumberFieldValue;
  tcXrate?: NumberFieldValue;
  tcAmount?: NumberFieldValue;
  rcXrate?: NumberFieldValue;
  rcAmount?: NumberFieldValue;
  bnlnTcCurr?: NumberFieldValue;
  bnlnTcXrate?: NumberFieldValue;
  bnlnTcAmount?: NumberFieldValue;
  extenref?: NumberFieldValue;
  paydefref?: NumberFieldValue;
  accficheref?: NumberFieldValue;
  printCnt?: NumberFieldValue;
  printDate?: StringFieldValue;
  createdBy?: NumberFieldValue;
  dateCreated?: StringFieldValue;
  hourCreated?: NumberFieldValue;
  minCreated?: NumberFieldValue;
  secCreated?: NumberFieldValue;
  modifiedBy?: NumberFieldValue;
  dateModified?: StringFieldValue;
  hourModified?: NumberFieldValue;
  minModified?: NumberFieldValue;
  secModified?: NumberFieldValue;
  cancelled?: NumberFieldValue;
  trgflag?: NumberFieldValue;
  tradingGrp?: StringFieldValue;
  currselTrans?: NumberFieldValue;
  singlePayment?: NumberFieldValue;
  discounted?: NumberFieldValue;
  discountRate?: NumberFieldValue;
  vatRate?: NumberFieldValue;
  discountedAmount?: NumberFieldValue;
  discaccref?: NumberFieldValue;
  disccenref?: NumberFieldValue;
  vatraccref?: NumberFieldValue;
  vatrcenref?: NumberFieldValue;
  paymentref?: NumberFieldValue;
  vatamount?: NumberFieldValue;
  dataSiteid?: NumberFieldValue;
  xmlAttribute?: NumberFieldValue;
  dataReference?: NumberFieldValue;
  inflationIdx?: NumberFieldValue;
  affectCost?: NumberFieldValue;
  arpCode?: StringFieldValue;
  glCode4?: StringFieldValue;
  paymentCode?: StringFieldValue;
  updated?: NumberFieldValue;
  payfnd?: NumberFieldValue;
  paychgd?: NumberFieldValue;
  debit?: NumberFieldValue;
  credit?: NumberFieldValue;
  vlnoldclref?: NumberFieldValue;
  vlist?: StringFieldValue;
  invoiceInternalReference?: NumberFieldValue;
  invoiceGrpcode?: NumberFieldValue;
  invoiceTrcode?: NumberFieldValue;
  invoiceFicheno?: StringFieldValue;
  invoiceDate?: StringFieldValue;
  invoiceTime?: NumberFieldValue;
  invoiceDocNumber?: StringFieldValue;
  invoiceAuxilCode?: StringFieldValue;
  invoiceAuthCode?: StringFieldValue;
  invoiceClientref?: NumberFieldValue;
  invoiceRecvref?: NumberFieldValue;
  invoiceCenterref?: NumberFieldValue;
  invoiceAccountref?: NumberFieldValue;
  invoiceSourceindex?: NumberFieldValue;
  invoiceSourcecostgrp?: NumberFieldValue;
  invoiceCancelled?: NumberFieldValue;
  invoiceAccounted?: NumberFieldValue;
  invoicePaidincash?: NumberFieldValue;
  invoiceFromkasa?: NumberFieldValue;
  invoiceEntegset?: NumberFieldValue;
  invoiceVat?: NumberFieldValue;
  invoiceAdddiscounts?: NumberFieldValue;
  invoiceTotaldiscounts?: NumberFieldValue;
  invoiceTotaldiscounted?: NumberFieldValue;
  invoiceAddexpenses?: NumberFieldValue;
  invoiceTotalexpenses?: NumberFieldValue;
  invoiceDistexpense?: NumberFieldValue;
  invoiceTotaldepozito?: NumberFieldValue;
  invoiceTotalpromotions?: NumberFieldValue;
  invoiceVatincgross?: NumberFieldValue;
  invoiceTotalvat?: NumberFieldValue;
  invoiceGrosstotal?: NumberFieldValue;
  invoiceNettotal?: NumberFieldValue;
  invoiceNotes1?: StringFieldValue;
  invoiceNotes2?: StringFieldValue;
  invoiceNotes3?: StringFieldValue;
  invoiceNotes4?: StringFieldValue;
  invoiceInterestapp?: NumberFieldValue;
  invoiceCurrTrans?: NumberFieldValue;
  invoiceTcXrate?: NumberFieldValue;
  invoiceTcAmount?: NumberFieldValue;
  invoiceRcXrate?: NumberFieldValue;
  invoiceRcAmount?: NumberFieldValue;
  invoiceSinglePayment?: NumberFieldValue;
  invoiceKastransref?: NumberFieldValue;
  invoicePaydefref?: NumberFieldValue;
  invoicePrintCnt?: NumberFieldValue;
  invoicePrintDate?: StringFieldValue;
  invoiceGvatinc?: NumberFieldValue;
  invoiceBranch?: NumberFieldValue;
  invoiceDepartment?: NumberFieldValue;
  invoiceAccficheref?: NumberFieldValue;
  invoiceAddexpaccref?: NumberFieldValue;
  invoiceAddexpcentref?: NumberFieldValue;
  invoiceDecprdiff?: NumberFieldValue;
  invoiceCreatedBy?: NumberFieldValue;
  invoiceDateCreated?: StringFieldValue;
  invoiceHourCreated?: NumberFieldValue;
  invoiceMinCreated?: NumberFieldValue;
  invoiceSecCreated?: NumberFieldValue;
  invoiceModifiedBy?: NumberFieldValue;
  invoiceDateModified?: StringFieldValue;
  invoiceHourModified?: NumberFieldValue;
  invoiceMinModified?: NumberFieldValue;
  invoiceSecModified?: NumberFieldValue;
  invoiceSalesmanref?: NumberFieldValue;
  invoiceCancelledacc?: NumberFieldValue;
  invoiceShptypcod?: StringFieldValue;
  invoiceShpagncod?: StringFieldValue;
  invoiceTracknr?: StringFieldValue;
  invoiceGenexctyp?: NumberFieldValue;
  invoiceCurrselTrans?: NumberFieldValue;
  invoiceTradingGrp?: StringFieldValue;
  invoiceTextinc?: NumberFieldValue;
  invoiceDataSiteid?: NumberFieldValue;
  invoiceXmlAttribute?: NumberFieldValue;
  invoiceDataReference?: NumberFieldValue;
  invoiceFactorynr?: NumberFieldValue;
  invoiceWfstatus?: NumberFieldValue;
  invoiceShipinforef?: NumberFieldValue;
  invoiceDistorderref?: NumberFieldValue;
  invoiceSendcnt?: NumberFieldValue;
  invoiceDlvclient?: NumberFieldValue;
  invoiceCostofsalefcref?: NumberFieldValue;
  invoiceOpstat?: NumberFieldValue;
  invoiceDoctrackingnr?: StringFieldValue;
  invoiceTotaladdtax?: NumberFieldValue;
  invoicePaymenttype?: NumberFieldValue;
  invoiceInflationIdx?: NumberFieldValue;
  branchname?: StringFieldValue;
  deptname?: StringFieldValue;
  ohpCode4?: StringFieldValue;
  totbefvat?: NumberFieldValue;
  rolledamount?: NumberFieldValue;
  rolledlnnr?: NumberFieldValue;
  csduedate?: StringFieldValue;
  glCode1?: StringFieldValue;
  glCode2?: StringFieldValue;
  glCode3?: StringFieldValue;
  ohpCode1?: StringFieldValue;
  ohpCode2?: StringFieldValue;
  ohpCode3?: StringFieldValue;
  xcnt?: NumberFieldValue;
  curop?: NumberFieldValue;
  rolllnptr?: StringFieldValue;
  currstr?: StringFieldValue;
  clcardactive?: NumberFieldValue;
  payplactive?: NumberFieldValue;
  edtdebit?: NumberFieldValue;
  edtcredit?: NumberFieldValue;
  edtcurr?: NumberFieldValue;
  edtbefvat?: NumberFieldValue;
  edttotal?: NumberFieldValue;
  edttotvat?: NumberFieldValue;
  edtintapp?: NumberFieldValue;
  dscpaytot?: NumberFieldValue;
  dsccshmax?: NumberFieldValue;
  fichep?: NumberFieldValue;
  cashTranGrpNo?: StringFieldValue;
  cashTranGrplineNo?: NumberFieldValue;
  cashInfldx?: NumberFieldValue;
  invoiceOrglogoid?: StringFieldValue;
  cashOrglogoid?: StringFieldValue;
  projectref?: NumberFieldValue;
  projectcode?: StringFieldValue;
  grpfirmtrans?: NumberFieldValue;
  affectRisk?: NumberFieldValue;
  invoiceAffectCollatrl?: NumberFieldValue;
  orglogoid?: StringFieldValue;
  glCode5?: StringFieldValue;
  ohpCode5?: StringFieldValue;
  approve?: NumberFieldValue;
  approveDate?: StringFieldValue;
  accFicheSiteid?: NumberFieldValue;
  cancelAutoGlProc?: NumberFieldValue;
  docDate?: StringFieldValue;
  staffOtherExpenses?: NumberFieldValue;
  deliveryCode?: StringFieldValue;
  acceptEinvPublic?: NumberFieldValue;
  publicbnaccref?: NumberFieldValue;
  publicBnaccCode?: StringFieldValue;
  publicBnaccIban?: StringFieldValue;
  publicBnaccCurrency?: NumberFieldValue;
  typeCode?: StringFieldValue;
  futureMonthYrexpinc?: NumberFieldValue;
  docDetail?: NumberFieldValue;
  calcAddTaxVatSep?: NumberFieldValue;
  esendDate?: StringFieldValue;
  electDoc?: NumberFieldValue;
  offerReference?: NumberFieldValue;
  serviceReason?: StringFieldValue;
  einvoice?: NumberFieldValue;
  profileId?: NumberFieldValue;
  estatus?: NumberFieldValue;
  estartdate?: StringFieldValue;
  eenddate?: StringFieldValue;
  edescription?: StringFieldValue;
  eduration?: NumberFieldValue;
  edurationType?: NumberFieldValue;
  einsteadOfDispatch?: NumberFieldValue;
  einvoiceType?: NumberFieldValue;
  earchivedetrLogicalref?: NumberFieldValue;
  earchivedetrInvoiceref?: NumberFieldValue;
  earchivedetrInstallmentnumber?: StringFieldValue;
  earchivedetrEarchivestatus?: NumberFieldValue;
  earchivedetrEarchivestatusold?: NumberFieldValue;
  earchivedetrSendmod?: NumberFieldValue;
  earchivedetrIntsalesaddr?: StringFieldValue;
  earchivedetrIntpaymentdesc?: StringFieldValue;
  earchivedetrIntpaymenttype?: NumberFieldValue;
  earchivedetrIntpaymentagent?: StringFieldValue;
  earchivedetrIntpaymentdateorg?: NumberFieldValue;
  earchivedetrIntpaymentdate?: StringFieldValue;
  earchivedetrOckserialnumber?: StringFieldValue;
  earchivedetrOckznumber?: StringFieldValue;
  earchivedetrOckfichenumber?: StringFieldValue;
  earchivedetrOckfichedateorg?: NumberFieldValue;
  earchivedetrOckfichedate?: StringFieldValue;
  earchivedetrIscomp?: NumberFieldValue;
  earchivedetrTaxnr?: StringFieldValue;
  earchivedetrTckno?: StringFieldValue;
  earchivedetrName?: StringFieldValue;
  earchivedetrSurname?: StringFieldValue;
  earchivedetrDefinition?: StringFieldValue;
  earchivedetrAddr1?: StringFieldValue;
  earchivedetrAddr2?: StringFieldValue;
  earchivedetrCitycode?: StringFieldValue;
  earchivedetrCity?: StringFieldValue;
  earchivedetrCountrycode?: StringFieldValue;
  earchivedetrCountry?: StringFieldValue;
  earchivedetrPostcode?: StringFieldValue;
  earchivedetrDistrictcode?: StringFieldValue;
  earchivedetrDistrict?: StringFieldValue;
  earchivedetrTowncode?: StringFieldValue;
  earchivedetrTown?: StringFieldValue;
  earchivedetrEmailaddr?: StringFieldValue;
  earchivedetrIspercurr?: NumberFieldValue;
  earchivedetrInsteadofdesp?: NumberFieldValue;
  earchivedetrTaxoffice?: StringFieldValue;
  earchivedetrTelcodes1?: StringFieldValue;
  earchivedetrTelcodes2?: StringFieldValue;
  earchivedetrTelnrs1?: StringFieldValue;
  earchivedetrTelnrs2?: StringFieldValue;
  earchivedetrOldearchivestatus?: NumberFieldValue;
  earchivedetrDrivername1?: StringFieldValue;
  earchivedetrDriversurname1?: StringFieldValue;
  earchivedetrDrivertckno1?: StringFieldValue;
  earchivedetrPlatenum1?: StringFieldValue;
  earchivedetrChassisnum1?: StringFieldValue;
  earchivedetrDrivername2?: StringFieldValue;
  earchivedetrDriversurname2?: StringFieldValue;
  earchivedetrDrivertckno2?: StringFieldValue;
  earchivedetrPlatenum2?: StringFieldValue;
  earchivedetrChassisnum2?: StringFieldValue;
  earchivedetrDrivername3?: StringFieldValue;
  earchivedetrDriversurname3?: StringFieldValue;
  earchivedetrDrivertckno3?: StringFieldValue;
  earchivedetrPlatenum3?: StringFieldValue;
  earchivedetrChassisnum3?: StringFieldValue;
  earchivedetrChaindelivery?: NumberFieldValue;
  earchivedetrSellerclientref?: NumberFieldValue;
  earchivedetrSellerclientcode?: StringFieldValue;
  ebookDocdate?: StringFieldValue;
  ebookNodocument?: NumberFieldValue;
  ebookDocnr?: StringFieldValue;
  ebookDoctype?: NumberFieldValue;
  ebookExplain?: StringFieldValue;
  ebookPaytype?: StringFieldValue;
  ebookNopay?: NumberFieldValue;
  fromintegtype?: NumberFieldValue;
  eprintcnt?: NumberFieldValue;
  rightofreturntyp?: StringFieldValue;
  ordfichecmref?: NumberFieldValue;
  cosfcrefinfl?: NumberFieldValue;
  esendtime?: NumberFieldValue;
  receipt?: NumberFieldValue;
  ineffectivecost?: NumberFieldValue;

  // Index signature for compatibility with utility SearchCriteria type
  [key: string]: AllFieldValues;
}

/**
 * Analytics data for PaymentDifferenceInvoices entities
 */
export interface PaymentDifferenceInvoicesAnalytics {
  total: number;
  // Add PaymentDifferenceInvoices-specific analytics fields
}
