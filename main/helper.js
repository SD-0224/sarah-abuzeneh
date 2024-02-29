const extractArticleNumber = (articleId) => {
    const idParts = articleId.split('-');
    const articleNumber = idParts[1];

    return articleNumber;
}

export { extractArticleNumber }