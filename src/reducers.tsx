import { combineReducers } from 'redux';

import accountReducer from './store/accounts/reducer';

export default combineReducers({
    account: accountReducer
})