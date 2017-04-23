var gulp = require('gulp');
var sequence = require('run-sequence');

gulp.task('copy', function() {
  return gulp.src(['node_modules/lightgallery.js/dist/fonts/**/*'])
  .pipe(gulp.dest('./dist/fonts/'));
});
