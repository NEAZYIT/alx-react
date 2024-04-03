const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    mode: 'production',
    plugins: [
        new ImageMinimizerPlugin({
            minimizer: [
                // Specify your image optimization plugins here
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                [
                    'svgo',
                    {
                        plugins: [
                            {
                                removeViewBox: false,
                            },
                        ],
                    },
                ],
            ],
        }),
        // ... other plugins ...
    ],
};