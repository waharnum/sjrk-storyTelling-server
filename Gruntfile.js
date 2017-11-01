// Declare dependencies
/* global module */

"use strict";

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        // Project package file destination.
        pkg: grunt.file.readJSON("package.json"),
        eslint: {
            all: ["src/**/*.js", "tests/**/*.js", "demos/**/*.js", "examples/**/*.js", "*.js"]
        },
        jsonlint: {
            all: ["package.json", ".jshintrc", "src/**/*.json", "tests/**/*.json", "demos/**/*.json", "!node_modules", "!src/lib/**", "!tests/lib/**"]
        },
        sjrk_couch_config: {
            files: ["./src/js/dbSetup.js"]
        }
    });

    // Load the plugin(s):
    grunt.loadNpmTasks("fluid-grunt-eslint");
    grunt.loadNpmTasks("grunt-jsonlint");
    grunt.loadNpmTasks("grunt-sjrk-couch-config");

    // Custom tasks:
    grunt.registerTask("default", ["lint"]);
    grunt.registerTask("lint", "Apply eslint and jsonlint", ["eslint", "jsonlint"]);
    grunt.registerTask("setup-db", "Ensure CouchDB database exists and loads in required documents", ["sjrk_couch_config"]);
};
