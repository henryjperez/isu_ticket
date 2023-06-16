import { StyleSheet, View } from 'react-native'
import React from 'react'

import { Card } from "@components/card/card";

export interface MenuProps {
	children: JSX.Element[] | JSX.Element | null;
}
export const Menu = (props: MenuProps) => {
	return (
		<Card style={styles.position}>
			<View style={[styles.container]}>
				{props.children}
			</View>
		</Card>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		flexWrap: "wrap",
		justifyContent: "center",
		alignContent: "center",
		padding: 10,
	},
	position: {
		position: "absolute",
		top: "100%",
		marginTop: 15,
		right: -5
	}
});