const { imagenes } = require("../../gulpfile");
// imagen.index = i;

document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i=1; i<=12; i++) {
        let imagen = document.createElement('picture');
        //inserta las imagenes en el html
        imagen.innerHTML = `
                <source srcset="build/img/thumb/${i}.avif" type="imagen/avif">
                <source srcset="build/img/thumb/${i}.webp" type="imagen/webp">
                <img loading="lazy" with="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen vocalista">
        `;

        // imagen.index = i;
        
        imagen.onclick = function() {
            mostrarImagen(i);
        }
 

        galeria.appendChild(imagen);

    }
}

function mostrarImgen(i) {
    const modalImagen = document.querySelector("picture");
    //abre modal de imagen
    modalImagen.innerHTML = `
    <source srcset="build/img/grande/${i}.avif" type="imagen/avif">
    <source srcset="build/img/grande/${i}.webp" type="imagen/webp">
    <img loading="lazy" with="200" height="300" src="build/img/grande/${i}.jpg" alt="Imagen vocalista">
    `;

    const overlay = document.createElement('DIV')
    overlay.appendChild(modalImagen);
    overlay.classList.add('overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay)
}