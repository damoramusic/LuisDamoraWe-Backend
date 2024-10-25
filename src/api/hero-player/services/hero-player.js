'use strict';

/**
 * hero-player service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-player.hero-player');
