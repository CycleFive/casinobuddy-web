'use strict';

const path = require('node:path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const Html = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const Brotli = require('brotli-webpack-plugin');

const env = dotenv.config().parsed;
if (!env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Invalid .env file. Ensure you\'ve copied .env.example to .env');
}

const base = {
  context: path.resolve('src'),
  entry: [
    'bootstrap/dist/css/bootstrap.css',
    './index.tsx',
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.json',
      '.wasm',
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtract.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new Html({
      template: path.resolve('src/template.html'),
      inject: 'head',
    }),
    new MiniCssExtract(),
    new webpack.DefinePlugin({
      process: JSON.stringify({
        env: {
          VITE_CLERK_PUBLISHABLE_KEY: env.VITE_CLERK_PUBLISHABLE_KEY,
        },
      }),
    }),
  ],
};

const environments = {
  development: {
    mode: 'development',
    devServer: {
      compress: false,
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:3000',
        },
      ],
    },
  },

  production: {
    mode: 'production',
    output: {
      path: path.resolve('dist'),
      filename: 'app.[contenthash].js',
    },
    plugins: [
      new Brotli(),
    ],
  },
};

module.exports = function webpackConfig() {
  if (!['development', 'production'].includes(process.env.NODE_ENV)) {
    throw new Error(`Invalid NODE_ENV: ${process.env.NODE_ENV}`);
  }
  return merge(base, environments[process.env.NODE_ENV]);
};
