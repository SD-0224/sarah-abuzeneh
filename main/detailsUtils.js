import { fetchCertainTopic } from "./api.js";
import { createStarRating } from "./articleUtils.js";

const creatingDetailsPageItems = async () => {
    const topicId = new URLSearchParams(window.location.search).get("id");
    const api = 'https://tap-web-1.herokuapp.com/topics';
    const topicData = await fetchCertainTopic(api, topicId);

    createTopicCard();

    console.log(topicData)

}

const createHeadingContent = () => {
    const headingContentDiv = document.createElement('div');
    headingContentDiv.classList.add('heading-content');

    const headingCategory = document.createElement('h3');
    headingCategory.classList.add('hidden-overflow');
    headingCategory.textContent = 'Web Development Language';

    const headingTitle = document.createElement('h2');
    headingTitle.textContent = 'HTML';

    headingContentDiv.appendChild(headingCategory);
    headingContentDiv.appendChild(headingTitle);

    return headingContentDiv;
};

const createParagraph = () => {
    const paragraph = document.createElement('p');

    paragraph.classList.add('line-clamp');
    paragraph.textContent = `The HyperText Markup Language or HTML is the standard markup language for documents designed to
                        be
                        displayed
                        in a web browser. It defines the content and structure of web content. It is often assisted by
                        technologies
                        such as Cascading Style Sheets and scripting languages such as JavaScript.`;

    return paragraph;
};

const createContentWrapper = () => {
    const contentWrapperDiv = document.createElement('div');
    contentWrapperDiv.classList.add('content-wrapper', 'style');

    const headingContent = createHeadingContent();
    const starsRating = createStarRating();
    const paragraph = createParagraph();

    contentWrapperDiv.appendChild(headingContent);
    contentWrapperDiv.appendChild(starsRating);
    contentWrapperDiv.appendChild(paragraph);

    return contentWrapperDiv;
};


const createTopicImage = () => {
    const topicImageDiv = document.createElement('div');
    const topicImage = document.createElement('img');

    topicImageDiv.classList.add('topic-image');

    topicImage.src = './assets/websockets.png';
    topicImage.alt = 'websockets';
    topicImage.srcset = './assets/websockets.png';

    topicImageDiv.appendChild(topicImage);

    return topicImageDiv;
};

const createTopicInfo = () => {
    const topicInfoDiv = document.createElement('div');
    const topicInfoParagraph = createTopicInfoParagraph();
    const addToFavoriteContainerDiv = createAddToFavoriteContainer();

    topicInfoDiv.classList.add('topic-info');

    topicInfoDiv.appendChild(topicInfoParagraph);
    topicInfoDiv.appendChild(addToFavoriteContainerDiv);

    return topicInfoDiv;
};

const createTopicInfoParagraph = () => {
    const topicInfoParagraph = document.createElement('p');
    const topicInfoSpan = document.createElement('span');
    const topicInfoBy = document.createTextNode(' By ');
    const topicInfoAuthor = document.createElement('a');

    topicInfoSpan.textContent = 'HTML';
    topicInfoAuthor.textContent = 'Sarah Smith';

    topicInfoParagraph.appendChild(topicInfoSpan);
    topicInfoParagraph.appendChild(topicInfoBy);
    topicInfoParagraph.appendChild(topicInfoAuthor);

    return topicInfoParagraph;
};

const createAddToFavoriteContainer = () => {
    const addToFavoriteContainerDiv = document.createElement('div');
    const addToFavoriteHeading = document.createElement('h4');
    const addToFavoriteButton = document.createElement('button');
    const icon = document.createElement('ion-icon');
    const unlimitedCredits = document.createElement('h5');

    addToFavoriteContainerDiv.classList.add('add-to-favorite-container');

    addToFavoriteHeading.textContent = 'Interested about this topic?';
    addToFavoriteButton.textContent = 'Add to Favorite ';
    unlimitedCredits.textContent = 'Unlimited Credits';
    icon.setAttribute('name', 'heart-outline');

    addToFavoriteButton.appendChild(icon);
    addToFavoriteContainerDiv.appendChild(addToFavoriteHeading);
    addToFavoriteContainerDiv.appendChild(addToFavoriteButton);
    addToFavoriteContainerDiv.appendChild(unlimitedCredits);

    return addToFavoriteContainerDiv;
};

const createTopicCard = () => {
    const articleDetailsSection = document.getElementsByClassName('article-details')[0];
    const containerDiv = document.createElement('div');
    const contentWrapper = createContentWrapper();
    const topicCardDiv = createTopicCardInnerDiv();

    containerDiv.appendChild(contentWrapper);
    containerDiv.appendChild(topicCardDiv);
    articleDetailsSection.appendChild(containerDiv);

    return articleDetailsSection;
};

const createTopicCardInnerDiv = () => {
    const topicCardInnerDiv = document.createElement('div');
    topicCardInnerDiv.classList.add('topic-card');

    const innerWrapperDiv = document.createElement('div'); 
    topicCardInnerDiv.appendChild(innerWrapperDiv); 

    const topicImageDiv = createTopicImage();
    const topicInfoDiv = createTopicInfo();

    innerWrapperDiv.appendChild(topicImageDiv); 
    innerWrapperDiv.appendChild(topicInfoDiv); 

    return topicCardInnerDiv;
};


export { creatingDetailsPageItems }