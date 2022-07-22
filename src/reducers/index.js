const initialState = [
    {
        posts: [],
        loading: true,
        error: null,
        search: "",
        sort: "id",
        pagination: {
            pages: 0,
            currentPage: 1,
        },
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
                pagination: {
                    pages: action.payload.length,
                    currentPage: 1,
                },
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

        case "SET_PAGES_COUNT":
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    pages: action.payload,
                },
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload,
                },
            };
        default:
            return state;
    }
};

export default reducer;
