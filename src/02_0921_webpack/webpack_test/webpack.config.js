// commonjs

const path = require('path')

module.exports = {
    mode: "development",
    entry: "./user.js",
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"]  // 有顺序，从后向前
            },
            {
                loader: jsonLoader,
                test: /\.json$/,
            },
        ],
    },
};
