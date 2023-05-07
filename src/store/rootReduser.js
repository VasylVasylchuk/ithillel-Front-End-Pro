import { combineReducers } from 'redux';
import app, { RESET_STORE } from './app/appSlice';
import user from './user/userSlice';
import myState from './myState/myStateSlice';

export const reducerSlices = {
	app,
	user,
	myState
};

const appReducer = combineReducers(reducerSlices);

const rootReducer = (state, action) => {
	if (action.type === RESET_STORE) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;
