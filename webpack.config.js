const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: {
    main: "./src/index",
  },
  cache: false,
  devtool: "source-map",
  mode: "development",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          rootMode: "upward",
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },
  devServer: {
    "Access-Control-Allow-Origin": "*",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "_federation_website2",
      library: {
        type: "var",
        name: "_federation_website2",
      },
      filename: "remoteEntry.js",
      // remotes: {
      //   website1: "website1_main",
      // },
      // shared is not support now
      shared: ["react", "react-dom"],
      exposes: {
        Title: "./src/Title",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      chunks: ["main"],
    }),
  ],
};
