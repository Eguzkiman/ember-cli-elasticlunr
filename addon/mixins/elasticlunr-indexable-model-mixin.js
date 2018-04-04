import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { isArray } from '@ember/array';

export default Mixin.create({
	elasticlunr: service(),
	indexableKeys: ['id'],

	init () {
		this._super(...arguments);

		this.on('didCreate', this._indexRecord);
		this.on('didLoad', this._indexRecord);

		this.on('didReload', this._reindexRecord);
		this.on('didUpdate', this._reindexRecord);
		
		this.on('didDelete', this._unindexRecord);
	},

	_parsedIndexableKeys: computed('indexableKeys', function () {
		let indexableKeys = this.get('indexableKeys');
		return isArray(indexableKeys)
			? indexableKeys
			: indexableKeys.split(',').map((keyname) => keyname.trim());
	}),

	_getIndexData () {
		let modelName = this.constructor.modelName;
		let indexableKeys = this.get('_parsedIndexableKeys');
		let data = this.getProperties(indexableKeys);
		let id = this.get('id');
		data.id = id;
		
		return { modelName, data, id };
	},

	_indexRecord () {
		let { modelName, data} = this._getIndexData();
		this.get('elasticlunr').addDoc(modelName, data);
	},

	_reindexRecord () {
		let { modelName, data} = this._getIndexData();
		this.get('elasticlunr').updateDoc(modelName, data);
	},

	_unindexRecord () {
		let { modelName, id} = this._getIndexData();
		this.get('elasticlunr').removeDoc(modelName, id);
	}
});
