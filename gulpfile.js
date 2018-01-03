const gulp = require('gulp');
var minifyCSS = require('gulp-csso');
const concat = require('gulp-concat')

const cssFiles = [
    './node_modules/bootstrap/dist/css/bootstrap.min.css'
];

gulp.task('css', function() {
    return gulp.src(cssFiles)   
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./public/css/'))
});

gulp.task('build', ['css']);