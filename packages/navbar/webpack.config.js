const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const webpack = require("webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

const mergeRulesByTestMatch = mergeWithRules({
  module: {
    rules: {
      test: "match",
      include: "replace",
      exclude: "replace",
      use: {
        loader: "match",
        options: "replace",
      },
    },
  },
});

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "example",
    projectName: "navbar",
    webpackConfigEnv,
    argv,
  });

  const config = mergeRulesByTestMatch(defaultConfig, {
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    mode: 'development',
    devtool: 'eval',
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.css$/i,
          include: undefined,
          exclude: /\.lazy\.css$/i,
        },
        {
          test: /\.lazy\.css$/i,
          use: [
            { loader: "style-loader", options: { injectType: "lazyStyleTag" } },
            "css-loader",
          ],
        },
      ],
    },
    plugins: [isDevelopment && new webpack.HotModuleReplacementPlugin()],
    devServer: {
      port: 8000,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
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

  return config;
};
