import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts } from '../store/action';
import Filter from './Filter';
import useProductFilter from './useProductFilter';
import Loader from './Loader';
import Paginations from './Paginations';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1; // Get page from URL

    useProductFilter(); // ✅ Custom hook for product filtering

    // Pull values from Redux state
    const { products, isLoading, errorMessage, categories, pagination } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // ✅ Fetch products whenever the page changes
    useEffect(() => {
        dispatch(fetchProducts(currentPage)); // Pass page number from URL
    }, [dispatch, currentPage]);

    return (
        <div className='lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto'>
            <Filter categories={categories || []} />

            {isLoading ? (
                <Loader text={"Loading Products..."} />
            ) : errorMessage ? (
                <div className='flex justify-center items-center h-[200px]'>
                    <FaExclamationTriangle className='text-slate-700 text-3xl mr-2' />
                    <span className='text-slate-800 text-lg font-medium'>{errorMessage}</span>
                </div>
            ) : (
                <div className='min-h-[700px]'>
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6 bg">
                        {products && products.map((item, i) => <ProductCard key={i} {...item} />)}
                    </div>

                    <div className='flex justify-center items-center pt-10'>
                        <Paginations
                            numberOfPages={pagination?.totalPages} // ✅ Ensure correct state variable
                            totalProducts={pagination?.totalElements}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
