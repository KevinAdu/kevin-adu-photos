var gulp = require('gulp');
var sequence = require('run-sequence');

gulp.task('copy:fonts', function() {
  return gulp.src(['node_modules/lightgallery.js/dist/fonts/**/*', 'src/fonts/**/*'])
  .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('copy:favicon', function() {
  return gulp.src(['src/images/favicon.ico'])
  .pipe(gulp.dest('./dist/'));
});

gulp.task('copy:cname', function() {
  return gulp.src(['CNAME'])
  .pipe(gulp.dest('./dist/'));
});

gulp.task('copy', function() {
  sequence('copy:fonts', 'copy:favicon', 'copy:cname');
});
