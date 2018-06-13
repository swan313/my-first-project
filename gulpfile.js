const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
const gulpSequence = require('gulp-sequence');  //开启异步队列，保证编译顺序

gulp.task('builddev', () => {
  return watch('./src/nodeuii/**/*.js', {ignoreInitial: false}, () => {
    gulp.src('./src/nodeuii/**/*.js').pipe(babel({
      //不设置此属性，用外的.babelirc编译
      babelrc: false,
      'plugins': [
        "transform-decorators-legacy",  //装饰器@
        "transform-es2015-modules-commonjs"
      ]
    })).pipe(gulp.dest('dist'));
  })
});

gulp.task('buildprod', () => {
  gulp.src('./src/nodeuii/**/*.js').pipe(babel({
    babelrc: false,
    ignore: ['./src/nodeuii/config/*.js'],
    'plugins': [
      "transform-decorators-legacy",  //装饰器@
      "transform-es2015-modules-commonjs"
    ]
  })).pipe(gulp.dest('dist'));
});

//开启清洗流,判断是开发，还是生产
gulp.task('bundleconfig', () => {
  gulp.src('./src/nodeuii/**/*.js')
      .pipe(rollup({
        output: {
          format: 'cjs'
        },
        input: './src/nodeuii/config/index.js',
        plugins: [
          replace({
            'process.env.NODE_ENV': JSON.stringify('production')
          })
        ]
      }))
      .pipe(gulp.dest('./dist'));
});

let _task = ["builddev"];
if (process.env.NODE_ENV == 'production') {
  _task = gulpSequence(['buildprod', 'bundleconfig']);
}

gulp.task('default', _task);