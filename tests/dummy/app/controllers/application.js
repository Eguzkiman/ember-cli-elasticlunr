import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
	elasticlunr: service(),
	searchQuery: '',
	searchResults: computed('model', 'searchQuery', function () {
		let query = this.get('searchQuery');

		if (!query) return this.get('model');

		let elasticlunr = this.get('elasticlunr');
		let results = elasticlunr.search('item', query);
		return results.map((result) => this.store.peekRecord('item', result.ref));
	})
});
