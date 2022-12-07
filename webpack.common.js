/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production',
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins() {
                  return [
                    require('autoprefixer'),
                  ];
                },
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      favicon: './src/public/favicon.svg',
      filename: 'index.html',
    }),
  ],
};
