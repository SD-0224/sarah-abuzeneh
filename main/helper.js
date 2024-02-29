const extractArticleId = (articleId) => {
    const idParts = articleId.split('-');
    const articleNumber = idParts[1];

    return articleNumber;
}

export { extractArticleId }