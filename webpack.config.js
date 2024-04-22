// module.exports = {
//     entry: './src/index.js',
//     output: {
//       path: __dirname + '/dist',
//       filename: 'bundle.js',
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(js|jsx)$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//           },
//         },
//       ],
//     },
//     resolve: {
//       extensions: ['.js', '.jsx', '.md'],
//     },
//   };
  
//   const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//       // Add loaders for CSS, images, and other assets as needed
//     ],
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, 'public'),
//     port: 3000,
//     historyApiFallback: true,
//   },
// };

// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//       {
//         test: /\.md$/,
//         use: 'markdown-loader',
//       },
//     ],
//   },
// };

// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//       {
//         test: /\.md$/,
//         use: 'markdown-loader',
//       },
//     ],
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, 'public'),
//     port: 3000,
//     historyApiFallback: true,
//   },
// };

const path = require('path');

module.exports = {
  mode: 'development',  
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.md'], 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader', 
          },
          {
            loader: 'markdown-loader', 
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
    historyApiFallback: true,
  },
};


