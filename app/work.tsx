import { StyleSheet, Text, View } from 'react-native'
import { useRouter, useSearchParams } from "expo-router";

import { Button, Card, H1 } from "@components";

const WorkScreen = () => {
	const router = useRouter();
	// const { id } = useSearchParams();
	function handleGetDirections() {
		router.push("directions");
	}

	return (
		<Card>
			<View>
				<H1>Ticket #2</H1>
			</View>
			<View>
				<Card>
					<Button onPress={handleGetDirections}>Get Directions</Button>
				</Card>
				<Card>
					<Button>Get Directions</Button>
				</Card>
			</View>
		</Card>
	)
}

export default WorkScreen;

const styles = StyleSheet.create({});