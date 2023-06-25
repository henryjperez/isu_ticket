import { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from "react-redux";

import { Icon, H2, Input, Button } from "@components";
import { useStyles, useDatabase } from "@hooks";
import { login } from "@store/actions";

const RegisterScreen = () => {
	const db = useDatabase();
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const dispatch = useDispatch();

	function handleRegister() {
		db.transaction(tx => {
			tx.executeSql(
				`INSERT INTO users (name, username, password) VALUES ('Test', '${username.trim()}', '${password}');`,
				// @ts-ignore
				null,
				(txObject, resultSet) => {
					if (resultSet.insertId) {
						dispatch(login());
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