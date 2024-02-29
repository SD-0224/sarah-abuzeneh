import { loadArticle } from "./loadingArticles.js";

const savingToLocalStorage = (articlesData, storageName) => {
    const isArticlesExist = checkIfStorageExist(storageName);

    if (!isArticlesExist) {
        localStorage.setItem(storageName, JSON.stringify(articlesData));
    }
};

const checkIfStorageExist = (storageName) => {
    return localStorage.getItem(storageName) ? true : false;
}

const getStorageData = (storageName) => {
    return JSON.parse(localStorage.getItem(storageName));
}

export { savingToLocalStorage , checkIfStorageExist, getStorageData};
