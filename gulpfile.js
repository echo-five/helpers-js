//
// Dependencies.
// npm install %package% --save-dev
//
let fancyLog = require('fancy-log');
let gulp = require('gulp');
let gulpConcat = require('gulp-concat');
let gulpPlumber = require('gulp-plumber');
let gulpRename = require('gulp-rename');
let gulpUglify = require('gulp-uglify');
let merge = require('merge-stream');

//
// Constants.
//
const {dest, parallel, series, src, task, watch} = require('gulp');
const paths = {
  'project': {
    'base': 'src/',
    'dest': 'dist/'
  },
  'scripts': {
    'base': 'src/scripts/',
    'dest': 'dist/scripts/'
  }
};

//
// ----------------------------------------------------------------------------
//

// Package scripts (unminified).
task('package-scripts-unminified', cb => {
  //fancyLog.info('Task "Package Scripts (Unminified)".');
  // Helpers functions (jQuery).
  // Copy file, as is, just move to the destination folder.
  let subTaskCopy1 = src(paths.scripts.base + 'helpers.jquery.js')
    .pipe(gulpPlumber())
    .pipe(dest(paths.scripts.dest));
  // Helpers functions  (default Javascript).
  // Copy file, as is, just move to the destination folder.
  let subTaskCopy2 = src(paths.scripts.base + 'helpers.js')
    .pipe(gulpPlumber())
    .pipe(dest(paths.scripts.dest));
  // Create the helpers bundle (merge of files).
  let subTaskMerge = src([
    paths.scripts.base + 'helpers.jquery.js',
    paths.scripts.base + 'helpers.js'
  ])
    .pipe(gulpPlumber())
    .pipe(gulpConcat('helpers.bundle.js'))
    .pipe(dest(paths.scripts.dest));
  // Return.
  return merge(subTaskCopy1, subTaskCopy2, subTaskMerge);
});

// Package scripts.
task('package-scripts', cb => {
  //fancyLog.info('Task "Package Scripts".');
  // Helpers functions (jQuery).
  // Copy file, as is, just move to the destination folder.
  let subTaskCopy1 = src(paths.scripts.base + 'helpers.jquery.js')
    .pipe(gulpPlumber())
    .pipe(gulpUglify(
      {
        mangle: true,
        output: {
          comments: /^!/
        }
      }
    ))
    .pipe(gulpRename({suffix: '.min'}))
    .pipe(dest(paths.scripts.dest));
  // Helpers functions  (default Javascript).
  // Copy file, as is, just move to the destination folder.
  let subTaskCopy2 = src(paths.scripts.base + 'helpers.js')
    .pipe(gulpPlumber())
    .pipe(gulpUglify(
      {
        mangle: true,
        output: {
          comments: /^!/
        }
      }
    ))
    .pipe(gulpRename({suffix: '.min'}))
    .pipe(dest(paths.scripts.dest));
  // Create the helpers bundle (merge of files).
  let subTaskMerge = src([
    paths.scripts.base + 'helpers.jquery.js',
    paths.scripts.base + 'helpers.js'
  ])
    .pipe(gulpPlumber())
    .pipe(gulpConcat('helpers.bundle.js'))
    .pipe(gulpUglify(
      {
        mangle: true,
        output: {
          comments: /^!/
        }
      }
    ))
    .pipe(gulpRename({suffix: '.min'}))
    .pipe(dest(paths.scripts.dest));
  // Return.
  return merge(subTaskCopy1, subTaskCopy2, subTaskMerge);
});

//
// ----------------------------------------------------------------------------
//

// Task - Watch.
task('watch', (cb) => {
  //fancyLog.info('Task "Watch".');
  watch([
    paths.scripts.base + 'helpers.jquery.js',
    paths.scripts.base + 'helpers.js'
  ], {usePolling: true}, series('package-scripts-unminified', 'package-scripts'));
  cb();
});

// Task - Default.
task('default', (cb) => {
  fancyLog.info('-------------------------------------------');
  fancyLog.info('Hi,');
  fancyLog.info('');
  fancyLog.info('The "gulp" command do nothing by default!');
  fancyLog.info('');
  fancyLog.info('Please use on of the following command:');
  fancyLog.info('');
  fancyLog.info('- gulp build: Build the "dist" folder content.');
  fancyLog.info('- gulp watch: Listen changes on the "src" folder content.');
  fancyLog.info('');
  fancyLog.info('-------------------------------------------');
  cb();
});

// Task - Build.
exports.build = series('package-scripts-unminified', 'package-scripts');
