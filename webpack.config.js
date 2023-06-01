const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  entry: {
    index: "./src/js/script.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/assets/img/tygoat.png",
    }),
  ],
  devServer: {
    port: 5000,
    open: {
      app: {
        name: "chrome",
      },
    },
    static: path.resolve(__dirname, "dist"),
  },

  mode: "production",
};
