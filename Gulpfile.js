const gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    sass       = require('gulp-sass');

gulp.task('style', function(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});
gulp.task('scripts', function () {
    gulp.src(['./src/js/main.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'babelify' ]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/'));
});


gulp.task('build', [ 'style', 'scripts' ]);