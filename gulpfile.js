var gulp = require('gulp');
var exec = require('child_process').exec;

var firstCompile = true;
gulp.task('compile', function(done) {
  var tsc = exec('tsc --watch');
  tsc.stderr.on('close', console.log);
  tsc.stdout.on('data', o => {
    //Prevent tsc from clearing the console with \033c
    console.info(o.replace('\033c', ''));
    if (o.indexOf('Watching for file changes') > -1) {
      if (!firstCompile) {
        update();
      }
      firstCompile = false;
    }
  });
});

gulp.task('', () => {
  console.log('Start browser sync...');
});

gulp.task('default', ['compile', 'serve', 'watch-demo', 'compile-demo']);
