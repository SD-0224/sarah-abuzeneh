import { fetchTopics } from "./api.js";
import { checkIfStorageExist, getStorageData, savingToLocalStorage } from "./localStorage.js";

const loadFavoriteArticles = async () => {
    let mergedData;
    const api = 'https://tap-web-1.herokuapp.com/topics/list?phrase=CSS';
    const apiData = await fetchTopics(api);

    if (!checkIfStorageExist('favoriteArticles')) {
        savingToLocalStorage(apiData, 'favoriteArticles');
    } else {
        const localStorageData = getStorageData('favoriteArticles');
        const filteredApiData = apiData.filter(apiItem => {
            return !localStorageData.some(localItem => localItem.id === apiItem.id);
        });

        mergedData = [...localStorageData, ...filteredApiData];
        savingToLocalStorage(apiData, 'favoriteArticles');
    }
};

export { loadFavoriteArticles };