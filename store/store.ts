import { configureStore } from "@reduxjs/toolkit";

import popUpSlice from "./features/popUpSlice";
import authSlice from "./features/authSlice";

export const store = configureStore({
	reducer: {
		[popUpSlice.name]: popUpSlice.reducer,
		[authSlice.name]: authSlice.reducer,
	},
});

export type State = ReturnType<typeof store.getState>;