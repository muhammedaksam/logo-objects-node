/**
 * PaymentPlans module - provides PaymentPlans entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  PaymentPlans,
  PaymentPlansSearchCriteria,
  PaymentPlansAnalytics,
  PaymentPlansQueryOptions,
} from './types';

// Export client
export { PaymentPlansClient } from './client';
