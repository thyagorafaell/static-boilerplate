module.exports = {
  deps: [],
  fn: function (gulp) {
    return gulp.src(global.project.assets.src.path + '/svg/*')
      .pipe(plugins.imagemin([
        plugins.imagemin.svgo(global.options.svgo)
      ]))
      .pipe(gulp.dest(global.project.assets.dist.path + '/assets/svg'));
  }
};
