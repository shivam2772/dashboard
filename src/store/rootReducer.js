import { combineReducers } from 'redux';
import { login } from '../components/login/reducer';
import { dashboard } from '../components/dasboard/recuder';

export default combineReducers({
  login,
  dashboard
});
