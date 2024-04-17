module.exports = function (grunt) {

grunt.initConfig({
  critical: {
    dist: {
      options: {
        base: './'
          },
        dimensions: [{
          width: 1440,
          height: 1000,
        },
        {
          width: 768,
          height: 900,
        },
        {
          width: 375,
          height: 900,
        }],
      // The source file
      src: 'src/index.html',
      // The destination file
      dest: 'src/result.html'
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');

  // Default tasks.
  grunt.registerTask('default', ['critical']);
};