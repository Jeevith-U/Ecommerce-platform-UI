const intitialState = {
    isLoading : false,
    errorMessage : "",
    categoryLoder: false,
    categoryError: null,
} ;

export const errorReducer = (state = intitialState, action) => {

    switch (action.type) {
        case "IS_FETCHING": 
            return {
                 ...state, 
                 isLoading: true,
                 errorMessage: null,
            }

        case "IS_SUCESS":
            return {
                ...state, 
                isLoading: false,
                errorMessage: null,
            }
        case "IS_ERROR":
            return {
                ...state, 
                isLoading: false,
                errorMessage: action.payload,
            }

            case "CATEGORY_SUCESS":
                return {
                    ...state, 
                    categoryLoder: false,
                    categoryError: null,
                }
            case "CATEGORY_LOADER":
                return {
                    ...state, 
                    categoryLoder: true,
                    categoryError: null,
                    errorMessage: null,
                }
        default:
        return state;
    }
};