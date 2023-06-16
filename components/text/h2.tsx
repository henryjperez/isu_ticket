import { StyleSheet } from 'react-native';

import { useStyles } from "@hooks";
import { Text, TextProps } from "./text";

interface H2Props extends TextProps {

}
export const H2 = (props: H2Props) => {
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			h2: {
				color: theme.texts.title,
				fontWeight: "bold",
			}
		});
	});

	return <Text {...props} style={styles.h2} />
}