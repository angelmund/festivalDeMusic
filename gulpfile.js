const {src,dest, watch} = require("gulp");//es el que está en el package,json
const sass =require("gulp-sass") (require("sass"));
const plumber = require('gulp-plumber');

function css(done){

    src('src/scss/**/*.scss') //identificar el archivo de SASS
        .pipe(plumber())
        .pipe(sass())     //Compilar
        .pipe(dest("build/css"));  //Almecenar en el disco duro
   
    done();
}

function dev(done){
    watch("src/scss/**/*.scss", css);
    done();
}
exports.css = css;
exports.dev = dev;


//npx gulp dev 
//npm run dev