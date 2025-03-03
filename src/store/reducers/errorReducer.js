const intitialState = {
    isLoading : false,
    errorMessage : "",
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
        default:
        return state;
    }
};