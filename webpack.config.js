const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts|\.tsx?$/,
                loader: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
    },
    devtool: 'inline-source-map',
    entry: {
        App: './src/App.tsx',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'src')
    }
}
