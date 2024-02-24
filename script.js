const modeToggleBtn = document.getElementById('mode-toggle');
const favoriteToggleBtn = document.getElementById('favorite-toggle');
const favoritesArticlesContainer = document.getElementsByClassName('favorites-articles-wrapper')[0];

modeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

favoriteToggleBtn.addEventListener('click', () => {
    console.log("hi");
    if (favoritesArticlesContainer.style.display === 'none') {
        favoritesArticlesContainer.style.display = 'flex';
    } else {
        favoritesArticlesContainer.style.display = 'none';
    }
});
