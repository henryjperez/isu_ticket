import { StyleSheet } from 'react-native';

import { useStyles } from "@hooks";
import { Text, TextProps } from "./text";

interface H1Props extends TextProps {

}
export const H1 = (props: H1Props) => {
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			h1: {
				color: theme.texts.title,
				fontWeight: "bold",
				fontSize: 20,
			}
		});
	});

	return <Text {...props} style={styles.h1} />
}