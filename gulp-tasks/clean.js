module.exports = {
  deps: [],
  fn: function(gulp) {
    return gulp.src([])
      .pipe(global.plugins.destClean(global.project.code.dist.path));
  }
};