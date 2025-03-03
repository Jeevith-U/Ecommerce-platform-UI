import { Button, FormControl, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FiArrowDown, FiArrowUp, FiRefreshCw, FiSearch } from 'react-icons/fi';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const Filter = () => {
    const categories = [
        { categoryId: 1, categoryName: "Electronics" },
        { categoryId: 2, categoryName: "Clothes" },
        { categoryId: 3, categoryName: "Shoes" },
        { categoryId: 4, categoryName: "Books" },
        { categoryId: 5, categoryName: "Sports" }
    ];

    const [searchParam] = useSearchParams();
    const pathName = useLocation().pathname;
    const navigate = useNavigate();

    const params = new URLSearchParams(searchParam);

    // ✅ Correct state initialization
    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const curCategory = searchParam.get("category") || "all";
        const curSortOrder = searchParam.get("sortOrder") || "asc"; // ✅ Fixed parameter name
        const curSearchTerm = searchParam.get("keyword") || "";

        setCategory(curCategory);
        setSortOrder(curSortOrder); // ✅ Fixed: setSortOrder instead of setOrder
        setSearchTerm(curSearchTerm);
    }, []);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;

        if (selectedCategory === "all") {
            params.delete("category");
        } else {
            params.set("category", selectedCategory);
        }

        navigate(`${pathName}?${params.toString()}`);
        setCategory(selectedCategory);
    };

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => {
            const newOrder = prevOrder === "asc" ? "desc" : "asc";
            params.set("sortOrder", newOrder);
            navigate(`${pathName}?${params.toString()}`);
            return newOrder;
        });
    };

    const handleClearFilter = () => {
        navigate({pathname : window.location.pathname});
        set
    }

    // Update the search parameter i'll be using  useEffect to update it on every change\

    useEffect(() => {

        const handler = setTimeout(() => {
            if (searchTerm) {
                params.set("keyword", searchTerm);
            } else {
                params.delete("keyword");
            }

            navigate(`${pathName}?${params.toString()}`);
        }, 700);

        return () => clearTimeout(handler);
    }, [searchParam, searchTerm, navigate, pathName]) ;


    return (
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 w-full'>
            {/* Search Input */}
            <div className='relative flex items-center w-full lg:w-[450px]'>
                <input
                    type="text"
                    placeholder='Search for products'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='border border-gray-300 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
                <FiSearch className='absolute left-3 text-slate-800 size={20}' />
            </div>

            {/* Category Dropdown */}
            <FormControl variant='outlined' size='small' className='w-full lg:w-[200px]'>
                <InputLabel>Category</InputLabel>
                <Select
                    labelId="category-select-label"
                    value={category}
                    onChange={handleCategoryChange}
                    label="Category"
                >
                    <MenuItem value='all'>All</MenuItem>
                    {categories.map((cat) => (
                        <MenuItem key={cat.categoryId} value={cat.categoryName}>
                            {cat.categoryName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Buttons Container (Sort & Clear Filter) */}
            <div className='flex gap-4'>
                {/* Sort Button */}
                <Tooltip title={`Sorted by Price: ${sortOrder === "asc" ? "Ascending" : "Descending"}`}>
                    <Button variant='contained' color='primary' className='flex items-center gap-2 h-10' onClick={toggleSortOrder}>
                        Sort By
                        {sortOrder === "asc" ? <FiArrowUp size={20} /> : <FiArrowDown size={20} />}
                    </Button>
                </Tooltip>

                {/* Clear Filter Button */}
                <button className='flex items-center gap-2 h-10 bg-rose-800 text-white px-3 py-2 rounded-md transition duration-300 ease-in shadow-md focus:outline-none hover:bg-rose-700' onClick={handleClearFilter}>
                    <FiRefreshCw size={20} />
                    <span className='font-semibold'>Clear Filter</span>
                </button>
            </div>
        </div>
    );
};

export default Filter;
