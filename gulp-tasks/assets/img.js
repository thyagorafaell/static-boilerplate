module.exports = {
  deps: [],
  fn: function (gulp) {
    return gulp.src(global.project.assets.src.path + '/img/*')
      .pipe(plugins.imagemin([
        plugins.imagemin.optipng(global.options.optipng)
      ]))
      .pipe(gulp.dest(global.project.assets.dist.path + '/assets/img'));
  }
};
