const gulp=require('gulp')
const uglify=require('gulp-uglify')
const uglifyes=require('gulp-uglifyes')
const cleancss=require('gulp-clean-css')
const rename=require('gulp-rename')
const babelify=require('babelify')
const browserify=require('browserify')
const glob=require('glob')
const source=require('vinyl-source-stream')
const buffer=require('vinyl-buffer')
const runsequence=require('run-sequence')

//minify js
gulp.task('minifying popup.js',()=>{
	gulp.src(['./src/js/**/*.js'])	
	.pipe(uglifyes({
		warnings:true,
		mangle:false,
		ecma:8
	}))
	.pipe(rename({
		suffix:'.min'
	}))
	.pipe(gulp.dest('./dist/src/js'))
})

//copy example html files
gulp.task('copying example',()=>{
	gulp.src(['./example/**/*.html'])
	.pipe(gulp.dest('./dist/example'))
})

//copy example css files
gulp.task('copying popup.css',()=>{
	gulp.src(['./src/css/**/*.css'])
	.pipe(cleancss())
	.pipe(rename({
		suffix:'.min'
	}))
	.pipe(gulp.dest('./dist/src/css'))
})

//convert example js to es5
gulp.task('compiling example js',()=>{
	glob('./example/**/*.js',function(err,files){
		if(err) done(err)

		var file=files.map((entry)=>{
			return browserify({
				entries:[entry]
			}).transform(babelify.configure({
				"presets":["es2015"],
				"extensions": [null]
			}))
			.bundle()
			.pipe(source(entry))
			.pipe(buffer())
			.pipe(uglify())
			.pipe(gulp.dest('./dist'))
		})

	})
})

gulp.task('default',(cb)=>{
	runsequence(['minifying popup.js','copying popup.css','copying example','compiling example js'])
})