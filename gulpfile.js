const fs = require('fs');
const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');

const SRC_PATH = './img';
const DEST_PATH = './output';

gulp.task('default', () => {
    const spriteData = gulp.src(`${SRC_PATH}/*.png`).pipe(spritesmith({
        imgName: new Date() * 1 + '.png',
        cssName: new Date() * 1 + '.css',
        algorithm: 'left-right',
        algorithmOpts: {sort: false}
    }));
    return spriteData.pipe(gulp.dest(DEST_PATH));
});
