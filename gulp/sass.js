var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

var browserVersions = ['last 2 versions', 'ie >= 11'];

gulp.task('sass', function () {
  return gulp.src([
    './src/scss/**/*.scss'
  ])
  .pipe(sass({
    includePaths: [
      './node_modules/normalize-scss/sass',
      './node_modules/lightgallery.js/src/sass'
    ],
    outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: browserVersions
  }))
  .pipe(concat('main.css'))
  .pipe(gulp.dest('./dist/css/'));
});
