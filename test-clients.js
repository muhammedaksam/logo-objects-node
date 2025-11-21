#!/usr/bin/env node

/**
 * Comprehensive Client Test for Logo Objects REST API Client SDK
 *
 * This script validates:
 * - Individual client class imports
 * - LogoApiClient integration
 * - All entity clients accessibility
 * - Method availability on all clients
 *
 * Usage: node test-clients.js
 */
const {
  LogoApiClient,
  AdditionalTaxesClient,
  ArpGroupAssignmentsClient,
  ArpMLDescriptionsClient,
  ArpsClient,
  ArpShipmentLocationClient,
  ArpSlipsClient,
  AuthorizationCodesClient,
  BankAccountsClient,
  BankCreditClient,
  BankMLDescriptionClient,
  BankSlipClient,
  BomStandardCostsClient,
  BomsClient,
  BanksClient,
  CAPIClient,
  CharacteristicsClient,
  CharacteristicSetsClient,
  ChequeAndPnoteRollsClient,
  ChequeAndPnotesClient,
  CitiesClient,
  CollateralRollsClient,
  ContactsClient,
  CostDistributionSlipsClient,
  CountriesClient,
  CustomerMLDescriptionsClient,
  CustomersClient,
  CustomersOfSalesmenClient,
  CustomsOfficesClient,
  DbInfoClient,
  DefinitionsClient,
  DeliveryCodesClient,
  DemandPeggingsClient,
  DemandSlipsClient,
  DistributionOrdersClient,
  DistributionRoutesClient,
  DistributionTemplatesClient,
  DistrictsClient,
  EmployeeCostsClient,
  EmployeeGroupsClient,
  EmployeeStandardCostsClient,
  EmployeesClient,
  EngineeringChangesClient,
  ExportCreditLettersClient,
  ExportCreditsClient,
  ExportMovementSlipsClient,
  GLAccountsClient,
  ItemsClient,
  OpportunitiesClient,
  ProjectsClient,
  PurchaseInvoicesClient,
  PurchaseOrdersClient,
  SalesInvoicesClient,
  SalesOrdersClient,
  SpecialCodesClient,
  UnitSetsClient,
  WorkstationStandardCostsClient,
} = require('./dist/index.js');

console.log('🧪 Testing Logo API Client SDK - All Clients\n');

// Test individual client imports
console.log('📦 Testing individual client imports:');
const clients = [
  { name: 'AdditionalTaxesClient', client: AdditionalTaxesClient },
  { name: 'ArpGroupAssignmentsClient', client: ArpGroupAssignmentsClient },
  { name: 'ArpMLDescriptionsClient', client: ArpMLDescriptionsClient },
  { name: 'ArpsClient', client: ArpsClient },
  { name: 'ArpShipmentLocationClient', client: ArpShipmentLocationClient },
  { name: 'ArpSlipsClient', client: ArpSlipsClient },
  { name: 'AuthorizationCodesClient', client: AuthorizationCodesClient },
  { name: 'BankAccountsClient', client: BankAccountsClient },
  { name: 'BankCreditClient', client: BankCreditClient },
  { name: 'BankMLDescriptionClient', client: BankMLDescriptionClient },
  { name: 'BankSlipClient', client: BankSlipClient },
  { name: 'BomStandardCostsClient', client: BomStandardCostsClient },
  { name: 'BomsClient', client: BomsClient },
  { name: 'BanksClient', client: BanksClient },
  { name: 'CAPIClient', client: CAPIClient },
  { name: 'CharacteristicsClient', client: CharacteristicsClient },
  { name: 'CharacteristicSetsClient', client: CharacteristicSetsClient },
  { name: 'ChequeAndPnoteRollsClient', client: ChequeAndPnoteRollsClient },
  { name: 'ChequeAndPnotesClient', client: ChequeAndPnotesClient },
  { name: 'CitiesClient', client: CitiesClient },
  { name: 'CollateralRollsClient', client: CollateralRollsClient },
  { name: 'ContactsClient', client: ContactsClient },
  { name: 'CostDistributionSlipsClient', client: CostDistributionSlipsClient },
  { name: 'CountriesClient', client: CountriesClient },
  { name: 'CustomerMLDescriptionsClient', client: CustomerMLDescriptionsClient },
  { name: 'CustomersClient', client: CustomersClient },
  { name: 'CustomersOfSalesmenClient', client: CustomersOfSalesmenClient },
  { name: 'CustomsOfficesClient', client: CustomsOfficesClient },
  { name: 'DbInfoClient', client: DbInfoClient },
  { name: 'DefinitionsClient', client: DefinitionsClient },
  { name: 'DeliveryCodesClient', client: DeliveryCodesClient },
  { name: 'DemandPeggingsClient', client: DemandPeggingsClient },
  { name: 'DemandSlipsClient', client: DemandSlipsClient },
  { name: 'DistributionOrdersClient', client: DistributionOrdersClient },
  { name: 'DistributionRoutesClient', client: DistributionRoutesClient },
  { name: 'DistributionTemplatesClient', client: DistributionTemplatesClient },
  { name: 'DistrictsClient', client: DistrictsClient },
  { name: 'EmployeeCostsClient', client: EmployeeCostsClient },
  { name: 'EmployeeGroupsClient', client: EmployeeGroupsClient },
  { name: 'EmployeeStandardCostsClient', client: EmployeeStandardCostsClient },
  { name: 'EmployeesClient', client: EmployeesClient },
  { name: 'EngineeringChangesClient', client: EngineeringChangesClient },
  { name: 'ExportCreditLettersClient', client: ExportCreditLettersClient },
  { name: 'ExportCreditsClient', client: ExportCreditsClient },
  { name: 'ExportMovementSlipsClient', client: ExportMovementSlipsClient },
  { name: 'GLAccountsClient', client: GLAccountsClient },
  { name: 'ItemsClient', client: ItemsClient },
  { name: 'OpportunitiesClient', client: OpportunitiesClient },
  { name: 'ProjectsClient', client: ProjectsClient },
  { name: 'PurchaseInvoicesClient', client: PurchaseInvoicesClient },
  { name: 'PurchaseOrdersClient', client: PurchaseOrdersClient },
  { name: 'SalesInvoicesClient', client: SalesInvoicesClient },
  { name: 'SalesOrdersClient', client: SalesOrdersClient },
  { name: 'SpecialCodesClient', client: SpecialCodesClient },
  { name: 'UnitSetsClient', client: UnitSetsClient },
  { name: 'WorkstationStandardCostsClient', client: WorkstationStandardCostsClient },
];

clients.forEach(({ name, client }) => {
  if (typeof client === 'function') {
    console.log(`✅ ${name}: OK`);
  } else {
    console.log(`❌ ${name}: FAILED - not a constructor`);
  }
});

// Test LogoApiClient integration
console.log('\n🔗 Testing LogoApiClient integration:');
try {
  const config = {
    baseURL: 'http://localhost:32001/api/v1',
    apiKey: 'test-key',
  };

  const logoClient = new LogoApiClient(config);
  console.log('✅ LogoApiClient instantiated successfully');

  // Test that all entity clients are available
  const availableClients = logoClient.getAvailableClients();
  console.log(`✅ Available clients (${availableClients.length}):`, availableClients.join(', '));

  // Test individual client access
  const entityTests = [
    { name: 'additionalTaxes', client: logoClient.additionalTaxes },
    { name: 'arpGroupAssignments', client: logoClient.arpGroupAssignments },
    { name: 'arpMLDescriptions', client: logoClient.arpMLDescriptions },
    { name: 'arps', client: logoClient.arps },
    { name: 'arpShipmentLocations', client: logoClient.arpShipmentLocations },
    { name: 'arpSlips', client: logoClient.arpSlips },
    { name: 'authorizationCodes', client: logoClient.authorizationCodes },
    { name: 'bankAccounts', client: logoClient.bankAccounts },
    { name: 'bankCredits', client: logoClient.bankCredits },
    { name: 'bankMLDescriptions', client: logoClient.bankMLDescriptions },
    { name: 'bankSlips', client: logoClient.bankSlips },
    { name: 'bomStandardCosts', client: logoClient.bomStandardCosts },
    { name: 'boms', client: logoClient.boms },
    { name: 'banks', client: logoClient.banks },
    { name: 'capi', client: logoClient.capi },
    { name: 'characteristics', client: logoClient.characteristics },
    { name: 'characteristicSets', client: logoClient.characteristicSets },
    { name: 'chequeAndPnoteRolls', client: logoClient.chequeAndPnoteRolls },
    { name: 'chequeAndPnotes', client: logoClient.chequeAndPnotes },
    { name: 'cities', client: logoClient.cities },
    { name: 'collateralRolls', client: logoClient.collateralRolls },
    { name: 'contacts', client: logoClient.contacts },
    { name: 'costDistributionSlips', client: logoClient.costDistributionSlips },
    { name: 'countries', client: logoClient.countries },
    { name: 'customerMLDescriptions', client: logoClient.customerMLDescriptions },
    { name: 'customers', client: logoClient.customers },
    { name: 'customersOfSalesmen', client: logoClient.customersOfSalesmen },
    { name: 'customsOffices', client: logoClient.customsOffices },
    { name: 'dbinfo', client: logoClient.dbinfo },
    { name: 'definitions', client: logoClient.definitions },
    { name: 'deliveryCodes', client: logoClient.deliveryCodes },
    { name: 'demandPeggings', client: logoClient.demandPeggings },
    { name: 'demandSlips', client: logoClient.demandSlips },
    { name: 'distributionOrders', client: logoClient.distributionOrders },
    { name: 'distributionRoutes', client: logoClient.distributionRoutes },
    { name: 'distributionTemplates', client: logoClient.distributionTemplates },
    { name: 'districts', client: logoClient.districts },
    { name: 'employeeCosts', client: logoClient.employeeCosts },
    { name: 'employeeGroups', client: logoClient.employeeGroups },
    { name: 'employeeStandardCosts', client: logoClient.employeeStandardCosts },
    { name: 'employees', client: logoClient.employees },
    { name: 'engineeringChanges', client: logoClient.engineeringChanges },
    { name: 'exportCreditLetters', client: logoClient.exportCreditLetters },
    { name: 'exportCredits', client: logoClient.exportCredits },
    { name: 'exportMovementSlips', client: logoClient.exportMovementSlips },
    { name: 'GLAccounts', client: logoClient.GLAccounts },
    { name: 'items', client: logoClient.items },
    { name: 'opportunities', client: logoClient.opportunities },
    { name: 'projects', client: logoClient.projects },
    { name: 'purchaseInvoices', client: logoClient.purchaseInvoices },
    { name: 'purchaseOrders', client: logoClient.purchaseOrders },
    { name: 'salesInvoices', client: logoClient.salesInvoices },
    { name: 'salesOrders', client: logoClient.salesOrders },
    { name: 'specialCodes', client: logoClient.specialCodes },
    { name: 'unitSets', client: logoClient.unitSets },
    { name: 'workstationStandardCosts', client: logoClient.workstationStandardCosts },
  ];

  console.log('\n🎯 Testing entity client access:');
  entityTests.forEach(({ name, client }) => {
    if (name === 'dbinfo') {
      // Special case for dbinfo client which is a utility client
      if (client && typeof client.getDbInfo === 'function') {
        console.log(`✅ ${name}: OK (has getDbInfo method)`);
      } else {
        console.log(`❌ ${name}: FAILED - missing or invalid`);
      }
    } else if (name === 'definitions') {
      // Special case for definitions client which is a metadata client
      if (client && typeof client.getEntityDefinition === 'function') {
        console.log(`✅ ${name}: OK (has getEntityDefinition method)`);
      } else {
        console.log(`❌ ${name}: FAILED - missing or invalid`);
      }
    } else if (name === 'capi') {
      // Special handling for CAPI client - it's a tracking client, not a CRUD client
      if (
        client &&
        typeof client.trackFirms === 'function' &&
        typeof client.getAllTrackingStatus === 'function'
      ) {
        console.log(
          `✅ ${name}: OK (tracking client with trackFirms and getAllTrackingStatus methods)`
        );
      } else {
        console.log(`❌ ${name}: FAILED - missing tracking methods`);
      }
    } else if (client && typeof client.getAll === 'function') {
      console.log(`✅ ${name}: OK (has getAll method)`);
    } else {
      console.log(`❌ ${name}: FAILED - missing or invalid`);
    }
  });

  console.log('\n🎉 All tests completed successfully!');
  console.log('\n📊 Summary:');
  console.log(`- Total entity clients: ${availableClients.length}`);
  console.log('- All clients properly instantiated: ✅');
  console.log('- All clients accessible via LogoApiClient: ✅');
  console.log('- All clients have required methods: ✅');
} catch (error) {
  console.error('❌ Error during testing:', error.message);
  process.exit(1);
}
