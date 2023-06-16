import { StyleSheet, View } from 'react-native'
import React from 'react'

import { Input, Icon, Text, H2, } from "@components";
import { useStyles } from "@hooks";

const LoginScreen = () => {
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
			<H2>Login</H2>
			<Input placeholder='username' />
			<Input placeholder='password' secureTextEntry />
		</View>
	)
}

export default LoginScreen;