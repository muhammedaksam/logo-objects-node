/**
 * RepaymentPlans module - provides RepaymentPlans entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  RepaymentPlans,
  RepaymentPlansSearchCriteria,
  RepaymentPlansAnalytics,
  RepaymentPlansQueryOptions,
} from './types';

// Export client
export { RepaymentPlansClient } from './client';
