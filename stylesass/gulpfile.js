var gulp = require('gulp');
 gulp.task('hello',function(){ //第一个参数是任务名称，第二个参数是任务功能
 	console.log('hello word');
}) 
gulp.task('images',function(){
	//return gulp.src('images/*.jpg').pipe(gulp.dest('dist/images'))//只拷贝jpg格式图片
	//return gulp.src('images/*.png').pipe(gulp.dest('dist/images'))//只拷贝png格式图片
	//return gulp.src('images/*.{jpg,png}').pipe(gulp.dest('dist/images'))//拷贝jpg和png
	return gulp.src('images/**').pipe(gulp.dest('dist/images'))
})

var sass = require('gulp-sass'); 
gulp.task('sass',function(){
	return gulp.src('sass/mogu.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
 })

gulp.task('dist',function(){
    gulp.watch('sass/mogu.scss',['sass']);// 监听的文件
    gulp.watch('js/banner.js',function(){
            gulp.run('js');
         });
 });

var concat = require('gulp-concat'); 
gulp.task('scripts',function(){ 
	return gulp.src(['javascript/banner.js'])
	.pipe(concat('banner.js'))
	.pipe(gulp.dest('dist/js')); 
})



/*var connect= require('gulp-connect'); 
gulp.task('sever',function(){ 
	connect.server({root:'dist'});
})  

gulp.task('sever',function(){
	 //connect.server(); 
	//sever()方法介绍 
	//配置文档根目录 
	connect.server({ 
		root:‘dist’,
		livereload:true 
	}); 
})
*/

/*gulp.task('watch',function(){ 
	gulp.watch('mogu.scss'); 
})*/
