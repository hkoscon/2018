const basePath = process.env.BASE_PATH || '/2018';

module.exports = {
  entry: {
    app: ['./assets/js/app'],
    timetable: ['./assets/js/timetable/index'],
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/../public`,
    publicPath: `${basePath}/`,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    symlinks: false,
  },
  externals: {
    jquery: 'jQuery',
    modernizr: 'Modernizr',
  },
  module: {
    rules: [
      {
        test: /\.js|vue$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          // eslint-disable-next-line global-require
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    ],
  },
};
