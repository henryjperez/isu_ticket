import { useState, useCallback } from "react";
import { View, FlatList } from 'react-native'
import { useFocusEffect } from "expo-router";

import { TicketCard } from "@components";
import { useTheme, useDatabase } from "@hooks";


const Dashboard = () => {
	const [tickets, setTickets] = useState<any>([]);
	const db = useDatabase();
	const theme = useTheme();
	
	useFocusEffect(useCallback(() => {
		db.transaction(tx => {
			tx.executeSql(
				`SELECT * FROM tickets`,
				// @ts-ignore
				null,
				(txObject, resultSet) => {
					if (resultSet.rows.length) {
						setTickets(resultSet.rows._array);
					}
				},
				(txObject, err) => console.error(err)
			);
		});


	}, []));

	return (
		<View style={{backgroundColor: theme.body.background}}>
			<FlatList
				data={tickets}
				keyExtractor={(ticket) => String(ticket.id)}
				renderItem={({ item }) => {
					return <TicketCard ticket={item} />
				}}
				style={{width: "100%", height: "100%"}}
			/>
		</View>
	)
}

export default Dashboard;

// const styles = StyleSheet.create({});