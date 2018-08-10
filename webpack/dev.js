const base = require("./base");
const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const autoprefixer = require("autoprefixer");
const mqpacker = require("css-mqpacker");
const cssdedupe = require("postcss-discard-duplicates");

module.exports = merge(base, {
    devServer: {
        contentBase: path.resolve("./build"),
        host: "localhost",
        compress: false,
        inline: true,
        hot: true,
        noInfo: true,
        lazy: false,
        port: 9000,
        stats: "errors-only",
        disableHostCheck: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 100,
            poll: 500
        }
    },
    devtool: "cheap-eval-source-map",
    output: {
        path: path.join(__dirname, "../build"),
        publicPath: "/",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            localIdentName: "[name]-[local]"
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [autoprefixer(), mqpacker(), cssdedupe()],
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [path.resolve(__dirname, "../src")],
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
});
