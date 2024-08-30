const {src,dest, watch, parallel} = require("gulp");//es el que está en el package,json


//css
const sass =require("gulp-sass") (require("sass"));
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('cssnano');
const psotcss = require('gulp-postcss');

//imágenes 
const cache = require('gulp-cache');
const imagemin= require ('gulp-imagemin') ;  //comprime las imagenes
const webp = require('gulp-webp');
const avif = require('gulp-avif');

//css
function css(done){

    src('src/scss/**/*.scss') //identificar el archivo de SASS
        .pipe(plumber())
        .pipe(sass())     //Compilar
        .pipe(psotcss([autoprefixer(), cssnano()]))
        .pipe(dest("build/css"));  //Almecenar en el disco duro
   
    done();
}

function imagenes(done){
    const opciones = {
        optimationLevel: 3
    };
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones) ))
        .pipe(dest('build/img'))
    done();
}

function versionwebp(done){

    const opciones = {
        quality: 50
    };    
    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function versionavif(done){

    const opciones = {
        quality: 50
    };    
    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'))
    done();
}

function javascript(done){
    src('src/js/**/*.js')
        .pipe(dest('build/js'))
    done();
}

function dev(done){
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);
    done();
}
exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionwebp = versionwebp;
exports.versionavif = versionavif;
exports.dev = parallel( imagenes,versionwebp,versionavif,javascript,dev);


//npx gulp dev 
//npm run dev