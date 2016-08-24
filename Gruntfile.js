/*
 * grunt-apex-doc
 * https://github.com/derrek/grunt-apex-doc
 *
 * Copyright (c) 2016 Derrek Harrison
 * Licensed under the MIT license.
 */

'use strict';
module.exports = grunt => {

  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    apexdoc: {
      development: {
        config: {
          source: './node_modules/apex-doc-node/_test/data/',
          target: './node_modules/apex-doc-node/docs/',
          scopes: ['global', 'public'],
          json: true,
          html: false
        }
      }
    },
    jsbeautifier: {
      files: ["*.js", "tasks/**/*.js"],
      options: {
        js: {
          braceStyle: "end-expand",
          breakChainedMethods: false,
          e4x: false,
          evalCode: false,
          indentChar: " ",
          indentLevel: 0,
          indentSize: 2,
          indentWithTabs: false,
          jslintHappy: false,
          keepArrayIndentation: false,
          keepFunctionIndentation: false,
          maxPreserveNewlines: 10,
          preserveNewlines: true,
          spaceBeforeConditional: false,
          spaceInParen: false,
          unescapeStrings: false,
          wrapLineLength: 0,
          endWithNewline: true
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jsbeautifier']);

};
