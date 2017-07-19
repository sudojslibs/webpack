const path = require('path');

const config = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    }
};

module.exports = config;