const initialState = {
    products: null,
    categories: null,
    pagination: {}, // ✅ Corrected state name
    isLoading: false,
    errorMessage: "",
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, isLoading: true, errorMessage: "" };

        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                pagination: { // ✅ Store pagination details correctly
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalElements: action.totalElements,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage,
                },
            };

        case 'FETCH_CATEGORIES':
            return {
                ...state,
                categories: action.payload,
            };

        case 'FETCH_ERROR':
            return { ...state, isLoading: false, errorMessage: action.payload };

        default:
            return state;
    }
};
