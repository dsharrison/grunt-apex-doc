/*
 * grunt-apex-doc
 * https://github.com/derrek/grunt-apex-doc
 *
 * Copyright (c) 2016 Derrek Harrison
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('apex_doc', 'A grunt wrapper for the node.js implementation of Apex Doc.', function() {

    var engine = require('apex-doc-node');

    // Read in any custom config
    var config = this.data.config;
    if(config) {
      engine.config.addData(config);
    }

    engine.run();

    /*
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if(!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
        if(!grunt.file.isDir(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" is not directory.');
          return false;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
    */
  });

};
