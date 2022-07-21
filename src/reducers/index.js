const initialState = [
    {
        posts: [],
        loading: true,
        error: null,
        search: "",
    },
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS_SUCCESS":
            return {
                posts: action.payload,
                loading: false,
                error: null,
                search: "",
            };

        case "FETCH_POSTS_REQUEST":
            return {
                posts: [],
                loading: true,
                error: null,
                search: "",
            };

        case "FETCH_POSTS_FAILURE":
            return {
                books: [],
                loading: false,
                error: action.payload,
                search: "",
            };

        case "SEARCH_POST":
            return {
                ...state,
                search: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
