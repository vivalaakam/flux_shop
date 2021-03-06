module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            browserify: {
                files: './app/**/*.js',
                tasks: ['browserify'],
            },
            less : {
              files : './less/*.less',
              tasks: ['less:development']
            }
        },
        express: {
            options: {
                port: 3000,
            },
            dev: {
                options: {
                    script: './server/bin/www'
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files: {
                    './public/stylesheets/style.css': './less/app.less'
                }
            }
        },
        browserify: {
            options: {
                transform: [require('grunt-react').browserify]
            },
            client: {
                src: ['./app/app.js'],
                dest: './public/javascripts/app.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');


    grunt.registerTask('default', ['browserify', 'less:development', 'express', 'watch']);

};
