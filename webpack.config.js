const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index",
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
  },
  // cache: false,
  // devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    // publicPath: "http://localhost:3002/",
    publicPath: "https://main--stupefied-kare-218880.netlify.app/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        options: {
          rootMode: "upward",
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      library: {
        type: "var",
        name: "app2",
      },
      filename: "remoteEntry.js",
      exposes: {
        "./Title": "./src/Title",
      },
      // shared: ["react", "react-dom"],
      shared: {
        react: {
          eager: true,
        },
        "react-dom": {
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      // chunks: ["main"],
    }),
  ],
};
