'use strict';

/**
 * match-detail controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::match-detail.match-detail', ({ strapi }) => ({
  // By extending the core controller, we ensure that all default behaviors,
  // including query parameter processing (filters, sort, populate), are enabled.
  // We are not adding any custom logic, just ensuring the endpoint is explicitly handled.
  async find(ctx) {
    return super.find(ctx);
  },
})); 