/* gulpfile.js */

var gulp = require('gulp'); // node_modulesで管理しているgulpを呼び出す
var sass = require('gulp-sass')(require('sass'));
// 関数を定義
function task() {
  // task関数が実行された時に行いたい処理を書く
  return gulp
    .src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'));
}

function watch() {
  task();
  return gulp.watch('./src/sass/**/*.scss', function() {
    return task();
  });
}

// 以下を追記
exports.watch = watch;

// task関数をエクスポートし、gulpで実行できるようにする
exports.default = task;