const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'public/javascripts')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: (process.env.NODE_ENV === 'production') ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ] : []
}
