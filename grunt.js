/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! Sports Hack Day - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://sportshackday.com/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Sports Hack Day; Licensed MIT */'
    },
    lint: {
      files: ['js/main.js']
    },
    concat: {
      dist: {
        src: ['js/*.js'],
        dest: 'js/compiled/site.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'js/compiled/site.min.js'
      }
    },
    watch: {
      files: ['<config:lint.files>', 'css/scss/*.scss', 'index.html', 'page.html'],
      tasks: 'compass:build lint concat min reload'
    },
    compass: {
      build: {
        src: 'css/scss',
        dest: 'css',
        outputstyle: 'compressed',
        linecomments: false,
        forcecompile: true
      }
    },
    reload: {
      port: 35729,
      liveReload: {},
      proxy: {
        host: 'localhost',
        port: 8000
      }
    },
    img: {
      png: {
        src: ['img/*.png']
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        devel: true
      },
      globals: {
        jQuery: true,
        $: true,
        _: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'server open-browser reload watch');
  grunt.registerTask('build', 'compass lint concat min img');
  grunt.registerTask('open-browser', function() {
    var open = require('open');
    open( 'http://localhost:8000' );
  });

  // Extra Tasks

  grunt.loadTasks('grunt');

};
