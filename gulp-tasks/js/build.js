module.exports = {
  deps: [],
  fn: function (gulp) {
    var browserify  = require('browserify');
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');

    return browserify({
        entries: global.project.js.src.file,
        debug: false
      })
      .bundle()
      .pipe(source(global.project.js.dist.file))
      .pipe(buffer())
      .pipe(global.plugins.uglify(global.options.uglify))
      .pipe(gulp.dest(global.project.js.dist.path));
  }
};