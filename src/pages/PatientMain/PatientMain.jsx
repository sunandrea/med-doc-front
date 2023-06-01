import { Navigation } from 'components/Navigation/Navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { getUserInfo } from 'redux/info/operation';
import { getAllVisits } from '../../redux/visits/operation';

export const PatientMain = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo());
        dispatch(getAllVisits({page: 1, limit: 0}));
    }, [dispatch]);

    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};
