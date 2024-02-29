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

const addToStorage = (storageName, element) => {

    if (element) {
        const items = getStorageData(storageName) || [];
        const index = items.findIndex(item => item.id === element.id);

        if (index === -1) {
            items.push(element);
        } else {
            items.splice(index, 1);
        }

        localStorage.setItem(storageName, JSON.stringify(items));
    }
};


export { savingToLocalStorage, checkIfStorageExist, getStorageData, addToStorage };
