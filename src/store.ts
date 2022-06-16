import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import pageReducer from './features/currentPage/currentPageSlice';
import placementReducer from './features/placementTestAnswers/PlacementSlice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		page: pageReducer,
		placementAnswers: placementReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
