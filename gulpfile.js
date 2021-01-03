var gulp = require("gulp");
var sass = require("gulp-sass");
var connect = require("gulp-connect");

gulp.task("html", function () {
  return gulp
    .src(["src/html/index.html"])
    .pipe(gulp.dest("./build/"))
    .pipe(connect.reload());
});

gulp.task("sass", function () {
  return gulp
    .src(["src/scss/**/**.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./build/css/"))
    .pipe(connect.reload());
});

gulp.task("js", function () {
  return gulp
    .src(["src/js/*.js"])
    .pipe(gulp.dest("build/js/"))
    .pipe(connect.reload());
});

gulp.task("connect", function () {
  connect.server({
    root: "build",
    livereload: true,
  });
});

gulp.task("watch", function () {
  gulp.watch("src/html/**/**.html", gulp.parallel("html"));
  gulp.watch("src/scss/**/**.scss", gulp.parallel("sass"));
  gulp.watch("src/js/**/**.js", gulp.parallel("js"));
});

gulp.task("build", gulp.series("html", "sass", "js"));

gulp.task("default", gulp.series("build", gulp.parallel("watch", "connect")));
