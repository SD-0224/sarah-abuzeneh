const modeToggleBtn = document.getElementById('mode-toggle');
const favoriteToggleBtn = document.getElementById('favorite-toggle');
const favoritesArticlesContainer = document.getElementsByClassName('favorites-articles-wrapper')[0];

const toggleDarkMode = () => {
    modeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

const toggleFavoriteContainer = () => {
    favoriteToggleBtn.addEventListener('click', () => {
        if (favoritesArticlesContainer.style.display === 'none') {
            favoritesArticlesContainer.style.display = 'flex';
        } else {
            favoritesArticlesContainer.style.display = 'none';
        }
    });
}


export { toggleDarkMode, toggleFavoriteContainer };

