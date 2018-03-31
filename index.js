'use strict';

module.exports = {
  name: 'ember-cli-elasticlunr',
  included: function () {
	this._super.included.apply(this, arguments);
	this.import('node_modules/elasticlunr/elasticlunr.js');
  }
};
