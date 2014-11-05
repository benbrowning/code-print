
var gulp = require('gulp'),//http://gulpjs.com/
    util = require('gulp-util'),//https://github.com/gulpjs/gulp-util
    sass = require('gulp-sass'),//https://www.npmjs.org/package/gulp-sass
    autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
    log = util.log;


var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

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

var sassFiles = 'pages/sass/**/*.scss';

gulp.task('sass', function(){
    log("Generate CSS files " + (new Date()).toString());
    gulp.src(sassFiles)
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 3 version','safari 5', 'ie 8', 'ie 9'))
        .pipe(gulp.dest('pages/css/'));
        // .pipe(rename({suffix: '.min'}))
        // .pipe(minifycss())
        // .pipe(gulp.dest('target/css'));
});


gulp.task('watch', function(){
    log('Watching scss files for modifications');
    gulp.watch(sassFiles, ['sass']);
});

