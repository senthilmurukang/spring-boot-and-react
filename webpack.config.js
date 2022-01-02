const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
    ? MiniCssExtractPlugin.loader
    : "style-loader";

const config = {
    entry: path.resolve(__dirname, "./src/main/javascript/index.js"),
    output: {
        path: path.resolve(__dirname, "./src/main/resources/static"),
        publicPath: '/',
        filename: "script/[name].[contenthash].js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(m?js|jsx)$/i,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, "css-loader", "sass-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            }
        ],
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'pages/index.html',
            template: 'src/main/resources/templates/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "styes/[name].[contenthash].css",
            ignoreOrder: true
        })
    ],
    optimization: {
        moduleIds: 'deterministic',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
