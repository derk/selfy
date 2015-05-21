var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    stylus      = require('gulp-stylus'),
    jade        = require('gulp-jade'),
    concat      = require('gulp-concat'),
    flatten     = require('gulp-flatten'),
    shell       = require('gulp-shell')
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload;

gulp.task('concat', function() {
  gulp.src(['./src/*.js', './src/app/**/*.js', './src/shared/**/*.js'])
  .pipe(concat('application.js'))
  .pipe(gulp.dest('./www/'))
  .pipe(reload({stream:true}));
});

gulp.task('jade', function() {
  gulp.src('./src/app/index.jade')
  .pipe(jade())
  .pipe(gulp.dest('./www'));
  gulp.src(['./src/app/components/**/*.jade', 'src/app/shared/**/*.jade'])
  .pipe(jade())
  .pipe(flatten())
  .pipe(gulp.dest('./www/views'))
  .pipe(reload({stream:true}));
});

gulp.task('stylus', function(){  
  gulp.src('src/assets/stylesheets/**/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('www/assets/stylesheets'))
  .pipe(reload({stream:true}));
});

gulp.task('move:libs', function() {
  gulp.src('./src/assets/libs/**/*', {base: './src/assets/libs/'})
  .pipe(gulp.dest('./www/assets/libs/'))
});

gulp.task('move:images', function() {
  gulp.src('./src/assets/img/**/*', {base: './src/assets/img/'})
  .pipe(gulp.dest('./www/assets/img/'))
});

gulp.task('compile', ['concat', 'jade', 'stylus', 'move:libs', 'move:images']);

gulp.task('serve', ['compile'], function () {

  // Cria o server
  browserSync.init({
    server: {
      baseDir: "./www"
    }
  });

  gulp.watch(['src/app/**/*.js'],['concat'])
  gulp.watch(['src/app/**/*.jade'],['jade'])
  gulp.watch(['src/assets/stylesheets/**/*.styl'],['stylus'])
  gulp.watch(['src/assets/libs/**/*'],['move:libs'])
  gulp.watch(['src/assets/img/**/*'],['move:images'])

});