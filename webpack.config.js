module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./js/profile.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        inline:true,
        port: 10000
    },
};