var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssMin = require('gulp-css');
var imageop = require('gulp-image-optimization');
var imageResize = require('gulp-image-resize');


gulp.task('compress', function() {
  return gulp.src('frontend-nanodegree-mobile-portfolio/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('frontend-nanodegree-mobile-portfolio/jsdist'));
});

gulp.task('cssMinfy', function(){
  return gulp.src('frontend-nanodegree-mobile-portfolio/css/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('frontend-nanodegree-mobile-portfolio/cssdist'));
});

gulp.task('optimize', function(cb) {
    gulp.src(['frontend-nanodegree-mobile-portfolio/imgdist/*.png','src/*.jpg','src/*.gif','src/*.jpeg']).pipe(imageop({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('frontend-nanodegree-mobile-portfolio/imgdist')).on('end', cb).on('error', cb);
});

gulp.task('resize', function () {
  gulp.src('frontend-nanodegree-mobile-portfolio/views/images/*.{jpg,png}')
    .pipe(imageResize({
      width : 100,
      height : 50,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('frontend-nanodegree-mobile-portfolio/views/imagesdist'));
});