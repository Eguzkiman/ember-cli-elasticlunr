import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel () {
		this._super(...arguments);
		let items = [
			{ id: 1, name: 'Proportional Calorie', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
			{ id: 2, name: 'Blind Hydrogen', description: 'Phasellus mollis sodales urna non accumsan' },
			{ id: 3, name: 'Maximum Caravan', description: 'Fusce feugiat viverra lacus, accumsan molestie ipsum commodo sed' },
			{ id: 4, name: 'Confident Flavor', description: 'Morbi vehicula, orci vel feugiat commodo, neque purus suscipit turpis, bibendum vehicula elit est vel neque' },
			{ id: 5, name: 'Magic Settelment', description: 'Cras tempor condimentum sollicitudin' },
			{ id: 6, name: 'Magnificent Sound', description: 'Aliquam pellentesque dapibus aliquet' },
			{ id: 7, name: 'Lucky Renewal', description: 'Fusce luctus venenatis consequat' },
			{ id: 8, name: 'Sociological Can', description: 'Donec id rutrum arcu' },
			{ id: 9, name: 'Aboriginal Candy', description: 'Curabitur sit amet tortor malesuada, condimentum nisl maximus, ultrices diam' }
		];

		this.store.pushPayload({ items });
	},
	model () {
		return this.store.peekAll('item');
	}
});