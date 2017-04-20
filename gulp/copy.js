var gulp = require('gulp');
var sequence = require('run-sequence');

gulp.task('copy', function() {
  return gulp.src(['src/*images/**/*'])
  .pipe(gulp.dest('./dist'));
});
