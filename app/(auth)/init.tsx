import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";

import { Button, Icon, H1, Text } from "@components";
import { useStyles } from "@hooks";

const Entry = () => {
	const router = useRouter();
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			page: {
				justifyContent: "center",
				alignItems: "center",
				flex: 1,
				backgroundColor: theme.body.background,
			},
			elements: { margin: 2.5, },
		});
	});

	

	function handleLogin() {
		router.push("/(auth)/login");
	}
	function handleRegister() {
		router.push("/(auth)/register");
	}

	

	return (
		<View style={styles.page}>
			<Icon family='fw' size={100} name='ticket' />
			<H1 style={styles.elements}>ISU Ticket</H1>
			<Button onPress={handleLogin} style={styles.elements}>Login</Button>
			<Button onPress={handleRegister} style={styles.elements}>Register</Button>
			<Text>By Henry J. Perez</Text>
		</View>
	)
}

export default Entry;