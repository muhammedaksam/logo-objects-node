/**
 * DistributionTemplates module - provides DistributionTemplates entity types and client
 */

// Export types (excluding imported operator types to avoid re-export conflicts)
export type {
  DistributionTemplates,
  DistributionTemplatesSearchCriteria,
  DistributionTemplatesAnalytics,
  DistributionTemplatesQueryOptions,
} from './types';

// Export client
export { DistributionTemplatesClient } from './client';
