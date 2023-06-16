import { StyleSheet, Text, View } from 'react-native'

import { Icon, H2, Input } from "@components";
import { useStyles } from "@hooks";

const RegisterScreen = () => {
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
			<H2>Register</H2>
			<Input placeholder='name' />
			<Input placeholder='username' />
			<Input placeholder='password' secureTextEntry />
		</View>
	)
}

export default RegisterScreen;

const styles = StyleSheet.create({});