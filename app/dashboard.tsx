import { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useFocusEffect } from "expo-router";

import { TicketCard, DatePicker, PopUpBackground, Icon } from "@components";
import { useTheme, useDatabase } from "@hooks";


const Dashboard = () => {
	const [tickets, setTickets] = useState([]);
	const [visible, setVisible] = useState(false);
	const db = useDatabase();
	const theme = useTheme();
	
	useFocusEffect(useCallback(() => {
		db.transaction(tx => {
			tx.executeSql(
				`SELECT * FROM tickets`,
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