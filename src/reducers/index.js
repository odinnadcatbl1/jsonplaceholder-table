const initialState = [
    {
        posts: [],
        loading: true,
        error: null,
    },
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS_SUCCESS":
            return {
                posts: action.payload,
                loading: false,
                error: null,
            };

        case "FETCH_POSTS_REQUEST":
            return {
                posts: [],
                loading: true,
                error: null,
            };

        case "FETCH_BOOKS_FAILURE":
            return {
                books: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
