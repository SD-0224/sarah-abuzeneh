import { handleToggleDarkMode, handleToggleFavoriteContainer, handleArticleClick } from "./uiInteractions.js";
import { loadArticle as loadFavoriteArticle } from "./favouritesContainer.js";
import { loadArticle } from "./loadingArticles.js";

document.addEventListener('DOMContentLoaded', () => {
    loadArticle();
    handleToggleDarkMode();
    handleToggleFavoriteContainer();
    handleArticleClick();
    loadFavoriteArticle();
});
