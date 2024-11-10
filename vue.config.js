module.exports = {
  indexPath: 'main.html',
  filenameHashing: false,
  lintOnSave: false,
  configureWebpack: config => {
    config.entry = {
      app: [
        './frontend/main.js'
      ]
    }
  }
}
