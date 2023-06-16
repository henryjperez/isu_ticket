import { StyleSheet, Text as Txt, TextProps as TxtProps, TextStyle } from 'react-native'

import { useStyles } from "@hooks";

export interface TextProps extends TxtProps {
	style?: TextStyle;
	color?: string;
}
export const Text = (props: TextProps) => {
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			txt: {
				fontSize: 16,
			}
		});
	});
	const { color = "red" } = props;
	const style = [styles.txt, { color }, props.style];

	return (
		<Txt {...{...props, style}}>{props.children}</Txt>
	)
}