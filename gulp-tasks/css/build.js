module.exports = {
  deps: [],
  fn: function (gulp) {
    return gulp.src(global.project.css.src.file)
      .pipe(global.plugins.sass())
      .pipe(global.plugins.cssFile2base64())
      .pipe(global.plugins.cssimport())
      .pipe(global.plugins.autoprefixer(global.options.autoprefixer))
      .pipe(global.plugins.csso(global.options.csso))
      .pipe(global.plugins.rename(global.project.css.dist.file))
      .pipe(gulp.dest(global.project.css.dist.path));
  }
};