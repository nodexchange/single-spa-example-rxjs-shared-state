const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const webpack = require('webpack');
const isDevelopment = process.env.NODE_ENV !== 'production';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "example",
    projectName: "home",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [require('react-refresh/babel')].filter(Boolean),
              },
            },
          ],
        }
      ]
    },
    plugins: [
      new ReactRefreshWebpackPlugin({
        overlay: { sockIntegration: 'wps' },
      }),
    ],
    watch: true,
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      port: 5001,
      onListening: ({ compiler }) => {
        const { https, client } = compiler.options.devServer;
        const { publicPath, filename } = compiler.options.output;
        const protocol = https ? "https://" : "http://";
        const port = !client.port ? "" : `:${client.port}`;
        const path = ["", "auto"].includes(publicPath) ? "/" : publicPath;
        console.log(
          `⚡️ single-spa application entry: ${protocol}${client.host}${port}${path}${filename}`
        );
      },
    },
  });
};
