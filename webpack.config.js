const path = require('path');

module.exports = {
    entry: './src',
    mode: "development",
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "public/"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/env",
                        "@babel/preset-react"
                    ]
                }
            },
            {
                test: /\.lazy\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'lazyStyleTag',
                            esModule: true,
                            modules: {
                                namedExport: true,
                            },
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: true,
                            modules: {
                                namedExport: true
                            },
                        },
                    }
                ]
            }
        ]
    }
};