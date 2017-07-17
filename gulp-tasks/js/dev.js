module.exports = {
  deps: [],
  fn: function (gulp) {
    var browserify  = require('browserify');
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');

    gulp.src(global.project.js.src.path + '/*.js')
      .pipe(global.plugins.jshint())
      .pipe(global.plugins.jshint.reporter('default'));

    return browserify({
        entries: global.project.js.src.file,
        debug: true
      })
      .bundle()
      .pipe(source(global.project.js.dist.file))
      .pipe(buffer())
      .pipe(gulp.dest(global.project.js.dist.path));
  }
};