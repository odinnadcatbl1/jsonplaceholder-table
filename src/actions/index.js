const postsLoaded = (posts) => {
    return {
        type: "FETCH_POSTS_SUCCESS",
        payload: posts,
    };
};

const postsRequested = () => {
    return {
        type: "FETCH_POSTS_REQUEST",
    };
};

const postsError = (error) => {
    return {
        type: "FETCH_POSTS_FAILURE",
        payload: error,
    };
};
