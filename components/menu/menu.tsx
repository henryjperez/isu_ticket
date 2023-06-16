import { StyleSheet, View } from 'react-native'
import React from 'react'

import { Card } from "@components/card/card";
import { MenuOption } from "./menu_option";

export const Menu = () => {
	return (
		<Card style={styles.position}>
			<View style={[styles.container]}>
				<MenuOption />
				<MenuOption />
				<MenuOption />
			</View>
		</Card>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		flexWrap: "wrap",
		gap: 10,
		justifyContent: "center",
		alignContent: "center",
		paddingVertical: 20,
	},
	position: {
		position: "absolute",
	}
});