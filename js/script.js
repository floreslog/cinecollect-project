// const botonesVisto = document.querySelectorAll('.btn-visto');

// botonesVisto.forEach(boton => {
//     boton.addEventListener('click', () => {
//         boton.textContent = '¡Visto!';
//         boton.classList.add('activo');
//         boton.disabled = true;
//     });
// });

const seccionListaDePeliculas = document.querySelector('.lista-de-peliculas');

seccionListaDePeliculas.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('btn-visto')){
        element.textContent = '¡Visto!';
        element.classList.add('activo');
        element.disabled = true;
    }
    else if(element.classList.contains('btn-ver-despues')){
        element.textContent = '¡Agregado para despues!';
        element.classList.add('activo');
        element.disabled = true;
    }
});
