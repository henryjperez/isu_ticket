import { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import { useRouter, useSearchParams } from "expo-router";

import { Button, Card, H1, Text, Icon } from "@components";
import { useStyles, useDatabase, useAppSelector, useNotification } from "@hooks";
import { isEmptyObject } from "@utils";
import { TicketSelect } from "@interfaces";

const WorkScreen = () => {
	const router = useRouter();
	const db = useDatabase();
	const { id, date, name, phone, address, latitude, longitude } = useSearchParams();
	const selectedTickets = useAppSelector(state => state.tickets.selected);
	const [tickets, setTickets] = useState<TicketSelect[]>([]);
	const showNotification = useNotification();
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			grid: {
				flexDirection: device.isPortrait ? "column" : "row",
			},
			page: {
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: theme.body.background,
				flex: 1,
				paddingVertical: 10,
			},
			card_text: {
				justifyContent: "center",
				alignItems: "center",
			},
			title: {
				flexDirection: "row",
				justifyContent: "space-between",
			},
			card: {
				marginVertical: 5,
			}
		});
	});

	useEffect(() => {
		if (isEmptyObject(selectedTickets)) {
			// @ts-ignore
			setTickets([{ id, date, name, phone, address, latitude, longitude }]);
		} else {
			const arrayTickets = Object.keys(selectedTickets).map((key) => selectedTickets[key]);
			setTickets(arrayTickets);
		}
	}, []);

	function handleGetDirections(ticket: TicketSelect) {
		router.push({ pathname: "directions", params: { ...ticket } });
	}
	function handleDelete(del_id: number) {
		db.transaction(tx => {
			tx.executeSql(
				`DELETE FROM tickets WHERE id = ${del_id};`,
				// @ts-ignore
				null,
				(txObject, resultSet) => {
					if (resultSet.insertId) {
						showNotification({ message: "Ticket Deleted successfully", duration: 500, type: "success" });
						setTimeout(() => {
							router.push("dashboard");
						}, 500);
					}
				},
				(txObject, err) => {
					showNotification({ message: "An error occurred", duration: 500, type: "error" });
					console.error(err)
				},
			);
		});
	}

	return (
		<ScrollView>
			<View style={styles.page}>
				{
					tickets.map((ticket) => {
						return (
							<Card key={ticket.id + "work-screen"} style={styles.card}>
								<View style={styles.title}>
									<H1>{`Ticket #${ticket.id}`}</H1>
									<TouchableOpacity onPress={() => handleDelete(ticket.id)}>
										<Icon name='trash' size={30} family='fw' />
									</TouchableOpacity>
								</View>
								<View style={styles.grid}>
									<Card style={styles.card_text}>
										<Text>{ticket.name}</Text>
										<Text>{ticket.date}</Text>
										<Text>{ticket.address}</Text>
										<Text>{ticket.phone}</Text>
									</Card>
									<Card>
										<Button onPress={() => handleGetDirections(ticket)}>Get Directions</Button>
									</Card>
								</View>
							</Card>
						);
					})
				}
			</View>
		</ScrollView>
	)
}

export default WorkScreen;