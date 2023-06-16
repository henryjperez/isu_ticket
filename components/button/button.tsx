import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'

import { Text } from "@components/text";
import { useStyles } from "@hooks";

export interface ButtonProps {
	children: JSX.Element | string;
	style?: ViewStyle;
	width?: string | number;
	height?: string | number;
	onPress?: () => void;
}
export const Button = (props: ButtonProps) => {
	const { height = 50, width = 200 } = props;
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			container: {
				backgroundColor: theme.buttons.background,
				borderRadius: 10,
				justifyContent: "center",
				alignItems: "center",
			},
			text: {
				color: theme.buttons.text,
			}
		});
	}) 
	return (
		<TouchableOpacity onPress={props.onPress} style={[styles.container, { width, height }, props.style]}>
			{
				typeof props.children === "string" ?
				<Text style={styles.text}>{props.children}</Text> : props.children
			}
		</TouchableOpacity>
	)
}