const path = require("path");
const webpack = require("webpack");

//charger les plugin webpack
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        test: /\.js$/,

        exclude: "/node_modules",

        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.sc|ass$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },

          {
            loader: "css-loader",
          },

          {
            loader: "sass-loader",
          },
        ],
      },

      {
        test: /\.html$/i, //expression régulière toute les fichiers finissant par .html .HTML etc non case sensitive /i

        loader: "html-loader",
      },
    ],
  },

  //plugins...
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/*.html",
          flatten: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        removeComments: true, //remove html comments
        collapseWhitespace: true, //remove space
        removeEmptyAttributes: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "./src/css/[name].css",
      chunFilename: "./src/css/[id].css",
    }),
  ],
};
