var gulp = require("gulp"),
  watch = require("gulp-watch"),
  // postcss = require("gulp-postcss"),
  // autoprefixer = require("autoprefixer"),
  // cssvars = require("postcss-simple-vars"),
  // nested = require("postcss-nested"),
  // cssImport = require("postcss-import"),
  // Import scss
  prefix = require("gulp-autoprefixer"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  cssmin = require("gulp-cssnano"),
  rename = require("gulp-rename");

var prefixerOptions = {
  browsers: ["last 2 versions"]
};

gulp.task("style", function() {
  return gulp
    .src("./app/assets/style/styles.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({ includePaths: require("node-normalize-scss").includePaths }).on(
        "error",
        sass.logError
      )
    )
    .pipe(prefix(prefixerOptions))
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("./app/temp/"))
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./app/temp/"));
});

gulp.task("watch", function() {
  gulp.watch("./app/assets/**/*.scss", ["style"]);
});
