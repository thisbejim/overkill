var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', "./index.js"],
    plugins: [
       new FlowStatusWebpackPlugin()
    ],
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: "/static/"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.css$/, exclude: /node_modules/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'}
        ]
    }
};
