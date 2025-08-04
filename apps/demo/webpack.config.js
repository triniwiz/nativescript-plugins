const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {
  

  webpack.init(env);
  webpack.useConfig('typescript');

  webpack.chainWebpack((config) => {
    // shared demo code
    config.resolve.alias.set('@demo/shared', resolve(__dirname, '..', '..', 'tools', 'demo'));
  });

  // Example if you need to share images across demo apps:
  webpack.Utils.addCopyRule({
    from: '../../../tools/demo/nativescript-image-cache-it', 
		to: 'nativescript-image-cache-it',
    context: webpack.Utils.project.getProjectFilePath('node_modules')
  });


  return webpack.resolveConfig();
};
