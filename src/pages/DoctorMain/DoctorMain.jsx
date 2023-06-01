import { Navigation } from 'components/Navigation/Navigation';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { getUserInfo } from 'redux/info/operation';
import { getAllVisits } from 'redux/visits/operation';

export const DoctorMain = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo());
        dispatch(getAllVisits({ page: 1, limit: 0 }));
    }, [dispatch]);

    return (
        <>
            <Navigation />
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};
