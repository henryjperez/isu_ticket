import { View, ViewProps, ViewStyle, StyleSheet, Pressable } from 'react-native'

import { useStyles } from "@hooks";

export interface CardProps extends ViewProps {
	style?: ViewStyle;
	onLongPress?: () => void;
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
		<Pressable {...{...props, style}} onLongPress={props.onLongPress}>
			{props.children}
		</Pressable>
	)
}