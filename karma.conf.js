module.exports = config => {
  config.set({
    captureTimeout: 30 * 1000,
    frameworks: [
      'fixture',
      'jasmine',
      'jquery-3.3.1', // Matches the jQuery version used by our app.
      'sinon',
    ],

    files: [
      'api.js',
      'main.js',
      'test/**/*.js',
      'test/**/*.html'
    ],

    preprocessors: {
      'test/**/*.html': ['html2js'],
      '*.js': ['coverage']
    },

    browsers: [
      'Chrome', 'Firefox'
    ],

    reporters: [
      'dots',
      'coverage'
    ]
  })
}
