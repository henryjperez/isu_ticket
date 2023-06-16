import { TextInput, TextInputProps, TextStyle, StyleSheet } from 'react-native'

interface InputProps extends TextInputProps {
	style?: TextStyle;
}
export const Input = (props: InputProps) => {
	const style = [styles.input, props.style];

	return (
		<TextInput {...{ ...props, style }} />
	)
}

const styles = StyleSheet.create({
	input: {
		fontSize: 16,
		backgroundColor: "yellow",
	},
});