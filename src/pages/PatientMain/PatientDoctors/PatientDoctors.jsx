import { Button } from '@mui/material';
import BasicSelect from 'components/BasicSelect/BasicSelect';
import { ModalDoctorsAppointmentTime } from 'components/ModalDoctorsAppointmentTime/ModalDoctorsAppointmentTime';
import { PagePagination, paginationUsers, windowSizePagination } from 'components/PagePagination/PagePagination';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';
import UsersList from 'components/UsersList/UsersList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsersForRole } from 'redux/info/operation';
import style from './PatientDoctors.module.css';

const sorting = ['Name', 'Rating', 'Price'];

export const PatientDoctors = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    const [timeModal, setTimeModal] = useState(false);
    const [id, setId] = useState('');
    const [specialization, setSpecialization] = useState('');

    const [pagination, setPagination] = useState([]);
    const [limit, setLimit] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersForRole('Doctor')).then(({ payload }) => {
            setAllDoctors(payload);
        });
    }, [dispatch]);

    const handleClick = event => {
        setId(event.target.id);
        setSpecialization(event.target.specialization);
        setTimeModal(!timeModal);
    };

    const sortDoctors = selectedValue => {
        switch (selectedValue) {
            case 'Name': {
                const filtered = allDoctors.slice().sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                setAllDoctors(filtered);

                const result = paginationUsers(filtered, limit);
                setPagination(result);
                break;
            }
            case 'Rating': {
                const filtered = allDoctors.slice().sort((a, b) => b.rating - a.rating);
                setAllDoctors(filtered);

                const result = paginationUsers(filtered, limit);
                setPagination(result);
                break;
            }
            case 'Price': {
                const filtered = allDoctors.slice().sort((a, b) => b.price - a.price);
                setAllDoctors(filtered);

                const result = paginationUsers(filtered, limit);
                setPagination(result);
                break;
            }
            default:
                console.log('');
        }
    };

    // pagination

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

        const result = paginationUsers(allDoctors, limit);
        setPagination(result);
        // eslint-disable-next-line
    }, [windowWidth]);

    const handlePageOnVisits = data => {
        setPage(data);
    };

    let numberOfPaginationButton = 1;
    if (pagination) {
        numberOfPaginationButton = pagination.length;
    }

    return (
        <>
            <div className={style.filter}>
                <div className={style.filterSelect}>
                    <BasicSelect
                        styles={{ minWidth: '180px' }}
                        title={'Sorting'}
                        filter={sorting}
                        sortDoctors={sortDoctors}
                        allDoctors={allDoctors}
                        setAllDoctors={setAllDoctors}
                    />
                </div>
            </div>
            <UsersList listOfUsers={pagination[page - 1] || allDoctors}>
                <ProfileBlockDoctore>
                    <Button variant="outlined" color="primary" onClick={handleClick}>
                        make an appointment
                    </Button>
                </ProfileBlockDoctore>
            </UsersList>
            <PagePagination
                numberOfBtnsOnVisitsHistory={numberOfPaginationButton}
                handlePageOnVisits={handlePageOnVisits}
            />
            <ModalDoctorsAppointmentTime
                id={id}
                specialization={specialization}
                open={timeModal}
                setOpen={setTimeModal}
            />
        </>
    );
};
