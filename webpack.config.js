const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// const moduleFederationConfig 
module.exports = withModuleFederationPlugin({

  name: 'global-management',

  exposes: {
    './PruebaModule': './src/app/modula-prueba/modula-prueba.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
// moduleFederationConfig.output.publicPath = 'http://localhost:4201/';
// module.exports = moduleFederationConfig;
