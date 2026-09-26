const btnVisto = document.querySelector('.btn-visto');

btnVisto.addEventListener('click', () => {
    btnVisto.textContent = '¡Visto!';
    btnVisto.classList.add('activo');
    btnVisto.disabled = true;
});