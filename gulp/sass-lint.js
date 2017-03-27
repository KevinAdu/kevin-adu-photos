var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');

gulp.task('sass-lint', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sassLint({
      configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});
