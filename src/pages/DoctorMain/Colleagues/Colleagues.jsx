/* eslint-disable react-hooks/exhaustive-deps */
import { UilSearch } from '@iconscout/react-unicons';
import { Autocomplete, IconButton, Input, TextField } from '@mui/material';
import LinkViewProfile from 'components/LinkViewProfile/LinkViewProfile';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';
import UsersList from 'components/UsersList/UsersList';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersForRole } from 'redux/info/operation';
import { selectAllDoctors } from 'redux/info/selectors';
import css from './Colleagues.module.css';
import { paginationUsers, windowSizePagination, PagePagination } from 'components/PagePagination/PagePagination';

const specializations = [
    'Show All',
    'Ophthalmologist',
    'Surgeon',
    'Therapist',
    'Neurologist',
    'Gynecologist',
    'Endocrinologist',
    'Psychiatrist',
    'Psychotherapist',
    'Otolaryngologist',
    'Oncologist',
];
const categories = ['Show All', 'The First', 'The Second', 'Higher'];
const DEBOUNCE_DELAY = 300;

const autocompleteStyles = {
    '&.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.MuiAutocomplete-root .MuiOutlinedInput-root': {
        borderRadius: '16px',
        padding: '14px 18px',
    },
    '&.MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input ': {
        padding: '0px',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#111111',
        width: '100%',
    },
};

const Colleagues = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    const [filteredByName, setFilteredByName] = useState([]);
    const [specialization, setSpecialization] = useState('Show All');
    const [category, setCategory] = useState('Show All');

    const [pagination, setPagination] = useState([]);
    const [limit, setLimit] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const doctors = useSelector(selectAllDoctors);

    useEffect(() => {
        dispatch(getAllUsersForRole('Doctor'));
    }, []);

    const handleFilterName = e => {
        const inputValue = e.target.value.trim();
        const filtered = allDoctors.filter(doctor => doctor.name.toLowerCase().startsWith(inputValue.toLowerCase()));
        setFilteredByName(filtered);
    };

    const handleFilterSpecialization = (event, value) => {
        setSpecialization(value);
    };

    const handleFilterCategory = (event, value) => {
        setCategory(value);
    };

    //pagination

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        windowSizePagination(window.innerWidth, setLimit);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        windowSizePagination(windowWidth, setLimit);

        const result = paginationUsers(filteredByName, limit);
        setPagination(result);
    }, [windowWidth]);

    useEffect(() => {
        let filtered = doctors;

        if (specialization && specialization !== 'Show All') {
            filtered = filtered.filter(doctor => doctor.specialization === specialization);
        }

        if (category && category !== 'Show All') {
            filtered = filtered.filter(doctor => doctor.category === category);
        }

        const result = paginationUsers(filtered, limit);
        setPagination(result);

        setAllDoctors(filtered);
        setFilteredByName(filtered);
    }, [doctors, specialization, category]);

    const handlePageOnVisits = data => {
        setPage(data);
    };

    let numberOfPaginationButton = 1;
    if (pagination) {
        numberOfPaginationButton = pagination.length;
    }

    return (
        <>
            <div className={css.filter}>
                <div>
                    <Input
                        sx={{
                            minWidth: '270px'
                        }}
                        variant="filter"
                        color="primary"
                        disableUnderline
                        type="text"
                        placeholder="Search"
                        onChange={debounce(handleFilterName, DEBOUNCE_DELAY)}
                        endAdornment={
                            <IconButton disableRipple sx={{ padding: '0px' }}>
                                <UilSearch />
                            </IconButton>
                        }
                    />
                </div>
                <div className={css.filterSelect}>
                    <ul style={{ display: 'flex' }}>
                        <li>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={specializations}
                                sx={{
                                    ...autocompleteStyles,
                                    maxWidth: '220px',
                                    marginRight: { xs: '8px', md: '16px' },
                                }}
                                value={specialization}
                                onChange={handleFilterSpecialization}
                                renderInput={params => <TextField {...params} />}
                            />
                        </li>
                        <li>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={categories}
                                sx={{ ...autocompleteStyles, maxWidth: '184px' }}
                                value={category}
                                onChange={handleFilterCategory}
                                renderInput={params => <TextField {...params} />}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <UsersList listOfUsers={pagination[page - 1] || filteredByName}>
                <ProfileBlockDoctore>
                    <LinkViewProfile>view profile</LinkViewProfile>
                </ProfileBlockDoctore>
            </UsersList>
            <PagePagination
                numberOfBtnsOnVisitsHistory={numberOfPaginationButton}
                handlePageOnVisits={handlePageOnVisits}
            />
        </>
    );
};

export default Colleagues;
