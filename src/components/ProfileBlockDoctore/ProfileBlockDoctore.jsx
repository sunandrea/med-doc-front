import { UilPen } from '@iconscout/react-unicons';
import { Button, Typography } from '@mui/material';
import { Badge } from 'components/Badge/Badge';
import Card from 'components/Card/Card';
import EditDoctorProfileModal from 'components/EditDoctorProfileModal/EditDoctorProfileModal';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import StarRating from 'components/StarRating/StarRating';
import moment from 'moment';
import { cloneElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectUserInfo } from 'redux/info/selectors';
import css from './ProfileBlockDoctore.module.css';

export const ProfileBlockDoctore = ({ children, userInfo }) => {
    const [appModal, setAppModal] = useState(false);

    const doctorId = useSelector(selectUserInfo)?._id;
    const { id } = useParams();
    const personalLoc = doctorId === id;

    return (
        <Card>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <Badge> {userInfo.role}</Badge>
                </div>
                <div>
                    <StarRating value={userInfo.rating} />
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '32px',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                }}
            >
                <ProfileImage avatar={userInfo.avatarURL} personalLoc={personalLoc} />
                <div style={{ textAlign: 'center' }}>
                    <ul className={css.list}>
                        <li className={css.item}>
                            Name:
                            <p className={css.data}>{userInfo.name}</p>
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
                        {userInfo.price && (
                            <li className={css.item}>
                                Price:<p className={css.data}>{userInfo.price} UAH /1 hour</p>
                            </li>
                        )}
                        {userInfo.specialization && !personalLoc && (
                            <li className={css.item}>
                                Specialization:<p className={css.data}>{userInfo.specialization} </p>
                            </li>
                        )}
                    </ul>
                </div>
                {personalLoc && (
                    <Button color="primary" onClick={() => setAppModal(!appModal)}>
                        <UilPen style={{ width: '20px', height: '20px' }} />
                        <Typography color="text.black" sx={{ lineHeight: 1.285, textTransform: 'none' }}>
                            Edit profile
                        </Typography>
                    </Button>
                )}

                {children && cloneElement(children, { id: userInfo._id, specialization: userInfo.specialization })}
            </div>
            <EditDoctorProfileModal open={appModal} setApp={setAppModal} info={userInfo} />
        </Card>
    );
};
