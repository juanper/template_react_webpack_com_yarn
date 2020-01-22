const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
          test: /\.html$/i,
          loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,      
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
            limit: 10000,
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },          
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },    
  plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        favicon: './src/favicon.ico'
      })
  ],  
  performance: {
    maxEntrypointSize: 600000,
    maxAssetSize: 600000
  }  
};
