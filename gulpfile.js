var gulp = require('gulp');
var exec = require('child_process').exec;
var browserSync = require('browser-sync').create();

let update = () => {
    clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(() => {
        console.log('Component files changed. Repacking for demo...');
        exec('npm run update-demo', function (err, _stdOut, _stdErr) {
            if (err) {
                console.log("Demo NPM package failed to update.", err);
                return;
            }
            console.log("Demo NPM package updated.", _stdOut);
            browserSync.reload();
        });
    }, 500);
}

var timeoutHandle;
var firstCompile = true;
gulp.task('compile', function (done) {
    var tsc = exec("tsc --watch");
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
    })
});

gulp.task('serve', (done) => {
    var serve = exec('polymer serve -p 8000 -v demo');
    serve.stdout.on('data', o => {
        console.log(o);
        if (o.indexOf('Files in this directory are available under the following URLs') > -1) {
            browserSync.init({
                proxy: "localhost:8000",
                startPath: "/",
                snippetOptions: {
                    // just append the snippet to the end of the file
                    rule: {
                        match: /$/i,
                        fn: function (snippet, match) {
                            return snippet + match;
                        }
                    }
                }
            });
        }
    })
});

gulp.task('watch-demo', function () {
    var directoriesToWatch = ["demo/*.html"]
    directoriesToWatch.forEach(function (directory) {
        console.log(`Listening for changes, ${directory}`);
        gulp.watch(directory, {
            read: false,
            verbose: true
        }).on('change', (_e) => {
            browserSync.reload();
        });
    });
});

gulp.task('compile-demo', function (done) {
    var tsc = exec("cd demo && tsc --watch");
    tsc.stderr.on('close', console.log);
    tsc.stdout.on('data', o => {
        //Prevent tsc from clearing the console with \033c
        console.info(o.replace('\033c', ''));
        if (o.indexOf('Watching for file changes') > -1) {
            if (!firstCompile) {
                browserSync.reload();
            }
            firstCompile = false;
        }
    })
});

gulp.task('browser-sync', () => {
    console.log('Start browser sync...');

});

gulp.task('default', ['compile', 'serve', 'watch-demo', 'compile-demo']);