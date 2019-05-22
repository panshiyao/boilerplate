module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.(tsx?|js)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
}
