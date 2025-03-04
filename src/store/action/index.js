import api from "../../api/api";
// import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "../constants/types";
// import { fetchProducts } from '../store/action/index';

export const fetchProducts = (queryString) => async (dispatch) => {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });  // Start loading
    try {
        dispatch({ type: "IS_FETCHING" }) ; // THIS IS SET FOR LODING
        const { data } = await api.get(`/public/products?${queryString}`);
        dispatch({
            type: "FETCH_SUCCESS",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });
        dispatch({ type: "IS_SUCESS" }) ; // THIS IS SET FOR LODING
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: "FETCH_PRODUCTS_FAILURE",
            payload: error?.response?.data?.message || "Failed to fetch products",
        });
    }
};
