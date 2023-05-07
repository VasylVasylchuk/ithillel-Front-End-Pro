import { createSlice } from '@reduxjs/toolkit';

export const RESET_STORE = 'RESET_STORE';

export const resetStore = {
	type: RESET_STORE,
};

export const initialState = {
	token: '',
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	extraReducers: {
		[RESET_STORE]: () => {
			return initialState;
		},
	},
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		},
	},
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
