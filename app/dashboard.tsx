import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useRouter } from "expo-router";

import { Button, TicketCard, } from "@components";
import { Ticket } from "@interfaces";

const tickets: Ticket[] = [
	{
		id: 1,
		name: "Buying Card",
		date: "13-06-2007",
		coordinates: [43.48867303159076, -80.49331292380043],
	},
	{
		id: 2,
		name: "Fancy Dinner",
		date: "01-08-2004",
		coordinates: [43.47092317243294, -80.44996842907183],
	},
	{
		id: 3,
		name: "HP Laptop",
		date: "23-01-2020",
		coordinates: [43.48039041289636, -80.4776917395616],
	},
	{
		id: 4,
		name: "Phone",
		date: "05-03-2014",
		coordinates: [43.41456386675492, -80.51374030128373],
	},
	{
		id: 5,
		name: "Rent Boat",
		date: "17-08-2011",
		coordinates: [43.4819488867488, -80.56903912334258],
	},
];

const Dashboard = () => {
	const router = useRouter();
	function handleWorkingTicket() {
		router.push("work");
	}

	return (
		<View>
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

export default Dashboard

const styles = StyleSheet.create({})