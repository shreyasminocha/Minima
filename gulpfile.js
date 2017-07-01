var gulp = require('gulp'),
    rename = require('gulp-rename'),
    csscomb = require('gulp-csscomb'),
    uglifycss = require('gulp-uglifycss');

gulp.task('comb', function() {
    gulp.src('./src/minima.css')
        .pipe(csscomb())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('uglify', function() {
    gulp.src('./src/minima.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(rename('minima.min.css'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['comb', 'uglify']);
