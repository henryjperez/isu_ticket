import { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Animated } from 'react-native';

import { IconName } from "@interfaces";

interface FlashMessageProps {
	onAnimationEnd: () => void;
	duration: number;
	message: string;
	iconName: IconName;
}
export const FlashMessage = (props: FlashMessageProps) => {
	const viewPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

	useEffect(() => {
		const openAnimation = Animated.timing(viewPosition, {
			toValue: { y: 70, x: 50 },
			useNativeDriver: true,
			duration: 500,
		});
		const endAnimation = Animated.timing(viewPosition, {
			toValue: { y: 0, x: 0 },
			useNativeDriver: true,
			duration: 500,
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
		<Animated.View style={{ backgroundColor: "green", position: "absolute", translateY: viewPosition.y, top: -20 }}>
			<Text>FlashMessage</Text>
		</Animated.View>
	)
}