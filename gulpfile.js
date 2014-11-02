/* global karma */
var gulp = require('gulp'),
    karma = require('karma').server,
    sass = require('gulp-sass'),
    watch = require('gulp-watch')

/**
 * Run test once and exit
 */
// gulp.task('test', function (done) {
//     'use strict';
//     karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: true
//     }, done);
// });

/**
 * Watch for file changes and re-run tests on each change
 */
// gulp.task('tdd', function (done) {
//   'use strict';
//   karma.start({
//     configFile: __dirname + '/karma.conf.js'
//   }, done);
// });





// gulp.task('default', function () {
//     gulp.src('css/**/*.css')
//         .pipe(watch('css/**/*.css', function(files) {
//             return files.pipe(gulp.dest('./one/'));
//         }))
//         .pipe(gulp.dest('./two/'));
//     // `one` and `two` will contain same files
// });

gulp.task('watch', function () {
    watch('pages/sass/*.scss')
        // .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('pages/css/'));
});
