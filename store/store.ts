import { configureStore } from "@reduxjs/toolkit";

import notificationsSlice from "./features/notificationsSlice";
import ticketsSlice from "./features/ticketsSlice";
import popUpSlice from "./features/popUpSlice";
import authSlice from "./features/authSlice";

export const store = configureStore({
	reducer: {
		[notificationsSlice.name]: notificationsSlice.reducer,
		[ticketsSlice.name]: ticketsSlice.reducer,
		[popUpSlice.name]: popUpSlice.reducer,
		[authSlice.name]: authSlice.reducer,
	},
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
