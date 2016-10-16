var gulp = require('gulp'),
	nib = require('nib'),
	stylus = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require("gulp-notify"),
	plumber = require('gulp-plumber'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-cssmin');

gulp.task('stylus', function() {
	return gulp.src(['./style/stylus/*.styl'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(stylus({
			use: nib(),
			compress: false,
		}))
		.pipe(autoprefixer({
			browsers: ['last 15 versions'],
		}))
		.pipe(cssmin())
		.pipe(gulp.dest('./style/css'))
		.pipe(notify('Stylus SUCCESS'));
});

gulp.task('js', function() {
	return gulp.src(['./js/src/functions.js', './js/src/app.js'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(concat('app.min.js'))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify({
			// mangle: false,
		}))
		.pipe(gulp.dest('./js'))
		.pipe(notify('JS SUCCESS'));
});

gulp.task('watch', function() {
	gulp.watch(['./style/stylus/*.styl', './style/stylus/inc/*.styl'], ['stylus']);
	gulp.watch(['./js/src/functions.js', './js/src/app.js'], ['js']);
});