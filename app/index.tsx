import { useState, useCallback, useReducer } from "react";
import { View, FlatList, StyleSheet, Pressable } from 'react-native'
import { useFocusEffect, useRouter } from "expo-router";

import { TicketCard, Checkbox, H1, Button } from "@components";
import { useDatabase, useStyles, useAppDispatch, useAppSelector } from "@hooks";
import { Ticket, TicketSelect, AppDispatch } from "@interfaces";
import { selectTicket, selectTicketMode } from "@actions";
import { isEmptyObject } from "@utils";


interface DispatchAction {
	type: string;
	payload: Ticket | Ticket[];
}
const types = {
	selected: "SELECTED",
	deselected: "DESELECTED",
	add: "ADD",
}
const reducer = (state: TicketSelect[], action: DispatchAction, dispatch: AppDispatch): TicketSelect[] => {
	const { payload, type } = action;
	switch (type) {
		case types.selected:
			return state.map((ticket) => {
				// @ts-ignore
				if (ticket.id === payload?.id) {
					const newTicket = { ...ticket, selected: !ticket?.selected };
					dispatch(selectTicket(newTicket));
					return newTicket;
				} else {
					return ticket;
				}
			});
		
		case types.add:
			const newState = [...payload as Ticket[]];
			return newState;

		default:
			return state;
	}
};

const addTickets = (payload: Ticket[]) => ({
	type: types.add,
	payload,
});
const selectedTicket = (payload: TicketSelect) => ({
	type: types.selected,
	payload,
});

const Dashboard = () => {
	const dispatch = useAppDispatch();
	const [tickets, dispacher] = useReducer((state: any, action: any) => reducer(state, action, dispatch), []);
	const { selected: selectedTickets, selectMode } = useAppSelector(state => state.tickets);
	const db = useDatabase();
	const router = useRouter();
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			page: {
				backgroundColor: theme.body.background,
			},
			selectTitleContainer: {
				flexDirection: "row",
				justifyContent: "space-around",
				alignItems: "center",
				paddingHorizontal: 20,
				marginTop: 10,
			},
		});
	});
	
	useFocusEffect(useCallback(() => {
		db.transaction(tx => {
			tx.executeSql(
				`SELECT * FROM tickets`,
				// @ts-ignore
				null,
				(txObject, resultSet) => {
					if (resultSet.rows.length) {
						dispacher(addTickets(resultSet.rows._array as Ticket[]));
					}
				},
				(txObject, err) => console.error(err)
			);
		});
	}, []));

	function handleViewSelect() {
		router.push("work");
		dispatch(selectTicketMode(false));
	}

	function handleReleaseSelect() {
		if (selectMode) {
			dispatch(selectTicketMode(false));
		}
	}

	return (
		<Pressable onPress={handleReleaseSelect}>
			<View style={styles.page}>
				{
					selectMode && (
						<View style={styles.selectTitleContainer}>
							<H1>Select Tickets</H1>
							<Button width={100} height={50} disabled={isEmptyObject(selectedTickets)} onPress={handleViewSelect}>View</Button>
						</View>
					)
				}
				<FlatList
					data={tickets}
					keyExtractor={(ticket) => String(ticket.id)}
					renderItem={({ item }) => {
						return (
							<TicketCard
								ticket={item}
								showRightSection={selectMode}
								rightSection={() => (
									<Checkbox value={!!item?.selected} onChange={() => dispacher(selectedTicket(item))} />
								)}
								onLongPress={() => dispatch(selectTicketMode(!selectMode))}
							/>
						);
					}}
					style={{ width: "100%", height: "100%" }}
				/>
			</View>
		</Pressable>
	)
}

export default Dashboard;
