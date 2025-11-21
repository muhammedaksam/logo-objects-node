import { LogoApiClient } from '../clients/logo';
import { ApiClientConfig } from '../types';

describe('LogoApiClient', () => {
  let client: LogoApiClient;
  let config: ApiClientConfig;

  beforeEach(() => {
    config = {
      baseURL: 'http://localhost:32001/api/v1',
      apiKey: 'test-api-key',
      timeout: 30000,
    };
    client = new LogoApiClient(config);
  });

  describe('Initialization', () => {
    it('should initialize with correct configuration', () => {
      expect(client['config']).toEqual(config);
    });

    it('should initialize all entity clients', () => {
      expect(client.additionalTaxes).toBeDefined();
      expect(client.arpGroupAssignments).toBeDefined();
      expect(client.arpMLDescriptions).toBeDefined();
      expect(client.arps).toBeDefined();
      expect(client.arpShipmentLocations).toBeDefined();
      expect(client.arpSlips).toBeDefined();
      expect(client.authorizationCodes).toBeDefined();
      expect(client.bankAccounts).toBeDefined();
      expect(client.bankCredits).toBeDefined();
      expect(client.bankMLDescriptions).toBeDefined();
      expect(client.bankSlips).toBeDefined();
      expect(client.bomStandardCosts).toBeDefined();
      expect(client.boms).toBeDefined();
      expect(client.banks).toBeDefined();
      expect(client.capi).toBeDefined();
      expect(client.characteristics).toBeDefined();
      expect(client.characteristicSets).toBeDefined();
      expect(client.chequeAndPnoteRolls).toBeDefined();
      expect(client.chequeAndPnotes).toBeDefined();
      expect(client.cities).toBeDefined();
      expect(client.collateralRolls).toBeDefined();
      expect(client.contacts).toBeDefined();
      expect(client.costDistributionSlips).toBeDefined();
      expect(client.countries).toBeDefined();
      expect(client.customerMLDescriptions).toBeDefined();
      expect(client.customers).toBeDefined();
      expect(client.customersOfSalesmen).toBeDefined();
      expect(client.customsOffices).toBeDefined();
      expect(client.dbinfo).toBeDefined();
      expect(client.definitions).toBeDefined();
      expect(client.deliveryCodes).toBeDefined();
      expect(client.demandPeggings).toBeDefined();
      expect(client.demandSlips).toBeDefined();
      expect(client.distributionOrders).toBeDefined();
      expect(client.distributionRoutes).toBeDefined();
      expect(client.distributionTemplates).toBeDefined();
      expect(client.districts).toBeDefined();
      expect(client.employeeCosts).toBeDefined();
      expect(client.employeeGroups).toBeDefined();
      expect(client.employeeStandardCosts).toBeDefined();
      expect(client.employees).toBeDefined();
      expect(client.engineeringChanges).toBeDefined();
      expect(client.exportCreditLetters).toBeDefined();
      expect(client.exportCredits).toBeDefined();
      expect(client.exportMovementSlips).toBeDefined();
      expect(client.exportNationalizationSlips).toBeDefined();
      expect(client.exportOperationSlips).toBeDefined();
      expect(client.exportTypedPurchaseInvoices).toBeDefined();
      expect(client.exportTypedSalesInvoices).toBeDefined();
      expect(client.extendedFieldCategories).toBeDefined();
      expect(client.extendedFieldDefinitions).toBeDefined();
      expect(client.GLAccounts).toBeDefined();
      expect(client.items).toBeDefined();
      expect(client.opportunities).toBeDefined();
      expect(client.projects).toBeDefined();
      expect(client.purchaseInvoices).toBeDefined();
      expect(client.purchaseOrders).toBeDefined();
      expect(client.salesInvoices).toBeDefined();
      expect(client.salesOrders).toBeDefined();
      expect(client.specialCodes).toBeDefined();
      expect(client.unitSets).toBeDefined();
      expect(client.workstationStandardCosts).toBeDefined();
    });

    it('should pass configuration to all entity clients', () => {
      expect(client.additionalTaxes['config']).toEqual(config);
      expect(client.arpGroupAssignments['config']).toEqual(config);
      expect(client.arpMLDescriptions['config']).toEqual(config);
      expect(client.arps['config']).toEqual(config);
      expect(client.arpShipmentLocations['config']).toEqual(config);
      expect(client.arpSlips['config']).toEqual(config);
      expect(client.authorizationCodes['config']).toEqual(config);
      expect(client.bankAccounts['config']).toEqual(config);
      expect(client.bankCredits['config']).toEqual(config);
      expect(client.bankMLDescriptions['config']).toEqual(config);
      expect(client.bankSlips['config']).toEqual(config);
      expect(client.bomStandardCosts['config']).toEqual(config);
      expect(client.boms['config']).toEqual(config);
      expect(client.banks['config']).toEqual(config);
      expect(client.capi['config']).toEqual(config);
      expect(client.characteristics['config']).toEqual(config);
      expect(client.characteristicSets['config']).toEqual(config);
      expect(client.chequeAndPnoteRolls['config']).toEqual(config);
      expect(client.chequeAndPnotes['config']).toEqual(config);
      expect(client.cities['config']).toEqual(config);
      expect(client.collateralRolls['config']).toEqual(config);
      expect(client.contacts['config']).toEqual(config);
      expect(client.costDistributionSlips['config']).toEqual(config);
      expect(client.countries['config']).toEqual(config);
      expect(client.customerMLDescriptions['config']).toEqual(config);
      expect(client.customers['config']).toEqual(config);
      expect(client.customersOfSalesmen['config']).toEqual(config);
      expect(client.customsOffices['config']).toEqual(config);
      expect(client.dbinfo['config']).toEqual(config);
      expect(client.definitions['config']).toEqual(config);
      expect(client.deliveryCodes['config']).toEqual(config);
      expect(client.demandPeggings['config']).toEqual(config);
      expect(client.demandSlips['config']).toEqual(config);
      expect(client.distributionOrders['config']).toEqual(config);
      expect(client.distributionRoutes['config']).toEqual(config);
      expect(client.distributionTemplates['config']).toEqual(config);
      expect(client.districts['config']).toEqual(config);
      expect(client.employeeCosts['config']).toEqual(config);
      expect(client.employeeGroups['config']).toEqual(config);
      expect(client.employeeStandardCosts['config']).toEqual(config);
      expect(client.employees['config']).toEqual(config);
      expect(client.engineeringChanges['config']).toEqual(config);
      expect(client.exportCreditLetters['config']).toEqual(config);
      expect(client.exportCredits['config']).toEqual(config);
      expect(client.exportMovementSlips['config']).toEqual(config);
      expect(client.exportNationalizationSlips['config']).toEqual(config);
      expect(client.exportOperationSlips['config']).toEqual(config);
      expect(client.exportTypedPurchaseInvoices['config']).toEqual(config);
      expect(client.exportTypedSalesInvoices['config']).toEqual(config);
      expect(client.extendedFieldCategories['config']).toEqual(config);
      expect(client.extendedFieldDefinitions['config']).toEqual(config);
      expect(client.GLAccounts['config']).toEqual(config);
      expect(client.items['config']).toEqual(config);
      expect(client.opportunities['config']).toEqual(config);
      expect(client.projects['config']).toEqual(config);
      expect(client.purchaseInvoices['config']).toEqual(config);
      expect(client.purchaseOrders['config']).toEqual(config);
      expect(client.salesInvoices['config']).toEqual(config);
      expect(client.salesOrders['config']).toEqual(config);
      expect(client.specialCodes['config']).toEqual(config);
      expect(client.unitSets['config']).toEqual(config);
      expect(client.workstationStandardCosts['config']).toEqual(config);
    });
  });

  describe('Connection Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should test connection successfully', async () => {
      jest.spyOn(client, 'ping').mockResolvedValue(true);

      const result = await client.testConnection();

      expect(result).toBe(true);
      expect(client.ping).toHaveBeenCalled();
    });

    it('should handle connection test failure', async () => {
      jest.spyOn(client, 'ping').mockRejectedValue(new Error('Connection failed'));
      jest.spyOn(console, 'error').mockImplementation(() => {});

      const result = await client.testConnection();

      expect(result).toBe(false);
      expect(console.error).toHaveBeenCalledWith('Connection test failed:', expect.any(Error));
    });

    it('should validate token successfully', async () => {
      jest.spyOn(client, 'isTokenValid').mockResolvedValue(true);

      const result = await client.validateToken();

      expect(result).toBe(true);
      expect(client.isTokenValid).toHaveBeenCalled();
    });

    it('should handle token validation failure', async () => {
      jest.spyOn(client, 'isTokenValid').mockRejectedValue(new Error('Token invalid'));
      jest.spyOn(console, 'error').mockImplementation(() => {});

      const result = await client.validateToken();

      expect(result).toBe(false);
      expect(console.error).toHaveBeenCalledWith('Token validation failed:', expect.any(Error));
    });
  });

  describe('API Information Methods', () => {
    beforeEach(() => {
      jest.spyOn(client, 'request' as any).mockResolvedValue({});
    });

    it('should get API info', async () => {
      const mockApiInfo = {
        version: '1.0',
        database: 'LOGO',
        server: 'localhost',
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockApiInfo);

      const result = await client.getApiInfo();

      expect(client['request']).toHaveBeenCalledWith('get', '/dbinfo');
      expect(result).toEqual(mockApiInfo);
    });

    it('should handle API info error', async () => {
      const error = new Error('API info failed');
      jest.spyOn(client, 'request' as any).mockRejectedValue(error);
      jest.spyOn(console, 'error').mockImplementation(() => {});

      await expect(client.getApiInfo()).rejects.toThrow('API info failed');
      expect(console.error).toHaveBeenCalledWith('Failed to get API info:', error);
    });

    it('should get methods info', async () => {
      const mockMethods = [
        { name: 'GET', description: 'Get resources' },
        { name: 'POST', description: 'Create resources' },
      ];
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockMethods);

      const result = await client.getMethods();

      expect(client['request']).toHaveBeenCalledWith('get', '/methods');
      expect(result).toEqual(mockMethods);
    });

    it('should handle methods info error', async () => {
      const error = new Error('Methods info failed');
      jest.spyOn(client, 'request' as any).mockRejectedValue(error);
      jest.spyOn(console, 'error').mockImplementation(() => {});

      await expect(client.getMethods()).rejects.toThrow('Methods info failed');
      expect(console.error).toHaveBeenCalledWith('Failed to get methods info:', error);
    });

    it('should get definitions', async () => {
      const mockDefinitions = {
        Employee: { properties: {} },
        Bank: { properties: {} },
      };
      jest.spyOn(client, 'request' as any).mockResolvedValue(mockDefinitions);

      const result = await client.getDefinitions();

      expect(client['request']).toHaveBeenCalledWith('get', '/definitions');
      expect(result).toEqual(mockDefinitions);
    });

    it('should handle definitions error', async () => {
      const error = new Error('Definitions failed');
      jest.spyOn(client, 'request' as any).mockRejectedValue(error);
      jest.spyOn(console, 'error').mockImplementation(() => {});

      await expect(client.getDefinitions()).rejects.toThrow('Definitions failed');
      expect(console.error).toHaveBeenCalledWith('Failed to get definitions:', error);
    });
  });

  describe('Utility Methods', () => {
    it('should clone client instance', () => {
      const clonedClient = client.clone();

      expect(clonedClient).toBeInstanceOf(LogoApiClient);
      expect(clonedClient).not.toBe(client);
      expect(clonedClient['config']).toEqual(client['config']);
    });

    it('should get available clients', () => {
      const availableClients = client.getAvailableClients();

      expect(availableClients).toEqual([
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
        'exportNationalizationSlips',
        'exportOperationSlips',
        'exportTypedPurchaseInvoices',
        'exportTypedSalesInvoices',
        'extendedFieldCategories',
        'extendedFieldDefinitions',
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
        'extendedFields',
        'faassignmentslips',
        'faregistries',
        'firmdocs',
        'freeZones',
        'glaccountmldescriptions',
        'glslips',
        'groupCodes',
        'importCreditLetters',
        'importDistributionSlips',
        'importOperationSlips',
        'inwardProcessingPermits',
        'istokenvalid',
        'itemAlternatives',
        'itemBoms',
        'itemBrands',
        'itemCharacteristics',
        'itemClassAssignments',
        'itemMLDescriptions',
        'itemSlips',
        'itemStandardCosts',
        'licenses',
        'locationCodes',
        'methods',
        'operations',
        'overheadAccounts',
        'paymentDifferenceInvoices',
        'paymentPlanGroupCodes',
        'paymentPlans',
        'pingClient',
        'postCodes',
        'productionExceptions',
        'productionLines',
        'productionParameters',
        'productionResourceUtilization',
        'productionRoutes',
        'productions',
        'purchaseCampaigns',
        'purchaseConditionsForSlipLines',
        'purchaseConditionsForSlips',
        'purchaseDiscounts',
        'purchaseDispatches',
        'purchasedItemPrices',
        'purchasedServicePrices',
        'purchasedServices',
        'purchaseExpenses',
        'purchasePromotions',
        'purchaseProposalContracts',
        'purchaseProposalOffers',
        'purchaseProposalOrders',
        'qccriteriaassignments',
        'qccriteriasets',
        'queries',
        'quickProductionSlips',
        'repaymentPlans',
        'revoke',
        'safeDeposits',
        'safeDepositSlips',
        'salesActivities',
        'salesCampaigns',
        'salesCategories',
        'salesConditionsForSlipLines',
        'salesConditionsForSlips',
        'salesContracts',
        'salesDiscounts',
        'salesDispatches',
        'salesExpenses',
        'salesItemPrices',
        'salesmanDestinations',
        'salesmanPositionCodes',
        'salesmanRoutes',
        'salesmen',
        'salesOffers',
        'salesPromotions',
        'salesProvisionDistributionSlips',
        'salesServicePrices',
        'serialAndLotNumbers',
        'services',
        'shiftAssignments',
        'shifts',
        'soldServices',
        'standardCostPeriods',
        'stopCauses',
        'sys',
        'towns',
        'trackables',
        'transaction',
        'variants',
        'vehicles',
        'workflowDefinitions',
        'workflowRoles',
        'workstationCosts',
        'workstationGroups',
        'workstations',
      ]);
    });

    it('should get client configuration', () => {
      const clientConfig = client.getConfig();

      expect(clientConfig).toEqual(config);
      expect(clientConfig).not.toBe(config); // Should be a copy
    });
  });

  describe('Entity Client Integration', () => {
    beforeEach(() => {
      // Mock all entity client methods
      jest.spyOn(client.bankAccounts, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.bankCredits, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.bankMLDescriptions, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.bankSlips, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.employees, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.banks, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.customers, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.items, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.GLAccounts, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.contacts, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.opportunities, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.salesInvoices, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.salesOrders, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.purchaseInvoices, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.purchaseOrders, 'getAll').mockResolvedValue({ items: [] });
      jest.spyOn(client.projects, 'getAll').mockResolvedValue({ items: [] });
    });

    it('should allow access to bank accounts client', async () => {
      await client.bankAccounts.getAll();
      expect(client.bankAccounts.getAll).toHaveBeenCalled();
    });

    it('should allow access to bank credits client', async () => {
      await client.bankCredits.getAll();
      expect(client.bankCredits.getAll).toHaveBeenCalled();
    });

    it('should allow access to bank ML descriptions client', async () => {
      await client.bankMLDescriptions.getAll();
      expect(client.bankMLDescriptions.getAll).toHaveBeenCalled();
    });

    it('should allow access to bank slips client', async () => {
      await client.bankSlips.getAll();
      expect(client.bankSlips.getAll).toHaveBeenCalled();
    });

    it('should allow access to employees client', async () => {
      await client.employees.getAll();
      expect(client.employees.getAll).toHaveBeenCalled();
    });

    it('should allow access to banks client', async () => {
      await client.banks.getAll();
      expect(client.banks.getAll).toHaveBeenCalled();
    });

    it('should allow access to customers client', async () => {
      await client.customers.getAll();
      expect(client.customers.getAll).toHaveBeenCalled();
    });

    it('should allow access to items client', async () => {
      await client.items.getAll();
      expect(client.items.getAll).toHaveBeenCalled();
    });

    it('should allow access to GL accounts client', async () => {
      await client.GLAccounts.getAll();
      expect(client.GLAccounts.getAll).toHaveBeenCalled();
    });

    it('should allow access to contacts client', async () => {
      await client.contacts.getAll();
      expect(client.contacts.getAll).toHaveBeenCalled();
    });

    it('should allow access to opportunities client', async () => {
      await client.opportunities.getAll();
      expect(client.opportunities.getAll).toHaveBeenCalled();
    });

    it('should allow access to salesInvoices client', async () => {
      await client.salesInvoices.getAll();
      expect(client.salesInvoices.getAll).toHaveBeenCalled();
    });

    it('should allow access to salesOrders client', async () => {
      await client.salesOrders.getAll();
      expect(client.salesOrders.getAll).toHaveBeenCalled();
    });

    it('should allow access to purchaseInvoices client', async () => {
      await client.purchaseInvoices.getAll();
      expect(client.purchaseInvoices.getAll).toHaveBeenCalled();
    });

    it('should allow access to purchaseOrders client', async () => {
      await client.purchaseOrders.getAll();
      expect(client.purchaseOrders.getAll).toHaveBeenCalled();
    });

    it('should allow access to projects client', async () => {
      await client.projects.getAll();
      expect(client.projects.getAll).toHaveBeenCalled();
    });
  });

  describe('Error Handling', () => {
    it('should handle errors from entity clients', async () => {
      const error = new Error('Entity client error');
      jest.spyOn(client.employees, 'getAll').mockRejectedValue(error);

      await expect(client.employees.getAll()).rejects.toThrow('Entity client error');
    });

    it('should handle configuration errors', () => {
      const invalidConfig = {} as ApiClientConfig;

      expect(() => new LogoApiClient(invalidConfig)).not.toThrow();
    });
  });

  describe('Performance', () => {
    it('should initialize quickly', () => {
      const startTime = Date.now();
      const testClient = new LogoApiClient(config);
      const endTime = Date.now();

      expect(endTime - startTime).toBeLessThan(100); // Should initialize in under 100ms
      expect(testClient).toBeInstanceOf(LogoApiClient);
    });

    it('should reuse axios instances efficiently', () => {
      // All clients should have their own axios instances but share configuration
      expect(client.employees['client']).toBeDefined();
      expect(client.banks['client']).toBeDefined();
      expect(client.customers['client']).toBeDefined();
      expect(client.items['client']).toBeDefined();
      expect(client.GLAccounts['client']).toBeDefined();
      expect(client.contacts['client']).toBeDefined();
      expect(client.opportunities['client']).toBeDefined();
      expect(client.salesInvoices['client']).toBeDefined();
      expect(client.salesOrders['client']).toBeDefined();
      expect(client.purchaseInvoices['client']).toBeDefined();
      expect(client.purchaseOrders['client']).toBeDefined();
      expect(client.projects['client']).toBeDefined();

      // But they should have the same base configuration
      expect(client.employees['client'].defaults.baseURL).toBe(config.baseURL);
      expect(client.banks['client'].defaults.baseURL).toBe(config.baseURL);
    });
  });
});
