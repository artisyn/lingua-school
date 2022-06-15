import { createSlice } from '@reduxjs/toolkit';

const initialState: string = 'ABOUT';

export const currentPageSlice = createSlice({
	name: 'page',
	initialState: { value: initialState },
	reducers: {
		pageChange(state, actions) {
			if (state.value === actions.payload) return;

			state.value = actions.payload;
		},
	},
});

export const { pageChange } = currentPageSlice.actions;
export default currentPageSlice.reducer;
