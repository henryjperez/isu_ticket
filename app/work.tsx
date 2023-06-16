import { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { useRouter, useSearchParams } from "expo-router";

import { Button, Card, H1, Text, Icon, FlashMessage } from "@components";
import { useStyles, useDatabase } from "@hooks";

const WorkScreen = () => {
	const router = useRouter();
	const db = useDatabase();
	const {id, date, name, phone, address} = useSearchParams();
	const [notification, setNotification] = useState<string | null>(null);
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
			},
			card_text: {
				justifyContent: "center",
				alignItems: "center",
			},
			title: {
				flexDirection: "row",
				justifyContent: "space-between",
			}
		});
	});

	function handleGetDirections() {
		router.push("directions");
	}
	function handleDelete() {
		db.transaction(tx => {
			tx.executeSql(
				`DELETE FROM tickets WHERE id = ${id};`,
				null,
				(txObject, resultSet) => {
					if (resultSet.insertId) {
						setNotification("Ticket Deleted successfully");
						setTimeout(() => {
							router.push("dashboard");
						}, 500);
					}
				},
				(txObject, err) => {
					setNotification("An error occurred");
					console.error(err)
				},
			);
		});
	}

	return (
		<View style={styles.page}>
			{
				typeof notification === "string" && notification ?
					<FlashMessage message={notification} />
					: null
			}
			<Card>
				<View style={styles.title}>
					<H1>{`Ticket #${id}`}</H1>
					<TouchableOpacity onPress={handleDelete}>
						<Icon name='trash' size={30} family='fw' />
					</TouchableOpacity>
				</View>
				<View style={styles.grid}>
					<Card style={styles.card_text}>
						<Text>{name}</Text>
						<Text>{date}</Text>
						<Text>{address}</Text>
						<Text>{phone}</Text>
					</Card>
					<Card>
						<Button onPress={handleGetDirections}>Get Directions</Button>
					</Card>
				</View>
			</Card>
		</View>
	)
}

export default WorkScreen;