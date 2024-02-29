const fetchData = async (url) => {
    try {
        const response = await fetch(url);

        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong. Web topics failed to load.');
        }
    } catch (error) {
        throw error;
    }
};

const fetchTopics = async (api) => {
    return fetchData(api);
};

const fetchCertainTopic = async (api, id) => {
    const url = `${api}/details/${id}`;
    
    return fetchData(url);
};

export { fetchTopics, fetchCertainTopic }