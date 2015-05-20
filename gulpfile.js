var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    flatten = require('gulp-flatten'),
    shell = require('gulp-shell');

gulp.task('concat', function() {
  gulp.src(['./src/*.js', './src/app/**/*.js', './src/shared/**/*.js'])
  .pipe(concat('application.js'))
  .pipe(gulp.dest('./www/'));
});

gulp.task('jade', function() {
  gulp.src('./src/app/index.jade')
  .pipe(jade())
  .pipe(gulp.dest('./www'));
  gulp.src('./src/app/**/*.jade')
  .pipe(jade())
  .pipe(flatten())
  .pipe(gulp.dest('./www/views'));
});

gulp.task('stylus', function(){  
  gulp.src('src/assets/stylesheets/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('www/assets/stylesheets'))
});

gulp.task('move:libs', function() {
  gulp.src('./src/assets/libs/**/*', {base: './src/assets/libs/'})
  .pipe(gulp.dest('./www/assets/libs/'));
});

gulp.task('move:images', function() {
  gulp.src('./src/assets/img/**/*', {base: './src/assets/img/'})
  .pipe(gulp.dest('./www/assets/img/'));
});

gulp.task('compile', ['concat', 'jade', 'stylus', 'move:libs', 'move:images']);