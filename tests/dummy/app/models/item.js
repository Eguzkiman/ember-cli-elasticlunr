import DS from 'ember-data';
import elasticlunrIndexbleModelMixin from 'ember-cli-elasticlunr/mixins/elasticlunr-indexable-model-mixin'

export default DS.Model.extend(elasticlunrIndexbleModelMixin, {
	name: DS.attr('string'),
	description: DS.attr('string'),
	indexableKeys: 'name, description'
});
