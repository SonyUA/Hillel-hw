const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const minify = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

const BUILD_FOLDER = "./dist/";
const SRC_FOLDER = {
    js: "./script.js",
    scss: "./style.scss",
};

function copyJS() {
    return gulp.src(SRC_FOLDER.js).pipe(gulp.dest(BUILD_FOLDER));
}

function scssTask() {
    return gulp
        .src(SRC_FOLDER.scss)
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest(BUILD_FOLDER));
}

function jsTask() {
    return gulp.src(SRC_FOLDER.js).pipe(uglify()).pipe(rename("script.min.js")).pipe(gulp.dest(BUILD_FOLDER));
}

function watch() {
    gulp.watch(SRC_FOLDER.js, jsTask);
    gulp.watch(SRC_FOLDER.scss, scssTask);
}

exports.default = gulp.series(copyJS, scssTask, jsTask, watch);
