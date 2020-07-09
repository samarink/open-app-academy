import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_USER';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
)

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
   .then(() => dispatch(logoutCurrentUser()))
);

