import EmberObject from '@ember/object';
import ElasticlunrIndexableModelMixinMixin from 'ember-cli-elasticlunr/mixins/elasticlunr-indexable-model-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | elasticlunr-indexable-model-mixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ElasticlunrIndexableModelMixinObject = EmberObject.extend(ElasticlunrIndexableModelMixinMixin);
    let subject = ElasticlunrIndexableModelMixinObject.create();
    assert.ok(subject);
  });
});
