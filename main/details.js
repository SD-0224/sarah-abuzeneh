import { creatingDetailsPageItems } from "./detailsUtils.js";
import { loadArticle } from "./favouritesContainer.js";
import { loadFavoriteArticles } from "./loadFavoriteArticles.js";
import { handleToggleDarkMode, handleToggleFavoriteContainer } from "./uiInteractions.js";

document.addEventListener('DOMContentLoaded', () => {
    handleToggleDarkMode();
    handleToggleFavoriteContainer();
    creatingDetailsPageItems();
    loadFavoriteArticles();
    loadArticle();
});
