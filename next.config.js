const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const nextBuildId = require('next-build-id')

module.exports = withFonts(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    generateBuildId: () => nextBuildId({ dir: __dirname })
    webpack(config, options) {
      return config;
    }
  })
)
