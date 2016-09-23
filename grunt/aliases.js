'use strict';

module.exports = function (grunt) {
  var testjobs = ['jscs', 'jshint', 'connect'];
  var positiveTests = [
    'saucelabs-jasmine:succeeds',
  ];
  var negativeTests = [
    'saucelabs-jasmine:fails',
  ];

  if (typeof process.env.SAUCE_ACCESS_KEY !== 'undefined') {
    testjobs = testjobs.concat('saucelabs-custom:tunnel-test', 'sauce_tunnel', positiveTests, negativeTests, 'sauce_tunnel_stop');
  }

  grunt.registerTask('dev', ['connect', 'watch']);
  grunt.registerTask('test', testjobs);
  grunt.registerTask('default', ['test']);
};
