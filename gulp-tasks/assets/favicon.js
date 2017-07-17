module.exports = {
  deps: [],
  fn: function (gulp) {
    return gulp.src(global.project.code.src.path + '/favicon.png')
      .pipe(plugins.imagemin([
        plugins.imagemin.optipng(global.options.optipng)
      ]))
      .pipe(plugins.copy(global.project.code.dist.path, global.options.copy));
  }
};
