import { useEffect, useState } from "react";
import { StyleSheet, View } from 'react-native'
import { useDispatch } from "react-redux";

import { Input, Icon, H2, Button } from "@components";
import { useStyles, useDatabase, useNotification } from "@hooks";
import { login } from "@store/actions";

const LoginScreen = () => {
	const db = useDatabase();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const showNotification = useNotification();


	function handleLogin() {
		db.transaction(tx => {
			tx.executeSql(
				`SELECT * FROM users WHERE username = '${username.trim()}' AND password = '${password}'`,
				// @ts-ignore
				null,
				(txObject, resultSet) => {
					if (resultSet.rows.length) {
						showNotification({message: "Login Successfully", duration: 500, type: "success"});
						setTimeout(() => {
							dispatch(login());
						}, 500);
					} else {
						showNotification({ message: "User not found", duration: 500, type: "alert" });
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
			
			<Icon family='fw' name="user" size={100} />
			{/* <H2>Login</H2> */}
			<Input placeholder='username' value={username} onChangeText={setUsername} />
			<Input placeholder='password' secureTextEntry value={password} onChangeText={setPassword} />
			<Button style={{width: "80%", margin: 5,}} onPress={handleLogin}>Login</Button>
		</View>
	)
}

export default LoginScreen;