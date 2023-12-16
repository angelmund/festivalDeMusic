const {src,dest, watch, parallel} = require("gulp");//es el que está en el package,json


//css
const sass =require("gulp-sass") (require("sass"));
const plumber = require('gulp-plumber');

//imágenes 
const webp = require('gulp-webp');

//css
function css(done){

    src('src/scss/**/*.scss') //identificar el archivo de SASS
        .pipe(plumber())
        .pipe(sass())     //Compilar
        .pipe(dest("build/css"));  //Almecenar en el disco duro
   
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

function dev(done){
    watch("src/scss/**/*.scss", css);
    done();
}
exports.css = css;
exports.versionwebp = versionwebp;
exports.dev = parallel( versionwebp, dev);


//npx gulp dev 
//npm run dev