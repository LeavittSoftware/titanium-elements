// module.exports = ({ config, mode }) => {
//   config.module.rules[0].exclude = /node_modules\/(?!(lit-html|@polymer)\/).*/;
//   return config;
// };

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  return config;
};
