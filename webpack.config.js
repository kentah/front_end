import path from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';

// instantiate the plugin.
// `template` defines the source of a template file used by the plugin
const htmlPlugin = new HtmlWebPackPlugin({
  template: 'src/index.html',
})

const config: webpack.Configuration = {
  // application entry entry: './src/index.tsx',
  //entry: './build/bundle.js',

  // these rules define how files are dealt with
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
        exclude: /node_modules/,
      },
    ],
  },

  // extensions used
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // the file name and location of the resultant build file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // use the html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.HotModuleRepacementPlugin(),
  ],

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
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
