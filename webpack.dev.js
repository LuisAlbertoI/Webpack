const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "static/[name].bundle.js",
    publicPath: "http://localhost:3000/"
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    port: 3000
  }
};
