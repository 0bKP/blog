/*
let debounceTimeout;

// Pobierz element wyszukiwania
const searchInput = document.querySelector('#ajax-search-form .search-form');

// Funkcja do ładowania danych AJAX (używana przez wyszukiwanie i paginację)
function loadPosts(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('ajax-results').innerHTML = data;
        });
}

// Obsługa wyszukiwania z debounce
searchInput.addEventListener('input', function(e) {
    clearTimeout(debounceTimeout);
    const search = e.target.value.trim();

    debounceTimeout = setTimeout(() => {
        // Buduj URL z akcją i opcjonalnym wyszukiwaniem
        const url = ajaxsearch.ajaxurl + '?action=search_posts' + (search ? '&search=' + encodeURIComponent(search) : '');
        loadPosts(url);
    }, 300);
});

// Obsługa paginacji AJAX

document.addEventListener('click', function(e) {
    const link = e.target.closest('.pagination-list a');
    if (link) {
        e.preventDefault();
        const url = new URL(link.href);
        const paged = url.searchParams.get('paged') || 1;
        const search = searchInput.value.trim();

        // Buduj AJAX URL uwzględniając paged i wyszukiwanie
        let ajaxUrl = ajaxsearch.ajaxurl + `?action=search_posts&paged=${paged}`;
        if (search) {
            ajaxUrl += `&search=${encodeURIComponent(search)}`;
        }

        loadPosts(ajaxUrl);
    }
});
*/