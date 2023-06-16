import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'
import { Text } from "@components/text";

export interface ButtonProps {
	children: JSX.Element | string;
	style?: ViewStyle;
	width?: string | number;
	height?: string | number;
}
export const Button = (props: ButtonProps) => {
	const { height = 50, width = "100%" } = props;
	return (
		<TouchableOpacity style={[styles.container, { width, height }, props.style]}>
			{
				typeof props.children === "string" ?
				<Text>{props.children}</Text> : props.children
			}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "red",
		height: 50,
	}
});