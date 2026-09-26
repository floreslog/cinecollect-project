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
    const btnVisto = event.target.closest('.btn-visto');
    const btnVerDespues = event.target.closest('.btn-ver-despues')

    if (btnVisto !== null) {
        btnVisto.textContent = '¡Visto!';
        btnVisto.classList.add('activo');
        btnVisto.disabled = true;
    }
    else if(btnVerDespues !== null){
        btnVerDespues.textContent = '¡Agregado para después!';
        btnVerDespues.classList.add('activo');
        btnVerDespues.disabled = true;
    }


    // if (element.classList.contains('btn-visto')){
    //     element.textContent = '¡Visto!';
    //     element.classList.add('activo');
    //     element.disabled = true;
    // }
    // else if(element.classList.contains('btn-ver-despues')){
    //     element.textContent = '¡Agregado para despues!';
    //     element.classList.add('activo');
    //     element.disabled = true;
    // }
});
