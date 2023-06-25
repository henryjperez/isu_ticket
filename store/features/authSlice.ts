import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
	auth: boolean;
}
const initialState: AuthState = {
	auth: true,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state) => {state.auth = true},
		logout: (state) => {state.auth = false},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice;