'use strict';

/**
 * Ads.js controller
 *
 * @description: A set of functions called "actions" for managing `Ads`.
 */

module.exports = {

  /**
   * Retrieve ads records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.ads.search(ctx.query);
    } else {
      return strapi.services.ads.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a ads record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.ads.fetch(ctx.params);
  },

  /**
   * Count ads records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ads.count(ctx.query);
  },

  /**
   * Create a/an ads record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ads.add(ctx.request.body);
  },

  /**
   * Update a/an ads record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ads.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ads record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ads.remove(ctx.params);
  }
};
