import { useState } from "react";
import { TextInput, TextInputProps, TextStyle, StyleSheet, View, TouchableOpacity } from 'react-native'

import { Icon } from "@components/text";
import { useStyles } from "@hooks";

interface InputProps extends TextInputProps {
	style?: TextStyle;
}
export const Input = (props: InputProps) => {
	const [secureEntry, setSecureEntry] = useState(!!props.secureTextEntry);

	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			input: {
				fontSize: 18,
				color: theme.texts.body,
				height: "100%",
				padding: 10,
				width: "100%",
				paddingLeft: 20,
			},
			container: {
				width: "80%",
				height: 50,
				margin: 2.5,
				maxWidth: 700,
				backgroundColor: theme.body.contrast,
				borderRadius: 10,
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				paddingRight: 40,
			},
		});
	})
	const style = [styles.input, props.style];

	return (
		<View style={styles.container}>
			<TextInput {...{ ...props, style }} secureTextEntry={secureEntry} />
			{
				props.secureTextEntry ?
					(
						<TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
							<Icon family='fw' name={secureEntry ? "eye" : "eye-slash"} size={20} />
						</TouchableOpacity>
					)
				: null
			}
		</View>
	)
}