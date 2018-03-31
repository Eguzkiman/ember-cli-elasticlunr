import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
	elasticlunr: service(),
	indexableKeys: ['id'],

	init () {
		this._super(...arguments);

		this.on('didCreate', this._indexRecord);
		this.on('didLoad', this._indexRecord);

		this.on('didReload', this._reindexRecord);
		this.on('didUpdate', this._reindexRecord);
		
		this.on('willDestroy', this._unindexRecord);
	},

	_getIndexData () {
		let modelName = this.constructor.modelName;
		let indexableKeys = this.get('indexableKeys');
		let data = this.getProperties(indexableKeys);
		let id = this.get('id');
		data.id = id;
		
		return { modelName, data, id };
	},

	_indexRecord () {
		let { modelName, data} = this._getIndexData();
		this.get('elasticlunr').add(modelName, data);
	},

	_reindexRecord () {
		let { modelName, data} = this._getIndexData();
		this.get('elasticlunr').update(modelName, data);
	},

	_unindexRecord () {
		let { modelName, id} = this._getIndexData();
		this.get('elasticlunr').remove(modelName, id);
	}
});
