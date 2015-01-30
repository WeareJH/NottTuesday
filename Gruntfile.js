// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: "css/*.scss",
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'css/nt.css': 'css/nt.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : '*.css'
                },
                options: {
                    watchTask: true, // < VERY important,
                    proxy: "http://nott-tuesday.static/"
                }
            }
        }
    });

    /**
     * Init BrowserSync
     */
    grunt.registerTask("bs-init", function () {
        var browserSync = require('browser-sync');
        var done = this.async();
        browserSync({
            files: [ // File globs that cause full reload
                "**/*.php",
                "css/*.css"
            ],
            proxy: "http://nott-tuesday.static/"
        }, function (err, bs) {
            done();
        });
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('dev-watch', ["bs-init", "watch"]);
};