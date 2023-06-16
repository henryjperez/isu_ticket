import { StyleSheet, Text as Txt, TextProps as TxtProps, TextStyle } from 'react-native'

export interface TextProps extends TxtProps {
	style?: TextStyle;
	color?: string;
}
export const Text = (props: TextProps) => {
	const { color = "red" } = props;
	const style = [styles.txt, { color }, props.style];

	return (
		<Txt {...{...props, style}}>{props.children}</Txt>
	)
}

const styles = StyleSheet.create({
	txt: {
		fontSize: 16,
	}
});