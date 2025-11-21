/**
 * Shared collection types for Logo Objects API
 *
 * These types define common structures used across multiple entity types,
 * particularly for nested collections like TRANSACTIONS, CHARACTERISTICS, etc.
 */

/**
 * Meta information for API responses and nested collections
 *
 * Contains metadata about the resource including its URL, media type, and API version.
 */
export interface Meta {
  /** Access URL for the resource */
  href?: string;
  /** Media type of the response */
  mediaType?: string;
  /** API version */
  apiVersion?: string;
}

/**
 * Request query parameters for nested operations
 *
 * Used for filtering and expanding nested collections within an entity.
 */
export interface RequestQueryBodyParameter {
  /** Fields to return in the response */
  fields?: string;
  /** Names of nested objects to expand */
  expand?: string;
  /** Expand level (e.g., 'full' to expand all nested objects) */
  expandLevel?: string;
  /** Sort order for results */
  sort?: string;
  /** Query filter using OData syntax */
  q?: string;
}

/**
 * Data object parameters for validation and operations
 *
 * Controls various validation and processing flags when creating or updating entities.
 * These flags determine which validations and automatic operations are applied.
 */
export interface DataObjectParameter {
  /** Replication mode flag */
  ReplicMode?: boolean;
  /** Check parameters flag */
  CheckParams?: boolean;
  /** Check rights flag */
  CheckRight?: boolean;
  /** Validation flag */
  Validation?: boolean;
  /** Check approve date flag */
  CheckApproveDate?: boolean;
  /** Apply campaign on pre-save */
  ApplyCampaignOnPreSave?: boolean;
  /** Apply condition on pre-save */
  ApplyConditionOnPreSave?: boolean;
  /** Form serial/lot lines on pre-save */
  FormSeriLotLinesOnPreSave?: boolean;
  /** Fill account codes on pre-save */
  FillAccCodesOnPreSave?: boolean;
  /** Create composite lines on pre-save */
  CreateCompositeLinesOnPreSave?: boolean;
  /** Extra query parameters for nested operations */
  ExtraQueryParameters?: RequestQueryBodyParameter;
}

/**
 * Generic collection wrapper for nested arrays (like TRANSACTIONS, CHARACTERISTICS, etc.)
 *
 * This type represents the standard structure used by the Logo Objects API for nested collections.
 * It includes metadata about the collection and an array of items.
 *
 * @template T The type of items in the collection
 *
 * @example
 * ```typescript
 * // Sales dispatch transactions
 * interface SalesDispatches {
 *   TRANSACTIONS?: TransactionCollection<SalesDispatchTransaction>;
 * }
 *
 * // Accessing transaction data with full type safety
 * const dispatch = await client.getById(1);
 * const firstTransaction = dispatch.TRANSACTIONS?.items?.[0];
 * const masterCode = firstTransaction?.MASTER_CODE; // Type-safe access
 * const href = dispatch.TRANSACTIONS?.Meta?.href; // Meta information
 * ```
 */
export interface TransactionCollection<T> {
  /** Meta information about the collection */
  Meta?: Meta;
  /** Array of items in the collection */
  items?: T[];
}
