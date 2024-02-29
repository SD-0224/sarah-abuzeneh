import { creatingAllArticle, settingHeadingTopicCounter } from "./articleUtils.js";
import { fetchTopics } from "./api.js";
import { checkIfStorageExist, getStorageData, savingToLocalStorage } from "./localStorage.js";

const loadArticle = async () => {
    let articlesData;

    if (!checkIfStorageExist('articles')) {
        const api = 'https://tap-web-1.herokuapp.com/topics/list';
        
        articlesData = await fetchTopics(api);

        savingToLocalStorage(articlesData, 'articles');
    } else {
        articlesData = getStorageData('articles');
    }

    creatingAllArticle(articlesData);
    settingHeadingTopicCounter(articlesData.length);

    return;
}

export { loadArticle };