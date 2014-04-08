/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    sass: {
      main: "app/css/main.sass"
    },
    js: {
      vendor: [
        "vendor/bower/jquery/jquery.js",
        "vendor/bower/handlebars/handlebars.js",
        "vendor/bower/ember/ember.js",
        "vendor/js/**/*.js",
        "vendor/bower/bootstrap-sass/vendor/assets/javascripts/bootstrap.js"
      ]
    }
  };
};
