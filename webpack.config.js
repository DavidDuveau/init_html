const path = require("path");
const webpack = require("webpack");

//charger les plugin webpack
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

//main webpack config
module.exports = {
  entry: "./src/js/app.js", //point d'entree de l'appli
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
    chunkFilename: "vendor.js",
  },

  module: {
    rules: [
      {
        test: /\.html$/i, //expression régulière toute les fichiers finissant par .html .HTML etc non case sensitive /i
        loader: "html-loader",
      },
    ],
  },

  //plugins...
  plugins: [
    new copyWebpackPlugin({
      patterns: [
        {
          from: "src/*.html",
          flatten: true,
        },
      ],
    }),
  ],
};
