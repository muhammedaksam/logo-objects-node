// Export shared collection types
export * from './collections';

// Base types for the Logo Objects API
export interface ApiResponse<T = unknown> {
  Meta?: {
    href?: string;
    mediaType?: string;
    apiVersion?: string;
  };
  offset?: number;
  count?: number;
  totalCount?: number;
  limit?: number;
  first?: { href?: string };
  next?: { href?: string };
  previous?: { href?: string };
  items?: T[];
}

export interface BaseEntity {
  INTERNAL_REFERENCE?: number;
  RECORD_STATUS?: number;
  DATA_SITEID?: number;
  DATA_REFERENCE?: number;
  XML_ATTRIBUTE?: number;
  CREATED_BY?: number;
  DATE_CREATED?: string;
  HOUR_CREATED?: number;
  MIN_CREATED?: number;
  SEC_CREATED?: number;
  MODIFIED_BY?: number;
  DATE_MODIFIED?: string;
  HOUR_MODIFIED?: number;
  MIN_MODIFIED?: number;
  SEC_MODIFIED?: number;
  TEXTINC?: number;
  IMAGEINC?: number;

  // Common complex object fields
  Meta?: Meta;
  DataObjectParameter?: DataObjectParameter;
}

/**
 * Type-safe sort specification for query options
 * Supports 4 simplified formats:
 * - `['FIELD']` - Single field ascending
 * - `['FIELD', 'desc']` - Single field with direction
 * - `[['FIELD1', 'FIELD2'], 'desc']` - Multiple fields, same direction
 * - `[['FIELD1', 'FIELD2']]` - Multiple fields ascending
 */
export type SortSpec<TField extends string = string> =
  | [TField] // Single field ascending
  | [TField, 'asc' | 'desc'] // Single field with direction
  | [TField[], 'asc' | 'desc'] // Multiple fields, same direction
  | [TField[]]; // Multiple fields ascending

export interface QueryOptions<TField extends string = string> {
  expandLevel?: string;
  expand?: string;
  fields?: TField[];
  withCount?: boolean;
  count?: boolean;
  first?: boolean;
  last?: boolean;
  limit?: number;
  offset?: number;
  q?: string;
  sort?: SortSpec<TField>;
}

export type ApiClientConfig = ApiKeyConfig | GrantTypeConfig | NoAuthConfig;

export interface BaseApiClientConfig {
  baseURL: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  headers?: Record<string, string>;
}

export interface NoAuthConfig extends BaseApiClientConfig {
  apiKey?: never;
  grantTypeUsername?: never;
  grantTypePassword?: never;
  grantTypeFirmno?: never;
  grantTypeBasicAuth?: never;
}

export interface ApiKeyConfig extends BaseApiClientConfig {
  apiKey: string;
  grantTypeUsername?: never;
  grantTypePassword?: never;
  grantTypeFirmno?: never;
  grantTypeBasicAuth?: never;
}

export interface GrantTypeConfig extends BaseApiClientConfig {
  apiKey?: never;
  grantTypeUsername: string;
  grantTypePassword: string;
  grantTypeFirmno: string;
  grantTypeBasicAuth: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  details?: Record<string, unknown>;
}

/**
 * Key-Value parameter for API operations
 * Used for special API methods that return parameter arrays
 */
export interface KeyValueParameter {
  Name?: string;
  Value?: unknown;
}

/**
 * Meta information interface for Logo API responses
 */
export interface Meta {
  href?: string;
  mediaType?: string;
  apiVersion?: string;
}

/**
 * Data object parameter interface for entity operations
 */
export interface DataObjectParameter {
  ReplicMode?: boolean;
  CheckParams?: boolean;
  CheckRight?: boolean;
  Validation?: boolean;
  CheckApproveDate?: boolean;
  ApplyCampaignOnPreSave?: boolean;
  ApplyConditionOnPreSave?: boolean;
  FormSeriLotLinesOnPreSave?: boolean;
  FillAccCodesOnPreSave?: boolean;
  CreateCompositeLinesOnPreSave?: boolean;
  ExtraQueryParameters?: {
    fields?: string;
    expand?: string;
    expandLevel?: string;
    sort?: string;
    q?: string;
  };
}

// Export error types
export * from './errors';
export * from './config';

// Note: Entity-specific interfaces have been moved to their respective client modules
// See src/clients/employees/types.ts, src/clients/banks/types.ts, etc.

// Note: GLAccount entity moved to src/clients/GLAccounts/types.ts

// Note: Customer entity moved to src/clients/customers/types.ts

// Note: Item entity moved to src/clients/items/types.ts

// Note: Contact entity moved to src/clients/contacts/types.ts

// Note: Remaining entities moved to their respective client modules
// See src/clients/opportunities/, src/clients/salesInvoices/, etc.

// Entity union type - now references entities from their respective modules
// Import specific entity types from their modules when needed:
// import { Employee } from '../clients/employees';
// import { Bank } from '../clients/banks';
// etc.

export type EntityType =
  | 'employees'
  | 'banks'
  | 'GLAccounts'
  | 'customers'
  | 'items'
  | 'contacts'
  | 'opportunities'
  | 'salesInvoices'
  | 'salesOrders'
  | 'purchaseInvoices'
  | 'purchaseOrders'
  | 'projects'
  | 'specialCodes';

// Generic batch operation result
export interface BatchOperationResult<T> {
  success: boolean;
  totalProcessed: number;
  totalSuccess: number;
  totalFailed: number;
  results: T[];
  errors: string[];
}
