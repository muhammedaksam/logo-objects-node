/**
 * Contacts module - provides Contacts entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  Contacts,
  ContactsSearchCriteria,
  ContactsAnalytics,
  ContactsQueryOptions,
} from './types';

// Export client
export { ContactsClient } from './client';
