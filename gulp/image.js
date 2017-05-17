var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
  gulp.src('src/images/**/*.jpg')
  .pipe(imagemin([
    imagemin.jpegtran({ progressive: true }),
  ], {
    verbose: true,
  }))
  .pipe(gulp.dest('./dist/images/'));
});
