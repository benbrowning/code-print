/* global karma */
var gulp = require('gulp');
var karma = require('karma').server;
var sass = require('gulp-sass');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  'use strict';
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  'use strict';
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

gulp.task('default', ['tdd']);
gulp.task('default', function() {
  // place code for your default task here
});

var gulp = require('gulp');


gulp.task('sass', function () {
    gulp.src('./pages/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./pages/css/'));
});
