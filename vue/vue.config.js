const path = require("path");
console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:8000'
  },
  outputDir: '../lumen/public',
  chainWebpack: config => {
    config.resolve.alias
      .set('~', path.join(__dirname, 'src'))
  },
  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/index.blade.php'
      : 'index.html',
  pwa: {
    name: 'App Name',
    themeColor: '#37A000'
  }
}