var gulp = require('gulp');
var requireDir = require('require-dir');
var sequence = require('run-sequence');
var tasks = requireDir('./gulp');
var browser = require('browser-sync').create();

gulp.task('server', function() {
  browser.init({
    server: true,
    port: 1444
  });
});

gulp.task('develop', function() {
  sequence('clean', 'copy', 'sass-lint', 'sass', 'pug', 'server');
});

gulp.task('default', ['develop'], function() {
  gulp.watch(['src/scss/**/*.scss'], ['sass-lint', 'sass', browser.reload]);
  gulp.watch(['src/views/**/*.pug'], ['pug', browser.reload]);
});
