var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  return del([
    'main.css',
    './*.html',
    'images/*'
  ]);
});
