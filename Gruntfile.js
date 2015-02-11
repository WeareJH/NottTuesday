// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            options: {
                spawn: false
            },
            sass: {
                files: "css/*.scss",
                tasks: ['sass']
            }
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
                    src: [
                        "css/*.css",
                        "*.html",
                        "awards/*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: true
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('dev-watch', ["browserSync", "watch"]);
};