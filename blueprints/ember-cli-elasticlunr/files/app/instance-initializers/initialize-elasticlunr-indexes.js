/* global elasticlunr */
	
// Use this file to initialize elasticlunr indexes, it can be done like in the example below.
// For more info on elasticlunr options, take a look at the docs here -> http://elasticlunr.com/docs/index.html
 
// function itemIndexData () {
// 	this.addField('name');
// 	this.setRef('id');
// 	this.pipeline.remove(elasticlunr.stopWordFilter);
// 	this.pipeline.remove(elasticlunr.stemmer);
// }

export function initialize( /*appInstance*/ ) {
  // let elasticlunr = appInstance.lookup('service:elasticlunr');
  // elasticlunr.createIndex('item', itemIndexData);
}


export default {
  initialize
};
