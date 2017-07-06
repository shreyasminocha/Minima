var gulp = require('gulp'),
    concat = require('gulp-concat'),
    csscomb = require('gulp-csscomb'),
    uglifycss = require('gulp-uglifycss');

var sources = [
    "src/meta.css",
    "src/base.css",
    "src/typography.css",
    "src/table.css",
    "src/image.css"
];

gulp.task('comb', function() {
    gulp.src(sources)
        .pipe(concat('minima.css'))
        .pipe(csscomb())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('uglify', function() {
    gulp.src(sources)
        .pipe(concat('minima.min.css'))
        .pipe(csscomb())
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['comb', 'uglify']);
