document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const form = document.getElementById('ajax-search-form');
    const text = document.querySelector('.articles-text');
    const searchInput = form.querySelector('input');  // Załóżmy, że formularz zawiera pole input

    // Kliknięcie w lupkę
    searchIcon.addEventListener('click', function (event) {
        searchIcon.classList.add('hidden');
        form.classList.add('show');
        text.classList.add('hidden');
        searchInput.focus();  // Ustawienie fokusu na pole input
        event.stopPropagation();
    });

    // Kliknięcie poza formularzem
    document.addEventListener('click', function (event) {
        if (!form.contains(event.target)) {
            form.classList.remove('show');
            searchIcon.classList.remove('hidden');
            text.classList.remove('hidden');
        }
    });

    // Zatrzymaj propagację kliknięcia wewnątrz formularza
    form.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});