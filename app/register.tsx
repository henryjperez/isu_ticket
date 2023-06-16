import { useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { useRouter } from "expo-router";

import { Icon, H2, Input, Button } from "@components";
import { useStyles, useDatabase } from "@hooks";

const RegisterScreen = () => {
	const db = useDatabase();
	const router = useRouter();
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	function handleRegister() {
		db.transaction(tx => {
			tx.executeSql(
				`INSERT INTO users (name, username, password) VALUES ('Test', '${username.trim()}', '${password}');`,
				null,
				(txObject, resultSet) => {
					if (resultSet.insertId) {
						router.push("dashboard");
					}
				},
				(txObject, err) => console.error(err)
				);
		});
	}

	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			page: {
				justifyContent: "center",
				alignItems: "center",
				flex: 1,
				backgroundColor: theme.body.background,
			},
		});
	})
	return (
		<View style={styles.page}>
			<Icon family='material' name="app-registration" size={100} />
			{/* <H2>Register</H2> */}
			<Input placeholder='username' value={username} onChangeText={setUsername} />
			<Input placeholder='password' secureTextEntry value={password} onChangeText={setPassword} />
			<Button style={{width: "80%", margin: 5,}} onPress={handleRegister}>Register</Button>
		</View>
	)
}

export default RegisterScreen;

const styles = StyleSheet.create({});