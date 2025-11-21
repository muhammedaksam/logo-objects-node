/**
 * Query Builder Utility for Logo Objects REST API
 *
 * Provides ORM-style query building with support for:
 * - Simple values (auto-detection)
 * - Operator objects (eq, neq, gt, gte, lt, lte, like)
 * - Array values (OR conditions)
 * - Complex nested conditions
 */

/**
 * Query operators for string fields
 */
export interface StringQueryOperators {
  eq?: string;
  neq?: string;
  like?: string;
  in?: string[];
}

/**
 * Query operators for number fields
 */
export interface NumberQueryOperators {
  eq?: number;
  neq?: number;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  in?: number[];
}

/**
 * Query operators for date fields (format: 'dd.mm.yyyy')
 */
export interface DateQueryOperators {
  eq?: string;
  neq?: string;
  gt?: string;
  gte?: string;
  lt?: string;
  lte?: string;
}

/**
 * Query operators for boolean fields
 */
export interface BooleanQueryOperators {
  eq?: boolean;
  neq?: boolean;
}

/**
 * Shorthand type for string field values
 * Supports: direct value, array of values, or operator object
 */
export type StringFieldValue = string | string[] | StringQueryOperators;

/**
 * Shorthand type for number field values
 * Supports: direct value, array of values, or operator object
 */
export type NumberFieldValue = number | number[] | NumberQueryOperators;

/**
 * Shorthand type for date field values
 * Supports: direct value, array of values, or operator object
 */
export type DateFieldValue = string | string[] | DateQueryOperators;

/**
 * Shorthand type for boolean field values
 * Supports: direct value or operator object
 */
export type BooleanFieldValue = boolean | BooleanQueryOperators;

/**
 * Union of all possible query field values
 * Used in index signatures for SearchCriteria interfaces
 */
export type AllFieldValues =
  | StringFieldValue
  | NumberFieldValue
  | DateFieldValue
  | BooleanFieldValue
  | undefined;

/**
 * Query value types that can be used in search criteria
 */
export type QueryValue =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | QueryOperators
  | undefined;

/**
 * Available query operators
 */
export interface QueryOperators {
  eq?: string | number | boolean;
  neq?: string | number | boolean;
  gt?: string | number;
  gte?: string | number;
  lt?: string | number;
  lte?: string | number;
  like?: string;
  in?: (string | number)[];
}

/**
 * Search criteria - dynamic object with field names as keys
 */
export type SearchCriteria = Record<string, QueryValue>;

/**
 * Build OData query string from search criteria
 *
 * @param criteria - Search criteria object with field names and values
 * @param fieldMapping - Optional mapping from camelCase to UPPER_CASE field names
 * @returns OData query string or undefined if no conditions
 *
 * @example
 * ```typescript
 * // Simple values
 * buildSearchQuery({ code: 'ABC', status: 1 })
 * // → "CODE like 'ABC*' and STATUS eq 1"
 *
 * // Operator objects
 * buildSearchQuery({
 *   price: { gte: 100, lte: 500 },
 *   code: { like: 'AB*' }
 * })
 * // → "PRICE gte 100 and PRICE lte 500 and CODE like 'AB*'"
 *
 * // Array values (OR)
 * buildSearchQuery({ status: [1, 2, 3] })
 * // → "(STATUS eq 1 or STATUS eq 2 or STATUS eq 3)"
 *
 * // Mixed
 * buildSearchQuery({
 *   code: 'ABC',
 *   price: { gte: 100 },
 *   tags: ['urgent', 'important']
 * })
 * // → "CODE like 'ABC*' and PRICE gte 100 and (TAGS eq 'urgent' or TAGS eq 'important')"
 * ```
 */
export function buildSearchQuery(
  criteria: SearchCriteria,
  fieldMapping?: Record<string, string>
): string | undefined {
  const conditions: string[] = [];

  for (const [fieldName, value] of Object.entries(criteria)) {
    if (value === undefined || value === null) {
      continue;
    }

    // Get the actual field name (uppercase by default or from mapping)
    const actualFieldName = fieldMapping?.[fieldName] || fieldName.toUpperCase();

    // Handle array values (OR conditions)
    if (Array.isArray(value)) {
      const orConditions = value
        .map(v => {
          if (typeof v === 'string') {
            return `${actualFieldName} eq '${v}'`;
          }
          return `${actualFieldName} eq ${v}`;
        })
        .join(' or ');
      conditions.push(`(${orConditions})`);
    }
    // Handle operator objects
    else if (typeof value === 'object' && value !== null) {
      const fieldConditions: string[] = [];

      if (value.eq !== undefined) {
        if (typeof value.eq === 'string') {
          fieldConditions.push(`${actualFieldName} eq '${value.eq}'`);
        } else {
          fieldConditions.push(`${actualFieldName} eq ${value.eq}`);
        }
      }
      if (value.neq !== undefined) {
        if (typeof value.neq === 'string') {
          fieldConditions.push(`${actualFieldName} neq '${value.neq}'`);
        } else {
          fieldConditions.push(`${actualFieldName} neq ${value.neq}`);
        }
      }
      if (value.gt !== undefined) {
        if (typeof value.gt === 'string') {
          fieldConditions.push(`${actualFieldName} gt '${value.gt}'`);
        } else {
          fieldConditions.push(`${actualFieldName} gt ${value.gt}`);
        }
      }
      if (value.gte !== undefined) {
        if (typeof value.gte === 'string') {
          fieldConditions.push(`${actualFieldName} gte '${value.gte}'`);
        } else {
          fieldConditions.push(`${actualFieldName} gte ${value.gte}`);
        }
      }
      if (value.lt !== undefined) {
        if (typeof value.lt === 'string') {
          fieldConditions.push(`${actualFieldName} lt '${value.lt}'`);
        } else {
          fieldConditions.push(`${actualFieldName} lt ${value.lt}`);
        }
      }
      if (value.lte !== undefined) {
        if (typeof value.lte === 'string') {
          fieldConditions.push(`${actualFieldName} lte '${value.lte}'`);
        } else {
          fieldConditions.push(`${actualFieldName} lte ${value.lte}`);
        }
      }
      if (value.like !== undefined) {
        fieldConditions.push(`${actualFieldName} like '${value.like}'`);
      }
      if (value.in !== undefined && Array.isArray(value.in)) {
        const inConditions = value.in
          .map(v => {
            if (typeof v === 'string') {
              return `${actualFieldName} eq '${v}'`;
            }
            return `${actualFieldName} eq ${v}`;
          })
          .join(' or ');
        fieldConditions.push(`(${inConditions})`);
      }

      conditions.push(...fieldConditions);
    }
    // Handle simple values (auto-detection)
    else {
      if (typeof value === 'string') {
        // For strings, default to 'like' with wildcard suffix for flexible matching
        conditions.push(`${actualFieldName} like '${value}*'`);
      } else {
        // For numbers and booleans, use exact match
        conditions.push(`${actualFieldName} eq ${value}`);
      }
    }
  }

  return conditions.length > 0 ? conditions.join(' and ') : undefined;
}

/**
 * Create a field mapping from camelCase property names to UPPER_CASE field names
 *
 * @param propertyNames - Array of property names from swagger definition (UPPER_CASE)
 * @returns Mapping object from camelCase to UPPER_CASE
 *
 * @example
 * ```typescript
 * const mapping = createFieldMapping(['INTERNAL_REFERENCE', 'CODE', 'NAME']);
 * // → { internalReference: 'INTERNAL_REFERENCE', code: 'CODE', name: 'NAME' }
 * ```
 */
export function createFieldMapping(propertyNames: string[]): Record<string, string> {
  const mapping: Record<string, string> = {};

  for (const propName of propertyNames) {
    // Convert UPPER_CASE or snake_case to camelCase
    const camelCaseName = propName
      .toLowerCase()
      .replace(/_([a-z])/g, (_, char) => char.toUpperCase());

    mapping[camelCaseName] = propName;
  }

  return mapping;
}
