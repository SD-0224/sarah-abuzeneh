import { createStarRating } from "./articleUtils.js";
import { getStorageData } from "./localStorage.js";

const loadArticle = () => {
    const favoriteTopics = getStorageData('favoriteArticles');
    const favoriteTopicsContainer = document.getElementsByClassName('favorites-articles-wrapper')[0];

    favoriteTopicsContainer.appendChild(createTopicArticles(favoriteTopics));
}

const createTopicImage = (imageSrc, topic) => {
    const topicImage = document.createElement('div');
    const img = document.createElement('img');

    topicImage.classList.add('topic-image');

    img.src = `../Logos/${imageSrc}`;
    img.alt = topic;
    img.loading = 'lazy';
    img.title = 'image';

    topicImage.appendChild(img);

    return topicImage;
};

const createTopicTitle = (title) => {
    const topicTitle = document.createElement('h2');

    topicTitle.classList.add('topic-title', 'line-clamp');

    topicTitle.textContent = title;

    return topicTitle;
};

const createTopicArticleElement = (article) => {
    const topicArticle = document.createElement('article');
    const topicImage = createTopicImage(article.image, article.topic);
    const topicTitle = createTopicTitle(article.topic);
    const starsRating = createStarRating(article.rating);

    topicArticle.classList.add('topic-article');

    topicArticle.appendChild(topicImage);
    topicArticle.appendChild(topicTitle);
    topicArticle.appendChild(starsRating);

    return topicArticle;
};

const createArticleWrapper = (topicArticle) => {
    const articleWrapper = document.createElement('div');
    
    articleWrapper.classList.add('article');
    articleWrapper.appendChild(topicArticle);

    return articleWrapper;
};


const createTopicArticles = (articles) => {
    const articlesContainer = document.createElement('div');

    articles.forEach(article => {
        const topicArticle = createTopicArticleElement(article);
        const articleWrapper = createArticleWrapper(topicArticle);
        articlesContainer.appendChild(articleWrapper);
    });

    return articlesContainer;
};

export { loadArticle }