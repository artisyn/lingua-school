import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import pageReducer from './features/currentPage/currentPageSlice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		page: pageReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
