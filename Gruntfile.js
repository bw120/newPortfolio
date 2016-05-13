
module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },

      hint: ['Gruntfile.js', 'src/**/*.js']
    },

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'

      },
      min: {
        files: {
          'dist/js/ui.js': 'js/ui.js'
        }
      }
    },
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyy-mm-dd") %> \n*/\n'
      },
      min: {
        files: {
          'dist/css/style.css': 'css/style.css'
        }
      }
    },

    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },

      min: {
        files: [{
          expand: true,
          cwd: '',
          src: ['*.html'],
          dest: 'dist/',
          ext: '.html',
          extDot: 'first'
        }]
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },
    watch: {
      html: {
        files: ['src//*.html'],
        tasks: ['htmlmin']
      },
      stylesheets: {
        files: ['src//*.css'],
        tasks: ['cssmin']
      },

      scripts: {
        files: 'src/**/*.js',
        tasks: ['jshint', 'uglify']
      }
    }



  });
  grunt.registerTask('default', ['uglify:min', 'cssmin:min', 'htmlmin', 'postcss:dist']);
  grunt.registerTask('min', ['uglify:min', 'cssmin:min', 'htmlmin']);
  grunt.registerTask('hint', ['jshint:hint']);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-postcss');


};