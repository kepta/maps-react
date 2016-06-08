const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  test: path.join(__dirname, 'tests'),
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: PATHS.app,
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      webworkify: 'webworkify-webpack',
    },
  },
  node: {
    fs: 'empty',
  },
  output: {
    path: PATHS.build,
    // Output using entry name
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app,
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'node_modules/mapbox-gl/js/render/painter/use_program.js'),
        loader: 'transform/cacheable?brfs',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'node_modules/mapbox-gl/js/render/shaders.js'),
        loader: 'transform/cacheable?brfs',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'node_modules/webworkify/index.js'),
        loader: 'worker',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'react -webpacl.com',
      appMountId: 'app',
      inject: false,
    }),
  ],
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map',
    devServer: {

      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // display only errors to reduce the amount of output
      stats: 'errors-only',

      // parse host and port from env so this is easy
      // to customize
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    // Define entry points needed for splitting
    entry: {
      app: PATHS.app,
      vendor: Object.keys(pkg.dependencies).filter(v => v !== 'alt-utils' || v !== 'mapbox-gl'),
        // Exclude alt-utils as it won't work with this setup
        // due to the way the package has been designed
        // (no package.json main).

    },
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js',
    },
    plugins: [
      new Clean([PATHS.build], {
        verbose: false, // Don't write logs to console
      }),
      // Extract vendor and manifest files
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
      }),
      // Setting DefinePlugin affects React library size!
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),

      // You can set this to JSON.stringify('development') for your
      // development target to force NODE_ENV to development mode
      // no matter what
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ],
  });
}

if (TARGET === 'test' || TARGET === 'tdd') {
  module.exports = merge(common, {
    devtool: 'inline-source-map',
    resolve: {
      alias: {
        app: PATHS.app,
      },
    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['isparta-instrumenter'],
          include: PATHS.app,
        },
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: PATHS.test,
        },
      ],
    },
    externals: {
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
  });
}
