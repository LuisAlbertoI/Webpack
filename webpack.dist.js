const Webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: path.join(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(jpe?g|png|svg|git)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff?2|eot|ttf|otf)$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html")
    }),
    new Dotenv({ path: ".env.local" }),
    new Webpack.ProvidePlugin({
      React: "react"
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".css"]
  }
};
