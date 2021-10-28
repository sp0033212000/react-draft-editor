import { Configuration } from "webpack";
import path from "path";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ForkTSCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import WebpackNodeExternals from "webpack-node-externals";
import CopyWebpackPlugin from "copy-webpack-plugin";

const WebpackConfig: Configuration = {
  mode: "production",
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    globalObject: "this",
    publicPath: "./",
    library: {
      name: "DraftEditor",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              onlyCompileBundledFiles: true,
            },
          },
        ],
      },
      {
        test: /\.(s?css)$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: /\.module\.\w+$/i,
              import: false,
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
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: { outputStyle: "compressed" },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: { exportType: "name" },
          },
          {
            loader: "url-loader",
          },
        ],
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
  optimization: {
    minimize: false,
  },
  stats: {
    errorDetails: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
    modules: ["node_modules"],
    alias: {
      "~": path.resolve("./node_modules"),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[id].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./node_modules/draft-js/dist/Draft.css",
          to: "./",
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new ForkTSCheckerWebpackPlugin(),
  ],
};

export default WebpackConfig;
