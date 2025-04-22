const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                "import",
                {
                  "libraryName": "@ucloud-fe/react-components",
                  "camel2DashComponentName": false,
                  "libraryDirectory": "lib/components"
                }
              ]
            ]
          }
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.tsx?$/,  
        use: 'ts-loader',  
        exclude: /node_modules/,  
      },
    ],
  },
  resolve: {
    extensions: ['.tsx','.ts','.js', '.jsx'], 
  },
  devServer: {
     static: './dist', 
    port: 3000, 
    hot: true, 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', 
    })
  ],
  devtool: 'source-map'
};