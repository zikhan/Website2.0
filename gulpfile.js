import gulp from "gulp";
import sass from "gulp-sass";
import minifyCSS from 'gulp-csso';
import concat from "gulp-concat";
import sourcemaps from 'gulp-sourcemaps';

gulp.task('html', function () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('wwwroot'))
});

gulp.task('css', function () {
    return gulp.src('src/styles/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('wwwroot'))
});

gulp.task('js', function () {
    return gulp.src('src/scripts/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('index.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('wwwroot'))
});

gulp.task('default', ['html', 'css', 'js']);