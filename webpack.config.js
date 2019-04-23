const path = require("path");

module.exports = {
  entry: "./src/App.jsx",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "application.js",
    publicPath: "/"
  },
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  }
}
