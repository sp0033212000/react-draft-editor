"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
const clean_webpack_plugin_1 = require("clean-webpack-plugin");
const fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
const webpack_node_externals_1 = __importDefault(require("webpack-node-externals"));
const copy_webpack_plugin_1 = __importDefault(require("copy-webpack-plugin"));
const WebpackConfig = {
    mode: "production",
    entry: ["@babel/polyfill", "./src/index.tsx"],
    output: {
        path: path_1.default.resolve(__dirname, "lib"),
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
                exclude: /node_modules/,
                use: [{ loader: "ts-loader" }],
            },
            {
                test: /\.(s?css)$/i,
                exclude: /node_modules/,
                use: [
                    mini_css_extract_plugin_1.default.loader,
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
    externals: [(0, webpack_node_externals_1.default)({ importType: "umd" })],
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
            "~": path_1.default.resolve("./node_modules"),
        },
    },
    plugins: [
        new mini_css_extract_plugin_1.default({
            filename: "styles.css",
            chunkFilename: "[id].css",
        }),
        new copy_webpack_plugin_1.default({
            patterns: [
                {
                    from: "./node_modules/draft-js/dist/Draft.css",
                    to: "./",
                },
            ],
        }),
        new clean_webpack_plugin_1.CleanWebpackPlugin(),
        new fork_ts_checker_webpack_plugin_1.default(),
    ],
};
exports.default = WebpackConfig;
//# sourceMappingURL=webpack.config.js.map