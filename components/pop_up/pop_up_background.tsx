import { Text, TouchableWithoutFeedback, StyleSheet, View } from 'react-native';

import { useStyles } from "@hooks";

export interface PopUpBackgroundProps {
	press?: PopUpPressProp;
	children: JSX.Element;
	visible?: boolean;
	onPress?: () => void;
}
export interface PopUpPressProp {
	visible: boolean;
	action: () => void;
	styles?: boolean;
}
export const PopUpBackground = ({ children, press, visible, onPress }: PopUpBackgroundProps) => {

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
				flex: 1,
			},
			dim_background: {
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				height: "100%",
				width: "100%",
				justifyContent: "center",
				alignItems: "center",
				flex: 1,
			},
			wrapper: {
				width: "100%",
				position: "absolute",
				// bottom: 0,
				height: device.height,
				right: 0,
				left: 0,
				top: (device.height * 0.14) * (-1),
				zIndex: 3,
			}
		});
	});

	if (press?.visible || visible) {
		return (
			<TouchableWithoutFeedback onPress={press?.action ?? onPress} style={styles.wrapper}>
				<View style={press?.styles || visible ? styles.container : null}>
					<View style={press?.styles || visible ? styles.dim_background : null}>
						{children}
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}

	return null;
}
