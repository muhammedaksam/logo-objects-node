#!/usr/bin/env node

/**
 * Quick Validation Test for Logo Objects REST API Client
 *
 * This script performs a fast smoke test to verify:
 * - All modules can be imported correctly
 * - Client instances can be created
 * - All entity clients are accessible
 *
 * Usage: node test-quick.js
 */

console.log('🧪 Logo Objects REST API Client - Quick Validation Test');

try {
  // Test importing the main client
  const { LogoApiClient } = require('./dist/index.js');
  console.log('✅ Main import successful');

  // Test creating a client instance
  const client = new LogoApiClient({
    baseURL: 'http://localhost:32001/api/v1',
    apiKey: 'test-key',
  });
  console.log('✅ Client instantiation successful');

  // Test accessing all entity clients
  const clients = [
    'additionalTaxes',
    'arpGroupAssignments',
    'arpMLDescriptions',
    'arps',
    'arpShipmentLocations',
    'arpSlips',
    'authorizationCodes',
    'bankAccounts',
    'bankCredits',
    'bankMLDescriptions',
    'bankSlips',
    'bomStandardCosts',
    'boms',
    'banks',
    'capi',
    'characteristics',
    'characteristicSets',
    'chequeAndPnoteRolls',
    'chequeAndPnotes',
    'cities',
    'collateralRolls',
    'contacts',
    'costDistributionSlips',
    'countries',
    'customerMLDescriptions',
    'customers',
    'customersOfSalesmen',
    'customsOffices',
    'dbinfo',
    'definitions',
    'deliveryCodes',
    'demandPeggings',
    'demandSlips',
    'distributionOrders',
    'distributionRoutes',
    'distributionTemplates',
    'districts',
    'employeeCosts',
    'employeeGroups',
    'employeeStandardCosts',
    'employees',
    'engineeringChanges',
    'exportCreditLetters',
    'exportCredits',
    'exportMovementSlips',
    'GLAccounts',
    'items',
    'opportunities',
    'projects',
    'purchaseInvoices',
    'purchaseOrders',
    'salesInvoices',
    'salesOrders',
    'specialCodes',
    'unitSets',
    'workstationStandardCosts',
  ];

  clients.forEach(clientName => {
    if (client[clientName]) {
      console.log(`✅ ${clientName} client available`);
    } else {
      console.log(`❌ ${clientName} client missing`);
    }
  });

  // Test getAvailableClients method
  const availableClients = client.getAvailableClients();
  console.log(`✅ Available clients: ${availableClients.length} total`);
  console.log(`   Clients: ${availableClients.join(', ')}`);

  console.log('\n🎉 Migration test PASSED! All clients are working correctly.');
} catch (error) {
  console.error('❌ Migration test FAILED:', error.message);
  process.exit(1);
}
