import { StyleSheet, View } from 'react-native';
import { useRouter } from "expo-router";

import { H2, Text } from "@components/text";
import { Card } from "@components/card";
import { Button } from "@components/button";
import { useStyles } from "@hooks";

export interface Ticket {
	id: number,
	name: string;
	date: string;
	phone: string;
	address: string;
	longitude: number;
	latitude: number;
}
export interface TicketCardProps {
	ticket: Ticket;
}
export const TicketCard = (props: TicketCardProps) => {
	const { id, name, date, address, phone } = props.ticket;
	const router = useRouter();
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			card: {
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				margin: 10,
			}
		});
	});

	function handleOnPress() {
		// router.setParams({ id: String(id) });
		router.push({ pathname: "work", params: {...props.ticket}});
	}

	return (
		<Card style={styles.card}>
			<View>
				<H2>{name}</H2>
				<Text>#{id}</Text>
				<Text>{date}</Text>
				<Text>{address}</Text>
				<Text>{phone}</Text>
			</View>
			<View>
				<Button width={100} onPress={handleOnPress}>View</Button>
			</View>
		</Card>
	)
}