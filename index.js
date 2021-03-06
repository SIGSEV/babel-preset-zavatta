module.exports = {
  presets: [
    require('babel-preset-react'),
    require('babel-preset-es2015'),
    require('babel-preset-stage-0')
  ],
  plugins: [
    require('babel-plugin-transform-decorators-legacy').default,
    [require('babel-plugin-module-resolver').default, {
      root: ['src']
    }]
  ]
}
