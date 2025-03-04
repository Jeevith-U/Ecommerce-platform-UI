import { Pagination } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const Paginations = ({ numberOfPages }) => {  
    const [searchParams] = useSearchParams();
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const params = new URLSearchParams(searchParams);

    // Ensure paramValue is a number
    const paramValue = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

    // Handles page change and updates the URL
    const onChangeHandler = (event, value) => {
        params.set('page', value.toString());
        navigate(`${pathname}?${params}`);
    };

    return (
        <div>
            <Pagination 
                count={numberOfPages}
                page={paramValue}  // Ensure it's a number
                siblingCount={0}
                boundaryCount={2}
                shape="rounded"
                onChange={onChangeHandler}
            />
        </div>
    );
};

export default Paginations;
