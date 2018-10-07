'use strict';

/**
 * Site.js controller
 *
 * @description: A set of functions called "actions" for managing `Site`.
 */

module.exports = {

  /**
   * Retrieve site records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.site.search(ctx.query);
    } else {
      return strapi.services.site.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a site record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.site.fetch(ctx.params);
  },

  /**
   * Count site records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.site.count(ctx.query);
  },

  /**
   * Create a/an site record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.site.add(ctx.request.body);
  },

  /**
   * Update a/an site record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.site.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an site record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.site.remove(ctx.params);
  }
};
