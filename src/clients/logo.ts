import { BaseApiClient } from './base';
import { AdditionalTaxesClient } from './additionalTaxes';
import { ArpGroupAssignmentsClient } from './ArpGroupAssignments';
import { ArpMLDescriptonsClient } from './ArpMLDescriptons';
import { ArpsClient } from './Arps';
import { ArpShipmentLocationsClient } from './ArpShipmentLocations';
import { ArpSlipsClient } from './ArpSlips';
import { AuthorizationCodesClient } from './authorizationCodes';
import { BankAccountsClient } from './bankAccounts';
import { BankCreditsClient } from './bankCredits';
import { BankMLDescriptionsClient } from './bankMLDescriptions';
import { BankSlipsClient } from './bankSlips';
import { BomStandardCostsClient } from './BomStandardCosts';
import { BomsClient } from './Boms';
import { CapiClient } from './CAPI';
import { CharacteristicsClient } from './characteristics';
import { CharacteristicSetsClient } from './characteristicSets';
import { ChequeAndPnoteRollsClient } from './chequeAndPnoteRolls';
import { ChequeAndPnotesClient } from './chequeAndPnotes';
import { CitiesClient } from './cities';
import { CollateralRollsClient } from './collateralRolls';
import { CostDistributionSlipsClient } from './costDistributionSlips';
import { CountriesClient } from './countries';
import { CustomerMLDescriptionsClient } from './customerMLDescriptions';
import { ExtendedFieldsClient } from './extendedFields';
import { FaassignmentslipsClient } from './FAAssignmentSlips';
import { FaregistriesClient } from './FARegistries';
import { FirmdocsClient } from './Firmdocs';
import { FreeZonesClient } from './freeZones';
import { GlaccountmldescriptionsClient } from './GLAccountMLDescriptions';
import { GlslipsClient } from './GLSlips';
import { GroupCodesClient } from './groupCodes';
import { ImportCreditLettersClient } from './importCreditLetters';
import { ImportDistributionSlipsClient } from './importDistributionSlips';
import { ImportOperationSlipsClient } from './importOperationSlips';
import { InwardProcessingPermitsClient } from './inwardProcessingPermits';
import { IstokenvalidClient } from './istokenvalid';
import { ItemAlternativesClient } from './itemAlternatives';
import { ItemBomsClient } from './itemBoms';
import { ItemBrandsClient } from './itemBrands';
import { ItemCharacteristicsClient } from './itemCharacteristics';
import { ItemClassAssignmentsClient } from './itemClassAssignments';
import { ItemMLDescriptionsClient } from './itemMLDescriptions';
import { ItemSlipsClient } from './itemSlips';
import { ItemStandardCostsClient } from './itemStandardCosts';
import { LicensesClient } from './licenses';
import { LocationCodesClient } from './locationCodes';
import { MethodsClient } from './methods';
import { OperationsClient } from './operations';
import { OverheadAccountsClient } from './overheadAccounts';
import { PaymentDifferenceInvoicesClient } from './paymentDifferenceInvoices';
import { PaymentPlanGroupCodesClient } from './paymentPlanGroupCodes';
import { PaymentPlansClient } from './paymentPlans';
import { PingClient } from './ping';
import { PostCodesClient } from './postCodes';
import { ProductionExceptionsClient } from './productionExceptions';
import { ProductionLinesClient } from './productionLines';
import { ProductionParametersClient } from './productionParameters';
import { ProductionResourceUtilizationClient } from './productionResourceUtilization';
import { ProductionRoutesClient } from './productionRoutes';
import { ProductionsClient } from './productions';
import { PurchaseCampaignsClient } from './purchaseCampaigns';
import { PurchaseConditionsForSlipLinesClient } from './purchaseConditionsForSlipLines';
import { PurchaseConditionsForSlipsClient } from './purchaseConditionsForSlips';
import { PurchaseDiscountsClient } from './purchaseDiscounts';
import { PurchaseDispatchesClient } from './purchaseDispatches';
import { PurchasedItemPricesClient } from './purchasedItemPrices';
import { PurchasedServicePricesClient } from './purchasedServicePrices';
import { PurchasedServicesClient } from './purchasedServices';
import { PurchaseExpensesClient } from './purchaseExpenses';
import { PurchasePromotionsClient } from './purchasePromotions';
import { PurchaseProposalContractsClient } from './purchaseProposalContracts';
import { PurchaseProposalOffersClient } from './purchaseProposalOffers';
import { PurchaseProposalOrdersClient } from './purchaseProposalOrders';
import { QccriteriaassignmentsClient } from './QCCriteriaAssignments';
import { QccriteriasetsClient } from './QCCriteriaSets';
import { QueriesClient } from './Queries';
import { QuickProductionSlipsClient } from './quickProductionSlips';
import { RepaymentPlansClient } from './repaymentPlans';
import { RevokeClient } from './revoke';
import { SafeDepositsClient } from './safeDeposits';
import { SafeDepositSlipsClient } from './safeDepositSlips';
import { SalesActivitiesClient } from './salesActivities';
import { SalesCampaignsClient } from './salesCampaigns';
import { SalesCategoriesClient } from './salesCategories';
import { SalesConditionsForSlipLinesClient } from './salesConditionsForSlipLines';
import { SalesConditionsForSlipsClient } from './salesConditionsForSlips';
import { SalesContractsClient } from './salesContracts';
import { SalesDiscountsClient } from './salesDiscounts';
import { SalesDispatchesClient } from './salesDispatches';
import { SalesExpensesClient } from './salesExpenses';
import { SalesItemPricesClient } from './salesItemPrices';
import { SalesmanDestinationsClient } from './salesmanDestinations';
import { SalesmanPositionCodesClient } from './salesmanPositionCodes';
import { SalesmanRoutesClient } from './salesmanRoutes';
import { SalesmenClient } from './salesmen';
import { SalesOffersClient } from './salesOffers';
import { SalesPromotionsClient } from './salesPromotions';
import { SalesProvisionDistributionSlipsClient } from './salesProvisionDistributionSlips';
import { SalesServicePricesClient } from './salesServicePrices';
import { SerialAndLotNumbersClient } from './serialAndLotNumbers';
import { ServicesClient } from './services';
import { ShiftAssignmentsClient } from './shiftAssignments';
import { ShiftsClient } from './shifts';
import { SoldServicesClient } from './soldServices';
import { SpecialCodesClient } from './specialCodes';
import { StandardCostPeriodsClient } from './standardCostPeriods';
import { StopCausesClient } from './stopCauses';
import { SysClient } from './sys';
import { TownsClient } from './towns';
import { TrackablesClient } from './trackables';
import { TransactionClient } from './transaction';
import { UnitSetsClient } from './unitSets';
import { EmployeesClient } from './employees';
import { BanksClient } from './banks';
import { CustomersClient } from './customers';
import { CustomersOfSalesmenClient } from './customersOfSalesmen';
import { CustomsOfficesClient } from './customsOffices';
import { DbinfoClient } from './dbinfo';
import { DefinitionsClient } from './definitions';
import { DeliveryCodesClient } from './deliveryCodes';
import { DemandPeggingsClient } from './demandPeggings';
import { DemandSlipsClient } from './demandSlips';
import { DistributionOrdersClient } from './distributionOrders';
import { DistributionRoutesClient } from './distributionRoutes';
import { DistributionTemplatesClient } from './distributionTemplates';
import { DistrictsClient } from './districts';
import { EmployeeCostsClient } from './employeeCosts';
import { EmployeeGroupsClient } from './employeeGroups';
import { EmployeeStandardCostsClient } from './employeeStandardCosts';
import { ItemsClient } from './items';
import { GlaccountsClient } from './GLAccounts';
import { ContactsClient } from './contacts';
import { OpportunitiesClient } from './opportunities';
import { SalesInvoicesClient } from './salesInvoices';
import { SalesOrdersClient } from './salesOrders';
import { PurchaseInvoicesClient } from './purchaseInvoices';
import { PurchaseOrdersClient } from './purchaseOrders';
import { ProjectsClient } from './projects';
import { VariantsClient } from './variants';
import { VehiclesClient } from './vehicles';
import { WorkflowDefinitionsClient } from './workflowDefinitions';
import { WorkflowRolesClient } from './workflowRoles';
import { WorkstationCostsClient } from './workstationCosts';
import { WorkstationGroupsClient } from './workstationGroups';
import { WorkstationsClient } from './workstations';
import { WorkstationStandardCostsClient } from './workstationStandardCosts';
import { EngineeringChangesClient } from './engineeringChanges';
import { ExportCreditLettersClient } from './exportCreditLetters';
import { ExportCreditsClient } from './exportCredits';
import { ExportMovementSlipsClient } from './exportMovementSlips';
import { ExportNationalizationSlipsClient } from './exportNationalizationSlips';
import { ExportOperationSlipsClient } from './exportOperationSlips';
import { ExportTypedPurchaseInvoicesClient } from './exportTypedPurchaseInvoices';
import { ExportTypedSalesInvoicesClient } from './exportTypedSalesInvoices';
import { ExtendedFieldCategoriesClient } from './extendedFieldCategories';
import { ExtendedFieldDefinitionsClient } from './extendedFieldDefinitions';
import { ApiClientConfig } from '../types';

/**
 * Main Logo API Client that provides access to all entity clients
 */
export class LogoApiClient extends BaseApiClient {
  public readonly additionalTaxes: AdditionalTaxesClient;
  public readonly arpGroupAssignments: ArpGroupAssignmentsClient;
  public readonly arpMLDescriptions: ArpMLDescriptonsClient;
  public readonly arps: ArpsClient;
  public readonly arpShipmentLocations: ArpShipmentLocationsClient;
  public readonly arpSlips: ArpSlipsClient;
  public readonly authorizationCodes: AuthorizationCodesClient;
  public readonly bankAccounts: BankAccountsClient;
  public readonly bankCredits: BankCreditsClient;
  public readonly bankMLDescriptions: BankMLDescriptionsClient;
  public readonly bankSlips: BankSlipsClient;
  public readonly bomStandardCosts: BomStandardCostsClient;
  public readonly boms: BomsClient;
  public readonly capi: CapiClient;
  public readonly characteristics: CharacteristicsClient;
  public readonly characteristicSets: CharacteristicSetsClient;
  public readonly chequeAndPnoteRolls: ChequeAndPnoteRollsClient;
  public readonly chequeAndPnotes: ChequeAndPnotesClient;
  public readonly cities: CitiesClient;
  public readonly collateralRolls: CollateralRollsClient;
  public readonly costDistributionSlips: CostDistributionSlipsClient;
  public readonly countries: CountriesClient;
  public readonly customerMLDescriptions: CustomerMLDescriptionsClient;
  public readonly extendedFields: ExtendedFieldsClient;
  public readonly faassignmentslips: FaassignmentslipsClient;
  public readonly faregistries: FaregistriesClient;
  public readonly firmdocs: FirmdocsClient;
  public readonly freeZones: FreeZonesClient;
  public readonly glaccountmldescriptions: GlaccountmldescriptionsClient;
  public readonly glslips: GlslipsClient;
  public readonly groupCodes: GroupCodesClient;
  public readonly importCreditLetters: ImportCreditLettersClient;
  public readonly importDistributionSlips: ImportDistributionSlipsClient;
  public readonly importOperationSlips: ImportOperationSlipsClient;
  public readonly inwardProcessingPermits: InwardProcessingPermitsClient;
  public readonly istokenvalid: IstokenvalidClient;
  public readonly itemAlternatives: ItemAlternativesClient;
  public readonly itemBoms: ItemBomsClient;
  public readonly itemBrands: ItemBrandsClient;
  public readonly itemCharacteristics: ItemCharacteristicsClient;
  public readonly itemClassAssignments: ItemClassAssignmentsClient;
  public readonly itemMLDescriptions: ItemMLDescriptionsClient;
  public readonly itemSlips: ItemSlipsClient;
  public readonly itemStandardCosts: ItemStandardCostsClient;
  public readonly licenses: LicensesClient;
  public readonly locationCodes: LocationCodesClient;
  public readonly methods: MethodsClient;
  public readonly operations: OperationsClient;
  public readonly overheadAccounts: OverheadAccountsClient;
  public readonly paymentDifferenceInvoices: PaymentDifferenceInvoicesClient;
  public readonly paymentPlanGroupCodes: PaymentPlanGroupCodesClient;
  public readonly paymentPlans: PaymentPlansClient;
  public readonly pingClient: PingClient;
  public readonly postCodes: PostCodesClient;
  public readonly productionExceptions: ProductionExceptionsClient;
  public readonly productionLines: ProductionLinesClient;
  public readonly productionParameters: ProductionParametersClient;
  public readonly productionResourceUtilization: ProductionResourceUtilizationClient;
  public readonly productionRoutes: ProductionRoutesClient;
  public readonly productions: ProductionsClient;
  public readonly purchaseCampaigns: PurchaseCampaignsClient;
  public readonly purchaseConditionsForSlipLines: PurchaseConditionsForSlipLinesClient;
  public readonly purchaseConditionsForSlips: PurchaseConditionsForSlipsClient;
  public readonly purchaseDiscounts: PurchaseDiscountsClient;
  public readonly purchaseDispatches: PurchaseDispatchesClient;
  public readonly purchasedItemPrices: PurchasedItemPricesClient;
  public readonly purchasedServicePrices: PurchasedServicePricesClient;
  public readonly purchasedServices: PurchasedServicesClient;
  public readonly purchaseExpenses: PurchaseExpensesClient;
  public readonly purchasePromotions: PurchasePromotionsClient;
  public readonly purchaseProposalContracts: PurchaseProposalContractsClient;
  public readonly purchaseProposalOffers: PurchaseProposalOffersClient;
  public readonly purchaseProposalOrders: PurchaseProposalOrdersClient;
  public readonly qccriteriaassignments: QccriteriaassignmentsClient;
  public readonly qccriteriasets: QccriteriasetsClient;
  public readonly queries: QueriesClient;
  public readonly quickProductionSlips: QuickProductionSlipsClient;
  public readonly repaymentPlans: RepaymentPlansClient;
  public readonly revoke: RevokeClient;
  public readonly safeDeposits: SafeDepositsClient;
  public readonly safeDepositSlips: SafeDepositSlipsClient;
  public readonly salesActivities: SalesActivitiesClient;
  public readonly salesCampaigns: SalesCampaignsClient;
  public readonly salesCategories: SalesCategoriesClient;
  public readonly salesConditionsForSlipLines: SalesConditionsForSlipLinesClient;
  public readonly salesConditionsForSlips: SalesConditionsForSlipsClient;
  public readonly salesContracts: SalesContractsClient;
  public readonly salesDiscounts: SalesDiscountsClient;
  public readonly salesDispatches: SalesDispatchesClient;
  public readonly salesExpenses: SalesExpensesClient;
  public readonly salesItemPrices: SalesItemPricesClient;
  public readonly salesmanDestinations: SalesmanDestinationsClient;
  public readonly salesmanPositionCodes: SalesmanPositionCodesClient;
  public readonly salesmanRoutes: SalesmanRoutesClient;
  public readonly salesmen: SalesmenClient;
  public readonly salesOffers: SalesOffersClient;
  public readonly salesPromotions: SalesPromotionsClient;
  public readonly salesProvisionDistributionSlips: SalesProvisionDistributionSlipsClient;
  public readonly salesServicePrices: SalesServicePricesClient;
  public readonly serialAndLotNumbers: SerialAndLotNumbersClient;
  public readonly services: ServicesClient;
  public readonly shiftAssignments: ShiftAssignmentsClient;
  public readonly shifts: ShiftsClient;
  public readonly soldServices: SoldServicesClient;
  public readonly specialCodes: SpecialCodesClient;
  public readonly standardCostPeriods: StandardCostPeriodsClient;
  public readonly stopCauses: StopCausesClient;
  public readonly sys: SysClient;
  public readonly towns: TownsClient;
  public readonly trackables: TrackablesClient;
  public readonly transaction: TransactionClient;
  public readonly unitSets: UnitSetsClient;
  public readonly employees: EmployeesClient;
  public readonly banks: BanksClient;
  public readonly customers: CustomersClient;
  public readonly customersOfSalesmen: CustomersOfSalesmenClient;
  public readonly customsOffices: CustomsOfficesClient;
  public readonly dbinfo: DbinfoClient;
  public readonly definitions: DefinitionsClient;
  public readonly deliveryCodes: DeliveryCodesClient;
  public readonly demandPeggings: DemandPeggingsClient;
  public readonly demandSlips: DemandSlipsClient;
  public readonly distributionOrders: DistributionOrdersClient;
  public readonly distributionRoutes: DistributionRoutesClient;
  public readonly distributionTemplates: DistributionTemplatesClient;
  public readonly districts: DistrictsClient;
  public readonly employeeCosts: EmployeeCostsClient;
  public readonly employeeGroups: EmployeeGroupsClient;
  public readonly employeeStandardCosts: EmployeeStandardCostsClient;
  public readonly engineeringChanges: EngineeringChangesClient;
  public readonly exportCreditLetters: ExportCreditLettersClient;
  public readonly exportCredits: ExportCreditsClient;
  public readonly exportMovementSlips: ExportMovementSlipsClient;
  public readonly exportNationalizationSlips: ExportNationalizationSlipsClient;
  public readonly exportOperationSlips: ExportOperationSlipsClient;
  public readonly exportTypedPurchaseInvoices: ExportTypedPurchaseInvoicesClient;
  public readonly exportTypedSalesInvoices: ExportTypedSalesInvoicesClient;
  public readonly extendedFieldCategories: ExtendedFieldCategoriesClient;
  public readonly extendedFieldDefinitions: ExtendedFieldDefinitionsClient;
  public readonly items: ItemsClient;
  public readonly GLAccounts: GlaccountsClient;
  public readonly contacts: ContactsClient;
  public readonly opportunities: OpportunitiesClient;
  public readonly salesInvoices: SalesInvoicesClient;
  public readonly salesOrders: SalesOrdersClient;
  public readonly purchaseInvoices: PurchaseInvoicesClient;
  public readonly purchaseOrders: PurchaseOrdersClient;
  public readonly projects: ProjectsClient;
  public readonly variants: VariantsClient;
  public readonly vehicles: VehiclesClient;
  public readonly workflowDefinitions: WorkflowDefinitionsClient;
  public readonly workflowRoles: WorkflowRolesClient;
  public readonly workstationCosts: WorkstationCostsClient;
  public readonly workstationGroups: WorkstationGroupsClient;
  public readonly workstations: WorkstationsClient;
  public readonly workstationStandardCosts: WorkstationStandardCostsClient;

  constructor(config: ApiClientConfig) {
    super(config);

    // Initialize all entity clients with the same config
    this.additionalTaxes = new AdditionalTaxesClient(config);
    this.arpGroupAssignments = new ArpGroupAssignmentsClient(config);
    this.arpMLDescriptions = new ArpMLDescriptonsClient(config);
    this.arps = new ArpsClient(config);
    this.arpShipmentLocations = new ArpShipmentLocationsClient(config);
    this.arpSlips = new ArpSlipsClient(config);
    this.authorizationCodes = new AuthorizationCodesClient(config);
    this.bankAccounts = new BankAccountsClient(config);
    this.bankCredits = new BankCreditsClient(config);
    this.bankMLDescriptions = new BankMLDescriptionsClient(config);
    this.bankSlips = new BankSlipsClient(config);
    this.bomStandardCosts = new BomStandardCostsClient(config);
    this.boms = new BomsClient(config);
    this.capi = new CapiClient(config);
    this.characteristics = new CharacteristicsClient(config);
    this.characteristicSets = new CharacteristicSetsClient(config);
    this.chequeAndPnoteRolls = new ChequeAndPnoteRollsClient(config);
    this.chequeAndPnotes = new ChequeAndPnotesClient(config);
    this.cities = new CitiesClient(config);
    this.collateralRolls = new CollateralRollsClient(config);
    this.costDistributionSlips = new CostDistributionSlipsClient(config);
    this.countries = new CountriesClient(config);
    this.customerMLDescriptions = new CustomerMLDescriptionsClient(config);
    this.extendedFields = new ExtendedFieldsClient(config);
    this.faassignmentslips = new FaassignmentslipsClient(config);
    this.faregistries = new FaregistriesClient(config);
    this.firmdocs = new FirmdocsClient(config);
    this.freeZones = new FreeZonesClient(config);
    this.glaccountmldescriptions = new GlaccountmldescriptionsClient(config);
    this.glslips = new GlslipsClient(config);
    this.groupCodes = new GroupCodesClient(config);
    this.importCreditLetters = new ImportCreditLettersClient(config);
    this.importDistributionSlips = new ImportDistributionSlipsClient(config);
    this.importOperationSlips = new ImportOperationSlipsClient(config);
    this.inwardProcessingPermits = new InwardProcessingPermitsClient(config);
    this.istokenvalid = new IstokenvalidClient(config);
    this.itemAlternatives = new ItemAlternativesClient(config);
    this.itemBoms = new ItemBomsClient(config);
    this.itemBrands = new ItemBrandsClient(config);
    this.itemCharacteristics = new ItemCharacteristicsClient(config);
    this.itemClassAssignments = new ItemClassAssignmentsClient(config);
    this.itemMLDescriptions = new ItemMLDescriptionsClient(config);
    this.itemSlips = new ItemSlipsClient(config);
    this.itemStandardCosts = new ItemStandardCostsClient(config);
    this.licenses = new LicensesClient(config);
    this.locationCodes = new LocationCodesClient(config);
    this.methods = new MethodsClient(config);
    this.operations = new OperationsClient(config);
    this.overheadAccounts = new OverheadAccountsClient(config);
    this.paymentDifferenceInvoices = new PaymentDifferenceInvoicesClient(config);
    this.paymentPlanGroupCodes = new PaymentPlanGroupCodesClient(config);
    this.paymentPlans = new PaymentPlansClient(config);
    this.pingClient = new PingClient(config);
    this.postCodes = new PostCodesClient(config);
    this.productionExceptions = new ProductionExceptionsClient(config);
    this.productionLines = new ProductionLinesClient(config);
    this.productionParameters = new ProductionParametersClient(config);
    this.productionResourceUtilization = new ProductionResourceUtilizationClient(config);
    this.productionRoutes = new ProductionRoutesClient(config);
    this.productions = new ProductionsClient(config);
    this.purchaseCampaigns = new PurchaseCampaignsClient(config);
    this.purchaseConditionsForSlipLines = new PurchaseConditionsForSlipLinesClient(config);
    this.purchaseConditionsForSlips = new PurchaseConditionsForSlipsClient(config);
    this.purchaseDiscounts = new PurchaseDiscountsClient(config);
    this.purchaseDispatches = new PurchaseDispatchesClient(config);
    this.purchasedItemPrices = new PurchasedItemPricesClient(config);
    this.purchasedServicePrices = new PurchasedServicePricesClient(config);
    this.purchasedServices = new PurchasedServicesClient(config);
    this.purchaseExpenses = new PurchaseExpensesClient(config);
    this.purchasePromotions = new PurchasePromotionsClient(config);
    this.purchaseProposalContracts = new PurchaseProposalContractsClient(config);
    this.purchaseProposalOffers = new PurchaseProposalOffersClient(config);
    this.purchaseProposalOrders = new PurchaseProposalOrdersClient(config);
    this.qccriteriaassignments = new QccriteriaassignmentsClient(config);
    this.qccriteriasets = new QccriteriasetsClient(config);
    this.queries = new QueriesClient(config);
    this.quickProductionSlips = new QuickProductionSlipsClient(config);
    this.repaymentPlans = new RepaymentPlansClient(config);
    this.revoke = new RevokeClient(config);
    this.safeDeposits = new SafeDepositsClient(config);
    this.safeDepositSlips = new SafeDepositSlipsClient(config);
    this.salesActivities = new SalesActivitiesClient(config);
    this.salesCampaigns = new SalesCampaignsClient(config);
    this.salesCategories = new SalesCategoriesClient(config);
    this.salesConditionsForSlipLines = new SalesConditionsForSlipLinesClient(config);
    this.salesConditionsForSlips = new SalesConditionsForSlipsClient(config);
    this.salesContracts = new SalesContractsClient(config);
    this.salesDiscounts = new SalesDiscountsClient(config);
    this.salesDispatches = new SalesDispatchesClient(config);
    this.salesExpenses = new SalesExpensesClient(config);
    this.salesItemPrices = new SalesItemPricesClient(config);
    this.salesmanDestinations = new SalesmanDestinationsClient(config);
    this.salesmanPositionCodes = new SalesmanPositionCodesClient(config);
    this.salesmanRoutes = new SalesmanRoutesClient(config);
    this.salesmen = new SalesmenClient(config);
    this.salesOffers = new SalesOffersClient(config);
    this.salesPromotions = new SalesPromotionsClient(config);
    this.salesProvisionDistributionSlips = new SalesProvisionDistributionSlipsClient(config);
    this.salesServicePrices = new SalesServicePricesClient(config);
    this.serialAndLotNumbers = new SerialAndLotNumbersClient(config);
    this.services = new ServicesClient(config);
    this.shiftAssignments = new ShiftAssignmentsClient(config);
    this.shifts = new ShiftsClient(config);
    this.soldServices = new SoldServicesClient(config);
    this.specialCodes = new SpecialCodesClient(config);
    this.standardCostPeriods = new StandardCostPeriodsClient(config);
    this.stopCauses = new StopCausesClient(config);
    this.sys = new SysClient(config);
    this.towns = new TownsClient(config);
    this.trackables = new TrackablesClient(config);
    this.transaction = new TransactionClient(config);
    this.unitSets = new UnitSetsClient(config);
    this.employees = new EmployeesClient(config);
    this.banks = new BanksClient(config);
    this.customers = new CustomersClient(config);
    this.customersOfSalesmen = new CustomersOfSalesmenClient(config);
    this.customsOffices = new CustomsOfficesClient(config);
    this.dbinfo = new DbinfoClient(config);
    this.definitions = new DefinitionsClient(config);
    this.deliveryCodes = new DeliveryCodesClient(config);
    this.demandPeggings = new DemandPeggingsClient(config);
    this.demandSlips = new DemandSlipsClient(config);
    this.distributionOrders = new DistributionOrdersClient(config);
    this.distributionRoutes = new DistributionRoutesClient(config);
    this.distributionTemplates = new DistributionTemplatesClient(config);
    this.districts = new DistrictsClient(config);
    this.employeeCosts = new EmployeeCostsClient(config);
    this.employeeGroups = new EmployeeGroupsClient(config);
    this.employeeStandardCosts = new EmployeeStandardCostsClient(config);
    this.engineeringChanges = new EngineeringChangesClient(config);
    this.exportCreditLetters = new ExportCreditLettersClient(config);
    this.exportCredits = new ExportCreditsClient(config);
    this.exportMovementSlips = new ExportMovementSlipsClient(config);
    this.exportNationalizationSlips = new ExportNationalizationSlipsClient(config);
    this.exportOperationSlips = new ExportOperationSlipsClient(config);
    this.exportTypedPurchaseInvoices = new ExportTypedPurchaseInvoicesClient(config);
    this.exportTypedSalesInvoices = new ExportTypedSalesInvoicesClient(config);
    this.extendedFieldCategories = new ExtendedFieldCategoriesClient(config);
    this.extendedFieldDefinitions = new ExtendedFieldDefinitionsClient(config);
    this.items = new ItemsClient(config);
    this.GLAccounts = new GlaccountsClient(config);
    this.contacts = new ContactsClient(config);
    this.opportunities = new OpportunitiesClient(config);
    this.salesInvoices = new SalesInvoicesClient(config);
    this.salesOrders = new SalesOrdersClient(config);
    this.purchaseInvoices = new PurchaseInvoicesClient(config);
    this.purchaseOrders = new PurchaseOrdersClient(config);
    this.projects = new ProjectsClient(config);
    this.variants = new VariantsClient(config);
    this.vehicles = new VehiclesClient(config);
    this.workflowDefinitions = new WorkflowDefinitionsClient(config);
    this.workflowRoles = new WorkflowRolesClient(config);
    this.workstationCosts = new WorkstationCostsClient(config);
    this.workstationGroups = new WorkstationGroupsClient(config);
    this.workstations = new WorkstationsClient(config);
    this.workstationStandardCosts = new WorkstationStandardCostsClient(config);
  }

  /**
   * Test the connection to the Logo API
   */
  async testConnection(): Promise<boolean> {
    try {
      return await this.ping();
    } catch (error) {
      console.error('Connection test failed:', error);
      return false;
    }
  }

  /**
   * Validate the current API token
   */
  async validateToken(): Promise<boolean> {
    try {
      return await this.isTokenValid();
    } catch (error) {
      console.error('Token validation failed:', error);
      return false;
    }
  }

  /**
   * Get API information
   */
  async getApiInfo(): Promise<Record<string, unknown>> {
    try {
      return await this.request('get', '/dbinfo');
    } catch (error) {
      console.error('Failed to get API info:', error);
      throw error;
    }
  }

  /**
   * Get API methods information
   */
  async getMethods(): Promise<Record<string, unknown>> {
    try {
      return await this.request('get', '/methods');
    } catch (error) {
      console.error('Failed to get methods info:', error);
      throw error;
    }
  }

  /**
   * Get API definitions
   */
  async getDefinitions(): Promise<Record<string, unknown>> {
    try {
      return await this.request('get', '/definitions');
    } catch (error) {
      console.error('Failed to get definitions:', error);
      throw error;
    }
  }

  /**
   * Create a new Logo API client instance with the same configuration
   */
  clone(): LogoApiClient {
    return new LogoApiClient(this.config);
  }

  /**
   * Get a summary of all available entity clients
   */
  getAvailableClients(): string[] {
    return [
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
    ];
  }

  /**
   * Get client configuration
   */
  getConfig(): ApiClientConfig {
    return { ...this.config };
  }
}
