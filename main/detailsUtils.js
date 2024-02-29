import { fetchCertainTopic } from "./api.js";
import { createStarRating } from "./articleUtils.js";

const creatingDetailsPageItems = async () => {
    const topicId = new URLSearchParams(window.location.search).get("id");
    const api = 'https://tap-web-1.herokuapp.com/topics';
    const topicData = await fetchCertainTopic(api, topicId);

    createTopicCard(topicData);
    createListHTMLStructure(topicData.subtopics, topicData.topic);
}

const createHeadingContent = (category, topic) => {
    const headingContentDiv = document.createElement('div');
    const headingCategory = document.createElement('h3');
    const headingTitle = document.createElement('h2');

    headingContentDiv.classList.add('heading-content');
    headingCategory.classList.add('hidden-overflow');

    headingCategory.textContent = category;
    headingTitle.textContent = topic;

    headingContentDiv.appendChild(headingCategory);
    headingContentDiv.appendChild(headingTitle);

    return headingContentDiv;
};

const createParagraph = (description) => {
    const paragraph = document.createElement('p');

    paragraph.classList.add('line-clamp');
    paragraph.textContent = description;

    return paragraph;
};

const createContentWrapper = (topicData) => {
    const contentWrapperDiv = document.createElement('div');
    const headingContent = createHeadingContent(topicData.category, topicData.topic);
    const starsRating = createStarRating();
    const paragraph = createParagraph(topicData.description);

    contentWrapperDiv.classList.add('content-wrapper', 'style');

    contentWrapperDiv.appendChild(headingContent);
    contentWrapperDiv.appendChild(starsRating);
    contentWrapperDiv.appendChild(paragraph);

    return contentWrapperDiv;
};


const createTopicImage = (imagePath, topic) => {
    const topicImageDiv = document.createElement('div');
    const topicImage = document.createElement('img');

    topicImageDiv.classList.add('topic-image');

    topicImage.src = `./Logos/${imagePath}`;
    topicImage.alt = topic;

    topicImageDiv.appendChild(topicImage);

    return topicImageDiv;
};

const createTopicInfo = (topicData) => {
    const topicInfoDiv = document.createElement('div');
    const topicInfoParagraph = createTopicInfoParagraph(topicData.topic, topicData.name);
    const addToFavoriteContainerDiv = createAddToFavoriteContainer();

    topicInfoDiv.classList.add('topic-info');

    topicInfoDiv.appendChild(topicInfoParagraph);
    topicInfoDiv.appendChild(addToFavoriteContainerDiv);

    return topicInfoDiv;
};

const createTopicInfoParagraph = (topic, name) => {
    const topicInfoParagraph = document.createElement('p');
    const topicInfoSpan = document.createElement('span');
    const topicInfoBy = document.createTextNode(' By ');
    const topicInfoAuthor = document.createElement('a');

    topicInfoSpan.textContent = topic;
    topicInfoAuthor.textContent = name;

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

const createTopicCard = (topicData) => {
    const articleDetailsSection = document.getElementsByClassName('article-details')[0];
    const containerDiv = document.createElement('div');
    const contentWrapper = createContentWrapper(topicData);
    const topicCardDiv = createTopicCardInnerDiv(topicData);

    containerDiv.appendChild(contentWrapper);
    containerDiv.appendChild(topicCardDiv);
    articleDetailsSection.appendChild(containerDiv);

    return articleDetailsSection;
};

const createTopicCardInnerDiv = (topicData) => {
    const topicCardInnerDiv = document.createElement('div');
    const innerWrapperDiv = document.createElement('div');
    const topicImageDiv = createTopicImage(topicData.image, topicData.topic);
    const topicInfoDiv = createTopicInfo(topicData);

    topicCardInnerDiv.classList.add('topic-card');

    topicCardInnerDiv.appendChild(innerWrapperDiv);
    innerWrapperDiv.appendChild(topicImageDiv);
    innerWrapperDiv.appendChild(topicInfoDiv);

    return topicCardInnerDiv;
};


const createContainer = () => {
    const containerDiv = document.createElement('div');

    containerDiv.classList.add('container');

    return containerDiv;
};

const createSubjectHeading = (subjectTopic) => {
    const heading = document.createElement('h2');

    heading.textContent = subjectTopic;

    return heading;
};

const createTopicListItem = (content) => {
    const listItem = document.createElement('li');
    const icon = document.createElement('ion-icon');
    const topicTitle = document.createElement('h2');

    listItem.classList.add('topic', 'border-bottom');

    icon.setAttribute('name', 'checkmark-circle-outline');

    topicTitle.textContent = content;

    listItem.appendChild(icon);
    listItem.appendChild(topicTitle);

    return listItem;
};

const createTopicsList = (subTopics) => {
    const topicsList = document.createElement('ul');

    topicsList.classList.add('topics-wrapper');

    subTopics.forEach(topic => {
        const listItem = createTopicListItem(topic);

        topicsList.appendChild(listItem);
    });

    return topicsList;
};

const createSubjectTopicsSection = (subTopics, topic) => {
    const subjectTopicsDiv = document.createElement('div');
    const heading = createSubjectHeading(topic);
    const topicsList = createTopicsList(subTopics);

    subjectTopicsDiv.classList.add('subject-topics', 'style');

    subjectTopicsDiv.appendChild(heading);
    subjectTopicsDiv.appendChild(topicsList);

    return subjectTopicsDiv;
};

const createEmptyTopicCard = () => {
    const topicCardDiv = document.createElement('div');

    topicCardDiv.classList.add('topic-card');

    return topicCardDiv;
};

const createListHTMLStructure = (subTopics, topic) => {
    const topicsContainer = document.getElementsByClassName('topics-container')[0];
    const container = createContainer();
    const subjectTopicsSection = createSubjectTopicsSection(subTopics, topic);
    const emptyTopicCard = createEmptyTopicCard();

    container.appendChild(subjectTopicsSection);
    container.appendChild(emptyTopicCard);

    topicsContainer.appendChild(container);

    return;
};

export { creatingDetailsPageItems }