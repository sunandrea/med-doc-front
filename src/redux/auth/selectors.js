export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.username;

export const selectUserPhone = state => state.auth.user.phone;

export const selectUserRole = state => state.auth.user.role;

export const selectRefreshToken = state => state.auth.refreshToken;

export const selectAccessToken = state => state.auth.accessToken;
