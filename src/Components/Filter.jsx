import { Button, FormControl, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { FiArrowUp, FiRefreshCw, FiSearch } from 'react-icons/fi';

const Filter = () => {
    const categories = [
        { categoryId: 1, categoryName: "Electronics" },
        { categoryId: 2, categoryName: "Clothes" },
        { categoryId: 3, categoryName: "Shoes" },
        { categoryId: 4, categoryName: "Books" },
        { categoryId: 5, categoryName: "Sports" }
    ];

    const [category, setCategory] = useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 w-full'>
            {/* Search Input */}
            <div className='relative flex items-center w-full lg:w-[450px]'>
                <input
                    type="text"
                    placeholder='Search for products'
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
                <Tooltip title="Sorted by Price: Ascending">
                    <Button variant='contained' color='primary' className='flex items-center gap-2 h-10'>
                        Sort By
                        <FiArrowUp size={20} />
                    </Button>
                </Tooltip>

                {/* Clear Filter Button */}
                <button className='flex items-center gap-2 h-10 bg-rose-800 text-white px-3 py-2 rounded-md transition duration-300 ease-in shadow-md focus:outline-none hover:bg-rose-700'>
                    <FiRefreshCw size={20} />
                    <span className='font-semibold'>Clear Filter</span>
                </button>
            </div>
        </div>
    );
};

export default Filter;
