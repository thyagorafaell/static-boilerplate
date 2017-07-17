module.exports = {
  deps: [],
  fn: function (gulp) {
    return gulp.src(global.project.assets.src.path + '/**/*')
      .pipe(plugins.copy(global.project.assets.dist.path, global.options.copy));
  }
};
