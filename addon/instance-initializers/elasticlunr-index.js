function itemIndexData () {
	this.addField('name');
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
