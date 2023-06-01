import BasicSelect from 'components/BasicSelect/BasicSelect';
import LinkViewProfile from 'components/LinkViewProfile/LinkViewProfile';
import { PagePagination, paginationUsers, windowSizePagination } from 'components/PagePagination/PagePagination';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';
import UsersList from 'components/UsersList/UsersList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsersForRole } from 'redux/info/operation';
import css from './ListOfPatients.module.css';

const ListOfPatients = () => {
    const [allPatients, setAllPatients] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [status, setStatus] = useState('All');

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const dispatch = useDispatch();

    const frequency = ['All', 'New', 'Permanent'];

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        windowSizePagination(window.innerWidth, setLimit);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        let limit = null;
        let limitResult = windowSizePagination(windowWidth, setLimit, limit, 'yes');
        dispatch(getAllUsersForRole('Patient')).then(({ payload }) => {
            const result = paginationUsers(payload, limitResult);
            setAllPatients(payload);
            setPagination(result);
        });
        // eslint-disable-next-line
    }, [dispatch]);

    useEffect(() => {
        windowSizePagination(windowWidth, setLimit);

        const result = paginationUsers(filtered, limit);
        setPagination(result);
        // eslint-disable-next-line
    }, [windowWidth]);

    useEffect(() => {
        let filterDoctor = allPatients;

        if (status !== 'All') {
            filterDoctor = allPatients.filter(el => el.patientStatus === status);
        }

        setFiltered(filterDoctor);

        const result = paginationUsers(filterDoctor, limit);
        setPagination(result);
        // eslint-disable-next-line
    }, [allPatients, status]);

    const handlePageOnVisits = data => {
        setPage(data);
    };

    const sortDoctors = status => {
        setStatus(status);
        // const filterDoctor = allPatients.filter(el => el.patientStatus === status);
        // const result = paginationDoctors(filterDoctor);

        // setFiltered(result);
    };

    let numberOfPaginationButton = 0;
    if (pagination) {
        numberOfPaginationButton = pagination.length;
    }

    return (
        <>
            <div className={css.filter}>
                <BasicSelect
                    title={'Patients'}
                    filter={frequency}
                    sortDoctors={sortDoctors}
                    styles={{ width: '204px' }}
                />
            </div>
            {limit && (
                <UsersList listOfUsers={pagination[page - 1] || filtered}>
                    <ProfileBlockPatient>
                        <LinkViewProfile>view profile</LinkViewProfile>
                    </ProfileBlockPatient>
                </UsersList>
            )}
            {limit && (
                <PagePagination
                    numberOfBtnsOnVisitsHistory={numberOfPaginationButton}
                    handlePageOnVisits={handlePageOnVisits}
                />
            )}
        </>
    );
};

export default ListOfPatients;
