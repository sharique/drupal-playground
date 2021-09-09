const {src, dest, watch} = require('gulp');
const complieSass = require('gulp-sass')(require('node-sass'));
const minify = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');

complieSass.complieSass = require ('node-sass');

const scssPath = {
  scss: {
    src: './scss/style.scss',
    dest: './css'
  }
};

const buildcss = () => {
  return src([scssPath.scss.src])
  .pipe(sourceMaps.init())
  .pipe(complieSass().on('error', complieSass.logError))
  .pipe(minify())
  .pipe(sourceMaps.write())
  .pipe(dest(scssPath.scss.dest))
}
const watchscss =() => {
  watch('./scss/*.sccs', buildcss);
  watch('./scss/**/*.scss', buildcss);
}

exports.buildcss = buildcss;
exports.watchscss = watchscss;
