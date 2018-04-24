var gulp = require('gulp');
var favicons = require('favicons').stream;
var gutil = require('gulp-util');

gulp.task('favicon', function() {
  return gulp.src('src/images/favicon.svg').pipe(favicons({
    developerName: 'Kevin Adu',
    developerURL: 'http://localhost:1444',
    path: 'favicons/',
    url: 'http://photos.kevinadu.com/',
    display: 'standalone',
    orientation: 'portrait',
    version: 1.0,
    logging: false,
    html: 'index.html',
    pipeHTML: true,
    replace: true
  }))
  .on('error', gutil.log)
  .pipe(gulp.dest('./dist/favicons'));
});
