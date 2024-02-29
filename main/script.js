import { handleToggleDarkMode, handleToggleFavoriteContainer, handleArticleClick } from "./uiInteractions.js";
import { loadArticle } from "./loadingArticles.js";

document.addEventListener('DOMContentLoaded', () => {
    loadArticle();
    handleToggleDarkMode();
    handleToggleFavoriteContainer();
    handleArticleClick();
});
