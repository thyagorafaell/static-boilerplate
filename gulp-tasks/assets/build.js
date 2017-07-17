module.exports = {
  deps: ['assets:favicon', 'assets:img', 'assets:svg'],
  fn: function (gulp) {
    return gulp.src([
      global.project.assets.src.path + '/fonts/*'
    ])
      .pipe(plugins.copy(global.project.assets.dist.path, global.options.copy));
  }
};
