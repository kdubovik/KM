'use strict';

var gulp = require('gulp'), // Подключаем Gulp
sass = require('gulp-sass'); //Подключаем Sass пакет
watch = require('gulp-watch');

gulp.task('sass', function(){ // Создаем таск "sass"
return gulp.src('src/sass/*.sass') // Берем источник
  .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
  .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
});

gulp.task('watch', function(){
  gulp.watch('src/sass/*.sass', ['sass']);
  // Other watchers
})
