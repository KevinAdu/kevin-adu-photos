var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function buildHTML() {
  return gulp.src('src/views/*.pug')
  .pipe(pug({
    // Your options in here.
  }))
  .pipe(gulp.dest('./dist/'));
});
