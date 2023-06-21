import { View, ViewProps, ViewStyle, StyleSheet } from 'react-native'

import { useStyles } from "@hooks";

export interface CardProps extends ViewProps {
	style?: ViewStyle;
}
export const Card = (props: CardProps) => {
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			container: {
				backgroundColor: theme.body.contrast,
				borderRadius: 10,
				padding: 10,
				paddingHorizontal: 20,
			}
		});
	});
	const style = [styles.container, props.style];

	return (
		<View {...{...props, style}}>
			{props.children}
		</View>
	)
}