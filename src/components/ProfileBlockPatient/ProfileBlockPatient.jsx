import { UilPen } from '@iconscout/react-unicons';
import { Button, IconButton } from '@mui/material';
import { Badge } from 'components/Badge/Badge';
import Card from 'components/Card/Card';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import moment from 'moment';
import { cloneElement } from 'react';
import { useLocation } from 'react-router';
import css from './ProfileBlockPatient.module.css';

export const ProfileBlockPatient = ({
    children,
    userInfo,
    modalAppointment,
    setModalAppointment,
    mmodalProfile,
    setMmodalProfile,
}) => {
    const location = useLocation().pathname;
    const personalLoc = location.startsWith('/patient/history');

    return (
        <>
            <Card>
                {location === '/doctor/patients-list' ? (
                    <div style={{ display: 'inline-block' }}>
                        <Badge>{userInfo.patientStatus}</Badge>
                    </div>
                ) : (
                    <div style={{ display: 'inline-block' }}>
                        <Badge>{userInfo.role}</Badge>
                    </div>
                )}

                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <ProfileImage personalLoc={personalLoc} avatar={userInfo.avatarURL} />
                    <div>
                        <ul className={css.list}>
                            <li className={css.item}>
                                Name:<p className={css.data}>{userInfo.name}</p>
                            </li>
                            {userInfo.gender && (
                                <li className={css.item}>
                                    Gender:<p className={css.data}>{userInfo.gender}</p>
                                </li>
                            )}

                            {userInfo.birthday && (
                                <li className={css.item}>
                                    Date of birth:
                                    <p className={css.data}>{moment(userInfo.birthday).format('DD MMMM YYYY')}</p>
                                </li>
                            )}

                            <li className={css.item}>
                                Phone number:<p className={css.data}>{userInfo.number}</p>
                            </li>
                        </ul>
                        {personalLoc && (
                            <>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    type="submit"
                                    onClick={() => setModalAppointment(!modalAppointment)}
                                >
                                    make an appointment
                                </Button>
                            </>
                        )}
                        {children && cloneElement(children, { id: userInfo._id })}
                    </div>
                </div>

                {personalLoc && (
                    <IconButton
                        color="primary"
                        sx={{ position: 'absolute', top: '16px', right: '16px' }}
                        onClick={() => setMmodalProfile(!mmodalProfile)}
                    >
                        <UilPen style={{ width: '20px', height: '20px' }} />
                    </IconButton>
                )}
            </Card>
        </>
    );
};
