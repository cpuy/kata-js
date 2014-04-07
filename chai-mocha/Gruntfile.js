'use strict';

module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    mochaTest: {
     options: {
	     ui: 'tdd', 
       reporter: 'nyan'
     }, 
     test: {
        src: ['test/**/*.js']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: [ 'mochaTest']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: [ 'mochaTest'], 
        options: {
                    livereload: true,
                }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['mochaTest']);

};
