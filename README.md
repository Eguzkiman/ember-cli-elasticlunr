ember-cli-elasticlunr
==============================================================================

A library for implementing full-text search in Ember.js applications using [elasticlunr](http://elasticlunr.com). Based on [ember-cli-lunr](https://github.com/Charizard/ember-cli-lunr).

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-elasticlunr
```


Usage
------------------------------------------------------------------------------

### Initializing model indexes

After install, open the `initialize-elastic-lunr.js` instance initializer (we generated it for you). Then, add indexes for every model you want be able to search locally. For an model named `item`, with fields `name` and `description`, your initializer would look like this:

```js

// app/instance-initializers/initialize-elasticlunr-indexes.js
  
/* global elasticlunr */
  
// Use this file to initialize elasticlunr indexes, it can be done like in the example below.
// For more info on elasticlunr indexing options, take a look at the docs here -> http://elasticlunr.com/docs/index.js.html
 
function itemIndexData () {
  this.addField('name');
  this.addField('description');
  this.setRef('id');
  this.pipeline.remove(elasticlunr.stopWordFilter);
  this.pipeline.remove(elasticlunr.stemmer);
}

export function initialize( appInstance ) {
  let elasticlunr = appInstance.lookup('service:elasticlunr');
  elasticlunr.createIndex('item', itemIndexData);
}


export default {
  initialize
};


```

For more info on elasticlunr indexing options, take a look at [this docs](http://elasticlunr.com/docs/index.js.html)

### Making your models indexable

The `ElasticlunrIndexableModelMixin`  automatically indexes your models on elasticlunr. Add the mixin  and an `indexableKeys` property to the model. This key may be an array of fieldnames, or a string containing the fieldnames separated by comma.

For our model `item`, it would look like this:

```js
// app/models/item.js

import DS from 'ember-data';
import elasticlunrIndexbleModelMixin from 'ember-cli-elasticlunr/mixins/elasticlunr-indexable-model-mixin'

export default DS.Model.extend(elasticlunrIndexbleModelMixin, {
  name: DS.attr('string'),
  description: DS.attr('string'),
  indexableKeys: 'name,description'
  // ['name', 'description'] and 'name, description' are also valid
});

```

The mixin will also keep track of record creates, updates and deletes, and will update the elasticlunr index accordingly.

### Searching 

The `elasticlunr` service `search` method can be used to search indexed documents. A simple implementation may look like this:

```js

  // app/controllers/items.js

  import Controller from '@ember/controller';
  import { computed } from '@ember/object';
  import { inject as service } from '@ember/service';

  export default Controller.extend({
    elasticlunr: service(),
    searchQuery: '',
    searchResults: computed('model', 'searchQuery', function () {

      let query = this.get('searchQuery');
      let elasticlunr = this.get('elasticlunr');
      let results = elasticlunr.search('item', query);

      return results.map((result) => this.store.peekRecord('item', result.ref));
    })
  });


```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-elasticlunr`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
