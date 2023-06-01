import { Avatar, Button } from '@mui/material';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/operation';
import s from '../AuthNav/AuthNav.module.css';

const AuthNav = ({ user }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className={s.auth_wrapper}>
            <ul className={s.nav_list}>
                <li className={s.nav_item}>
                    {isLoggedIn ? (
                        <NavLink to={user.role === 'Patient' ? '/patient/history' : `/doctor/personal/${user.id}`}>
                            <Avatar
                                alt="avatar"
                                src={user.userAvatar}
                                sx={{
                                    width: { sm: 38, md: 52 },
                                    height: { sm: 38, md: 52 },
                                    border: '2px solid #477577',
                                }}
                            />
                        </NavLink>
                    ) : (
                        <NavLink to="auth/register">
                            <Button
                                variant="outlined"
                                color="primaryAuth"
                                disableElevation
                                sx={{
                                    p: { md: '12px 32px' },
                                    borderRadius: { md: '12px' },
                                    fontSize: { md: '14px' },
                                    lineHeight: { md: 1.428 },
                                }}
                            >
                                Registration
                            </Button>
                        </NavLink>
                    )}
                </li>
                <li className={s.nav_item}>
                    {isLoggedIn ? (
                        <Button
                            variant="contained"
                            color="secondaryAuth"
                            disableElevation
                            sx={{
                                p: { md: '12px 32px' },
                                borderRadius: { md: '12px' },
                                fontSize: { md: '14px' },
                                lineHeight: { md: 1.428 },
                            }}
                            onClick={handleLogout}
                        >
                            Log Out
                        </Button>
                    ) : (
                        <NavLink to="auth/login">
                            <Button
                                variant="contained"
                                color="secondaryAuth"
                                disableElevation
                                sx={{
                                    p: { md: '12px 32px' },
                                    borderRadius: { md: '12px' },
                                    fontSize: { md: '14px' },
                                    lineHeight: { md: 1.428 },
                                }}
                            >
                                Log In
                            </Button>
                        </NavLink>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default AuthNav;
