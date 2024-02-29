import { toggleDarkMode, toggleFavoriteContainer } from "./uiInteractions.js";
import { loadArticle } from "./loadingArticles.js";

document.addEventListener('DOMContentLoaded', () => {
    loadArticle();
});

toggleDarkMode();
toggleFavoriteContainer();