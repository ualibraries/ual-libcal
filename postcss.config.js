module.exports = {
  plugins: [
    require('stylelint')({
      configFile: '.stylelintrc.json'
    }),
    require('postcss-cssnext'),
    require('postcss-reporter')({
      clearMessages: true
    })
  ]
}
