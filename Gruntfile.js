module.exports = function(grunt) {

  grunt.initConfig({
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images']
      }
    },
    responsive_images: {
      main: {
        options:{
          engine: 'im',
          sizes: [
            {
              width: 800,
              height: 543,
              suffix: '_large_1x',
              quality: 50
            },
            {
              width: 800,
              height: 543,
              suffix: '_large_2x',
              quality: 70
            },
            {
              width: 640,
              height: 427,
              suffix: '_medium_1x',
              quality: 50
            },
            {
              width: 640,
              height: 427,
              suffix: '_medium_2x',
              quality: 70
            },
            {
              width: 320,
              height: 213,
              suffix: '_small_1x',
              quality: 50
            },
            {
              width: 320,
              height: 213,
              suffix: '_small_2x',
              quality: 70
            }

          ]
        },
        files: [{
          expand: true,
          src: 'main.jpeg',
          cwd: 'images-src/',
          dest: 'images/'
        }]
      },
      features: {
        options: {
          engine: 'im',
          sizes: [
            {
              width: 555,
              height: 800,
              suffix: '_large_1x',
              quality: 50
            },
            {
              width: 555,
              height: 800,
              suffix: '_large_2x',
              quality: 70
            },
            {
              width: 270,
              height: 430,
              suffix: '_medium_1x',
              quality: 70
            },
            {
              width: 290,
              height: 450,
              suffix: '_medium_2x',
              quality: 80
            },
            {
              width: 222,
              height: 320,
              suffix: '_small_1x',
              quality: 50
            },
            {
              width: 222,
              height: 320,
              suffix: '_small_2x',
              quality: 70
            },
            {
              width: 167,
              height: 240,
              suffix: '_xsmall_1x',
              quality: 50
            },
            {
              width: 167,
              height: 240,
              suffix: '_xsmall_2x',
              quality: 70
            }
          ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images-src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['clean', 'responsive_images:main', 'responsive_images:features']);

};
