module.exports = function(grunt) {
    grunt.initConfig({
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 3 versions'
                    }),
                    require('csswring')
                ]
            },
            dist: {
                src: 'css/**/*.css'
            }
        },
        sass: {
            all: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/home.css': 'scss/home.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass:all'/*, 'postcss'*/],
                options: {
                    livereload: true
                }
            },
            all: {
                files: ['css/**/*.css', '*.html', 'js/**/*.js'],
                options: {
                    livereload: true
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        }

    });

    // Automatic Dependency Loading
    require('load-grunt-tasks')(grunt);

    // Default Grunt Task, used during main development.
    grunt.registerTask('default', ['connect:server', 'watch']);
}