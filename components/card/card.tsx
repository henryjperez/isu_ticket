import { View, ViewProps, ViewStyle, StyleSheet } from 'react-native'

import { useStyles } from "@hooks";

interface CardProps extends ViewProps {
	style?: ViewStyle;
}
export const Card = (props: CardProps) => {
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			container: {
				fontSize: 16,
				backgroundColor: theme.body.contrast,
			}
		});
	});
	const style = [styles.container, props.style];

	return (
		<View {...props}>
			{props.children}
		</View>
	)
}