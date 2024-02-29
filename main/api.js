const fetchTopics = async (api) => {

    return fetch(api).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong. Web topics failed to load.');
        }
    }).catch(error => {
        throw error;
    });
};


export { fetchTopics }