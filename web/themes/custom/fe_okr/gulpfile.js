let gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  babel = require('gulp-babel'),
  minify = require('gulp-minify');
const paths = {
  scss: {
    src: './scss/style.scss',
    dest: './css',
    watch: './scss/**/*.scss',
    print: './scss/print.scss'
  },
  js: {
    src: './js/src/**/*.js',
    dest: './js/dist'
  }
}
// Compile sass into CSS & auto-inject into browsers
function styles () {
  return gulp.src([paths.scss.src, paths.scss.print])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({})]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(cleanCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scss.dest))
}
// Move the javascript files into our js folder
function js () {
  return gulp.src([paths.js.src])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest(paths.js.dest))
}
const build = gulp.series(styles, js)
exports.styles = styles
exports.js = js
exports.default = build
