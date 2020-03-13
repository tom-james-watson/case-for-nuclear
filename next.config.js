const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')

module.exports = withFonts(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    webpack(config, options) {
      return config;
    }
  })
)
