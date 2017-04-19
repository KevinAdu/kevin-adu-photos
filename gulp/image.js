var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
  gulp.src('src/images/**/*.jpg')
    .pipe(imageResize({
      width: 1200,
      height: 800,
      crop: false,
      upscale: false,
    }))
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('images/'));
});
