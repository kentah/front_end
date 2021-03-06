import path from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const config: webpack.Configuration = {
  // application entry entry: './src/index.tsx',
  //entry: './build/bundle.js',

  // these rules define how files are dealt with
  mode: 'development',
  output: {
    publicPath: '/',
  },
  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: '/node_modules/',
        loader: '@graphql-tools/webpack-loader'
      }
    ],
  },

  // extensions used
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },


  // use the html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    })
  ],

  //externals: {
  //  'react': 'React',
  //  'react-dom': 'ReactDOM'
  //},
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true
  },
}

export default config;
