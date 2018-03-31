/* global lunr */
import Service from '@ember/service';

export default Service.extend({
	indexes: null,
	init () {
		this._super(...arguments);
		this.set('indexes', {});
	},

	createIndex (type, structure) {
		this.get('indexes')[type] = elasticlunr(structure);
	},

	add (type, dataHash) {
		this._verifyIndexExists(type);
		var x = this.get('indexes')[type];
		this.get('indexes')[type].addDoc(dataHash);
	},

	update (type, dataHash) {
		this._verifyIndexExists(type);
		this.get('indexes')[type].update(dataHash);
	},

	remove (type, id) {
		this._verifyIndexExists(type);
		this.get('indexes')[type].removeDoc(id);
	},

	search (type, string) {
		this._verifyIndexExists(type);
		return this.get('indexes')[type].search(string, { expand: true });
	},

	_verifyIndexExists (type) {
		if (!this.get('indexes')[type]) {
			throw new Error(`Record type ${type} is not yet indexed.`)
		}
	}
});
