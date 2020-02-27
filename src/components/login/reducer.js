import { INITIATE_LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from './action';
export const login = (
  state = { isLoginRequest: false, error: false, success: false },
  action
) => {
  switch (action.type) {
    case INITIATE_LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoginRequest: true,
        error: false,
        success: false
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginRequest: false,
        success: true,
        error: false
      });
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        isLoginRequest: false,
        success: false,
        error: true
      });
    default:
      return state;
  }
};
