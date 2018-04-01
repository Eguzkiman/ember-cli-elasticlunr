/* eslint-env node */
module.exports = {
  description: 'Generates an empty instance initializer with instructions for creating elasticlunr indexes',
  
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall(options) {
  //   // Perform extra work here.
  // }
};
