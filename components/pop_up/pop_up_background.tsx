import { useState } from "react";
import { Text, TouchableWithoutFeedback, StyleSheet, View } from 'react-native';

import { useStyles } from "@hooks";

export interface PopUpBackgroundProps {
	onPress: () => void;
	children: JSX.Element;
}
export const PopUpBackground = (props: PopUpBackgroundProps) => {
	const [visible, setVisible] = useState(false);

	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			container: {
				zIndex: 3,
				position: "absolute",
				// bottom: 0,
				height: device.height,
				right: 0,
				left: 0,
				top: (device.height * 0.14) * (-1),
			},
			dim_background: {
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				height: "100%",
				width: "100%",
				justifyContent: "center",
				alignItems: "center",
				flex: 1,
			}
		});
	});

	if (visible) {
		<View onPress={props.onPress} style={styles.container}>
			<View style={styles.dim_background}>
				{props.children}
			</View>
		</View>
	}

	return null;
}
