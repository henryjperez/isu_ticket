import { configureStore } from "@reduxjs/toolkit";

import popUpReducer from "./popUp/popUpSlice";

export const store = configureStore({
	pop_up: popUpReducer,
});
