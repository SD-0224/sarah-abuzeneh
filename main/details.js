import { creatingDetailsPageItems } from "./detailsUtils.js";
import { handleToggleDarkMode, handleToggleFavoriteContainer } from "./uiInteractions.js";

document.addEventListener('DOMContentLoaded', () => {
    handleToggleDarkMode();
    handleToggleFavoriteContainer();
    creatingDetailsPageItems();
});
