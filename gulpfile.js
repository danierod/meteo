var gulp = require('gulp');
var karmaServer = require('karma').Server;


var karmaConfigurationFile = __dirname + '/karma.conf.js';


gulp.task('test', function (done) {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    new karmaServer({
        configFile : karmaConfigurationFile
    }, done).start();
});

gulp.task('default', ['tdd']);