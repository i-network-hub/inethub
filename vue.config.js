module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/sass/main.sass"
        `
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: '9000'
  }
}
