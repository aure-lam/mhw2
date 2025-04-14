document.addEventListener('DOMContentLoaded', function () {
    // Bottone "Leggi di più"
    const buttons = document.querySelectorAll('.read-more');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const parent = button.parentElement;
            const extraText = document.createElement('p');
            extraText.textContent = parent.dataset.extra;
            extraText.classList.add('extra-text');
            button.remove();
            parent.appendChild(extraText);
        });
    });

    // Cambio immagine aroma
    const thumbs = document.querySelectorAll('.aroma-thumb');
    const mainImage = document.getElementById('main-aroma');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function () {
            const newSrc = thumb.dataset.src;
            mainImage.src = newSrc;
        });
    });
});
