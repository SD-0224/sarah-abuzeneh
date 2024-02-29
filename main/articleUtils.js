const settingHeadingTopicCounter = (numberOfArticles) => {
    const headingCounter = document.getElementsByClassName('heading-counter')[0];
    console.log(headingCounter)

    headingCounter.textContent = `"${numberOfArticles}" Web Topics Found`
}

const creatingAllArticle = (articles) => {
    const articlesWrapper = document.getElementsByClassName('articles')[0];
    const fragment = document.createDocumentFragment();

    articles.forEach((articleData) => {
        const newTopic = createArticle(articleData);
        
        fragment.appendChild(newTopic);
    });

    articlesWrapper.appendChild(fragment);
}

const createArticle = (articleData) => {
    const articleContainer = createArticleContainer();
    const topicImage = createTopicImage(articleData.image, articleData.topic);
    const topicContent = createTopicContent(articleData.category, articleData.topic);
    const starsRating = createStarRating();
    const topicAuthor = createTopicAuthor(articleData.name);

    articleContainer.appendChild(topicImage);
    articleContainer.appendChild(topicContent);
    articleContainer.appendChild(starsRating);
    articleContainer.appendChild(topicAuthor);

    articleContainer.id = `article-${articleData.id}`;

    return articleContainer;
};

const createArticleContainer = () => {
    const articleContainer = document.createElement('article');

    articleContainer.classList.add('topic-article');

    return articleContainer;
};

const createTopicImage = (imageSrc, altText) => {
    const topicImageDiv = document.createElement('div');
    const topicImage = document.createElement('img');

    topicImageDiv.classList.add('topic-image');

    topicImage.src = `../Logos/${imageSrc}`;
    topicImage.alt = altText;
    topicImage.loading = 'lazy';
    topicImage.title = 'image';

    topicImageDiv.appendChild(topicImage);

    return topicImageDiv;
};

const createTopicContent = (category, title) => {
    const topicContentDiv = document.createElement('div');
    const topicCategory = document.createElement('h3');
    const topicTitle = document.createElement('h2');

    topicContentDiv.classList.add('topic-content');
    topicCategory.classList.add('topic-subtitle', 'hidden-overflow');
    topicCategory.textContent = category;

    topicTitle.classList.add('topic-title', 'line-clamp');
    topicTitle.textContent = title;

    topicContentDiv.appendChild(topicCategory);
    topicContentDiv.appendChild(topicTitle);

    return topicContentDiv;
};

const createTopicAuthor = (authorName) => {
    const topicAuthor = document.createElement('p');

    topicAuthor.classList.add('hidden-overflow');
    topicAuthor.textContent = `Author: ${authorName}`;

    return topicAuthor;
};

const createStarRating = () => {
    const starsRatingDiv = document.createElement('div');
    starsRatingDiv.classList.add('stars-rating');
    starsRatingDiv.title = 'rating';

    for (let i = 0; i < 5; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('fa-regular', 'fa-star');
        starsRatingDiv.appendChild(starIcon);
    }

    return starsRatingDiv;
};

export { creatingAllArticle, settingHeadingTopicCounter }