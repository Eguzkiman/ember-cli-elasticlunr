import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel () {
		this._super(...arguments);
		let items = [
			{ id: 1, name: 'Proportional Calorie' },
			{ id: 2, name: 'Blind Hydrogen' },
			{ id: 3, name: 'Maximum Caravan' },
			{ id: 4, name: 'Confident Flavor' },
			{ id: 5, name: 'Magic Settelment' },
			{ id: 6, name: 'Magnificent Sound' },
			{ id: 7, name: 'Lucky Renewal' },
			{ id: 8, name: 'Sociological Can' },
			{ id: 9, name: 'Aboriginal Candy' }
		];

		this.store.pushPayload({ items });
	},
	model () {
		return this.store.peekAll('item');
	}
});