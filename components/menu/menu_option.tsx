import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { Text } from "@components/text";
import { useStyles } from "@hooks";

export interface MenuOptionProps {
	onPress: () => void;
	children: JSX.Element | string;
}
export const MenuOption = (props: MenuOptionProps) => {
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			item: {
				borderColor: theme.colors.secondary,
				borderTopWidth: 0.5,
				borderBottomWidth: 0.5,
				padding: 10,
			},
			pressable: { width: "100%" }
		});
	});

	return (
		<View style={styles.item}>
			<TouchableOpacity style={styles.pressable} onPress={props.onPress}>
				<Text>{props.children}</Text>
			</TouchableOpacity>
		</View>
	)
}