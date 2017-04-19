var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('javascript', function() {
  gulp.src([
    './src/js/main.js'
  ])
  .pipe(babel())
  .pipe(concat('main.min.js'))
  .pipe(uglify({preserveComments: 'some'}))
  .pipe(gulp.dest('./'));
});
