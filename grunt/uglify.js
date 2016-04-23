module.exports = function() {

var uglify;

uglify = {
  options: {
    banner: '<%= banner %>',
    codegen: { ascii_only: true },
    report: 'min',
    sourceMap: false,
    preserveComments: false,
    //sourceMapIncludeSources: true,
  },
  main: {
    src: [
      'assets/js/libs/jquery-1.12.3.min.js',
      'assets/js/libs/bootstrap.min.js',
    ],
    dest: 'public/js/main.min.js'
  },
};

return uglify;

};
