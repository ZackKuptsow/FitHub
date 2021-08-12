import * as types from '../actions/types';
import initialState from './initialState';

const authReducer = (state = initialState.accessToken, action) => {
	switch (action.type) {
		case types.LOGIN_USER_SUCCESS:
			return action.accessToken;
		case types.LOGOUT_USER:
			return '';
		default:
			return state;
	}
};

export default authReducer;
