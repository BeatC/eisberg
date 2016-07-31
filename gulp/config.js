import stream from 'stream';

let config = {
  port: 80,
  src: {
      index: './src',
      entry: './src/js/index.jsx',
      html: './src/index.html',
      styles: './src/styles'
  },
  dest: './dist'
};

export default config;
