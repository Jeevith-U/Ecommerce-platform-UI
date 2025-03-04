import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../store/action";

const useProductFilter = () => {
    const [searchParam] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams(searchParam);

        const currentPage = searchParam.get("page") ? parseInt(searchParam.get("page")) : 1;
        const sortBy = searchParam.get("sortBy") || "price";
        const sortOrder = searchParam.get("sortOrder") || "asc";
        const category = searchParam.get("category") || "";
        const keyword = searchParam.get("keyword") || "";

        // ✅ Setting parameters in the correct order
        params.set("pageNumber", currentPage - 1);
        params.set("sortBy", sortBy);
        params.set("sortOrder", sortOrder);
        params.set("category", category);
        params.set("keyword", keyword);

        const query = params.toString();
        console.log("Query String:", query);

        dispatch(fetchProducts(query));

    }, [searchParam, dispatch]); // Added dependencies

};

export default useProductFilter;
