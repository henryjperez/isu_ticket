import { useState, useCallback, useReducer } from "react";
import { View, FlatList, StyleSheet, Pressable } from 'react-native'
import { useFocusEffect } from "expo-router";

import { TicketCard, Checkbox, H1, Button } from "@components";
import { useDatabase, useStyles } from "@hooks";
import { Ticket, TicketSelect } from "@interfaces";


interface DispatchAction {
	type: string;
	payload: Ticket | Ticket[];
}
const types = {
	selected: "SELECTED",
	deselected: "DESELECTED",
	add: "ADD",
}
const reducer = (state: TicketSelect[], action: DispatchAction): TicketSelect[] => {
	const { payload, type } = action;
	switch (type) {
		case types.selected:
			return state.map((ticket) => {
				// @ts-ignore
				if (ticket.id === payload?.id) {
					return { ...ticket, selected: !ticket?.selected };
				} else {
					return ticket;
				}
			});
		
		case types.add:
			const newState = [...state, ...payload as Ticket[]];
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
	const [showSelectTickets, setShowSelectTickets] = useState(false);
	const [tickets, dispacher] = useReducer(reducer, []);
	const db = useDatabase();
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

	function handleReleaseSelect() {
		if (showSelectTickets) {
			setShowSelectTickets(false);
		}
	}

	return (
		<Pressable onPress={handleReleaseSelect}>
			<View style={styles.page}>
				{
					showSelectTickets && (
						<View style={styles.selectTitleContainer}>
							<H1>Select Tickets</H1>
							<Button disabled width={100} height={50}>View</Button>
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
								showRightSection={showSelectTickets}
								rightSection={() => (
									<Checkbox value={!!item?.selected} onChange={() => dispacher(selectedTicket(item))} />
								)}
								onLongPress={() => setShowSelectTickets(!showSelectTickets)}
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
