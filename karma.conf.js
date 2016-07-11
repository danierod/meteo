module.exports = function(config) {
    config.set({
        basePath: '',

        browsers: ['Chrome'],

        frameworks: ['jasmine'],

        files: [
            'bower_components/angular/angular.js',
            'app/components/**/*.js',
            'app/test/**/*.spec.js'
        ],

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        singleRun: false

    });
};