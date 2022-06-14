import { createSlice } from '@reduxjs/toolkit';

const initialState: string = 'light';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: { value: initialState },
	reducers: {
		themeChange(state) {
			if (state.value === 'light') {
				state.value = 'dark';
				return;
			}
			if (state.value === 'dark') {
				state.value = 'light';
				return;
			}
		},
	},
});

export const { themeChange } = themeSlice.actions;
export default themeSlice.reducer;
