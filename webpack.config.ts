import { Configuration } from "webpack";
import path from "path";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import ForkTSCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import WebpackNodeExternals from "webpack-node-externals";

const WebpackConfig: Configuration = {
  mode: "development",
  entry: "./src/lib/index.tsx",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    library: {
      name: "DraftEditor",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: "/node_modules",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/typescript",
                "@babel/preset-react",
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        loader: "@svgr/webpack",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[folder]/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  externalsPresets: { node: true },
  externals: [WebpackNodeExternals({ importType: "umd" })],
  devtool: "source-map",
  // optimization: {
  //   minimize: false,
  // },
  stats: {
    errorDetails: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].module.css",
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin(),
    new ForkTSCheckerWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/lib/assets",
          to: "./assets",
        },
      ],
    }),
  ],
};

export default WebpackConfig;
