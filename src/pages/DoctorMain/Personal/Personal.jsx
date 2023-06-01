/* eslint-disable react-hooks/exhaustive-deps */
import { ExperienceBlock } from 'components/ExperienceBlock/ExperienceBlock';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectUserInfoById } from 'redux/info/selectors';

import { AboutBlock } from 'components/AboutBlock/AboutBlock';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';
import { SpecializationBlock } from 'components/SpecializationBlock/SpecializationBlock';
import { WeekVisitsBlock } from 'components/WeekVisitsBlock/WeekVisitsBlock';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getUserInfoById } from 'redux/info/operation';
import { selectUserInfo } from 'redux/info/selectors';
import css from './Personal.module.css';

const Personal = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const location = useLocation().pathname;
    const doctorInfo = useSelector(selectUserInfo);
    const colleagueInfo = useSelector(selectUserInfoById);

    useEffect(() => {
        dispatch(getUserInfoById(id));
    }, [dispatch, id]);

    return (
        <>
            {doctorInfo && (
                <>
                    {location.startsWith('/doctor/personal') && (
                        <>
                            <div className={css.DoctorInformation}>
                                <ProfileBlockDoctore userInfo={doctorInfo} />
                                <SpecializationBlock
                                    specialization={doctorInfo.specialization}
                                    category={doctorInfo.category}
                                />
                            </div>
                            <div className={css.pageAboutBlock}>
                                <div className={css.pageAboutBlockWrapper}>
                                    <AboutBlock about={doctorInfo.about} />
                                    <ExperienceBlock doctorInfo={doctorInfo} />
                                </div>

                                <WeekVisitsBlock />
                            </div>
                        </>
                    )}
                    {location.startsWith('/doctor/colleuges') && (
                        <>
                            <div className={css.DoctorInformation}>
                                <ProfileBlockDoctore userInfo={colleagueInfo} />
                                <SpecializationBlock
                                    specialization={colleagueInfo.specialization}
                                    category={colleagueInfo.category}
                                />
                            </div>
                            <div className={css.pageAboutBlock}>
                                <div className={css.pageAboutBlockWrapper}>
                                    <AboutBlock about={colleagueInfo.about} />
                                    <ExperienceBlock doctorInfo={colleagueInfo} />
                                </div>

                                <WeekVisitsBlock />
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Personal;
