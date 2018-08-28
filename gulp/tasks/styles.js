var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css') // our initial file, we include return, because gulp.src is an asynchronous function and we want gulp to be aware when this function completes. Don't use semicolons here since we are stringing several methods together
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer])) //we want to pass our file through Post CSS filters, it's expecting an array
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles')); //where we want to create our new file
});