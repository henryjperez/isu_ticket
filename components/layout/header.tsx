import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@components/text";
import { useStyles } from "@hooks";

export interface HeaderProps {
	rightMenu: () => JSX.Element;
	leftMenu: () => JSX.Element;
	title: string;
}
export const Header = (props: HeaderProps) => {
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			container: {
				justifyContent: "space-around",
				alignItems: "center",
				flexDirection: "row",
				padding: 10,
				backgroundColor: theme.colors.primary,
			},
			title_container: {
				width: "40%",
				justifyContent: "center",
				alignItems: "center",
				fontWeight: "bold",
			},
			button_container: {
				width: "30%",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "row",
			},
			left_container: {
				justifyContent: "flex-start",
			},
			right_container: {
				justifyContent: "flex-end",
			},
		});
	});

	return (
		<SafeAreaView style={styles.container}>
			<View style={[styles.button_container, styles.left_container]}>
				{props.leftMenu()}
			</View>
			<View style={styles.title_container}>
				<Text>{props.title}</Text>
			</View>
			<View style={[styles.button_container, styles.right_container]}>
				{props.rightMenu()}
			</View>
		</SafeAreaView>
	)
}