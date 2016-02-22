exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^(?!app)/
      }
    },
    templates: {
      joinTo: 'javascripts/app.js',
    },
    stylesheets  : {
      joinTo : 'stylesheets/vendor.css'
    }
  }
};