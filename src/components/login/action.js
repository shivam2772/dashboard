export const INITIATE_LOGIN_REQUEST = 'initiate-login-request';
export const LOGIN_SUCCESS = 'login-success';
export const LOGIN_FAILED = 'login-failed';

export const initiateLoginRequest = data => ({
  type: INITIATE_LOGIN_REQUEST,
  payload: data
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});

export const loginFailure = data => ({
  type: LOGIN_FAILED,
  payload: data
});
