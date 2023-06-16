import { StyleSheet, Text, View } from 'react-native'
import { useRouter } from "expo-router";

import { Button } from "@components";

const WorkScreen = () => {
	const router = useRouter();
	function handleGetDirections() {
		router.push("directions");
	}

	return (
		<View>
			<Text>WorkScreen</Text>
			<Button onPress={handleGetDirections}>Directions</Button>
		</View>
	)
}

export default WorkScreen;

const styles = StyleSheet.create({});