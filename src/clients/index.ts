/**
 * Centralized clients index - exports all entity clients and types
 * Auto-generated exports for all 156 Logo Objects API clients
 */

// Export individual client modules (alphabetically sorted)
export * from './additionalTaxes';
export * from './ArpGroupAssignments';
export * from './ArpMLDescriptons';
export * from './Arps';
export * from './ArpShipmentLocations';
export * from './ArpSlips';
export * from './authorizationCodes';
export * from './bankAccounts';
export * from './bankCredits';
export * from './bankMLDescriptions';
export * from './banks';
export * from './bankSlips';
export * from './Boms';
export * from './BomStandardCosts';
export * from './CAPI';
export * from './characteristics';
export * from './characteristicSets';
export * from './chequeAndPnoteRolls';
export * from './chequeAndPnotes';
export * from './cities';
export * from './collateralRolls';
export * from './contacts';
export * from './costDistributionSlips';
export * from './countries';
export * from './customerMLDescriptions';
export * from './customers';
export * from './customersOfSalesmen';
export * from './customsOffices';
export * from './dbinfo';
export * from './definitions';
export * from './deliveryCodes';
export * from './demandPeggings';
export * from './demandSlips';
export * from './distributionOrders';
export * from './distributionRoutes';
export * from './distributionTemplates';
export * from './districts';
export * from './employeeCosts';
export * from './employeeGroups';
export * from './employees';
export * from './employeeStandardCosts';
export * from './engineeringChanges';
export * from './exportCreditLetters';
export * from './exportCredits';
export * from './exportMovementSlips';
export * from './exportNationalizationSlips';
export * from './exportOperationSlips';
export * from './exportTypedPurchaseInvoices';
export * from './exportTypedSalesInvoices';
export * from './extendedFieldCategories';
export * from './extendedFieldDefinitions';
export * from './extendedFields';
export * from './FAAssignmentSlips';
export * from './FARegistries';
export * from './Firmdocs';
export * from './freeZones';
export * from './GLAccountMLDescriptions';
export * from './GLAccounts';
export * from './GLSlips';
export * from './groupCodes';
export * from './importCreditLetters';
export * from './importDistributionSlips';
export * from './importOperationSlips';
export * from './inwardProcessingPermits';
export * from './istokenvalid';
export * from './itemAlternatives';
export * from './itemBoms';
export * from './itemBrands';
export * from './itemCharacteristics';
export * from './itemClassAssignments';
export * from './itemMLDescriptions';
export * from './items';
export * from './itemSlips';
export * from './itemStandardCosts';
export * from './licenses';
export * from './locationCodes';
export * from './methods';
export * from './operations';
export * from './opportunities';
export * from './overheadAccounts';
export * from './paymentDifferenceInvoices';
export * from './paymentPlanGroupCodes';
export * from './paymentPlans';
export * from './ping';
export * from './postCodes';
export * from './productionExceptions';
export * from './productionLines';
export * from './productionParameters';
export * from './productionResourceUtilization';
export * from './productionRoutes';
export * from './productions';
export * from './projects';
export * from './purchaseCampaigns';
export * from './purchaseConditionsForSlipLines';
export * from './purchaseConditionsForSlips';
export * from './purchaseDiscounts';
export * from './purchaseDispatches';
export * from './purchasedItemPrices';
export * from './purchasedServicePrices';
export * from './purchasedServices';
export * from './purchaseExpenses';
export * from './purchaseInvoices';
export * from './purchaseOrders';
export * from './purchasePromotions';
export * from './purchaseProposalContracts';
export * from './purchaseProposalOffers';
export * from './purchaseProposalOrders';
export * from './QCCriteriaAssignments';
export * from './QCCriteriaSets';
export * from './Queries';
export * from './quickProductionSlips';
export * from './repaymentPlans';
export * from './revoke';
export * from './safeDeposits';
export * from './safeDepositSlips';
export * from './salesActivities';
export * from './salesCampaigns';
export * from './salesCategories';
export * from './salesConditionsForSlipLines';
export * from './salesConditionsForSlips';
export * from './salesContracts';
export * from './salesDiscounts';
export * from './salesDispatches';
export * from './salesExpenses';
export * from './salesInvoices';
export * from './salesItemPrices';
export * from './salesmanDestinations';
export * from './salesmanPositionCodes';
export * from './salesmanRoutes';
export * from './salesmen';
export * from './salesOffers';
export * from './salesOrders';
export * from './salesPromotions';
export * from './salesProvisionDistributionSlips';
export * from './salesServicePrices';
export * from './serialAndLotNumbers';
export * from './services';
export * from './shiftAssignments';
export * from './shifts';
export * from './soldServices';
export * from './specialCodes';
export * from './standardCostPeriods';
export * from './stopCauses';
export * from './sys';
export * from './towns';
export * from './trackables';
export * from './transaction';
export * from './unitSets';
export * from './variants';
export * from './vehicles';
export * from './workflowDefinitions';
export * from './workflowRoles';
export * from './workstationCosts';
export * from './workstationGroups';
export * from './workstations';
export * from './workstationStandardCosts';

// Export main client and base types from new locations
export { LogoApiClient } from './logo';
export { BaseApiClient } from './base';

// Export base types selectively to avoid conflicts
export type {
  ApiResponse,
  BaseEntity,
  QueryOptions,
  ApiClientConfig,
  ApiError,
  EntityType,
} from '../types';
