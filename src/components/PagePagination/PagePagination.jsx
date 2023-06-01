import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

export const paginationUsers = (arr, limit) => {
    const result = arr.map((el, i) => (i % limit === 0 ? arr.slice(i, i + limit) : null)).filter(el => el);
    return result;
};

export const windowSizePagination = (windowWidth, setLimit, limit, cardLimit) => {
    if (windowWidth >= 1400) {
        setLimit(9);
        if (cardLimit) limit = 9;
    } else if (windowWidth >= 769) {
        setLimit(8);
        if (cardLimit) limit = 8;
    } else {
        setLimit(6);
        if (cardLimit) limit = 6;
    }
    if (cardLimit) return limit;
};

export const filter = (users, pagination) => {
    let numberOfPaginationButton = 0;
    if (users || pagination) {
        numberOfPaginationButton = users.length || pagination.length;
    }
    return numberOfPaginationButton;
};

export const PagePagination = ({ numberOfBtnsOnVisitsHistory, handlePageOnVisits }) => {
    const [page, setPage] = useState(1);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
            handlePageOnVisits(page - 1);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
        handlePageOnVisits(page + 1);
    };
    return (
        <Box
            sx={{
                background: '#FAFAFA',
                borderRadius: '16px',
                padding: { xs: '16px 20px', md: '20px 32px' },
                margin: '0 auto',
                maxWidth: '445px',
            }}
        >
            <Pagination
                onChange={(event, value) => {
                    setPage(value);
                    handlePageOnVisits(value);
                }}
                count={numberOfBtnsOnVisitsHistory}
                color="primary"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '& .MuiPaginationItem-root': {
                        fontSize: { xs: '14px', md: '16px' },
                        lineHeight: { xs: '1.29', md: '1.5' },
                        fontWeight: '600',
                        minWidth: { xs: '28px', md: '32px' },
                        height: { xs: '28px', md: '32px' },
                    },
                }}
                boundaryCount={3}
                siblingCount={3}
                onNext={handleNextPage}
                onPrev={handlePrevPage}
            />
        </Box>
    );
};
