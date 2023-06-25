import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FlashMessageProps } from "@interfaces";

type FM = Omit<FlashMessageProps, "onAnimationEnd">;
export interface FlashMessageState extends FM {
	active?: boolean;
}
export interface NotificationsState {
	flashMessages: FlashMessageState;
}
const initialState: NotificationsState = {
	flashMessages: {
		duration: 0,
		message: "",
		iconName: "adb",
		type: "info",
		active: false,
	},
};

const notificationsSlice = createSlice({
	name: "notifications",
	initialState,
	reducers: {
		showNotification: (state, action: PayloadAction<FlashMessageState>) => {
			state.flashMessages = { ...action.payload, active: true };
		},
		resetNotification: (state) => { state.flashMessages = { ...initialState.flashMessages, active: false } },
	},
});

export const { showNotification, resetNotification } = notificationsSlice.actions;
export default notificationsSlice;