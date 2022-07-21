const initialState = [
    {
        posts: [],
        loading: true,
        error: null,
        search: "",
        sort: "id",
    },
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS_SUCCESS":
            return {
                ...state,
                posts: action.payload,
                loading: false,
                search: "",
            };

        case "FETCH_POSTS_REQUEST":
            return {
                ...state,
                posts: [],
            };

        case "FETCH_POSTS_FAILURE":
            return {
                ...state,
                posts: [],
                loading: false,
                error: action.payload,
            };

        case "SEARCH_POST":
            return {
                ...state,
                search: action.payload,
            };
        case "SORT_POST":
            return {
                ...state,
                sort: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
