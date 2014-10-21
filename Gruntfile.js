// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: "*.scss",
            tasks: ['compass']
        },
        compass: {
            dist: {
                options: {
                    sassDir: '/',
                    cssDir: '/',
                    outputStyle: 'compressed'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : '*.css'
                },
                options: {
                    watchTask: true // < VERY important
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ["browserSync", "watch"]);
};