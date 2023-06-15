import { useWindowDimensions } from "react-native";
// useWindowDimensions vs Dimensions:
// useWindowDimensions is easier to use and updates the values on change

export const useOrientation = () => {
	const { height, width } = useWindowDimensions();
	const isPortrait = height > width;

	return {
		height,
		width,
		isPortrait,
	}
}