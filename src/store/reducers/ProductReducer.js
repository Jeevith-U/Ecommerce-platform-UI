const initialState = {
    products : null ,
    categories : null, 
    pagination : {},
    isLoading: false, 
    errorMessage: "", 
} ;

export const productReducer  = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                products : action.payload,
                pagination : {
                    ...state.pagination,
                    pageNumber : action.pageNumber,
                    pageSize : action.pageSize,
                    totalElements : action.totalElements,
                    totalPages : action.totalPages,
                    lastPage : action.lastPage,
                }
            } ;
        default:
            return state;
    }
};