import { RESET_STORE } from '../app/appSlice';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	name: ''
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: {
		[RESET_STORE]: () => {
			return initialState;
		},
	},
	reducers: {
		setName (state, action) {
			state.token = action.payload;
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
