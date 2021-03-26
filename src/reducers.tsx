import { combineReducers } from 'redux';

import accountReducer from './store/account/reducer';

export default combineReducers({
    account: accountReducer
})