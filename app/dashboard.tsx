import { StyleSheet, Text, View } from 'react-native'
import { useRouter } from "expo-router";

import { Button } from "@components";

const Dashboard = () => {
	const router = useRouter();
	function handleWorkingTicket() {
		router.push("work");
	}

	return (
		<View>
			<Text>Dashboard</Text>
			<Button onPress={handleWorkingTicket}>Working ticket</Button>
		</View>
	)
}

export default Dashboard

const styles = StyleSheet.create({})