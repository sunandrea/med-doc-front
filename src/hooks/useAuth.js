import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectUserName,
  selectUserPhone,
  selectUserRole,
  selectRefreshToken,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const userName = useSelector(selectUserName);
  const userPhone = useSelector(selectUserPhone);
  const userRole = useSelector(selectUserRole);
  const refreshToken = useSelector(selectRefreshToken);
  return {
    isLoggedIn,
    user,
    userName,
    userPhone,
    userRole,
    refreshToken,
  };
};

