import axios from "axios";

export const searchPosts = (search) => {
    return {
        type: "SEARCH_POST",
        payload: search,
    };
};

export const sortPosts = (sort) => {
    return {
        type: "SORT_POST",
        payload: sort,
    };
};

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_POSTS_REQUEST" });
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );

            await dispatch({
                type: "FETCH_POSTS_SUCCESS",
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: "FETCH_POSTS_FAILURE",
                payload: e,
            });
        }
    };
};
