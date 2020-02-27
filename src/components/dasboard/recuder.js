import { SET_DASHBOARD_DATA } from './action';

export const dashboard = (state = {}, action) => {
  switch (action.type) {
    case SET_DASHBOARD_DATA:
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
};
