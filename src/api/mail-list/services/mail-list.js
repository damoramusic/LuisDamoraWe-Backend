'use strict';

/**
 * mail-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mail-list.mail-list');
