import gulp from 'gulp';

export default function watchTask(config) {
    gulp.task('watch', () => {
        gulp.watch(`${config.src.index}/**/*.html`, ['html']);
        gulp.watch(`${config.src.index}/**/*.jsx`, ['webpack']);
        gulp.watch(`${config.src.index}/**/*.js`, ['webpack']);
        gulp.watch(`${config.src.styles}/**/*.scss`, ['styles']);
    });
}
