module.exports = {
  deps: [],
  fn: function (gulp) {
    return gulp.src(global.project.html.src.file)
      .pipe(global.plugins.data(global.siteData))
      .pipe(global.plugins.pug(global.options.pug))
      .pipe(global.plugins.htmlmin(global.options.htmlmin))
      .pipe(global.plugins.rename(global.project.html.dist.file))
      .pipe(gulp.dest(global.project.html.dist.path));
  }
};