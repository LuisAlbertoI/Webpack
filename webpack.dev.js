module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    publicPath: 'http://localhost:3000/'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3000
  }
};