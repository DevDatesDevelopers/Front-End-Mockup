const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        console: require.resolve('console-browserify'),
        assert: require.resolve('assert/')
      }
    }
  }
})
