module.exports = {
  deps: [],
  fn: function(gulp) {
    var sequence = require('run-sequence');
    sequence('clean', ['assets:dev', 'js:dev', 'css:dev', 'html:dev']);

    gulp.watch(global.project.css.src.path + '/*', ['css:dev']);
    gulp.watch(global.project.js.src.path + '/*', ['js:dev']);
    gulp.watch(global.project.assets.src.path + '/**/*', ['assets:dev']);
    gulp.watch(global.project.html.src.path + '/*', ['html:dev']);
  }
};