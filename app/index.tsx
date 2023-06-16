import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from "expo-router";

import { Button, Icon, Input } from "@components";

const Entry = () => {
	const router = useRouter();
	function handleDashboard() {
		router.push("dashboard");
	}

	return (
		<View style={{justifyContent: "center", alignItems: "center"}}>
			<Text>Entry</Text>
			<Button onPress={handleDashboard}>Peter</Button>
			<Icon family='material' size={42} name='addchart' />
			<Input secureTextEntry />
		</View>
	)
}

export default Entry;

const styles = StyleSheet.create({});