# grunt-apex-doc

> A grunt wrapper for the node.js implementation of Apex Doc.

Please see the [apex-doc-node](https://github.com/dsharrison/apex-doc-node) README for details on configuration options.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-apex-doc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-apex-doc');
```

## The "apex_doc" task

### Overview
In your project's Gruntfile, add a section named `apex_doc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  apex_doc: {
    config: {
      // Specify config options here to override the config.json file from
      // apex-doc-node
    }
  },
});
```

### Config


## Contributing
Contributions will be welcome once this projects gets off the ground a bit more.

## Release History
_(Nothing yet)_
