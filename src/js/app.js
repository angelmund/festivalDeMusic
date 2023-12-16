const { imagenes } = require("../../gulpfile");

document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        let imagen = document.createElement('picture');
        //inserta las imagenes en el html
        imagen.innerHTML = `
                <source srcset="build/img/thumb/${i}.avif" type="imagen/avif">
                <source srcset="build/img/thumb/${i}.webp" type="imagen/webp">
                <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen vocalista">
        `;

        imagen.onclick = function () {
            mostrarImgen(i);
        }

        galeria.appendChild(imagen);

    }
}

function mostrarImgen(id) {
    const modalImagen = document.querySelector("picture");
    //abre modal de imagen
    modalImagen.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="imagen/avif">
    <source srcset="build/img/grande/${id}.webp" type="imagen/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen vocalista">
    `;

    const overlay = document.createElement('DIV')
    overlay.appendChild(modalImagen);
    overlay.classList.add('overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay)
}