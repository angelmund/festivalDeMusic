// Elimina la línea con require, ya que no es necesario en el navegador.

document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

function iniciarApp() {
    navegacionFija();
    crearGaleria();
    scrollNav();
}

function navegacionFija(){
    const barra = document.querySelector('.header');
    const video = document.querySelector('.video');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function(){
        console.log(video.getBoundingClientRect()); //mustra la ubicacion de alguna seccion 
        if(video.getBoundingClientRect().top <0){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }else{
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a')
    
    enlaces.forEach( enlace =>{
        enlace.addEventListener('click', function(e){
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value; //obtiene el id del atributo que se le de click 
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth"});
        });
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        let imagen = document.createElement('picture');
        imagen.innerHTML = `
                <source srcset="build/img/thumb/${i}.avif" type="image/avif">
                <source srcset="build/img/thumb/${i}.webp" type="image/webp">
                <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen vocalista">
        `;

        imagen.onclick = function () {
            mostrarImagen(i);
        };

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
    const modalImagen = document.querySelector('picture');
    modalImagen.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen vocalista">
    `;

    //crea el Overlay con la imagen
    const overlay = document.createElement('div');
    overlay.appendChild(modalImagen.cloneNode(true));
    overlay.classList.add('overlay');

    //Button para cerrar el modal 
    const CerrarModal = document.createElement('P');
    CerrarModal.textContent = 'X';
    CerrarModal.classList.add('btn-cerrar');
    CerrarModal.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(CerrarModal);


    //añade al HTML 
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}
