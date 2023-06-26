import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TicketSelect } from "@interfaces";

interface Selected {
	[key: string]: TicketSelect;
}
export interface TicketsState {
	selected: Selected;
	selectMode: boolean;
}
const initialState: TicketsState = {
	selected: {},
	selectMode: false,
}
const ticketsSlice = createSlice({
	name: "tickets",
	initialState,
	reducers: {
		selectTicket: (state, action: PayloadAction<TicketSelect>) => {
			const { payload } = action;

			if (payload.selected) {
				state.selected[payload.id] = payload;
			}
			if (!payload.selected) {
				delete state.selected[payload.id];
			}
		},
		selectTicketMode: (state, action: PayloadAction<boolean>) => {
			state.selectMode = action.payload;
		},
		resetTicketsSelected: (state) => {
			state.selected = {};
		},
	},
});


export const { selectTicket, selectTicketMode, resetTicketsSelected } = ticketsSlice.actions;
export default ticketsSlice;
