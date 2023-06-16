import { useRef, useEffect } from "react";
import { StyleSheet, View, Animated } from 'react-native';

import { useStyles } from "@hooks";
import { IconName } from "@interfaces";
import { Text } from "@components/text";

interface FlashMessageProps {
	onAnimationEnd: () => void;
	duration: number;
	message: string;
	iconName: IconName;
	type?: "success" | "alert" | "info" | "error";
}
export const FlashMessage = (props: FlashMessageProps) => {
	const { duration = 700, message = "", type = "info" } = props;
	const styles = useStyles((theme, device) => {
		return StyleSheet.create({
			container: {
				borderRadius: 10,
				padding: 10,
				position: "absolute",
				zIndex: 10,
				right: "20%",
				left: "20%",
			},
			success: {backgroundColor: theme.notifications.success},
			alert: {backgroundColor: theme.notifications.alert},
			info: {backgroundColor: theme.notifications.info},
			error: {backgroundColor: theme.notifications.error},

			text: {
				color: "white",
			}
		});
	});
	const viewPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

	useEffect(() => {
		const openAnimation = Animated.timing(viewPosition, {
			toValue: { y: 80, x: 50 },
			useNativeDriver: true,
			duration,
		});
		const endAnimation = Animated.timing(viewPosition, {
			toValue: { y: 0, x: 0 },
			useNativeDriver: true,
			duration,
		});

		openAnimation.start(() => {
			setTimeout(() => {
				endAnimation.start(() => {
					// openAnimation.reset();
					// endAnimation.reset();
					props?.onAnimationEnd?.();
				});
			}, 3000);
		});
	}, []);

	return (
		<Animated.View style={[{ translateY: viewPosition.y, top: -70 }, styles.container, styles[type]]}>
			<Text>{message}</Text>
		</Animated.View>
	)
}