import { extractArticleId } from "./helper.js";
// import { creatingDetailsPageItems } from "./detailsUtils.js";

const handleToggleDarkMode = () => {
    const modeToggleBtn = document.getElementById('mode-toggle');

    modeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

const handleToggleFavoriteContainer = () => {
    const favoriteToggleBtn = document.getElementById('favorite-toggle');
    const favoritesArticlesContainer = document.getElementsByClassName('favorites-articles-wrapper')[0];

    favoriteToggleBtn.addEventListener('click', () => {
        if (favoritesArticlesContainer.style.display === 'none') {
            favoritesArticlesContainer.style.display = 'flex';
        } else {
            favoritesArticlesContainer.style.display = 'none';
        }
    });
}

const handleArticleClick = () => {
    const articlesContainer = document.getElementsByClassName('articles')[0];

    articlesContainer.addEventListener('click', (event) => {
        const targetArticle = event.target.closest('article');

        if (targetArticle) {
            const articleId = extractArticleId(targetArticle.id);

            window.location.href = `details.html?id=${articleId}`;
        }
    })
}

const handleAddToFavorite = () => {
    const item = document.querySelector('.add-to-favorite-container');

    item.addEventListener('click', () => {
        console.log(item)
    })

}

export { handleToggleDarkMode, handleToggleFavoriteContainer, handleArticleClick, handleAddToFavorite };




