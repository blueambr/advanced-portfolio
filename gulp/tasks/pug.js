'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src($.config.dev + '/pug/pages/*.pug')
      .pipe($.gp.pug({ pretty: '\t' }))
      .on('error', $.gp.notify.onError(
        function(error) {
          return {
            title: 'Pug',
            message:  error.message
          };
        }
      ))
      .pipe($.gulp.dest($.config.build));
  });
};